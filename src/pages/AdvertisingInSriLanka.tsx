import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, ArrowRight, TrendingUp, Megaphone } from "lucide-react";

const channels = [
  { tone: "primary", icon: "📱", name: "Facebook & Instagram Ads", cost: "From LKR 5,000/mo · CPC LKR 10–90", desc: "Sri Lanka's #1 digital channel with 8M+ Facebook users. Unmatched targeting by age, location, income, interest, language. Best for lead gen, ecommerce, local SMEs and brand campaigns. Sinhala and Tamil supported.", tags: ["8M+ reach", "Precise targeting", "Lead gen"], link: "/facebook-ads-sri-lanka", linkLabel: "Facebook Ads in Sri Lanka" },
  { tone: "primary", icon: "🔍", name: "Google Ads (Search & Display)", cost: "From LKR 20,000/mo · CPC LKR 30–300", desc: "Capture customers actively searching for your product or service. Search Ads deliver the highest purchase intent traffic in digital. Display reaches millions of Sri Lankan websites. Fastest-growing channel at 10.43% CAGR.", tags: ["High intent", "Search #1", "Instant"], link: "/google-ads-sri-lanka", linkLabel: "Google Ads in Sri Lanka" },
  { tone: "primary", icon: "🎵", name: "TikTok Advertising", cost: "From LKR 15,000/mo · CPM LKR 300–900", desc: "5.79M users aged 18+. TikTok reaches 33.9% of all Sri Lankan adults with strong 18–35 penetration. The fastest-growing platform for youth-targeted brands in Sri Lanka.", tags: ["5.79M users", "18–35 audience", "Fastest growing"], link: "/tiktok-marketing-sri-lanka", linkLabel: "TikTok Marketing in Sri Lanka" },
  { tone: "primary", icon: "▶️", name: "YouTube Advertising", cost: "From LKR 10,000/mo · CPV LKR 50–200", desc: "6M+ YouTube users in Sri Lanka. Video ad market growing 5.07% CAGR to USD 56.6M by 2028. Skippable and non-skippable formats — strongest channel for brand storytelling and demos.", tags: ["6M users", "Video first", "Brand awareness"], link: "/video-production-sri-lanka", linkLabel: "Video Production in Sri Lanka" },
  { tone: "primary", icon: "🎯", name: "SEO (Search Engine Optimisation)", cost: "From LKR 25,000/mo · Long-term ROI", desc: "Organic rankings deliver compounding free traffic indefinitely. The highest long-term ROI channel in digital. Targets Sri Lankans searching for your products right now — pages ranked today drive leads for years.", tags: ["Long-term ROI", "Free traffic", "Trust"], link: "/seo-services-sri-lanka", linkLabel: "SEO Services in Sri Lanka" },
  { tone: "primary", icon: "🤝", name: "Influencer Marketing", cost: "LKR 15,000–500,000 per campaign", desc: "Collaborating with Sri Lankan creators across Instagram, TikTok, YouTube, Facebook. Trusted recommendations outperform traditional ads in recall and conversion among younger audiences.", tags: ["High trust", "Youth reach", "Local culture"], link: "/influencer-marketing-sri-lanka", linkLabel: "Influencer Marketing in Sri Lanka" },
  { tone: "tv", icon: "📺", name: "Television Advertising", cost: "LKR 50,000–400,000 per 30s spot", desc: "Sri Lanka's most powerful mass-reach medium. Hiru, Sirasa, Derana reach millions simultaneously. Prime time 7–10:30 PM. Essential for FMCG, telecom, banking, automotive and national brand building.", tags: ["Millions reach", "Brand authority", "All demos"], link: "/tv-advertising-sri-lanka", linkLabel: "TV Advertising in Sri Lanka" },
  { tone: "radio", icon: "📻", name: "Radio Advertising", cost: "LKR 10,000–80,000 per 30s spot", desc: "30+ FM stations in Sinhala, Tamil and English. Sirasa FM, Hiru FM, Yes FM, Shakthi FM. Morning drive 6–10 AM is the only unskippable commuter window. Most affordable mass medium.", tags: ["Commuter reach", "No skip", "Affordable"], link: "/radio-advertising-sri-lanka", linkLabel: "Radio Advertising in Sri Lanka" },
  { tone: "print", icon: "📰", name: "Newspaper Advertising", cost: "LKR 40,000–900,000 per ad", desc: "Lankadeepa (580K Sunday circulation), Sunday Times (330K), Daily Mirror, Virakesari. Highest credibility of any channel. Effective for real estate, recruitment, B2B, legal notices and Sinhala/Tamil mass market.", tags: ["High credibility", "580K circulation", "All 3 languages"], link: "/newspaper-advertising-sri-lanka", linkLabel: "Newspaper Advertising in Sri Lanka" },
  { tone: "outdoor", icon: "🪧", name: "Outdoor (OOH) Advertising", cost: "LKR 50,000–500,000+ per site/mo", desc: "Billboards, LED screens, transit and airport displays across Colombo and major cities. Cannot be blocked or skipped. Premium locations on Galle Road, Rajagiriya and BIA.", tags: ["24/7 visibility", "Unskippable", "Premium locations"] },
  { tone: "primary", icon: "💼", name: "LinkedIn Advertising", cost: "From LKR 30,000/mo", desc: "500K–800K Sri Lankan professionals. The only platform with precise B2B targeting by job title, company, industry and seniority. Essential for SaaS, corporate services, finance and recruitment.", tags: ["B2B", "Decision-makers", "Professional"], link: "/linkedin-marketing-sri-lanka", linkLabel: "LinkedIn Marketing in Sri Lanka" },
  { tone: "primary", icon: "🎬", name: "Video Production & Ads", cost: "LKR 50,000–500,000 per video", desc: "Professional video for Facebook, YouTube, TikTok, TV and Instagram. Video consistently outperforms static across all platforms. Reels, shorts, demos, brand films and testimonials drive the strongest ROI in 2026.", tags: ["Highest engagement", "Multi-platform", "Best ROI"], link: "/video-production-sri-lanka", linkLabel: "Video Production in Sri Lanka" },
];

const toneClass: Record<string, string> = {
  primary: "border-t-primary",
  tv: "border-t-purple-500",
  radio: "border-t-amber-500",
  print: "border-t-emerald-600",
  outdoor: "border-t-blue-600",
};

