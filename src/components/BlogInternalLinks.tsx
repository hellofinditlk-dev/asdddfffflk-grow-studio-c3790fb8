import { Link } from "react-router-dom";
import { ArrowRight, Link2 } from "lucide-react";
import { anchorFor, clusterForSlug } from "@/data/internal-link-map";

/**
 * Contextual internal-link block rendered near the end of every blog article.
 * Passes authority upward from the article inventory into the commercial pages,
 * using varied anchor text per article.
 */
const BlogInternalLinks = ({ slug }: { slug: string }) => {
  const cluster = clusterForSlug(slug);
  const pillarAnchor = anchorFor(cluster.pillar, slug);

  // De-duplicate in case a shared target appears twice, and cap at 4 supporting links.
  const seen = new Set([cluster.pillar.to]);
  const services = cluster.services.filter((s) => {
    if (seen.has(s.to)) return false;
    seen.add(s.to);
    return true;
  }).slice(0, 4);

  return (
    <section className="max-w-2xl mx-auto px-4 mt-12">
      <div className="rounded-2xl border border-border bg-muted/30 p-6">
        <div className="flex items-center gap-2 mb-2">
          <Link2 className="w-4 h-4 text-primary" />
          <h2 className="font-heading text-lg font-bold text-foreground">{cluster.heading}</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cluster.intro}</p>

        <Link
          to={cluster.pillar.to}
          className="block rounded-xl border border-primary/30 bg-primary/5 p-4 mb-4 hover:border-primary/60 transition-colors group"
        >
          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">Main service</span>
          <span className="block font-heading text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
            {pillarAnchor}
          </span>
          <span className="block text-xs text-muted-foreground mt-1 leading-relaxed">{cluster.pillar.note}</span>
        </Link>

        <ul className="grid sm:grid-cols-2 gap-3">
          {services.map((s, i) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className="block h-full rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors group"
              >
                <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                  {anchorFor(s, slug, i + 1)} <ArrowRight className="w-3 h-3" />
                </span>
                <span className="block text-xs text-muted-foreground mt-1 leading-relaxed">{s.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogInternalLinks;
