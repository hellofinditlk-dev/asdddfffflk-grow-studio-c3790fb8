import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import RelatedPosts from "@/components/RelatedPosts";
import AIVisibilityHighlightCard from "@/components/AIVisibilityHighlightCard";
import { useEffect } from "react";
import {
  Search, CheckCircle, BarChart3, Users, TrendingUp, Zap, Shield, Clock,
  Smartphone, Eye, Globe, Layers, MousePointerClick, Brain,
  MessageCircle, Video, Share2, Heart, MapPin, Megaphone, DollarSign,
  ArrowRight, PieChart, Target, ShoppingCart, AppWindow
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { value: "5x", label: "Avg ROAS" },
  { value: "70%", label: "Lower CPC" },
  { value: "150+", label: "Keywords Managed" },
  { value: "24hr", label: "Campaign Setup" },
];

const features = [
  "Google Search Ads setup & ongoing management",
  "Google Display Ads with banner design",
  "YouTube video advertising campaigns",
  "Comprehensive keyword research & planning",
  "Conversion tracking & Google Analytics setup",
  "Negative keyword optimization to reduce wasted spend",
  "Ad copy creation, extensions & A/B testing",
  "Landing page recommendations for better Quality Score",
  "Competitor ad analysis & bidding strategy",
  "Monthly performance reporting with insights",
];

const benefits = [
  "Capture high-intent customers at the exact moment they search for your services",
  "Only pay when people click on your ads — complete budget control with PPC model",
  "Appear above organic results for competitive keywords instantly",
  "Track ROI with precise conversion data and attribution",
  "Scale budgets up or down based on proven performance metrics",
  "Reach customers across Google Search, YouTube, Gmail, and partner sites",
];

const processSteps = [
  { title: "Keyword Research", desc: "We identify high-intent keywords your customers are searching for in Sri Lanka." },
  { title: "Campaign Structure", desc: "Organized ad groups, compelling copy, and proper bid strategies for maximum Quality Score." },
  { title: "Tracking Setup", desc: "Google Analytics, conversion tracking, and call tracking integration for full attribution." },
  { title: "Optimize & Scale", desc: "Weekly optimizations with monthly performance reports, bid adjustments, and scaling winners." },
];

