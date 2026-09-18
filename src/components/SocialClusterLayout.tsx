import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InquiryForm from "@/components/InquiryForm";
import OurWorkSection from "@/components/OurWorkSection";
import { Button } from "@/components/ui/button";

export interface ClusterSection {
  id: string;
  h2: string;
  intro?: string;
  body: ReactNode;
}

export interface ClusterLink {
  label: string;
  path: string;
  desc: string;
}

interface SocialClusterLayoutProps {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  heroLead: string;
  heroPoints: string[];
  serviceName: string;
  serviceDescription: string;
  sections: ClusterSection[];
  faqs: { q: string; a: string }[];
  relatedLinks: ClusterLink[];
  whatsappMessage: string;
  finalCtaHeading: string;
  finalCtaLead: string;
  formService: string;
}

const WA = "94701772626";

const SocialClusterLayout = ({
  metaTitle,
  metaDescription,
  canonical,
  breadcrumbLabel,
  eyebrow,
  h1,
  heroLead,
  heroPoints,
  serviceName,
  serviceDescription,
  sections,
  faqs,
  relatedLinks,
  whatsappMessage,
  finalCtaHeading,
  finalCtaLead,
  formService,
}: SocialClusterLayoutProps) => {
  const waHref = `https://wa.me/${WA}?text=${encodeURIComponent(whatsappMessage)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: "Cypher Digital",
      url: "https://cypherdigital.lk",
      telephone: "+94701772626",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Colombo",
        addressLocality: "Colombo",
        postalCode: "00500",
        addressCountry: "LK",
      },
    },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    url: `https://cypherdigital.lk${canonical}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Social Media Marketing",
        item: "https://cypherdigital.lk/social-media-management-sri-lanka",
      },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: `https://cypherdigital.lk${canonical}` },
    ],
  };

  return (
    <div>
      <SEOHead title={metaTitle} description={metaDescription} canonical={`https://cypherdigital.lk${canonical}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageBreadcrumb
        items={[
          { label: "Social Media Marketing", href: "/social-media-management-sri-lanka" },
          { label: breadcrumbLabel },
        ]}
      />

      {/* Hero */}
      <section className="bg-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{eyebrow}</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">{h1}</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-7">{heroLead}</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-left mb-8">
              {heroPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white font-semibold hover:bg-[hsl(25,95%,45%)] h-12 px-7 rounded-xl border-none">
                <a href={waHref} target="_blank" rel="noopener noreferrer">Get a Free Social Media Strategy</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 rounded-xl border-white/25 text-white hover:bg-white/10">
                <Link to="/social-media-marketing-packages-sri-lanka">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-10 border-b border-border bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">On this page</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {i + 1}. {s.h2}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Content */}
      <div className="py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-14">
          {sections.map((s, i) => (
            <div key={s.id}>
              <section id={s.id} className="scroll-mt-24">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">{s.h2}</h2>
                {s.intro && <p className="text-muted-foreground leading-relaxed mb-5">{s.intro}</p>}
                <div className="space-y-4 text-muted-foreground leading-relaxed [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_ul]:space-y-2 [&_li]:pl-1">
                  {s.body}
                </div>
              </section>

              {/* Mid-page CTA */}
              {i === Math.floor(sections.length / 2) && (
                <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-6 md:p-8 text-center">
                  <h3 className="font-heading text-xl font-bold mb-2">Want this mapped to your business?</h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Send us your business type and monthly budget on WhatsApp and we will reply with a realistic plan — no obligation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild className="bg-[#25D366] !text-white font-semibold hover:bg-[#1ebe5d] border-none h-11 px-6 rounded-xl">
                      <a href={waHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" /> Talk to Us on WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-11 px-6 rounded-xl">
                      <a href="tel:+94701772626">
                        <Phone className="w-4 h-4 mr-2" /> Call +94 70 177 2626
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <OurWorkSection />

      {/* FAQs */}
      <section className="py-14 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-sm md:text-base list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Explore our social media services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-sm mb-1">{l.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">{finalCtaHeading}</h2>
              <p className="text-white/60 leading-relaxed mb-6">{finalCtaLead}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[#25D366] !text-white font-semibold hover:bg-[#1ebe5d] border-none h-11 px-6 rounded-xl">
                  <a href={waHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-11 px-6 rounded-xl border-white/25 text-white hover:bg-white/10">
                  <Link to="/social-media-management-sri-lanka">Social Media Marketing Overview</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-heading text-lg font-bold mb-1">Get My Free Strategy</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Tell us your business, goal and monthly budget — we reply on WhatsApp within one working day.
              </p>
              <InquiryForm service={formService} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialClusterLayout;
