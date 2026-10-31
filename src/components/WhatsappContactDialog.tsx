import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { whatsappContactSchema, type WhatsappRequest } from "@/lib/whatsappContact";
import { recordBeforeOpening } from "@/lib/contactNavigation";
import { trackCtaClick } from "@/lib/trackCtaClick";

export default function WhatsappContactDialog() {
  const [request, setRequest] = useState<WhatsappRequest | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const listen = (event: Event) => {
      const next = (event as CustomEvent<WhatsappRequest>).detail;
      setRequest(previous => { previous?.resolve(false); return next; });
      setError("");
    };
    window.addEventListener("whatsapp-contact-request", listen);
    return () => window.removeEventListener("whatsapp-contact-request", listen);
  }, []);
  const close = () => { if (busy) return; request?.resolve(false); setRequest(null); };
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!request || busy) return;
    const parsed = whatsappContactSchema.safeParse(form);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message || "Check your details"); return; }
    setBusy(true); setError("");
    const current = request;
    const saved = await recordBeforeOpening(async () => {
      const { data, error: saveError } = await supabase.functions.invoke("whatsapp-inquiry", { body: { ...parsed.data, href: current.href,
        source_path: window.location.pathname, label: current.label.slice(0, 120), placement: current.placement.slice(0, 200), referrer: document.referrer.slice(0, 1000), website_check: "" } });
      if (saveError || !data?.success) { setError("Could not save your details. Please try again."); return false; }
      // The inquiry is the authoritative saved lead; click analytics must not lose it.
      await trackCtaClick({ ctaType: "whatsapp", ctaLabel: current.label, placement: current.placement, href: current.href });
      return true;
    }, current.href, true);
    setBusy(false);
    if (saved) { current.resolve(true); setRequest(null); setForm({ name: "", email: "", phone: "" }); }
  };
  return <Dialog open={Boolean(request)} onOpenChange={open => { if (!open) close(); }}><DialogContent className="max-w-md max-h-[90dvh] overflow-y-auto">
    <DialogHeader><DialogTitle>Continue on WhatsApp</DialogTitle><DialogDescription>Share your contact details so we can follow up on your inquiry.</DialogDescription></DialogHeader>
    <form onSubmit={submit} className="space-y-4">
      <div><Label htmlFor="wa-contact-name">Name</Label><Input id="wa-contact-name" autoComplete="name" required maxLength={100} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
      <div><Label htmlFor="wa-contact-phone">Phone number</Label><Input id="wa-contact-phone" type="tel" autoComplete="tel" required maxLength={30} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
      <div><Label htmlFor="wa-contact-email">Email</Label><Input id="wa-contact-email" type="email" autoComplete="email" required maxLength={255} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <p className="text-xs text-muted-foreground">Your details and the page you contacted us from will be saved for this inquiry. WhatsApp opens after saving; no message is sent automatically.</p>
      <Button type="submit" disabled={busy} className="w-full"><MessageCircle className="mr-2 h-4 w-4" />{busy ? "Saving…" : "Save and open WhatsApp"}</Button>
    </form>
  </DialogContent></Dialog>;
}