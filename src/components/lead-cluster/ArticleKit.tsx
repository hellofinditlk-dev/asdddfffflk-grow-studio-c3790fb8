import { Link } from "react-router-dom";
import { ReactNode } from "react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { ArrowRight, Lightbulb } from "lucide-react";

export const SERVICE_URL = "/lead-follow-up-services-sri-lanka";
const SITE = "https://cypherdigital.lk";
const PUBLISHED = "2026-09-24";

export interface Faq { q: string; a: string }

interface ShellProps {
  slug: string;
  metaTitle: string;
  description: string;
  h1: string;
  crumb: string;
  category: string;
  readMins: number;
  intro: ReactNode;
  faqs: Faq[];
  ctaHeading: string;
  children: ReactNode;
  related: { to: string; label: string }[];
}

export const ArticleShell = ({ slug, metaTitle, description, h1, crumb, category, readMins, intro, faqs, ctaHeading, children, related }: ShellProps) => {
  const url = `${SITE}/blog/${slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: h1,
      description,
      mainEntityOfPage: url,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@type": "Organization", name: "Cypher Digital Editorial Team", url: SITE },
      publisher: { "@type": "Organization", name: "Cypher Digital", url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <SEOHead title={metaTitle} description={description} canonical={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: crumb }]} />
      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-3 items-center text-xs text-muted-foreground">
                <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">{category}</span>
                <time dateTime={PUBLISHED}>September 24, 2026</time>
                <span>·</span>
                <span>{readMins} min read</span>
                <span>·</span>
                <span>By the Cypher Digital Editorial Team</span>
              </div>
              <h1 className="font-heading text-2xl md:text-4xl font-extrabold mt-2 mb-4 leading-tight">{h1}</h1>
              <div className="text-base text-muted-foreground leading-relaxed space-y-3">{intro}</div>
            </header>

            <div className="text-muted-foreground leading-relaxed space-y-5 text-[15px]">
              {children}

              <H2>Frequently asked questions</H2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group border border-border rounded-lg bg-card p-4">
                    <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between gap-3">
                      {f.q}<span className="text-primary group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-2 text-sm">{f.a}</p>
                  </details>
                ))}
              </div>

              <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 md:p-8 mt-12">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{ctaHeading}</h2>
                <p className="text-sm mb-5">If your business is generating enquiries but your sales team does not have enough time to contact every prospect, Cypher Digital can help with the initial lead follow-up and qualification process. We call your leads, understand what they need, note their feedback and hand your team a structured list with the next step for each prospect.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={SERVICE_URL} className="inline-flex items-center justify-center gap-2 bg-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,45%)] !text-white font-semibold text-sm px-5 py-3 rounded-md border-none">
                    Explore Lead Follow-Up Services in Sri Lanka <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="https://wa.me/94771437707" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#25D366] !text-white font-semibold text-sm px-5 py-3 rounded-md border-none hover:opacity-90">
                    WhatsApp 077 143 7707
                  </a>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="font-heading text-lg font-bold text-foreground mb-3">Related reading</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {related.map((r) => (
                    <li key={r.to}><Link to={r.to} className="text-primary font-semibold hover:underline">{r.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export const H2 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="font-heading text-xl md:text-2xl font-bold text-foreground mt-10 mb-2">{children}</h2>
);
export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-heading text-lg font-bold text-foreground mt-6 mb-1">{children}</h3>
);
export const A = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="text-primary font-semibold hover:underline">{children}</Link>
);
export const UL = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-1.5">{items.map((i, k) => <li key={k}>{i}</li>)}</ul>
);

export const Flow = ({ steps, label }: { steps: string[]; label?: string }) => (
  <figure className="my-8 rounded-xl border border-border bg-card p-5" aria-label={label ?? "Process diagram"}>
    {label && <figcaption className="text-xs font-bold uppercase tracking-wider text-primary mb-4">{label}</figcaption>}
    <ol className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2">
      {steps.map((s, i) => (
        <li key={s} className="flex md:inline-flex items-center gap-2">
          <span className="flex items-center gap-2 rounded-lg bg-primary/10 text-foreground text-sm font-semibold px-3 py-2 w-full md:w-auto">
            <span className="w-6 h-6 shrink-0 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">{i + 1}</span>
            {s}
          </span>
          {i < steps.length - 1 && <ArrowRight className="hidden md:block w-4 h-4 text-primary shrink-0" />}
        </li>
      ))}
    </ol>
  </figure>
);

export const Callout = ({ title, children }: { title: string; children: ReactNode }) => (
  <aside className="my-6 rounded-xl border-l-4 border-primary bg-primary/5 p-5">
    <p className="flex items-center gap-2 font-semibold text-foreground mb-1"><Lightbulb className="w-4 h-4 text-primary" />{title}</p>
    <div className="text-sm">{children}</div>
  </aside>
);

export const DataTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="my-6 overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-sm">
      <thead className="bg-primary/10 text-foreground">
        <tr>{head.map((h) => <th key={h} className="text-left font-semibold px-4 py-3">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-border even:bg-muted/30">
            {r.map((c, j) => <td key={j} className={`px-4 py-3 align-top ${j === 0 ? "font-semibold text-foreground" : ""}`}>{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const MidCTA = ({ text }: { text: string }) => (
  <div className="my-8 rounded-xl border border-border bg-muted/40 p-5">
    <p className="text-sm font-semibold text-foreground mb-1">{text}</p>
    <p className="text-sm mb-3">Share how many enquiries you receive each week and where they come from. We will explain how a first-call follow-up could fit your sales process.</p>
    <a href="https://wa.me/94771437707" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] !text-white font-bold text-sm px-5 py-2.5 rounded-md border-none hover:opacity-90">WhatsApp 077 143 7707</a>
  </div>
);
