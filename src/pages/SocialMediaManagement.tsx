import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import RelatedPosts from "@/components/RelatedPosts";
import AIVisibilityHighlightCard from "@/components/AIVisibilityHighlightCard";
import { useEffect } from "react";
import {
  Megaphone, CheckCircle, BarChart3, Users, TrendingUp, Zap, Shield, Clock,
  Target, Smartphone, Eye, Globe, Layers, MousePointerClick, Brain,
  MessageCircle, Video, Share2, Heart, MapPin
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "30+", label: "Pages Managed" },
  { value: "5,000+", label: "Posts Created" },
  { value: "3x", label: "Engagement Growth" },
  { value: "Daily", label: "Monitoring" },
];

const features = [
  "Content planning & monthly editorial calendar",
  "Creative post design — graphics, carousels & infographics",
  "Daily or weekly post scheduling & publishing",
  "Inbox & comment management with quick response",
  "Instagram & Facebook Story creation",
  "Reels & short-form video content",
  "Monthly performance reports with analytics",
  "Competitor analysis & benchmarking",
  "Hashtag strategy & optimization",
  "Brand voice development & consistency",
];

const benefits = [
  "Build a consistent, professional brand presence across Facebook & Instagram",
  "Save 15+ hours per week while maintaining active, engaging social profiles",
  "Increase engagement rates by 2–5x with professionally designed content",
  "Convert followers into paying customers with strategic CTAs",
  "Stay ahead of competitors with data-driven content planning",
  "Never miss a customer message with dedicated inbox management",
];

const processSteps = [
  { title: "Brand Audit", desc: "We review your current social presence, audience, and competitors." },
  { title: "Content Strategy", desc: "A tailored content plan with themes, formats, and posting schedule." },
  { title: "Design & Publish", desc: "Our creative team designs and publishes engaging content daily/weekly." },
  { title: "Engage & Report", desc: "Community management, inbox handling, and monthly analytics reports." },
];

const flexiblePoints = [
  "Affordable monthly packages starting from LKR 60,000",
  "Choose 12, 16, or 20+ posts per month",
  "No annual contracts — flexible month-to-month plans",
  "Add-on services like reels or LinkedIn at low cost",
  "Save up to 70% compared to hiring an in-house social media manager",
  "Free brand audit before you commit",
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports so you always know your ROI." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "Campaigns go live within 3–5 business days." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your marketing needs." },
];

