import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface InquiryFormProps {
  service?: string;
}

const InquiryForm = ({ service }: InquiryFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    try {
      const ref = typeof document !== "undefined" ? document.referrer || null : null;
      await supabase.from("inquiries").insert({
        name: form.name.trim(),
        email: form.email.trim() || null,
        phone: form.phone.trim(),
        message: form.message.trim() || null,
        service: service || "General Inquiry",
        source_path: typeof window !== "undefined" ? window.location.pathname : null,
        extra: ref ? { referrer: ref } : null,
      });
    } catch (err) {
      console.error("Failed to save inquiry", err);
    }

    const message = [
      `Hi, I'm ${form.name}.`,
      form.email ? `Email: ${form.email}` : "",
      `Phone: ${form.phone}`,
      form.message ? `\n${form.message}` : "",
      service ? `\nI'm interested in ${service} services.` : "",
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/94701772626?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp...");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Your Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-background/50 border-border"
        maxLength={100}
        required
      />
      <Input
        placeholder="Email Address"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-background/50 border-border"
        maxLength={255}
      />
      <Input
        placeholder="Phone Number *"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-background/50 border-border"
        maxLength={20}
        required
      />
      <Textarea
        placeholder={`Tell us about your ${service || "marketing"} needs...`}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-background/50 border-border min-h-[100px]"
        maxLength={1000}
      />
      <Button
        type="submit"
        className="w-full bg-gradient-primary font-semibold shadow-glow hover:opacity-90 transition-opacity"
        style={{ color: "white" }}
      >
        <Send className="w-4 h-4 mr-2" />
        Send via WhatsApp
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <MessageCircle className="w-3.5 h-3.5" />
        via WhatsApp
      </p>
    </form>
  );
};

export default InquiryForm;
