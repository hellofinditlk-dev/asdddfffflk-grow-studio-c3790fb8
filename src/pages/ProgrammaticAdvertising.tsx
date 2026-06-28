import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
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
} from "lucide-react";

const platforms = [
  {
    name: "FindIt.lk",
    url: "https://www.findit.lk/",
    rank: "🏆 No. 1 Offer Finder in Sri Lanka",
    desc: "Sri Lanka's No.1 platform where people come to save money, save time and find the best — visitors discover top deals, compare options and choose businesses voted and trusted by other Sri Lankans, making every ad impression worth more because the audience is already in decision mode.",
    tags: ["Offer Finder", "Save Money & Time", "People-Voted", "Best Deals LK", "Trusted Reviews"],
    stats: [{ k: "#1", v: "Offer finder LK" }, { k: "Voted", v: "By the people" }, { k: "All LK", v: "Audience" }],
  },
  {
    name: "Studyway.lk",
    url: "https://www.studyway.lk/",
    rank: "🎓 No. 1 Education Information Hub in Sri Lanka",
    desc: "Sri Lanka's most trusted education information platform. Students, parents and working professionals actively research courses, institutes and qualifications — an unmatched channel for education brands, professional services and aspirational consumer products.",
    tags: ["Education", "Courses", "Students", "Parents", "Upskilling"],
    stats: [{ k: "#1", v: "Edu hub LK" }, { k: "18–45", v: "Core age" }, { k: "ABC", v: "Demographics" }],
  },
  {
    name: "YouJobs.lk",
    url: "https://youjobs.lk/",
    rank: "💼 Leading Job Website in Sri Lanka",
    desc: "Sri Lanka's fast-growing employment platform connecting companies with active job seekers. A prime channel for employer branding, HR tech, B2B services and any brand targeting working professionals and career-driven individuals.",
    tags: ["Jobs & Careers", "Employer Branding", "Recruitment", "Professionals", "B2B"],
    stats: [{ k: "#1", v: "Growing fast" }, { k: "Active", v: "Job seekers" }, { k: "All LK", v: "Reach" }],
  },
];

const packages = [
  {
    dur: "14 Days — Starter",
    price: "LKR 60,000",
    perDay: "LKR 4,286 per day across 3 platforms",
    popular: false,
    features: [
      "14-day continuous display",
      "Standard banner sizes (728×90, 300×250)",
      "Campaign live within 24 hours",
      "End-of-campaign performance report",
      "Zero ad fraud — verified human traffic only",
    ],
  },
  {
    dur: "30 Days — Growth",
    price: "LKR 110,000",
    perDay: "LKR 3,667 per day across 3 platforms",
    popular: true,
    features: [
      "30-day continuous display",
      "Standard + premium banner placements",
      "Campaign live within 24 hours",
      "Mid-campaign performance report",
      "Dedicated account support",
      "Zero ad fraud — verified human traffic only",
    ],
  },
  {
    dur: "45 Days — Brand",
    price: "LKR 160,000",
    perDay: "LKR 3,556 per day across 3 platforms",
    popular: false,
    features: [
      "45-day continuous display",
      "Premium placements including homepage",
      "Priority campaign activation",
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
      "60-day continuous display",
      "Top-of-page and homepage placements",
      "Full creative design included",
      "Bi-weekly analytics reports",
      "Social media cross-promotion bonus",
      "VIP strategy support",
    ],
  },
];

