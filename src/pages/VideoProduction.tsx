import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import RelatedPosts from "@/components/RelatedPosts";
import AIVisibilityHighlightCard from "@/components/AIVisibilityHighlightCard";
import { useEffect } from "react";
import {
  Video, CheckCircle, BarChart3, Users, TrendingUp, Zap, Shield, Clock,
  Smartphone, Eye, Globe, Layers, MousePointerClick, Brain,
  MapPin, Megaphone, DollarSign,
  ArrowRight, PieChart, Target, Play, Film, Camera, Clapperboard,
  Sparkles, Monitor, Volume2, Scissors, Heart
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { value: "100+", label: "Videos Produced" },
  { value: "3x", label: "More Engagement" },
  { value: "48hr", label: "Fast Delivery" },
  { value: "4K", label: "Quality Output" },
];

const features = [
  "Promotional brand videos for social media",
  "Instagram Reels & TikTok short-form videos",
  "Brand story & company profile videos",
  "Ad creative videos for Facebook & Google campaigns",
  "Product showcase & demo videos",
  "Customer testimonial & review videos",
  "Event coverage & highlight reels",
  "Professional editing, color grading & motion graphics",
  "Scriptwriting & storyboarding",
  "Drone footage & aerial videography",
];

const benefits = [
  "Video content gets 3x more engagement than static image posts across all platforms",
  "Boost ad performance by 20–40% with professional video creatives",
  "Build trust and authenticity with real brand storytelling",
  "Stand out from competitors with high-quality, cinematic production",
  "Repurpose one video shoot into 10+ pieces of content across channels",
  "Increase website conversion rates with embedded product videos",
];

const processSteps = [
  { title: "Planning & Script", desc: "We develop creative concepts, scripts, and storyboards aligned with your brand goals and target audience." },
  { title: "Production", desc: "Professional filming with high-end cameras, lighting, and audio equipment at your location or our studio." },
  { title: "Post-Production", desc: "Expert editing, color grading, motion graphics, sound design, and subtitle integration." },
  { title: "Delivery & Optimize", desc: "Multiple formats optimized for each platform — feed, stories, ads, YouTube — ready to publish." },
];

