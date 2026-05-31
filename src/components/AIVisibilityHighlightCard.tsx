import { Link } from "react-router-dom";
import { Sparkles, Bot, ArrowRight, CheckCircle } from "lucide-react";

/**
 * Reusable internal-link card highlighting our free AI Visibility Checker.
 * Drop into service pages to build internal links to /ai-visibility-sri-lanka
 * with descriptive anchor text.
 */
const AIVisibilityHighlightCard = () => (
  <section className="py-14 md:py-20 bg-background relative" aria-label="Free AI visibility checker Sri Lanka">
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-5xl rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/15 via-background to-[hsl(25,95%,53%)]/15 overflow-hidden shadow-[0_30px_80px_-20px_hsl(252,65%,55%,0.55)]">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-[hsl(25,95%,53%)]/30 blur-3xl" aria-hidden="true" />
        <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 p-6 md:p-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(25,95%,53%)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider !text-white shadow-lg animate-pulse">
              <Sparkles className="h-3.5 w-3.5" /> New · 100% Free Tool
            </div>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Is Your Business <span className="text-primary">Visible on ChatGPT</span> & Gemini?
            </h2>
            <p className="mt-4 text-sm md:text-base text-foreground/80 leading-relaxed">
              Run an instant <Link to="/ai-visibility-sri-lanka" className="text-primary font-semibold hover:underline">AI visibility check Sri Lanka</Link> businesses can trust — see how ChatGPT, Gemini, Perplexity and Claude describe your brand and where competitors get cited instead.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2.5 text-sm">
              <li className="flex items-center gap-2 text-foreground/90 font-medium"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> Instant AI visibility score</li>
              <li className="flex items-center gap-2 text-foreground/90 font-medium"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> ChatGPT, Gemini & Perplexity</li>
              <li className="flex items-center gap-2 text-foreground/90 font-medium"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> Results in 60 seconds</li>
              <li className="flex items-center gap-2 text-foreground/90 font-medium"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> 100% free — no signup</li>
            </ul>
            <div className="mt-6 md:hidden">
              <Link
                to="/ai-visibility-sri-lanka"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(25,95%,53%)] !text-white px-5 h-14 text-base font-bold shadow-lg hover:bg-[hsl(25,95%,45%)] transition-colors border-none"
              >
                <Sparkles className="h-5 w-5" /> Run Free AI Check
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="rounded-2xl bg-card border-2 border-primary/20 p-5 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Free AI Visibility Audit</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Track your brand mentions across ChatGPT, Gemini, Perplexity and Claude — completely free.</p>
              <div className="flex items-center justify-between text-[11px] font-semibold">
                <span className="text-muted-foreground">Your AI Score</span>
                <span className="text-primary text-lg font-extrabold">?? / 100</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-primary to-[hsl(25,95%,53%)] animate-pulse" />
              </div>
            </div>
            <Link
              to="/ai-visibility-sri-lanka"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(25,95%,53%)] !text-white px-5 h-14 text-base font-bold shadow-lg hover:bg-[hsl(25,95%,45%)] hover:scale-[1.02] transition-all border-none"
            >
              <Sparkles className="h-5 w-5" /> Run Free AI Visibility Check
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AIVisibilityHighlightCard;