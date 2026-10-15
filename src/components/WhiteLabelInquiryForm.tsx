import { useState } from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { trackCtaClick } from '@/lib/trackCtaClick';
import { z } from 'zod';

const briefSchema = z.object({
  agency: z.string().trim().min(2, 'Enter your agency name.').max(150),
  website: z.string().trim().url('Enter a full website URL, including https://.').max(500).refine(value => /^https?:\/\//i.test(value), 'Use an http or https website.'),
  country: z.string().trim().min(2, 'Enter your country.').max(80),
  email: z.string().trim().email('Enter an email so we can deliver your samples.').max(255),
  monthly_volume: z.coerce.number().int().min(1, 'Enter at least 1 creative.').max(10000),
  message: z.string().trim().min(10, 'Please add a little more detail to your brief.').max(2000),
  website_check: z.string().max(0),
});

export default function WhiteLabelInquiryForm({ inspiration }: { inspiration: string }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;
    const parsed = briefSchema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));
    if (!parsed.success) { setError(parsed.error.issues[0]?.message || 'Check your brief.'); return; }
    const values = parsed.data;
    setPending(true); setError('');
    try {
      const { data, error: sendError } = await supabase.functions.invoke('white-label-inquiry', {
        body: { ...values, inspiration, source_path: window.location.pathname + window.location.search, referrer: document.referrer },
      });
      if (sendError || !data?.success) throw new Error('Your brief could not be saved. Please try again or contact us on WhatsApp.');
      await trackCtaClick({ ctaType: 'form', ctaLabel: 'Agency brief submitted', placement: 'White label · Agency brief' });
      const message = `Hi Cypher Partners, I submitted a white-label agency brief.\nAgency: ${values.agency}\nWebsite: ${values.website}\nCountry: ${values.country}\nCreatives per month: ${values.monthly_volume}\n${inspiration ? `Work reference: ${inspiration}\n` : ''}Brief: ${values.message}`;
      setWhatsapp(`https://wa.me/94701772626?text=${encodeURIComponent(message)}`);
      setSent(true);
    } catch (err) { setError(err instanceof Error ? err.message : 'Please try again.'); }
    finally { setPending(false); }
  };
  if (sent) return <div className="wl-form-success" role="status">
    <CheckCircle2 size={32} /><h3>Your agency brief is with our team.</h3>
    <p>Continue the conversation on WhatsApp and share your brand guide or reference files.</p>
    <Button asChild className="wl-button wl-whatsapp"><a href={whatsapp} target="_blank" rel="noopener noreferrer" data-cta-placement="White label · Brief confirmation"><MessageCircle size={18} /> Continue on WhatsApp</a></Button>
  </div>;
  return <form className="wl-inquiry-form" onSubmit={submit}>
    <h3>Tell us about your agency</h3>
    <div className="wl-fields">
      <label>Agency name<Input name="agency" autoComplete="organization" required minLength={2} maxLength={150} /></label>
      <label>Agency website<Input name="website" type="url" autoComplete="url" placeholder="https://youragency.com" required maxLength={500} /></label>
      <label>Country<Input name="country" autoComplete="country-name" required minLength={2} maxLength={80} /></label>
      <label>Work email<Input name="email" type="email" autoComplete="email" required maxLength={255} /></label>
    </div>
    <label>Creatives needed per month<Input name="monthly_volume" type="number" min={1} max={10000} step={1} required placeholder="e.g. 20" /></label>
    {inspiration && <p className="wl-reference">Selected work: {inspiration}</p>}
    <label>Your client / creative brief<Textarea name="message" placeholder="Client industry, brand style, formats and monthly volume…" required minLength={10} maxLength={2000} /></label>
    <input name="website_check" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    {error && <p role="alert">{error}</p>}
    <Button type="submit" disabled={pending} className="wl-button wl-13">{pending ? 'Sending your brief…' : 'Send me 3 free samples'}<ArrowRight size={18} /></Button>
  </form>;
}