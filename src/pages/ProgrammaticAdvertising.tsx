import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Shield,
  Target,
  Zap,
  BarChart3,
  Handshake,
  Smartphone,
  Globe2,
  Repeat,
  Wallet,
  Phone,
  Star,
} from "lucide-react";

const platforms = [
  {
    name: "FindIt.lk",
    url: "https://www.findit.lk/",
    tag: "PMP Inventory — Classifieds & Offers",
    rank: "🏆 No. 1 Offer Finder in Sri Lanka",
    desc: "Sri Lanka's No.1 platform where people come to save money, save time and find the best — visitors discover top deals, compare options and choose businesses voted and trusted by other Sri Lankans. Your programmatic ad lands inside an audience already in decision mode.",
    tags: ["Offer Finder", "Save Money & Time", "People-Voted", "Best Deals LK", "Trusted Reviews"],
    stats: [{ k: "#1", v: "Offer finder LK" }, { k: "Voted", v: "By the people" }, { k: "All LK", v: "Audience" }],
  },
  {
    name: "Studyway.lk",
    url: "https://www.studyway.lk/",
    tag: "PMP Inventory — Education",
    rank: "🎓 No. 1 Education Information Hub in Sri Lanka",
    desc: "Sri Lanka's No.1 education information hub. Students, parents and working professionals actively research courses, institutes and qualifications — an unmatched programmatic context for education, professional services, financial products and aspirational consumer brands.",
    tags: ["Education", "Courses", "Students", "Parents", "Upskilling"],
    stats: [{ k: "#1", v: "Edu hub LK" }, { k: "18–45", v: "Core age" }, { k: "ABC", v: "Demographics" }],
  },
  {
    name: "YouJobs.lk",
    url: "https://youjobs.lk/",
    tag: "PMP Inventory — Careers & Jobs",
    rank: "💼 Leading Job Website in Sri Lanka",
    desc: "Sri Lanka's leading job website connecting employers and active job seekers daily. A prime programmatic channel for employer branding, HR tech, B2B services, financial products and any brand targeting career-driven Sri Lankan professionals.",
    tags: ["Jobs & Careers", "Employer Branding", "Recruitment", "Professionals", "B2B"],
    stats: [{ k: "#1", v: "Growing fast" }, { k: "Active", v: "Job seekers" }, { k: "All LK", v: "Reach" }],
  },
];

const pkgPlatforms = [
  { name: "FindIt.lk", url: "https://www.findit.lk/", desc: "No.1 offer finder in Sri Lanka — save money, save time, people-voted businesses" },
  { name: "Studyway.lk", url: "https://www.studyway.lk/", desc: "No.1 education information hub in Sri Lanka" },
  { name: "YouJobs.lk", url: "https://youjobs.lk/", desc: "Leading job website in Sri Lanka" },
];

const packages = [
  {
    dur: "14 Days — Starter",
    price: "LKR 60,000",
    perDay: "LKR 4,286 per day across 3 PMP publishers",
    popular: false,
    features: [
      "14-day programmatic display",
      "Standard banner formats (728×90, 300×250)",
      "Live within 24 hours of approval",
      "End-of-campaign performance report",
      "Zero ad fraud — verified PMP traffic",
    ],
  },
  {
    dur: "30 Days — Growth",
    price: "LKR 110,000",
    perDay: "LKR 3,667 per day across 3 PMP publishers",
    popular: true,
    features: [
      "30-day programmatic display",
      "Standard + premium PMP placements",
      "Live within 24 hours of approval",
      "Mid-campaign performance report",
      "Dedicated account manager",
      "Zero ad fraud — verified PMP traffic",
    ],
  },
  {
    dur: "45 Days — Brand",
    price: "LKR 160,000",
    perDay: "LKR 3,556 per day across 3 PMP publishers",
    popular: false,
    features: [
      "45-day programmatic display",
      "Premium placements including homepage",
      "Priority activation within 24 hours",
      "Weekly performance reports",
      "Banner design support included",
      "Dedicated account manager",
    ],
  },
  {
    dur: "60 Days — Enterprise",
    price: "Custom",
    perDay: "Quote on request",
    popular: false,
    features: [
      "60-day programmatic display",
      "Top-of-page and homepage placements",
      "Full creative design included",
      "Bi-weekly analytics reports",
      "Social media cross-promotion bonus",
      "VIP account and strategy support",
    ],
  },
];

