import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Aperture, Camera, CheckCircle2, MessageCircle, Package, Play } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductPhotographyInquiryForm from "@/components/ProductPhotographyInquiryForm";
import { Button } from "@/components/ui/button";
import {
  PRODUCT_PHOTOGRAPHY_CANONICAL,
  PRODUCT_PHOTOGRAPHY_DESCRIPTION,
  PRODUCT_PHOTOGRAPHY_TITLE,
  productPhotographyAdPoints,
  productPhotographyCopy,
  productPhotographyFaqs,
  productPhotographyPackages,
  productPhotographySchema,
  productPhotographyServices,
  productPhotographySteps,
} from "@/data/productPhotography";
import { useWhatsappNumber } from "@/lib/whatsapp";

function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return match
      ? <Link key={index} to={match[2]} className="text-primary font-semibold hover:underline">{match[1]}</Link>
      : <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

function ProductPhotographyHead() {
  useEffect(() => {
    const setMeta = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    setMeta("property", "og:url", PRODUCT_PHOTOGRAPHY_CANONICAL);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");

    let schema = document.querySelector("script[data-product-photography-schema]") as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.setAttribute("data-product-photography-schema", "");
      document.head.appendChild(schema);
    }
    schema.text = JSON.stringify(productPhotographySchema());

    return () => {
      schema?.remove();
      document.querySelector('meta[property="og:url"]')?.remove();
      document.querySelector('meta[property="og:type"]')?.remove();
    };
  }, []);

  return <SEOHead title={PRODUCT_PHOTOGRAPHY_TITLE} description={PRODUCT_PHOTOGRAPHY_DESCRIPTION} canonical={PRODUCT_PHOTOGRAPHY_CANONICAL} />;
}

const sectionClass = "py-14 md:py-20";
const containerClass = "container mx-auto px-4 max-w-6xl";
const headingClass = "font-heading text-2xl md:text-3xl font-extrabold mb-6";

export default function ProductPhotographySriLanka() {
  const whatsappNumber = useWhatsappNumber();
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Cypher Digital, I'd like a product photography shoot quote.")}`;

  return (
    <div className="bg-background">
      <ProductPhotographyHead />
      <PageBreadcrumb items={[{ label: "Services" }, { label: "Product Photography" }]} />

      <section className="section-dark overflow-hidden">
        <div className={`${containerClass} grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center py-14 md:py-20`}>
          <div>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight mb-5">{productPhotographyCopy.h1}</h1>
            <p className="text-lg md:text-xl font-semibold leading-relaxed mb-5">{productPhotographyCopy.heroLead}</p>
            <div className="space-y-4 text-sm md:text-base leading-relaxed opacity-80">
              {productPhotographyCopy.heroParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p>{productPhotographyCopy.shootSetup}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 border-none font-semibold">
                <a href="#book-a-product-shoot">Get a product shoot quote</a>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none font-semibold">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-cta-placement="Product photography hero">
                  <MessageCircle className="w-4 h-4" /> WhatsApp us
                </a>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[320px] hidden lg:grid grid-cols-2 gap-4" aria-hidden="true">
            {[Camera, Package, Aperture, Play].map((Icon, index) => (
              <div key={index} className="rounded-3xl border border-background/15 bg-background/5 flex items-center justify-center shadow-card">
                <Icon className="w-16 h-16 text-background/70" strokeWidth={1.25} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={containerClass}>
          <h2 className={headingClass}>Product photography services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productPhotographyServices.map((service) => (
              <article key={service.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-heading text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed"><LinkedText text={service.text} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-secondary/50 border-y border-border`}>
        <div className={`${containerClass} grid lg:grid-cols-2 gap-8 items-start`}>
          <div>
            <h2 className={headingClass}>Product photos that become ads</h2>
            <p className="text-muted-foreground leading-relaxed">{productPhotographyCopy.adsIntro}</p>
          </div>
          <ul className="space-y-3">
            {productPhotographyAdPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><LinkedText text={point} /></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={containerClass}>
          <h2 className={headingClass}>Packages</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-secondary/70">
                <tr>
                  <th className="text-left p-4 font-heading">Package</th>
                  <th className="text-left p-4 font-heading">Best for</th>
                  <th className="text-left p-4 font-heading">What you get</th>
                </tr>
              </thead>
              <tbody>
                {productPhotographyPackages.map((item) => (
                  <tr key={item.name} className="border-t border-border align-top">
                    <th className="text-left p-4 font-semibold">{item.name}</th>
                    <td className="p-4 text-muted-foreground">{item.bestFor}</td>
                    <td className="p-4 text-muted-foreground leading-relaxed">{item.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed"><LinkedText text={productPhotographyCopy.packagesOutro} /></p>
        </div>
      </section>

      <section className={`${sectionClass} bg-secondary/50 border-y border-border`}>
        <div className={containerClass}>
          <h2 className={headingClass}>How a product shoot works</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productPhotographySteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-heading text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-heading text-lg font-bold mt-3 mb-2">{step.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={headingClass}>Who we shoot for</h2>
          <p className="text-muted-foreground leading-relaxed"><LinkedText text={productPhotographyCopy.audience} /></p>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={headingClass}>Recent product shoots</h2>
          <Link to="/our-work" className="text-primary font-semibold hover:underline">our work</Link>
        </div>
      </section>

      <section className={`${sectionClass} section-dark`}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={headingClass}>After the shoot: keep your feed full</h2>
          <p className="leading-relaxed opacity-80 mb-7"><LinkedText text={productPhotographyCopy.afterShoot} /></p>
          <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 border-none font-semibold">
            <Link to="/social-media-marketing-packages-sri-lanka">See social media packages</Link>
          </Button>
        </div>
      </section>

      <section className={sectionClass} id="frequently-asked-questions">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={headingClass}>Frequently asked questions</h2>
          <div className="space-y-3">
            {productPhotographyFaqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold flex justify-between gap-4">
                  {faq.question}<span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="book-a-product-shoot" className={`${sectionClass} bg-secondary/50 border-t border-border scroll-mt-24`}>
        <div className={`${containerClass} grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start`}>
          <div>
            <h2 className={headingClass}>Book a product shoot</h2>
            <p className="text-muted-foreground leading-relaxed">{productPhotographyCopy.formIntro}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 md:p-7 shadow-card">
            <ProductPhotographyInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