const flexiblePoints = [
  "Per-video pricing with no minimum order",
  "Bundle deals for monthly video content packages",
  "Quick-turnaround reels starting from LKR 15,000",
  "Flexible shoot schedules — weekdays or weekends",
  "Reuse footage for multiple formats at no extra cost",
  "Free creative consultation before every project",
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible per-video or monthly packages with no commitments." },
  { icon: <Clock className="w-5 h-5" />, title: "48hr Turnaround", desc: "Simple social media videos delivered within 48–72 hours." },
  { icon: <DollarSign className="w-5 h-5" />, title: "From LKR 15,000", desc: "Professional video production accessible to every business." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Team", desc: "A creative team assigned to your project from concept to delivery." },
];

const faqs = [
  { q: "What is video production?", a: "Video production is the complete process of creating video content — from planning and scripting to filming, editing, and delivering the final product. It encompasses all creative and technical aspects needed to produce engaging visual content for marketing, advertising, social media, and brand communication." },
  { q: "What types of videos do you produce?", a: "We produce promotional videos, social media reels (Instagram, TikTok, YouTube Shorts), brand story videos, product demos, testimonial videos, event coverage, ad creatives for Facebook and Google campaigns, corporate videos, and aerial drone footage. Each video is customized for your specific goals and platform." },
  { q: "How long does a video project take?", a: "Simple social media videos and reels can be delivered within 48–72 hours. Larger productions like brand videos, commercials, or corporate profiles typically take 1–2 weeks from concept to final delivery, depending on complexity." },
  { q: "Do you handle filming or just editing?", a: "We offer both! We handle the complete process from concept development and scripting to professional filming and post-production editing. We can also work with footage you provide. Our team uses professional cameras, lighting, and audio equipment for cinematic quality." },
  { q: "What formats do you deliver?", a: "We deliver videos in multiple formats optimized for each platform — square (1:1) for Instagram feed, vertical (9:16) for Reels/Stories/TikTok, landscape (16:9) for YouTube/Facebook, and any custom ratio you need. All files are delivered in high resolution." },
  { q: "Can you create videos for my ad campaigns?", a: "Absolutely! Ad creative videos are one of our specialties. We create thumb-stopping video ads designed specifically for Facebook, Instagram, YouTube, and Google ad campaigns with proven formats that drive clicks and conversions." },
  { q: "Is video production affordable for small businesses?", a: "Yes! We offer flexible per-video pricing and bundle packages designed for Sri Lankan small businesses. Quick-turnaround reels start from just LKR 15,000. You don't need a massive budget to get professional, scroll-stopping video content." },
  { q: "Why is video important for digital marketing?", a: "Video generates 3x more engagement than static images, increases conversion rates by up to 80%, and is prioritized by social media algorithms. It's the most consumed content format online and essential for building brand trust, driving sales, and staying competitive in digital marketing." },
  { q: "Do you provide scriptwriting and storyboarding?", a: "Yes, we offer complete pre-production services including creative concept development, scriptwriting, storyboarding, and shot planning. This ensures every video has a clear narrative, strong messaging, and professional structure before filming begins." },
  { q: "What is the difference between traditional and digital-first video production?", a: "Traditional production focuses on TV commercials and large-scale shoots with big budgets. Digital-first production focuses on platform-optimized content — short-form videos, social media reels, and ad creatives designed for mobile viewing and online engagement. Digital-first is faster, more affordable, and scalable." },
  { q: "Can video production increase my sales?", a: "Yes — significantly. Professional video content increases engagement, builds trust, and drives conversions across all marketing channels. Product videos can increase purchase intent by up to 85%, and video ads consistently outperform static image ads in click-through and conversion rates." },
  { q: "What is the best video production company in Sri Lanka?", a: "Cypher Digital is a leading video production company in Sri Lanka specializing in digital-first, high-performance video content designed for social media, advertising, and online growth. We deliver cinematic quality at accessible prices with fast turnaround for businesses of all sizes." },
];

const allServices = [
  { name: "Social Media Marketing", path: "/social-media-management-sri-lanka", keyword: "Social Media Marketing Sri Lanka", desc: "Professional social media management including content creation and community engagement." },
  { name: "Facebook Ads", path: "/facebook-ads-sri-lanka", keyword: "Facebook Ads Sri Lanka", desc: "Facebook & Instagram advertising to reach targeted audiences and generate leads." },
  { name: "Google Ads", path: "/google-ads-sri-lanka", keyword: "Google Ads Sri Lanka", desc: "Google Search, Display & YouTube advertising to capture high-intent customers." },
  { name: "SEO", path: "/seo-services-sri-lanka", keyword: "SEO Services Sri Lanka", desc: "On-page and off-page search engine optimization to rank higher on Google." },
  { name: "Graphic Design", path: "/graphic-design-sri-lanka", keyword: "Graphic Design Sri Lanka", desc: "Professional graphic design for branding, social media, and marketing materials." },
  { name: "TikTok Marketing", path: "/tiktok-marketing-sri-lanka", keyword: "TikTok Marketing Sri Lanka", desc: "Viral TikTok campaigns, content creation, and ads for Sri Lankan businesses." },
];

const tocItems = [
  { id: "what-is", label: "What is Video Production?" },
  { id: "why-important", label: "Why It's Essential" },
  { id: "video-services", label: "Our Video Services" },
  { id: "whats-included", label: "What's Included" },
  { id: "process", label: "Our Process" },
  { id: "digital-first", label: "Digital-First Production" },
  { id: "platforms", label: "Platforms We Optimize For" },
  { id: "industry-video", label: "Industry-Specific Video" },
  { id: "video-funnel", label: "Video Marketing Funnel" },
  { id: "trends", label: "Video Trends 2026" },
  { id: "pricing", label: "Pricing & Packages" },
  { id: "faqs", label: "FAQs" },
];

const VideoProduction = () => {
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
      name: "Video Production Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "Video Production",
      description: "Professional video production services in Sri Lanka including social media videos, ad creatives, brand stories, product demos, event coverage, and drone footage for businesses across all industries.",
      url: "https://cypherdigital.lk/video-production-sri-lanka",
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
        { "@type": "ListItem", position: 2, name: "Video Production Sri Lanka", item: "https://cypherdigital.lk/video-production-sri-lanka" },
      ],
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Video Production Sri Lanka | Professional Video Content | Cypher Digital",
      description: "Professional video production services in Sri Lanka. Social media videos, reels, ad creatives & brand content from LKR 15,000. 48hr turnaround.",
      url: "https://cypherdigital.lk/video-production-sri-lanka",
      dateModified: "2026-03-19",
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    });

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Video Production Sri Lanka (2026) | Social Media Videos from LKR 15,000 | Cypher Digital"
        description="Professional video production in Sri Lanka. Social media videos, Instagram Reels, ad creatives, brand stories & product demos from LKR 15,000. 48hr turnaround. Digital-first video by Cypher Digital."
        canonical="https://cypherdigital.lk/video-production-sri-lanka"
      />

      {/* Breadcrumb */}
      <nav className="bg-secondary border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Video Production Sri Lanka</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Video className="w-7 h-7" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Digital-First Video Content</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Video Production Sri Lanka – Digital-First Video Content That Drives Results
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Video production in Sri Lanka has evolved beyond traditional TV commercials. At <strong className="text-white/80">Cypher Digital</strong>, we specialize in <strong className="text-white/80">digital-first video production in Sri Lanka</strong>, creating high-impact, platform-optimized video content that increases engagement, drives conversions, and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20Video%20Production" target="_blank" rel="noopener noreferrer">
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
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">What is Video Production?</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Video production</strong> is the complete process of creating video content — from initial concept development and scripting through filming, editing, and final delivery. In Sri Lanka's digital-first marketing landscape, video production has evolved from expensive TV commercials to fast, affordable, platform-optimized content designed for social media, digital advertising, and online engagement. It encompasses promotional videos, social media reels, brand stories, product demos, testimonial videos, ad creatives, and more — each tailored to specific platforms and marketing objectives.
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Why Video Production is Essential for Businesses in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Video content dominates digital platforms worldwide, and Sri Lanka is no exception. With millions of active social media users, video has become the most powerful form of communication in modern marketing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, title: "3x Higher Engagement", desc: "Video content generates three times more engagement than static images across all social media platforms." },
                { icon: <Target className="w-5 h-5" />, title: "Higher Conversions", desc: "Product videos increase purchase intent by up to 85% and landing page conversion rates by up to 80%." },
                { icon: <Heart className="w-5 h-5" />, title: "Brand Trust & Authenticity", desc: "Video storytelling builds emotional connections and trust with audiences far better than text or images alone." },
                { icon: <Eye className="w-5 h-5" />, title: "Algorithm Priority", desc: "Social media platforms actively prioritize video content in feeds, giving your brand greater organic reach." },
                { icon: <Sparkles className="w-5 h-5" />, title: "Content Multiplier", desc: "One video shoot can be repurposed into 10+ pieces of content — reels, stories, ads, clips, and thumbnails." },
                { icon: <Globe className="w-5 h-5" />, title: "Competitive Advantage", desc: "Most Sri Lankan businesses still rely on static content. Video gives you an instant edge over competitors." },
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

      {/* Video Services */}
      <section id="video-services" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Video Production Services We Offer in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">From quick social media reels to cinematic brand videos — we cover every type of video content your business needs.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: <Smartphone className="w-5 h-5" />, title: "Social Media Videos", desc: "Instagram Reels, TikTok, YouTube Shorts, and Facebook videos optimized for maximum engagement and reach." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Ad Creative Videos", desc: "Thumb-stopping video ads for Facebook, Instagram, YouTube, and Google campaigns designed to drive conversions." },
                { icon: <Film className="w-5 h-5" />, title: "Brand Story Videos", desc: "Compelling brand narratives that communicate your mission, values, and unique selling points through visual storytelling." },
                { icon: <Layers className="w-5 h-5" />, title: "Product Demo Videos", desc: "Showcase your products in action — features, benefits, and use cases that drive purchase decisions." },
                { icon: <Users className="w-5 h-5" />, title: "Testimonial Videos", desc: "Real customer stories and reviews that build social proof and trust with potential buyers." },
                { icon: <Camera className="w-5 h-5" />, title: "Event & Drone Coverage", desc: "Professional event filming, highlight reels, and aerial drone footage for stunning perspectives." },
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What's Included in Our Video Production Packages</h2>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Benefits of Professional Video Production for Your Business</h2>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">The Video Production Process at Cypher Digital</h2>
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

      {/* Digital-First Production */}
      <section id="digital-first" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Why Digital-First Video Production is the Future</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Traditional TV production is expensive, slow, and often overkill for modern marketing. Digital-first production is built for the way audiences consume content today.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Monitor className="w-5 h-5 text-primary" /> Traditional Production</h3>
                <ul className="space-y-2">
                  {["Large crews & expensive equipment", "Weeks of planning & production", "High budgets (LKR 500K+)", "Optimized for TV/cinema", "One output format"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-destructive mt-0.5 shrink-0">✕</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5 text-primary" /> Digital-First Production</h3>
                <ul className="space-y-2">
                  {["Lean, efficient production teams", "Fast turnaround (48hr–1 week)", "Accessible budgets (from LKR 15K)", "Optimized for mobile & social", "Multiple formats per shoot"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              👉 <strong className="text-foreground">Best approach:</strong> Focus on digital-first video content for social media and ads, then scale to larger productions as your brand grows. This is how smart Sri Lankan businesses maximize ROI on video marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Platforms We Optimize Video Content For</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Each platform has unique specifications, audience behaviors, and content preferences. We optimize every video for maximum performance on its target platform.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "📱", title: "Instagram", specs: "Reels (9:16), Feed (1:1, 4:5), Stories (9:16)", desc: "Short-form vertical content optimized for discovery and engagement." },
                { icon: "🎵", title: "TikTok", specs: "Vertical (9:16), 15s–3min", desc: "Trend-driven, authentic content designed for viral reach." },
                { icon: "▶️", title: "YouTube", specs: "Landscape (16:9), Shorts (9:16)", desc: "Long-form and Shorts content for search-driven discovery." },
                { icon: "📘", title: "Facebook", specs: "Feed (1:1, 16:9), Stories (9:16)", desc: "Engagement-focused video for community building and paid ads." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-[10px] text-primary font-medium mb-2">{item.specs}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Video */}
      <section id="industry-video" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Video Production for Different Industries in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Every industry needs tailored video content. Here's how we create video strategies for different business types in Sri Lanka.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: "🛒", title: "Ecommerce & Retail", desc: "Product showcase videos, unboxing videos, and shoppable ad creatives that drive online sales.", link: "/ecommerce-digital-marketing-sri-lanka" },
                { icon: "🏨", title: "Hotels & Tourism", desc: "Property tours, destination videos, drone footage, and promotional content for booking conversions.", link: "/hotel-digital-marketing-sri-lanka" },
                { icon: "🍽️", title: "Restaurants & Cafés", desc: "Food videos, recipe content, atmosphere shots, and mouth-watering ad creatives.", link: "/restaurant-digital-marketing-sri-lanka" },
                { icon: "🏠", title: "Real Estate", desc: "Property walkthrough videos, aerial drone tours, and virtual viewing content.", link: "/real-estate-digital-marketing-sri-lanka" },
                { icon: "🎓", title: "Education", desc: "Campus tours, student testimonials, course previews, and enrollment campaign videos.", link: "/education-marketing-agency-sri-lanka" },
                { icon: "💇", title: "Beauty & Fashion", desc: "Transformation videos, product demos, behind-the-scenes content, and influencer-style reels.", link: "/beauty-salon-digital-marketing-sri-lanka" },
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

      {/* Video Marketing Funnel */}
      <section id="video-funnel" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Video Marketing Funnel Strategy</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Different types of video content serve different stages of the customer journey. A full-funnel approach maximizes your marketing ROI.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stage: "Top Funnel", label: "Awareness", color: "bg-blue-500/10 text-blue-600", items: ["Short-form social reels", "Behind-the-scenes content", "Educational/tips videos", "Brand introduction videos"] },
                { stage: "Mid Funnel", label: "Consideration", color: "bg-amber-500/10 text-amber-600", items: ["Product demo videos", "Customer testimonials", "Brand story videos", "How-it-works explainers"] },
                { stage: "Bottom Funnel", label: "Conversion", color: "bg-green-500/10 text-green-600", items: ["Ad creative videos", "Promotional offers", "Retargeting video ads", "Limited-time deal videos"] },
              ].map((funnel, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${funnel.color}`}>{funnel.stage}</div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-3">{funnel.label}</h3>
                  <ul className="space-y-2">
                    {funnel.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              👉 <strong className="text-foreground">Result:</strong> Full funnel coverage ensures you reach customers at every stage — from discovery to purchase — maximizing your video marketing investment.
            </p>
          </div>
        </div>
      </section>

      {/* Video Content Types That Work */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Video Content Formats That Perform Best in Sri Lanka</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Short-Form Reels", desc: "15–60 second vertical videos designed for maximum reach and engagement on Instagram, TikTok, and YouTube Shorts." },
                { title: "Behind-The-Scenes", desc: "Authentic, raw content showing your team, process, and culture — builds trust and humanizes your brand." },
                { title: "Product Demonstrations", desc: "Show your products in action — features, benefits, and real-world use cases that drive purchase decisions." },
                { title: "Customer Testimonials", desc: "Real customers sharing their experience with your brand — the most powerful social proof format." },
                { title: "Educational Content", desc: "Tips, tutorials, and how-to videos that position your brand as an industry expert and thought leader." },
                { title: "Promotional Ads", desc: "Conversion-focused video ads with strong hooks, clear messaging, and compelling calls to action." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trends */}
      <section id="trends" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Video Production Trends in Sri Lanka 2026</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Smartphone className="w-5 h-5" />, title: "Vertical-First Video", desc: "With mobile dominating consumption, vertical (9:16) video is now the default format for social media content." },
                { icon: <Scissors className="w-5 h-5" />, title: "Ultra-Short Content", desc: "Videos under 30 seconds are outperforming longer content in reach and engagement across all platforms." },
                { icon: <Brain className="w-5 h-5" />, title: "AI-Powered Editing", desc: "AI tools are accelerating post-production — auto-captions, smart cuts, and enhanced color grading at lower costs." },
                { icon: <Users className="w-5 h-5" />, title: "Creator-Style Content", desc: "Authentic, influencer-style videos are outperforming polished corporate content in engagement and conversions." },
                { icon: <Play className="w-5 h-5" />, title: "Interactive & Shoppable Video", desc: "Videos with clickable elements, product tags, and direct purchase links are bridging content and commerce." },
                { icon: <Volume2 className="w-5 h-5" />, title: "Sound Design & ASMR", desc: "Strategic audio design — from trending sounds to satisfying ASMR elements — is becoming a key engagement driver." },
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

      {/* Common Mistakes */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Common Video Marketing Mistakes Businesses Make</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { mistake: "Videos too long for social media", fix: "Keep social videos under 60 seconds — shorter content gets more views and shares." },
                { mistake: "Poor audio quality", fix: "Audio quality matters more than video quality — invest in proper microphones and sound design." },
                { mistake: "No clear strategy or goal", fix: "Every video should have a specific objective — awareness, engagement, or conversion." },
                { mistake: "Ignoring platform specifications", fix: "Each platform has different optimal formats, durations, and aspect ratios — optimize accordingly." },
                { mistake: "Weak opening hook", fix: "You have 3 seconds to grab attention — start with a strong visual or statement hook." },
                { mistake: "No call to action", fix: "Every video should tell viewers what to do next — visit, buy, follow, or contact." },
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

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Flexible & Cost-Effective Video Production</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              High-quality video production doesn't have to cost a fortune. We offer flexible video packages for businesses of every size in Sri Lanka — from a single reel to a monthly content plan.
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

      {/* AI-Optimized Section */}
      <section className="py-14 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">What is the Best Video Production Company in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Cypher Digital</strong> is a leading video production company in Sri Lanka, specializing in digital-first, high-performance video content designed for social media, advertising, and online growth. We deliver cinematic quality at accessible prices — with social media reels starting from just LKR 15,000 — making professional video production available to businesses of all sizes across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Target Locations */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Video Production Services Across Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">We serve businesses across all major cities and regions in Sri Lanka with professional video production.</p>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions About Video Production in Sri Lanka</h2>
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
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Get a Free Video Production Quote</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ready to create scroll-stopping video content that grows your business? Tell us about your project and we'll send you a custom quote within 24 hours.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <img src={mascotGlasses} alt="Cypher Digital mascot" className="w-16 h-16 rounded-full border-2 border-primary/20 object-cover" />
                  <div>
                    <p className="text-sm font-bold text-foreground">Ready to go viral? 🎬</p>
                    <p className="text-xs text-muted-foreground">Drop us a message — let's create something awesome!</p>
                  </div>
                </div>
              </div>
              <InquiryForm service="Video Production" />
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
      <OurWorkSection service="video production" />
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">Complete Guide to Advertising in Sri Lanka</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            Video production is one part of a comprehensive advertising strategy. Read our complete guide to learn how all digital marketing channels work together.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl">
            <Link to="/advertising-in-sri-lanka">Read the Full Advertising Guide <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
          <p className="text-xs text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            Distribute your videos through{" "}
            <Link to="/media-buying-agencies-sri-lanka" className="text-primary hover:underline font-semibold">media buying agencies in Sri Lanka</Link>,{" "}
            <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline font-semibold">TV advertising</Link>,{" "}
            <Link to="/radio-advertising-sri-lanka" className="text-primary hover:underline font-semibold">radio advertising</Link> and{" "}
            <Link to="/newspaper-advertising-sri-lanka" className="text-primary hover:underline font-semibold">newspaper advertising</Link>.
          </p>
          <p className="text-xs text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Once your TVC is ready, the next step is <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline font-semibold">TV advertising in Sri Lanka</Link> — learn how to plan and buy airtime on Hiru TV, Sirasa and Derana.
          </p>
        </div>
      </section>
      <RelatedPosts
        keywords={["Video Production Sri Lanka", "Motion Graphics Sri Lanka", "YouTube Ads Sri Lanka"]}
        heading="More on Video & Motion"
        intro="Strategy, formats, and production guides for video content that converts."
      />
    </div>
  );
};

export default VideoProduction;
