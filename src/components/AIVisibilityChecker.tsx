import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Sparkles, Loader2, CheckCircle2, AlertCircle, TrendingUp, Lightbulb, Zap } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  company: z.string().trim().min(2, "Enter your company name").max(150),
  website: z.string().trim().min(4, "Enter your website").max(255),
  industry: z.string().trim().max(100).optional().or(z.literal("")),
});

type CheckerResult = {
  overallScore: number;
  rating: string;
  summary: string;
  platformScores: { chatgpt: number; gemini: number; perplexity: number; claude: number };
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  quickWins: string[];
};

const scoreColor = (s: number) =>
  s >= 75 ? "text-emerald-500" : s >= 50 ? "text-amber-500" : "text-rose-500";
const barColor = (s: number) =>
  s >= 75 ? "bg-emerald-500" : s >= 50 ? "bg-amber-500" : "bg-rose-500";

const AIVisibilityChecker = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckerResult | null>(null);
  const [website, setWebsite] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", website: "", industry: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Please check the form";
      toast({ title: "Invalid input", description: first, variant: "destructive" });
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("ai-visibility-check", {
        body: parsed.data,
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(data.result);
      setWebsite(data.website);
      toast({ title: "Audit ready", description: "Your AI Visibility report is below." });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast({ title: "Audit failed", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="free-checker" className="py-16 lg:py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" /> Free Tool
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Free AI Visibility Checker
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find out instantly how your website performs on ChatGPT, Gemini, Perplexity & Claude. 100% free — get a personalised AI visibility score and action plan in under 60 seconds.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="website">Your Website *</Label>
                <Input id="website" placeholder="example.lk or https://example.lk" value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone (WhatsApp) *</Label>
                <Input id="phone" type="tel" placeholder="+94 7X XXX XXXX" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="industry">Industry (optional)</Label>
                <Input id="industry" placeholder="e.g. Real Estate, Healthcare, Restaurant" value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })} className="mt-1" />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" disabled={loading}
                  className="w-full bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] border-none h-12 rounded-xl font-semibold text-sm shadow-[0_0_24px_hsl(25_95%_53%/0.3)]">
                  {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Analysing your website…</>)
                    : (<><Sparkles className="w-4 h-4" /> Check My AI Visibility — Free</>)}
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  By submitting you agree to be contacted with your free report. No spam.
                </p>
              </div>
            </form>
          </div>

          {result && (
            <div className="mt-10 space-y-6 animate-fade-up">
              <div className="bg-foreground rounded-2xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">AI Visibility Report</p>
                    <p className="font-heading text-xl md:text-2xl font-bold break-all">{website}</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-5xl md:text-6xl font-extrabold ${scoreColor(result.overallScore)}`}>
                      {result.overallScore}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{result.rating}</div>
                  </div>
                </div>
                <p className="mt-4 text-white/80 leading-relaxed">{result.summary}</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(result.platformScores).map(([k, v]) => (
                  <div key={k} className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold capitalize text-foreground">{k}</span>
                      <span className={`text-lg font-extrabold ${scoreColor(v)}`}>{v}</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div className={`h-full ${barColor(v)} transition-all`} style={{ width: `${v}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Strengths</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {result.strengths?.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-rose-600">
                    <AlertCircle className="w-5 h-5" />
                    <h3 className="font-bold text-foreground">Weaknesses</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {result.weaknesses?.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Zap className="w-5 h-5" />
                  <h3 className="font-bold text-foreground">Quick Wins (Start Here)</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  {result.quickWins?.map((s, i) => <li key={i}>{i + 1}. {s}</li>)}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-foreground">Full Recommendations</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {result.recommendations?.map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
              </div>

              <div className="text-center bg-foreground rounded-2xl p-6 text-white">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-heading text-xl font-bold mb-2">Want us to implement this for you?</h3>
                <p className="text-white/70 text-sm mb-4 max-w-xl mx-auto">
                  Our team can implement every recommendation and grow your AI visibility across ChatGPT, Gemini & Perplexity.
                </p>
                <Button asChild className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] border-none h-11 rounded-xl px-6 font-semibold">
                  <a href={`https://wa.me/94701772626?text=${encodeURIComponent("Hi, I just used the AI Visibility Checker for " + website + ". I want to discuss next steps.")}`}
                    target="_blank" rel="noopener noreferrer">Talk to an Expert on WhatsApp</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIVisibilityChecker;