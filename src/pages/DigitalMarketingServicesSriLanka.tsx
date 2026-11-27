import { Fragment, useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Megaphone, MousePointerClick, Search, Palette, Camera, Tv, Target, CalendarDays } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import DigitalMarketingServicesForm from "@/components/DigitalMarketingServicesForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  SERVICES_HUB_CANONICAL, SERVICES_HUB_DESCRIPTION, SERVICES_HUB_TITLE,
  servicesHubFaqs, servicesHubHero, servicesHubLinkedRoutes, servicesHubSchema, servicesHubSections,
} from "@/data/digitalMarketingServices";

const serviceIcons = [Megaphone, MousePointerClick, Search, Palette, Camera, Tv, Target, CalendarDays];
const sectionId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const expression = /\[([^\]]+)\]\((\/[^)]+)\)|\*\*([^*]+)\*\*/g;
  let cursor = 0;
  for (const match of text.matchAll(expression)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(text.slice(cursor, index));
    if (match[1] && match[2]) {
      nodes.push(servicesHubLinkedRoutes.includes(match[2])
        ? <Link key={index} to={match[2]} className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary">{match[1]}</Link>
        : <Fragment key={index}>{match[1]}</Fragment>);
    } else if (match[3]) nodes.push(<strong key={index} className="font-semibold text-foreground"><Inline text={match[3]} /></strong>);
    cursor = index + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}

function Body({ text }: { text: string }) {
  return <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
    {text.split(/\n\n+/).map((block, index) => {
      const lines = block.split("\n");
      if (lines.every(line => line.startsWith("- "))) return <ul key={index} className="space-y-4 list-disc pl-5 marker:text-primary">{lines.map((line, i) => <li key={i} className="pl-1"><Inline text={line.slice(2)} /></li>)}</ul>;
      if (lines.every(line => /^\d+\. /.test(line))) return <ol key={index} className="space-y-4 list-decimal pl-5 marker:text-primary marker:font-semibold">{lines.map((line, i) => <li key={i} className="pl-1"><Inline text={line.replace(/^\d+\. /, "")} /></li>)}</ol>;
      return <p key={index}><Inline text={block.replace(/\n/g, " ")} /></p>;
    })}
  </div>;
}

function ServicesHubHead() {
  useEffect(() => {
    const previous: { node: HTMLMetaElement; content: string | null; created: boolean }[] = [];
    for (const [attribute, key, value] of [["property", "og:url", SERVICES_HUB_CANONICAL], ["property", "og:type", "website"], ["name", "twitter:card", "summary"]]) {
      let node = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      const created = !node;
      const content = node?.getAttribute("content") ?? null;
      if (!node) { node = document.createElement("meta"); node.setAttribute(attribute, key); document.head.appendChild(node); }
      previous.push({ node, content, created });
      node.setAttribute("content", value);
    }
    const oldImages = Array.from(document.querySelectorAll<HTMLMetaElement>('meta[property^="og:image"], meta[name="twitter:image"]'));
    oldImages.forEach(node => node.remove());
    let script = document.querySelector<HTMLScriptElement>("script[data-services-hub-schema]");
    if (!script) { script = document.createElement("script"); script.type = "application/ld+json"; script.dataset.servicesHubSchema = ""; document.head.appendChild(script); }
    script.textContent = JSON.stringify(servicesHubSchema());
    const schemaNode = script;
    return () => {
      schemaNode.remove();
      oldImages.forEach(node => document.head.appendChild(node));
      previous.forEach(({ node, content, created }) => {
        if (created) node.remove();
        else if (content !== null) node.setAttribute("content", content);
        else node.removeAttribute("content");
      });
    };
  }, []);
  return null;
}

export default function DigitalMarketingServicesSriLanka() {
  const heroParagraphs = servicesHubHero.body.split(/\n\n+/);
  return <main className="tracking-normal">
    <SEOHead title={SERVICES_HUB_TITLE} description={SERVICES_HUB_DESCRIPTION} canonical={SERVICES_HUB_CANONICAL} />
    <ServicesHubHead />
    <PageBreadcrumb items={[{ label: "Services", href: "/#services" }, { label: "Digital Marketing Services" }]} />
    <section className="section-dark py-8 md:py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-heading text-2xl md:text-5xl font-extrabold leading-tight tracking-normal max-w-3xl mb-5">{servicesHubHero.title}</h1>
        <p className="text-lg md:text-2xl font-semibold leading-relaxed max-w-3xl mb-4">{heroParagraphs[0]?.replace(/^\*\*|\*\*$/g, "")}</p>
        {heroParagraphs.slice(1).map((paragraph, index) => <p key={index} className="max-w-3xl text-sm md:text-lg leading-relaxed opacity-80 mb-6">{paragraph}</p>)}
        <div className="flex flex-col sm:flex-row gap-3 max-sm:mr-16">
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 border-none font-semibold px-3 text-xs sm:text-sm"><a href="#marketing-plan">Get a free marketing plan<ArrowRight aria-hidden="true" /></a></Button>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none font-semibold"><a href="https://wa.me/94701772626?text=Hi%2C%20I%27d%20like%20a%20free%20marketing%20plan." target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp us</a></Button>
        </div>
      </div>
    </section>
    {servicesHubSections.map((section, index) => {
      const Icon = serviceIcons[index];
      return <section key={section.title} id={sectionId(section.title)} className={`py-10 md:py-14 border-b border-border scroll-mt-24 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12">
          <div>{Icon && <Icon className="w-7 h-7 text-primary mb-4" aria-hidden="true" />}<h2 className="self-start font-heading text-2xl font-bold tracking-normal leading-snug text-foreground">{section.title}</h2></div>
          <Body text={section.body} />
        </div>
      </section>;
    })}
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12">
        <h2 className="self-start font-heading text-2xl font-bold tracking-normal text-foreground">Frequently asked questions</h2>
        <Accordion type="single" collapsible>{servicesHubFaqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left text-base leading-relaxed">{faq.question}</AccordionTrigger><AccordionContent><Body text={faq.answer} /></AccordionContent></AccordionItem>)}</Accordion>
      </div>
    </section>
    <section id="marketing-plan" className="py-12 md:py-16 bg-secondary border-t border-border scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12">
        <h2 className="self-start font-heading text-3xl font-bold tracking-normal leading-tight text-foreground">Get a free marketing plan</h2>
        <DigitalMarketingServicesForm />
      </div>
    </section>
  </main>;
}