const benefits = [
  { icon: <Target className="w-5 h-5" />, t: "Precision audience targeting", d: "Each platform attracts a distinct high-intent segment — shoppers on FindIt, students on Studyway, professionals on YouJobs." },
  { icon: <Shield className="w-5 h-5" />, t: "Guaranteed brand safety", d: "All three platforms are owned, built and moderated by Cypher Digital. Your brand never appears next to harmful content." },
  { icon: <Wallet className="w-5 h-5" />, t: "No middleman tax", d: "Programmatic exchanges take 30–50% in technology fees. With us, 100% of your budget goes to actual media placement." },
  { icon: <BarChart3 className="w-5 h-5" />, t: "Real transparent data", d: "Impressions, clicks and engagement come directly from our platforms — not filtered through a third-party black box." },
  { icon: <Handshake className="w-5 h-5" />, t: "Direct publisher relationship", d: "You work with the people who own the platforms. Custom placements, flexible formats, priority positioning." },
  { icon: <Zap className="w-5 h-5" />, t: "Live in 24 hours", d: "No DSP setup, no RTB configuration, no auction strategies. Brief us today, approve creative, run tomorrow." },
  { icon: <Globe2 className="w-5 h-5" />, t: "100% Sri Lanka built", d: "All three platforms are locally owned, Sinhala-and-English bilingual, optimised for Sri Lankan mobile devices." },
  { icon: <Smartphone className="w-5 h-5" />, t: "Mobile-first reach", d: "Over 80% of combined traffic is mobile. Banners are built and placed for smartphone screens Sri Lankans use daily." },
  { icon: <Repeat className="w-5 h-5" />, t: "Cross-platform frequency", d: "One campaign, three distinct contexts — classifieds, education, careers — building recognition without duplicate spend." },
];

const compareRows: Array<[string, string, string]> = [
  ["Sri Lanka premium inventory", "Very limited", "3 top owned platforms"],
  ["Ad fraud risk", "High — bots & invalid traffic", "Zero — verified humans only"],
  ["Brand safety", "Not guaranteed", "100% guaranteed"],
  ["Budget efficiency", "30–50% lost to fees", "100% goes to media"],
  ["Reporting transparency", "Opaque, third-party data", "Direct, verified, real-time"],
  ["Publisher relationship", "None — fully automated", "Direct + dedicated manager"],
  ["Campaign go-live time", "Days to weeks (setup)", "Within 24 hours"],
  ["Local audience certainty", "Approximate geo-targeting", "100% Sri Lankan users"],
  ["Custom placements", "Not possible", "Fully flexible"],
  ["Minimum entry cost", "High DSP access + setup fees", "From LKR 60,000 / 14 days"],
  ["Bilingual targeting", "Limited Sinhala capability", "Sinhala & English native"],
  ["Mobile optimisation", "Generic device targeting", "Sri Lanka mobile-first"],
];

const steps = [
  { n: "01", t: "Tell us your goal", d: "Share your audience, campaign objective and budget. We recommend the right platform mix and banner positions." },
  { n: "02", t: "Receive your media plan", d: "Get a clear, no-jargon proposal — placements, positions, duration and exact pricing. No hidden fees." },
  { n: "03", t: "Send your creative", d: "Supply your banner artwork — or let us design it. We handle all placement across the three platforms." },
  { n: "04", t: "Go live & track results", d: "Your campaign is live within 24 hours. Regular reports deliver real impressions and clicks data." },
];