const faqs = [
  { q: "What is social media marketing?", a: "Social media marketing involves promoting businesses through platforms like Facebook, Instagram, TikTok, and LinkedIn to increase brand awareness, generate leads, and drive sales." },
  { q: "Why is social media marketing important in Sri Lanka?", a: "Because millions of Sri Lankans are active daily on social media platforms. It's the most cost-effective way for businesses to reach, engage, and convert their target audience." },
  { q: "Which social media platform is best for my business?", a: "It depends on your business type. B2C brands typically do best on Instagram and Facebook, while B2B companies benefit from LinkedIn. TikTok is ideal for reaching younger audiences with viral content." },
  { q: "How many posts do you create per month?", a: "Our standard packages include 12–20 posts per month depending on the plan. This includes a mix of graphics, carousels, stories, and reels to keep your audience engaged." },
  { q: "Do you handle customer messages and comments?", a: "Yes! Inbox and comment management is included. We respond to customer queries professionally and escalate important messages to you immediately." },
  { q: "Which platforms do you manage?", a: "We primarily manage Facebook and Instagram pages. We can also manage LinkedIn, TikTok, and Google Business Profile as add-on services." },
  { q: "Can I approve posts before they go live?", a: "Absolutely. We share a monthly content calendar for your approval before publishing. You'll always have final say on what gets posted." },
  { q: "Do you create video content too?", a: "Yes, our packages include Reels and Story content. For more advanced video production like promotional videos, check our Video Production service." },
  { q: "How long does it take to see results?", a: "Organic social media growth typically shows meaningful results within 2–3 months. Paid social media advertising delivers immediate traffic and conversions from day one." },
  { q: "Is social media management affordable for small businesses?", a: "Yes! Our packages are specifically designed for Sri Lankan small businesses and startups. You get professional content, scheduling, and community management at a fraction of the cost of a full-time hire — starting from LKR 60,000/month." },
  { q: "What is the best social media marketing agency in Sri Lanka?", a: "Cypher Digital is a leading social media marketing agency in Sri Lanka providing ROI-driven strategies, professional content creation, community management, and performance-based advertising tailored for Sri Lankan businesses." },
  { q: "What does a Social Media Management Sri Lanka package include?", a: "Our Social Media Management Sri Lanka packages include content strategy, monthly content calendars, professional graphic and video creation, post scheduling, hashtag research, community engagement, inbox & comment management, monthly performance reports, and ongoing optimization across Facebook, Instagram, and TikTok." },
  { q: "How much does Social Media Management Sri Lanka cost?", a: "Social Media Management Sri Lanka pricing starts from LKR 60,000/month for our Starter package, LKR 120,000/month for Growth, and LKR 200,000+/month for Pro plans. Each plan scales content volume, ad management, and reporting depth based on your business goals." },
  { q: "Why choose Cypher Digital for Social Media Management Sri Lanka?", a: "Cypher Digital is one of the highest-rated agencies for Social Media Management Sri Lanka — offering no long-term contracts, fast 48-hour content delivery, dedicated account managers, transparent monthly reporting, and proven results across 200+ Sri Lankan SMEs in salons, real estate, healthcare, education, and e-commerce." },
  { q: "Do I need Social Media Management Sri Lanka if I already run Facebook Ads?", a: "Yes. Social Media Management Sri Lanka and Facebook Ads work best together. Organic management builds trust, social proof, and brand authority — which dramatically improves the conversion rate of your paid ads. Pages with active, professional content typically see 30–50% better ad performance." },
  { q: "Can you handle Social Media Management Sri Lanka in Sinhala and Tamil?", a: "Absolutely. Our Social Media Management Sri Lanka team creates fully localized content in Sinhala, Tamil, and English to maximize reach and engagement across all demographics in Sri Lanka." },
  { q: "What social media marketing packages do you offer in Sri Lanka?", a: "Cypher Digital offers three social media marketing packages in Sri Lanka. The Starter package (LKR 60,000/month) covers Facebook and Instagram with 12 posts per month. The Growth package (LKR 90,000–100,000/month) includes 16 posts plus 4 Reels per month — our most popular social media marketing package. The Pro package (LKR 120,000+/month) includes 20+ posts and 6 Reels across Facebook, Instagram, and TikTok with a paid ad campaign included. All social media marketing packages come with no annual contracts and no hidden fees." },
  { q: "What does social media marketing in Sri Lanka include?", a: "Professional social media marketing in Sri Lanka covers content strategy, custom graphic design, caption writing in Sinhala and English, post scheduling, Reels production, community management, paid advertising on Facebook, Instagram and TikTok, and detailed monthly performance reports. At Cypher Digital, our social media marketing Sri Lanka services are fully managed so you can focus on running your business while we grow your online presence." },
  { q: "What is the best social media marketing strategy for Sri Lankan businesses?", a: "The most effective social media marketing strategy for Sri Lankan businesses combines consistent organic content including Reels, active community management with fast response times, and targeted paid advertising on Facebook and Instagram. Facebook leads with 8.75 million Sri Lankan users while Instagram Reels and TikTok deliver the highest organic reach for audiences under 40. Cypher Digital builds custom social media marketing strategies tailored to each client's industry, audience, and budget." },
  { q: "Why choose Cypher Digital as your social media marketing company in Sri Lanka?", a: "Cypher Digital is one of Sri Lanka's most results-focused social media marketing companies, managing 30+ business pages across Colombo, Kandy, Galle, Negombo, Maharagama, and beyond. Unlike freelancers, we operate as a full team of strategists, designers, copywriters, and ad specialists. We offer flexible month-to-month pricing with no lock-in contracts and focus on real results — leads from your inbox, real follower growth, and real revenue." },
  { q: "What is the best social media marketing Sri Lanka agency?", a: "Cypher Digital is widely rated as the best social media marketing Sri Lanka agency — combining strategy, design, copywriting, paid ads and analytics under one roof. Our social media marketing Sri Lanka team has delivered measurable ROI for 200+ SMEs across Colombo, Kandy, Galle, Negombo and Jaffna with no lock-in contracts and transparent monthly reporting." },
  { q: "How much does social media marketing Sri Lanka cost?", a: "Social media marketing Sri Lanka pricing at Cypher Digital starts from LKR 60,000/month (Starter), LKR 90,000–120,000/month (Growth), and LKR 200,000+/month (Pro). All social media marketing Sri Lanka packages include content creation, scheduling, community management and monthly reporting — with optional paid ad management for businesses that want faster growth." },
  { q: "Why choose Cypher Digital for social media marketing Sri Lanka?", a: "Choose Cypher Digital for social media marketing Sri Lanka because we deliver real business outcomes — not vanity metrics. You get a dedicated account manager, full-stack creative team, Sinhala + Tamil + English content, paid ad expertise on Facebook, Instagram & TikTok, transparent reporting, and flexible month-to-month plans designed specifically for Sri Lankan SMEs." },
];

