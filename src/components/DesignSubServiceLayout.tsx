import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import type { ReactNode } from "react";
import {
  CheckCircle, ArrowRight, Sparkles, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DesignSubService, allDesignServiceMeta } from "@/data/graphic-design-services";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";

interface Props {
  data: DesignSubService;
  introContent?: ReactNode;
}

const DesignSubServiceLayout = ({ data, introContent }: Props) => {
  const canonical = `https://cypherdigital.lk/${data.slug}`;

  // JSON-LD
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.h1,
        description: data.metaDescription,
        provider: {
          "@type": "LocalBusiness",
          name: "Cypher Digital",
          url: "https://cypherdigital.lk",
          telephone: "+94701772626",
          address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
          { "@type": "ListItem", position: 2, name: "Graphic Design", item: "https://cypherdigital.lk/graphic-design-sri-lanka" },
          { "@type": "ListItem", position: 3, name: data.shortName, item: canonical },
        ],
      },
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [data, canonical]);

  const relatedServices = data.relatedServices
    .map((slug) => allDesignServiceMeta.find((s) => s.slug === slug))
    .filter(Boolean) as typeof allDesignServiceMeta;

  return (
    <>
      <SEOHead
        title={data.seoTitle}
        description={data.metaDescription}
        canonical={canonical}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-2">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to={data.parentLink.path} className="hover:text-foreground transition-colors">{data.parentLink.label}</Link>
            <span>/</span>
            <span className="text-foreground">{data.shortName}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6 leading-tight">
            {data.h1}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            {introContent ?? data.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white font-semibold hover:bg-[hsl(25,95%,45%)] rounded-xl border-none">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%27m%20interested%20in%20your%20graphic%20design%20services." target="_blank" rel="noopener noreferrer">
                Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link to={data.parentLink.path}>View All Design Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
            Why Choose Our {data.shortName} Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
            Our {data.shortName} Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              Related Design Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedServices.map((s) => s && (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center group"
                >
                  <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors">{s.shortName}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{s.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA + Form */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={mascotGlasses} alt="Cypher Digital mascot" className="w-12 h-12 rounded-xl object-cover" />
                <p className="text-sm text-muted-foreground italic">Ready to create something amazing? Let's talk! 🎨</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Get Your {data.shortName} Started
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fill out the form and we'll get back to you within hours with a custom quote. No obligations — just creative solutions for your brand.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                <span>Or message us directly on <a href="https://wa.me/94701772626" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a></span>
              </div>
            </div>
            <InquiryForm service={data.shortName} />
          </div>
        </div>
      </section>

      {/* Back to parent */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <Link to={data.parentLink.path} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            ← Back to All Graphic Design Services
          </Link>
        </div>
      </section>
    </>
  );
};

export default DesignSubServiceLayout;
