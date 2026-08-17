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
  MapPin, Megaphone, DollarSign,
  ArrowRight, PieChart, Target, Link2, FileText, Settings, Code,
  Sparkles, Heart, BookOpen, Star, Gauge
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { value: "50+", label: "Websites Optimized" },
  { value: "300%", label: "Avg Traffic Growth" },
  { value: "Top 10", label: "Google Rankings" },
  { value: "6 Months", label: "Avg Results Timeline" },
];

const features = [
  "Comprehensive website SEO audit & analysis",
  "Keyword research & competitor gap analysis",
  "On-page optimization — meta titles, descriptions & headings",
  "Technical SEO — site speed, mobile-friendliness & Core Web Vitals",
  "Content optimization & internal linking strategy",
  "Schema markup & structured data implementation",
  "Google Search Console & Analytics setup",
  "High-quality backlink building & outreach",
  "Local SEO & Google Business Profile optimization",
  "Monthly SEO performance reports with ranking data",
  "Image optimization & alt tag implementation",
  "URL structure & sitemap optimization",
];

const benefits = [
  "Get found by customers searching for your services on Google — 24/7 visibility",
  "Drive free, organic traffic without paying for every click like paid ads",
  "Build long-term authority and trust with higher search engine rankings",
  "Outrank your competitors for high-value local and national keywords",
  "Increase leads and sales with traffic that has real purchase intent",
  "Improve website speed, UX, and mobile experience as part of technical SEO",
];

const processSteps = [
  { title: "SEO Audit", desc: "We analyze your website's current SEO health, rankings, technical issues, and competitor landscape." },
  { title: "Strategy & Keywords", desc: "We create a keyword-driven SEO strategy targeting high-intent, high-value search terms for your industry." },
  { title: "On-Page & Technical", desc: "We optimize your site structure, content, meta tags, speed, mobile UX, and schema markup." },
  { title: "Off-Page & Report", desc: "We build quality backlinks, local citations, and deliver monthly ranking and traffic reports." },
];

const flexiblePoints = [
  "Monthly SEO packages starting from LKR 25,000",
  "One-time SEO audit available for new websites",
  "No long-term contracts — month-to-month flexibility",
  "Transparent reporting so you see exactly what you're paying for",
  "Scalable plans as your rankings and traffic grow",
  "Free initial website SEO audit for new clients",
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans — cancel anytime." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Monthly ranking and traffic reports with full data access." },
  { icon: <DollarSign className="w-5 h-5" />, title: "From LKR 25,000", desc: "Professional SEO accessible to every business size." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated SEO Specialist", desc: "A single point of contact managing your SEO strategy." },
];