const allServices = [
  { name: "Facebook Advertising", path: "/facebook-ads-sri-lanka", keyword: "Facebook Ads Sri Lanka", desc: "High-performing Facebook & Instagram ad campaigns for lead generation and brand awareness in Sri Lanka." },
  { name: "Google Ads", path: "/google-ads-sri-lanka", keyword: "Google Ads Sri Lanka", desc: "Google Search, Display & YouTube advertising to capture high-intent customers across Sri Lanka." },
  { name: "SEO", path: "/seo-services-sri-lanka", keyword: "SEO Services Sri Lanka", desc: "On-page and off-page search engine optimization to rank higher on Google in Sri Lanka." },
  { name: "Graphic Design", path: "/graphic-design-sri-lanka", keyword: "Graphic Design Sri Lanka", desc: "Professional logo design, social media graphics, and print design for Sri Lankan brands." },
  { name: "Video Production", path: "/video-production-sri-lanka", keyword: "Video Production Sri Lanka", desc: "Professional video content for ads, social media, and brand storytelling in Sri Lanka." },
  { name: "TikTok Marketing", path: "/tiktok-marketing-sri-lanka", keyword: "TikTok Marketing Sri Lanka", desc: "Viral TikTok campaigns, content creation, and ads for Sri Lankan businesses." },
];

const tocItems = [
  { id: "what-is", label: "What is Social Media Marketing?" },
  { id: "why-important", label: "Why It's Important in Sri Lanka" },
  { id: "platforms", label: "Top Platforms" },
  { id: "services", label: "Our Services" },
  { id: "whats-included", label: "What's Included" },
  { id: "process", label: "Our Process" },
  { id: "content-strategy", label: "Content Strategy" },
  { id: "advertising-strategy", label: "Advertising Strategy" },
  { id: "industry-strategies", label: "Industry-Specific Strategies" },
  { id: "influencer", label: "Influencer Marketing" },
  { id: "advanced", label: "Advanced Strategies" },
  { id: "pricing", label: "Pricing & Packages" },
  { id: "faqs", label: "FAQs" },
];

