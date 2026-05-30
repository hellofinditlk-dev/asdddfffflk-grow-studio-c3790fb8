import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const SERVICES = [
  { title: "Logo Design", desc: "A professional logo is the foundation of your brand. Custom, original logos that reflect your business values and stand out in the Sri Lankan market.", anchor: "Explore Logo Design Sri Lanka", href: "/logo-design-sri-lanka" },
  { title: "Brand Identity Design", desc: "Beyond the logo — complete brand systems including colour palettes, typography, brand guidelines, and visual language your team can use consistently.", anchor: "Explore Brand Identity Design Sri Lanka", href: "/brand-identity-design-sri-lanka" },
  { title: "Graphic Design", desc: "From ad creatives to marketing collateral, our graphic design team produces visuals that convert — built specifically for Sri Lankan audiences and platforms.", anchor: "Explore Graphic Design Sri Lanka", href: "/graphic-design-sri-lanka" },
  { title: "Social Media Design", desc: "Scroll-stopping post designs, stories, and carousel graphics for Facebook, Instagram, and TikTok — delivered weekly and built around your brand identity.", anchor: "Explore Social Media Design Sri Lanka", href: "/social-media-design-sri-lanka" },
  { title: "Facebook Ad Design", desc: "High-converting Facebook ad creatives that stop the scroll and drive real leads for your Sri Lankan campaign.", anchor: "Explore Facebook Ad Design Sri Lanka", href: "/facebook-ad-design-sri-lanka" },
  { title: "Instagram Post Design", desc: "Creative Instagram posts, reels thumbnails, and stories designed to grow your following and engagement in Sri Lanka.", anchor: "Explore Instagram Post Design Sri Lanka", href: "/instagram-post-design-sri-lanka" },
  { title: "Flyer Design", desc: "Eye-catching flyers and leaflets for promotions, events, and local marketing campaigns across Sri Lanka.", anchor: "Explore Flyer Design Sri Lanka", href: "/flyer-design-sri-lanka" },
  { title: "Brochure Design", desc: "Corporate brochures that present your business professionally — for proposals, events, and client meetings.", anchor: "Explore Brochure Design Sri Lanka", href: "/brochure-design-sri-lanka" },
  { title: "Packaging Design", desc: "Product packaging and label design that influences purchase decisions at point of sale — built for Sri Lankan retail.", anchor: "Explore Packaging Design Sri Lanka", href: "/packaging-design-sri-lanka" },
  { title: "Label Design", desc: "Professional product labels for retail, F&B, cosmetics, and ecommerce brands in Sri Lanka.", anchor: "Explore Label Design Sri Lanka", href: "/label-design-sri-lanka" },
  { title: "Banner Design", desc: "Display and web banner ads for Google, websites, and digital campaigns — designed for maximum click-through rates.", anchor: "Explore Banner Design Sri Lanka", href: "/banner-design-sri-lanka" },
  { title: "Poster Design", desc: "Creative advertising posters for events, promotions, and campaigns — print-ready and digitally optimised.", anchor: "Explore Poster Design Sri Lanka", href: "/poster-design-sri-lanka" },
  { title: "Motion Graphics", desc: "Animated ads, explainer videos, and motion content that bring your brand to life across social media and digital ads.", anchor: "Explore Motion Graphics Sri Lanka", href: "/motion-graphics-sri-lanka" },
  { title: "Infographic Design", desc: "Data-driven visual content that communicates complex information clearly — for reports, social media, and marketing.", anchor: "Explore Infographic Design Sri Lanka", href: "/infographic-design-sri-lanka" },
  { title: "Presentation Design", desc: "PowerPoint and pitch deck design that makes your business proposals and investor presentations stand out.", anchor: "Explore Presentation Design Sri Lanka", href: "/presentation-design-sri-lanka" },
  { title: "UI/UX Design", desc: "User-centred website and app design for better experiences, lower bounce rates, and higher conversions.", anchor: "Explore UI/UX Design Sri Lanka", href: "/ui-ux-design-sri-lanka" },
  { title: "Company Profile Design", desc: "Professional company profiles for corporate branding, tenders, and business development meetings.", anchor: "Explore Company Profile Design Sri Lanka", href: "/company-profile-design-sri-lanka" },
  { title: "Email Newsletter Design", desc: "Branded email templates and newsletter designs that drive open rates, clicks, and customer retention.", anchor: "Explore Email Design Sri Lanka", href: "/email-design-sri-lanka" },
];

