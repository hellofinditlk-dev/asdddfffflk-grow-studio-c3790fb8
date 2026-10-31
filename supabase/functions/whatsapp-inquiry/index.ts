import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d\s().-]+$/).refine(v => v.replace(/\D/g, '').length >= 7),
  href: z.string().url().max(12000).refine(v => { const u = new URL(v); return u.protocol === 'https:' && ['wa.me', 'api.whatsapp.com', 'wa.link'].includes(u.hostname); }),
  source_path: z.string().max(600).regex(/^\/(?!\/)[^?#]*$/),
  label: z.string().trim().max(120), placement: z.string().trim().max(200),
  referrer: z.string().max(1000), website_check: z.string().max(0),
});
Deno.serve(async req => {
  const respond = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return respond({ error: 'Method not allowed' }, 405);
  try {
    const raw = await req.text();
    if (raw.length > 16000) return respond({ error: 'Request too large' }, 413);
    const parsed = schema.safeParse(JSON.parse(raw));
    if (!parsed.success) return respond({ error: 'Please check your name, email and phone number.' }, 400);
    const d = parsed.data;
    const url = Deno.env.get('SUPABASE_URL'), key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!url || !key) return respond({ error: 'Contact saving is unavailable.' }, 503);
    const db = createClient(url, key);
    const { count, error: lookupError } = await db.from('inquiries').select('id', { count: 'exact', head: true }).eq('email', d.email).gte('created_at', new Date(Date.now() - 60000).toISOString());
    if (lookupError) return respond({ error: 'Contact saving is unavailable.' }, 503);
    if ((count ?? 0) >= 3) return respond({ error: 'Please wait a minute before sending another request.' }, 429);
    const destination = new URL(d.href);
    const draft = destination.searchParams.get('text') || null;
    const { error } = await db.from('inquiries').insert({ name: d.name, email: d.email, phone: d.phone,
      message: draft, service: d.label || 'WhatsApp inquiry', source_path: d.source_path,
      extra: { channel: d.source_path === '/white-label-design' ? 'white-label' : 'whatsapp', cta: d.label, placement: d.placement, referrer: d.referrer || null, href: d.href, status: 'contact_saved_before_whatsapp' } });
    if (error) return respond({ error: 'Could not save your inquiry. Please try again.' }, 500);
    return respond({ success: true });
  } catch { return respond({ error: 'Please check your contact details and try again.' }, 400); }
});