const benefits = [
  { icon: <Target className="w-5 h-5" />, t: "Contextual targeting that actually works", d: "Each platform is a distinct intent signal. People on FindIt want the best deal. People on Studyway are choosing their future. People on YouJobs are building their career. Your programmatic message lands in the right mindset, every time." },
  { icon: <Shield className="w-5 h-5" />, t: "Guaranteed brand safety", d: "All three PMP publishers are owned, built and moderated by Cypher Digital. Your brand never appears next to harmful or unverified content — the defining advantage of a Private Marketplace over open programmatic exchanges." },
  { icon: <Wallet className="w-5 h-5" />, t: "100% media budget efficiency", d: "Open programmatic exchanges take 30–50% in technology fees. In a Private Marketplace that fee disappears — every rupee reaches a real Sri Lankan user on a premium platform." },
  { icon: <BarChart3 className="w-5 h-5" />, t: "Verified, transparent reporting", d: "Impressions, clicks and engagement come directly from our owned platforms — not filtered through a third-party DSP attribution layer. You see exactly what happened, verified by the publisher." },
  { icon: <Handshake className="w-5 h-5" />, t: "Publisher-direct relationship", d: "A Private Marketplace gives you what no open programmatic exchange can — a real relationship with the publisher. Custom placements, flexible formats, editorial partnerships." },
  { icon: <Zap className="w-5 h-5" />, t: "Live in 24 hours", d: "Programmatic campaigns through our PMP go live within one business day of creative approval. No DSP setup, no RTB configuration — the fastest programmatic go-live in Sri Lanka." },
  { icon: <Globe2 className="w-5 h-5" />, t: "100% Sri Lankan audience", d: "Every user across all three PMP platforms is verified Sri Lankan. No wasted impressions on VPN users, international traffic or misclassified geo segments." },
  { icon: <Smartphone className="w-5 h-5" />, t: "Mobile-first programmatic", d: "Over 80% of our combined PMP traffic is mobile. Banners are placed and optimised for the devices Sri Lankan users actually use — not generic desktop-first exchange inventory." },
  { icon: <Repeat className="w-5 h-5" />, t: "Cross-platform frequency", d: "One programmatic buy, three distinct editorial contexts. Your audience builds brand recall across classifieds, education and careers environments — wider contextual coverage than any single publisher can offer." },
];

const volumePackages = [
  {
    name: "Starter",
    price: "Rs. 48,000",
    impressions: "10,000 impressions",
    cpm: "Effective CPM Rs. 4,800",
    popular: false,
  },
  {
    name: "Growth",
    price: "Rs. 225,000",
    impressions: "50,000 impressions",
    cpm: "Effective CPM Rs. 4,500",
    popular: true,
  },
  {
    name: "Pro",
    price: "Rs. 400,000",
    impressions: "100,000 impressions",
    cpm: "Effective CPM Rs. 4,000",
    popular: false,
  },
];

const compareRows: Array<[string, string, string, string]> = [
  ["Sri Lanka premium inventory", "Very limited", "Negotiated", "3 owned top platforms"],
  ["Ad fraud / bot traffic", "High risk", "Reduced", "Zero — verified humans"],
  ["Brand safety", "Not guaranteed", "Publisher-level", "100% guaranteed"],
  ["Budget to media ratio", "50–70% to media", "~75% to media", "100% to media"],
  ["Reporting transparency", "Opaque, third-party", "Partial", "Direct, verified, real-time"],
  ["Audience certainty", "Approximate", "Publisher data", "100% verified LK users"],
  ["Contextual targeting", "Keyword / topic", "Site-level", "Deep editorial context"],
  ["Campaign go-live", "Days to weeks", "Days", "Within 24 hours"],
  ["Minimum spend", "High (DSP + setup)", "Medium", "From LKR 60,000"],
  ["Publisher relationship", "None", "One publisher", "3 publishers, 1 contact"],
];

