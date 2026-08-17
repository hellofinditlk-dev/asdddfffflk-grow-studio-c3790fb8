import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { videos, creatives } from "@/data/work-samples";

interface OurWorkSectionProps {
  service?: string;
  /** "preview" = compact scroll rail, "full" = complete portfolio grid */
  variant?: "preview" | "full";
}

const OurWorkSection = ({ service = "digital marketing", variant = "preview" }: OurWorkSectionProps) => {
  const wa = `https://wa.me/94701772626?text=${encodeURIComponent(
    `Hi, I saw your work samples and I need ${service} for my business`,
  )}`;

  if (variant === "preview") {
    return (
      <section className="py-12 border-y border-border bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* compact header row */}
          <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-1">Our Portfolio</p>
              <h2 className="font-heading text-xl md:text-2xl font-extrabold text-foreground leading-tight">
                Real work we've delivered for Sri Lankan brands
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                {videos.length} video samples · {creatives.length} campaign creatives · 200+ brands
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/our-work"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                View full portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* one compact horizontal rail: video thumbs + creatives */}
          <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:thin]">
            {videos.slice(0, 4).map((v) => (
              <Link
                key={v.id}
                to="/our-work"
                aria-label={v.title}
                className="group relative shrink-0 snap-start w-[104px] sm:w-[120px] aspect-[9/16] rounded-xl overflow-hidden border border-border bg-card"
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 text-primary-foreground" />
                  </span>
                </span>
              </Link>
            ))}
            {creatives.slice(0, 10).map((c) => (
              <Link
                key={c.src}
                to="/our-work"
                aria-label={c.alt}
                className="group shrink-0 snap-start w-[104px] sm:w-[120px] aspect-square rounded-xl overflow-hidden border border-border bg-card"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm font-semibold border-none transition-colors"
            >
              Get work like this on WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 lg:py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-heading text-xl md:text-2xl font-extrabold text-foreground mb-2 flex items-center gap-2">
          <Play className="w-4 h-4 text-primary" /> Video &amp; Reel Production
        </h2>
        <p className="text-sm text-muted-foreground mb-5">Short-form video and reels produced in-house.</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {videos.map((v) => (
            <div key={v.id} className="rounded-xl overflow-hidden border border-border bg-card">
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

        <h2 className="font-heading text-xl md:text-2xl font-extrabold text-foreground mb-2">
          Campaign Creatives &amp; Designs
        </h2>
        <p className="text-sm text-muted-foreground mb-5">Hover any design to see the campaign it belongs to.</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {creatives.map((c) => (
            <figure
              key={c.src}
              className="group relative overflow-hidden rounded-xl border border-border bg-card aspect-square"
            >
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-2 text-[10px] leading-snug text-white bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {c.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm font-semibold border-none transition-colors"
          >
            Get work like this on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