const faqs = [
  { q: "How much does advertising cost in Sri Lanka?", a: "Costs vary by channel. Facebook Ads start from LKR 5,000/month. Google Ads typically cost LKR 20,000–200,000/month depending on industry. TV advertising requires LKR 500,000+ for a basic campaign. Newspaper full-page ads range LKR 150,000–900,000. Radio spots cost LKR 10,000–80,000 each. Digital advertising is the most cost-effective starting point for most Sri Lankan businesses." },
  { q: "What is the best advertising platform in Sri Lanka?", a: "Facebook is the most widely used platform with 8M+ users — best for lead generation and brand awareness. Google Ads captures high-intent customers already searching. TikTok is the fastest-growing platform for youth-targeted campaigns. For mass traditional reach, TV (Hiru, Sirasa, Derana) reaches millions simultaneously. The best platform depends on budget, audience and objective." },
  { q: "What is the advertising market size in Sri Lanka?", a: "Sri Lanka's digital advertising market reached USD 254 million in 2025 and is projected to grow to USD 308 million by 2028 at 6.64% CAGR. Social media advertising is projected at USD 93.6M by 2028. Search advertising is the fastest-growing segment at 10.43% CAGR, projected to reach USD 110M by 2028." },
  { q: "Is digital advertising effective in Sri Lanka?", a: "Yes. With 11–12 million internet users, 7M+ Facebook users, 5.79M TikTok users, 85%+ mobile internet traffic and a 6.64% annual growth rate in digital ad spend, Sri Lanka's digital advertising ecosystem is mature and effective. Businesses investing in well-managed digital campaigns consistently achieve measurable ROI that traditional media cannot match for most objectives." },
  { q: "How do I advertise on Facebook in Sri Lanka?", a: "Through Facebook Ads Manager: choose your objective (awareness, traffic, leads, conversions), define audience (location, age, interests, language), set a daily or lifetime budget, create your creative and launch. Most Sri Lankan businesses get significantly better results working with a digital marketing agency that manages targeting, creative and bidding professionally." },
  { q: "Should I use traditional or digital advertising in Sri Lanka?", a: "For most SMEs, start with digital (Facebook + Google) — lower cost, precise targeting, measurable results, immediate launch. Once digital is delivering ROI, add radio for commuter frequency, newspaper for credibility, and TV for national brand building. The most effective Sri Lankan campaigns combine both — digital for targeting and conversion, traditional for reach and trust." },
  { q: "Which industries spend the most on advertising in Sri Lanka?", a: "The top spenders are Telecommunications (Dialog, Mobitel, Hutch), FMCG brands (Unilever, MAS, local brands), Banking & Finance, Automotive dealerships, Real Estate developers, Education institutions and Tourism & Hospitality. These sectors collectively drive the majority of ad spend across TV, digital, radio and print." },
  { q: "How long does it take to see results from advertising in Sri Lanka?", a: "Digital advertising (Facebook, Google) shows initial results within 7–14 days, with full optimisation in 30–60 days. SEO typically shows meaningful results in 3–6 months. Radio and newspaper campaigns drive response within days of going live. TV brand campaigns show awareness lift over 4–8 weeks. Brand building across any channel is a 6–12 month minimum investment." },
  { q: "What is the minimum budget to start advertising in Sri Lanka?", a: "You can start Facebook or Instagram ads from as little as LKR 5,000–10,000/month, but a realistic minimum to generate meaningful leads is LKR 20,000–30,000/month per platform. Google Search Ads need LKR 25,000+ to gather conversion data. For traditional channels, radio starts around LKR 50,000/month, newspaper from LKR 80,000 per insertion, and TV from LKR 500,000 for a basic campaign." },
  { q: "Do I need a digital marketing agency to advertise in Sri Lanka?", a: "Not always — small brand-awareness boosts can be self-managed. But for lead generation, e-commerce, or competitive industries (real estate, education, healthcare, finance), an agency typically delivers 3–5× better ROI through proper targeting, creative testing, landing page optimisation, pixel/GA4 tracking and continuous bid management. Agency fees are usually recovered within the first 60 days." },
  { q: "What languages should I use in my Sri Lankan ads?", a: "Use Sinhala for mass-market consumer campaigns (FMCG, retail, telco), Tamil for Northern, Eastern and Plantation regions, and English for premium, B2B, tech, education and tourism audiences. Best practice is to run separate creatives per language rather than mixing — single-language ads consistently outperform bilingual creatives in CTR and conversion rate." },
  { q: "When are the best times of year to advertise in Sri Lanka?", a: "Peak advertising windows are Sinhala & Tamil New Year (April), Vesak (May), back-to-school (January, May), Ramadan & Eid, Christmas & year-end (Nov–Dec), and the school holiday tourism season (Dec–March). Plan campaigns 4–6 weeks ahead of each peak. Off-peak months (Feb, June, September) typically offer 15–25% lower CPMs on Facebook and Google." },
  { q: "How do I measure advertising ROI in Sri Lanka?", a: "Track cost per lead (CPL), cost per acquisition (CPA), return on ad spend (ROAS), click-through rate (CTR) and conversion rate using Facebook Pixel, Google Tag Manager and GA4. For offline channels (TV, radio, print), use unique phone numbers, dedicated landing pages, promo codes or post-campaign surveys. A healthy benchmark for Sri Lankan SMEs is 3–5× ROAS within 90 days." },
  { q: "Can I run ads targeting specific cities like Colombo, Kandy or Galle?", a: "Yes. Facebook, Google and TikTok all support city-level and even radius-based targeting (e.g. 5 km around your store). This is ideal for restaurants, salons, clinics, real estate and retail. For Sri Lanka, the highest-converting urban targeting clusters are Colombo, Kandy, Galle, Negombo, Kurunegala, Jaffna, Matara, Anuradhapura, Gampaha and Ratnapura." },
  { q: "Is WhatsApp advertising effective in Sri Lanka?", a: "Extremely effective. With WhatsApp installed on virtually every smartphone in Sri Lanka, Click-to-WhatsApp ads on Facebook and Instagram consistently deliver 30–60% lower cost per lead than form-fill campaigns. They suit service businesses, real estate, education, healthcare, B2B and any high-consideration purchase where buyers want a quick human conversation before deciding." },
  { q: "What advertising regulations apply in Sri Lanka?", a: "Advertising in Sri Lanka is governed by the Consumer Affairs Authority (CAA) and the Sri Lanka Standards Institution. Ads must be truthful, not misleading, and substantiated. Restricted categories include alcohol, tobacco (banned on TV/radio/print), pharmaceuticals (require Ministry of Health approval), and financial products (CBSL guidelines). Facebook and Google also enforce their own ad policies on top of local law." },
];

const wa = (msg: string) => `https://wa.me/94701772626?text=${encodeURIComponent(msg)}`;

