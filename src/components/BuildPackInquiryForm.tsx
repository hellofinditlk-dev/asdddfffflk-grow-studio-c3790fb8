import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import type { BuildPackPage } from "@/data/buildPackPages";
import { buildPackDetails, buildPackInquiryMessage, type BuildPackInquiry } from "@/lib/buildPackInquiry";
import { openTrackedWhatsapp } from "@/lib/contactNavigation";
import { supabase } from "@/integrations/supabase/client";

const emptyForm = (): BuildPackInquiry => ({ name: "", company: "", email: "", phone: "", message: "", details: {} });

export default function BuildPackInquiryForm({ page }: { page: BuildPackPage }) {
  const [form, setForm] = useState(emptyForm);
  const [busy, setBusy] = useState(false);
  const setBasic = (key: "name" | "company" | "email" | "phone" | "message", value: string) => setForm(current => ({ ...current, [key]: value }));
  const setDetail = (key: string, value: string | string[]) => setForm(current => ({ ...current, details: { ...current.details, [key]: value } }));
  const prefix = `pack-${page.id}`;
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy) return;
    if (!form.name.trim() || !form.phone.trim()) { toast.error("Please fill in your name and phone number"); return; }
    setBusy(true);
    const message = buildPackInquiryMessage(page, form);
    try {
      const { error } = await supabase.from("inquiries").insert({
        name: form.name.trim(), email: form.email.trim() || null, phone: form.phone.trim(), message,
        service: page.service, source_path: window.location.pathname + window.location.search,
        extra: { cta: page.submit, placement: page.hero.title, company: form.company.trim() || null, ...buildPackDetails(page, form.details), ...(document.referrer ? { referrer: document.referrer } : {}) },
      });
      if (error) throw error;
    } catch { toast.error("Could not save your inquiry. Please try again."); setBusy(false); return; }
    try {
      const opened = await openTrackedWhatsapp(`https://wa.me/94701772626?text=${encodeURIComponent(message)}`, page.submit, `${page.service} form`);
      if (opened) { setForm(emptyForm()); toast.success("Opening WhatsApp…"); }
    } finally { setBusy(false); }
  };
  return <form aria-label={`${page.service} inquiry form`} onSubmit={handleSubmit} className="space-y-5">
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="space-y-2"><Label htmlFor={`${prefix}-name`}>Name *</Label><Input id={`${prefix}-name`} name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={e => setBasic("name", e.target.value)} /></div>
      <div className="space-y-2"><Label htmlFor={`${prefix}-company`}>{page.companyLabel}</Label><Input id={`${prefix}-company`} name="company" autoComplete="organization" maxLength={150} value={form.company} onChange={e => setBasic("company", e.target.value)} /></div>
      <div className="space-y-2"><Label htmlFor={`${prefix}-email`}>Email</Label><Input id={`${prefix}-email`} name="email" type="email" autoComplete="email" maxLength={255} value={form.email} onChange={e => setBasic("email", e.target.value)} /></div>
      <div className="space-y-2"><Label htmlFor={`${prefix}-phone`}>Phone/WhatsApp *</Label><Input id={`${prefix}-phone`} name="phone" type="tel" autoComplete="tel" required maxLength={20} value={form.phone} onChange={e => setBasic("phone", e.target.value)} /></div>
    </div>
    {page.fields.map(field => {
      const id = `${prefix}-${field.key}`;
      const value = form.details[field.key];
      if (field.type === "multi") return <fieldset key={id} className="space-y-3"><legend className="text-sm font-medium mb-3">{field.label}</legend><div className="grid sm:grid-cols-2 gap-3">{field.options?.map((option, index) => {
        const selected = Array.isArray(value) ? value : [];
        return <div key={option} className="flex items-center gap-2"><Checkbox id={`${id}-${index}`} checked={selected.includes(option)} onCheckedChange={checked => setDetail(field.key, checked === true ? [...selected, option] : selected.filter(item => item !== option))} /><Label htmlFor={`${id}-${index}`} className="text-sm leading-snug cursor-pointer">{option}</Label></div>;
      })}</div></fieldset>;
      return <div key={id} className="space-y-2"><Label htmlFor={id}>{field.label}</Label>{field.type === "select"
        ? <select id={id} name={field.key} value={typeof value === "string" ? value : ""} onChange={e => setDetail(field.key, e.target.value)} className="h-10 w-full rounded-md border border-input bg-background text-foreground px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="">Select…</option>{field.options?.map(option => <option key={option}>{option}</option>)}</select>
        : <Input id={id} name={field.key} type={field.type} min={field.type === "number" ? 1 : undefined} maxLength={field.type === "text" || field.type === "url" ? 300 : undefined} value={typeof value === "string" ? value : ""} onChange={e => setDetail(field.key, e.target.value)} />}</div>;
    })}
    <div className="space-y-2"><Label htmlFor={`${prefix}-message`}>Message</Label><Textarea id={`${prefix}-message`} name="message" maxLength={1000} value={form.message} onChange={e => setBasic("message", e.target.value)} className="min-h-[120px]" /></div>
    <Button size="lg" type="submit" disabled={busy} className="w-full max-sm:w-[calc(100%-4rem)] bg-cta text-cta-foreground hover:bg-cta/90 border-none font-semibold"><Send aria-hidden="true" />{busy ? "Saving…" : page.submit}</Button>
  </form>;
}