const tiers = [
  {
    n: "01",
    t: "Open Exchange (OEX)",
    d: "The cheapest and most common form of programmatic advertising. Advertisers bid in real time for inventory across thousands of websites through public ad exchanges like Google Display Network. In Sri Lanka, open exchanges have very limited premium local inventory — ads typically land on low-quality unknown sites with high bot traffic and no brand safety. Most 'programmatic' campaigns run in Sri Lanka are OEX.",
  },
  {
    n: "02",
    t: "Preferred Deals",
    d: "A step up — a negotiated fixed-price agreement between one advertiser and one publisher before inventory hits the open exchange. More control, better placements, more transparent. Not widely available in Sri Lanka because most premium local publishers do not integrate with global programmatic platforms.",
  },
  {
    n: "03",
    t: "Private Marketplace (PMP) ★",
    d: "The premium tier of programmatic advertising. A curated, invitation-only network of verified publishers offering exclusive ad inventory to select advertisers. Guaranteed placements. Zero bot traffic. Full brand safety. Transparent reporting. This is what Cypher Digital offers in Sri Lanka — and we are the only network doing it on the island's top local platforms.",
  },
];

const steps = [
  { n: "01", t: "Share your objectives", d: "Tell us your target audience, programmatic campaign goals and budget. We recommend the right PMP placements across our three platforms for maximum programmatic impact." },
  { n: "02", t: "Receive your PMP plan", d: "Get a clear programmatic media plan showing your exact placements, durations and pricing across FindIt.lk, Studyway.lk and YouJobs.lk. No jargon, no hidden fees." },
  { n: "03", t: "Submit your creative", d: "Send your banner artwork in standard IAB formats. We handle all technical placement across all three PMP publishers simultaneously. Design support available." },
  { n: "04", t: "Go live and track", d: "Your programmatic campaign runs within 24 hours. Regular reports deliver verified impressions and click data — directly from our owned platforms." },
];

const faqs = [
  { q: "What is programmatic advertising in Sri Lanka?", a: "Programmatic advertising in Sri Lanka is the automated, data-driven buying of digital ad placements. Cypher Digital operates Sri Lanka's only Premium Private Marketplace (PMP) — the highest tier of programmatic advertising — across FindIt.lk (No.1 offer finder), Studyway.lk (No.1 education hub) and YouJobs.lk (leading jobs portal). Our PMP delivers guaranteed brand-safe programmatic placements with 100% verified Sri Lankan audiences and zero ad fraud." },
  { q: "What is a Private Marketplace (PMP) in programmatic advertising?", a: "A Private Marketplace (PMP) is the premium tier of programmatic advertising — a curated, invitation-only network where publishers offer exclusive, guaranteed ad inventory to select advertisers. Unlike open exchanges where ads appear on unknown, unverified sites, a PMP guarantees brand-safe placements on premium publishers with transparent reporting and zero bot traffic. Cypher Digital's PMP is built on three of Sri Lanka's most visited and trusted local platforms." },
  { q: "How much does programmatic advertising cost in Sri Lanka?", a: "Cypher Digital's programmatic PMP packages start from LKR 60,000 for a 14-day campaign across FindIt.lk, Studyway.lk and YouJobs.lk. A 30-day Growth package costs LKR 110,000 (LKR 3,667 per day across all three platforms) and a 45-day Brand package costs LKR 160,000. Custom 60-day enterprise packages are available on request." },
  { q: "What's the difference between Duration Packages and Volume Packages?", a: "Duration Packages guarantee premium placement across multiple banner slots on all three platforms for a fixed number of days — ideal for sustained brand visibility. Volume Packages guarantee a specific number of impressions on a single banner slot — ideal for advertisers who want a known, fixed reach number rather than a fixed campaign length. Both run on the same verified, brand-safe Cypher network. Volume Packages start from Rs. 48,000 for 10,000 impressions and go up to Rs. 400,000 for 100,000 impressions." },
  { q: "Why is programmatic advertising through a PMP better than open exchanges in Sri Lanka?", a: "Open programmatic exchanges in Sri Lanka have very limited premium local inventory, high ad fraud rates and opaque reporting. Exchange technology fees consume 30 to 50% of your media budget before a single Sri Lankan sees your ad. Cypher Digital's Private Marketplace eliminates every one of these problems — guaranteed premium placements, zero fraud, 100% of budget to media, transparent direct reporting and campaigns live within 24 hours." },
  { q: "Which platforms are in the Cypher Digital programmatic network?", a: "The Cypher Digital PMP includes FindIt.lk (Sri Lanka's No.1 offer finder — where people save money, save time and find people-voted businesses), Studyway.lk (Sri Lanka's No.1 education information hub for students, parents and professionals) and YouJobs.lk (Sri Lanka's leading job website connecting employers and active job seekers)." },
  { q: "How quickly can a programmatic campaign go live in Sri Lanka?", a: "Programmatic campaigns through the Cypher Digital PMP go live across all three platforms within 24 hours of creative approval. No DSP setup, no auction configuration and no technical complexity is required — significantly faster than any open programmatic exchange campaign in Sri Lanka." },
  { q: "What banner sizes are supported for programmatic advertising in Sri Lanka?", a: "Cypher Digital's PMP supports all standard IAB programmatic banner formats: Leaderboard (728×90), Medium Rectangle (300×250), Large Rectangle (336×280), Half Page (300×600) and Mobile Banner (320×50). Creative design support is included in all 45-day and above packages." },
  { q: "What reporting is included with programmatic campaigns?", a: "All PMP packages include performance reports with impressions, clicks, CTR and platform-by-platform breakdowns sourced directly from our owned platforms. The 30-day package includes a mid-campaign report. The 45-day package includes weekly reports. The 60-day enterprise package includes bi-weekly detailed analytics. All data is verified and publisher-direct — not third-party attributed." },
  { q: "What is the difference between open programmatic and a Private Marketplace?", a: "Open programmatic (OEX) means automated bidding for impressions across thousands of unverified websites through public exchanges — high fraud, low brand safety, low local inventory in Sri Lanka. A Private Marketplace (PMP) is invitation-only, curated, premium and guaranteed. Your ad appears only on specified verified publishers. For Sri Lankan advertisers, the PMP advantage is dramatic because premium local OEX inventory barely exists." },
];

