import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const body = await req.json();
    const { name, email, phone, company, website, industry } = body ?? {};

    if (!name || !email || !phone || !company || !website) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Normalise website
    let normalisedUrl = String(website).trim();
    if (!/^https?:\/\//i.test(normalisedUrl)) normalisedUrl = 'https://' + normalisedUrl;

    // Extract bare host (no www) for duplicate detection
    let host = '';
    try {
      host = new URL(normalisedUrl).hostname.replace(/^www\./i, '').toLowerCase();
    } catch {
      host = normalisedUrl.toLowerCase();
    }
    const normalisedEmail = String(email).trim().toLowerCase();

    // Duplicate guard: one email may only audit one website (and one website per email)
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: existing, error: dupErr } = await admin
      .from('ai_visibility_leads')
      .select('email, website')
      .or(`email.ilike.${normalisedEmail},website.ilike.%${host}%`)
      .limit(20);
    if (dupErr) console.error('dup check error', dupErr);

    if (existing && existing.length) {
      const emailUsed = existing.some((r: any) => (r.email || '').toLowerCase() === normalisedEmail);
      const siteUsed = existing.some((r: any) => {
        try {
          const h = new URL(r.website).hostname.replace(/^www\./i, '').toLowerCase();
          return h === host;
        } catch { return false; }
      });
      if (emailUsed || siteUsed) {
        const msg = emailUsed && siteUsed
          ? 'This email and website have already been audited. Each email can only audit one website. Please contact us on WhatsApp for a deeper custom audit.'
          : emailUsed
            ? 'This email has already been used for an AI Visibility audit. Each email is limited to one website. Please WhatsApp us for additional audits.'
            : 'This website has already been audited. Please WhatsApp us for an updated or deeper audit.';
        return new Response(JSON.stringify({ error: msg }), {
          status: 409,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Try to fetch the website HTML (best-effort)
    let pageSnippet = '';
    let pageTitle = '';
    let metaDescription = '';
    let hasSchema = false;
    let fetchError = '';
    try {
      const r = await fetch(normalisedUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 CypherDigital AI Visibility Checker' },
        signal: AbortSignal.timeout(8000),
      });
      const html = (await r.text()).slice(0, 60000);
      pageTitle = (html.match(/<title>([^<]*)<\/title>/i)?.[1] || '').trim();
      metaDescription = (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] || '').trim();
      hasSchema = /application\/ld\+json/i.test(html);
      // Strip tags for snippet
      const text = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      pageSnippet = text.slice(0, 1500);
    } catch (e) {
      fetchError = e instanceof Error ? e.message : 'unknown';
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY missing');

    const systemPrompt = `You are a concise AI Visibility (AEO) auditor for Sri Lankan SMEs. Be brief. Output only short bullet points. Do not write long paragraphs.`;

    const userPrompt = `Analyse this business for AI Visibility readiness.

Company: ${company}
Industry: ${industry || 'not specified'}
Website: ${normalisedUrl}
Page Title: ${pageTitle || 'N/A'}
Meta Description: ${metaDescription || 'N/A'}
Has JSON-LD Schema: ${hasSchema}
Fetch Error: ${fetchError || 'none'}

Homepage text snippet:
"""
${pageSnippet || '(could not fetch content)'}
"""

Return STRICTLY this JSON (no markdown, keep every string under 12 words):
{
  "overallScore": number (0-100),
  "rating": "Poor" | "Weak" | "Average" | "Good" | "Excellent",
  "summary": "1 short sentence",
  "platformScores": { "chatgpt": number, "gemini": number, "perplexity": number, "claude": number },
  "strengths": [2 short bullets],
  "weaknesses": [2 short bullets],
  "quickWins": [2 short bullets]
}`;

    const aiResp = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-lite',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' },
        max_tokens: 600,
      }),
    });

    if (!aiResp.ok) {
      const t = await aiResp.text();
      console.error('AI gateway error', aiResp.status, t);
      if (aiResp.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit hit. Try again shortly.' }), { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      if (aiResp.status === 402) {
        return new Response(JSON.stringify({ error: 'AI credits exhausted. Please contact us.' }), { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      throw new Error('AI gateway error');
    }

    const aiJson = await aiResp.json();
    const content = aiJson?.choices?.[0]?.message?.content ?? '{}';
    let result: any;
    try { result = JSON.parse(content); } catch { result = { raw: content }; }

    // Store lead (admin client already created above for dup check)
    await admin.from('ai_visibility_leads').insert({
      name, email: normalisedEmail, phone, company, website: normalisedUrl, industry: industry ?? null, result,
    });

    // Return a LIMITED teaser to customers (full report kept in DB for admin / WhatsApp follow-up)
    const teaser = {
      overallScore: result?.overallScore,
      rating: result?.rating,
      summary: result?.summary,
      platformScores: result?.platformScores,
      strengths: Array.isArray(result?.strengths) ? result.strengths.slice(0, 2) : [],
      weaknesses: Array.isArray(result?.weaknesses) ? result.weaknesses.slice(0, 2) : [],
      quickWins: Array.isArray(result?.quickWins) ? result.quickWins.slice(0, 1) : [],
      locked: true,
      lockedMessage: 'Full recommendations, detailed action plan, and competitor comparison are unlocked after a free WhatsApp consultation.',
    };

    return new Response(JSON.stringify({ result: teaser, website: normalisedUrl }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('ai-visibility-check error', e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});