import { Link } from "react-router-dom";
import { Sparkles, Bot, ArrowRight, MapPin, CheckCircle } from "lucide-react";

/**
 * Reusable internal-link card highlighting our free AI Visibility Checker.
 * Drop into service pages to build internal links to /ai-visibility-sri-lanka
 * with descriptive anchor text.
 */
const AIVisibilityHighlightCard = () => (
  <section className="py-12 md:py-16 bg-background" aria-label="Free AI visibility checker Sri Lanka">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/8 via-background to-accent/8 overflow-hidden shadow-[0_20px_60px_-30px_hsl(252,65%,55%,0.35)]">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 p-6 md:p-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <MapPin className="h-3.5 w-3.5" /> Unique to Sri Lanka · Free tool
            </div>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
              Free AI Visibility Checker Sri Lanka
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Run an instant <Link to="/ai-visibility-sri-lanka" className="text-primary font-semibold hover:underline">AI visibility check Sri Lanka</Link> businesses can trust — see how ChatGPT, Gemini, Perplexity and Claude describe your brand and where competitors get cited instead.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> Instant AI visibility score</li>
              <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> ChatGPT, Gemini & Perplexity</li>
              <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> Sri Lankan market focus</li>
              <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> 100% free — no signup</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl bg-card border border-border p-5">
              <div className="flex items-center gap-2 mb-1">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-foreground">First of its kind in Sri Lanka</span>
              </div>
              <p className="text-xs text-muted-foreground">Built specifically for Sri Lankan SMEs to track brand mentions across leading AI assistants.</p>
            </div>
            <Link
              to="/ai-visibility-sri-lanka"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(25,95%,53%)] !text-white px-5 h-12 text-sm font-bold shadow-md hover:bg-[hsl(25,95%,45%)] transition-colors border-none"
            >
              <Sparkles className="h-4 w-4" /> Run Free AI Visibility Check
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AIVisibilityHighlightCard;