const SocialMediaManagement = () => {
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
      name: "Social Media Management Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "Social Media Management",
      description: "Expert Social Media Management Sri Lanka services — Facebook & Instagram page management, content creation, community engagement, and social media marketing for Sri Lankan businesses.",
      url: "https://cypherdigital.lk/social-media-management-sri-lanka",
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
        { "@type": "ListItem", position: 2, name: "Social Media Management Sri Lanka", item: "https://cypherdigital.lk/social-media-management-sri-lanka" },
      ],
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://cypherdigital.lk/#localbusiness",
      name: "Cypher Digital — Social Media Management Sri Lanka",
      image: "https://cypherdigital.lk/og-image.jpg",
      url: "https://cypherdigital.lk/social-media-management-sri-lanka",
      telephone: "+94701772626",
      priceRange: "LKR 60,000 - LKR 200,000+",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Colombo",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        postalCode: "00100",
        addressCountry: "LK",
      },
      geo: { "@type": "GeoCoordinates", latitude: 6.9271, longitude: 79.8612 },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:00", closes: "18:00",
      }],
      sameAs: [
        "https://www.facebook.com/cypherdigital.lk",
        "https://www.instagram.com/cypherdigital.lk",
      ],
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Social Media Management Sri Lanka | Cypher Digital",
      description: "Expert Social Media Management Sri Lanka — page management, content, community engagement & marketing services from LKR 60,000/month.",
      url: "https://cypherdigital.lk/social-media-management-sri-lanka",
      dateModified: "2026-03-19",
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    });

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Social Media Marketing Sri Lanka | Social Media Management"
        description="#1 Social media management Sri Lanka & social media marketing Sri Lanka. Best social media marketing packages, trusted social media marketing company. Free call."
        canonical="https://cypherdigital.lk/social-media-management-sri-lanka"
      />

      {/* Breadcrumb */}
      <nav className="bg-secondary border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Social Media Management Sri Lanka</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(25,95%,53%)]/40 bg-[hsl(25,95%,53%)]/10 text-[hsl(25,95%,53%)] text-xs font-semibold mb-6 uppercase tracking-widest">
              🇱🇰 #1 Rated Social Media Agency — Colombo, Sri Lanka
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Social Media Marketing Sri Lanka – Expert <span className="text-[hsl(25,95%,53%)]">Social Media Management</span> Services
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Cypher Digital is Sri Lanka's #1 <strong className="text-white/80">Social Media Marketing Sri Lanka</strong> agency — delivering data-driven Social Media Marketing Sri Lanka campaigns, expert social media management, creative content and powerful Social Media Marketing Sri Lanka strategies that generate real leads, real followers and real revenue for businesses across Colombo, Kandy, Galle and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20strategy%20call%20for%20social%20media%20marketing" target="_blank" rel="noopener noreferrer">
                  Get a Free Strategy Call
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20see%20your%20social%20media%20packages" target="_blank" rel="noopener noreferrer">
                  See Our Packages
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/40 mt-5">⚡ No contracts. No fluff. Just results — reply on WhatsApp in under 5 minutes.</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
<AIVisibilityHighlightCard />

      <section className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="py-8 text-center">
                <div className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Social Media Marketing Sri Lanka */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Why Social Media Marketing Sri Lanka is the Fastest Way to Grow Your Business</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Social media marketing in Sri Lanka has transformed from occasional posting into the most powerful tool Sri Lankan businesses have for building brand awareness, generating qualified leads, and converting followers into paying customers. With over 8.4 million active social media users in Sri Lanka spending an average of 2 hours 45 minutes daily on Facebook, Instagram, and TikTok, businesses that invest in professional social media marketing Sri Lanka consistently outperform those that don't.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Cypher Digital, our social media marketing services in Sri Lanka go far beyond posting content. We develop data-driven strategies, create platform-native content, manage your community, and run targeted paid campaigns — giving your business a complete social media marketing Sri Lanka solution that drives measurable results every month.
            </p>
          </div>
        </div>
      </section>

      {/* Snippet Bait + TOC */}
      <OurWorkSection service="social media management" />
      <section className="py-16 lg:py-20" id="what-is">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Definition Box - Featured Snippet Target */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-12">
              <h2 className="font-heading text-xl font-extrabold mb-3">What is Social Media Marketing Sri Lanka?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Social Media Marketing Sri Lanka</strong> is the end-to-end service of promoting your business on Facebook, Instagram, TikTok and LinkedIn — including Social Media Marketing Sri Lanka strategy, graphic & video creation, scheduling, community engagement, inbox management, paid social media advertising and monthly performance reporting. Cypher Digital is a leading Social Media Marketing Sri Lanka agency combining social media management and paid social media marketing to help Sri Lankan SMEs grow leads, followers and revenue.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-sm font-bold mb-4">📋 Table of Contents</h3>
              <div className="grid sm:grid-cols-2 gap-1">
                {tocItems.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                    → {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="py-16 lg:py-20 bg-secondary" id="why-important">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Why Choose Our Social Media Marketing Sri Lanka Services?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Sri Lanka has a rapidly growing digital audience, with millions of users active daily on social media platforms. Businesses across every industry — from restaurants and fashion brands to real estate companies and educational institutions — are leveraging social media to connect with customers, build brands, and drive sales.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {[
                { icon: <Smartphone className="w-5 h-5" />, title: "High Mobile Usage", desc: "Sri Lanka is a mobile-first market. Most social media engagement happens on smartphones." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Growing Adoption", desc: "Social media usage continues to grow rapidly across all age demographics in Sri Lanka." },
                { icon: <Video className="w-5 h-5" />, title: "Video Dominance", desc: "Short-form video content on Reels and TikTok drives the highest engagement rates." },
                { icon: <Heart className="w-5 h-5" />, title: "Influencer-Driven Purchasing", desc: "Sri Lankan consumers increasingly trust influencer recommendations when making purchase decisions." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-3 text-destructive">❌ Without Social Media Marketing</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Low brand visibility and awareness</li>
                  <li>• Missed customer engagement opportunities</li>
                  <li>• Falling behind competitors who are active online</li>
                  <li>• No direct channel to communicate with customers</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-3 text-primary">✔ With the Right Strategy</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Build strong brand awareness and recognition</li>
                  <li>• Generate leads and drive sales consistently</li>
                  <li>• Engage directly with customers in real-time</li>
                  <li>• Create long-term customer loyalty and advocacy</li>
                </ul>
              </div>
            </div>

            {/* Sri Lanka Social Media Stats */}
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "8.4M+", lbl: "Active social media users in Sri Lanka" },
                { num: "92%", lbl: "Sri Lankan users access social via mobile" },
                { num: "2h 45m", lbl: "Average daily time on social media" },
                { num: "15%", lbl: "Year-on-year growth in SL social users" },
              ].map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                  <div className="font-heading text-2xl font-extrabold text-primary mb-1">{s.num}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{s.lbl}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground/70 text-center mt-3">Source: DataReportal 2024 — Digital 2024: Sri Lanka</p>

            {/* Free Audit CTA Strip */}
            <div className="mt-10 bg-foreground rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="text-center md:text-left">
                <h3 className="font-heading text-lg font-bold text-white mb-1">Not sure where to start? We'll audit your pages — free.</h3>
                <p className="text-sm text-white/55">No commitment. We'll tell you exactly what's holding your social media back.</p>
              </div>
              <Button asChild className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold rounded-xl h-12 px-6 border-none whitespace-nowrap">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20social%20media%20audit" target="_blank" rel="noopener noreferrer">Get Free Audit →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 lg:py-20" id="platforms">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Platform Expertise</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Platforms That Dominate Social Media Marketing in Sri Lanka</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { emoji: "📘", title: "Facebook Marketing", desc: "Still the largest platform in Sri Lanka with the widest audience reach. Best for lead generation, advertising, promotions, and community building.", best: "Lead generation, advertising, promotions" },
                { emoji: "📸", title: "Instagram Marketing", desc: "Highly visual platform perfect for brands that rely on aesthetics. Ideal for fashion, food, lifestyle, beauty, and travel brands in Sri Lanka.", best: "Branding, fashion, food, lifestyle" },
                { emoji: "🎵", title: "TikTok Marketing", desc: "Fastest-growing platform in Sri Lanka. Short-form video content drives viral reach and massive engagement, especially with younger audiences.", best: "Viral content, youth audience, trends" },
                { emoji: "💼", title: "LinkedIn Marketing", desc: "The leading professional networking platform. Essential for B2B marketing, corporate branding, recruitment, and thought leadership.", best: "B2B marketing, corporate branding" },
              ].map((platform, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                  <div className="text-3xl mb-3">{platform.emoji}</div>
                  <h3 className="font-heading text-base font-bold mb-2">{platform.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{platform.desc}</p>
                  <p className="text-xs"><span className="font-semibold text-primary">Best for:</span> {platform.best}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 lg:py-20 bg-secondary" id="services">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">What We Offer</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Social Media Management &amp; Marketing Sri Lanka — Services We Offer</h2>
            </div>
            <div className="space-y-5">
              {[
                { icon: <Target className="w-5 h-5" />, title: "Social Media Strategy Development", desc: "We create a tailored social media strategy based on your industry, target audience, and business goals. Every campaign starts with research, competitor analysis, and clear KPIs." },
                { icon: <Layers className="w-5 h-5" />, title: "Content Creation & Management", desc: "Our creative team designs and produces posts, Reels, Stories, carousels, and videos that resonate with your audience and reflect your brand identity." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Social Media Advertising", desc: "We run high-performance paid campaigns on Facebook Ads, Instagram Ads, and TikTok Ads to drive traffic, generate leads, and increase sales." },
                { icon: <MessageCircle className="w-5 h-5" />, title: "Community Management", desc: "We handle comments, direct messages, and customer queries professionally — building trust and keeping your audience engaged around the clock." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Reporting", desc: "We track engagement, reach, conversions, and ROI with detailed monthly performance reports so you always know what's working." },
              ].map((service, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Form */}
      <section className="py-20 lg:py-28" id="whats-included">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">What's Included in Our Social Media Management Sri Lanka Packages</h2>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-lg font-bold mt-12 mb-6">Why This Works</h3>
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border sticky top-24">
                <h3 className="font-heading text-lg font-bold mb-1.5">Get a Free Quote</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your business and we'll create a custom social media marketing strategy.
                </p>
                <InquiryForm service="social media management" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-secondary" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Social Media Management Sri Lanka Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategy */}
      <section className="py-16 lg:py-20" id="content-strategy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Content Strategy for Social Media Success in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Content is the foundation of social media marketing. The right content strategy attracts followers, builds engagement, and converts audiences into paying customers. Here's what works best for Sri Lankan businesses:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Video className="w-5 h-5" />, title: "Short-Form Videos", desc: "Reels and TikTok videos generate the highest engagement. Quick, entertaining, and educational videos drive massive organic reach." },
                { icon: <Brain className="w-5 h-5" />, title: "Educational Content", desc: "Posts that teach, inform, or solve problems build authority and trust with your audience." },
                { icon: <Heart className="w-5 h-5" />, title: "Entertaining Posts", desc: "Memes, trending audio, and relatable content create shareable moments that expand your reach." },
                { icon: <Users className="w-5 h-5" />, title: "User-Generated Content", desc: "Customer photos, reviews, and testimonials provide authentic social proof that drives purchasing decisions." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Strategy / Funnel */}
      <section className="py-16 lg:py-20 bg-secondary" id="advertising-strategy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Social Media Advertising Strategy</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Organic reach alone is not enough. A paid social media advertising strategy amplifies your content and delivers measurable results. We use a full-funnel approach to maximize ROI:
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { label: "Top Funnel", title: "Awareness", desc: "Brand awareness campaigns, video views, and reach campaigns to introduce your brand to new audiences.", color: "bg-primary/10 text-primary" },
                { label: "Middle Funnel", title: "Engagement", desc: "Retargeting campaigns, content engagement, and lead generation ads to nurture interested audiences.", color: "bg-[hsl(25,95%,53%)]/10 text-[hsl(25,95%,53%)]" },
                { label: "Bottom Funnel", title: "Conversion", desc: "Conversion-optimized campaigns, dynamic product ads, and direct response ads to drive sales.", color: "bg-green-500/10 text-green-600" },
              ].map((stage, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${stage.color}`}>{stage.label}</span>
                  <h3 className="font-heading text-base font-bold mb-2">{stage.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Strategies */}
      <section className="py-16 lg:py-20" id="industry-strategies">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industry Expertise</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Industry-Specific Social Media Strategies</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { emoji: "🍽️", title: "Restaurants & Cafés", desc: "Food photography, behind-the-scenes content, special offers, and location-based targeting.", link: "/restaurant-digital-marketing-sri-lanka" },
                { emoji: "👗", title: "Fashion & Apparel", desc: "Influencer collaborations, outfit reels, collection launches, and Instagram shopping.", link: "/fashion-brand-digital-marketing-sri-lanka" },
                { emoji: "🎓", title: "Education & Training", desc: "Student testimonials, course promotions, intake campaigns, and lead generation.", link: "/education-marketing-agency-sri-lanka" },
                { emoji: "🏠", title: "Real Estate", desc: "Virtual property tours, listing promotions, lead ads, and video walkthroughs.", link: "/real-estate-digital-marketing-sri-lanka" },
                { emoji: "🏨", title: "Hotels & Tourism", desc: "Destination content, booking promotions, influencer stays, and travel inspiration.", link: "/hotel-digital-marketing-sri-lanka" },
                { emoji: "💇", title: "Beauty & Wellness", desc: "Transformation reels, treatment showcases, before/after content, and local targeting.", link: "/beauty-salon-digital-marketing-sri-lanka" },
              ].map((industry, i) => (
                <Link key={i} to={industry.link} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-colors group">
                  <span className="text-2xl">{industry.emoji}</span>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">{industry.title}</h3>
                    <p className="text-xs text-muted-foreground">{industry.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Marketing */}
      <section className="py-16 lg:py-20 bg-secondary" id="influencer">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Influencer Marketing in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Influencers play a major role in social media marketing success. Sri Lankan consumers increasingly trust influencer recommendations, making influencer partnerships one of the most effective ways to build brand awareness and drive conversions.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-2">Macro Influencers</h3>
                <p className="text-xs text-muted-foreground">Large following, broad reach. Ideal for brand awareness campaigns and product launches.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-2">Micro Influencers</h3>
                <p className="text-xs text-muted-foreground">Smaller but highly engaged audiences. Higher conversion rates and more affordable partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="py-16 lg:py-20" id="advanced">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Stay Ahead</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Advanced Social Media Marketing Strategies</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Video className="w-5 h-5" />, title: "Video-First Strategy", desc: "Reels and TikTok dominate engagement. We prioritize short-form video content that captures attention and drives sharing." },
                { icon: <Clock className="w-5 h-5" />, title: "Consistency & Scheduling", desc: "Regular posting at optimal times builds momentum and keeps your brand top-of-mind with your audience." },
                { icon: <MessageCircle className="w-5 h-5" />, title: "Engagement Optimization", desc: "Actively replying to comments, running polls, and creating interactive content boosts algorithm visibility." },
                { icon: <MousePointerClick className="w-5 h-5" />, title: "Retargeting Campaigns", desc: "Show targeted ads to users who have already interacted with your brand — dramatically improving conversion rates." },
              ].map((strategy, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{strategy.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{strategy.title}</h3>
                    <p className="text-xs text-muted-foreground">{strategy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Cypher Digital</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Cypher Digital — Sri Lanka's Trusted Social Media Marketing Company</h2>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              We're not a freelancer or a one-person operation. Cypher Digital is a full-service social media marketing company in Sri Lanka with a dedicated team of content strategists, graphic designers, copywriters, and paid advertising specialists — all working together on your brand. Based in Colombo and serving businesses island-wide, we've helped 30+ Sri Lankan businesses across Colombo, Kandy, Galle, Negombo, Maharagama, and beyond transform their social media pages into consistent lead-generating assets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((tp, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-colors text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">{tp.icon}</div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{tp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28" id="faqs">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQ</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Frequently Asked Questions About Social Media Marketing Sri Lanka</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-secondary" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Pricing</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Best Social Media Marketing Sri Lanka Packages — Transparent Pricing, No Lock-in Contracts</h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">Transparent pricing with no lock-in contracts. Choose a plan that fits your business — and upgrade anytime as you grow.</p>
              <p className="text-sm text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
                Our social media marketing packages in Sri Lanka are built for businesses at every stage of growth. Whether you're a small business needing a professional online presence or an established brand ready to scale with video content and paid advertising, there's a social media marketing package for you — with clear pricing, no hidden fees, and no annual contracts. Every package includes content strategy, custom graphic design, post scheduling, community management, and a detailed monthly analytics report.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                { name: "Starter", posts: "12 Posts / Month", desc: "Facebook & Instagram — Perfect for small businesses getting started", features: ["Facebook & Instagram management","Custom graphic design","Monthly content calendar","Caption copywriting","Hashtag strategy","Basic monthly report"], featured: false, msg: "Hi%2C%20I%20am%20interested%20in%20the%20Starter%20package" },
                { name: "Growth", posts: "16 Posts + 4 Reels / Month", desc: "Best for growing brands that want real results", features: ["Facebook & Instagram management","4 Reels / short-form videos","Story creation (weekly)","Inbox & comment management","Competitor analysis","Detailed monthly analytics report","Dedicated account manager"], featured: true, msg: "Hi%2C%20I%20am%20interested%20in%20the%20Growth%20package" },
                { name: "Pro", posts: "20+ Posts + 6 Reels / Month", desc: "Facebook, Instagram & TikTok — Full-service for serious growth", features: ["Facebook, Instagram & TikTok","6 Reels / TikTok videos","Daily story management","Facebook or Instagram Ad campaign","Full inbox management (daily)","Advanced analytics & ROI report","Dedicated strategist + designer","Monthly strategy call"], featured: false, msg: "Hi%2C%20I%20am%20interested%20in%20the%20Pro%20package" },
              ].map((pkg, i) => (
                <div key={i} className={`relative bg-card border rounded-2xl p-6 flex flex-col ${pkg.featured ? "border-[hsl(25,95%,53%)] shadow-card scale-[1.02]" : "border-border"}`}>
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(25,95%,53%)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</span>
                  )}
                  <h3 className="font-heading text-xl font-extrabold mb-1">{pkg.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-1">{pkg.posts}</p>
                  <p className="text-xs text-muted-foreground mb-5">{pkg.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full font-semibold rounded-xl h-11 ${pkg.featured ? "bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] border-none" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
                    <a href={`https://wa.me/94701772626?text=${pkg.msg}%20%E2%80%94%20can%20you%20send%20me%20the%20pricing%3F`} target="_blank" rel="noopener noreferrer">Get Pricing →</a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <p className="text-sm text-muted-foreground">Not sure which package is right for you? <strong className="text-foreground">Chat with us on WhatsApp</strong> — we'll recommend the best plan for your budget and goals in 5 minutes.</p>
              <Button asChild className="mt-4 bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold rounded-xl h-11 px-6 border-none">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20social%20media%20package%20for%20my%20business" target="_blank" rel="noopener noreferrer">Help Me Choose a Package →</a>
              </Button>
            </div>

            {/* Comparison */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
                <h3 className="font-heading text-xl md:text-2xl font-extrabold">Cypher Digital vs. In-House vs. Freelancer</h3>
              </div>
              <div className="overflow-x-auto bg-card border border-border rounded-2xl">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary">
                      <th className="text-left p-4 font-semibold">Factor</th>
                      <th className="text-left p-4 font-semibold text-[hsl(25,95%,53%)]">Cypher Digital</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground">In-House Hire</th>
                      <th className="text-left p-4 font-semibold text-muted-foreground">Freelancer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Monthly Cost", "Custom Quote — Chat with Us", "LKR 80K–150K + benefits", "LKR 20K–60K (variable)"],
                      ["Strategy & Planning", "✓ Full strategy included", "Depends on experience", "✗ Rarely included"],
                      ["Content Design", "✓ Dedicated design team", "One person (limited)", "Basic, inconsistent"],
                      ["Video / Reels Production", "✓ Included in packages", "Extra cost / skill gap", "✗ Usually extra"],
                      ["Paid Ads Management", "✓ Meta & TikTok certified", "Training required", "Hit or miss"],
                      ["Reporting & Analytics", "✓ Monthly detailed report", "Manual, time-consuming", "✗ Rarely provided"],
                      ["Contract Flexibility", "✓ Month-to-month", "Permanent employee", "Per project / variable"],
                      ["Sick Days / Leave Cover", "✓ Team always available", "✗ Pages go silent", "✗ No cover"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="p-4 font-medium">{row[0]}</td>
                        <td className="p-4 text-primary font-semibold">{row[1]}</td>
                        <td className="p-4 text-muted-foreground">{row[2]}</td>
                        <td className="p-4 text-muted-foreground">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-8">
                <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold rounded-xl h-12 px-8 border-none">
                  <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20compare%20Cypher%20Digital%20packages%20for%20my%20business" target="_blank" rel="noopener noreferrer">Find the Right Plan for My Business →</a>
                </Button>
              </div>
            </div>

            {/* Flexible points */}
            <div className="mt-16 grid sm:grid-cols-2 gap-4">
              {flexiblePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Locations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-lg font-bold mb-4">Social Media Marketing Services Across Sri Lanka</h2>
            <p className="text-xs text-muted-foreground mb-6">We help businesses grow their social media presence in <strong>Colombo</strong>, <strong>Negombo</strong>, <strong>Kandy</strong>, <strong>Galle</strong>, <strong>Dehiwala</strong>, <strong>Maharagama</strong>, <strong>Jaffna</strong>, <strong>Kurunegala</strong>, <strong>Matara</strong>, and across all of Sri Lanka.</p>
          </div>
        </div>
      </section>

      {/* Advertising Guide Link */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Looking for comprehensive data on{" "}
            <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</Link>?
            {" "}Our complete guide covers market statistics, advertising costs, best platforms, targeting strategies, and industry-specific insights for Sri Lankan businesses.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
            Social conversations now extend into AI chat — run a free <Link to="/ai-visibility-sri-lanka" className="text-primary font-semibold hover:underline">AI Visibility Check in Sri Lanka</Link> to see how often ChatGPT, Gemini, Claude and Perplexity recommend your brand.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
            Building a bigger campaign? Pair social media with{" "}
            <Link to="/media-buying-agencies-sri-lanka" className="text-primary font-semibold hover:underline">media buying in Sri Lanka</Link>,{" "}
            <Link to="/tv-advertising-sri-lanka" className="text-primary font-semibold hover:underline">TV advertising</Link>,{" "}
            <Link to="/radio-advertising-sri-lanka" className="text-primary font-semibold hover:underline">radio advertising</Link> and{" "}
            <Link to="/newspaper-advertising-sri-lanka" className="text-primary font-semibold hover:underline">newspaper advertising</Link>.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Explore More</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Other Digital Marketing Services in Sri Lanka</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.slice(0, 3).map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all group"
              >
                <h3 className="font-heading text-sm font-bold mb-2 group-hover:text-primary transition-colors">{s.keyword}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(25,95%,53%)]/40 bg-[hsl(25,95%,53%)]/10 text-[hsl(25,95%,53%)] text-[10px] font-bold mb-4 uppercase tracking-widest">
                ⚡ Limited Slots This Month
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">Ready to Dominate <span className="text-[hsl(25,95%,53%)]">Social Media in Sri Lanka?</span></h2>
              <p className="text-white/55 mb-6 max-w-xl text-sm leading-relaxed">
                Join 30+ Sri Lankan businesses growing their brand and generating leads through expert <strong className="text-white/80">Social Media Management Sri Lanka</strong> services. Your first 30-minute strategy call is completely free — no sales pitch, just an honest look at what's possible for your brand.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-white/70">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[hsl(25,95%,53%)]" /> Free brand audit + strategy call</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[hsl(25,95%,53%)]" /> First posts live in 3–5 business days</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[hsl(25,95%,53%)]" /> No long-term contracts — month-to-month</li>
              </ul>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Social Media Marketing Sri Lanka – Cypher Digital" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Don't be shy — say hi! We'd love to hear about your goals.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold rounded-xl h-11 px-6 border-none">
                      <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20social%20media%20marketing" target="_blank" rel="noopener noreferrer">Book Free Strategy Call</a>
                    </Button>
                    <Button asChild className="border border-white/20 bg-transparent rounded-xl h-11 px-6 hover:bg-white/5" style={{ color: "white" }}>
                      <a href="https://wa.me/94701772626" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/40">📍 Colombo, Sri Lanka &nbsp;|&nbsp; 📞 +94 70 177 2626 &nbsp;|&nbsp; No contracts. No fluff. Just results.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out to you on WhatsApp.</p>
              <InquiryForm service="social media management" />
            </div>
          </div>
        </div>
      </section>
      <RelatedPosts
        keywords={["Social Media Management Sri Lanka", "Instagram Marketing Sri Lanka", "Sinhala Social Media Sri Lanka", "Organic vs Paid Social Sri Lanka"]}
        heading="More on Social Media Marketing"
        intro="Platform strategies, posting schedules, and content tactics for Sri Lankan brands on Facebook, Instagram and TikTok."
      />
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Related reading</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-6">Deepen your social media strategy</h2>
          <ul className="space-y-3 text-sm">
            <li>Read <Link to="/blog/social-media-agency-colombo" className="text-primary font-semibold hover:underline">how to choose a social media agency in Colombo</Link>.</li>
            <li>Explore <Link to="/blog/linkedin-marketing-sri-lanka-2026" className="text-primary font-semibold hover:underline">LinkedIn marketing for Sri Lankan businesses</Link>.</li>
            <li>Plan <Link to="/blog/avurudu-marketing-ideas-sri-lanka" className="text-primary font-semibold hover:underline">Avurudu campaign ideas for social media</Link>.</li>
            <li>Browse our <Link to="/blog/instagram-marketing-sri-lanka" className="text-primary font-semibold hover:underline">Instagram marketing packages</Link>.</li>
            <li>View our full <Link to="/blog/social-media-marketing-packages" className="text-primary font-semibold hover:underline">social media marketing packages and pricing</Link>.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;