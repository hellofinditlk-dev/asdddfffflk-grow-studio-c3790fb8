import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import OurWorkSection from "@/components/OurWorkSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { creatives } from "@/data/work-samples";



const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
    { "@type": "ListItem", position: 2, name: "Our Work", item: "https://cypherdigital.lk/our-work" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work — Cypher Digital Portfolio",
  description:
    "Portfolio of video production, social media reels and campaign creatives delivered by Cypher Digital for Sri Lankan brands.",
  url: "https://cypherdigital.lk/our-work",
  hasPart: creatives.slice(0, 12).map((c) => ({
    "@type": "ImageObject",
    contentUrl: `https://cypherdigital.lk${c.src}`,
    name: c.alt,
  })),
};

const capabilities = [
  { label: "Social Media Design", to: "/social-media-management-sri-lanka" },
  { label: "AI Video Production", to: "/ai-video-production-sri-lanka" },
  { label: "Graphic Design", to: "/graphic-design-sri-lanka" },
  { label: "Facebook & Instagram Ads", to: "/facebook-ads-sri-lanka" },
  { label: "Google Ads", to: "/google-ads-sri-lanka" },
  { label: "SEO Services", to: "/seo-services-sri-lanka" },
];

const wa = `https://wa.me/94701772626?text=${encodeURIComponent(
  "Hi, I saw your portfolio and I want work like this for my brand",
)}`;

const OurWork = () => (
  <>
    <SEOHead
      title="Our Work — Portfolio of a Sri Lankan Digital Marketing Agency"
      description="See Cypher Digital's portfolio: social media creatives, campaign designs and video production delivered for education, retail, travel and logistics brands in Sri Lanka."
      canonical="https://cypherdigital.lk/our-work"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

    <PageBreadcrumb items={[{ label: "Our Work" }]} />

    <section className="relative bg-[#030612] overflow-hidden py-16 lg:py-24">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Our Work — Portfolio of Campaigns, Creatives &amp; Videos
        </h1>
        <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
          Every design and video on this page was produced in-house for real Sri Lankan brands across education,
          retail, travel, hospitality and logistics. This is the standard you get when you work with us.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] rounded-xl h-12 px-7 font-semibold border-none"
        >
          <a href={wa} target="_blank" rel="noopener noreferrer">Start Your Project on WhatsApp</a>
        </Button>
      </div>
    </section>

    <OurWorkSection variant="full" service="creative design and video production" />

    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-6 text-center">
          What we can produce for your brand
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {capabilities.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="flex items-center justify-between gap-3 bg-card border border-border rounded-2xl px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" /> {c.label}
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default OurWork;
