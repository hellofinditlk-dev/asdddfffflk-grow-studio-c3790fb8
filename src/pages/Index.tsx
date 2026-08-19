import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Megaphone, Target, Video, Search,
  BarChart3, Users, Lightbulb, Rocket, FileText, TrendingUp,
  Phone, ArrowUpRight, Palette, Globe, Eye, MousePointerClick,
  MapPin, ShoppingBag, GraduationCap, Building2, Sparkles, Zap, Star,
  Play, ChevronRight
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import SEOHead from "@/components/SEOHead";
import OurWorkSection from "@/components/OurWorkSection";
import AIVisibilityHighlightCard from "@/components/AIVisibilityHighlightCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import mascotDefault from "@/assets/mascot-default.jpeg";
import mascotSocial from "@/assets/mascot-social.jpeg";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import mascotHeadset from "@/assets/mascot-headset.jpeg";

const services = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Social Media Marketing",
    desc: "Complete Facebook and Instagram page management to build a strong online presence.",
    items: ["Content planning", "Creative post design", "Post scheduling", "Inbox management", "Monthly reports"],
    link: "/social-media-management-sri-lanka",
    gradient: "from-[hsl(252,65%,55%)] to-[hsl(280,80%,65%)]",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Facebook Advertising",
    desc: "Run high-performing Facebook campaigns to generate leads and sales.",
    items: ["Lead generation campaigns", "Awareness campaigns", "Remarketing campaigns", "Conversion campaigns", "Advanced audience targeting"],
    link: "/facebook-ads-sri-lanka",
    gradient: "from-[hsl(220,80%,55%)] to-[hsl(200,90%,55%)]",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Google Ads",
    desc: "Capture customers actively searching for your services.",
    items: ["Google Search Ads", "Display Ads", "YouTube Ads", "Keyword research", "Conversion tracking"],
    link: "/google-ads-sri-lanka",
    gradient: "from-[hsl(150,60%,45%)] to-[hsl(170,70%,50%)]",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "SEO Services",
    desc: "Boost your Google rankings with on-page and off-page SEO strategies.",
    items: ["On-page SEO", "Off-page SEO", "Technical SEO", "Local SEO", "Keyword research"],
    link: "/seo-services-sri-lanka",
    gradient: "from-[hsl(30,90%,55%)] to-[hsl(45,95%,55%)]",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Graphic Design",
    desc: "Professional logo, social media, and print design starting from LKR 6,000.",
    items: ["Logo design", "Social media graphics", "Flyers & brochures", "Packaging", "Brand identity"],
    link: "/graphic-design-sri-lanka",
    gradient: "from-[hsl(340,80%,55%)] to-[hsl(320,70%,60%)]",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Video Production",
    desc: "Professional video content that increases engagement and ad performance.",
    items: ["Promo videos", "Reels & short videos", "Brand videos", "Ad creatives", "Product videos"],
    link: "/video-production-sri-lanka",
    gradient: "from-[hsl(270,70%,55%)] to-[hsl(252,65%,55%)]",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "TikTok Marketing",
    desc: "Viral TikTok campaigns and ads to reach younger audiences in Sri Lanka.",
    items: ["TikTok Ads", "Content creation", "Influencer campaigns", "Viral strategies", "Analytics"],
    link: "/tiktok-marketing-sri-lanka",
    gradient: "from-[hsl(350,80%,55%)] to-[hsl(330,75%,60%)]",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Instagram Marketing",
    desc: "Grow your Instagram following with Reels, Stories and shoppable content.",
    items: ["Reels strategy", "Story design", "Instagram Ads", "Hashtag research", "Engagement growth"],
    link: "/instagram-marketing-sri-lanka",
    gradient: "from-[hsl(320,80%,60%)] to-[hsl(20,90%,55%)]",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "LinkedIn Marketing",
    desc: "B2B lead generation and brand authority campaigns for Sri Lankan companies.",
    items: ["Lead Gen Forms", "Sponsored content", "InMail campaigns", "Audience targeting", "Conversion tracking"],
    link: "/linkedin-advertising-sri-lanka",
    gradient: "from-[hsl(210,80%,45%)] to-[hsl(200,85%,55%)]",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Influencer Marketing",
    desc: "Partner with Sri Lankan influencers to amplify reach and drive conversions.",
    items: ["Influencer sourcing", "Campaign management", "Content briefs", "Performance tracking", "ROI reporting"],
    link: "/influencer-marketing-sri-lanka",
    gradient: "from-[hsl(280,75%,60%)] to-[hsl(252,65%,55%)]",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "AI Visibility",
    desc: "Get your business found on ChatGPT, Gemini & Perplexity in Sri Lanka.",
    items: ["AI Visibility Audit", "Answer Engine Optimisation", "Brand authority building", "Schema & structured data", "Monthly AI visibility score"],
    link: "/ai-visibility-sri-lanka",
    gradient: "from-[hsl(180,80%,45%)] to-[hsl(220,80%,55%)]",
  },
];