const flexiblePoints = [
  "Flexible monthly budgets starting from LKR 50,000",
  "No setup fees for new campaigns",
  "Weekly optimization to reduce wasted ad spend",
  "Transparent pricing with no hidden management costs",
  "Free Google Ads account audit for new clients",
  "Scalable plans that grow with your business",
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports so you always know your ROI." },
  { icon: <Clock className="w-5 h-5" />, title: "24hr Campaign Setup", desc: "Campaigns go live within 24 hours of approval." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your campaign needs." },
];

const faqs = [
  { q: "What is Google Ads?", a: "Google Ads is a pay-per-click (PPC) advertising platform where businesses bid on keywords to display ads on Google search results, YouTube, Gmail, and partner websites. You only pay when someone clicks on your ad, making it one of the most cost-effective digital advertising methods available." },
  { q: "How much does Google Ads cost in Sri Lanka?", a: "Google Ads works on a pay-per-click model. We recommend a minimum ad spend of LKR 50,000/month depending on your industry competition. Cost per click varies by keyword competitiveness — some industries may cost LKR 20–50 per click while competitive keywords can cost more. Our management fee is separate from the ad spend." },
  { q: "Is Google Ads effective in Sri Lanka?", a: "Yes — Google Ads is one of the most effective digital marketing channels in Sri Lanka because it targets users who are actively searching for your products or services. This high-intent targeting means better conversion rates compared to most other advertising methods." },
  { q: "How is Google Ads different from Facebook Ads?", a: "Google Ads captures people actively searching for your product or service (intent-based marketing), while Facebook Ads targets people based on interests and behaviors (interrupt marketing). Google Ads has higher conversion rates for search queries, while Facebook excels at brand awareness. We recommend using both for maximum results." },
  { q: "How long does it take to set up a Google Ads campaign?", a: "We can have your campaign live within 24–48 hours. However, proper keyword research, competitor analysis, and strategy planning takes 3–5 business days for optimal results." },
  { q: "How soon will I see results from Google Ads?", a: "Google Ads delivers immediate visibility — your ads can appear on Google within hours of campaign launch. Most clients start seeing clicks and leads within the first 24–48 hours. However, we recommend 2–4 weeks of optimization for consistent, scalable results." },
  { q: "Do you provide Google Ads reports?", a: "Yes, you'll receive detailed monthly reports covering clicks, impressions, cost per click (CPC), conversions, cost per conversion, Quality Score improvements, and ROI analysis with actionable recommendations." },
  { q: "Can you help with my existing Google Ads account?", a: "Absolutely. We offer free audits of existing accounts to identify wasted spend, poor keyword targeting, and optimization opportunities before we take over management." },
  { q: "Is Google Ads suitable for small businesses in Sri Lanka?", a: "Definitely. Google Ads lets you set your own daily budget, so you only spend what you can afford. Even with a modest budget of LKR 50,000/month, you can target high-intent local searches and generate quality leads cost-effectively." },
  { q: "What types of Google Ads campaigns do you manage?", a: "We manage all Google Ads campaign types including Search Ads, Display Ads, YouTube Video Ads, Shopping Ads for ecommerce, and App Promotion campaigns. We recommend the best campaign mix based on your business goals and budget." },
  { q: "Can Google Ads increase sales?", a: "Yes — significantly. Google Ads targets users with high purchase intent, meaning they're actively looking for what you offer. With proper keyword targeting, compelling ad copy, and optimized landing pages, Google Ads consistently delivers strong sales results for businesses across all industries in Sri Lanka." },
  { q: "What is the best Google Ads agency in Sri Lanka?", a: "Cypher Digital is a leading Google Ads agency in Sri Lanka providing data-driven PPC strategies, comprehensive keyword research, conversion tracking, and continuous campaign optimization that delivers measurable leads and sales for businesses across all industries." },
];

const allServices = [
  { name: "Facebook Marketing", path: "/facebook-ads-sri-lanka", keyword: "Facebook Ads Sri Lanka", desc: "Facebook & Instagram advertising to reach targeted audiences and generate leads." },
  { name: "Social Media Marketing", path: "/social-media-management-sri-lanka", keyword: "Social Media Marketing Sri Lanka", desc: "Professional social media management including content creation and community engagement." },
  { name: "SEO", path: "/seo-services-sri-lanka", keyword: "SEO Services Sri Lanka", desc: "On-page and off-page search engine optimization to rank higher on Google organically." },
  { name: "Graphic Design", path: "/graphic-design-sri-lanka", keyword: "Graphic Design Sri Lanka", desc: "Professional logo design, social media graphics, and print design for Sri Lankan brands." },
  { name: "Video Production", path: "/video-production-sri-lanka", keyword: "Video Production Sri Lanka", desc: "Professional video content for ads, social media, and brand storytelling." },
  { name: "TikTok Marketing", path: "/tiktok-marketing-sri-lanka", keyword: "TikTok Marketing Sri Lanka", desc: "Viral TikTok campaigns, content creation, and ads for Sri Lankan businesses." },
];

const tocItems = [
  { id: "what-is", label: "What is Google Ads?" },
  { id: "why-important", label: "Why Google Ads is Essential" },
  { id: "campaign-types", label: "Types of Google Ads Campaigns" },
  { id: "services", label: "Our Services" },
  { id: "cost", label: "Google Ads Cost in Sri Lanka" },
  { id: "whats-included", label: "What's Included" },
  { id: "process", label: "Our Process" },
  { id: "funnel", label: "Full-Funnel Strategy" },
  { id: "google-vs-seo", label: "Google Ads vs SEO" },
  { id: "google-vs-facebook", label: "Google Ads vs Facebook Ads" },
  { id: "industry-strategies", label: "Industry-Specific Strategies" },
  { id: "how-to-setup", label: "How to Set Up a Winning Campaign" },
  { id: "advanced", label: "Advanced Strategies" },
  { id: "common-mistakes", label: "Common Google Ads Mistakes" },
  { id: "cro", label: "Conversion Rate Optimization" },
  { id: "quality-score", label: "Google Ads Quality Score Explained" },
  { id: "case-studies", label: "Case Studies — Real Results" },
  { id: "roi-timeline", label: "Month-by-Month ROI Timeline" },
  { id: "pricing", label: "Pricing & Packages" },
  { id: "packages-table", label: "Google Ads Packages" },
  { id: "glossary", label: "Google Ads Glossary" },
  { id: "faqs", label: "FAQs" },
];

const GoogleAds = () => {
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
      "@type": "Service",
      name: "Google Ads Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "Google Advertising",
      description: "Google Ads management services in Sri Lanka including PPC search ads, display ads, YouTube ads, shopping ads, and campaign optimization for businesses across all industries.",
      url: "https://cypherdigital.lk/google-ads-sri-lanka",
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
        { "@type": "ListItem", position: 2, name: "Google Ads Sri Lanka", item: "https://cypherdigital.lk/google-ads-sri-lanka" },
      ],
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Google Ads Sri Lanka | PPC Advertising Sri Lanka | Cypher Digital",
      description: "Professional Google Ads management in Sri Lanka. Search Ads, Display Ads, YouTube Ads & Shopping Ads with 5x average ROAS. Campaigns from LKR 50,000/month.",
      url: "https://cypherdigital.lk/google-ads-sri-lanka",
      dateModified: "2026-03-19",
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    });

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Google Ads Sri Lanka (2026) | PPC Advertising & Google Marketing | Cypher Digital"
        description="Expert Google Ads management in Sri Lanka. Search, Display, YouTube & Shopping Ads with proven 5x ROAS. Data-driven PPC campaigns from LKR 50,000/month. Free audit — results in 24 hrs."
        canonical="https://cypherdigital.lk/google-ads-sri-lanka"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="bg-secondary border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Google Ads Sri Lanka</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Search className="w-7 h-7" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Search & Display Advertising</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Google Ads Sri Lanka – High-Performance PPC Advertising That Drives Results
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Google Ads is one of the most powerful digital marketing platforms available in Sri Lanka today. At <strong className="text-white/80">Cypher Digital</strong>, we specialize in <strong className="text-white/80">data-driven Google Ads management in Sri Lanka</strong>, helping businesses generate leads, increase sales, and maximize return on investment through proven PPC strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Google%20Ads" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none shadow-[0_0_24px_hsl(25_95%_53%/0.3)] hover:shadow-[0_0_32px_hsl(25_95%_53%/0.5)] transition-all">
                <a href="#inquiry-form">Get a Free Quote</a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-14">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="text-xs text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snippet Bait Definition */}