const COMPARISON = [
  ["Team size", "10+ specialists", "1 person"],
  ["Range of services", "Full creative suite", "Usually 1–2 skills"],
  ["Brand consistency", "Managed across all assets", "Often inconsistent"],
  ["Turnaround", "Dedicated team — faster", "Depends on availability"],
  ["Accountability", "Contracts & SLAs", "No formal agreement"],
  ["Revisions", "Unlimited revisions included", "Extra cost per revision"],
  ["Monthly cost", "LKR 40,000 – 200,000", "LKR 10,000 – 50,000"],
  ["Best for", "Businesses serious about growth", "One-off, simple tasks"],
];

const INDUSTRIES = [
  "Restaurants & Hotels", "Real Estate Developers", "Fashion & Retail Brands", "Education Institutes",
  "Beauty Salons & Clinics", "Ecommerce Stores", "Financial Services", "Travel & Tourism",
];

const PRICING = [
  { tier: "Starter", price: "from LKR 6,000", features: ["Logo design", "1 social media template", "2 revision rounds", "48hr turnaround", "PNG & PDF delivery"] },
  { tier: "Growth", price: "from LKR 35,000/month", features: ["Full brand identity kit", "12 social media designs/month", "Ad creatives included", "Unlimited revisions", "Dedicated designer"], featured: true },
  { tier: "Pro", price: "from LKR 80,000/month", features: ["Everything in Growth", "Motion graphics", "Packaging & print design", "Priority turnaround", "Weekly design calls"] },
];

const WHY_US = [
  "500+ design projects delivered for Sri Lankan businesses",
  "In-house team of designers, brand strategists & motion artists",
  "48-hour turnaround on most design projects",
  "Unlimited revisions until you're 100% satisfied",
  "Designs built for Sri Lankan audiences and platforms",
  "Combined creative + digital marketing expertise — designs that perform",
  "Serving clients across Colombo, Kandy, Galle, Negombo & island-wide",
  "Affordable packages starting from LKR 6,000",
];

const FAQS = [
  { q: "What is a creative agency in Sri Lanka?", a: "A creative agency is a professional team that handles your brand's visual output — including logo design, social media graphics, ad creatives, packaging, video, and print materials. Cypher Digital is one of Sri Lanka's most trusted creative agencies, based in Colombo and serving businesses island-wide." },
  { q: "How much does a creative agency cost in Sri Lanka?", a: "Creative agency pricing in Sri Lanka ranges from LKR 6,000 for a one-time logo design to LKR 80,000–200,000/month for full creative retainers. Cypher Digital offers transparent, affordable packages for every business size." },
  { q: "What is the difference between a creative agency and a digital marketing agency?", a: "A creative agency focuses on visual content and brand identity. A digital marketing agency focuses on advertising, SEO, and lead generation. Cypher Digital combines both — giving you creative work that's built to perform in paid and organic campaigns." },
  { q: "Do you serve businesses outside Colombo?", a: "Yes. We work with businesses across all of Sri Lanka — Colombo, Kandy, Galle, Negombo, Jaffna, and beyond — via WhatsApp and Zoom. No office visit required." },
  { q: "How fast do you deliver designs?", a: "Most design projects are delivered within 48 hours. Complex brand identity projects typically take 5–7 business days." },
];

const RELATED = [
  { href: "/graphic-design-sri-lanka", label: "Graphic Design Sri Lanka" },
  { href: "/logo-design-sri-lanka", label: "Logo Design Sri Lanka" },
  { href: "/brand-identity-design-sri-lanka", label: "Brand Identity Design" },
  { href: "/social-media-design-sri-lanka", label: "Social Media Design" },
  { href: "/", label: "Digital Marketing Agency Sri Lanka" },
];

