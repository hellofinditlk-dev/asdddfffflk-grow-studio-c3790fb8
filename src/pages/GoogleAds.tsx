import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import RelatedPosts from "@/components/RelatedPosts";
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
  { id: "whats-included", label: "What's Included" },
  { id: "process", label: "Our Process" },
  { id: "funnel", label: "Full-Funnel Strategy" },
  { id: "google-vs-seo", label: "Google Ads vs SEO" },
  { id: "google-vs-facebook", label: "Google Ads vs Facebook Ads" },
  { id: "industry-strategies", label: "Industry-Specific Strategies" },
  { id: "advanced", label: "Advanced Strategies" },
  { id: "cro", label: "Conversion Rate Optimization" },
  { id: "pricing", label: "Pricing & Packages" },
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
        description="Professional Google Ads management in Sri Lanka. Search Ads, Display Ads, YouTube Ads & Shopping Ads with 5x average ROAS. Data-driven PPC campaigns from LKR 50,000/month. Free account audit."
        canonical="https://cypherdigital.lk/google-ads-sri-lanka"
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

      {/* Advanced Strategies */}
      <section id="advanced" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Advanced Google Ads Strategies</h2>
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
