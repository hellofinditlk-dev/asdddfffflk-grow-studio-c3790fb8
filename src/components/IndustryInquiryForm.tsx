import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, MessageCircle } from "lucide-react";
import type { IndustryFormField } from "@/data/industries";
import { supabase } from "@/integrations/supabase/client";

interface IndustryInquiryFormProps {
  fields: IndustryFormField[];
  ctaButtonText: string;
  serviceName: string;
}

const IndustryInquiryForm = ({ fields, ctaButtonText, serviceName }: IndustryInquiryFormProps) => {
  const [form, setForm] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim() || !form.phone?.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    const extra: Record<string, string> = {};
    fields
      .filter((f) => !["name", "email", "phone", "message"].includes(f.name) && form[f.name]?.trim())
      .forEach((f) => {
        extra[f.placeholder.replace(" *", "")] = form[f.name];
      });

    try {
      await supabase.from("inquiries").insert({
        name: form.name.trim(),
        email: form.email?.trim() || null,
        phone: form.phone.trim(),
        message: form.message?.trim() || null,
        service: serviceName,
        source_path: typeof window !== "undefined" ? window.location.pathname : null,
        extra: Object.keys(extra).length ? extra : null,
      });
    } catch (err) {
      console.error("Failed to save inquiry", err);
    }

    const lines = [
      `Hi, I'm ${form.name}.`,
      form.email ? `Email: ${form.email}` : "",
      `Phone: ${form.phone}`,
      ...fields
        .filter((f) => !["name", "email", "phone", "message"].includes(f.name) && form[f.name]?.trim())
        .map((f) => `${f.placeholder.replace(" *", "")}: ${form[f.name]}`),
      form.message ? `\n${form.message}` : "",
      `\nI'm interested in ${serviceName} services.`,
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/94701772626?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp...");
    setForm(Object.fromEntries(fields.map((f) => [f.name, ""])));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) =>
        field.name === "message" ? (
          <Textarea
            key={field.name}
            placeholder={field.placeholder}
            value={form[field.name] || ""}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="bg-background/50 border-border min-h-[100px]"
            maxLength={1000}
          />
        ) : (
          <Input
            key={field.name}
            placeholder={field.placeholder}
            type={field.type || "text"}
            value={form[field.name] || ""}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="bg-background/50 border-border"
            maxLength={field.type === "email" ? 255 : 100}
            required={field.required}
          />
        )
      )}
      <Button
        type="submit"
        className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
      >
        <Send className="w-4 h-4 mr-2" />
        {ctaButtonText}
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <MessageCircle className="w-3.5 h-3.5" />
        via WhatsApp
      </p>
    </form>
  );
};

export default IndustryInquiryForm;
