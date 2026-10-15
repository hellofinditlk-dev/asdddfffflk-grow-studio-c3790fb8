import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  agency: z.string().trim().min(2).max(150),
  country: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d\s().-]+$/),
  requirement: z.string().trim().min(2).max(100),
  message: z.string().trim().min(10).max(2000),
  inspiration: z.string().max(200).optional(),
  website_check: z.string().max(0).optional(),
  source_path: z.string().max(600).optional(),
  referrer: z.string().max(1000).optional(),
});

Deno.serve(async req => {
  const respond = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
    status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return respond({ error: 'Method not allowed' }, 405);
  try {
    if (Number(req.headers.get('content-length') ?? 0) > 12000) return respond({ error: 'Brief too large' }, 413);
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return respond({ error: 'Please check your contact details and brief.' }, 400);
    const data = parsed.data;
    const url = Deno.env.get('SUPABASE_URL');
    const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!url || !key) return respond({ error: 'Enquiries are temporarily unavailable.' }, 503);
    const db = createClient(url, key);
    const sourcePath = data.source_path?.startsWith('/white-label-design?') ? data.source_path : '/white-label-design';
    const { error } = await db.from('inquiries').insert({
      name: data.name, email: data.email, phone: data.phone,
      service: 'White Label Design · Agency Partners', source_path: sourcePath,
      message: data.message,
      extra: { channel: 'white-label', agency: data.agency, country: data.country,
        requirement: data.requirement, inspiration: data.inspiration || null,
        referrer: data.referrer || null, cta: 'Agency brief form', placement: 'White label · Free samples' },
    });
    if (error) return respond({ error: 'Could not save your brief. Please try again.' }, 500);
    return respond({ success: true });
  } catch {
    return respond({ error: 'Could not send your brief. Please try again.' }, 500);
  }
});