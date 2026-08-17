import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { videos, creatives } from "@/data/work-samples";

interface OurWorkSectionProps {
  service?: string;
  /** "preview" shows a teaser grid with a link to the full portfolio, "full" shows everything */
  variant?: "preview" | "full";
}

const OurWorkSection = ({ service = "digital marketing", variant = "preview" }: OurWorkSectionProps) => {
  const wa = `https://wa.me/94701772626?text=${encodeURIComponent(
    `Hi, I saw your work samples and I need ${service} for my business`,
  )}`;

  const shownVideos = variant === "full" ? videos : videos.slice(0, 3);
  const shownCreatives = variant === "full" ? creatives : creatives.slice(0, 6);

  return (
    <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-[hsl(25,95%,53%)]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" /> Our Portfolio
          </span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Real Work We've Delivered for Sri Lankan Brands
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto leading-relaxed">
          Videos, reels and campaign creatives produced by our in-house team for education, retail, travel,
          logistics and hospitality brands. See the quality before you decide.
        </p>

        {variant === "preview" && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { k: `${videos.length}+`, v: "Video & reel samples" },
            { k: `${creatives.length}+`, v: "Campaign creatives" },
            { k: "200+", v: "Brands served" },
          ].map((s) => (
            <div key={s.v} className="bg-card border border-border rounded-2xl px-5 py-3 text-center">
              <div className="font-heading text-xl font-extrabold text-primary leading-none">{s.k}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
        )}

        <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Play className="w-4 h-4 text-primary" /> Video &amp; Reel Production
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {shownVideos.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-lg font-bold text-foreground mb-4">Campaign Creatives &amp; Designs</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shownCreatives.map((c) => (
            <figure
              key={c.src}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[11px] leading-snug text-white bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {c.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {variant === "preview" && (
            <Button asChild size="lg" variant="outline" className="rounded-xl h-12 px-7 font-semibold">
              <Link to="/our-work">
                View Full Portfolio <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          )}
          <Button
            asChild
            size="lg"
            className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] rounded-xl h-12 px-7 font-semibold border-none"
          >
            <a href={wa} target="_blank" rel="noopener noreferrer">
              Get Work Like This on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