const whyUs = [
  { icon: <Lightbulb className="w-5 h-5" />, text: "Strategy-first campaigns", detail: "Data-backed strategies tailored to your market" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Lead generation focused", detail: "Every campaign optimized for real business results" },
  { icon: <BarChart3 className="w-5 h-5" />, text: "Multi-channel marketing", detail: "Reach customers across all digital platforms" },
  { icon: <Users className="w-5 h-5" />, text: "Creative content team", detail: "In-house designers, writers & video editors" },
  { icon: <FileText className="w-5 h-5" />, text: "Transparent reporting", detail: "Clear monthly reports with actionable insights" },
  { icon: <Rocket className="w-5 h-5" />, text: "Affordable packages", detail: "Enterprise-quality at SME-friendly pricing" },
];

const process = [
  { step: "01", title: "Strategy & Planning", desc: "We analyze your business, competitors, and target audience.", icon: <Lightbulb className="w-5 h-5" /> },
  { step: "02", title: "Content Creation", desc: "Our creative team designs engaging content for your brand.", icon: <Palette className="w-5 h-5" /> },
  { step: "03", title: "Campaign Launch", desc: "We launch targeted campaigns across selected platforms.", icon: <Rocket className="w-5 h-5" /> },
  { step: "04", title: "Optimization", desc: "Continuous optimization to maximize ROI and results.", icon: <TrendingUp className="w-5 h-5" /> },
  { step: "05", title: "Reporting", desc: "Transparent monthly reports with actionable insights.", icon: <BarChart3 className="w-5 h-5" /> },
];

const stats = [
  { value: "15,000+", label: "Leads Generated", tone: "neutral" as const },
  { value: "2,000+", label: "Campaigns Run", tone: "purple" as const },
  { value: "5.0★", label: "Client Rating", tone: "neutral" as const },
  { value: "+340%", label: "Avg Campaign ROI", tone: "orange" as const },
];

const trustedLogos = ["Facebook", "Google", "TikTok", "Instagram", "YouTube", "LinkedIn"];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cypher Digital",
  description: "Digital marketing agency in Sri Lanka offering social media management, Facebook Ads, Google Ads, SEO and video production for businesses in Colombo and across Sri Lanka.",
  url: "https://cypherdigital.lk",
  telephone: "+94701772626",
  email: "hello@cypherdigital.lk",
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
  priceRange: "LKR 35,000 - 300,000",
  openingHours: "Mo-Fr 09:00-18:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/cypherdigitalsrilanka",
    "https://www.instagram.com/cypherdigital_sl/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Sri Lanka",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing Sri Lanka", url: "https://cypherdigital.lk/social-media-management-sri-lanka" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facebook Advertising Sri Lanka", url: "https://cypherdigital.lk/facebook-ads-sri-lanka" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Sri Lanka", url: "https://cypherdigital.lk/google-ads-sri-lanka" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services Sri Lanka", url: "https://cypherdigital.lk/seo-services-sri-lanka" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cypher Digital",
  url: "https://cypherdigital.lk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://cypherdigital.lk/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqs = [
  {
    q: "What does a digital marketing agency do?",
    a: "A digital marketing agency helps businesses grow online through services like social media management, Facebook & Google Ads, SEO, content marketing, video production and graphic design. At Cypher Digital, we focus on generating real leads and sales for Sri Lankan SMEs — not just likes and followers.",
  },
  {
    q: "How much does digital marketing cost in Sri Lanka?",
    a: "Digital marketing in Sri Lanka typically starts from around LKR 25,000 per month for basic social media management and goes up to LKR 200,000+ for full-service campaigns including paid ads, SEO and content. Cypher Digital offers flexible monthly packages built around your goals and budget — message us on WhatsApp for a custom quote.",
  },
  {
    q: "Which is the best digital marketing agency in Sri Lanka?",
    a: "Cypher Digital is one of the top-rated digital marketing agencies in Sri Lanka, trusted by SMEs across Colombo, Kandy, Galle and beyond. We specialise in Facebook Ads, Google Ads, SEO and social media management with a clear ROI-first approach — every campaign is tracked, reported and optimised for measurable results.",
  },
  {
    q: "How long does SEO take to show results in Sri Lanka?",
    a: "Most SEO campaigns in Sri Lanka start showing meaningful results in 3 to 6 months, with stronger rankings and steady organic traffic typically appearing between months 6 and 12. Local SEO for cities like Colombo, Negombo or Kandy can show faster wins within 60–90 days when paired with Google Business Profile optimisation.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes. Cypher Digital is built specifically for Sri Lankan small businesses, startups and SMEs. We offer affordable starter packages, transparent reporting and no long-term lock-in contracts, so you can grow your marketing as your business grows.",
  },
  {
    q: "What digital marketing services does Cypher Digital offer?",
    a: "We offer Social Media Marketing, Facebook Advertising, Google Ads, SEO Services, Graphic Design, Video Production, TikTok Marketing and Influencer Marketing — all tailored for the Sri Lankan market. You can also explore industry-specific solutions for hotels, real estate, restaurants, salons, schools and ecommerce brands.",
  },
  {
    q: "Do you serve businesses outside Colombo?",
    a: "Absolutely. We work with businesses across Sri Lanka including Colombo, Kandy, Galle, Negombo, Jaffna, Kurunegala, Matara, Anuradhapura, Ratnapura and Batticaloa. All our services are delivered remotely with WhatsApp-first communication, so location is never a barrier.",
  },
  {
    q: "How do I get started with Cypher Digital?",
    a: "Getting started is simple — message us on WhatsApp at +94 70 177 2626 or fill in our inquiry form. We'll schedule a free 30-minute consultation to understand your business, recommend the right services and share a custom proposal within 24 hours.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Index = () => (
  <div className="pt-16">
    <SEOHead
      title="Digital Marketing Agency Sri Lanka | Cypher Digital"
      description="Sri Lanka's top digital marketing agency. Facebook Ads, Google Ads, SEO & social media in Colombo. 15,000+ leads. Free consultation today."
      canonical="https://cypherdigital.lk"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    {/* HERO */}
    {/* HERO — Immersive Glass */}
    <section className="relative bg-[#030612] overflow-hidden py-20 lg:py-28">
      {/* Background glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[hsl(25,95%,53%)]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT — copy */}
          <div className="relative z-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(252_65%_55%/0.8)]" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Premier Digital Agency • Sri Lanka</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight text-white mb-8">
              Digital <br />
              <span className="text-primary">Marketing</span> <br />
              Agency <span className="text-white/70 font-bold text-4xl md:text-5xl lg:text-6xl">in Sri Lanka</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed mb-10">
              We empower brands across <span className="text-white font-semibold italic">Colombo</span> and beyond with high-performance <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline font-semibold">social media</Link>, <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline font-semibold">Facebook</Link> & <Link to="/google-ads-sri-lanka" className="text-primary hover:underline font-semibold">Google Ads</Link>, and <Link to="/seo-services-sri-lanka" className="text-primary hover:underline font-semibold">SEO</Link> strategies that turn clicks into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20get%20a%20free%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-5 bg-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,48%)] !text-white font-bold rounded-2xl transition-all overflow-hidden flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_hsl(25_95%_53%/0.4)] hover:shadow-[0_25px_50px_-12px_hsl(25_95%_53%/0.55)] active:scale-95"
              >
                <span className="relative z-10">Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md active:scale-95"
              >
                Book a Consultation
              </a>
            </div>

            {/* Trust markers */}
            <div className="mt-12">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-bold">We Advertise On</p>
              <div className="flex flex-wrap items-center gap-2.5">
                {trustedLogos.map((name) => (
                  <span key={name} className="text-xs font-semibold text-slate-400 border border-white/10 bg-white/[0.02] px-3 py-1.5 rounded-lg backdrop-blur-sm">{name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Mascot composition */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* Glass frame */}
              <div className="relative h-full w-full rounded-[3rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <img
                  src={mascotDefault}
                  alt="Cypher Digital mascot — Sri Lanka digital marketing agency"
                  className="w-full h-full object-cover"
                />

                {/* Floating Badge: Rating */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 md:p-5 rounded-3xl shadow-2xl flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                    <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Client Satisfaction</p>
                    <p className="text-xl md:text-2xl font-black text-white leading-tight">5.0 ★</p>
                  </div>
                </div>

                {/* Floating Badge: ROI */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 md:p-5 rounded-3xl shadow-2xl flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Performance</p>
                    <p className="text-xl md:text-2xl font-black text-white leading-tight">+340% <span className="text-emerald-400 text-sm">ROI</span></p>
                  </div>
                </div>
              </div>

              {/* Small detail mascot avatar */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-[6px] border-[#030612] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-2 ring-white/10">
                <img src={mascotGlasses} alt="Cypher Digital mascot avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* STATS — 4-up tinted glass cards */}
    <section className="relative bg-[#030612] pb-20 lg:pb-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {stats.map((s, i) => {
            const toneClasses =
              s.tone === "purple"
                ? "bg-primary/5 border-primary/20"
                : s.tone === "orange"
                  ? "bg-[hsl(25,95%,53%)]/5 border-[hsl(25,95%,53%)]/20"
                  : "bg-white/[0.02] border-white/5";
            const valueColor =
              s.tone === "purple"
                ? "text-primary"
                : s.tone === "orange"
                  ? "text-[hsl(25,95%,53%)]"
                  : "text-white";
            return (
              <div
                key={i}
                className={`p-6 md:p-8 rounded-[2rem] border backdrop-blur-sm animate-fade-up hover:-translate-y-1 transition-transform ${toneClasses}`}
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <h3 className={`font-heading text-3xl md:text-4xl font-extrabold mb-2 ${valueColor}`}>{s.value}</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <AIVisibilityHighlightCard />

    {/* ABOUT */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center max-w-4xl mx-auto">
          <div className="text-center lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
              Sri Lanka's Results-Driven Digital Marketing Agency
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Our digital marketing solutions are built to help businesses increase brand awareness, generate quality leads, and scale faster.
            </p>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
            <img src={mascotGlasses} alt="Cypher Digital mascot with glasses" className="relative w-48 h-48 rounded-2xl object-cover shadow-card-hover" />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground text-sm">
              Perfect for SMEs, salons, education institutes, real estate, healthcare, and service businesses in Sri Lanka.
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              Explore our comprehensive guide on{" "}
              <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</Link>
              {" "}for market data, costs, and strategies.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
            Digital Marketing Services for Sri Lankan Businesses
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">End-to-end digital solutions to grow your brand in Sri Lanka</p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
            We are one of the leading <Link to="/tv-advertising-sri-lanka" className="text-primary font-semibold hover:underline">TV advertising companies in Sri Lanka</Link> offering end-to-end TVC production and media planning.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.link}
              className="group relative rounded-2xl border border-border bg-card p-7 md:p-8 hover:border-primary/30 hover:shadow-[0_8px_30px_hsl(252_65%_55%/0.08)] transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              {/* Animated gradient line on top */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent" style={{ animation: 'shimmer 2s infinite' }} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-sm`}>
                    {s.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground group-hover:bg-primary/5 transition-colors duration-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>


    {/* WHY CHOOSE US */}
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
            Why Choose Our Digital Marketing Agency in Sri Lanka
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">We bring strategy, creativity, and results together</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((item, i) => (
            <div key={i} className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-[0_8px_30px_hsl(252_65%_55%/0.06)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-primary shrink-0 mb-4 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading text-sm font-bold mb-1.5">{item.text}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
            How Our Digital Marketing Agency in Sri Lanka Works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">From strategy to results in 5 clear steps</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <div key={i} className="text-center group relative">
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-primary/20 to-border" />
              )}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4 group-hover:from-primary group-hover:to-[hsl(280,80%,65%)] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_8px_24px_hsl(252_65%_55%/0.3)] transition-all duration-300 relative z-10">
                {p.icon}
              </div>
              <span className="text-[10px] font-bold text-primary/50 uppercase tracking-widest">Step {p.step}</span>
              <h3 className="font-heading text-sm font-bold mb-1.5 mt-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* OUR WORK */}
    <OurWorkSection />
    {/* WHAT IS DIGITAL MARKETING + SRI LANKA MARKET STATS */}
    {/* TRANSPARENT PRICING */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Digital Marketing Prices in Sri Lanka</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Transparent monthly packages. No hidden fees. No long-term lock-in.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Starter", price: "LKR 40,000", note: "/month",
              desc: "Perfect for small businesses starting out.",
              features: ["1 platform (FB or IG)", "12 posts per month", "Basic ad management", "Monthly report", "WhatsApp support"],
              featured: false,
            },
            {
              name: "Growth", price: "LKR 95,000", note: "/month",
              desc: "Our most popular package for growing SMEs.",
              features: ["FB + IG + TikTok", "20 posts + 8 reels", "Facebook & Google Ads", "Basic SEO included", "Bi-weekly reports", "Dedicated account manager"],
              featured: true,
            },
            {
              name: "Pro", price: "LKR 180,000", note: "/month",
              desc: "Full-service for serious scale-ups.",
              features: ["All platforms managed", "30+ posts + video content", "Multi-channel ads", "Full SEO + content", "Weekly reports", "Strategy calls every 2 weeks"],
              featured: false,
            },
          ].map((p, i) => (
            <div key={i} className={`relative rounded-2xl p-7 md:p-8 border-2 transition-all hover:-translate-y-1 ${p.featured ? "border-primary bg-primary/5 shadow-card-hover" : "border-border bg-card hover:border-primary/30"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="font-heading text-xl font-extrabold mb-2">{p.name}</h3>
              <p className="text-xs text-muted-foreground mb-5">{p.desc}</p>
              <div className="font-heading text-3xl font-extrabold text-primary mb-1">{p.price}<span className="text-sm font-medium text-muted-foreground">{p.note}</span></div>
              <p className="text-xs text-muted-foreground mb-6">Ad budget billed separately</p>
              <ul className="space-y-2 mb-7">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20custom%20quote" target="_blank" rel="noopener noreferrer" className="block text-center text-sm font-semibold py-3 rounded-xl bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] transition-colors">
                Get Custom Quote
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Need something custom? <a href="https://wa.me/94701772626" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Message us on WhatsApp</a> for a tailored quote.
        </p>
      </div>
    </section>
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">What is Digital Marketing</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-5">What is Digital Marketing in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Digital marketing in Sri Lanka means promoting your business through online channels — Facebook, Instagram, Google Search, YouTube, TikTok, and email — to reach customers in Colombo, Kandy, Galle, Negombo, Jaffna, and across the island.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike traditional advertising, digital marketing is <strong className="text-foreground font-semibold">measurable, targeted, and affordable</strong>. You see exactly how many people viewed your ad, clicked, messaged you, and bought — and you only pay to reach the right audience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Cypher Digital, we combine <Link to="/social-media-management-sri-lanka" className="text-primary font-semibold hover:underline">social media management</Link>, <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook Ads</Link>, <Link to="/google-ads-sri-lanka" className="text-primary font-semibold hover:underline">Google Ads</Link>, and <Link to="/seo-services-sri-lanka" className="text-primary font-semibold hover:underline">SEO</Link> into one strategy that drives real leads for Sri Lankan SMEs.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Sri Lanka Digital Landscape</p>
            {[
              { num: "10.9M", text: "internet users in Sri Lanka — over 50% of the population online" },
              { num: "8.5M", text: "active social media users, with Facebook and Instagram leading" },
              { num: "7.2M", text: "TikTok users in Sri Lanka — the fastest growing platform" },
              { num: "82%", text: "of Sri Lankan consumers research online before buying offline" },
              { num: "6.5h", text: "average daily time spent online by Sri Lankan adults" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 py-4 border-b border-border last:border-b-0">
                <div className="font-heading text-2xl font-extrabold text-primary min-w-[80px]">{s.num}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{s.text}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[11px] leading-relaxed text-white/30 max-w-4xl">
            Cypher Digital delivers <Link to="/social-media-management-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> campaigns, <Link to="/facebook-ads-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">facebook ads Sri Lanka</Link> management, <Link to="/google-ads-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">google ads Sri Lanka</Link> services, <Link to="/seo-services-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">SEO services Sri Lanka</Link>, <Link to="/tiktok-marketing-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">tiktok marketing Sri Lanka</Link>, <Link to="/instagram-marketing-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">instagram marketing Sri Lanka</Link>, <Link to="/linkedin-advertising-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">linkedin marketing Sri Lanka</Link>, <Link to="/video-production-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">video production Sri Lanka</Link>, <Link to="/graphic-design-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">graphic design Sri Lanka</Link>, <Link to="/influencer-marketing-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">influencer marketing Sri Lanka</Link>, <Link to="/media-buying-agencies-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">media buying agencies Sri Lanka</Link>, and a complete <Link to="/advertising-in-sri-lanka" className="text-white/40 hover:text-white/70 underline-offset-2 hover:underline">advertising in Sri Lanka</Link> guide for SMEs nationwide.
          </p>
        </div>
      </div>
    </section>

    {/* AGENCY VS FREELANCER COMPARISON */}
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Agency vs Freelancer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Digital Marketing Agency vs Freelancer in Sri Lanka</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Which is right for your business? Here's an honest side-by-side comparison.</p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-white">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold">Agency (Cypher Digital)</th>
                    <th className="text-left p-4 font-semibold">Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Team size", "10+ specialists (strategy, design, ads, video)", "1 person doing everything"],
                    ["Range of services", "Full-service: social, ads, SEO, video, design", "Usually 1–2 skills only"],
                    ["Accountability", "Contracts, SLAs, monthly reports", "No formal agreement"],
                    ["Availability", "Always reachable — team backup", "Single point of failure"],
                    ["Tools & software", "Premium tools included (LKR 50k+ value)", "Often free tools only"],
                    ["Monthly cost", "LKR 40,000 – 200,000", "LKR 15,000 – 60,000"],
                    ["Best for", "Businesses serious about growth", "Tiny budgets, one-off tasks"],
                  ].map(([label, agency, freelancer], i) => (
                    <tr key={i} className="border-t border-border hover:bg-secondary/50 transition-colors">
                      <td className="p-4 font-semibold text-foreground">{label}</td>
                      <td className="p-4 text-muted-foreground">{agency}</td>
                      <td className="p-4 text-muted-foreground">{freelancer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Want a deeper comparison? Read our full <Link to="/blog/freelancer-vs-digital-marketing-agency-sri-lanka" className="text-primary font-semibold hover:underline">agency vs freelancer guide</Link>.
          </p>
        </div>
      </div>
    </section>


    {/* RESULTS TIMELINE */}
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Realistic Timeline</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">How Long Does Digital Marketing Take to Show Results?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Here's what to honestly expect month-by-month with a serious digital marketing strategy in Sri Lanka.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { m: "Month 1", t: "Setup & Launch", d: "Strategy, account setup, content creation, first ads live. Early data starts flowing in." },
              { m: "Month 2–3", t: "First Wins", d: "Ads optimised, first leads from paid. Social engagement growing. SEO foundation built." },
              { m: "Month 4–6", t: "Compound Growth", d: "Predictable lead flow from ads. SEO rankings climbing. Cost per lead dropping 30–50%." },
              { m: "Month 6–12", t: "Scale Phase", d: "Strong ROI, organic traffic surge, brand recognition. Ready to scale ad spend." },
            ].map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{p.m}</span>
                <h3 className="font-heading text-lg font-bold mt-2 mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CASE STUDIES — REAL NUMBERS */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Case Studies</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Digital Marketing Results for Sri Lankan Businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real numbers from real clients. Not vanity metrics — actual leads, sales, and revenue growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: "Restaurant — Colombo 5", duration: "3 months",
                stats: [{v: "5x", l: "Bookings"}, {v: "LKR 18", l: "Cost / lead"}, {v: "+340%", l: "Revenue"}],
                summary: "Combined Facebook & Instagram ads with weekly food reels. Fully booked weekends within 8 weeks.",
              },
              {
                industry: "Real Estate — Western Province", duration: "6 months",
                stats: [{v: "150+", l: "Leads/mo"}, {v: "12", l: "Closed deals"}, {v: "8x", l: "ROAS"}],
                summary: "Facebook lead-gen ads + Google Search ads targeting investors. Closed 12 deals in 6 months.",
              },
              {
                industry: "Aesthetic Clinic — Nugegoda", duration: "4 months",
                stats: [{v: "3 wks", l: "Wait time"}, {v: "LKR 320", l: "Cost / booking"}, {v: "+220%", l: "Inquiries"}],
                summary: "Instagram-first strategy with before/after reels + targeted local ads. Fully booked 3 weeks ahead.",
              },
            ].map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-card-hover transition-all">
                <div className="p-6 pb-4">
                  <h3 className="font-heading text-base font-bold">{c.industry}</h3>
                  <p className="text-xs text-muted-foreground">{c.duration} campaign</p>
                </div>
                <div className="grid grid-cols-3 border-t border-border">
                  {c.stats.map((s, j) => (
                    <div key={j} className={`text-center py-4 ${j < 2 ? "border-r border-border" : ""}`}>
                      <div className="font-heading text-xl font-extrabold text-primary leading-none">{s.v}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="p-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog/digital-marketing-results-case-studies-sri-lanka" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
              See full case study breakdown <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* DIGITAL ADVERTISING IN SRI LANKA */}
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Digital Advertising</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
            Advertising and Digital Marketing in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sri Lanka's advertising industry has evolved rapidly with the growth of digital platforms and social media. Businesses today rely on a mix of traditional advertising and digital marketing strategies to reach their audiences effectively — from social media campaigns to search engine marketing and influencer collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card border border-border rounded-2xl p-7 md:p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3">Digital Advertising Landscape</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The digital advertising landscape in Sri Lanka is driven by the increasing number of internet users and social media adoption. Platforms such as Facebook, Instagram, YouTube, and TikTok have become powerful marketing tools for brands targeting Sri Lankan consumers.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cypher Digital provides a comprehensive overview of{" "}
              <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</Link>
              , helping businesses understand how different advertising platforms perform in the local market.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-7 md:p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold">Social Media Advertising in Sri Lanka</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Social media advertising has become one of the most effective ways for businesses in Sri Lanka to connect with customers. Millions of Sri Lankans actively use social platforms every day, making them valuable channels for targeted marketing campaigns.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advertisers reach potential customers through sponsored posts, video ads, influencer collaborations, and remarketing campaigns with advanced targeting based on location, interests, age groups, and purchasing behavior.
            </p>
          </div>
        </div>

        {/* WHY DIGITAL ADVERTISING */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="font-heading text-2xl font-extrabold mb-3">Why Businesses Use Digital Advertising in Sri Lanka</h3>
            <p className="text-muted-foreground text-sm">
              Companies that combine search engine marketing, social media advertising, and influencer marketing achieve stronger brand recognition and higher conversion rates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Target className="w-4 h-4" />, text: "Target specific audiences by demographics and interests" },
              { icon: <BarChart3 className="w-4 h-4" />, text: "Real-time campaign performance tracking and analytics" },
              { icon: <TrendingUp className="w-4 h-4" />, text: "Cost-effective marketing compared to traditional media" },
              { icon: <Eye className="w-4 h-4" />, text: "Increased brand visibility across multiple platforms" },
              { icon: <MousePointerClick className="w-4 h-4" />, text: "Better engagement with online audiences" },
              { icon: <Rocket className="w-4 h-4" />, text: "Measurable results and detailed campaign analytics" },
            ].map((item, i) => (
              <div key={i} className="group flex items-start gap-3 bg-secondary rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ADVERTISING PLATFORMS */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="font-heading text-2xl font-extrabold mb-3">Advertising Platforms Available in Sri Lanka</h3>
          <p className="text-muted-foreground text-sm">
            Businesses can promote their brands through a variety of advertising channels, each offering unique advantages depending on marketing objectives and target audience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { icon: <Megaphone className="w-5 h-5" />, title: "Social Media Advertising", desc: "Facebook, Instagram, and TikTok campaigns for brand awareness and lead generation.", link: "/facebook-ads-sri-lanka" },
            { icon: <Search className="w-5 h-5" />, title: "Search Engine Advertising", desc: "Google Search and Display Ads to capture high-intent customers.", link: "/google-ads-sri-lanka" },
            { icon: <Users className="w-5 h-5" />, title: "Influencer Marketing", desc: "Collaborate with local influencers to reach niche audiences authentically.", link: "" },
          ].map((item, i) => (
            <div key={i} className="group bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="font-heading text-sm font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
              {item.link && (
                <Link to={item.link} className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* INDUSTRIES */}
        <div className="relative bg-foreground text-white rounded-2xl p-8 md:p-12 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[hsl(280,80%,65%)]/10 rounded-full blur-[60px]" />
          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industries</p>
              <h3 className="font-heading text-2xl font-extrabold mb-3">Top Advertising Industries in Sri Lanka</h3>
              <p className="text-white/50 text-sm">
                Many companies in Sri Lanka now allocate a significant portion of their marketing budget to digital and social media advertising, as it provides measurable results compared to traditional channels.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: <GraduationCap className="w-4 h-4" />, label: "Education Institutes" },
                { icon: <Building2 className="w-4 h-4" />, label: "Real Estate Companies" },
                { icon: <ShoppingBag className="w-4 h-4" />, label: "Ecommerce Brands" },
                { icon: <TrendingUp className="w-4 h-4" />, label: "Financial Services" },
                { icon: <MapPin className="w-4 h-4" />, label: "Tourism Companies" },
                { icon: <Phone className="w-4 h-4" />, label: "Mobile Retailers" },
                { icon: <Palette className="w-4 h-4" />, label: "Beauty & Salons" },
                { icon: <Lightbulb className="w-4 h-4" />, label: "Startup Brands" },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ADVERTISING INSIGHTS CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-xl font-extrabold mb-4">Advertising Insights and Market Data</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Cypher Digital provides insights into the Sri Lankan advertising industry, including digital marketing trends, platform usage statistics, and audience behavior. Access to these insights helps businesses make informed marketing decisions and develop effective advertising strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/advertising-in-sri-lanka" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_16px_hsl(252_65%_55%/0.2)] hover:shadow-[0_0_24px_hsl(252_65%_55%/0.4)]">
              Advertising in Sri Lanka Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/blog" className="inline-flex items-center gap-2 bg-card border border-border text-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:border-primary/20 transition-colors">
              Read Our Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* FINAL CTA + FORM */}
    {/* FAQ */}
    {/* RELATED READING — internal linking */}
    {/* COLOMBO BASED */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Based in Colombo, Sri Lanka</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Digital Marketing Agency in Colombo — serving all of Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Based in Colombo, we are a full-service <Link to="/" className="text-primary font-semibold hover:underline">digital marketing agency in Sri Lanka</Link> serving businesses from Colombo to Kandy, Galle to Jaffna. Our clients include restaurants, clinics, fashion brands, real estate developers, education institutes, and service businesses across all industries.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Colombo", desc: "Our home base — serving all Colombo districts" },
              { label: "Kandy", desc: "Fully remote — same quality, no office visit needed" },
              { label: "All SL", desc: "We serve businesses island-wide via WhatsApp & Zoom" },
              { label: "Remote", desc: "Clients in the Middle East, UK & Australia" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-card transition-all">
                <div className="font-heading text-2xl font-extrabold text-primary mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
          <Link to="/blog/digital-marketing-colombo" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all">
            Learn about digital marketing in Colombo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* OUR WORK / PORTFOLIO */}

    {/* CLIENT REVIEWS */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Client Reviews</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            What our clients say about our digital marketing results
          </h2>
          <div className="flex items-center gap-4 mb-10">
            <div className="font-heading text-5xl font-extrabold text-foreground leading-none">5.0</div>
            <div>
              <div className="text-2xl text-[hsl(45,95%,55%)] tracking-widest leading-none">★★★★★</div>
              <div className="text-xs text-muted-foreground mt-1">Based on 47 client reviews</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote: "Cypher Digital transformed our restaurant's online presence. Within 3 months we went from 20 covers per night to fully booked every weekend. Their social media work is exceptional.", initials: "RC", name: "Restaurant Client", location: "Colombo 3, Sri Lanka", color: "from-[hsl(252,65%,55%)] to-[hsl(280,80%,65%)]" },
              { quote: "We were getting 20 leads per month from traditional marketing. After 2 months with Cypher Digital's Facebook Ads, we're getting 150+ qualified leads every month. The ROI is incredible.", initials: "RE", name: "Real Estate Developer", location: "Western Province, Sri Lanka", color: "from-[hsl(280,80%,65%)] to-[hsl(320,70%,60%)]" },
              { quote: "Professional, responsive, and results-focused. Our clinic went from empty appointment slots to being fully booked 3 weeks in advance. Highly recommend Cypher Digital to any healthcare business.", initials: "HC", name: "Healthcare Client", location: "Nugegoda, Sri Lanka", color: "from-[hsl(220,80%,55%)] to-[hsl(200,90%,55%)]" },
            ].map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-card transition-all">
                <div className="text-lg text-[hsl(45,95%,55%)] tracking-wider mb-3">★★★★★</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{r.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-xs font-bold`}>{r.initials}</div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Related reading</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-6">More guides for Sri Lankan businesses</h2>
          <ul className="space-y-3 text-sm">
            <li>Read our full <Link to="/blog/digital-marketing-agency-colombo" className="text-primary font-semibold hover:underline">digital marketing guide for Colombo businesses</Link>.</li>
            <li>Learn proven <Link to="/blog/lead-generation-strategies-sri-lanka-2026" className="text-primary font-semibold hover:underline">lead generation strategies for Sri Lankan businesses</Link>.</li>
            <li>Compare <Link to="/blog/freelancer-vs-digital-marketing-agency-sri-lanka" className="text-primary font-semibold hover:underline">agency vs freelancer in Sri Lanka</Link> before you hire.</li>
            <li>See how we grew <Link to="/blog/digital-marketing-results-case-studies-sri-lanka" className="text-primary font-semibold hover:underline">5 Sri Lankan businesses with digital marketing</Link>.</li>
            <li>Browse our <Link to="/blog/seo-packages-sri-lanka" className="text-primary font-semibold hover:underline">SEO packages for Sri Lankan businesses</Link>.</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="faqs" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">FAQs</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Digital Marketing in Sri Lanka — Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Answers to the most common questions about digital marketing services, pricing and results in Sri Lanka.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

    {/* INTERNAL LINKS BAR — all service pages */}
    <section className="py-16 bg-foreground text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Explore All Services</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">All Digital Marketing Services in Sri Lanka</h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: "Social Media Marketing", to: "/social-media-management-sri-lanka" },
              { label: "Facebook Ads", to: "/facebook-ads-sri-lanka" },
              { label: "Google Ads", to: "/google-ads-sri-lanka" },
              { label: "SEO Services", to: "/seo-services-sri-lanka" },
              { label: "TikTok Marketing", to: "/tiktok-marketing-sri-lanka" },
              { label: "Instagram Marketing", to: "/instagram-marketing-sri-lanka" },
              { label: "LinkedIn Marketing", to: "/linkedin-advertising-sri-lanka" },
              { label: "Video Production", to: "/video-production-sri-lanka" },
              { label: "Graphic Design", to: "/graphic-design-sri-lanka" },
              { label: "Influencer Marketing", to: "/influencer-marketing-sri-lanka" },
              { label: "TV Advertising", to: "/tv-advertising-sri-lanka" },
              { label: "Radio Advertising", to: "/radio-advertising-sri-lanka" },
              { label: "Newspaper Advertising", to: "/newspaper-advertising-sri-lanka" },
              { label: "Media Buying", to: "/media-buying-agencies-sri-lanka" },
              { label: "Advertising Guide", to: "/advertising-in-sri-lanka" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs font-medium text-white/75 hover:bg-white/10 hover:text-white hover:border-primary/40 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-24 lg:py-32 bg-foreground text-white overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(280,80%,65%)]/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
              Start Growing with Sri Lanka's Top Digital Marketing Team
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Generate consistent leads with Facebook ads, Google Ads, and professional social media management in Sri Lanka.
            </p>
            <div className="flex items-center gap-5 mb-6 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <img src={mascotHeadset} alt="Cypher Digital support mascot" className="w-16 h-16 rounded-xl object-cover hidden sm:block" />
              <div>
                <p className="text-white/80 text-sm font-medium mb-2">💬 Ready to grow? Drop us a message — we reply fast!</p>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+94701772626" className="font-heading font-semibold hover:text-primary transition-colors" onClick={() => trackCallClick()}>
                    +94 70 177 2626
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 backdrop-blur-sm">
            <h3 className="font-heading text-lg font-bold mb-1.5">Book a Free Consultation</h3>
            <p className="text-sm text-white/40 mb-6">Fill in the form and our team will contact you within 24 hours.</p>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