const faqs = [
  { q: "What is SEO?", a: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results pages (SERPs) like Google. It involves on-page optimization (meta tags, content, headings), technical SEO (site speed, mobile-friendliness, crawlability), off-page SEO (backlinks, citations), and content marketing — all working together to improve your website's visibility and drive organic traffic." },
  { q: "Why is SEO important for businesses in Sri Lanka?", a: "Sri Lanka has become a search-first economy where customers rely heavily on Google before making purchasing decisions. If your business doesn't appear on the first page of Google, you're losing customers to competitors who do. SEO drives free, consistent, high-intent traffic — making it the most cost-effective long-term marketing investment." },
  { q: "What is the difference between on-page and off-page SEO?", a: "On-page SEO covers everything on your website — meta tags, content, headings, site speed, mobile optimization, internal links, and schema markup. Off-page SEO focuses on external factors like backlinks, social signals, local citations, and brand mentions that build your site's authority and trust with Google." },
  { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. Most businesses start seeing noticeable improvements in rankings and traffic within 3–6 months. However, competitive industries may take longer. The results compound over time, making SEO one of the highest-ROI marketing channels available." },
  { q: "Do you guarantee first page rankings?", a: "No ethical SEO agency can guarantee #1 rankings, as Google's algorithm considers 200+ factors. However, we consistently achieve top 10 rankings for targeted keywords through proven white-hat strategies. We focus on driving real traffic and leads, not empty promises." },
  { q: "Is SEO better than Google Ads?", a: "Both have their place. Google Ads delivers instant visibility but stops when you stop paying. SEO takes longer to build but delivers free, ongoing traffic that compounds over time. We recommend combining both — Google Ads for immediate leads and SEO for sustainable long-term growth and authority." },
  { q: "What is local SEO?", a: "Local SEO optimizes your online presence for location-based searches like 'near me' queries and city-specific terms. It includes Google Business Profile optimization, local citations, review management, and location-targeted content. Critical for businesses serving specific areas in Sri Lanka." },
  { q: "Do you offer local SEO for businesses in Sri Lanka?", a: "Yes! Local SEO is one of our core strengths. We optimize your Google Business Profile, build local citations, target location-specific keywords, and manage review strategies to help you rank for searches like 'near me' and city-based queries across all major cities in Sri Lanka." },
  { q: "What is technical SEO?", a: "Technical SEO focuses on improving your website's backend infrastructure — site speed, mobile responsiveness, crawlability, indexing, schema markup, XML sitemaps, SSL security, and Core Web Vitals. These factors directly impact how Google discovers, crawls, and ranks your pages." },
  { q: "How much does SEO cost in Sri Lanka?", a: "Our SEO packages start from LKR 25,000/month, making professional SEO accessible for small businesses. Unlike paid ads where you pay per click, SEO traffic is free once you rank. The cost depends on competition, number of keywords, and scope of work needed." },
  { q: "Can SEO increase sales?", a: "Yes — significantly. SEO drives high-intent organic traffic from users actively searching for your products or services. This traffic has much higher conversion rates than social media or display advertising because users are already in a buying mindset. Businesses that invest in SEO consistently see increased leads and revenue." },
  { q: "What is the best SEO company in Sri Lanka?", a: "Cypher Digital is a leading SEO company in Sri Lanka providing comprehensive search engine optimization services including keyword research, on-page optimization, technical SEO, content marketing, link building, and local SEO — all designed to improve rankings, drive organic traffic, and generate consistent leads for businesses across all industries." },
];

const allServices = [
  { name: "Social Media Marketing", path: "/social-media-management-sri-lanka", keyword: "Social Media Marketing Sri Lanka", desc: "Professional social media management including content creation and community engagement." },
  { name: "Facebook Ads", path: "/facebook-ads-sri-lanka", keyword: "Facebook Ads Sri Lanka", desc: "Facebook & Instagram advertising to reach targeted audiences and generate leads." },
  { name: "Google Ads", path: "/google-ads-sri-lanka", keyword: "Google Ads Sri Lanka", desc: "Google Search, Display & YouTube advertising to capture high-intent customers." },
  { name: "Video Production", path: "/video-production-sri-lanka", keyword: "Video Production Sri Lanka", desc: "Professional video content for ads, social media, and brand storytelling." },
  { name: "Graphic Design", path: "/graphic-design-sri-lanka", keyword: "Graphic Design Sri Lanka", desc: "Professional graphic design for branding, social media, and marketing materials." },
  { name: "TikTok Marketing", path: "/tiktok-marketing-sri-lanka", keyword: "TikTok Marketing Sri Lanka", desc: "Viral TikTok campaigns, content creation, and ads for Sri Lankan businesses." },
];

const tocItems = [
  { id: "what-is", label: "What is SEO?" },
  { id: "why-important", label: "Why SEO is Critical" },
  { id: "seo-services", label: "Our SEO Services" },
  { id: "whats-included", label: "What's Included" },
  { id: "process", label: "Our SEO Process" },
  { id: "local-seo", label: "Local SEO in Sri Lanka" },
  { id: "seo-vs-ads", label: "SEO vs Paid Advertising" },
  { id: "advanced-seo", label: "Advanced SEO Strategies" },
  { id: "industry-seo", label: "Industry-Specific SEO" },
  { id: "ai-search", label: "AI Search Optimization" },
  { id: "common-mistakes", label: "Common SEO Mistakes" },
  { id: "measuring-success", label: "Measuring SEO Success" },
  { id: "pricing", label: "Pricing & Packages" },
  { id: "faqs", label: "FAQs" },
];

const SEOServices = () => {
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
      name: "SEO Services Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "SEO Services",
      description: "Professional SEO services in Sri Lanka including on-page optimization, technical SEO, link building, content marketing, and local SEO for businesses across all industries.",
      url: "https://cypherdigital.lk/seo-services-sri-lanka",
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
        { "@type": "ListItem", position: 2, name: "SEO Services Sri Lanka", item: "https://cypherdigital.lk/seo-services-sri-lanka" },
      ],
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "SEO Services Sri Lanka | On-Page & Off-Page SEO | Cypher Digital",
      description: "Professional SEO services in Sri Lanka. On-page optimization, technical SEO, link building & local SEO from LKR 25,000/month. Rank higher on Google.",
      url: "https://cypherdigital.lk/seo-services-sri-lanka",
      dateModified: "2026-03-19",
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    });

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="SEO Sri Lanka (2026) | SEO Services Sri Lanka | On-Page & Off-Page SEO from LKR 25,000 | Cypher Digital"
        description="Professional SEO services in Sri Lanka. On-page optimization, technical SEO, link building, content marketing & local SEO from LKR 25,000/month. Rank #1 on Google with Cypher Digital."
        canonical="https://cypherdigital.lk/seo-services-sri-lanka"
      />

      {/* Breadcrumb */}
      <nav className="bg-secondary border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">SEO Services Sri Lanka</li>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Results-Driven SEO Services</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              SEO Sri Lanka – Rank #1 on Google with Data-Driven SEO Services
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Search Engine Optimization is the most powerful digital marketing strategy for long-term business growth. At <strong className="text-white/80">Cypher Digital</strong>, we provide <strong className="text-white/80">results-driven SEO services in Sri Lanka</strong>, helping businesses rank higher, attract qualified traffic, and generate consistent leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20SEO%20Services" target="_blank" rel="noopener noreferrer">
                  Book a Free SEO Audit
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
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">What is SEO?</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">SEO (Search Engine Optimization)</strong> is the process of optimizing your website to rank higher in search engine results pages (SERPs) like Google. It combines on-page optimization (meta tags, content, headings, internal linking), technical SEO (site speed, mobile-friendliness, crawlability, schema markup), off-page SEO (backlinks, citations, authority signals), and content marketing — all working together to improve your website's visibility, drive organic traffic, and generate consistent leads. In Sri Lanka's search-first economy, SEO is the most cost-effective long-term marketing strategy for sustainable business growth.
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
      <OurWorkSection service="SEO services" />
      <section id="why-important" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Why SEO is Critical for Businesses in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Sri Lanka has become a search-first economy. Customers rely heavily on Google before making any purchasing decision. If your website is not ranking, you are losing customers every single day.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Eye className="w-5 h-5" />, title: "24/7 Visibility", desc: "Unlike paid ads, SEO keeps your business visible on Google around the clock — even while you sleep." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Compounding ROI", desc: "SEO results compound over time. Every month of effort builds on the last, delivering exponentially more traffic and leads." },
                { icon: <Target className="w-5 h-5" />, title: "High-Intent Traffic", desc: "SEO traffic comes from users actively searching for your products or services — the highest-converting traffic source." },
                { icon: <DollarSign className="w-5 h-5" />, title: "Cost-Effective", desc: "Organic traffic is free once you rank. Unlike PPC, you don't pay per click — making SEO the best long-term investment." },
                { icon: <Shield className="w-5 h-5" />, title: "Trust & Authority", desc: "Higher rankings build trust. Users trust organic results more than paid ads, improving brand credibility." },
                { icon: <Globe className="w-5 h-5" />, title: "Competitive Advantage", desc: "Most Sri Lankan businesses still underinvest in SEO. Ranking first gives you a dominant market position." },
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

      {/* SEO Services */}
      <section id="seo-services" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Our SEO Services in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Comprehensive search engine optimization covering every aspect of your website's performance, from technical foundations to content authority.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: <Search className="w-5 h-5" />, title: "Keyword Research", desc: "Deep keyword analysis identifying high-value, high-intent search terms your customers use — including long-tail and local keywords." },
                { icon: <FileText className="w-5 h-5" />, title: "On-Page SEO", desc: "Optimization of meta titles, descriptions, headings, content, images, internal links, and URL structures for maximum relevance." },
                { icon: <Settings className="w-5 h-5" />, title: "Technical SEO", desc: "Site speed optimization, mobile-friendliness, Core Web Vitals, crawlability, indexing, XML sitemaps, and schema markup." },
                { icon: <Link2 className="w-5 h-5" />, title: "Link Building", desc: "Strategic acquisition of high-quality backlinks through outreach, content marketing, and authority building." },
                { icon: <BookOpen className="w-5 h-5" />, title: "Content Marketing", desc: "SEO-optimized blog articles, landing pages, and topical authority content that ranks and drives organic traffic." },
                { icon: <MapPin className="w-5 h-5" />, title: "Local SEO", desc: "Google Business Profile optimization, local citations, review management, and location-targeted keyword strategies." },
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

      {/* What's Included */}
      <section id="whats-included" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What's Included in Our SEO Packages</h2>
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
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Benefits of Professional SEO for Your Business</h2>
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
      <section id="process" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Our SEO Process at Cypher Digital</h2>
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

      {/* Local SEO */}
      <section id="local-seo" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Local SEO in Sri Lanka — Dominate Your Area</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Local SEO is critical for businesses targeting nearby customers. We help you appear in Google Maps, local search results, and "near me" queries across Sri Lanka.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, title: "Google Business Profile", desc: "Complete optimization of your GBP listing — photos, descriptions, categories, hours, and Q&A for maximum visibility." },
                { icon: <Star className="w-5 h-5" />, title: "Review Management", desc: "Strategy to generate and manage customer reviews that boost your local rankings and build trust." },
                { icon: <Globe className="w-5 h-5" />, title: "Local Citations", desc: "Consistent NAP (Name, Address, Phone) listings across directories, business listings, and local platforms." },
                { icon: <Search className="w-5 h-5" />, title: "Local Keywords", desc: "Targeting city-specific and 'near me' search terms that your local customers are actively using." },
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

      {/* SEO vs Paid Ads */}
      <section id="seo-vs-ads" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">SEO vs Paid Advertising – Which is Better?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Both SEO and paid ads have their place. Understanding the differences helps you invest wisely.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Search className="w-5 h-5 text-primary" /> SEO (Organic)</h3>
                <ul className="space-y-2">
                  {["Free traffic once you rank", "Results compound over time", "Builds long-term authority", "Higher trust from users", "24/7 visibility without ad spend"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Megaphone className="w-5 h-5 text-primary" /> Paid Ads (PPC)</h3>
                <ul className="space-y-2">
                  {["Instant visibility on Google", "Immediate traffic & leads", "Pay per click (costs add up)", "Stops when budget runs out", "Great for short-term campaigns"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              👉 <strong className="text-foreground">Best strategy:</strong> Combine both. Use <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads</Link> for immediate leads while building SEO for long-term, sustainable organic growth that compounds month after month.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced SEO Strategies */}
      <section id="advanced-seo" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Advanced SEO Strategies to Rank #1</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Beyond the basics, these advanced strategies are what separate top-ranking websites from the rest.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Layers className="w-5 h-5" />, title: "Topical Authority", desc: "Building comprehensive content clusters around core topics signals deep expertise to Google, boosting rankings for entire topic categories." },
                { icon: <Brain className="w-5 h-5" />, title: "Semantic SEO", desc: "Optimizing for related keywords, entities, and search intent — not just exact-match terms — aligns with how Google's AI understands content." },
                { icon: <Link2 className="w-5 h-5" />, title: "Strategic Internal Linking", desc: "A carefully structured internal linking architecture distributes page authority and helps Google discover and rank important pages." },
                { icon: <Sparkles className="w-5 h-5" />, title: "Featured Snippet Optimization", desc: "Structuring content with clear definitions, lists, and tables to capture Google's Position 0 featured snippets." },
                { icon: <Code className="w-5 h-5" />, title: "Schema Markup", desc: "Implementing structured data (FAQ, Service, LocalBusiness) gives Google rich context about your content, enabling rich results." },
                { icon: <Gauge className="w-5 h-5" />, title: "Core Web Vitals", desc: "Optimizing LCP, FID, and CLS scores for a faster, smoother user experience that Google directly rewards with higher rankings." },
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

      {/* Industry-Specific SEO */}
      <section id="industry-seo" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">SEO for Different Industries in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Every industry has unique search patterns and competition levels. Here's how we tailor SEO strategies for different business types.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: "🏨", title: "Hotels & Tourism", desc: "Ranking for destination searches, booking keywords, and travel-related terms that drive direct reservations.", link: "/hotel-digital-marketing-sri-lanka" },
                { icon: "🛒", title: "Ecommerce & Retail", desc: "Product and category page optimization, shopping intent keywords, and technical ecommerce SEO.", link: "/ecommerce-digital-marketing-sri-lanka" },
                { icon: "🎓", title: "Education", desc: "Course and program keyword targeting, enrollment-focused content, and university/institute SEO.", link: "/education-marketing-agency-sri-lanka" },
                { icon: "🏠", title: "Real Estate", desc: "Property listing optimization, location-based keywords, and local SEO for real estate agents.", link: "/real-estate-digital-marketing-sri-lanka" },
                { icon: "🍽️", title: "Restaurants & Cafés", desc: "Menu page optimization, 'near me' search targeting, and Google Business Profile optimization.", link: "/restaurant-digital-marketing-sri-lanka" },
                { icon: "💇", title: "Beauty & Salons", desc: "Service-based keyword targeting, local 'near me' optimization, and review strategy.", link: "/beauty-salon-digital-marketing-sri-lanka" },
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

      {/* AI Search Optimization */}
      <section id="ai-search" className="py-14 bg-primary/5 border-y border-border scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">AI Search Optimization — The Future of SEO</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">AI-powered search (Google SGE, ChatGPT, Perplexity) is changing how users find information. Your content must be optimized for both traditional and AI-driven search.</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Direct Answers", desc: "Content that clearly answers specific questions gets surfaced by AI search tools." },
                { title: "Structured Content", desc: "Well-organized content with clear headings and sections helps AI understand and cite your pages." },
                { title: "Factual Authority", desc: "Accurate, verifiable, expert-level content is prioritized by AI search algorithms." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">What is the Best SEO Company in Sri Lanka?</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cypher Digital</strong> is a leading SEO company in Sri Lanka providing comprehensive search engine optimization services — including keyword research, on-page optimization, technical SEO, content marketing, link building, and local SEO — designed to improve rankings, drive organic traffic, and generate consistent leads for businesses across all industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="common-mistakes" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Common SEO Mistakes That Hurt Your Rankings</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { mistake: "Keyword stuffing", fix: "Write naturally for users first. Use keywords strategically in titles, headings, and naturally within content." },
                { mistake: "Ignoring technical SEO", fix: "Site speed, mobile UX, and crawlability are ranking factors. Fix technical issues before focusing on content." },
                { mistake: "No backlink strategy", fix: "Quality backlinks remain one of Google's top ranking factors. Invest in strategic, ethical link building." },
                { mistake: "Thin, low-quality content", fix: "Create comprehensive, in-depth content that thoroughly answers user questions and demonstrates expertise." },
                { mistake: "Not tracking results", fix: "Set up Google Search Console and Analytics. Monitor rankings, traffic, and conversions to make data-driven decisions." },
                { mistake: "Expecting instant results", fix: "SEO is a long-term investment. Expect 3–6 months for significant results, with compounding growth after." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <p className="text-sm font-bold text-destructive mb-2">❌ {item.mistake}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">✅ {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Measuring Success */}
      <section id="measuring-success" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Measuring SEO Success — Key Metrics</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">SEO success isn't just about rankings. We track comprehensive metrics that measure real business impact.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, title: "Keyword Rankings", desc: "Tracking position changes for target keywords across Google search results." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Organic Traffic", desc: "Measuring growth in visitors coming from organic search results." },
                { icon: <Target className="w-5 h-5" />, title: "Conversions", desc: "Tracking leads, inquiries, and sales generated from organic traffic." },
                { icon: <PieChart className="w-5 h-5" />, title: "ROI", desc: "Calculating return on investment from your SEO spend versus revenue generated." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">{item.icon}</div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Flexible & Affordable SEO Packages</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              SEO is the most cost-effective long-term marketing investment. We offer flexible, transparent SEO packages for Sri Lankan businesses — from one-time audits to ongoing monthly optimization.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {flexiblePoints.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{p}</span>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {trustPoints.map((t, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">{t.icon}</div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t.title}</h3>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Locations */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">SEO Services Across Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">We provide professional SEO services to businesses across all major cities and regions in Sri Lanka.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Colombo", "Negombo", "Kandy", "Galle", "Jaffna", "Kurunegala", "Matara", "Batticaloa", "Maharagama", "Nugegoda"].map((city) => (
                <span key={city} className="flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-xs text-foreground">
                  <MapPin className="w-3 h-3 text-primary" />{city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions About SEO in Sri Lanka</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Get a Free SEO Audit</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ready to rank higher on Google and drive consistent organic traffic? Tell us about your business and we'll provide a free SEO audit with actionable recommendations.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <img src={mascotGlasses} alt="Cypher Digital mascot" className="w-16 h-16 rounded-full border-2 border-primary/20 object-cover" />
                  <div>
                    <p className="text-sm font-bold text-foreground">Ready to rank #1? 🚀</p>
                    <p className="text-xs text-muted-foreground">Drop us a message — let's dominate Google together!</p>
                  </div>
                </div>
              </div>
              <InquiryForm service="SEO" />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Related Digital Marketing Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServices.map((service, i) => (
                <Link key={i} to={service.path} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors group">
                  <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">{service.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{service.desc}</p>
                  <span className="text-xs text-primary flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Guide CTA */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">Complete Guide to Advertising in Sri Lanka</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            SEO is one part of a comprehensive digital marketing strategy. Read our complete guide to learn how all digital marketing channels — including Google Ads, Facebook Ads, and <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline font-semibold">Social Media Management Sri Lanka</Link> — work together for maximum growth.
          </p>
          <p className="text-white/60 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            SEO is no longer just about Google. Run a free <Link to="/ai-visibility-sri-lanka" className="text-primary hover:underline font-semibold">AI Visibility Check in Sri Lanka</Link> to see how often ChatGPT, Gemini, Claude and Perplexity mention your brand.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl">
            <Link to="/advertising-in-sri-lanka">Read the Full Advertising Guide <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
          <p className="text-xs text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            Also explore{" "}
            <Link to="/media-buying-agencies-sri-lanka" className="text-primary hover:underline font-semibold">media buying in Sri Lanka</Link>,{" "}
            <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline font-semibold">TV advertising</Link>,{" "}
            <Link to="/radio-advertising-sri-lanka" className="text-primary hover:underline font-semibold">radio advertising</Link> and{" "}
            <Link to="/newspaper-advertising-sri-lanka" className="text-primary hover:underline font-semibold">newspaper advertising</Link>.
          </p>
        </div>
      </section>
      <RelatedPosts
        keywords={["SEO Services Sri Lanka", "Google My Business Sri Lanka", "Content Marketing Sri Lanka"]}
        heading="More on SEO & Organic Growth"
        intro="Practical SEO guides, local search tactics, and content strategies for Sri Lankan businesses."
      />
    </div>
  );
};

export default SEOServices;