<AIVisibilityHighlightCard />

      <section id="what-is" className="py-14 bg-primary/5 border-b border-border scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">What is Google Ads?</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Google Ads</strong> (formerly Google AdWords) is an online advertising platform where businesses bid on keywords to display ads on Google search results, YouTube, Gmail, and millions of partner websites. It operates on a pay-per-click (PPC) model — meaning you only pay when someone clicks on your ad. Google Ads allows businesses in Sri Lanka to appear instantly at the top of search results, reaching customers exactly when they are actively searching for products or services — making it one of the highest-converting digital marketing channels available.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4">📑 Table of Contents</h2>
            <nav>
              <ol className="grid sm:grid-cols-2 gap-1">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-primary hover:underline">
                      {i + 1}. {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section id="why-important" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Why Google Ads is Essential for Businesses in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Sri Lanka has become a search-driven market, where customers rely on Google to make purchasing decisions. Without Google Ads, you're leaving high-intent customers to your competitors. Combine search campaigns with our <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline font-semibold">Social Media Management Sri Lanka</Link> services for a complete funnel — from awareness to conversion.
            </p>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Customers also increasingly ask AI tools before they Google. Get a free <Link to="/ai-visibility-sri-lanka" className="text-primary hover:underline font-semibold">AI Visibility Check in Sri Lanka</Link> to see how your business appears in ChatGPT, Gemini, Claude and Perplexity answers.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Search className="w-5 h-5" />, title: "Instant Search Visibility", desc: "Appear at the top of Google results when customers search for your products or services in Sri Lanka." },
                { icon: <Target className="w-5 h-5" />, title: "High-Intent Targeting", desc: "Reach customers who are actively searching for what you offer — the highest-intent audience available." },
                { icon: <DollarSign className="w-5 h-5" />, title: "Pay Only for Clicks", desc: "PPC model means you only pay when someone clicks your ad — complete budget control with no wasted spend." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Measurable Results", desc: "Track every click, impression, conversion, and rupee spent with precise analytics and attribution." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Scalable Growth", desc: "Start small, prove ROI, then scale winning campaigns for exponential business growth." },
                { icon: <Globe className="w-5 h-5" />, title: "Multi-Platform Reach", desc: "Reach customers across Google Search, YouTube, Gmail, Google Maps, and millions of partner websites." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Google Ads Campaigns */}
      <section id="campaign-types" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Types of Google Ads Campaigns</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Understanding which campaign type fits your business goal is key to maximizing ROI from Google advertising in Sri Lanka.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: <Search className="w-5 h-5" />, title: "Search Ads", desc: "Appear at the top of Google when users search for your products or services. The most powerful campaign type for high-intent traffic." },
                { icon: <Eye className="w-5 h-5" />, title: "Display Ads", desc: "Banner ads across millions of websites in Google's Display Network for brand awareness and remarketing." },
                { icon: <Video className="w-5 h-5" />, title: "YouTube Ads", desc: "Video-based advertising on YouTube — the second largest search engine. Drive engagement and brand awareness." },
                { icon: <ShoppingCart className="w-5 h-5" />, title: "Shopping Ads", desc: "Product-based ads with images and pricing that appear in Google Shopping results. Perfect for ecommerce." },
                { icon: <Layers className="w-5 h-5" />, title: "Remarketing Ads", desc: "Re-engage website visitors with targeted ads as they browse other sites, reminding them to return and convert." },
                { icon: <AppWindow className="w-5 h-5" />, title: "Performance Max", desc: "AI-powered campaigns that automatically optimize across all Google channels for maximum conversions." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">{item.icon}</div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads Services We Offer in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Comprehensive Google advertising solutions designed for Sri Lankan businesses of all sizes — from local shops to national brands.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Brain className="w-5 h-5" />, title: "Keyword Research & Strategy", desc: "Deep keyword research targeting high-intent, commercial, and local keywords your customers are searching for in Sri Lanka." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Campaign Setup & Management", desc: "End-to-end campaign setup with proper ad groups, keyword structure, bid strategies, and daily monitoring." },
                { icon: <MousePointerClick className="w-5 h-5" />, title: "Ad Copywriting & Extensions", desc: "High-converting ad headlines, descriptions, sitelinks, callouts, and structured snippets that maximize click-through rates." },
                { icon: <PieChart className="w-5 h-5" />, title: "Conversion Tracking", desc: "Google Analytics 4, conversion tracking, call tracking, and Google Tag Manager setup for full attribution." },
                { icon: <Layers className="w-5 h-5" />, title: "Remarketing & Retargeting", desc: "Strategic remarketing campaigns to re-engage website visitors and convert warm leads into paying customers." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Reporting", desc: "Detailed monthly reports covering CTR, CPC, conversions, cost per conversion, Quality Score, and ROI analysis." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Cost in Sri Lanka */}
      <section id="cost" className="py-16 bg-background scroll-mt-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">How Much Do Google Ads Cost in Sri Lanka?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
              Google Ads has no minimum spend — you set your own daily budget and only pay when someone clicks. Cost per click (CPC) varies by industry, keyword competition, Quality Score, and location targeting. CPCs in Sri Lanka are generally far lower than Western markets, making PPC advertising highly accessible for local SMEs.
            </p>
            <div className="overflow-x-auto bg-card border border-border rounded-xl mb-8">
              <table className="w-full text-sm">
                <thead className="bg-secondary border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Industry</th>
                    <th className="text-left p-4 font-semibold text-foreground">Estimated CPC Range (LKR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Education & Training", "LKR 40 – 200"],
                    ["Retail & E-commerce", "LKR 30 – 150"],
                    ["Restaurants & Food", "LKR 25 – 120"],
                    ["Hotels & Tourism", "LKR 60 – 350"],
                    ["Real Estate", "LKR 80 – 400"],
                    ["Healthcare & Medical", "LKR 70 – 300"],
                    ["Legal Services", "LKR 150 – 600"],
                    ["Financial Services", "LKR 100 – 500"],
                  ].map(([ind, cpc], i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="p-4 text-foreground font-medium">{ind}</td>
                      <td className="p-4 text-muted-foreground">{cpc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-8 italic">
              Estimates based on typical Sri Lankan market conditions. Actual CPCs vary by campaign quality, competition, and targeting.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Starter / Testing", value: "LKR 50K – 100K", desc: "Small business or testing phase ad spend per month" },
                { label: "Growth Stage", value: "LKR 100K – 300K", desc: "Growing SMEs and e-commerce monthly ad spend" },
                { label: "Aggressive Growth", value: "LKR 300K+", desc: "Established brands scaling nationally per month" },
              ].map((b, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{b.label}</p>
                  <div className="font-heading text-lg font-bold text-foreground mb-2">{b.value}</div>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-8 leading-relaxed text-center max-w-2xl mx-auto">
              <strong className="text-foreground">The real question:</strong> not how much you spend, but your cost per qualified lead. A campaign converting at 5% with an average CPC of LKR 100 produces a lead for around LKR 2,000 — a strong ROI when that lead converts into a customer worth LKR 50,000+.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="whats-included" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What's Included in Our Google Ads Packages</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Benefits of Google Ads for Your Business</h2>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Our Google Ads Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center relative">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">{i + 1}</div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Funnel Strategy */}
      <section id="funnel" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads Full-Funnel Strategy</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">We use a proven full-funnel approach to capture customers at every stage of their buying journey — from awareness to purchase.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stage: "Top Funnel", label: "Awareness", icon: <Eye className="w-6 h-6" />, items: ["Display campaigns for brand visibility", "YouTube video ads for reach", "Discovery campaigns across Google feeds", "Broad keyword targeting for new audiences"] },
                { stage: "Mid Funnel", label: "Consideration", icon: <MousePointerClick className="w-6 h-6" />, items: ["Search ads for informational queries", "Remarketing display campaigns", "YouTube retargeting ads", "Competitor keyword targeting"] },
                { stage: "Bottom Funnel", label: "Conversion", icon: <TrendingUp className="w-6 h-6" />, items: ["High-intent search campaigns", "Shopping ads for ecommerce", "Call-only campaigns for services", "RLSA (remarketing lists for search)"] },
              ].map((funnel, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">{funnel.icon}</div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{funnel.stage}</p>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{funnel.label}</h3>
                  <ul className="space-y-2">
                    {funnel.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads vs SEO */}
      <section id="google-vs-seo" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads vs SEO – Which is Better?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Both strategies serve different purposes. The best approach for most Sri Lankan businesses is to use both together for maximum visibility.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Search className="w-5 h-5 text-primary" /> Google Ads (PPC)</h3>
                <ul className="space-y-2">
                  {["Instant visibility on Google", "Pay per click — immediate traffic", "Full control over targeting & budget", "Best for quick lead generation", "Ideal for competitive keywords"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> SEO (Organic)</h3>
                <ul className="space-y-2">
                  {["Long-term sustainable traffic", "No cost per click", "Builds domain authority over time", "Takes 3–6 months for results", "Best for ongoing brand visibility"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              👉 <strong className="text-foreground">Best strategy:</strong> Use Google Ads for immediate results while building long-term organic traffic with <Link to="/seo-services-sri-lanka" className="text-primary hover:underline font-medium">SEO</Link>. Together, they dominate search results from both paid and organic positions.
            </p>
          </div>
        </div>
      </section>

      {/* Google Ads vs Facebook Ads */}
      <section id="google-vs-facebook" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads vs Facebook Ads</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Both platforms are powerful — they serve different purposes in your marketing funnel.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Search className="w-5 h-5 text-primary" /> Google Ads</h3>
                <ul className="space-y-2">
                  {["Search intent-based targeting", "Users are actively looking to buy", "Higher conversion rates", "Text + shopping-based ads", "Best for capturing existing demand"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-primary" /> Facebook Ads</h3>
                <ul className="space-y-2">
                  {["Interest & behavior-based targeting", "Visual-first (images, video, carousels)", "Lower cost per impression", "Best for brand awareness & lead gen", "Great for retargeting & lookalike audiences"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              👉 <strong className="text-foreground">Best strategy:</strong> Use Google Ads for high-intent search traffic, and <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline font-medium">Facebook Ads</Link> for awareness + retargeting. Together, they create a powerful full-funnel advertising system.
            </p>
          </div>
        </div>
      </section>

      {/* Industry-Specific Strategies */}
      <section id="industry-strategies" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Industry-Specific Google Ads Strategies</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Google Ads works for almost every industry. Here's how we tailor PPC campaigns for different business types in Sri Lanka.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: "🏨", title: "Hotels & Tourism", desc: "Booking campaigns targeting travelers searching for hotels, tours, and experiences in Sri Lanka.", link: "/hotel-digital-marketing-sri-lanka" },
                { icon: "🛒", title: "Ecommerce", desc: "Shopping ads, product listing campaigns, and conversion-optimized search ads for online stores.", link: "/ecommerce-digital-marketing-sri-lanka" },
                { icon: "🎓", title: "Education", desc: "Student enrollment campaigns targeting course searches, intake queries, and university-related keywords.", link: "/education-marketing-agency-sri-lanka" },
                { icon: "🏠", title: "Real Estate", desc: "Property listing ads, location-based targeting, and lead generation for buyers and sellers.", link: "/real-estate-digital-marketing-sri-lanka" },
                { icon: "🍽️", title: "Restaurants", desc: "Local search ads, Google Maps campaigns, and call campaigns for reservations.", link: "/restaurant-digital-marketing-sri-lanka" },
                { icon: "🏥", title: "Healthcare", desc: "Search ads for medical services, appointment booking campaigns, and health-related keyword targeting.", link: "/healthcare-digital-marketing-sri-lanka" },
              ].map((item, i) => (
                <Link key={i} to={item.link} className="flex gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Set Up a Winning Campaign */}
      <section id="how-to-setup" className="py-16 bg-background scroll-mt-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">How to Set Up a Winning Google Ads Campaign in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              A winning Google Ads campaign is built on a clear, methodical foundation. Here is the professional process Cypher Digital follows for every Sri Lankan client — from initial brief to live, optimised campaigns within 24 hours.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Business & Market Analysis", desc: "Understanding your business model, customer profile, average transaction value, and current marketing activity informs every later decision." },
                { title: "Comprehensive Keyword Research", desc: "Google Keyword Planner plus third-party tools to identify high-intent commercial, local, and long-tail keywords — and negative keywords to block waste." },
                { title: "Campaign Architecture", desc: "Tightly themed ad groups with closely related keywords. Strong structure drives Quality Score, lowering cost per click and improving ad position." },
                { title: "Ad Copy & Extensions", desc: "Multiple headline and description variations per ad group. Sitelinks, callouts, call extensions, snippets, and images maximise SERP real estate." },
                { title: "Landing Page Audit", desc: "We audit every landing page for load speed, mobile responsiveness, message match, trust signals, and conversion elements before launch." },
                { title: "Conversion Tracking Setup", desc: "Google Analytics 4, Google Tag Manager, and event tracking for forms, calls, purchases, and WhatsApp chats — no guessing, only data." },
                { title: "Bid Strategy Configuration", desc: "Start with Maximise Clicks to gather data, then transition to Target CPA or Target ROAS once Smart Bidding has enough conversion signal." },
                { title: "Launch, Monitor & Optimise", desc: "Live within 24 hours of approval. Daily monitoring in week one, weekly optimisation thereafter — bids, negatives, ad copy and audiences." },
              ].map((step, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section id="advanced" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Advanced Google Ads Strategies That Drive Results</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Brain className="w-5 h-5" />, title: "Smart Bidding & AI Optimization", desc: "Leverage Google's machine learning with Target CPA, Target ROAS, and Maximize Conversions bidding strategies." },
                { icon: <Layers className="w-5 h-5" />, title: "Remarketing & RLSA", desc: "Re-engage website visitors with display remarketing and remarketing lists for search ads (RLSA) to boost conversions." },
                { icon: <Users className="w-5 h-5" />, title: "Custom & In-Market Audiences", desc: "Target users based on their purchase intent and browsing behavior using Google's audience signals." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "A/B Testing & CRO", desc: "Continuously test ad copy, landing pages, bid strategies, and audience segments to improve conversion rates." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CRO Section */}
      <section id="common-mistakes" className="py-16 bg-background scroll-mt-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Common Google Ads Mistakes Sri Lankan Businesses Make</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              When auditing Google Ads accounts in Sri Lanka, we repeatedly see the same costly mistakes. Avoiding these instantly improves your ROI.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { mistake: "Running broad match keywords without negatives", fix: "Broad match without a robust negative keyword list burns budget on irrelevant searches. We build comprehensive negative lists from day one." },
                { mistake: "No conversion tracking in place", fix: "Without conversion tracking, every decision is a guess. We install GA4, GTM, and event tracking before any campaign goes live." },
                { mistake: "Sending all traffic to the homepage", fix: "Each ad group deserves its own dedicated landing page that matches the search intent, not a generic homepage drop-off." },
                { mistake: "Ignoring mobile performance", fix: "Most Sri Lankan searches happen on mobile. Slow or non-responsive landing pages waste every click you pay for." },
                { mistake: "Not using ad extensions", fix: "Sitelinks, callouts, call buttons and structured snippets dramatically improve CTR and Quality Score — and they are free." },
                { mistake: "Setting and forgetting campaigns", fix: "Performance decays without active management. We adjust bids, negatives, copy and audiences every single week." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <p className="text-sm font-semibold text-destructive mb-2">❌ {item.mistake}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">✅ {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CRO Section */}
      <section id="cro" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Conversion Rate Optimization (CRO)</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Driving traffic is not enough — you must convert it. We optimize every element of your Google Ads funnel for maximum conversions.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { mistake: "Slow loading landing pages", fix: "We optimize page speed for sub-3-second load times on mobile and desktop." },
                { mistake: "Weak or unclear call-to-action", fix: "We create clear, compelling CTAs that guide visitors to take action immediately." },
                { mistake: "No trust signals on landing pages", fix: "We add testimonials, reviews, certifications, and guarantees to build credibility." },
                { mistake: "Poor mobile experience", fix: "We ensure all landing pages are fully responsive and optimized for mobile users." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <p className="text-sm font-medium text-destructive mb-2">❌ {item.mistake}</p>
                  <p className="text-xs text-muted-foreground">✅ {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <OurWorkSection service="Google Ads management" />
      <section id="pricing" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Flexible & Affordable Google Ads Packages</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Google Ads doesn't have to be expensive. Cypher Digital helps Sri Lankan businesses get the most out of every rupee with smart bidding strategies and continuous optimization.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {flexiblePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustPoints.map((tp, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">{tp.icon}</div>
                  <h3 className="font-heading text-xs font-bold text-foreground mb-1">{tp.title}</h3>
                  <p className="text-xs text-muted-foreground">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Optimized Answer */}
      <section id="packages-table" className="py-16 bg-secondary scroll-mt-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads Packages & Pricing in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
              Cypher Digital offers flexible Google Ads management packages designed for Sri Lankan businesses at every growth stage. All tiers include campaign setup, ongoing management, conversion tracking and monthly reporting.
            </p>
            <div className="overflow-x-auto bg-card border border-border rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-background border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Package</th>
                    <th className="text-left p-4 font-semibold text-foreground">Ad Spend Budget</th>
                    <th className="text-left p-4 font-semibold text-foreground">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starter", "LKR 50,000 – 100,000 / month", "Small businesses & local services"],
                    ["Growth", "LKR 100,000 – 250,000 / month", "Growing SMEs & e-commerce"],
                    ["Scale", "LKR 250,000 – 500,000 / month", "Established brands & multi-location"],
                    ["Enterprise", "LKR 500,000+ / month", "Large businesses & national campaigns"],
                  ].map(([pkg, spend, best], i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="p-4 text-foreground font-semibold">{pkg}</td>
                      <td className="p-4 text-muted-foreground">{spend}</td>
                      <td className="p-4 text-muted-foreground">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic text-center mt-4">
              Management fees quoted separately based on campaign complexity. Contact us for a custom proposal tailored to your business.
            </p>
            <div className="mt-8 bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-base font-bold text-foreground mb-3">Additional Services Available</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {[
                  "Landing page design & CRO optimisation",
                  "Google Analytics 4 setup & configuration",
                  "Google Tag Manager implementation",
                  "Conversion tracking & call tracking setup",
                  "Google Ads account audits (free for new clients)",
                  "Performance Max & Shopping feed management",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Optimized Answer */}
      <section className="py-14 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">What is the Best Google Ads Agency in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Cypher Digital</strong> is a leading Google Ads agency in Sri Lanka providing data-driven PPC strategies, comprehensive keyword research, conversion tracking, and continuous campaign optimization. We specialize in Search Ads, Display Ads, YouTube Ads, and Shopping Ads that deliver measurable leads and sales for businesses across hotels, ecommerce, education, real estate, healthcare, and more. With transparent reporting, no lock-in contracts, and a proven 5x average ROAS, Cypher Digital is the trusted choice for Google advertising in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Target Locations */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">Google Ads Management Across Sri Lanka</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {["Colombo", "Negombo", "Kandy", "Galle", "Maharagama", "Nugegoda", "Matara", "Kurunegala", "Jaffna", "Batticaloa"].map((city) => (
                <span key={city} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-foreground">
                  <MapPin className="w-3 h-3 text-primary" /> {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Related Digital Marketing Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServices.map((service, i) => (
                <Link key={i} to={service.path} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors group">
                  <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{service.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{service.desc}</p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/advertising-in-sri-lanka" className="text-sm text-primary font-semibold hover:underline inline-flex items-center gap-1">
                📖 Read our Complete Advertising Guide for Sri Lanka <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Planning a bigger media mix? Pair Google Ads with{" "}
                <Link to="/media-buying-agencies-sri-lanka" className="text-primary hover:underline font-semibold">media buying agencies in Sri Lanka</Link>,{" "}
                <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline font-semibold">TV advertising in Sri Lanka</Link>,{" "}
                <Link to="/radio-advertising-sri-lanka" className="text-primary hover:underline font-semibold">radio advertising</Link> and{" "}
                <Link to="/newspaper-advertising-sri-lanka" className="text-primary hover:underline font-semibold">newspaper advertising</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Quality Score Explained */}
      <section id="quality-score" className="py-16 bg-background scroll-mt-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads Quality Score Explained</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">Quality Score is Google's 1–10 rating of how relevant your keywords, ads, and landing pages are. A higher Quality Score means <strong className="text-foreground">lower cost per click and better ad positions</strong> — sometimes paying 50% less than competitors for the same spot.</p>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                { title: "Expected CTR", desc: "Google predicts how likely users are to click your ad based on historical performance vs competitors for the same keyword." },
                { title: "Ad Relevance", desc: "How closely your ad copy matches the searcher's intent. Tight keyword–ad–landing alignment scores highest." },
                { title: "Landing Page Experience", desc: "Speed, mobile-friendliness, relevance, and trust signals on the page users land on after clicking." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-xl overflow-hidden">
                <thead><tr className="bg-card">
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Quality Score</th>
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">CPC Impact</th>
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Ad Position</th>
                </tr></thead>
                <tbody>
                  {[
                    { qs: "9 – 10", cpc: "Up to 50% discount vs competitors", pos: "Top positions, lower bids" },
                    { qs: "7 – 8", cpc: "Near-average CPC", pos: "Competitive placement" },
                    { qs: "5 – 6", cpc: "Slight premium", pos: "Mid-page or lower" },
                    { qs: "1 – 4", cpc: "Up to 400% premium", pos: "Rarely shown or page 2" },
                  ].map((r, i) => (
                    <tr key={i} className="bg-card">
                      <td className="p-4 text-sm font-semibold text-foreground border-b border-border">{r.qs}</td>
                      <td className="p-4 text-sm text-muted-foreground border-b border-border">{r.cpc}</td>
                      <td className="p-4 text-sm text-muted-foreground border-b border-border">{r.pos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6 leading-relaxed">Cypher Digital actively optimises Quality Score every week — tightening ad groups, rewriting ad copy, and improving landing page relevance to drive your <strong className="text-foreground">Google Ads Sri Lanka</strong> CPC down month over month.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads Case Studies — Real Sri Lankan Results</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">Anonymised performance snapshots from active Google Ads campaigns managed by Cypher Digital for Sri Lankan businesses.</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  industry: "Healthcare Clinic — Colombo",
                  challenge: "Low appointment bookings despite a strong reputation; competing with hospital chains on branded keywords.",
                  approach: "Search Ads on high-intent symptom keywords + branded defence, call-only ads during clinic hours, conversion tracking via WhatsApp clicks.",
                  results: [
                    { k: "Cost per lead", v: "LKR 980" },
                    { k: "Monthly bookings", v: "+312%" },
                    { k: "ROAS", v: "6.4x" },
                  ],
                },
                {
                  industry: "Education / Study Abroad",
                  challenge: "High CPCs (LKR 250+) on competitive course keywords were burning budget without producing enrolments.",
                  approach: "Restructured into long-tail SKAGs, added negative keywords, built dedicated landing pages per programme, ran YouTube remarketing.",
                  results: [
                    { k: "Avg CPC", v: "↓ 58%" },
                    { k: "Qualified leads / mo", v: "240+" },
                    { k: "Cost per enrolment", v: "LKR 18,500" },
                  ],
                },
                {
                  industry: "E-commerce — Fashion",
                  challenge: "Shopping Ads were spending evenly across SKUs with no insight into which products actually drove profit.",
                  approach: "Restructured Shopping campaigns by margin tier, deployed Performance Max for best-sellers, dynamic remarketing for cart abandoners.",
                  results: [
                    { k: "ROAS", v: "8.2x" },
                    { k: "Revenue growth", v: "+417%" },
                    { k: "Cart recovery", v: "23%" },
                  ],
                },
              ].map((cs, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Case Study {i + 1}</p>
                  <h3 className="font-heading text-base font-bold text-foreground mb-4">{cs.industry}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3"><strong className="text-foreground">Challenge:</strong> {cs.challenge}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">Approach:</strong> {cs.approach}</p>
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                    {cs.results.map((r, j) => (
                      <div key={j} className="text-center">
                        <div className="text-sm font-extrabold text-primary">{r.v}</div>
                        <div className="text-[10px] text-muted-foreground mt-1 leading-tight">{r.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic text-center mt-6">Results based on anonymised client campaigns. Past performance does not guarantee future results — Quality Score, niche competition, and seasonality affect every account differently.</p>
          </div>
        </div>
      </section>

      {/* Month-by-Month ROI Timeline */}
      <section id="roi-timeline" className="py-16 bg-background scroll-mt-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Month-by-Month Google Ads ROI Timeline</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">Honest expectations from a well-structured Google Ads Sri Lanka campaign. Most accounts move from setup to scale within 90 days.</p>
            <div className="space-y-4">
              {[
                { m: "Month 1", title: "Foundation & First Clicks", desc: "Keyword research, conversion tracking, ad groups built, landing pages aligned. Campaigns go live within week 1. First leads usually arrive within 24–72 hours of launch — data collection phase." },
                { m: "Month 2", title: "Optimisation & CPC Reduction", desc: "Negative keywords expanded, low-performing ads paused, Quality Score climbs, CPC typically drops 20–40%. Cost per lead stabilises and starts trending down." },
                { m: "Month 3", title: "Scaling Winners", desc: "Top-performing ad groups get budget reallocated, remarketing audiences mature, Shopping/Performance Max kicks in for e-commerce. ROAS typically reaches the 3–5x range." },
                { m: "Month 4 – 6", title: "Compounding Returns", desc: "Account history builds Google's machine-learning confidence. CPCs continue to decrease, conversion rates climb. Top accounts reach 5–8x ROAS and unlock new campaign types (YouTube, Display remarketing)." },
                { m: "Month 6+", title: "Market Leadership", desc: "Sustained #1 ad positions on core keywords, full-funnel coverage from awareness to conversion, predictable monthly lead volume. Budget can be scaled aggressively without inflating CPL." },
              ].map((t, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-20 shrink-0 text-center">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">{t.m}</div>
                  </div>
                  <div className="flex-1 border-l border-border pl-4">
                    <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions – Google Ads Sri Lanka</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card">
                  <AccordionTrigger className="text-sm font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Google Ads Glossary */}
      <section id="glossary" className="py-16 bg-secondary scroll-mt-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Google Ads Glossary — 10 Terms Every Sri Lankan Advertiser Should Know</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">A quick reference for the most-asked Google Ads terms.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "CPC (Cost Per Click)", d: "What you pay each time a user clicks your ad. Varies by keyword competition and Quality Score." },
                { t: "CPM (Cost Per Mille)", d: "Cost per 1,000 ad impressions — primarily a Display and YouTube metric." },
                { t: "CTR (Click-Through Rate)", d: "Clicks ÷ impressions. A high CTR signals relevance to Google and improves Quality Score." },
                { t: "ROAS (Return on Ad Spend)", d: "Revenue generated for every LKR 1 spent on ads. 5x ROAS = LKR 5 in sales per LKR 1 spent." },
                { t: "Quality Score", d: "Google's 1–10 rating of keyword–ad–landing page relevance. Higher score = lower CPC, better positions." },
                { t: "Conversion", d: "Any tracked goal completion — form submit, WhatsApp click, phone call, purchase, app install." },
                { t: "Ad Rank", d: "Determines your ad's position. Calculated from your bid × Quality Score × ad extensions impact." },
                { t: "Negative Keywords", d: "Terms you exclude to prevent your ads from showing on irrelevant searches — saves budget." },
                { t: "Performance Max (PMax)", d: "Goal-based campaign type that runs across all Google channels (Search, Display, YouTube, Maps, Discover) using AI." },
                { t: "Remarketing", d: "Showing ads to users who previously visited your site or interacted with your business — typically the highest-ROAS audience." },
              ].map((g, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{g.t}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Inquiry Form */}
      <section id="inquiry-form" className="py-20 bg-foreground scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Dominate Google Search in Sri Lanka?
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Stop losing leads to competitors who appear above you on Google. Partner with Cypher Digital for data-driven Google Ads management that delivers real leads and sales.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {["Free Account Audit", "No Lock-in Contracts", "Results in 24hrs"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs text-white/80 font-medium">
                    <CheckCircle className="w-3 h-3 text-primary" /> {item}
                  </span>
                ))}
              </div>
              <img src={mascotGlasses} alt="Cypher Digital Google Ads Management Sri Lanka" className="w-40 h-40 rounded-2xl object-cover mx-auto lg:mx-0 border-2 border-white/10" loading="lazy" />
            </div>
            <div>
              <InquiryForm service="Google Ads" />
            </div>
          </div>
        </div>
      </section>
      <RelatedPosts
        keywords={["Google Ads Sri Lanka", "YouTube Ads Sri Lanka", "Remarketing Ads Sri Lanka", "Online Advertising Sri Lanka"]}
        heading="More on Google Ads & Paid Search"
        intro="Search, display, YouTube and remarketing strategies that turn ad spend into customers."
      />
    </div>
  );
};

export default GoogleAds;
