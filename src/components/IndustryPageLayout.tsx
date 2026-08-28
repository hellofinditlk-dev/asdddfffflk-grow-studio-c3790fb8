import { CheckCircle, Zap, Shield, BarChart3, Clock, Users, TrendingUp, Video, Award, MapPin, ArrowRight } from "lucide-react";
import AIVisibilityHighlightCard from "@/components/AIVisibilityHighlightCard";
import ExtraReachBadge from "@/components/ExtraReachBadge";
import PaybackCard from "@/components/PaybackCard";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import IndustryInquiryForm from "@/components/IndustryInquiryForm";
import type { IndustryData } from "@/data/industries";
import { industries } from "@/data/industries";
import mascotSocial from "@/assets/mascot-social.jpeg";

const allServices = [
  { name: "Social Media Management", path: "/social-media-management-sri-lanka", keyword: "Social Media Management Sri Lanka" },
  { name: "Facebook Advertising", path: "/facebook-ads-sri-lanka", keyword: "Facebook Ads Sri Lanka" },
  { name: "Google Ads", path: "/google-ads-sri-lanka", keyword: "Google Ads Sri Lanka" },
  { name: "SEO", path: "/seo-services-sri-lanka", keyword: "SEO Services Sri Lanka" },
  { name: "Graphic Design", path: "/graphic-design-sri-lanka", keyword: "Graphic Design Sri Lanka" },
  { name: "Video Production", path: "/video-production-sri-lanka", keyword: "Video Production Sri Lanka" },
];

const pricingPackages = [
  {
    name: "Basic",
    price: "LKR 85,000",
    period: "/month",
    features: ["12 posts + 4 Reels per month", "2 platforms managed (Facebook + Instagram)", "Ad boosting management included", "Monthly performance report"],
    popular: false,
  },
  {
    name: "Silver",
    price: "LKR 100,000",
    period: "/month",
    features: ["16 posts + 6 Reels per month", "1 on-location shoot per month", "Ad campaigns on Facebook + Instagram", "WhatsApp Business support"],
    popular: true,
  },
  {
    name: "Gold",
    price: "LKR 150,000",
    period: "/month",
    features: ["20 posts + 8 Reels per month", "2 on-location shoots per month", "Google Ads + Meta Ads management", "Email campaign once a month"],
    popular: false,
  },
  {
    name: "Platinum",
    price: "LKR 250,000",
    period: "/month",
    features: ["30 posts + 12 Reels per month", "Weekly on-location shoots", "Full-funnel ads (Meta + Google + TikTok)", "Dedicated account manager"],
    popular: false,
  },
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports so you always know your ROI." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "Campaigns go live within 3–5 business days." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your marketing needs." },
];

const defaultStats = [
  { value: "15,000+", label: "Leads Generated" },
  { value: "20+", label: "Happy Clients" },
  { value: "2,000+", label: "Campaigns Run" },
];

interface Props {
  data: IndustryData;
}

