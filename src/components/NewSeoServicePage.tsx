import { useEffect } from "react";
import NewSeoHead from "@/components/NewSeoHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import OurWorkSection from "@/components/OurWorkSection";
import PaybackCard from "@/components/PaybackCard";
import InquiryForm from "@/components/InquiryForm";
import NewSeoAuditForm from "@/components/NewSeoAuditForm";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsappNumber, formatWhatsappDisplay } from "@/lib/whatsapp";
import { markdownHtml, splitSeoMarkdown } from "@/lib/newSeoMarkdown";
import type { NewSeoPage } from "@/data/new-seo-pages";
import heroImage from "@/assets/advertising-benefits.jpg";
import "@/styles/new-seo-pages.css";

export default function NewSeoServicePage({ page, markdown }: { page: NewSeoPage; markdown: string }) {
  const { description } = page;
  const canonical = `https://cypherdigital.lk${page.path}`;
  const content = splitSeoMarkdown(markdown);
  const schemas = [
    { "@context": "https://schema.org", "@type": "Service", name: page.breadcrumbLabel, description, url: canonical, provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: content.faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://cypherdigital.lk/#services" },
      { "@type": "ListItem", position: 3, name: page.breadcrumbLabel, item: canonical },
    ] },
  ];
  const number = useWhatsappNumber();
  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent(`Hi Cypher Digital, ${page.cta}.`)}`;
  useEffect(() => {
    document.querySelector('script[data-new-page-schema]')?.remove();
  }, [canonical]);

  return <div className="new-seo-page">
    <NewSeoHead page={page} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
    <PageBreadcrumb items={[{ label: "Services", href: "/#services" }, { label: page.breadcrumbLabel }]} />
    <section className="new-seo-hero relative isolate overflow-hidden bg-foreground py-16 lg:py-24">
      <img src={heroImage} alt={page.heroAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-foreground/90" />
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-background leading-tight mb-6">{content.h1}</h1>
        <div className="new-seo-copy text-base md:text-lg" dangerouslySetInnerHTML={{ __html: markdownHtml(content.intro) }} />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="h-auto min-h-12 max-w-full whitespace-normal bg-cta text-cta-foreground border-0 hover:bg-cta/90 px-7 py-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">{page.cta}</a>
          </Button>
          <Button asChild size="lg" className="h-auto min-h-12 max-w-full whitespace-normal bg-background/10 text-background border border-background/30 hover:bg-background/20 px-7 py-3">
            <a href={`tel:+94${number.slice(2)}`}><Phone className="mr-2 h-4 w-4" />Call {formatWhatsappDisplay(number)}</a>
          </Button>
        </div>
      </div>
    </section>
    {page.path === "/google-ads-audit-sri-lanka" && <section className="container mx-auto max-w-3xl px-4 py-10"><h2 className="font-heading text-2xl font-bold mb-6">Request my free audit</h2><NewSeoAuditForm /></section>}
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
          <div className="mt-5"><InquiryForm service={page.breadcrumbLabel} /></div>
        </aside>
      </div>
    </div>
    <OurWorkSection />
    <section className="py-14"><div className="container mx-auto px-4"><PaybackCard /></div></section>
    <section className="py-16 bg-secondary/40 border-t border-border">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{page.cta}</h2>
        {page.path === "/google-ads-audit-sri-lanka" ? <NewSeoAuditForm /> : <InquiryForm service={page.breadcrumbLabel} />}
      </div>
    </section>
  </div>;
}