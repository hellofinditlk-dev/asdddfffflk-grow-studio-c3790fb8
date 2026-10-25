import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import OurWorkSection from "@/components/OurWorkSection";
import PaybackCard from "@/components/PaybackCard";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { useWhatsappNumber } from "@/lib/whatsapp";
import { inlineMarkdown, markdownHtml, splitSeoMarkdown } from "@/lib/newSeoMarkdown";
import markdown from "@/content/google-ads-cost-sri-lanka.md?raw";
import heroImage from "@/assets/advertising-benefits.jpg";
import "@/styles/new-seo-pages.css";

const title = "Google Ads Cost Sri Lanka (2026) | Budgets & Fees | Cypher Digital";
const description = "How much do Google Ads cost in Sri Lanka? See typical cost per click, minimum budgets, management fees and what drives your price. Free quote in 1 hour.";
const canonical = "https://cypherdigital.lk/google-ads-cost-sri-lanka";
const content = splitSeoMarkdown(markdown);
const schemas = [
  { "@context": "https://schema.org", "@type": "Service", name: "Google Ads Cost Sri Lanka", description, url: canonical, provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: content.faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://cypherdigital.lk/#services" },
    { "@type": "ListItem", position: 3, name: "Google Ads Cost Sri Lanka", item: canonical },
  ] },
];

export default function GoogleAdsCost() {
  const number = useWhatsappNumber();
  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent("Hi Cypher Digital, I would like a free Google Ads budget estimate.")}`;
  useEffect(() => {
    const existing = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const previous = existing?.content;
    const meta = existing ?? document.createElement("meta");
    meta.setAttribute("property", "og:url");
    meta.content = canonical;
    if (!existing) document.head.appendChild(meta);
    return () => {
      if (previous !== undefined) meta.content = previous;
      else meta.remove();
    };
  }, []);

  return <div className="new-seo-page">
    <SEOHead title={title} description={description} canonical={canonical} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
    <PageBreadcrumb items={[{ label: "Services", href: "/#services" }, { label: "Google Ads Cost Sri Lanka" }]} />
    <section className="new-seo-hero relative isolate overflow-hidden bg-foreground py-16 lg:py-24">
      <img src={heroImage} alt="Google Ads cost in Sri Lanka – budget and cost per click breakdown" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-foreground/90" />
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-background leading-tight mb-6">{content.h1}</h1>
        <div className="new-seo-copy text-base md:text-lg" dangerouslySetInnerHTML={{ __html: markdownHtml(content.intro) }} />
        <Button asChild size="lg" className="mt-8 h-auto min-h-12 max-w-full whitespace-normal bg-cta text-cta-foreground border-0 hover:bg-cta/90 px-7 py-3">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">Get a free Google Ads budget estimate</a>
        </Button>
      </div>
    </section>
    <nav aria-label="On this page" className="py-10 border-b border-border bg-secondary/40">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="font-heading text-sm font-bold text-muted-foreground mb-4">On this page</h2>
        <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          {content.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="text-muted-foreground hover:text-primary">{index + 1}. {section.title}</a></li>)}
        </ol>
      </div>
    </nav>
    <div className="container mx-auto px-4 py-14 max-w-6xl">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 items-start">
        <article className="min-w-0 space-y-14">
          {content.sections.map(section => <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>
            {section.title === "Frequently Asked Questions" ? <div className="space-y-3">
              {content.faqs.map(faq => <details key={faq.q} className="group rounded-lg border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-sm md:text-base list-none flex justify-between gap-4"><h3 className="font-semibold">{faq.q}</h3><span className="text-primary group-open:rotate-45 transition-transform" aria-hidden="true">+</span></summary>
                <div className="new-seo-copy mt-3 text-sm" dangerouslySetInnerHTML={{ __html: markdownHtml(faq.a) }} />
              </details>)}
            </div> : <div className="new-seo-copy" dangerouslySetInnerHTML={{ __html: markdownHtml(section.markdown) }} />}
          </section>)}
        </article>
        <aside className="lg:sticky lg:top-24 border border-border bg-card rounded-lg p-6">
          <h2 className="font-heading text-lg font-bold mb-2">Talk to a strategist — we reply in 1 hour</h2>
          <div className="mt-5"><InquiryForm service="Google Ads budget estimate" /></div>
        </aside>
      </div>
    </div>
    <OurWorkSection />
    <section className="py-14"><div className="container mx-auto px-4"><PaybackCard /></div></section>
    <section className="py-16 bg-secondary/40 border-t border-border">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Get a Free Google Ads Budget Estimate</h2>
        <InquiryForm service="Google Ads budget estimate" />
      </div>
    </section>
  </div>;
}