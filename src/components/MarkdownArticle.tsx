import { Link } from "react-router-dom";
import { Fragment, type ReactNode } from "react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

interface Props {
  slug: string;
  markdown: string;
  title: string;
  h1: string;
  description: string;
  category: string;
  date: string;
  related: { href: string; label: string }[];
}

const SITE = "https://cypherdigital.lk";

function inline(text: string, key = 0): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*\[([^\]]+)\]\(([^)]+)\)\*\*|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const label = m[1] ?? m[3];
    const href = m[2] ?? m[4];
    const k = `${key}-${i++}`;
    if (label && href) {
      const local = href.startsWith(SITE) ? href.slice(SITE.length) || "/" : null;
      const cls = `text-primary underline ${m[1] ? "font-bold" : "font-semibold"}`;
      out.push(
        local ? <Link key={k} to={local} className={cls}>{label}</Link>
          : <a key={k} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>,
      );
    } else out.push(<strong key={k}>{m[5]}</strong>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function render(md: string): ReactNode[] {
  const lines = md.split("\n");
  const nodes: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i].trim();
    if (!l || /^\[PHOTO/i.test(l) || l === "---") { i++; continue; }
    if (l.startsWith("## ")) nodes.push(<h2 key={i} className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">{l.slice(3)}</h2>);
    else if (l.startsWith("### ")) nodes.push(<h3 key={i} className="font-heading text-lg font-bold mt-6 mb-2">{l.slice(4)}</h3>);
    else if (l.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const r = lines[i].trim();
        if (!/^\|[\s:|-]+\|$/.test(r)) rows.push(r.slice(1, -1).split("|").map((c) => c.trim()));
        i++;
      }
      const [head, ...body] = rows;
      nodes.push(
        <div key={i} className="overflow-x-auto my-5 not-prose">
          <table className="w-full text-sm border border-border">
            <thead className="bg-secondary"><tr>{head.map((c, j) => <th key={j} className="text-left p-3 font-bold">{inline(c)}</th>)}</tr></thead>
            <tbody>{body.map((r, ri) => <tr key={ri} className="border-t border-border">{r.map((c, j) => <td key={j} className="p-3 align-top">{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    } else if (/^(- |\d+\. )/.test(l)) {
      const ordered = /^\d+\./.test(l);
      const items: string[] = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(- (\[[ x]\] )?|\d+\. )/, ""));
        i++;
      }
      const Tag = ordered ? "ol" : "ul";
      nodes.push(<Tag key={i} className={`${ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2 my-4`}>{items.map((t, j) => <li key={j}>{inline(t, j)}</li>)}</Tag>);
      continue;
    } else nodes.push(<p key={i} className="my-4 leading-relaxed">{inline(l, i)}</p>);
    i++;
  }
  return nodes;
}

function faqs(md: string) {
  const sec = md.split(/^## Frequently asked questions/m)[1]?.split(/^## /m)[0] ?? "";
  return sec.split(/^### /m).slice(1).map((b) => {
    const [q, ...rest] = b.split("\n");
    return { q: q.trim(), a: rest.join(" ").replace(/\*\*|\[|\]\([^)]+\)/g, "").replace(/\s+/g, " ").trim() };
  });
}

const MarkdownArticle = ({ slug, markdown, title, h1, description, category, date, related }: Props) => {
  const url = `${SITE}/blog/${slug}`;
  const faq = faqs(markdown);
  const schema = [
    { "@context": "https://schema.org", "@type": "Article", headline: h1, description, datePublished: date, dateModified: date, mainEntityOfPage: url, author: { "@type": "Organization", name: "Cypher Digital" }, publisher: { "@type": "Organization", name: "Cypher Digital", url: SITE } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: h1, item: url },
    ] },
    ...(faq.length ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
  ];
  return (
    <>
      <SEOHead title={title} description={description} canonical={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: h1 }]} />
      <article className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <div className="flex gap-2 mb-4 flex-wrap items-center">
                <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">{category}</span>
                <span className="text-[11px] text-muted-foreground py-1">By Cypher Digital · {date}</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{h1}</h1>
              <Link to="/careers/graphic-designer-jobs-sri-lanka" className="inline-block mt-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
                View graphic designer jobs in Sri Lanka →
              </Link>
            </header>
            <div className="text-foreground">{render(markdown).map((n, k) => <Fragment key={k}>{n}</Fragment>)}</div>
            <aside className="mt-12 bg-card border border-border rounded-lg p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Related articles</div>
              <div className="space-y-2">
                {related.map((r) => <Link key={r.href} to={r.href} className="block text-sm text-primary font-semibold hover:underline">{r.label}</Link>)}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default MarkdownArticle;
