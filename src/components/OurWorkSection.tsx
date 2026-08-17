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
    const previewItems = [
      ...videos.slice(0, 4).map((v) => ({ type: "video" as const, data: v })),
      ...creatives.slice(0, 8).map((c) => ({ type: "creative" as const, data: c })),
    ];
    const rows = [previewItems.slice(0, 4), previewItems.slice(4, 8), previewItems.slice(8, 12)];

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
                Video samples, campaign creatives and brand work produced in-house.
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

          {/* 3-row compact gallery */}
          <div className="flex flex-col gap-3">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-3">
                {row.map((item) =>
                  item.type === "video" ? (
                    <Link
                      key={item.data.id}
                      to="/our-work"
                      aria-label={item.data.title}
                      className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-border bg-card"
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${item.data.id}/hqdefault.jpg`}
                        alt={item.data.title}
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
                  ) : (
                    <Link
                      key={item.data.src}
                      to="/our-work"
                      aria-label={item.data.alt}
                      className="group aspect-square rounded-xl overflow-hidden border border-border bg-card"
                    >
                      <img
                        src={item.data.src}
                        alt={item.data.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  ),
                )}
              </div>
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
        {/* header */}
        <div className="mb-8 md:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">Our Portfolio</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-2">
            Real work we've delivered for Sri Lankan brands
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Video production, reels, campaign creatives and behind-the-scenes content for education, retail, travel, logistics and hospitality.
          </p>
        </div>

        {/* Behind the scenes — highlighted row */}
        <div className="mb-10">
          <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
              <Play className="w-3 h-3" />
            </span>
            Behind the scenes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {videos
              .filter((v) => v.category === "Behind the scenes")
              .map((v) => (
                <div
                  key={v.id}
                  className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
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
                  <p className="px-3 py-2 text-xs font-medium text-foreground truncate">{v.title}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Production videos */}
        <div className="mb-10">
          <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
              <Play className="w-3 h-3" />
            </span>
            Video &amp; reel production
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {videos
              .filter((v) => v.category === "Production")
              .map((v) => (
                <div
                  key={v.id}
                  className="rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
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
                  <p className="px-3 py-2 text-[11px] font-medium text-foreground truncate">{v.title}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Campaign creatives — 3-4 column grid */}
        <div className="mb-10">
          <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-3">
            Campaign creatives &amp; designs
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {creatives.map((c) => (
              <figure
                key={c.src}
                className="group relative overflow-hidden rounded-xl border border-border bg-card aspect-square shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-2.5 text-[11px] leading-snug text-white bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {c.alt}
                </figcaption>
              </figure>
            ))}
          </div>
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