const ProgrammaticAdvertising = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Programmatic Advertising Sri Lanka — Premium Private Marketplace (PMP)",
    description: "Sri Lanka's only Premium Private Marketplace for programmatic advertising. Guaranteed brand-safe inventory across FindIt.lk, Studyway.lk and YouJobs.lk.",
    image: ["https://cypherdigital.lk/og-image.jpg"],
    brand: { "@type": "Brand", name: "Cypher Digital" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Dinesh Perera" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Cypher Digital's PMP delivered real local reach across FindIt and YouJobs. Far better quality than open exchange buys.",
        datePublished: "2026-04-12",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Nadeesha Fernando" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Transparent reporting, brand-safe placements and excellent campaign management. Best programmatic option in Sri Lanka.",
        datePublished: "2026-05-03",
      },
    ],
    offers: [
      { name: "14-Day Starter PMP Package", price: "60000" },
      { name: "30-Day Growth PMP Package", price: "110000" },
      { name: "45-Day Brand PMP Package", price: "160000" },
    ].map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price,
      priceCurrency: "LKR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Cypher Digital" },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "LKR" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "LK" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 2, unitCode: "DAY" },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "LK",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Programmatic Advertising Sri Lanka | Cypher Digital Private Marketplace"
        description="Programmatic advertising Sri Lanka — Cypher Digital operates Sri Lanka's only Premium Private Marketplace (PMP) across FindIt.lk, Studyway.lk and YouJobs.lk. Guaranteed brand-safe inventory, zero ad fraud, 100% local reach. Packages from LKR 60,000."
        canonical="https://cypherdigital.lk/programmatic-advertising-sri-lanka"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <PageBreadcrumb items={[{ label: "Programmatic Advertising Sri Lanka" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Sri Lanka's Only Premium Private Marketplace
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Programmatic Advertising Sri Lanka — Finally Done Right
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Cypher Digital operates Sri Lanka's only Premium Private Marketplace (PMP) — the most advanced and brand-safe tier of <strong>programmatic advertising</strong>, built exclusively on the island's three most trusted digital platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20programmatic%20advertising%20PMP%20in%20Sri%20Lanka" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Free PMP Media Plan
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#packages">View Packages &amp; Pricing</a>
            </Button>
          </div>

          <div className="mt-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Your programmatic buy runs across</div>
            <div className="grid sm:grid-cols-3 gap-3">
              {platforms.map((p) => (
                <div key={p.name} className="rounded-xl border border-border bg-card p-4">
                  <div className="font-heading font-bold">{p.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.rank.replace(/^\S+\s/, "")}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OurWorkSection service="programmatic advertising" />

      {/* Three tiers of programmatic */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Programmatic advertising explained</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">What is programmatic advertising — and how does it work in Sri Lanka?</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Programmatic advertising is the data-driven, automated buying of digital ad placements. It comes in three tiers. Most advertisers in Sri Lanka only know the cheapest one.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((t, i) => (
              <div key={t.n} className={`rounded-2xl border p-6 bg-card ${i === 2 ? "border-primary shadow-lg" : "border-border"}`}>
                <div className={`text-xs font-bold mb-2 ${i === 2 ? "text-primary" : "text-muted-foreground"}`}>{t.n}</div>
                <h3 className="font-heading text-lg font-bold mb-2 flex items-center gap-2">
                  {t.t}
                  {i === 2 && <Star className="w-4 h-4 text-primary fill-primary" />}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PMP deep explainer */}
      <section id="pmp" className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Sri Lanka's only PMP</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">The Cypher Digital Private Marketplace</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A Private Marketplace is not a workaround or an alternative to programmatic advertising — it <strong>IS</strong> programmatic advertising, at its highest and most effective level. Here is what that means for your brand.
          </p>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold mb-3">Open Exchange vs. Private Marketplace in Sri Lanka</h3>
            <p className="text-sm text-muted-foreground mb-6">
              When Sri Lankan advertisers say they want "programmatic advertising," they usually end up on open exchanges — and wonder why results are poor. The answer is simple: open exchanges in Sri Lanka have almost no premium local inventory. A Private Marketplace solves every single problem open exchanges create.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h4 className="text-sm font-bold text-destructive mb-3">⚠ Open Exchange — what most advertisers get</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Ads appear on random, unverified Sri Lankan sites",
                    "Bot traffic and click fraud inflate your numbers",
                    "30–50% of budget lost to exchange technology fees",
                    "No brand safety — your ad appears anywhere",
                    "Opaque reporting you cannot independently verify",
                    "Zero relationship with any Sri Lankan publisher",
                    "Weeks of DSP setup before a single impression runs",
                  ].map((x) => (
                    <li key={x} className="pl-2 border-l-2 border-destructive/40">{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary mb-3">✓ Cypher Digital PMP — what you actually deserve</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Guaranteed placements on Sri Lanka's top 3 platforms",
                    "100% verified human traffic — zero bots, zero fraud",
                    "100% of your budget goes directly to media",
                    "Full brand safety — every platform owned and moderated by us",
                    "Direct, verified reporting from our own platforms",
                    "Dedicated account manager, direct publisher relationship",
                    "Live across all 3 platforms within 24 hours",
                  ].map((x) => (
                    <li key={x} className="pl-2 border-l-2 border-primary/40">{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            ["3", "Premium PMP publishers"],
            ["100K+", "Monthly verified visitors"],
            ["0%", "Ad fraud — zero bots"],
            ["100%", "Sri Lanka verified audience"],
            ["24h", "Campaign go-live"],
            ["LKR 60K", "Starting from"],
          ].map(([k, v]) => (
            <div key={v} className="rounded-xl bg-card border border-border p-4 text-center">
              <div className="font-heading text-xl md:text-2xl font-extrabold">{k}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">The Cypher Digital PMP Inventory</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Three premium publishers. One programmatic buy.</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Your programmatic campaign runs simultaneously across all three platforms — the only Private Marketplace in Sri Lanka with this combined contextual reach.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-6 hover:border-primary transition-colors">
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">● {p.tag}</div>
                <div className="font-heading text-xl font-bold">{p.name}</div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-semibold">→ {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a>
                <p className="text-sm text-muted-foreground my-3 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-border bg-secondary text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="border-t border-border pt-3 flex gap-4">
                  {p.stats.map((s) => (
                    <div key={s.v}>
                      <div className="font-bold text-sm">{s.k}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Programmatic PMP Packages</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Two ways to run your programmatic campaign</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Choose the setup that matches your campaign goals — every option runs on the same brand-safe, verified Cypher network.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl border border-primary/40 bg-card p-6">
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Option 1</div>
              <h3 className="font-heading text-lg font-bold mb-2">Multi-Slot Network Campaign</h3>
              <p className="text-sm text-muted-foreground mb-3">Best for brand visibility across the entire network. Your ad runs simultaneously across <strong>multiple banner slots on all 3 platforms</strong> for a fixed campaign duration. Priced by days.</p>
              <a href="#duration-packages" className="text-sm font-semibold text-primary">→ See Duration Packages</a>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-card p-6">
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Option 2</div>
              <h3 className="font-heading text-lg font-bold mb-2">Single Banner Slot Campaign</h3>
              <p className="text-sm text-muted-foreground mb-3">Best for a specific placement or a set volume of reach. Your ad runs on <strong>one banner slot</strong>, delivering a guaranteed number of impressions. Priced by impression volume.</p>
              <a href="#volume-packages" className="text-sm font-semibold text-primary">→ See Volume Packages</a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground italic mb-8">Not sure which fits your campaign? <a className="text-primary font-semibold" href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20help%20choosing%20a%20programmatic%20PMP%20package" target="_blank" rel="noopener noreferrer">Talk to a strategist</a> — we'll recommend the right setup for your goals and budget.</p>

          <div id="duration-packages" className="mb-4 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Option 1 · Multi-Slot Network Campaign</div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">Duration Packages</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-3xl">Every package gives you simultaneous programmatic display across all three PMP publishers. Transparent pricing, no exchange fees, no hidden costs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div key={pkg.dur} className={`relative rounded-2xl border p-6 bg-card flex flex-col ${pkg.popular ? "border-primary shadow-lg" : "border-border"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
                )}
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{pkg.dur}</div>
                <div className="font-heading text-2xl font-extrabold mt-2">{pkg.price}</div>
                <div className="text-xs text-muted-foreground mt-1">{pkg.perDay}</div>
                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Runs across</div>
                  {pkgPlatforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-border bg-secondary/50 hover:border-primary hover:bg-primary/5 transition-colors p-2"
                    >
                      <div className="text-xs font-bold text-primary">{p.name} ↗</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">{p.desc}</div>
                    </a>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button asChild className={`mt-5 ${pkg.popular ? "!bg-orange-500 hover:!bg-orange-600 !text-white !border-0" : ""}`} variant={pkg.popular ? "default" : "outline"}>
                  <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20the%20programmatic%20PMP%20package" target="_blank" rel="noopener noreferrer">Book This Package</a>
                </Button>
              </div>
            ))}
          </div>

          <div id="volume-packages" className="mt-16 mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Option 2 · Single Banner Slot Campaign</div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">Volume Packages</h3>
            <p className="text-sm text-muted-foreground mb-2 max-w-3xl">Guaranteed impression delivery on a single banner slot. Same brand-safe, verified Cypher network — priced by reach, not duration.</p>
            <p className="text-xs text-muted-foreground italic mb-6 max-w-3xl">Note: Volume Packages run across our standard inventory rotation on one banner slot until your guaranteed impression count is delivered.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {volumePackages.map((pkg) => (
              <div key={pkg.name} className={`relative rounded-2xl border p-6 bg-card flex flex-col ${pkg.popular ? "border-primary shadow-lg" : "border-border"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
                )}
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{pkg.name}</div>
                <div className="font-heading text-2xl font-extrabold mt-2">{pkg.price}</div>
                <div className="text-sm text-primary font-semibold mt-1">{pkg.impressions}</div>
                <div className="text-xs text-muted-foreground mt-1">{pkg.cpm}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1 border-t border-border pt-4">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Guaranteed impression delivery</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Single banner slot placement</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Delivery across the full network</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Real-time performance reporting</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Zero ad fraud — verified PMP traffic</li>
                </ul>
                <Button asChild className={`mt-5 ${pkg.popular ? "!bg-orange-500 hover:!bg-orange-600 !text-white !border-0" : ""}`} variant={pkg.popular ? "default" : "outline"}>
                  <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20the%20Volume%20PMP%20package" target="_blank" rel="noopener noreferrer">Start This Package</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Why our programmatic PMP outperforms open exchanges</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">9 reasons the Cypher Digital PMP delivers better programmatic results in Sri Lanka</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Context is the most powerful targeting signal in programmatic advertising. Our PMP puts your brand inside three contexts that no open exchange can replicate.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-5 hover:border-primary transition-colors">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">{b.icon}</div>
                <h3 className="font-bold mb-1">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table — 3 columns */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Programmatic comparison</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Open Exchange vs. Preferred Deal vs. Cypher Digital PMP</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="text-left">
                  <th className="p-4 font-semibold w-1/4">Programmatic factor</th>
                  <th className="p-4 font-semibold text-destructive">Open Exchange (OEX)</th>
                  <th className="p-4 font-semibold">Preferred Deal</th>
                  <th className="p-4 font-semibold text-primary">Cypher Digital PMP ★</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([f, oex, pd, pmp]) => (
                  <tr key={f} className="border-t border-border">
                    <td className="p-4 font-semibold">{f}</td>
                    <td className="p-4 text-destructive/90">{oex}</td>
                    <td className="p-4 text-muted-foreground">{pd}</td>
                    <td className="p-4 text-primary font-semibold bg-primary/5">{pmp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Getting started</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">From brief to programmatic in 4 steps</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">No DSPs. No auction configuration. No technical complexity. Just programmatic advertising that actually works in Sri Lanka.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-5">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mb-3 text-sm">{s.n}</div>
                <h3 className="font-bold mb-1">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO prose */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-heading">Programmatic Advertising in Sri Lanka — The Complete Guide to Private Marketplace Advertising</h2>
            <p>Programmatic advertising in Sri Lanka is at a turning point. As more brands shift digital budgets away from traditional channels, the demand for sophisticated, data-driven ad buying has never been higher. Yet for most Sri Lankan advertisers, "programmatic" has meant navigating opaque open exchanges, fighting ad fraud and watching budgets disappear into technology fees — with little to show for it locally. <strong>Cypher Digital exists to change that, operating Sri Lanka's only Premium Private Marketplace for programmatic display advertising.</strong></p>

            <h3>What is programmatic advertising?</h3>
            <p>Programmatic advertising is the automated, data-driven buying and selling of digital ad impressions. Rather than negotiating placements manually with individual publishers, programmatic technology uses algorithms to match advertiser bids with available ad inventory in real time. The ecosystem includes <strong>Demand-Side Platforms (DSPs)</strong> where advertisers set audience parameters and bids, <strong>Supply-Side Platforms (SSPs)</strong> where publishers make their inventory available, and <strong>Ad Exchanges</strong> where impressions are auctioned in milliseconds as each webpage loads.</p>
            <p>Globally, programmatic advertising now accounts for the vast majority of digital display ad spend. Its appeal lies in scale, audience targeting, efficiency and measurability. But in Sri Lanka, the experience for most local advertisers has fallen far short of that promise — and understanding why requires understanding the different tiers of programmatic buying.</p>

            <h3>The three tiers of programmatic advertising in Sri Lanka</h3>
            <p><strong>Open Exchange (OEX)</strong> is the most common and most problematic form of programmatic in Sri Lanka. Advertisers bid in real-time for impressions across thousands of websites through public exchanges. In Sri Lanka, open exchange inventory is heavily skewed toward low-quality, unverified publishers. Premium local sites rarely participate in global OEX platforms, meaning most Sri Lankan programmatic campaigns end up on piracy sites, obscure blogs and unknown long-tail pages. Add 30 to 50% in exchange technology fees, high bot traffic rates and unauditable reporting, and the ROI picture for local open exchange programmatic is poor.</p>
            <p><strong>Preferred Deals</strong> offer more control — a fixed-price negotiated agreement between a specific advertiser and publisher before inventory hits the open exchange. Better placement certainty and reduced fraud, but still limited by the fact that most premium Sri Lankan publishers do not integrate with global programmatic infrastructure.</p>
            <p><strong>Private Marketplace (PMP)</strong> is the premium tier — a curated, invitation-only network where a publisher or network offers exclusive, guaranteed ad inventory to select advertisers. This is the gold standard of programmatic advertising: brand-safe, fraud-free, fully transparent and delivered with a direct publisher relationship. This is exactly what Cypher Digital provides in Sri Lanka through its network of three owned premium platforms.</p>

            <h3>Why Cypher Digital is Sri Lanka's only genuine programmatic Private Marketplace</h3>
            <p>Cypher Digital, the digital marketing arm of the Cypher360 Group, owns and operates three of Sri Lanka's most established digital platforms: FindIt.lk, Studyway.lk and YouJobs.lk. Together these form the Cypher Digital Private Marketplace — the only PMP in Sri Lanka built entirely on premium, locally owned, verified publisher inventory.</p>
            <p><strong><a href="https://www.findit.lk/" target="_blank" rel="noopener noreferrer">FindIt.lk</a></strong> is Sri Lanka's No.1 offer finder. People come to FindIt.lk to save money, save time and discover the best — comparing options and choosing businesses that have been voted and trusted by other Sri Lankans. This people-powered trust and the active deal-seeking mindset of every visitor creates one of the most commercially valuable programmatic contexts in the country.</p>
            <p><strong><a href="https://www.studyway.lk/" target="_blank" rel="noopener noreferrer">Studyway.lk</a></strong> is Sri Lanka's No.1 education information hub. Students, parents and working professionals actively research courses, institutes and qualifications here. The education context delivers a uniquely motivated, aspirational demographic — ideal for education brands, professional services, financial products and aspirational consumer brands targeting Sri Lanka's upwardly mobile population.</p>
            <p><strong><a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer">YouJobs.lk</a></strong> is Sri Lanka's leading job website. Active job seekers and employers use the platform daily, creating a professional, career-driven audience that is highly receptive to employer branding, B2B services, financial products, HR technology and premium consumer brands.</p>

            <h3>What makes a Private Marketplace superior for programmatic advertising in Sri Lanka?</h3>
            <p>The core advantages of a Private Marketplace over open programmatic exchanges are particularly pronounced in Sri Lanka. Because premium local inventory is scarce on global exchanges, the gap between what a PMP delivers and what OEX delivers is wider here than in most markets. Key advantages include: guaranteed placements on verified premium publishers; zero ad fraud from bot traffic or invalid impressions; complete brand safety across all inventory; 100% of the media budget going to actual placements rather than exchange fees; and fully transparent, directly verifiable performance reporting.</p>
            <p>Additionally, contextual targeting in a Private Marketplace is fundamentally more powerful than the keyword or demographic targeting available in open exchanges. When your ad appears on FindIt.lk, the visitor is actively searching for the best option in a category. When it appears on Studyway.lk, they are researching a life decision. When it appears on YouJobs.lk, they are in a professional, achievement-oriented mindset. These editorial contexts deliver audience intent signals that no data layer or audience segment in an OEX can replicate.</p>

            <h3>Who should use programmatic advertising through the Cypher Digital PMP?</h3>
            <p>Brands spending between LKR 60,000 and LKR 2,000,000 per month on digital advertising in Sri Lanka will find the Cypher Digital PMP delivers superior verified results compared to open programmatic exchanges. Particularly well-suited sectors include retail and e-commerce, financial services, education and professional training, property development, automotive, HR and recruitment, B2B professional services, healthcare and FMCG brands seeking premium contextual placements.</p>

            <h3>Programmatic advertising packages and pricing in Sri Lanka</h3>
            <p>Cypher Digital's PMP packages start from LKR 60,000 for a 14-day programmatic display campaign running simultaneously across FindIt.lk, Studyway.lk and YouJobs.lk. A 30-day Growth package is available at LKR 110,000, and a 45-day Brand package at LKR 160,000. Enterprise 60-day packages are available on request with custom pricing. All campaigns go live within 24 hours and include performance reporting throughout the campaign period.</p>

            <h3>Getting started with programmatic advertising in Sri Lanka</h3>
            <p>Starting a programmatic campaign through the Cypher Digital Private Marketplace requires no DSP access, no auction configuration and no technical setup. Share your campaign objectives and receive a free detailed PMP media plan within 24 hours. From plan approval to your first live impression takes one business day — making it the fastest programmatic go-live available in Sri Lanka today.</p>

            <h3>Related advertising services</h3>
            <p>Looking at a wider media mix? Explore our <Link to="/advertising-in-sri-lanka">advertising in Sri Lanka</Link> pillar, <Link to="/media-buying-agencies-sri-lanka">media buying</Link>, <Link to="/google-ads-sri-lanka">Google Ads</Link>, <Link to="/facebook-ads-sri-lanka">Facebook Ads</Link> and <Link to="/seo-services-sri-lanka">SEO services</Link>.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">FAQ</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Programmatic advertising Sri Lanka — answered</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-4 group">
                <summary className="font-semibold cursor-pointer flex justify-between items-center gap-3">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-center">Start programmatic advertising in Sri Lanka — the right way</h2>
          <p className="text-muted-foreground text-center mb-8">Get a free PMP media plan. We will show you exactly which placements, which platforms and what results to expect — before you spend a single rupee.</p>
          <InquiryForm service="Programmatic Advertising Sri Lanka (PMP)" />
        </div>
      </section>
    </>
  );
};

export default ProgrammaticAdvertising;