const AdvertisingInSriLanka = () => {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];
    const add = (data: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    };
    add({
      "@context": "https://schema.org", "@type": "Article",
      headline: "Advertising in Sri Lanka — The Complete 2026 Guide",
      description: "The most comprehensive guide to advertising in Sri Lanka covering every channel — digital, TV, radio, newspaper, outdoor — with costs, strategies and platform data.",
      author: { "@type": "Organization", name: "Cypher Digital" },
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      mainEntityOfPage: "https://cypherdigital.lk/advertising-in-sri-lanka",
      datePublished: "2025-01-01", dateModified: "2026-05-22",
    });
    add({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
    add({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
        { "@type": "ListItem", position: 2, name: "Advertising in Sri Lanka", item: "https://cypherdigital.lk/advertising-in-sri-lanka" },
      ],
    });
    return () => { scripts.forEach(s => s.remove()); };
  }, []);

  return (
    <>
      <SEOHead
        title="Advertising in Sri Lanka (2026) — The Complete Guide | Cypher Digital"
        description="The most complete guide to advertising in Sri Lanka. TV, radio, newspaper, digital, Facebook, Google, TikTok, outdoor — costs, strategies, platform data and industry tips."
        canonical="https://cypherdigital.lk/advertising-in-sri-lanka"
      />

      <PageBreadcrumb items={[{ label: "Advertising in Sri Lanka" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Updated 2026 — Most Complete Guide
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advertising in <span className="text-primary">Sri Lanka</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The most comprehensive guide to every advertising channel in Sri Lanka — digital, TV, radio, newspaper and outdoor. Real costs, real strategies and everything a business needs to grow. Published by <strong>Cypher Digital</strong>.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href={wa("Hi, I want a free advertising consultation")} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Get a Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg"><a href="#channels">Explore All Channels</a></Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border rounded-lg overflow-hidden border">
            {[
              ["USD 254M", "Digital Ad Market 2025"],
              ["12M+", "Internet Users"],
              ["8M+", "Facebook Users"],
              ["5.79M", "TikTok Users (18+)"],
              ["85%+", "Mobile Internet"],
            ].map(([n, l]) => (
              <div key={l} className="bg-card p-4 text-center">
                <div className="font-heading text-xl md:text-2xl font-bold text-primary">{n}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurWorkSection service="advertising services" />

      {/* TOC */}
      <section className="container mx-auto px-4 max-w-5xl py-10">
        <Card className="p-6 md:p-8 border-l-4 border-l-primary">
          <h2 className="font-heading text-lg font-bold mb-4">📋 Table of Contents</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1.5 text-sm">
            {[
              ["overview", "Market Overview"], ["audience", "Digital Audience Data"], ["channels", "All Advertising Channels"],
              ["digital", "Digital Advertising"], ["tv", "TV Advertising"], ["radio", "Radio Advertising"],
              ["newspaper", "Newspaper Advertising"], ["outdoor", "Outdoor Advertising"], ["costs", "Costs & Rates"],
              ["budget", "Budget Guide"], ["timing", "Best Times to Advertise"], ["targeting", "Targeting Strategies"],
              ["industries", "Industry Strategies"], ["mistakes", "Common Mistakes"], ["metrics", "Key Metrics"],
              ["trends", "2026 Trends"], ["related", "Related Guides"], ["faq", "FAQ"],
            ].map(([id, lbl], i) => (
              <a key={id} href={`#${id}`} className="flex items-center gap-2 py-1 text-muted-foreground hover:text-primary transition-colors">
                <span className="text-primary font-bold text-xs w-6">{String(i + 1).padStart(2, "0")}</span>{lbl}
              </a>
            ))}
          </div>
        </Card>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Market Overview</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Advertising in Sri Lanka — <span className="text-primary">2026 Industry Overview</span></h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Advertising in Sri Lanka</strong> refers to the practice of promoting products, services or brands to Sri Lankan consumers through paid media channels — spanning digital platforms, television, radio, newspapers and outdoor formats. It is one of the most dynamic and fast-growing sectors in Sri Lanka's economy.</p>
          <p>Sri Lanka's <strong className="text-foreground">digital advertising market alone reached approximately USD 254 million in 2025</strong> and is projected to grow to USD 308 million by 2028 at a CAGR of 6.64%. Social media advertising is growing at 5.09% annually and projected to hit USD 93.6 million by 2028. Search advertising is the fastest-growing segment at 10.43% CAGR, projected to reach USD 110 million by 2028.</p>
          <p>Key sectors driving advertising spend include <strong className="text-foreground">FMCG, telecommunications, banking and finance, automotive, real estate, education and tourism</strong>. Traditional media continues to command significant share, but digital is growing faster and now commands the majority of new advertising investment.</p>
        </div>
        <div className="mt-6 p-5 bg-foreground text-background rounded-lg">
          <p className="text-sm leading-relaxed"><strong className="text-orange-300">📈 Key Trend 2026:</strong> Nearly 50% of advertising spend in Asia now flows into social platforms — and Sri Lanka mirrors this trend. Businesses are shifting decisively toward digital: programmatic ads, influencer collaborations and performance-driven campaigns. Sinhala and Tamil content have become almost mandatory for effective digital engagement.</p>
        </div>

        <h3 className="font-heading text-xl font-bold mt-10 mb-4 pb-2 border-b">Sri Lanka Advertising Market at a Glance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["💰", "$254M", "Digital ad market 2025"],
            ["📱", "$93.6M", "Social media ads by 2028"],
            ["🔍", "$110M", "Search advertising by 2028"],
            ["🎬", "$56.6M", "Video advertising by 2028"],
            ["📊", "6.64%", "Annual digital growth"],
            ["📲", "49%", "Digital spend via mobile by 2028"],
            ["🤖", "74%", "Revenue via programmatic by 2028"],
            ["🛒", "$3.2B", "E-commerce by 2029"],
          ].map(([icon, n, l]) => (
            <Card key={l} className="p-5 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-heading text-2xl font-bold text-primary">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{l}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Digital Audience Data</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Sri Lanka's Digital Audience — <span className="text-primary">Key 2025 Data</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Before planning any advertising campaign in Sri Lanka, understanding the size, behaviour and platform preferences of the digital audience is essential. Latest verified data from DataReportal and Statista.</p>

        <h3 className="font-heading text-xl font-bold mb-4 pb-2 border-b">Internet & Mobile</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            ["🌐", "11–12M", "Internet users"],
            ["📡", "50–55%", "Internet penetration"],
            ["📱", "85%+", "Mobile internet traffic"],
            ["⏱️", "2.5–3h", "Avg daily social time"],
          ].map(([icon, n, l]) => (
            <Card key={l} className="p-5 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-heading text-xl font-bold text-primary">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{l}</div>
            </Card>
          ))}
        </div>

        <h3 className="font-heading text-xl font-bold mb-4 pb-2 border-b">Social Media Platform Reach in Sri Lanka (2025)</h3>
        <div className="space-y-2">
          {[
            { icon: "📘", name: "Facebook", users: "~8.15M users · +9.3% growth Jan 2024–Jan 2025", pct: 100, note: "Largest platform" },
            { icon: "▶️", name: "YouTube", users: "6M+ users · dominant video platform", pct: 74, note: "74% of Facebook" },
            { icon: "🎵", name: "TikTok", users: "5.79M users aged 18+ · 33.9% adult reach", pct: 71, note: "Fastest growing" },
            { icon: "📸", name: "Instagram", users: "2M+ users · strong urban fashion & lifestyle", pct: 25, note: "Growing urban" },
            { icon: "💼", name: "LinkedIn", users: "500K–800K · professionals & B2B decision-makers", pct: 10, note: "B2B focused" },
          ].map(p => (
            <div key={p.name} className="flex items-center gap-4 p-4 bg-card border rounded-lg">
              <div className="text-2xl w-10 text-center">{p.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.users}</div>
              </div>
              <div className="w-40 hidden sm:block">
                <div className="h-2 bg-secondary rounded-full overflow-hidden mb-1">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${p.pct}%` }} />
                </div>
                <div className="text-[10px] font-bold text-primary text-right">{p.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-5 bg-primary/5 border-l-4 border-l-primary rounded-r-lg">
          <p className="text-sm"><strong className="text-primary">💡 Key Insight:</strong> Facebook's potential ad reach in Sri Lanka grew by 700,000 users (+9.3%) between January 2024 and January 2025. TikTok now reaches 33.9% of all Sri Lankan adults aged 18+, making it critical for youth-targeted campaigns in 2026.</p>
        </div>
      </section>

      {/* CHANNELS */}
      <section id="channels" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">All Advertising Channels</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Every Advertising Channel <span className="text-primary">Available in Sri Lanka</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Sri Lanka offers a full spectrum of advertising channels — from precision-targeted digital platforms to mass-reach traditional media. Here is every major channel, with costs, strengths and who it is best for.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map(c => (
            <Card key={c.name} className={`p-5 border-t-4 ${toneClass[c.tone]} hover:shadow-lg transition-all hover:-translate-y-0.5`}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="font-bold text-base mb-1">{c.name}</div>
              <div className="text-xs font-bold text-primary mb-2">{c.cost}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {c.tags.map(t => <span key={t} className="text-[10px] font-semibold px-2 py-0.5 bg-secondary border rounded">{t}</span>)}
              </div>
              {c.link && (
                <Link to={c.link} className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                  Learn about {c.linkLabel} <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* DIGITAL TABLE */}
      <section id="digital" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Digital Advertising</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Digital Advertising in <span className="text-primary">Sri Lanka</span> — Platform by Platform</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Digital advertising is now the dominant and fastest-growing form of advertising in Sri Lanka. Here is a complete channel-by-channel breakdown.</p>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader><TableRow className="bg-foreground hover:bg-foreground"><TableHead className="text-background">Platform</TableHead><TableHead className="text-background">SL Users</TableHead><TableHead className="text-background">Best For</TableHead><TableHead className="text-background">Avg Cost</TableHead><TableHead className="text-background">Targeting</TableHead></TableRow></TableHeader>
            <TableBody>
              {[
                ["Facebook Ads", "8.15M+", "Lead gen, ecommerce, local", "CPC LKR 10–90", "Excellent"],
                ["Google Search", "11–12M searches/day", "High-intent buyers, services", "CPC LKR 30–300", "Excellent"],
                ["YouTube Ads", "6M+", "Brand awareness, demos", "CPV LKR 50–200", "Good"],
                ["TikTok Ads", "5.79M (18+)", "Youth, lifestyle, FMCG", "CPM LKR 300–900", "Good"],
                ["Instagram Ads", "2M+", "Fashion, beauty, food", "CPC LKR 15–80", "Excellent"],
                ["Google Display", "Millions of sites", "Retargeting, awareness", "CPM LKR 50–200", "Good"],
                ["LinkedIn Ads", "500K–800K", "B2B, recruitment, corporate", "CPC LKR 200–600", "Excellent"],
              ].map(([p, u, b, c, t]) => (
                <TableRow key={p}><TableCell className="font-bold">{p}</TableCell><TableCell>{u}</TableCell><TableCell>{b}</TableCell><TableCell>{c}</TableCell><TableCell><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${t === "Excellent" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{t}</span></TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* TV */}
      <section id="tv" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">TV Advertising</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">TV Advertising in <span className="text-primary">Sri Lanka</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Television remains Sri Lanka's most powerful mass-reach medium — millions of viewers simultaneously across all demographics. Prime time (7–10:30 PM) delivers the largest single advertising audience of any channel in the country.</p>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader><TableRow className="bg-foreground hover:bg-foreground"><TableHead className="text-background">Channel</TableHead><TableHead className="text-background">Prime Time 30s</TableHead><TableHead className="text-background">Off-Peak 30s</TableHead><TableHead className="text-background">Best Audience</TableHead></TableRow></TableHeader>
            <TableBody>
              {[
                ["Hiru TV", "LKR 150,000 – 400,000", "LKR 50,000 – 150,000", "Sinhala mass market, HD"],
                ["Sirasa TV", "LKR 150,000 – 380,000", "LKR 50,000 – 140,000", "Family, householders, FMCG"],
                ["TV Derana", "LKR 140,000 – 380,000", "LKR 45,000 – 130,000", "Urban adults, news audience"],
                ["Swarnavahini", "LKR 100,000 – 280,000", "LKR 35,000 – 100,000", "Rural & regional Sri Lanka"],
                ["ITN", "LKR 80,000 – 220,000", "LKR 30,000 – 90,000", "Nationwide coverage"],
                ["Shakthi TV", "LKR 80,000 – 220,000", "LKR 30,000 – 90,000", "Tamil-speaking consumers"],
              ].map(([a, b, c, d]) => (<TableRow key={a}><TableCell className="font-bold">{a}</TableCell><TableCell>{b}</TableCell><TableCell>{c}</TableCell><TableCell>{d}</TableCell></TableRow>))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm">→ Full guide: <Link to="/tv-advertising-sri-lanka" className="text-primary font-bold hover:underline">TV Advertising in Sri Lanka — Complete 2026 Guide</Link></p>
        <p className="mt-3 text-sm text-muted-foreground">
          If you are comparing <Link to="/blog/tv-advertising-companies-sri-lanka" className="text-primary font-semibold hover:underline">TV advertising companies in Sri Lanka</Link>, our guide covers what each type of agency offers and how to choose the right one. For a complete breakdown of channels, rates and time slots, see our <Link to="/tv-advertising-sri-lanka" className="text-primary font-semibold hover:underline">TV advertising in Sri Lanka</Link> guide.
        </p>
      </section>

      {/* RADIO */}
      <section id="radio" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Radio Advertising</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Radio Advertising in <span className="text-primary">Sri Lanka</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">30+ FM stations reach millions of Sri Lankan listeners daily. Radio's morning drive (6–10 AM) is the only medium that reaches commuters with a captive, unskippable audience.</p>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader><TableRow className="bg-foreground hover:bg-foreground"><TableHead className="text-background">Station</TableHead><TableHead className="text-background">Language</TableHead><TableHead className="text-background">Morning Drive 30s</TableHead><TableHead className="text-background">Off-Peak 30s</TableHead><TableHead className="text-background">Best For</TableHead></TableRow></TableHeader>
            <TableBody>
              {[
                ["Sirasa FM", "Sinhala", "LKR 40,000 – 80,000", "LKR 10,000 – 30,000", "Sinhala mass market"],
                ["Hiru FM", "Sinhala", "LKR 40,000 – 80,000", "LKR 10,000 – 28,000", "Family, entertainment"],
                ["Yes FM", "English", "LKR 30,000 – 60,000", "LKR 8,000 – 22,000", "Urban English professionals"],
                ["Shaa FM", "Sinhala", "LKR 25,000 – 55,000", "LKR 7,000 – 20,000", "Sinhala youth 15–30"],
                ["Shakthi FM", "Tamil", "LKR 25,000 – 55,000", "LKR 7,000 – 20,000", "Tamil island-wide"],
              ].map(r => (<TableRow key={r[0]}>{r.map((c, i) => <TableCell key={i} className={i === 0 ? "font-bold" : ""}>{c}</TableCell>)}</TableRow>))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm">→ Full guide: <Link to="/radio-advertising-sri-lanka" className="text-primary font-bold hover:underline">Radio Advertising in Sri Lanka — Complete 2026 Guide</Link></p>
      </section>

      {/* NEWSPAPER */}
      <section id="newspaper" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Newspaper Advertising</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Newspaper Advertising in <span className="text-primary">Sri Lanka</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Sri Lanka has 15+ major newspapers across English, Sinhala and Tamil. Lankadeepa is the country's most widely read with 580,000 Sunday circulation. Print delivers the highest credibility of any advertising channel.</p>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader><TableRow className="bg-foreground hover:bg-foreground"><TableHead className="text-background">Publication</TableHead><TableHead className="text-background">Language</TableHead><TableHead className="text-background">Full Page</TableHead><TableHead className="text-background">Circulation</TableHead><TableHead className="text-background">Best For</TableHead></TableRow></TableHeader>
            <TableBody>
              {[
                ["Irida Lankadeepa", "Sinhala", "LKR 500,000 – 900,000", "580,000+", "Sinhala mass (Sunday)"],
                ["Lankadeepa Daily", "Sinhala", "LKR 300,000 – 600,000", "285,000", "Sinhala daily campaigns"],
                ["Sunday Times", "English", "LKR 400,000 – 750,000", "330,000+", "English families & professionals"],
                ["Daily Mirror", "English", "LKR 250,000 – 500,000", "High", "Urban English professionals"],
                ["Daily FT", "English", "LKR 200,000 – 400,000", "Business", "CEO/CFO/Business decision-makers"],
                ["Virakesari", "Tamil", "LKR 150,000 – 350,000", "Leading Tamil", "National Tamil audience"],
              ].map(r => (<TableRow key={r[0]}>{r.map((c, i) => <TableCell key={i} className={i === 0 ? "font-bold" : ""}>{c}</TableCell>)}</TableRow>))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm">→ Full guide: <Link to="/newspaper-advertising-sri-lanka" className="text-primary font-bold hover:underline">Newspaper Advertising in Sri Lanka — Complete 2026 Guide</Link></p>
      </section>

      {/* OUTDOOR */}
      <section id="outdoor" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Outdoor Advertising</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Outdoor (OOH) Advertising in <span className="text-primary">Sri Lanka</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Outdoor advertising covers billboards, LED digital screens, transit advertising and airport displays. It cannot be blocked, skipped or turned off — delivering 24/7 brand visibility in high-traffic locations.</p>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader><TableRow className="bg-foreground hover:bg-foreground"><TableHead className="text-background">Format</TableHead><TableHead className="text-background">Location</TableHead><TableHead className="text-background">Monthly Cost</TableHead><TableHead className="text-background">Best For</TableHead></TableRow></TableHeader>
            <TableBody>
              {[
                ["Large Billboard (Static)", "Major roads, Galle Road, Rajagiriya", "LKR 100,000 – 400,000", "Brand awareness, FMCG, telecom"],
                ["LED Digital Billboard", "Colombo city, intersections", "LKR 200,000 – 600,000", "Dynamic campaign messages"],
                ["Airport Advertising", "BIA — Arrivals, Departures", "USD 2,250+/day", "Tourism, luxury, international"],
                ["Transit Ads (Buses)", "Island-wide routes", "LKR 30,000 – 150,000", "Mass market, regional reach"],
                ["Mall / Indoor Screens", "One Galle Face, Liberty, Majestic City", "LKR 50,000 – 200,000", "Retail, lifestyle, consumer"],
                ["Lamp Post Banners", "Colombo, provincial capitals", "LKR 5,000 – 25,000 per post", "Events, local promotions"],
              ].map(r => (<TableRow key={r[0]}>{r.map((c, i) => <TableCell key={i} className={i === 0 ? "font-bold" : ""}>{c}</TableCell>)}</TableRow>))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm">→ Also see: <Link to="/media-buying-agencies-sri-lanka" className="text-primary font-bold hover:underline">Media Buying Agencies in Sri Lanka</Link> for expert outdoor media planning.</p>
      </section>

      {/* COSTS */}
      <section id="costs" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Advertising Costs</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Complete Advertising Cost Guide — <span className="text-primary">Sri Lanka 2026</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">A single comprehensive cost reference for every major advertising channel in Sri Lanka.</p>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader><TableRow className="bg-foreground hover:bg-foreground"><TableHead className="text-background">Channel</TableHead><TableHead className="text-background">Entry</TableHead><TableHead className="text-background">Monthly Campaign</TableHead><TableHead className="text-background">Best Starting Point</TableHead></TableRow></TableHeader>
            <TableBody>
              {[
                ["Facebook Ads", "LKR 5,000", "LKR 15,000 – 200,000", "SME", "emerald"],
                ["Google Search Ads", "LKR 10,000", "LKR 20,000 – 300,000", "SME", "emerald"],
                ["TikTok Ads", "LKR 15,000", "LKR 25,000 – 200,000", "SME", "emerald"],
                ["YouTube Ads", "LKR 10,000", "LKR 20,000 – 150,000", "SME", "emerald"],
                ["SEO", "LKR 25,000/mo", "LKR 25,000 – 150,000", "SME", "emerald"],
                ["Influencer Marketing", "LKR 15,000/campaign", "LKR 30,000 – 500,000", "Mid-size", "amber"],
                ["Radio Advertising", "LKR 10,000/spot", "LKR 100,000 – 600,000", "Mid-size", "amber"],
                ["Newspaper (¼ page)", "LKR 40,000", "LKR 40,000 – 900,000", "Mid-size", "amber"],
                ["Outdoor / Billboard", "LKR 50,000/mo", "LKR 50,000 – 600,000", "Mid-size", "amber"],
                ["TV Advertising", "LKR 500,000+", "LKR 500,000 – 5,000,000+", "Large brand", "red"],
              ].map(([ch, e, m, t, color]) => (
                <TableRow key={ch}>
                  <TableCell className="font-bold">{ch}</TableCell><TableCell>{e}</TableCell><TableCell>{m}</TableCell>
                  <TableCell><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${color === "emerald" ? "bg-emerald-100 text-emerald-700" : color === "amber" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>{t}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* BUDGET */}
      <section id="budget" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Budget Planning</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Advertising Budget Guide for <span className="text-primary">Sri Lankan Businesses</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">How much should your business spend on advertising in Sri Lanka? Here is a practical guide by business size with channel recommendations.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { tier: "🌱 Startup / Small Business", amt: "LKR 30,000 – 150,000", items: ["Facebook & Instagram Ads — LKR 15,000–80,000", "Google Ads (basic) — LKR 10,000–40,000", "Social media management — LKR 15,000–30,000", "Basic graphic design — LKR 6,000+"] },
            { tier: "📈 Growing Business", amt: "LKR 150,000 – 600,000", items: ["Facebook & Google Ads — LKR 80,000–250,000", "SEO services — LKR 25,000–80,000", "TikTok or YouTube — LKR 20,000–80,000", "Radio spots (off-peak) — LKR 30,000–100,000", "Video creation — LKR 30,000–80,000"] },
            { tier: "🏢 Established Brand", amt: "LKR 600,000 – 3,000,000", items: ["Multi-platform digital — LKR 200,000–800,000", "TV advertising (off-peak) — LKR 300,000–800,000", "Radio campaign — LKR 100,000–300,000", "Newspaper — LKR 100,000–400,000", "Outdoor / Billboard — LKR 100,000–400,000"] },
            { tier: "🏆 Large Enterprise / FMCG", amt: "LKR 3,000,000+", items: ["TV prime time — LKR 1,000,000+", "Digital multi-channel — LKR 500,000+", "Radio island-wide — LKR 300,000+", "Newspaper full pages — LKR 500,000+", "Outdoor / Airport / Transit — LKR 500,000+"] },
          ].map(b => (
            <Card key={b.tier} className="p-6">
              <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">{b.tier}</div>
              <div className="font-heading text-2xl font-bold mb-1">{b.amt}</div>
              <div className="text-xs text-muted-foreground mb-3">per month total</div>
              <ul className="space-y-1.5">
                {b.items.map(i => <li key={i} className="text-sm text-muted-foreground border-b last:border-0 pb-1.5 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold">{i}</li>)}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-6 p-5 bg-primary/5 border-l-4 border-l-primary rounded-r-lg">
          <p className="text-sm"><strong className="text-primary">💡 Budget Rule:</strong> Allocate <strong>5–15% of revenue to advertising</strong>. New businesses should spend at the higher end to build brand awareness faster. As your brand matures, efficiency improves and you can achieve more with less.</p>
        </div>
      </section>

      {/* TIMING */}
      <section id="timing" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Best Times to Advertise</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Best Times to <span className="text-primary">Advertise in Sri Lanka</span></h2>
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader><TableRow className="bg-foreground hover:bg-foreground"><TableHead className="text-background">Channel</TableHead><TableHead className="text-background">Best Day/Time</TableHead><TableHead className="text-background">Why</TableHead></TableRow></TableHeader>
            <TableBody>
              {[
                ["Facebook / Instagram", "7–9 PM daily, especially Wed–Sat", "Evening scrolling peak — high engagement"],
                ["Google Search", "9 AM–12 PM & 7–9 PM weekdays", "Purchase-intent peaks during work breaks and evenings"],
                ["TV Advertising", "7:00–10:30 PM (prime time)", "Highest viewership — families home for evening"],
                ["Radio Advertising", "6–10 AM & 4–7 PM weekdays", "Morning and evening commuter drive time"],
                ["Newspaper", "Sunday editions", "2–3× higher circulation than weekday"],
                ["TikTok Ads", "8–11 PM daily, weekends", "Youth audience most active during leisure"],
                ["Seasonal Peaks", "Avurudu (April), Christmas (Dec), Vesak (May)", "Consumer spending highest — book 3–5 weeks early"],
              ].map(r => (<TableRow key={r[0]}><TableCell className="font-bold">{r[0]}</TableCell><TableCell>{r[1]}</TableCell><TableCell>{r[2]}</TableCell></TableRow>))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* TARGETING */}
      <section id="targeting" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Targeting Strategies</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Advertising Targeting Strategies for <span className="text-primary">Sri Lanka</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">The most effective Sri Lankan campaigns use intelligent targeting to reach the right audience at the right time — rather than broadcasting to everyone and wasting budget.</p>

        <h3 className="font-heading text-xl font-bold mt-6 mb-3 pb-2 border-b">Geographic Targeting</h3>
        <p className="text-muted-foreground mb-3">Sri Lanka's population is concentrated in key cities and the Western Province. For high-value campaigns, start with:</p>
        <ul className="space-y-2 mb-6 text-muted-foreground list-disc pl-5">
          <li><strong className="text-foreground">Colombo District</strong> — highest income, most active digital users, highest CPCs</li>
          <li><strong className="text-foreground">Gampaha & Kalutara</strong> — large suburban populations, strong mobile users</li>
          <li><strong className="text-foreground">Kandy</strong> — Sri Lanka's second city, key for Central Province reach</li>
          <li><strong className="text-foreground">Galle & Matara</strong> — Southern Province, tourism and local commerce</li>
          <li><strong className="text-foreground">Jaffna & Trincomalee</strong> — essential for Tamil-audience campaigns</li>
        </ul>

        <h3 className="font-heading text-xl font-bold mt-6 mb-3 pb-2 border-b">Language Targeting</h3>
        <p className="text-muted-foreground mb-3">Localised advertising in Sinhala and Tamil consistently outperforms English-only campaigns for mass-market audiences in Sri Lanka.</p>
        <ul className="space-y-2 mb-6 text-muted-foreground list-disc pl-5">
          <li><strong className="text-foreground">Sinhala</strong> — 70%+ of population. Essential for mass-market consumer campaigns.</li>
          <li><strong className="text-foreground">Tamil</strong> — 15–18% of population. Essential for Northern/Eastern and Up-Country reach.</li>
          <li><strong className="text-foreground">English</strong> — Higher-income urban educated demographic. Best for premium and B2B.</li>
          <li><strong className="text-foreground">Multilingual campaigns</strong> — Run all three languages simultaneously for national coverage.</li>
        </ul>

        <h3 className="font-heading text-xl font-bold mt-6 mb-3 pb-2 border-b">Retargeting — The Most Underused Strategy in Sri Lanka</h3>
        <p className="text-muted-foreground">Retargeting shows ads specifically to people who have already visited your website, watched your videos or engaged with your social media — the warmest possible audience. In Sri Lanka, retargeting consistently delivers <strong className="text-foreground">3–5× better conversion rates</strong> than cold audience targeting. If you run any advertising in Sri Lanka, retargeting campaigns should be mandatory.</p>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Industry Strategies</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Industry-Specific Advertising Strategies in <span className="text-primary">Sri Lanka</span></h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Different industries require different advertising mixes. Here is the recommended channel strategy and key insight for each major sector.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "🏨", name: "Hotels & Tourism", ch: "Facebook · Google · YouTube · Instagram", tip: "Target international tourists on Google and Meta. Video for virtual tours. Instagram is critical for visual branding. Retarget viewers who didn't book." },
            { icon: "🏠", name: "Real Estate", ch: "Facebook · Google · Newspaper · Outdoor", tip: "Sunday newspaper for mass reach. Facebook lead gen for qualified inquiries. Google captures property searchers. Outdoor for project launches." },
            { icon: "🎓", name: "Education Institutes", ch: "Google · Facebook · TV · Newspaper", tip: "Google captures course searches. Facebook targets parents and students. Intake: Jan–Feb and Aug–Sep. TV for credibility. Newspaper during intake." },
            { icon: "🛒", name: "Ecommerce & Retail", ch: "Facebook · Google · TikTok · Instagram", tip: "Facebook & TikTok for discovery. Google Shopping for intent. Instagram for visual showcase. Retargeting cart abandoners delivers highest ROI." },
            { icon: "💄", name: "Beauty & Salons", ch: "Facebook · Instagram · TikTok · Google Maps", tip: "Before/after content on Instagram and TikTok drives reach. Local targeting within 5–10 km. Google Maps for walk-in discovery. Influencer collabs work." },
            { icon: "🍽️", name: "Restaurants & F&B", ch: "Facebook · Instagram · TikTok · Google Maps", tip: "Food photography drives engagement. Google My Business is critical for local search. TikTok for viral food content. Target within 5 km of location." },
            { icon: "🚗", name: "Automotive", ch: "TV · Facebook · Google · YouTube · Newspaper", tip: "TV for new model launches. Facebook video for test drive leads. YouTube for product showcase. Google for 'buy car Sri Lanka' searches." },
            { icon: "💊", name: "Healthcare & Clinics", ch: "Google · Facebook · Newspaper · Radio", tip: "Google captures 'doctor near me'. Facebook for awareness. Newspaper builds credibility. Radio reaches regions. Trust-building creative — no hard sell." },
            { icon: "💼", name: "Financial Services", ch: "TV · LinkedIn · Google · Newspaper", tip: "TV for trust and mass building. LinkedIn for B2B financial products. Google for specific product searches. Daily FT for senior business decision-makers." },
            { icon: "👗", name: "Fashion & Lifestyle", ch: "Instagram · TikTok · Facebook · Influencers", tip: "Instagram is primary — visual-first. TikTok for trend content. Influencer collaborations are essential. Reels and TikToks outperform static ads." },
          ].map(i => (
            <Card key={i.name} className="p-5">
              <div className="text-2xl mb-2">{i.icon}</div>
              <div className="font-bold text-sm mb-2">{i.name}</div>
              <div className="text-xs font-bold text-primary mb-2">{i.ch}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.tip}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* MISTAKES */}
      <section id="mistakes" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Common Mistakes</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Common Advertising Mistakes <span className="text-primary">Sri Lankan Businesses Make</span></h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            ["Targeting Everyone", "Broad targeting wastes budget. Every LKR reaching someone who will never buy is a LKR lost."],
            ["No Retargeting", "Running ads only to cold audiences ignores 3–5× better ROI from warm website visitors."],
            ["Weak Ad Creative", "Even the best targeting fails with poor creative. Quality is the biggest lever."],
            ["English-Only Ads", "Sinhala and Tamil ads consistently outperform English for mass-market audiences."],
            ["Slow Landing Pages", "85%+ of traffic is mobile. 5+ second loads lose half the visitors before they see your offer."],
            ["No Tracking Setup", "Without Facebook Pixel or Google Tag Manager, you have no data on what's working."],
            ["Stopping Too Early", "Algorithms need 7–14 days to optimise. Stopping early wastes the entire setup investment."],
            ["Single-Channel Only", "Relying on one platform creates fragility. Multi-channel campaigns dramatically outperform."],
            ["No Clear CTA", "Every ad needs one clear action. Ads with multiple CTAs convert at a fraction of well-directed ads."],
            ["Ignoring Seasonal Peaks", "Not booking media for Avurudu, Christmas, Vesak. Peak season is when Sri Lankans spend most."],
          ].map(([t, d]) => (
            <div key={t} className="bg-card border border-l-4 border-l-red-500 rounded-r-lg p-4">
              <div className="font-bold text-xs uppercase tracking-wider text-red-600 mb-1">{t}</div>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Key Metrics</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Advertising Metrics Every Sri Lankan Business <span className="text-primary">Should Track</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["CTR", "Click-Through Rate", "% who click. SL benchmark: 0.5–2% Facebook; 2–6% Google Search"],
            ["CPC", "Cost Per Click", "What you pay per click. FB LKR 10–90; Google LKR 30–300"],
            ["CPM", "Cost Per 1,000 Impressions", "Cost to reach 1,000. FB LKR 200–800; TikTok LKR 300–900"],
            ["CPL", "Cost Per Lead", "Per qualified inquiry. Target below LKR 500–2,000 for most SL"],
            ["CVR", "Conversion Rate", "% of clicks that convert. Improve with landing pages and CTAs"],
            ["ROAS", "Return on Ad Spend", "Revenue per LKR spent. Target minimum 3× for digital"],
            ["GRP", "Gross Rating Points", "TV/radio audience delivery. Used by LMRB"],
            ["ROI", "Return on Investment", "Profit vs total investment. Cypher Digital clients avg +340%"],
          ].map(([a, n, d]) => (
            <Card key={a} className="p-4 text-center">
              <div className="font-heading text-xl font-bold text-primary">{a}</div>
              <div className="font-bold text-xs mt-1">{n}</div>
              <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{d}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* TRENDS */}
      <section id="trends" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">2026 Trends</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Advertising Trends in <span className="text-primary">Sri Lanka 2026</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "📱", t: "Short-form Video Dominance", d: "TikTok, Instagram Reels and YouTube Shorts are the fastest-growing ad formats. 15–60s video ads consistently deliver higher engagement and lower CPL than static across all platforms in 2026." },
            { icon: "🤖", t: "AI-Powered Advertising", d: "Meta Advantage+ and Google Performance Max use AI to optimise targeting, creative and bidding automatically. SL businesses report 20–40% better results than manual management." },
            { icon: "🌐", t: "Programmatic Advertising", d: "74% of digital ad revenue will be programmatic by 2028. Automated, data-driven ad buying is entering the Sri Lankan market for larger advertisers." },
            { icon: "🗣️", t: "Sinhala & Tamil First", d: "Local language content has become almost mandatory for effective digital engagement in Sri Lanka. Campaigns leading with Sinhala or Tamil significantly outperform English-only." },
            { icon: "🤝", t: "Influencer Marketing Growth", d: "Sri Lankan micro-influencers (10K–100K followers) deliver exceptional ROI — trusted recommendations to niche, highly engaged local audiences." },
            { icon: "📊", t: "Performance Marketing", d: "Sri Lankan advertisers are shifting from brand to performance metrics — measurable leads, sales and ROI. Pay-per-result models command the majority of new digital investment." },
          ].map(t => (
            <Card key={t.t} className="p-5">
              <div className="text-2xl mb-2">{t.icon}</div>
              <div className="font-bold text-base mb-2">{t.t}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section id="related" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">Related Guides</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">Complete <span className="text-primary">Advertising Channel Guides</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: "/tv-advertising-sri-lanka", t: "TV Advertising in Sri Lanka", d: "Hiru, Sirasa, Derana — rates, slots, LMRB ratings, prime-time strategy." },
            { to: "/radio-advertising-sri-lanka", t: "Radio Advertising in Sri Lanka", d: "30+ FM stations across Sinhala, Tamil and English. Morning drive strategy and jingle production." },
            { to: "/newspaper-advertising-sri-lanka", t: "Newspaper Advertising in Sri Lanka", d: "Lankadeepa, Sunday Times, Daily Mirror — full-page rates and ROI by publication." },
            { to: "/media-buying-agencies-sri-lanka", t: "Media Buying Agencies in Sri Lanka", d: "Expert planning, negotiation and execution across TV, radio, print, digital and outdoor." },
            { to: "/facebook-ads-sri-lanka", t: "Facebook Ads in Sri Lanka", d: "Sri Lanka's #1 digital channel — campaigns, targeting and ad creative for SMEs." },
            { to: "/google-ads-sri-lanka", t: "Google Ads Sri Lanka", d: "Search, Display and Shopping campaigns for high-intent customer acquisition." },
            { to: "/seo-services-sri-lanka", t: "SEO Services in Sri Lanka", d: "Long-term organic ranking, content strategy and technical SEO for compounding ROI." },
            { to: "/tiktok-marketing-sri-lanka", t: "TikTok Marketing in Sri Lanka", d: "Reach 5.79M+ youth aged 18+ — Sri Lanka's fastest-growing platform in 2026." },
            { to: "/instagram-marketing-sri-lanka", t: "Instagram Marketing in Sri Lanka", d: "Reels, Stories and Shopping campaigns to reach Sri Lanka's lifestyle audience." },
            { to: "/linkedin-marketing-sri-lanka", t: "LinkedIn Advertising in Sri Lanka", d: "B2B lead generation, sponsored content and recruitment campaigns for corporates." },
            { to: "/influencer-marketing-sri-lanka", t: "Influencer Marketing in Sri Lanka", d: "Macro and micro creator partnerships for trust-driven reach and conversions." },
            { to: "/social-media-management-sri-lanka", t: "Social Media Marketing Sri Lanka", d: "Full-service content, community and reporting across Facebook, Instagram and TikTok." },
            { to: "/video-production-sri-lanka", t: "Video Production in Sri Lanka", d: "TVCs, corporate videos, ad films and social-first content shot end-to-end." },
            { to: "/graphic-design-sri-lanka", t: "Graphic Design in Sri Lanka", d: "Logos, brand identity, ad creatives and print collateral for sharper campaigns." },
            { to: "/event-management-sri-lanka", t: "Event Management in Sri Lanka", d: "Corporate events, launches and activations planned and executed end-to-end." },
            { to: "/event-marketing-sri-lanka", t: "Event Marketing in Sri Lanka", d: "Pre-event hype, on-ground capture and post-event amplification across channels." },
          ].map(c => (
            <Card key={c.to} className="p-5 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Link to={c.to} className="font-bold text-base hover:text-primary inline-flex items-center gap-1">{c.t} <ArrowRight className="w-3.5 h-3.5" /></Link>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 max-w-5xl py-12 scroll-mt-20 border-t">
        <div className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase rounded mb-3">FAQ</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions — <span className="text-primary">Advertising in Sri Lanka</span></h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg mb-2 px-4 bg-card">
              <AccordionTrigger className="text-left font-bold text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-20 mt-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Megaphone className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business with Advertising in Sri Lanka?</h2>
          <div className="text-left bg-background/5 border border-background/10 rounded-xl p-6 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Related reading</p>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Discover <Link to="/blog/ai-tools-digital-marketing-sri-lanka-2026" className="text-primary font-semibold hover:underline">AI tools changing digital advertising in Sri Lanka</Link>.</li>
              <li>Read our guide on <Link to="/blog/digital-marketing-healthcare-sri-lanka" className="text-primary font-semibold hover:underline">digital marketing for healthcare in Sri Lanka</Link>.</li>
              <li>Plan <Link to="/blog/avurudu-marketing-ideas-sri-lanka" className="text-primary font-semibold hover:underline">Avurudu advertising campaigns</Link> for seasonal reach.</li>
              <li>Local focus? Read <Link to="/blog/digital-marketing-colombo" className="text-primary font-semibold hover:underline">digital marketing in Colombo</Link>.</li>
              <li>Want to work in the industry? Browse open <Link to="/careers" className="text-primary font-semibold hover:underline">digital marketing jobs in Sri Lanka</Link> at Cypher Digital.</li>
            </ul>
          </div>
          <p className="text-background/70 mb-6">Cypher Digital is Sri Lanka's results-driven advertising and digital marketing agency. We build campaigns across every channel — Facebook, Google, TikTok, TV, radio and more — and deliver measurable ROI for businesses of every size.</p>
          <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
            <a href={wa("Hi, I want a free advertising consultation")} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" /> Get a Free Consultation Today
            </a>
          </Button>
          <div className="mt-6 text-sm text-background/60">
            📞 <a href="tel:+94701772626" className="text-background hover:text-primary font-bold" onClick={() => trackCallClick()}>+94 70 177 2626</a> · 📍 Colombo, Sri Lanka
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvertisingInSriLanka;
