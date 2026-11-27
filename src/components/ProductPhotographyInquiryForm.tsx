import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { openTrackedWhatsapp } from "@/lib/contactNavigation";
import { buildProductPhotographyMessage, type ProductPhotographyInquiry } from "@/lib/productPhotographyInquiry";
import { useWhatsappNumber } from "@/lib/whatsapp";

const initialForm: ProductPhotographyInquiry = {
  name: "",
  brand: "",
  email: "",
  phone: "",
  numberOfProducts: "",
  shootType: "Not sure",
  socialMediaInterest: "Maybe",
  message: "",
};

const fieldClass = "bg-background border-input";

export default function ProductPhotographyInquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [busy, setBusy] = useState(false);
  const whatsappNumber = useWhatsappNumber();
  const update = (field: keyof ProductPhotographyInquiry, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setBusy(true);
    const detailedMessage = buildProductPhotographyMessage(form);
    try {
      const ref = typeof document !== "undefined" ? document.referrer || null : null;
      const { error } = await supabase.from("inquiries").insert({
        name: form.name.trim(),
        email: form.email.trim() || null,
        phone: form.phone.trim(),
        message: detailedMessage,
        service: "Product Photography",
        source_path: typeof window !== "undefined" ? window.location.pathname + window.location.search : null,
        extra: {
          cta: "Product Shoot Quote Form",
          placement: "Product Photography Sri Lanka",
          brand: form.brand.trim() || null,
          numberOfProducts: form.numberOfProducts.trim() || null,
          shootType: form.shootType,
          interestedInSocialMediaManagement: form.socialMediaInterest,
          ...(ref ? { referrer: ref } : {}),
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Failed to save product photography inquiry", error);
      toast.error("Could not save your inquiry. Please try again.");
      setBusy(false);
      return;
    }

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(detailedMessage)}`;
    const opened = await openTrackedWhatsapp(waUrl, "Get my quote", "Product Photography quote form");
    setBusy(false);
    if (!opened) return;
    toast.success("Opening WhatsApp...");
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Product shoot quote form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="product-name">Name *</Label>
          <Input id="product-name" autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} maxLength={100} required className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product-brand">Brand / company</Label>
          <Input id="product-brand" autoComplete="organization" value={form.brand} onChange={(event) => update("brand", event.target.value)} maxLength={150} className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product-email">Email</Label>
          <Input id="product-email" type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} maxLength={255} className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product-phone">Phone/WhatsApp *</Label>
          <Input id="product-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} maxLength={30} required className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product-count">Number of products</Label>
          <Input id="product-count" type="number" min="1" max="10000" inputMode="numeric" value={form.numberOfProducts} onChange={(event) => update("numberOfProducts", event.target.value)} className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product-shoot-type">Shoot type</Label>
          <select id="product-shoot-type" value={form.shootType} onChange={(event) => update("shootType", event.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
            {["White background", "Lifestyle", "Flat lay", "Video", "Not sure"].map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="product-social-interest">Interested in social media management too?</Label>
        <select id="product-social-interest" value={form.socialMediaInterest} onChange={(event) => update("socialMediaInterest", event.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
          {["Yes", "No", "Maybe"].map((option) => <option key={option}>{option}</option>)}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="product-message">Message</Label>
        <Textarea id="product-message" value={form.message} onChange={(event) => update("message", event.target.value)} maxLength={1500} className="min-h-[120px] bg-background border-input" />
      </div>
      <Button type="submit" disabled={busy} className="w-full bg-cta text-cta-foreground hover:bg-cta/90 border-none font-semibold">
        <Send className="w-4 h-4" /> {busy ? "Saving…" : "Get my quote"}
      </Button>
    </form>
  );
}
