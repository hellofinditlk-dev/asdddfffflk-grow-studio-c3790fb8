import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface JobApplicationFormProps {
  positionTitle: string;
  positionSlug: string;
}

const JobApplicationForm = ({ positionTitle, positionSlug }: JobApplicationFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", portfolio: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please add your name and phone number");
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("job_applications").insert({
        name: form.name.trim().slice(0, 100),
        email: form.email.trim().slice(0, 255) || null,
        phone: form.phone.trim().slice(0, 30),
        position_title: positionTitle,
        position_slug: positionSlug,
        experience: form.experience.trim().slice(0, 200) || null,
        portfolio_link: form.portfolio.trim().slice(0, 500) || null,
        message: form.message.trim().slice(0, 2000) || null,
        source_path: typeof window !== "undefined" ? window.location.pathname : null,
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
      });
      if (error) throw error;

      const waMessage = [
        `Hi, I'd like to apply for the ${positionTitle} role.`,
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        form.email ? `Email: ${form.email}` : "",
        form.experience ? `Experience: ${form.experience}` : "",
        form.portfolio ? `Portfolio/CV: ${form.portfolio}` : "",
        form.message ? `\n${form.message}` : "",
      ].filter(Boolean).join("\n");

      window.open(`https://wa.me/94701772626?text=${encodeURIComponent(waMessage)}`, "_blank", "noopener,noreferrer");
      toast.success("Application received — opening WhatsApp so you can send your CV.");
      setForm({ name: "", email: "", phone: "", experience: "", portfolio: "", message: "" });
    } catch (err: any) {
      toast.error("Could not submit your application. Please WhatsApp us instead.");
      console.error("Failed to save application", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <Input placeholder="Full Name *" value={form.name} maxLength={100} required
          onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-background/60" />
        <Input placeholder="Phone (WhatsApp) *" type="tel" value={form.phone} maxLength={30} required
          onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-background/60" />
        <Input placeholder="Email Address" type="email" value={form.email} maxLength={255}
          onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-background/60" />
        <Input placeholder="Years of experience" value={form.experience} maxLength={200}
          onChange={(e) => setForm({ ...form, experience: e.target.value })} className="bg-background/60" />
      </div>
      <Input placeholder="Portfolio / CV / LinkedIn link" value={form.portfolio} maxLength={500}
        onChange={(e) => setForm({ ...form, portfolio: e.target.value })} className="bg-background/60" />
      <Textarea placeholder="Short intro — why you're a good fit" value={form.message} rows={3} maxLength={2000}
        onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-background/60" />
      <Button type="submit" disabled={submitting}
        className="w-full bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
        <Send className="w-4 h-4 mr-2" /> {submitting ? "Submitting..." : `Apply for ${positionTitle}`}
      </Button>
      <p className="text-xs text-muted-foreground">
        Applying for <strong className="text-foreground">{positionTitle}</strong>. We reply within 24 hours on WhatsApp.
      </p>
    </form>
  );
};

export default JobApplicationForm;
