import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { eventArticles } from "@/data/eventArticles";

export default function EventRelatedReading({ slugs, title }: { slugs: string[]; title: string }) {
  const items = slugs.map(s => eventArticles.find(a => a.slug === s)).filter(Boolean) as typeof eventArticles;
  if (!items.length) return null;
  return (
    <section id="related-reading" aria-labelledby="related-reading-title" className="container mx-auto px-4 max-w-5xl py-12">
      <h2 id="related-reading-title" className="font-heading text-2xl md:text-3xl font-extrabold mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(a => (
          <Link key={a.slug} to={`/blog/${a.slug}`} className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
            <p className="font-heading font-bold mb-2 group-hover:text-primary">{a.h1}</p>
            <p className="text-sm text-muted-foreground mb-3">{a.description}</p>
            <span className="text-sm text-primary font-semibold inline-flex items-center">Read the guide <ArrowRight className="w-4 h-4 ml-1" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
