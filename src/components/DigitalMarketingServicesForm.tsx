import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { marketingServiceOptions } from "@/data/digitalMarketingServices";
import { buildMarketingPlanMessage, selectedMarketingServices, type MarketingPlanInquiry } from "@/lib/digitalMarketingServicesInquiry";
import { openWhatsappAfterSavedForm } from "@/lib/contactNavigation";
import { supabase } from "@/integrations/supabase/client";

const initialForm: MarketingPlanInquiry = { name: "", company: "", email: "", phone: "", services: [], message: "" };

export default function DigitalMarketingServicesForm() {
  const [form, setForm] = useState(initialForm);
  const [busy, setBusy] = useState(false);
  const update = (field: "name" | "company" | "email" | "phone" | "message", value: string) => setForm(current => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy) return;
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setBusy(true);
    const message = buildMarketingPlanMessage(form);
    try {
      const { error } = await supabase.from("inquiries").insert({
        name: form.name.trim(), email: form.email.trim() || null, phone: form.phone.trim(),
        message, service: "Digital Marketing Services",
        source_path: window.location.pathname + window.location.search,
        extra: { cta: "Get my plan", placement: "Digital Marketing Services Sri Lanka", company: form.company.trim() || null, servicesInterestedIn: selectedMarketingServices(form.services), ...(document.referrer ? { referrer: document.referrer } : {}) },
      });
      if (error) throw error;
    } catch {
      toast.error("Could not save your inquiry. Please try again.");
      setBusy(false);
      return;
    }
    try {
      const opened = await openWhatsappAfterSavedForm(`https://wa.me/94701772626?text=${encodeURIComponent(message)}`, "Get my plan", "Digital Marketing Services form");
      if (opened) { toast.success("Opening WhatsApp…"); setForm(initialForm); }
    } finally { setBusy(false); }
  };

  return <form onSubmit={handleSubmit} aria-label="Marketing plan form" className="space-y-5">
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-2"><Label htmlFor="plan-name">Name *</Label><Input id="plan-name" name="name" autoComplete="name" maxLength={100} required value={form.name} onChange={event => update("name", event.target.value)} /></div>
      <div className="space-y-2"><Label htmlFor="plan-company">Company</Label><Input id="plan-company" name="company" autoComplete="organization" maxLength={150} value={form.company} onChange={event => update("company", event.target.value)} /></div>
      <div className="space-y-2"><Label htmlFor="plan-email">Email</Label><Input id="plan-email" name="email" type="email" autoComplete="email" maxLength={255} value={form.email} onChange={event => update("email", event.target.value)} /></div>
      <div className="space-y-2"><Label htmlFor="plan-phone">Phone/WhatsApp *</Label><Input id="plan-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} required value={form.phone} onChange={event => update("phone", event.target.value)} /></div>
    </div>
    <fieldset className="space-y-3"><legend className="text-sm font-medium mb-3">Services interested in</legend>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {marketingServiceOptions.map((option, index) => <div className="flex items-center gap-2" key={option}>
          <Checkbox id={`plan-service-${index}`} checked={form.services.includes(option)} onCheckedChange={checked => setForm(current => ({ ...current, services: selectedMarketingServices(checked === true ? [...current.services, option] : current.services.filter(value => value !== option)) }))} />
          <Label htmlFor={`plan-service-${index}`} className="text-sm leading-snug cursor-pointer">{option}</Label>
        </div>)}
      </div>
    </fieldset>
    <div className="space-y-2"><Label htmlFor="plan-message">Message</Label><Textarea id="plan-message" name="message" maxLength={1000} value={form.message} onChange={event => update("message", event.target.value)} className="min-h-[120px]" /></div>
    <Button type="submit" disabled={busy} size="lg" className="w-full max-sm:w-[calc(100%-4rem)] bg-cta text-cta-foreground hover:bg-cta/90 border-none font-semibold"><Send aria-hidden="true" />{busy ? "Saving…" : "Get my plan"}</Button>
  </form>;
}