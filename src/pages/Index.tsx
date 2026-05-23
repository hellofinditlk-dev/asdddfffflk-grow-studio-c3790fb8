import { Link } from "react-router-dom";
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
import mascotDefault from "@/assets/mascot-default.jpeg";
import mascotSocial from "@/assets/mascot-social.jpeg";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import mascotHeadset from "@/assets/mascot-headset.jpeg";

const services = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Social Media Management",
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
  { value: "15,000+", label: "Leads Generated", icon: <Zap className="w-5 h-5" /> },
  { value: "20+", label: "Happy Clients", icon: <Star className="w-5 h-5" /> },
  { value: "2,000+", label: "Campaigns Run", icon: <Rocket className="w-5 h-5" /> },
];

const trustedLogos = ["Facebook", "Google", "TikTok", "Instagram", "YouTube", "LinkedIn"];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cypher Digital",
  description: "Leading digital marketing agency in Sri Lanka offering social media management, Facebook & Google Ads, SEO, video production & graphic design.",
  url: "https://cypherdigital.lk",
  telephone: "+94701772626",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/cypherdigitallk",
    "https://www.instagram.com/cypherdigitallk",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
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

const Index = () => (
  <div className="pt-16">
    <SEOHead
      title="Best Digital Marketing Agency Sri Lanka | Cypher Digital"
      description="#1 digital marketing agency in Sri Lanka & best social media agency Sri Lanka. Trusted digital marketing companies in Sri Lanka. Get free call today!"
      canonical="https://cypherdigital.lk"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

    {/* HERO */}
    <section className="relative py-28 lg:py-40 bg-foreground overflow-hidden">
      {/* Multiple animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[140px] animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(280,80%,65%)]/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[hsl(200,90%,55%)]/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="w-3.5 h-3.5" />
              #1 Digital Marketing Agency Sri Lanka
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Digital Marketing <span className="gradient-text">Agency</span> in Sri Lanka
            </h1>
            <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              We help Sri Lankan businesses grow with professional <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline font-semibold">Social Media Management Sri Lanka</Link>, Facebook advertising, Google Ads, and video production.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-sm px-8 h-13 rounded-xl shadow-[0_0_30px_hsl(252_65%_55%/0.4)] hover:shadow-[0_0_40px_hsl(252_65%_55%/0.6)] hover:scale-[1.02] active:scale-[0.98]">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-8 h-13 rounded-xl font-semibold border-none shadow-[0_0_30px_hsl(25_95%_53%/0.35)] hover:shadow-[0_0_40px_hsl(25_95%_53%/0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20get%20a%20free%20quote" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            {/* Trust markers */}
            <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-3">We Advertise On</p>
              <div className="flex flex-wrap items-center gap-4">
                {trustedLogos.map((name) => (
                  <span key={name} className="text-xs font-semibold text-white/25 border border-white/10 px-3 py-1.5 rounded-lg">{name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-[hsl(280,80%,65%)]/20 to-transparent rounded-full blur-[80px] animate-pulse-glow" />
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2rem] border border-white/10 animate-float" style={{ animationDelay: "0.5s" }} />
              <img src={mascotDefault} alt="Cypher Digital mascot" className="relative w-80 h-80 rounded-3xl object-cover shadow-[0_20px_60px_hsl(252_65%_55%/0.4)] animate-float" />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">+340%</p>
                    <p className="text-white/50 text-[10px]">Avg. ROI</p>
                  </div>
                </div>
              </div>
              {/* Floating badge right */}
              <div className="absolute -top-4 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">5.0 ★</p>
                    <p className="text-white/50 text-[10px]">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="relative -mt-10 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl py-8 px-4 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 animate-count-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-primary mx-auto mb-3">
                {s.icon}
              </div>
              <div className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center max-w-4xl mx-auto">
          <div className="text-center lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
              Results-Driven Digital Marketing Agency
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
            Our Digital Marketing Services
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">End-to-end digital solutions to grow your brand in Sri Lanka</p>
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
            Why Choose Our Agency
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
            Our Campaign Process
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
    <section className="relative py-24 lg:py-32 bg-foreground text-white overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(280,80%,65%)]/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
              Start Your Campaign Today
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
                  <a href="tel:+94701772626" className="font-heading font-semibold hover:text-primary transition-colors">
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
