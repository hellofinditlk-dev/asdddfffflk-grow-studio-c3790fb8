import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedPosts from "@/components/RelatedPosts";
import { useEffect } from "react";
import {
  TrendingUp, Users, Eye, Globe, ShoppingCart, ArrowRight, CheckCircle2,
  Megaphone, BarChart3, Target, Zap, Smartphone, AlertTriangle, DollarSign,
  Brain, Layers, MousePointerClick, PieChart, Clock, MapPin, LineChart
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/advertising-hero.jpg";
import typesImg from "@/assets/advertising-types.jpg";
import socialImg from "@/assets/advertising-social.jpg";
import benefitsImg from "@/assets/advertising-benefits.jpg";
import industriesImg from "@/assets/advertising-industries.jpg";
import trendsImg from "@/assets/advertising-trends.jpg";

const industries = [
  { title: "Hotel Advertising", desc: "Hotels must promote their services to travelers searching for accommodation online. Digital marketing strategies such as social media campaigns, search engine advertising, and travel content marketing can significantly increase bookings.", link: "/hotel-digital-marketing-sri-lanka", cta: "hotel digital marketing strategies in Sri Lanka", icon: "🏨" },
  { title: "Travel Agency Advertising", desc: "Travel agencies need to inspire potential travelers and promote destinations effectively through digital campaigns.", link: "/travel-agency-digital-marketing-sri-lanka", cta: "travel agency digital marketing in Sri Lanka", icon: "✈️" },
  { title: "Fashion Brand Advertising", desc: "Fashion brands depend heavily on visual marketing strategies and influencer collaborations to build their brand identity.", link: "/fashion-brand-digital-marketing-sri-lanka", cta: "fashion brand digital marketing", icon: "👗" },
  { title: "Restaurant Advertising", desc: "Restaurants attract customers through social media engagement, food photography, and local search marketing.", link: "/restaurant-digital-marketing-sri-lanka", cta: "restaurant digital marketing strategies", icon: "🍽️" },
  { title: "Real Estate Advertising", desc: "Property buyers now search online before contacting real estate agents. Digital marketing allows real estate companies to showcase listings and generate qualified leads.", link: "/real-estate-digital-marketing-sri-lanka", cta: "real estate digital marketing strategies in Sri Lanka", icon: "🏠" },
  { title: "Education Marketing", desc: "Education institutions must promote courses and attract students through digital platforms including social media, SEO, and targeted advertising.", link: "/education-marketing-agency-sri-lanka", cta: "education marketing strategies for institutes", icon: "🎓" },
  { title: "Beauty Salon Advertising", desc: "Beauty salons rely on social media marketing to showcase transformations and promote services to local customers.", link: "/beauty-salon-digital-marketing-sri-lanka", cta: "beauty salon digital marketing strategies", icon: "💇" },
  { title: "Automotive Advertising", desc: "Automotive businesses promote vehicles through targeted advertising, search engine marketing, and video marketing.", link: "/automotive-digital-marketing-sri-lanka", cta: "automotive digital marketing strategies", icon: "🚗" },
  { title: "Small Business Advertising", desc: "Small businesses can use digital marketing to compete with larger companies and reach local customers cost-effectively.", link: "/small-business-digital-marketing-sri-lanka", cta: "small business digital marketing strategies", icon: "🏪" },
  { title: "Ecommerce Advertising", desc: "Online stores depend heavily on advertising to attract traffic and increase online sales through SEO, paid ads, and social media.", link: "/ecommerce-digital-marketing-sri-lanka", cta: "ecommerce digital marketing strategies", icon: "🛒" },
];

const faqs = [
  {
    q: "What is advertising in Sri Lanka?",
    a: "Advertising in Sri Lanka involves promoting products or services using both digital and traditional channels including Google Ads, social media platforms, TV, radio, billboards, and content marketing to reach target audiences effectively."
  },
  {
    q: "How much does advertising cost in Sri Lanka?",
    a: "Advertising costs vary depending on the platform and campaign type. Digital advertising can start from as little as LKR 10 per click on Google Ads, while social media campaigns can begin with budgets as low as LKR 500 per day. Costs depend on your goals, audience, and strategy."
  },
  {
    q: "What is the best advertising platform in Sri Lanka?",
    a: "Google Ads and Facebook advertising are among the most effective platforms for reaching Sri Lankan audiences. The best platform depends on your business goals, target audience, and marketing budget."
  },
  {
    q: "How can small businesses advertise in Sri Lanka?",
    a: "Small businesses can use cost-effective digital advertising methods such as social media marketing, Google Ads, local SEO, and content marketing to compete with larger companies and reach local customers."
  },
  {
    q: "Why should I hire an advertising agency in Sri Lanka?",
    a: "A professional advertising agency brings expertise in strategy development, campaign management, creative production, and performance tracking. This helps businesses achieve better results and higher return on investment."
  },
  {
    q: "Which advertising method delivers the highest ROI?",
    a: "Digital advertising consistently delivers the highest ROI due to precise targeting, real-time tracking, and cost-effective campaign management. Google Ads and social media advertising are particularly effective for measurable results."
  },
  {
    q: "Is Google Ads effective for businesses in Sri Lanka?",
    a: "Yes — Google Ads targets high-intent users who are actively searching for products and services, making it one of the most effective advertising channels for generating leads and sales in Sri Lanka."
  },
  {
    q: "How long does it take to see results from advertising?",
    a: "Paid advertising (Google Ads, Facebook Ads) delivers immediate traffic and results. SEO and content marketing typically take 3–6 months to build significant organic visibility and traffic."
  },
  { q: "Can I target only people in Colombo with my ads?", a: "Yes. Both Facebook Ads and Google Ads let you target specific cities, provinces, or even a radius around your exact address — down to 1km. You can focus purely on Colombo, or narrow to specific areas like Nugegoda, Dehiwala, or Colombo 3." },
  { q: "Can I run ads in Sinhala in Sri Lanka?", a: "Yes, and for many industries it outperforms English. Facebook and Google both fully support Sinhala text. Sinhala ads typically generate stronger engagement outside Colombo and for mass-market products. Many successful advertisers run separate Sinhala and English campaigns targeting different segments." },
  { q: "Can I target tourists and foreign visitors in Sri Lanka?", a: "Yes. You can target people currently located in Sri Lanka by language (English, German, Chinese, etc.) to reach specific nationalities. This works especially well for hotels, tour operators, and restaurants near tourist areas." },
  { q: "What is the minimum budget to start advertising in Sri Lanka?", a: "You can start Facebook Ads from as little as LKR 500/day. However for meaningful results, we recommend a minimum of LKR 15,000–20,000 per month in ad spend. Below this, the platform algorithm does not have enough data to optimise properly." },
  { q: "How much do Sri Lankan businesses typically spend on advertising per month?", a: "Small businesses typically spend LKR 15,000–50,000/month. Growing businesses spend LKR 50,000–150,000. Established brands spend LKR 200,000–500,000+. These are ad spend figures — agency management fees are separate." },
  { q: "Is Facebook Advertising cheaper than Google Ads in Sri Lanka?", a: "Yes. Facebook Ads cost LKR 8–35 per click on average, while Google Ads cost LKR 40–300+ depending on industry. However Google often delivers higher intent leads because the person is actively searching for your service. The right platform depends on your business type, not just cost." },
  { q: "Is TikTok advertising effective for Sri Lankan businesses?", a: "Yes and it is growing fast. TikTok reaches a large portion of Sri Lanka's 18–35 demographic. Advertising costs are currently lower than Facebook because competition among local advertisers is still relatively low. Businesses in food, fashion, beauty, and entertainment are seeing strong results right now." },
  { q: "Does WhatsApp advertising work in Sri Lanka?", a: "Yes — WhatsApp is one of the most effective direct marketing tools in Sri Lanka given its extremely high usage across all age groups. The most powerful approach is running Click-to-WhatsApp ads on Facebook or Instagram that drive conversations directly into WhatsApp Business. Works especially well for real estate, education, and high-consideration purchases." },
  { q: "Should I use LinkedIn advertising for my Sri Lankan business?", a: "LinkedIn works well for B2B businesses — professional services, software, recruitment, and corporate training. It reaches approximately 2.9 million members in Sri Lanka. Costs are higher than Facebook but the audience quality for reaching managers and business decision-makers is unmatched." },
  { q: "What is the best platform for ecommerce advertising in Sri Lanka?", a: "A combination works best — Facebook and Instagram Ads for product discovery, and Google Shopping Ads for capturing people actively searching to buy. Adding retargeting campaigns on both platforms significantly improves conversion rates." },
  { q: "Why are my Facebook Ads not generating leads in Sri Lanka?", a: "The most common reasons are: audience targeting too broad, ad creative not compelling, landing page not mobile-optimised, wrong campaign objective (e.g. using Boost Post instead of Lead Generation), or budget too low for the algorithm to learn. Most underperforming campaigns can be fixed by improving the landing page and tightening the target audience." },
  { q: "How do I know if my advertising is actually working?", a: "Track three key metrics — cost per lead (spend per enquiry), lead-to-customer rate (how many enquiries convert), and return on ad spend (revenue vs money spent). Use Facebook Ads Manager, Google Ads dashboard, and Google Analytics together. Never judge a campaign on reach or impressions alone." },
  { q: "How long should I run an ad campaign before judging results?", a: "A minimum of 30 days. Facebook's algorithm needs approximately 50 conversion events to exit the learning phase. Stopping at day 5 or 10 means you are ending the campaign just as it starts to optimise. Major decisions should be made after 30–60 days of clean data." },
  { q: "Does advertising work differently in Sri Lanka compared to other countries?", a: "Yes, in several important ways. Facebook dominates far more strongly than in Western markets. Mobile traffic exceeds 85% so mobile-first creative is essential. Sinhala and Tamil language ads significantly outperform English for mass-market products. Seasonal peaks like Avurudu (April), Vesak, and Christmas drive major spikes in consumer spending and ad competition." },
  { q: "What industries get the best results from advertising in Sri Lanka?", a: "Service businesses with clear search intent — real estate, education, healthcare, legal — benefit most from Google Ads. Consumer businesses with visual products — restaurants, fashion, beauty, retail — benefit most from Facebook and Instagram. All business types benefit from consistent SEO as a long-term foundation." },
  { q: "Is advertising effective for small local businesses in Sri Lanka?", a: "Absolutely. Local Facebook and Google Ads with tight geographic targeting are some of the most cost-effective advertising options available to small businesses in Sri Lanka today. A small salon, bakery, or tuition class in Colombo can generate consistent leads with a LKR 20,000–30,000 monthly budget managed properly." },
  { q: "What should I look for when choosing an advertising agency in Sri Lanka?", a: "Look for proven results with real client examples, transparent reporting, clear pricing with no hidden fees, and local market knowledge. Ask to see actual ad account screenshots — not just polished case study PDFs. Avoid agencies that guarantee #1 on Google or promise unrealistically low costs." },
  { q: "Can I manage my own advertising in Sri Lanka without an agency?", a: "Yes, both Facebook Ads Manager and Google Ads are self-serve platforms. However, without experience you will likely spend significant budget in the learning phase making avoidable mistakes. Most businesses find that a good agency pays for itself by reducing wasted spend and generating better quality leads from the same budget." },
  { q: "Are there restrictions on advertising content in Sri Lanka?", a: "Yes. Advertising is subject to the Consumer Affairs Authority Act and industry-specific regulations. Misleading claims, unsubstantiated health claims, and certain financial promotions require specific disclosures. Facebook and Google also apply their own global policies — alcohol, gambling, health supplements, and financial products face additional restrictions and may require pre-approval." },
  { q: "Do I need a registered business to advertise in Sri Lanka?", a: "You do not need a registered business to run Facebook or Google Ads — a personal account works. However running campaigns under a registered business name is recommended for credibility and tax purposes. Google also has an advertiser verification programme requiring identity documents for certain ad categories." }
];

const AdvertisingInSriLanka = () => {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];
    const addSchema = (data: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    };

    addSchema({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Advertising in Sri Lanka: The Complete Guide to Digital Advertising for Businesses",
      description: "Comprehensive guide to advertising in Sri Lanka covering digital advertising, social media ads, search engine advertising, and industry-specific strategies for business growth.",
      image: "https://cypherdigital.lk/og-advertising-sri-lanka.jpg",
      author: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      mainEntityOfPage: "https://cypherdigital.lk/advertising-in-sri-lanka",
      datePublished: "2025-03-16",
      dateModified: "2026-03-19",
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Advertising in Sri Lanka",
      provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "Advertising Services",
      description: "Comprehensive advertising services in Sri Lanka including digital advertising, social media marketing, Google Ads, and brand campaigns."
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
        { "@type": "ListItem", position: 2, name: "Advertising in Sri Lanka", item: "https://cypherdigital.lk/advertising-in-sri-lanka" }
      ]
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Advertising in Sri Lanka – Complete Guide (2026)",
      description: "The most comprehensive guide to advertising in Sri Lanka covering digital channels, costs, strategies, and industry-specific marketing.",
      url: "https://cypherdigital.lk/advertising-in-sri-lanka",
      isPartOf: { "@type": "WebSite", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      about: { "@type": "Thing", name: "Advertising in Sri Lanka" },
      lastReviewed: "2026-03-19"
    });

    return () => { scripts.forEach(s => document.head.removeChild(s)); };
  }, []);

  return (
    <>
      <SEOHead
        title="Advertising Sri Lanka (2026) | Advertising in Sri Lanka Guide"
        description="Advertising Sri Lanka guide covering Sri Lanka advertising, digital marketing, branding, SEO, social media marketing and online advertising services in Sri Lanka."
        canonical="https://cypherdigital.lk/advertising-in-sri-lanka"
      />

      <PageBreadcrumb items={[{ label: "Advertising in Sri Lanka" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Advertising in Sri Lanka - digital marketing analytics dashboard for Sri Lankan businesses" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-bg)/0.92)] to-[hsl(var(--hero-bg)/0.75)]" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            Complete Digital Advertising Guide 2026
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[hsl(var(--hero-foreground))]">
            Advertising in Sri Lanka: The Complete Guide to Digital Advertising for Businesses
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--hero-muted))] max-w-3xl mx-auto leading-relaxed">
            Discover how modern digital advertising strategies help Sri Lankan businesses increase brand awareness, attract customers, and drive measurable growth. Published by <a href="https://cypherdigital.lk/" className="text-primary hover:underline font-semibold">Cypher Digital</a>.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-5xl">

        {/* Table of Contents */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl border border-border bg-secondary">
            <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">📋 Table of Contents – Advertising in Sri Lanka</h2>
            <nav aria-label="Table of contents">
              <ol className="grid sm:grid-cols-2 gap-2">
                {[
                  { id: "what-is", label: "What is Advertising in Sri Lanka?" },
                  { id: "market-overview", label: "Market Overview" },
                  { id: "digital-audience", label: "Digital Audience Data" },
                  { id: "types", label: "Types of Advertising" },
                  { id: "best-channels", label: "Best Advertising Channels" },
                  { id: "costs", label: "Advertising Costs" },
                  { id: "best-times", label: "Best Advertising Times" },
                  { id: "strategies", label: "Best Strategies" },
                  { id: "benefits", label: "Benefits of Digital Advertising" },
                  { id: "metrics", label: "Key Metrics to Track" },
                  { id: "mistakes", label: "Common Mistakes" },
                  { id: "budget", label: "Budget Guide" },
                  { id: "targeting", label: "Targeting Strategies" },
                  { id: "industry-specific", label: "Industry-Specific Strategies" },
                  { id: "trends", label: "Trends (2026)" },
                  { id: "agency", label: "Choosing an Agency" },
                  { id: "faq", label: "FAQs" },
                ].map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="flex items-center gap-2 p-2 rounded-lg hover:bg-background transition-colors text-sm text-muted-foreground hover:text-primary">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">{i + 1}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* What is Advertising - Featured Snippet Bait */}
        <section id="what-is" className="mb-16 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">What is Advertising in Sri Lanka?</h2>
            <div className="p-6 md:p-8 rounded-2xl border-2 border-primary/20 bg-primary/5 mb-6">
              <p className="text-lg leading-relaxed font-medium">
                <strong>Advertising in Sri Lanka</strong> refers to the practice of promoting products, services, or brands to Sri Lankan consumers through digital and traditional media channels. This includes Google Ads, Facebook and Instagram advertising, SEO, YouTube video ads, TikTok campaigns, television, radio, newspaper, and billboard advertising. Sri Lanka's advertising industry is rapidly growing, driven by increasing internet penetration (50–55%), over 8 million social media users, and mobile-first consumer behavior.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Advertising in Sri Lanka has evolved dramatically over the past decade. Businesses are no longer limited to traditional advertising channels such as television, radio, and newspapers. Today, <a href="https://cypherdigital.lk/" className="text-primary font-semibold hover:underline">Cypher Digital</a> helps brands reach their target audience more efficiently through data-driven campaigns across digital platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Companies that invest in modern advertising strategies can increase brand awareness, attract customers, and generate measurable business growth. Whether you run a hotel, restaurant, ecommerce store, or real estate business, advertising plays a critical role in connecting your brand with potential customers.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              This guide explains how advertising works in Sri Lanka and how businesses can use modern marketing strategies to achieve better results.
            </p>
          </div>
        </section>

        {/* Market Overview */}
        <section id="market-overview" className="mb-16 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <PieChart className="w-7 h-7 text-primary" />
              Advertising Industry in Sri Lanka – Market Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              The advertising industry in Sri Lanka has grown rapidly over the past decade. Businesses across industries now invest heavily in advertising to reach customers through digital platforms, traditional media, and integrated marketing campaigns.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Several factors have contributed to the growth of advertising in Sri Lanka:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: Globe, label: "Increased internet penetration" },
                { icon: Users, label: "High social media usage" },
                { icon: ShoppingCart, label: "Growth of e-commerce platforms" },
                { icon: TrendingUp, label: "Rising competition among businesses" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Today, many companies allocate a significant portion of their marketing budget toward digital advertising, making it one of the fastest-growing sectors in Sri Lanka.
            </p>
          </div>
        </section>

        {/* ===== NEW: Digital Audience in Sri Lanka ===== */}
        <section id="digital-audience" className="mb-16 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              Digital Audience in Sri Lanka (Key Marketing Data)
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Understanding the digital audience is essential for planning effective advertising campaigns in Sri Lanka.
            </p>

            <h3 className="font-heading text-xl font-bold mb-4">Internet Usage</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { stat: "11–12M", label: "Internet Users" },
                { stat: "50–55%", label: "Internet Penetration" },
                { stat: "85%+", label: "Mobile Internet Traffic" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 rounded-xl border border-border bg-background text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-primary mb-1">{stat}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-xl font-bold mb-4">Social Media Users</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl border border-border bg-background text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">8M+</p>
                <p className="text-sm text-muted-foreground">Total Social Media Users</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-background text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">2.5–3 hrs</p>
                <p className="text-sm text-muted-foreground">Average Daily Social Media Time</p>
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold mb-4">Most Used Platforms in Sri Lanka</h3>
            <div className="rounded-xl border border-border overflow-hidden mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Platform</TableHead>
                    <TableHead className="font-bold">Estimated Users</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { platform: "Facebook", users: "~7 million" },
                    { platform: "YouTube", users: "~6+ million" },
                    { platform: "Instagram", users: "~2+ million" },
                    { platform: "TikTok", users: "Rapidly growing" },
                  ].map(({ platform, users }) => (
                    <TableRow key={platform}>
                      <TableCell className="font-medium">{platform}</TableCell>
                      <TableCell>{users}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm font-medium text-primary">💡 Insight for marketers: Facebook and YouTube remain the strongest advertising platforms in Sri Lanka.</p>
            </div>
          </div>
        </section>

        {/* Advertising Statistics */}
        <section className="mb-16">
          <div className="bg-[hsl(var(--hero-bg))] text-[hsl(var(--hero-foreground))] rounded-2xl p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              Advertising Statistics in Sri Lanka
            </h2>
            <p className="text-[hsl(var(--hero-muted))] text-center mb-8 max-w-2xl mx-auto">
              These numbers highlight why online advertising has become essential for Sri Lankan businesses.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "8M+", label: "Social Media Users", icon: Users },
                { number: "7M+", label: "Active Facebook Users", icon: Megaphone },
                { number: "6M+", label: "YouTube Users", icon: Eye },
                { number: "85%+", label: "Mobile Internet Traffic", icon: Smartphone },
              ].map(({ number, label, icon: Icon }) => (
                <div key={label} className="text-center p-6 rounded-xl bg-[hsl(var(--hero-foreground)/0.05)] border border-[hsl(var(--hero-foreground)/0.1)]">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{number}</p>
                  <p className="text-sm text-[hsl(var(--hero-muted))]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Advertising */}
        <section id="types" className="mb-16 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Types of Advertising in Sri Lanka</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Businesses in Sri Lanka can choose from several advertising methods depending on their goals, target audience, and marketing budget.
              </p>
              <h3 className="font-heading text-xl font-bold mt-6 mb-3 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-primary" /> Digital Advertising
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Digital advertising is now the fastest-growing advertising channel in Sri Lanka. Online platforms allow businesses to target specific audiences based on demographics, interests, and online behavior.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                For a full comparison, read our guide on <Link to="/blog/traditional-vs-digital-advertising-sri-lanka" className="text-primary hover:underline font-semibold">traditional vs digital advertising in Sri Lanka</Link>.
              </p>
              <ul className="mt-3 space-y-2">
                {["Search engine advertising", "Social media advertising", "Display advertising", "Video advertising", "Influencer marketing"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={typesImg} alt="Types of digital advertising platforms including search, social media, display and video ads" className="w-full h-auto" loading="lazy" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl border border-border bg-background">
              <h3 className="font-heading text-lg font-bold mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> Display Advertising
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Display advertising includes banner ads placed on websites, blogs, and online platforms.
              </p>
              <ul className="space-y-1.5">
                {["Strong visual branding", "Large audience reach", "Effective for brand awareness"].map(b => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-background">
              <h3 className="font-heading text-lg font-bold mb-3 flex items-center gap-2">
                <MousePointerClick className="w-5 h-5 text-primary" /> Native Advertising
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Native advertising blends with website content and appears less intrusive than traditional ads.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This form of advertising is becoming increasingly popular among digital publishers in Sri Lanka.
              </p>
            </div>
          </div>

          {/* Social Media Advertising */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img src={socialImg} alt="Social media advertising platforms including Facebook, Instagram, TikTok, YouTube and LinkedIn for Sri Lankan businesses" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Social Media Advertising
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Social media platforms have become powerful advertising channels in Sri Lanka. Businesses can promote products and services directly to their audience through engaging content and targeted advertising campaigns.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3 text-sm">Advantages include highly targeted audiences, flexible budgets, and high engagement rates.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook advertising</Link></li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Instagram advertising</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> TikTok advertising</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> YouTube advertising</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> LinkedIn advertising</li>
              </ul>
            </div>
          </div>

          {/* Search Engine Advertising */}
          <div className="max-w-4xl mx-auto bg-secondary rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" /> Search Engine Advertising
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Search engine advertising</Link> helps businesses appear when customers search online for products or services. For example, when people search for terms like <strong>advertising agency Sri Lanka</strong>, <strong>digital marketing services Sri Lanka</strong>, or <strong>online marketing Sri Lanka</strong>, search engine ads appear at the top of search results.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Benefits include high purchase intent targeting, immediate visibility, and measurable performance tracking.
            </p>
          </div>
        </section>

        {/* ===== NEW: Best Performing Advertising Channels ===== */}
        <section id="best-channels" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-primary" />
            Best Performing Advertising Channels in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Different industries perform better on different platforms. Here's a breakdown of the best advertising channels for Sri Lankan businesses.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Google Search Ads",
                icon: Globe,
                bestFor: ["Education institutes", "Real estate", "Legal services", "Healthcare", "Finance"],
                reason: "People search when they already want the service."
              },
              {
                title: "Facebook Advertising",
                icon: Megaphone,
                bestFor: ["Ecommerce", "Retail businesses", "Restaurants", "Beauty salons", "Local services"],
                reason: "Strong audience targeting and visual engagement."
              },
              {
                title: "YouTube Advertising",
                icon: Eye,
                bestFor: ["Brand awareness campaigns", "Product launches", "Automotive brands", "Tech products"],
                reason: "Video ads create strong emotional engagement."
              },
              {
                title: "Display Advertising",
                icon: Layers,
                bestFor: ["Brand visibility", "Retargeting campaigns", "Large-scale awareness"],
                reason: "Display ads appear on websites and news platforms."
              },
            ].map(({ title, icon: Icon, bestFor, reason }) => (
              <div key={title} className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3 font-medium">Best for:</p>
                <ul className="space-y-1.5 mb-4">
                  {bestFor.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-primary font-medium italic">💡 {reason}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            New to search ads? Start with our <Link to="/blog/ppc-advertising-explained-sri-lankan-businesses" className="text-primary hover:underline font-semibold">PPC advertising explained</Link> guide for Sri Lankan businesses. For social campaigns, read our complete <Link to="/blog/complete-guide-facebook-ads-businesses-sri-lanka" className="text-primary hover:underline font-semibold">Facebook Ads guide for Sri Lankan businesses</Link> to set up your first campaign.
          </p>
        </section>

        {/* ===== NEW: Typical Advertising Costs ===== */}
        <section id="costs" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <DollarSign className="w-7 h-7 text-primary" />
            Typical Advertising Costs in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Marketing budgets vary widely depending on industry competition. Here are typical cost benchmarks for Sri Lankan businesses.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            See our complete breakdown of <Link to="/blog/digital-marketing-cost-sri-lanka-pricing-guide" className="text-primary hover:underline font-semibold">advertising costs in Sri Lanka</Link> for detailed platform pricing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Google Ads CPC (Cost Per Click)</h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Industry</TableHead>
                      <TableHead className="font-bold">Average CPC</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { industry: "Education", cpc: "LKR 40 – 120" },
                      { industry: "Real Estate", cpc: "LKR 80 – 200" },
                      { industry: "Finance", cpc: "LKR 120 – 300" },
                      { industry: "Ecommerce", cpc: "LKR 30 – 80" },
                    ].map(({ industry, cpc }) => (
                      <TableRow key={industry}>
                        <TableCell className="font-medium">{industry}</TableCell>
                        <TableCell>{cpc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Facebook Advertising CPC</h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Campaign Type</TableHead>
                      <TableHead className="font-bold">Average CPC</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { type: "Traffic campaigns", cpc: "LKR 10 – 40" },
                      { type: "Lead generation", cpc: "LKR 20 – 70" },
                      { type: "Conversion campaigns", cpc: "LKR 30 – 90" },
                    ].map(({ type, cpc }) => (
                      <TableRow key={type}>
                        <TableCell className="font-medium">{type}</TableCell>
                        <TableCell>{cpc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm font-medium text-primary">💡 Insight: Facebook ads remain the most affordable advertising channel in Sri Lanka.</p>
          </div>
        </section>

        {/* ===== NEW: Best Advertising Times ===== */}
        <section id="best-times" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Clock className="w-7 h-7 text-primary" />
            Best Advertising Times in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Understanding user behavior helps improve ad performance. Timing your ads correctly can significantly boost engagement and conversions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Best Days for Ads</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-border bg-background">
                  <p className="font-medium text-sm">Monday to Thursday</p>
                  <p className="text-xs text-muted-foreground">Best for business services & B2B</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background">
                  <p className="font-medium text-sm">Friday to Sunday</p>
                  <p className="text-xs text-muted-foreground">Best for retail & ecommerce</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Best Hours for Advertising</h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Time</TableHead>
                      <TableHead className="font-bold">Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { time: "7am – 9am", perf: "Moderate", color: "text-yellow-600" },
                      { time: "12pm – 2pm", perf: "High", color: "text-primary" },
                      { time: "7pm – 10pm", perf: "Very High", color: "text-green-600" },
                    ].map(({ time, perf, color }) => (
                      <TableRow key={time}>
                        <TableCell className="font-medium">{time}</TableCell>
                        <TableCell className={`font-bold ${color}`}>{perf}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground mt-3">Evening hours often generate higher engagement and conversions.</p>
            </div>
          </div>
        </section>

        {/* ===== NEW: Industries That Spend Most ===== */}
        <section className="mb-16">
          <div className="bg-[hsl(var(--hero-bg))] text-[hsl(var(--hero-foreground))] rounded-2xl p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              Industries That Spend the Most on Advertising in Sri Lanka
            </h2>
            <p className="text-[hsl(var(--hero-muted))] text-center mb-8 max-w-2xl mx-auto">
              Some industries invest heavily in marketing. These sectors drive a large portion of digital ad spending in Sri Lanka.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { rank: "1", label: "Education Institutes" },
                { rank: "2", label: "Real Estate Companies" },
                { rank: "3", label: "Automobile Dealers" },
                { rank: "4", label: "Ecommerce Brands" },
                { rank: "5", label: "Financial Services" },
                { rank: "6", label: "Mobile Phone Retailers" },
                { rank: "7", label: "Tourism Companies" },
              ].map(({ rank, label }) => (
                <div key={rank} className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(var(--hero-foreground)/0.05)] border border-[hsl(var(--hero-foreground)/0.1)]">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">{rank}</span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NEW: Targeting Strategies ===== */}
        <section id="targeting" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <MapPin className="w-7 h-7 text-primary" />
            Advertising Targeting Strategies for Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Marketers can improve campaign performance using smart targeting. Here are the most effective targeting strategies for Sri Lankan campaigns.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Location Targeting</h3>
              <p className="text-sm text-muted-foreground mb-3">Focus on major cities:</p>
              <ul className="space-y-1.5">
                {["Colombo", "Kandy", "Gampaha", "Negombo", "Kurunegala"].map(city => (
                  <li key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {city}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-primary font-medium mt-3">Urban areas generate higher conversion rates.</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Interest Targeting</h3>
              <p className="text-sm text-muted-foreground mb-3">Useful interests for Sri Lankan campaigns:</p>
              <ul className="space-y-1.5">
                {["Online shopping", "Education", "Travel", "Automobiles", "Technology"].map(interest => (
                  <li key={interest} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Language Targeting</h3>
              <p className="text-sm text-muted-foreground mb-3">Most successful campaigns target:</p>
              <ul className="space-y-1.5">
                {["English", "Sinhala", "Tamil"].map(lang => (
                  <li key={lang} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {lang}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-primary font-medium mt-3">Localized ads perform much better.</p>
            </div>
          </div>
        </section>

        {/* Why Advertising Is Important */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Why Advertising Is Important for Businesses</h2>
              <p className="text-muted-foreground leading-relaxed">
                Advertising plays an essential role in business growth and brand development. Businesses that invest in effective advertising strategies often outperform competitors that rely only on traditional marketing.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={benefitsImg} alt="Advertising benefits showing business growth charts, brand awareness, customer engagement and increased sales" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Eye, label: "Increased Brand Awareness" },
              { icon: Users, label: "Higher Customer Engagement" },
              { icon: Globe, label: "Improved Online Visibility" },
              { icon: TrendingUp, label: "Increased Website Traffic" },
              { icon: ShoppingCart, label: "Higher Sales & Conversions" },
              { icon: BarChart3, label: "Measurable ROI" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best Advertising Strategies */}
        <section id="strategies" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Best Advertising Strategies for Sri Lankan Businesses</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Successful advertising campaigns require strategic planning. Businesses in Sri Lanka often use the following strategies:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Targeted Audience Advertising", desc: "Advertising campaigns should focus on reaching the right audience rather than everyone. Data-driven targeting ensures your ads reach potential customers who are most likely to convert." },
              { icon: Layers, title: "Multi-Platform Advertising", desc: "Using multiple advertising platforms increases reach and effectiveness. Combining Google Ads, Facebook, Instagram, and YouTube creates a comprehensive advertising presence." },
              { icon: BarChart3, title: "Data-Driven Campaign Optimization", desc: "Businesses analyze advertising data to improve campaign performance continuously. Real-time analytics allow for quick adjustments that maximize return on investment." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="mb-16 scroll-mt-20 bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Benefits of Digital Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Digital advertising provides several advantages compared to traditional marketing methods.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Cost-Effective Marketing", desc: "Digital campaigns can start with small budgets, making advertising accessible for businesses of all sizes." },
              { icon: BarChart3, title: "Real-Time Performance Tracking", desc: "Businesses can monitor advertising performance instantly and make data-driven decisions to optimize campaigns." },
              { icon: Target, title: "Advanced Targeting", desc: "Advertisers can reach specific audiences based on interests, behavior, location, and demographics for maximum relevance." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl bg-background border border-border">
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== NEW: Advertising Metrics ===== */}
        <section id="metrics" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <LineChart className="w-7 h-7 text-primary" />
            Advertising Metrics Marketers Should Track
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Successful marketers focus on performance data. Tracking these metrics helps optimize advertising campaigns and maximize return on investment.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "Click Through Rate", abbr: "CTR" },
              { label: "Cost Per Click", abbr: "CPC" },
              { label: "Cost Per Lead", abbr: "CPL" },
              { label: "Conversion Rate", abbr: "CR" },
              { label: "Return on Ad Spend", abbr: "ROAS" },
            ].map(({ label, abbr }) => (
              <div key={abbr} className="p-5 rounded-xl border border-border bg-background text-center hover:shadow-md hover:border-primary/30 transition-all">
                <p className="text-2xl font-extrabold text-primary mb-1">{abbr}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section id="mistakes" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-destructive" />
            Common Advertising Mistakes Businesses Make in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Many businesses fail because they make common marketing mistakes. Professional campaign management can significantly improve results.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Targeting everyone instead of a niche audience",
              "Poor ad creative quality",
              "Weak or slow landing pages",
              "Not testing multiple ads",
              "Stopping campaigns too early",
              "Lack of performance tracking",
              "Insufficient advertising budget",
              "No clear call to action",
              "Ignoring mobile optimization",
            ].map(mistake => (
              <div key={mistake} className="flex items-center gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                <span className="text-sm font-medium">{mistake}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Budget Guide */}
        <section id="budget" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <DollarSign className="w-7 h-7 text-primary" />
            Advertising Budget Guide for Sri Lankan Businesses
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Businesses should allocate their advertising budgets carefully to maximize return on investment. Typical monthly advertising budgets in Sri Lanka:
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { tier: "Small Businesses", range: "LKR 50,000 – 200,000", color: "bg-primary/10 border-primary/20" },
              { tier: "Medium Businesses", range: "LKR 200,000 – 1,000,000", color: "bg-primary/15 border-primary/30" },
              { tier: "Large Companies", range: "LKR 1,000,000+", color: "bg-primary/20 border-primary/40" },
            ].map(({ tier, range, color }) => (
              <div key={tier} className={`p-6 rounded-2xl border text-center ${color}`}>
                <p className="font-heading text-lg font-bold mb-2">{tier}</p>
                <p className="text-primary font-extrabold text-xl">{range}</p>
                <p className="text-muted-foreground text-xs mt-1">per month</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-sm mb-3 font-medium">Budget allocation typically includes:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Google Ads", "Social Media Ads", "Display Advertising", "Content Marketing"].map(item => (
                <div key={item} className="p-3 rounded-lg bg-secondary text-center text-sm font-medium">{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NEW: Advertising Opportunities ===== */}
        <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Advertising Opportunities in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Sri Lanka still has many untapped digital marketing opportunities. Companies that invest early in digital advertising gain a competitive advantage.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Local business advertising",
              "Ecommerce growth",
              "Tourism marketing",
              "Education marketing",
              "Startup brand building",
              "Influencer partnerships",
            ].map(opp => (
              <div key={opp} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:shadow-md transition-shadow">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{opp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industry-Specific Advertising */}
        <section id="industry-specific" className="mb-16 scroll-mt-20">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
            <img src={industriesImg} alt="Industry-specific digital marketing strategies connecting hotels, travel, fashion, restaurants, real estate, education, beauty, automotive, small business and ecommerce sectors" className="w-full h-auto" loading="lazy" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">Industry-Specific Advertising Strategies</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Different industries require different advertising strategies because customer behavior and marketing channels vary across sectors.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {industries.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="group block p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Digital Advertising Trends */}
        <section id="trends" className="mb-16 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Advertising Trends in Sri Lanka (2026)</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Marketing trends continue to evolve rapidly. Businesses that adapt to these trends can reach modern consumers more effectively.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Smartphone, label: "Short-form video ads (TikTok, Reels, Shorts)" },
                  { icon: Brain, label: "AI-powered advertising optimization" },
                  { icon: Users, label: "Influencer marketing collaborations" },
                  { icon: Target, label: "Performance marketing with measurable results" },
                  { icon: Smartphone, label: "Mobile-first advertising strategies" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={trendsImg} alt="Future digital advertising trends including AI, mobile-first strategy, video marketing and personalization" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Future of Advertising */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Brain className="w-7 h-7 text-primary" />
            Future of Advertising in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The future of advertising in Sri Lanka will be heavily influenced by technology. Key developments include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              "Artificial intelligence driven advertising",
              "Programmatic advertising",
              "Advanced audience targeting",
              "Personalized marketing experiences",
            ].map(item => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-secondary text-sm font-medium">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" /> {item}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Businesses that adopt these innovations early will gain a competitive advantage in reaching customers and building strong brands.
          </p>
        </section>

        <section id="agency" className="mb-16 scroll-mt-20 bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Choosing the Right Advertising Agency</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Working with a professional advertising agency can help businesses develop effective marketing strategies and achieve measurable results. A professional agency provides services such as:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { to: "/social-media-management-sri-lanka", label: "Social Media Management" },
              { to: "/facebook-ads-sri-lanka", label: "Facebook Advertising" },
              { to: "/google-ads-sri-lanka", label: "Google Ads Management" },
              { to: "/seo-services-sri-lanka", label: "Search Engine Optimization" },
              { to: "/video-production-sri-lanka", label: "Video Marketing" },
              { to: "/graphic-design-sri-lanka", label: "Graphic Design" },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium">
                <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {label}
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            These services help businesses maximize their advertising investment and generate measurable ROI.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Browse our comparison of the <Link to="/blog/best-digital-marketing-agencies-sri-lanka" className="text-primary hover:underline font-semibold">best advertising agencies in Sri Lanka</Link> to find the right partner.
          </p>
        </section>

        {/* Why Businesses Choose Cypher Digital */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Why Businesses Choose Cypher Digital for Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Cypher Digital helps businesses create high-performance advertising campaigns using data-driven strategies and advanced marketing tools. With expert marketing professionals and modern technologies, Cypher Digital helps companies achieve measurable advertising success.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Google advertising campaigns",
              "Social media advertising",
              "Digital marketing strategies",
              "Online brand development",
              "Website marketing optimization",
              "Lead generation campaigns",
            ].map(s => (
              <div key={s} className="flex items-center gap-2 p-3 rounded-lg bg-secondary text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {s}
              </div>
            ))}
          </div>
        </section>

        {/* Traditional Advertising Channels in Sri Lanka */}
        <section id="traditional-channels" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Traditional Advertising Channels in Sri Lanka — TV, Radio, Newspaper &amp; Media Buying</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Digital is winning share, but traditional media still drives massive reach in Sri Lanka — especially for FMCG, telco, banking, automotive, real estate and political campaigns. Here's a quick orientation to the four channels every serious marketer should understand, with deep-dive guides for each.
          </p>

          <div className="space-y-6">
            {/* TV */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-heading text-xl font-bold mb-2">
                <Link to="/tv-advertising-sri-lanka" className="hover:text-primary">TV Advertising in Sri Lanka</Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Television still delivers the highest single-impression reach in Sri Lanka. The market is dominated by <strong>Hiru TV</strong>, <strong>Sirasa TV</strong>, <strong>Derana</strong>, <strong>Swarnavahini</strong>, <strong>ITN</strong> and <strong>Rupavahini</strong> in Sinhala, with <strong>Shakthi TV</strong> and <strong>Vasantham</strong> serving Tamil audiences. Prime-time rates (7:00–10:00 PM) range roughly LKR 80,000–250,000 for a 30-second spot on top channels, with production costs starting around LKR 150,000 for a basic TVC.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                TV works best for brand-building, new product launches and seasonal campaigns where you need to land a single message in front of millions of households quickly. GRP and TRP planning, channel-mix optimisation and proper post-buy reconciliation are essential to avoid overpaying.
              </p>
              <Link to="/tv-advertising-sri-lanka" className="text-primary font-semibold hover:underline">Read the complete TV Advertising in Sri Lanka guide →</Link>
            </div>

            {/* Radio */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-heading text-xl font-bold mb-2">
                <Link to="/radio-advertising-sri-lanka" className="hover:text-primary">Radio Advertising in Sri Lanka</Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Radio remains the cheapest mass-reach channel in Sri Lanka and is unbeatable for drive-time frequency. Key stations include <strong>Sirasa FM</strong> and <strong>Hiru FM</strong> (Sinhala mass market), <strong>Yes FM</strong> and <strong>TNL Radio</strong> (English urban), <strong>Shakthi FM</strong> (Tamil), and <strong>Shaa FM</strong> / <strong>Y FM</strong> (youth). A 30-second spot typically costs LKR 3,000–18,000 depending on station and daypart.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Morning drive (6–10 AM) and evening drive (4–7 PM) deliver peak in-car listenership. Radio pairs exceptionally well with digital retargeting — listeners exposed to your audio spot become high-intent audiences for follow-up Facebook and Google Ads.
              </p>
              <Link to="/radio-advertising-sri-lanka" className="text-primary font-semibold hover:underline">Read the complete Radio Advertising in Sri Lanka guide →</Link>
            </div>

            {/* Newspaper */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-heading text-xl font-bold mb-2">
                <Link to="/newspaper-advertising-sri-lanka" className="hover:text-primary">Newspaper Advertising in Sri Lanka</Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Print remains the most trusted channel for older, professional and regional audiences. Major titles include <strong>Daily News</strong>, <strong>Sunday Times</strong> and <strong>Sunday Observer</strong> in English; <strong>Lankadeepa</strong>, <strong>Divaina</strong> and <strong>Silumina</strong> in Sinhala; and <strong>Thinakkural</strong> and <strong>Virakesari</strong> in Tamil. Common formats run from classified line ads to full-page colour, strip ads, jacket wraps and front-page solus positions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Newspaper advertising is especially effective for tenders, vacancies, property listings, auction notices, financial disclosures, education intakes and high-trust B2B announcements. Premium positions (front page, back page, page 3) carry 30–100% loading above standard rates.
              </p>
              <Link to="/newspaper-advertising-sri-lanka" className="text-primary font-semibold hover:underline">Read the complete Newspaper Advertising in Sri Lanka guide →</Link>
            </div>

            {/* Media Buying */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-heading text-xl font-bold mb-2">
                <Link to="/media-buying-agencies-sri-lanka" className="hover:text-primary">Media Buying Agencies in Sri Lanka</Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A professional media buying agency is the single biggest lever for traditional ad spend efficiency in Sri Lanka. Established agencies hold annual volume deals with TV channels, radio networks and newspaper houses, and typically negotiate <strong>20–40% below published rate cards</strong> — savings that more than cover the agency commission.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Beyond rate negotiation, agencies handle media planning (channel mix, GRP/TRP targets, daypart strategy), booking and scheduling, copy clearance, post-buy reconciliation and cross-channel reporting. For any brand spending more than LKR 500,000/month on traditional media, going direct almost always costs more.
              </p>
              <Link to="/media-buying-agencies-sri-lanka" className="text-primary font-semibold hover:underline">Read the complete Media Buying Agencies in Sri Lanka guide →</Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16 scroll-mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions About Advertising in Sri Lanka</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Advertising Topics */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Complete Advertising Channel Guides — Sri Lanka</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            In-depth guides for every major advertising channel in Sri Lanka — written by Cypher Digital's media team. Compare rates, reach, formats, and strategy before you commit a rupee of ad spend.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <Link to="/media-buying-agencies-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Media Buying Agencies in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">How agencies negotiate 20–40% below rate card across TV, radio, print and digital.</div>
            </Link>
            <Link to="/tv-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">TV Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Hiru, Sirasa, Derana, ITN & more — 2025 rates, prime-time slots and channel mix strategy.</div>
            </Link>
            <Link to="/newspaper-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Newspaper Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Daily News, Lankadeepa, Thinakkural & more — ad formats, premium positions and 2025 rates.</div>
            </Link>
            <Link to="/radio-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Radio Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Sirasa FM, Hiru FM, Yes FM, Shakthi FM — station selection, dayparts and 2025 rate cards.</div>
            </Link>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Related Advertising Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Digital Marketing in Sri Lanka", to: "/" },
              { label: "Online Marketing Sri Lanka", to: "/" },
              { label: "SEO Services Sri Lanka", to: "/seo-services-sri-lanka" },
              { label: "Social Media Marketing Sri Lanka", to: "/social-media-management-sri-lanka" },
              { label: "Google Ads Sri Lanka", to: "/google-ads-sri-lanka" },
              { label: "Facebook Ads Sri Lanka", to: "/facebook-ads-sri-lanka" },
              { label: "Video Production Sri Lanka", to: "/video-production-sri-lanka" },
              { label: "Graphic Design Sri Lanka", to: "/graphic-design-sri-lanka" },
              { label: "Media Buying Agencies Sri Lanka", to: "/media-buying-agencies-sri-lanka" },
              { label: "TV Advertising Sri Lanka", to: "/tv-advertising-sri-lanka" },
              { label: "Newspaper Advertising Sri Lanka", to: "/newspaper-advertising-sri-lanka" },
              { label: "Radio Advertising Sri Lanka", to: "/radio-advertising-sri-lanka" },
            ].map(({ label, to }) => (
              <Link key={label} to={to} className="px-4 py-2 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-sm font-medium">
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA + Inquiry Form */}
        <section className="bg-[hsl(var(--hero-bg))] text-[hsl(var(--hero-foreground))] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Grow Your Business with Cypher Digital
              </h2>
              <p className="text-[hsl(var(--hero-muted))] leading-relaxed mb-4">
                Cypher Digital helps businesses grow through innovative digital advertising strategies. Our team specializes in creating customized marketing campaigns designed to increase visibility, generate leads, and drive business growth.
              </p>
              <p className="text-[hsl(var(--hero-muted))] leading-relaxed mb-6">
                If you want to improve your advertising strategy and attract more customers, contact Cypher Digital today to learn how our digital marketing solutions can help your business succeed.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Strategy Development", "Lead Generation", "Brand Growth", "ROI Focused"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold mb-4 text-foreground">Get a Free Consultation</h3>
              <InquiryForm service="Advertising" />
            </div>
          </div>
        </section>
      </article>
      <RelatedPosts
        keywords={["Advertising in Sri Lanka", "Advertising Sri Lanka", "Online Advertising Sri Lanka", "Advertising Cost Sri Lanka", "Advertising Mistakes Sri Lanka", "Advertising Agencies Sri Lanka"]}
        heading="More on Advertising in Sri Lanka"
        intro="In-depth guides on advertising platforms, costs, agencies and common mistakes Sri Lankan businesses make."
        limit={6}
      />
    </>
  );
};

export default AdvertisingInSriLanka;
