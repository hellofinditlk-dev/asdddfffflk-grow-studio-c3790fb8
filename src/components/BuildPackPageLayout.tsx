import { Fragment, useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import BuildPackInquiryForm from "@/components/BuildPackInquiryForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buildPackCanonical, buildPackLinkedRoutes, buildPackSchema, type BuildPackPage } from "@/data/buildPackPages";
import { buildPackSectionId } from "@/lib/buildPackMarkdown";

function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(/\[([^\]]+)\]\((\/[^)]+)\)|\*\*([^*]+)\*\*/g)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(text.slice(cursor, index));
    if (match[1] && match[2]) nodes.push(buildPackLinkedRoutes.includes(match[2]) ? <Link key={index} to={match[2]} className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary">{match[1]}</Link> : <Fragment key={index}>{match[1]}</Fragment>);
    else if (match[3]) nodes.push(<strong key={index} className="font-semibold"><Inline text={match[3]} /></strong>);
    cursor = index + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}

function Body({ text }: { text: string }) {
  return <div className="space-y-5 text-base text-muted-foreground leading-relaxed">{text.split(/\n\n+/).map((block, index) => {
    const button = block.match(/\[Button: ([^\]]+)\]/);
    if (button) return <div key={index} className="space-y-4"><p><Inline text={block.replace(button[0], "").trim()} /></p><Button asChild className="bg-cta text-cta-foreground border-none hover:bg-cta/90"><a href="#quote-form">{button[1]}</a></Button></div>;
    const lines = block.split("\n");
    if (lines.every(line => line.startsWith("- "))) return <ul key={index} className="list-disc pl-5 space-y-4 marker:text-primary">{lines.map((line, i) => <li key={i}><Inline text={line.slice(2)} /></li>)}</ul>;
    if (lines.every(line => /^\d+\. /.test(line))) return <ol key={index} className="list-decimal pl-5 space-y-4 marker:text-primary marker:font-semibold">{lines.map((line, i) => <li key={i}><Inline text={line.replace(/^\d+\. /, "")} /></li>)}</ol>;
    const heading = block.match(/^\*\*([^*]+)\*\*\n([\s\S]+)$/);
    return heading ? <div key={index}><h3 className="text-lg font-semibold text-foreground mb-2">{heading[1]}</h3><p><Inline text={heading[2]} /></p></div> : <p key={index}><Inline text={block} /></p>;
  })}</div>;
}

function BuildPackHead({ page }: { page: BuildPackPage }) {
  useEffect(() => {
    const changes: { node: HTMLMetaElement; prior: string | null; created: boolean }[] = [];
    for (const [attr, key, value] of [["property", "og:url", buildPackCanonical(page)], ["property", "og:type", "website"], ["name", "twitter:card", "summary"]]) {
      let node = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      const created = !node;
      const prior = node?.getAttribute("content") ?? null;
      if (!node) { node = document.createElement("meta"); node.setAttribute(attr, key); document.head.appendChild(node); }
      changes.push({ node, prior, created }); node.content = value;
    }
    const images = Array.from(document.querySelectorAll<HTMLMetaElement>('meta[property^="og:image"], meta[name="twitter:image"]'));
    images.forEach(node => node.remove());
    let schema = document.querySelector<HTMLScriptElement>("script[data-build-pack-schema]");
    if (!schema) { schema = document.createElement("script"); schema.type = "application/ld+json"; schema.dataset.buildPackSchema = ""; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify(buildPackSchema(page));
    const schemaNode = schema;
    return () => {
      schemaNode.remove(); images.forEach(node => document.head.appendChild(node));
      changes.forEach(({ node, prior, created }) => { if (created) node.remove(); else if (prior !== null) node.content = prior; else node.removeAttribute("content"); });
    };
  }, [page]);
  return null;
}

export default function BuildPackPageLayout({ page }: { page: BuildPackPage }) {
  const hero = page.hero.body.split(/\n\n+/);
  return <main className="tracking-normal">
    <SEOHead title={page.title} description={page.description} canonical={buildPackCanonical(page)} />
    <BuildPackHead page={page} />
    <PageBreadcrumb items={[{ label: "Services", href: "/#services" }, { label: page.breadcrumb }]} />
    <section className="section-dark py-8 md:py-16"><div className="container mx-auto px-6 max-w-5xl">
      <h1 className="font-heading text-2xl md:text-5xl font-extrabold leading-tight tracking-normal max-w-3xl mb-5">{page.hero.title}</h1>
      <p className="text-lg md:text-2xl font-semibold leading-relaxed max-w-3xl mb-4">{hero[0]?.replace(/^\*\*|\*\*$/g, "")}</p>
      {hero.slice(1).map((paragraph, index) => <p key={index} className="max-w-3xl text-sm md:text-lg leading-relaxed opacity-80 mb-6"><Inline text={paragraph} /></p>)}
      <div className="flex flex-col sm:flex-row gap-3 max-sm:mr-16">
        <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal bg-cta text-cta-foreground hover:bg-cta/90 border-none font-semibold px-3 text-xs sm:text-sm"><a href="#quote-form">{page.cta}<ArrowRight aria-hidden="true" /></a></Button>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none font-semibold"><a href={`https://wa.me/94701772626?text=${encodeURIComponent(`Hi, I'm interested in ${page.service}.`)}`} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp us</a></Button>
      </div>
    </div></section>
    {page.sections.map((section, index) => <section key={section.title} id={buildPackSectionId(section.title)} className={`py-10 md:py-14 border-b border-border scroll-mt-24 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}><div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12"><h2 className="self-start font-heading text-2xl font-bold tracking-normal leading-snug text-foreground">{section.title}</h2><Body text={section.body} /></div></section>)}
    <section className="py-12 md:py-16 bg-background"><div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12"><h2 className="self-start font-heading text-2xl font-bold tracking-normal text-foreground">Frequently asked questions</h2><Accordion type="single" collapsible>{page.faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left text-base leading-relaxed">{faq.question}</AccordionTrigger><AccordionContent><Body text={faq.answer} /></AccordionContent></AccordionItem>)}</Accordion></div></section>
    <section id="quote-form" className="py-12 md:py-16 bg-secondary border-t border-border scroll-mt-24"><div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12"><h2 className="self-start font-heading text-3xl font-bold tracking-normal leading-tight text-foreground">{page.formTitle}</h2><BuildPackInquiryForm key={page.path} page={page} /></div></section>
  </main>;
}