const WHATSAPP_QUOTE = "https://wa.me/94701772626?text=Hi,%20I%20want%20a%20creative%20agency%20quote";
const WHATSAPP_CONSULT = "https://wa.me/94701772626?text=Hi,%20I%20want%20to%20book%20a%20free%20creative%20consultation";

const BlogCreativeAgency = () => (
  <>
    <SEOHead
      title="Creative Agency Sri Lanka (2026) | #1 Creative & Design Agency | Cypher Digital"
      description="Looking for a creative agency in Sri Lanka? Cypher Digital is Colombo's #1 creative agency offering logo design, brand identity, social media design, packaging, motion graphics & more. Free consultation today."
      canonical="https://cypherdigital.lk/blog/creative-agency-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: "Creative Agency Sri Lanka — The Complete Guide to Hiring the Right Creative Partner",
          description: "Everything Sri Lankan businesses need to know about working with a creative agency — services, pricing, what to look for, and why Cypher Digital is Colombo's top-rated creative team.",
          datePublished: "2026-05-30",
          author: { "@type": "Organization", name: "Cypher Digital" },
          publisher: { "@type": "Organization", name: "Cypher Digital" },
          mainEntityOfPage: "https://cypherdigital.lk/blog/creative-agency-sri-lanka",
        },
        {
          "@type": "LocalBusiness",
          name: "Cypher Digital",
          image: "https://cypherdigital.lk/og.jpg",
          telephone: "+94701772626",
          url: "https://cypherdigital.lk",
          address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        },
        {
          "@type": "FAQPage",
          mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
      ],
    }) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Creative Agency Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Creative Agency Sri Lanka — 2026 Guide</span>
              <span className="text-[11px] text-muted-foreground py-1">Published 2026 · 8 min read · Cypher Digital Team</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Creative Agency Sri Lanka — The Complete Guide to Hiring the Right Creative Partner
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything Sri Lankan businesses need to know about working with a creative agency — services, pricing, what to look for, and why Cypher Digital is Colombo's top-rated creative team.
            </p>
            <a href={WHATSAPP_CONSULT} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 bg-[#FF6A1A] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              Book a Free Consultation →
            </a>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>Sri Lanka's business landscape is more competitive than ever. Whether you're launching a new brand in Colombo, scaling a retail business in Kandy, or growing an ecommerce store island-wide — the way your brand looks determines whether customers trust you, remember you, and choose you over a competitor.</p>
            <p>That's where a <strong>creative agency</strong> comes in.</p>
            <p>A professional creative agency in Sri Lanka handles everything visual — from your logo and brand identity to your social media graphics, packaging, advertising creatives, and motion videos. Done right, it's one of the highest-ROI investments a Sri Lankan business can make.</p>
            <p>This guide covers what a creative agency does, what to look for when hiring one in Sri Lanka, and how Cypher Digital's creative team delivers results for businesses across the island.</p>

            <div className="bg-secondary rounded-xl p-6 my-8 not-prose">
              <div className="text-[11px] font-bold uppercase tracking-wider text-primary mb-3">Table of Contents</div>
              <ol className="grid sm:grid-cols-2 gap-1.5 text-sm">
                <li><a href="#what-is" className="text-primary hover:underline">1. What is a creative agency?</a></li>
                <li><a href="#what-does" className="text-primary hover:underline">2. What does a creative agency do?</a></li>
                <li><a href="#vs-freelancer" className="text-primary hover:underline">3. Creative agency vs freelancer</a></li>
                <li><a href="#services" className="text-primary hover:underline">4. Our graphic design services</a></li>
                <li><a href="#industries" className="text-primary hover:underline">5. Industries we serve</a></li>
                <li><a href="#pricing" className="text-primary hover:underline">6. Pricing</a></li>
                <li><a href="#why-us" className="text-primary hover:underline">7. Why choose Cypher Digital</a></li>
                <li><a href="#faqs" className="text-primary hover:underline">8. FAQs</a></li>
              </ol>
            </div>

            <h2 id="what-is" className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">What is a Creative Agency?</h2>
            <p>A creative agency is a full-service team of designers, brand strategists, copywriters, and visual content specialists who work together to build, grow, and maintain your brand's visual identity across every touchpoint.</p>
            <p>Unlike hiring a single freelance designer, a creative agency brings specialised expertise across multiple disciplines — logo design, brand strategy, social media creatives, video, packaging, and print — all working in one coordinated direction.</p>
            <p>At Cypher Digital, our creative team has delivered 500+ design projects for Sri Lankan businesses across every major industry.</p>

            <h2 id="what-does" className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">What Services Does a Creative Agency in Sri Lanka Offer?</h2>
            <p>A full-service creative agency in Sri Lanka handles every visual need your business has. Here's what Cypher Digital delivers:</p>

            <div id="services" className="not-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              {SERVICES.map(s => (
                <div key={s.title} className="bg-card border border-border rounded-xl p-5 flex flex-col hover:border-primary/30 hover:shadow-card transition-all">
                  <h3 className="font-heading font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <Link to={s.href} className="mt-3 text-xs font-semibold text-primary hover:underline">{s.anchor} →</Link>
                </div>
              ))}
            </div>

            <h2 id="vs-freelancer" className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Creative Agency vs Freelancer in Sri Lanka — Which is Right for You?</h2>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold">Factor</th>
                    <th className="text-left px-4 py-3 font-bold text-primary">Creative Agency (Cypher Digital)</th>
                    <th className="text-left px-4 py-3 font-bold">Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(([f, a, b]) => (
                    <tr key={f} className="border-t border-border">
                      <td className="px-4 py-3 font-semibold">{f}</td>
                      <td className="px-4 py-3 text-muted-foreground">{a}</td>
                      <td className="px-4 py-3 text-muted-foreground">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="industries" className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Creative Agency Services for Every Industry in Sri Lanka</h2>
            <div className="not-prose grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
              {INDUSTRIES.map(i => (
                <div key={i} className="bg-card border border-border rounded-lg p-4 text-sm font-semibold text-center">{i}</div>
              ))}
            </div>

            <h2 id="pricing" className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Creative Agency Pricing in Sri Lanka</h2>
            <div className="not-prose grid md:grid-cols-3 gap-5 my-6">
              {PRICING.map(p => (
                <div key={p.tier} className={`rounded-xl p-6 border ${p.featured ? "border-primary bg-primary/5 shadow-card" : "border-border bg-card"}`}>
                  <div className="font-heading font-bold text-lg mb-1">{p.tier}</div>
                  <div className="text-primary font-bold text-xl mb-4">{p.price}</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-5">
                    {p.features.map(f => <li key={f} className="flex gap-2"><span className="text-primary">✓</span>{f}</li>)}
                  </ul>
                  <a href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#FF6A1A] text-white font-bold text-sm px-4 py-2.5 rounded-md hover:opacity-90">Get Quote</a>
                </div>
              ))}
            </div>

            <h2 id="why-us" className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Why Cypher Digital is Sri Lanka's Leading Creative Agency</h2>
            <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
              {WHY_US.map(item => (
                <div key={item} className="bg-card border border-border rounded-lg p-4 text-sm flex gap-2.5">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 id="faqs" className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Frequently Asked Questions</h2>
            <div className="not-prose space-y-3 my-6">
              {FAQS.map(f => (
                <details key={f.q} className="bg-card border border-border rounded-lg p-5 group">
                  <summary className="font-bold text-sm cursor-pointer list-none flex justify-between items-center gap-3">
                    <span>{f.q}</span>
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-background mb-3">Ready to Work with Sri Lanka's Top Creative Agency?</h2>
            <p className="text-background/70 mb-6 max-w-xl mx-auto">Get a free consultation with our creative team and find out exactly how we can transform your brand's visual presence.</p>
            <a href={WHATSAPP_CONSULT} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FF6A1A] text-white font-bold text-sm px-8 py-3.5 rounded-md hover:opacity-90">Book a Free Consultation</a>
          </section>

          <aside className="mt-12 bg-card border border-border rounded-lg p-5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Related pages</div>
            <div className="space-y-2">
              {RELATED.map(r => (
                <Link key={r.href} to={r.href} className="block text-sm text-primary font-semibold hover:underline">{r.label}</Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </article>
  </>
);

export default BlogCreativeAgency;