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
      pageSnippet = text.slice(0, 4000);
    } catch (e) {
      fetchError = e instanceof Error ? e.message : 'unknown';
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY missing');

    const systemPrompt = `You are an expert AI Visibility / Answer Engine Optimisation (AEO) auditor for Sri Lankan businesses. You analyse whether a website is likely to be cited or recommended by ChatGPT, Gemini, Perplexity, and Claude. Be specific, candid, and useful.`;

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

Return STRICTLY this JSON structure (no markdown):
{
  "overallScore": number (0-100),
  "rating": "Poor" | "Weak" | "Average" | "Good" | "Excellent",
  "summary": "2-3 sentence plain-English summary",
  "platformScores": {
    "chatgpt": number (0-100),
    "gemini": number (0-100),
    "perplexity": number (0-100),
    "claude": number (0-100)
  },
  "strengths": [3-5 short bullet strings],
  "weaknesses": [3-5 short bullet strings],
  "recommendations": [5-7 specific actionable recommendations],
  "quickWins": [3 fastest highest-impact actions]
}`;

    const aiResp = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' },
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

    // Store lead with service role to bypass RLS for full insert with result
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    await admin.from('ai_visibility_leads').insert({
      name, email, phone, company, website: normalisedUrl, industry: industry ?? null, result,
    });

    return new Response(JSON.stringify({ result, website: normalisedUrl }), {
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