const faqs = [
  { q: "What is programmatic advertising in Sri Lanka?", a: "Programmatic advertising in Sri Lanka is the automated buying of digital ad inventory through real-time bidding exchanges. While effective globally, Sri Lanka programmatic exchanges have limited premium local inventory, higher ad fraud rates and less transparent reporting. Most serious local advertisers find direct display advertising on verified platforms like FindIt.lk, Studyway.lk and YouJobs.lk delivers better ROI." },
  { q: "Is direct banner advertising better than programmatic in Sri Lanka?", a: "For most Sri Lankan brands targeting local audiences, yes. Direct placements eliminate ad fraud, guarantee brand safety, ensure 100% of your budget goes to media not fees, and provide transparent verifiable reporting. Cypher Digital direct packages start from LKR 60,000 for 14 days across three top Sri Lankan platforms." },
  { q: "How much does digital advertising cost in Sri Lanka?", a: "Cypher Digital direct banner packages start from LKR 60,000 for a 14-day campaign across FindIt.lk, Studyway.lk and YouJobs.lk. A 30-day package costs LKR 110,000 and a 45-day brand package costs LKR 160,000. Custom 60-day enterprise packages are available on request." },
  { q: "Which are the best websites to advertise on in Sri Lanka?", a: "Sri Lanka's top three digital advertising platforms are FindIt.lk (No.1 offer finder and classifieds), Studyway.lk (No.1 education information hub) and YouJobs.lk (the island's leading job website). Together they reach hundreds of thousands of active Sri Lankan users monthly." },
  { q: "How quickly can a display advertising campaign go live in Sri Lanka?", a: "With Cypher Digital, campaigns go live across all three platforms within 24 hours of creative approval. No DSP setup, no auction configuration, no technical complexity required." },
  { q: "What banner sizes are supported for advertising in Sri Lanka?", a: "Cypher Digital supports all standard IAB banner formats: Leaderboard 728×90, Medium Rectangle 300×250, Large Rectangle 336×280, Half Page 300×600 and Mobile Banner 320×50. Design support is included in 45-day and above packages." },
  { q: "Does Cypher Digital offer programmatic advertising?", a: "Cypher Digital offers a direct advertising network delivering the key benefits of programmatic — targeted reach, measurable results and campaign reporting — without ad exchange downsides. Because we own all three platforms, advertisers get better targeting, full transparency and superior ROI compared to Sri Lanka programmatic exchanges." },
  { q: "What reporting comes with a display advertising campaign?", a: "All packages include performance reports with impressions, clicks, CTR and platform breakdowns. The 30-day package includes mid-campaign reports. The 45-day package includes weekly reports. The 60-day enterprise package includes bi-weekly detailed analytics." },
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
    name: "Programmatic Display Advertising Sri Lanka — Direct Banner Network",
    description: "Direct banner advertising across FindIt.lk, Studyway.lk and YouJobs.lk. The proven alternative to programmatic advertising in Sri Lanka.",
    brand: { "@type": "Brand", name: "Cypher Digital" },
    offers: [
      { "@type": "Offer", name: "14-Day Starter Package", price: "60000", priceCurrency: "LKR", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "30-Day Growth Package", price: "110000", priceCurrency: "LKR", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "45-Day Brand Package", price: "160000", priceCurrency: "LKR", availability: "https://schema.org/InStock" },
    ],
  };

  return (
    <>
      <SEOHead
        title="Programmatic Advertising Sri Lanka | #1 Direct Ad Network | Cypher Digital"
        description="Programmatic advertising Sri Lanka — leading brands skip ad exchanges and advertise directly on FindIt.lk, Studyway.lk and YouJobs.lk. Packages from LKR 60,000. Zero ad fraud. 100% local reach."
        canonical="https://cypherdigital.lk/programmatic-advertising-sri-lanka"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <PageBreadcrumb items={[{ label: "Programmatic Advertising Sri Lanka" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Sri Lanka's #1 Direct Ad Network
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Programmatic Advertising Sri Lanka — Done Smarter
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Stop paying exchange fees for bot traffic on unknown sites. Reach Sri Lanka's most valuable audiences directly on the island's three most trusted digital platforms — with full transparency, zero ad fraud and 100% verified local reach. <strong>Programmatic display advertising in Sri Lanka, done the smart way.</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20programmatic%20advertising%20in%20Sri%20Lanka" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Free Media Plan
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#packages">View Packages &amp; Pricing</a>
            </Button>
          </div>

          <div className="mt-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Your ads run simultaneously across</div>
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

      {/* Programmatic vs Direct */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Understanding the landscape</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">What is programmatic advertising in Sri Lanka — and why it often fails local brands</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Programmatic advertising automates ad buying through real-time bidding (RTB) exchanges. Globally it works — but in Sri Lanka, advertisers routinely overpay for poor placements on unknown sites. Here is the honest comparison.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-destructive" />
                <div>
                  <div className="font-bold">Programmatic exchanges in Sri Lanka</div>
                  <div className="text-xs text-destructive">What you are actually getting</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Minimal premium Sri Lankan publisher inventory",
                  "High ad fraud — bots, click farms, invalid traffic",
                  "Zero brand safety — ads appear anywhere",
                  "Opaque reporting — hard to verify local reach",
                  "30–50% of budget consumed by tech fees",
                  "Complex DSP setup — weeks before you are live",
                  "No publisher relationship — zero editorial control",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold">Cypher Digital Direct Network</div>
                  <div className="text-xs text-primary">What smart Sri Lankan marketers do instead</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Direct access to Sri Lanka's top 3 owned platforms",
                  "Zero ad fraud — 100% verified human traffic",
                  "100% brand-safe — moderated, quality content",
                  "Fully transparent — real impressions, real clicks",
                  "100% of budget goes to media — no middleman",
                  "Live within 24 hours — no tech setup required",
                  "Dedicated account manager — direct publisher relationship",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            ["3", "Owned platforms"],
            ["100K+", "Monthly visitors"],
            ["0%", "Ad fraud"],
            ["100%", "Sri Lanka audience"],
            ["24h", "Go-live time"],
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
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">The Cypher Digital Advertising Network</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Three platforms. Sri Lanka's most valuable audiences.</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            We own and operate every platform you advertise on — guaranteed placements, zero inventory uncertainty, direct publisher relationship.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-6 hover:border-primary transition-colors">
                <div className="text-xs font-bold text-primary mb-2">{p.rank}</div>
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
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Advertising Packages</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Simple, transparent pricing. No exchange fees ever.</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Every package includes banner placement across all three platforms simultaneously. No hidden fees, no DSP costs, no auction complexity.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div key={pkg.dur} className={`relative rounded-2xl border p-6 bg-card flex flex-col ${pkg.popular ? "border-primary shadow-lg" : "border-border"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
                )}
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{pkg.dur}</div>
                <div className="font-heading text-2xl font-extrabold mt-2">{pkg.price}<span className="text-xs font-normal text-muted-foreground"> + taxes</span></div>
                <div className="text-xs text-muted-foreground mt-1">{pkg.perDay}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button asChild className={`mt-5 ${pkg.popular ? "!bg-orange-500 hover:!bg-orange-600 !text-white !border-0" : ""}`} variant={pkg.popular ? "default" : "outline"}>
                  <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20the%20programmatic%20advertising%20package" target="_blank" rel="noopener noreferrer">Book This Package</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Why direct beats programmatic in Sri Lanka</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">9 reasons Sri Lanka's top marketers choose direct over programmatic</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Every media rupee must work harder. Here is why the island's most effective campaigns skip the ad exchanges entirely.</p>
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

      {/* Comparison Table */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Head-to-head</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Programmatic exchanges vs. Cypher Digital direct advertising</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="text-left">
                  <th className="p-4 font-semibold w-1/3">Factor</th>
                  <th className="p-4 font-semibold text-destructive">Programmatic exchanges</th>
                  <th className="p-4 font-semibold text-primary">Cypher Digital Direct</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([f, b, g]) => (
                  <tr key={f} className="border-t border-border">
                    <td className="p-4 font-semibold">{f}</td>
                    <td className="p-4 text-destructive/90">{b}</td>
                    <td className="p-4 text-primary font-semibold bg-primary/5">{g}</td>
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
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Simple process</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">From brief to live in 4 steps</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">No DSPs. No auction strategies. No technical complexity. Just direct advertising that delivers.</p>
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
            <h2 className="font-heading">Programmatic Advertising in Sri Lanka — The Complete 2026 Guide for Marketers</h2>
            <p>Programmatic advertising in Sri Lanka is one of the most searched and least understood topics in the local digital marketing landscape. As brands accelerate their shift from print and broadcast to digital channels, the question of <strong>how to buy digital ad space in Sri Lanka</strong> has become increasingly urgent — and increasingly complicated. This guide explains what programmatic advertising is, why it presents unique challenges in Sri Lanka, and what the most effective alternative looks like for local advertisers.</p>

            <h3>What is programmatic advertising?</h3>
            <p>Programmatic advertising is the automated buying and selling of digital advertising inventory through technology platforms. Instead of negotiating directly with a publisher, programmatic uses <strong>real-time bidding (RTB)</strong> — where, in the milliseconds it takes a webpage to load, an auction fires between advertisers bidding for that single impression. The winning bid's ad is served instantly.</p>
            <p>The infrastructure behind this includes <strong>Demand-Side Platforms (DSPs)</strong>, <strong>Supply-Side Platforms (SSPs)</strong> and an <strong>Ad Exchange</strong> between them. Globally, programmatic now accounts for the majority of all digital display advertising spend.</p>

            <h3>The unique challenges of programmatic advertising in Sri Lanka</h3>
            <p><strong>Limited premium local inventory.</strong> Major global exchanges have access to millions of international publishers, but Sri Lankan premium inventory is extremely thin. When you target "Sri Lanka" on a programmatic platform, your ad frequently appears on low-traffic, low-quality websites rather than the established local platforms your audience actually uses.</p>
            <p><strong>Ad fraud is a measurable problem.</strong> Click farms, bot traffic and invalid impressions inflate metrics without delivering any genuine audience. Most programmatic campaigns in Sri Lanka cannot reliably separate genuine local user traffic from fraudulent activity.</p>
            <p><strong>The technology fee drain.</strong> Industry research consistently shows that <strong>30–50% of every programmatic advertising rupee</strong> goes to technology intermediaries rather than to actual ad placements. For a LKR 500,000 campaign, that's up to LKR 250,000 in fees that never reach a real audience.</p>
            <p><strong>Brand safety cannot be guaranteed.</strong> Without knowing exactly which websites your ads will appear on, you cannot guarantee that your brand will not appear next to problematic or irrelevant content.</p>
            <p><strong>Measurement is opaque.</strong> Third-party programmatic reporting is notoriously difficult to audit independently. Local advertisers regularly find it nearly impossible to verify that the impressions they paid for were genuinely served to real Sri Lankan users.</p>

            <h3>Direct display advertising: the smarter alternative</h3>
            <p>Sri Lanka's most sophisticated advertisers are increasingly turning to <strong>direct display advertising</strong> — buying banner placements directly from premium local publishers, bypassing the programmatic supply chain entirely. Cypher Digital operates Sri Lanka's most comprehensive direct advertising network across three of the island's most established digital platforms:</p>
            <ul>
              <li><strong>FindIt.lk</strong> — Sri Lanka's No.1 offer finder (<a href="https://www.findit.lk/" target="_blank" rel="noopener noreferrer">www.findit.lk</a>), where Sri Lankans discover best businesses voted and trusted by other Sri Lankans.</li>
              <li><strong>Studyway.lk</strong> — Sri Lanka's No.1 education information hub (<a href="https://www.studyway.lk/" target="_blank" rel="noopener noreferrer">www.studyway.lk</a>), reaching students, parents and professionals researching qualifications.</li>
              <li><strong>YouJobs.lk</strong> — Sri Lanka's leading job website (<a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer">youjobs.lk</a>), connecting employers with active job seekers and working professionals.</li>
            </ul>

            <h3>Related advertising services</h3>
            <p>Looking at a wider media mix? Explore our <Link to="/advertising-in-sri-lanka">advertising in Sri Lanka</Link> pillar, <Link to="/media-buying-agencies-sri-lanka">media buying</Link>, <Link to="/google-ads-sri-lanka">Google Ads</Link>, <Link to="/facebook-ads-sri-lanka">Facebook Ads</Link> and <Link to="/seo-services-sri-lanka">SEO services</Link>.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">FAQ</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Programmatic advertising in Sri Lanka — common questions</h2>
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
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-center">Start your direct display campaign today</h2>
          <p className="text-muted-foreground text-center mb-8">Get a custom media plan across FindIt.lk, Studyway.lk and YouJobs.lk — live within 24 hours.</p>
          <InquiryForm source="Programmatic Advertising Sri Lanka" />
        </div>
      </section>
    </>
  );
};

export default ProgrammaticAdvertising;