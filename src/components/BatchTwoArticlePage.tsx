import { useEffect } from "react";
import { Link } from "react-router-dom";
import NewSeoHead from "@/components/NewSeoHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { newSeoPages } from "@/data/new-seo-pages";
import { markdownHtml, splitSeoMarkdown } from "@/lib/newSeoMarkdown";
import "@/styles/new-seo-pages.css";

interface Props {
  path: string;
  markdown: string;
  image: string;
  category: string;
  cta: { title: string; body: string; path: string; label: string };
}

/** Used only by the additive Batch 2 wrappers; existing article templates remain untouched. */
export default function BatchTwoArticlePage({ path, markdown, image, category, cta }: Props) {
  useEffect(() => { document.querySelector('script[data-new-page-schema]')?.remove(); }, []);
  const page = newSeoPages.find(entry => entry.path === path);
  if (!page) return null;
  const content = splitSeoMarkdown(markdown);
  const canonical = `https://cypherdigital.lk${path}`;
  const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: content.h1, description: page.description, mainEntityOfPage: canonical, datePublished: "2026-10-25", dateModified: "2026-10-25", author: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" }, publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: content.faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://cypherdigital.lk/blog" },
      { "@type": "ListItem", position: 3, name: page.breadcrumbLabel, item: canonical },
    ] },
  ];
  const related = Array.from(markdown.matchAll(/\[([^\]]+)\]\((\/blog\/[^)]+)\)/g)).map(match => ({ label: match[1], path: match[2] })).filter((item, index, all) => all.findIndex(other => other.path === item.path) === index).slice(0, 3);
  return <div className="new-seo-page">
    <NewSeoHead page={page} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: page.breadcrumbLabel }]} />
    <article className="pt-24 pb-20"><div className="container mx-auto px-4"><div className="max-w-2xl mx-auto">
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-4">
          <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">{category}</span>
          <time dateTime="2026-10-25">October 25, 2026</time>
          <span>· {Math.ceil(markdown.split(/\s+/).length / 200)} min read · By Cypher Digital</span>
        </div>
        <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-3 mb-6 leading-tight">{content.h1}</h1>
        <img src={image} alt={page.heroAlt} width={1536} height={1024} className="w-full aspect-video object-cover rounded-lg mb-6" />
        <div className="new-seo-copy" dangerouslySetInnerHTML={{ __html: markdownHtml(content.intro) }} />
      </header>
      <nav aria-label="On this page" className="border-y border-border py-6 mb-10"><h2 className="font-heading font-bold mb-3">On this page</h2><ol className="space-y-2 text-sm">{content.sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="text-primary">{section.title}</a></li>)}</ol></nav>
      <div className="space-y-10">{content.sections.map(section => <section key={section.id} id={section.id} className="scroll-mt-24">
        <h2 className="font-heading text-xl font-bold mb-4">{section.title}</h2>
        {section.title === "Frequently Asked Questions" ? <Accordion type="single" collapsible>{content.faqs.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`}><AccordionTrigger className="text-left">{faq.q}</AccordionTrigger><AccordionContent forceMount className="data-[state=closed]:hidden"><div className="new-seo-copy" dangerouslySetInnerHTML={{ __html: markdownHtml(faq.a) }} /></AccordionContent></AccordionItem>)}</Accordion> : <div className="new-seo-copy" dangerouslySetInnerHTML={{ __html: markdownHtml(section.markdown) }} />}
      </section>)}</div>
      <section className="mt-12 border-t border-border pt-8"><h2 className="font-heading text-xl font-bold mb-3">{cta.title}</h2><p className="text-muted-foreground mb-5">{cta.body}</p><Button asChild className="bg-cta text-cta-foreground border-0 hover:bg-cta/90"><Link to={cta.path}>{cta.label}</Link></Button></section>
      {related.length > 0 && <aside className="mt-12 border-t border-border pt-8"><h2 className="font-heading text-lg font-bold mb-3">Related articles</h2>{related.map(item => <Link key={item.path} to={item.path} className="block text-primary font-semibold mb-3">{item.label}</Link>)}</aside>}
    </div></div></article>
  </div>;
}