const IndustryPageLayout = ({ data }: Props) => {
  const canonical = `https://cypherdigital.lk/${data.slug}`;
  const otherIndustries = industries.filter((i) => i.slug !== data.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cypher Digital",
    description: data.metaDescription,
    url: canonical,
    telephone: "+94701772626",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/cypherdigitallk",
      "https://www.instagram.com/cypherdigitallk",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
      { "@type": "ListItem", position: 2, name: `${data.shortName} Digital Marketing`, item: canonical },
    ],
  };

  return (
    <div className="pt-16">
      <SEOHead title={data.seoTitle} description={data.metaDescription} canonical={canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {data.serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data.serviceSchema) }}
        />
      )}

      <PageBreadcrumb items={[
        { label: `${data.shortName} Digital Marketing` },
      ]} />

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industry Marketing</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{data.h1}</h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20get%20a%20free%20quote" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-border">
            {defaultStats.map((s, i) => (
              <div key={i} className="py-8 text-center">
                <div className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section (optional) */}
      {data.challengesHeading && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Challenges</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.challengesHeading}</h2>
            </div>
            {data.challengesIntro && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{data.challengesIntro}</p>
            )}
            {data.challengesList && (
              <div className="space-y-3 mb-8">
                {data.challengesList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                    <TrendingUp className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}
            {data.challengesOutro && (
              <p className="text-sm text-muted-foreground leading-relaxed">{data.challengesOutro}</p>
            )}
          </div>
        </section>
      )}

      {/* Booking Journey (optional) */}
      {data.bookingJourney && data.bookingJourney.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Booking Journey</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.bookingJourneyHeading || "Understanding the Booking Journey"}</h2>
              {data.bookingJourneyIntro && (
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">{data.bookingJourneyIntro}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {data.bookingJourney.map((step, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</div>
                    <h3 className="font-heading text-sm font-bold">{step.stage}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                  <div className="flex items-start gap-2 bg-primary/5 rounded-lg p-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-xs font-medium text-primary">{step.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services + Form */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">{data.servicesHeading}</h2>
              <div className="space-y-3">
                {data.services.map((service, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-lg font-bold mt-12 mb-4">{data.ctaHeading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.ctaDescription}</p>
            </div>

            <div>
              <div className="bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border sticky top-24">
                <h3 className="font-heading text-lg font-bold mb-1.5">Get a Free Quote</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your business and we'll create a custom marketing strategy.
                </p>
                <IndustryInquiryForm
                  fields={data.formFields}
                  ctaButtonText={data.ctaButtonText}
                  serviceName={data.h1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Transparent Pricing</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.shortName} Digital Marketing Packages & Prices</h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Clear monthly packages for {data.shortName.toLowerCase()} businesses in Sri Lanka — no hidden fees, no lock-in contracts.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <ExtraReachBadge />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingPackages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-card border rounded-2xl p-6 flex flex-col ${pkg.popular ? "border-primary shadow-card" : "border-border"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-bold mb-1">{pkg.name}</h3>
                <div className="mb-5">
                  <span className="font-heading text-2xl font-extrabold text-foreground">{pkg.price}</span>
                  <span className="text-xs text-muted-foreground">{pkg.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-xs leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="sm" className="w-full bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold border-none rounded-lg h-10 text-xs">
                  <a
                    href={`https://wa.me/94701772626?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package (${pkg.price}/month) for my ${data.shortName.toLowerCase()} business`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get {pkg.name}
                  </a>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <PaybackCard />
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Need a custom plan? <Link to="/social-media-management-sri-lanka" className="text-primary font-medium hover:underline">See full social media management packages</Link> or message us on WhatsApp for a tailored quote.
          </p>
        </div>
      </section>

      {/* Strategy Section (optional) */}
      {data.strategy && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Strategy</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.strategy.heading}</h2>
              {data.strategy.description && (
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">{data.strategy.description}</p>
              )}
            </div>
            <div className="space-y-10">
              {data.strategy.subsections.map((sub, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <h3 className="font-heading text-lg font-bold mb-4">{sub.h3}</h3>
                  {sub.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-4">{p}</p>
                  ))}
                  {sub.bullets && (
                    <div className="space-y-2">
                      {sub.bullets.map((b, k) => (
                        <div key={k} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Content Section (optional) */}
      {data.videoContentHeading && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.videoContentHeading}</h2>
              {data.videoContentIntro && (
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{data.videoContentIntro}</p>
              )}
            </div>
            {data.videoContentList && (
              <div className="grid sm:grid-cols-2 gap-3">
                {data.videoContentList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}
            {data.videoContentOutro && (
              <p className="text-sm text-muted-foreground leading-relaxed mt-8 text-center">{data.videoContentOutro}</p>
            )}
          </div>
        </section>
      )}

      {/* Benefits Section (optional) */}
      {data.benefitsHeading && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Benefits</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.benefitsHeading}</h2>
              {data.benefitsIntro && (
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{data.benefitsIntro}</p>
              )}
            </div>
            {data.benefitsList && (
              <div className="space-y-3">
                {data.benefitsList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}
            {data.benefitsOutro && (
              <p className="text-sm text-muted-foreground leading-relaxed mt-8 text-center">{data.benefitsOutro}</p>
            )}
          </div>
        </section>
      )}

      {/* Extra Deep-Content Sections (optional) */}
      {data.extraSections && data.extraSections.map((section, i) => (
        <section key={i} className={`py-20 lg:py-28 ${i % 2 === 0 ? '' : 'bg-secondary'}`}>
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{section.heading}</h2>
              {section.intro && (
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{section.intro}</p>
              )}
            </div>
            {section.bullets && (
              <div className="space-y-3">
                {section.bullets.map((item, j) => (
                  <div key={j} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}
            {section.outro && (
              <p className="text-sm text-muted-foreground leading-relaxed mt-8 text-center">{section.outro}</p>
            )}
          </div>
        </section>
      ))}

      {/* Locations Section (optional) */}
      {data.locationsHeading && data.locationsList && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.locationsHeading}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {data.locationsList.map((loc, i) => (
                <span key={i} className="bg-card border border-border rounded-full px-5 py-2.5 text-sm font-medium hover:border-primary/20 transition-colors">{loc}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Points */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Cypher Digital</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Work With Confidence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((tp, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-colors text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">
                  {tp.icon}
                </div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{tp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (optional) */}
      {data.whyChooseHeading && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.whyChooseHeading}</h2>
              {data.whyChooseIntro && (
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{data.whyChooseIntro}</p>
              )}
            </div>
            {data.whyChooseList && (
              <div className="space-y-3">
                {data.whyChooseList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQs */}
      <AIVisibilityHighlightCard />

      {data.faqs.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQ</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details key={i} className="group bg-card border border-border rounded-xl p-5">
                  <summary className="font-heading text-sm font-semibold cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <Zap className="w-4 h-4 text-primary shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry Cross-Links (optional) */}
      {data.industryLinksHeading && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industries We Serve</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">{data.industryLinksHeading}</h2>
              {data.industryLinksIntro && (
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">{data.industryLinksIntro}</p>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/${ind.slug}`}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group"
                >
                  <h3 className="font-heading text-sm font-bold group-hover:text-primary transition-colors">{ind.shortName} Marketing</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Service Links */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Explore More</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Digital Marketing Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all group"
              >
                <h3 className="font-heading text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                  {s.keyword}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">
                {data.bottomCtaHeading || "Ready to Get Started?"}
              </h2>
              {data.bottomCtaText ? (
                <div className="space-y-4 mb-8">
                  {data.bottomCtaText.map((text, i) => (
                    <p key={i} className="text-white/50 max-w-xl text-sm leading-relaxed">{text}</p>
                  ))}
                </div>
              ) : (
                <p className="text-white/50 mb-8 max-w-xl text-sm leading-relaxed">
                  Fill in the form and we'll create a custom marketing strategy for your business. We'll get back to you via WhatsApp.
                </p>
              )}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotSocial} alt="Cypher Digital mascot" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Got questions? Let's chat — no pressure, just results!</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                      <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
                    </Button>
                    <Button asChild className="border border-white/20 bg-transparent rounded-xl h-11 px-6 hover:bg-white/5" style={{ color: "white" }}>
                      <a href="https://wa.me/94701772626" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out to you on WhatsApp.</p>
              <IndustryInquiryForm
                fields={data.formFields}
                ctaButtonText={data.ctaButtonText}
                serviceName={data.h1}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPageLayout;
