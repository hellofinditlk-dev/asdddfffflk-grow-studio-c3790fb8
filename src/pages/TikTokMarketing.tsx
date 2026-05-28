import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import RelatedPosts from "@/components/RelatedPosts";
import { useEffect } from "react";
import {
  Target, CheckCircle, BarChart3, Users, TrendingUp, Zap, Shield, Clock,
  Smartphone, Eye, Globe, Layers, MousePointerClick, Brain,
  MessageCircle, Video, Share2, Heart, MapPin, Megaphone, DollarSign,
  ArrowRight, PieChart, Music, Sparkles, Play, Flame
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const stats = [
  { value: "5x", label: "Avg Reach Increase" },
  { value: "60%", label: "Lower CPM vs FB" },
  { value: "90min", label: "Daily User Time" },
  { value: "98%", label: "Client Retention" },
];

const features = [
  "Custom TikTok content strategy & planning",
  "Viral short-form video production",
  "TikTok Ads setup & management (In-Feed, Spark, TopView)",
  "Influencer identification & collaboration",
  "Trending sound & hashtag optimization",
  "Audience research & competitor analysis",
  "A/B testing for ad creatives & targeting",
  "Retargeting & conversion campaigns",
  "Multilingual content (Sinhala, Tamil, English)",
  "Monthly analytics & performance reporting",
];

const benefits = [
  "Reach hundreds of thousands of users organically—even with zero followers—thanks to TikTok's powerful algorithm",
  "Achieve significantly lower CPM and CPC compared to Facebook and Google Ads for maximum budget efficiency",
  "Build authentic brand connections through high-engagement formats like comments, shares, saves, and duets",
  "Go viral overnight—a single trending video can generate thousands of followers and instant leads",
  "Target Gen Z and Millennial audiences who are the fastest-growing consumer segments in Sri Lanka",
  "Leverage influencer collaborations to build trust and drive conversions through authentic recommendations",
];

const processSteps = [
  { title: "Audience Research", desc: "We identify who your customers are, what they watch, and what drives engagement in your niche." },
  { title: "Content Planning", desc: "We create a strategic content calendar based on trends, business goals, and audience behavior." },
  { title: "Video Production", desc: "We produce scroll-stopping videos with hooks in the first 3 seconds, engaging storytelling, and strong CTAs." },
  { title: "Optimize & Scale", desc: "We post at optimal times, use trending hashtags, and promote top-performing content with TikTok Ads." },
];

const flexiblePoints = [
  "Start with as low as LKR 30,000/month",
  "No long-term contracts — cancel anytime",
  "Scale your budget based on performance",
  "Pay only for results, not promises",
  "Custom packages for startups & SMEs",
  "Free TikTok strategy session for new clients",
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports so you always know your ROI." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "First content pieces delivered within 5 business days." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your TikTok needs." },
];

const faqs = [
  { q: "What is TikTok marketing and why does it matter for Sri Lankan businesses?", a: "TikTok marketing is the use of short-form video content, paid TikTok Ads, and influencer collaborations to build brand awareness, generate leads, and drive sales on TikTok. It matters for Sri Lankan businesses because TikTok now has approximately 5 million active users in Sri Lanka — spending an average of 60 to 90 minutes per day on the platform — and it offers organic reach potential and advertising costs that no other platform currently matches." },
  { q: "How much does TikTok marketing cost in Sri Lanka?", a: "TikTok marketing packages in Sri Lanka start from LKR 30,000 per month for organic content management with Cypher Digital. TikTok advertising budgets can begin from as little as LKR 20,000 to 30,000 per month, with CPMs significantly lower than Facebook or Instagram. Influencer marketing costs range from LKR 5,000 for nano-influencers to over LKR 250,000 for macro-influencers per post." },
  { q: "Is TikTok effective for businesses in Sri Lanka?", a: "Yes. TikTok is one of the most effective marketing platforms available to Sri Lankan businesses in 2026, particularly for reaching 18 to 35 year old consumers. Its algorithm allows even new accounts to reach massive audiences organically, its advertising costs are lower than competing platforms, and its engaged user base makes it ideal for building authentic brand connections that drive real business results." },
  { q: "Do I need a large following to succeed on TikTok?", a: "No — this is one of TikTok's most important characteristics. Unlike Facebook or Instagram, where content primarily reaches existing followers, TikTok's For You Page algorithm distributes content based on quality and relevance, not follower count. A brand new TikTok account with zero followers can publish a video that reaches 100,000 people if the content is compelling." },
  { q: "How soon will I see results from TikTok marketing in Sri Lanka?", a: "For organic content, initial results — video views, profile visits, and first follower growth — typically appear within the first week of consistent posting. Meaningful business results (leads, enquiries, and sales) from organic content usually develop over 4 to 12 weeks as your content output builds and the algorithm learns your content's optimal audience. TikTok Ads can generate leads and traffic from day one of a campaign going live." },
  { q: "What types of businesses benefit most from TikTok marketing in Sri Lanka?", a: "TikTok marketing works across virtually every industry in Sri Lanka. Businesses that see particularly strong results include: restaurants and food businesses, hotels and tourism operators, e-commerce and retail brands, beauty salons, fashion brands, educational institutions, real estate agencies, automotive businesses, and any business targeting Sri Lanka's 18 to 35 demographic." },
  { q: "Can you create TikTok content in Sinhala and Tamil?", a: "Yes. Cypher Digital creates TikTok content in Sinhala, Tamil, and English depending on your target audience. Multilingual content is an important strategy for reaching Sri Lanka's diverse consumer base, and we tailor content style, language, and cultural references appropriately for each audience segment." },
  { q: "What is the difference between TikTok Ads and Facebook Ads?", a: "Facebook Ads use interest and behaviour-based targeting to reach users who are passively browsing their social feed. TikTok Ads appear natively within the For You Page and look and feel like organic content, which generally produces higher engagement. TikTok also delivers lower CPMs (cost per thousand impressions) than Facebook in Sri Lanka, making it more cost-efficient for reach-based objectives. Facebook currently offers more sophisticated audience targeting tools and remains stronger for direct lead generation across all age groups." },
  { q: "Do you handle TikTok influencer collaborations for Sri Lankan brands?", a: "Yes. We manage the complete influencer marketing process — from identifying the right Sri Lankan TikTok creators for your brand, negotiating collaboration terms, briefing and coordinating content creation, obtaining Spark Ad permissions, and measuring campaign results. We have an established network of creators across multiple niches in Sri Lanka." },
  { q: "What is the best TikTok marketing agency in Sri Lanka?", a: "Cypher Digital is a leading TikTok marketing agency in Sri Lanka providing viral content creation, strategic TikTok Ads management, influencer campaign coordination, and data-driven performance optimisation. With transparent reporting, no lock-in contracts, and dedicated account managers for every client, we are the trusted choice for TikTok marketing across Colombo, Kandy, Galle, and all of Sri Lanka." },
  { q: "Should I combine TikTok marketing with other digital marketing services?", a: "Absolutely. The most effective digital marketing strategies in Sri Lanka combine TikTok for top-of-funnel awareness and community building with Facebook Ads for lead generation, Google Ads for capturing high-intent search traffic, and SEO for long-term organic visibility. Cypher Digital offers all of these services, allowing us to build fully integrated, multi-channel campaigns that maximise your marketing investment." },
  { q: "Does Cypher Digital offer Social Media Management alongside TikTok marketing?", a: "Yes. Our Social Media Management Sri Lanka service covers Facebook and Instagram page management and can be combined with TikTok marketing as part of a comprehensive multi-platform social strategy. Managing all three platforms through a single agency ensures consistent brand messaging, shared creative assets, and cross-platform optimisation." },
];

const allServices = [
  { name: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "Professional social media management including content creation, scheduling, and community engagement." },
  { name: "Facebook Advertising", path: "/facebook-ads-sri-lanka", desc: "Lead generation, retargeting & conversion campaigns on Facebook and Instagram." },
  { name: "Google Ads", path: "/google-ads-sri-lanka", desc: "Google Search, Display & YouTube advertising to capture high-intent customers." },
  { name: "SEO Services", path: "/seo-services-sri-lanka", desc: "On-page and off-page search engine optimization to rank higher on Google." },
  { name: "Video Production", path: "/video-production-sri-lanka", desc: "Professional video content for ads, social media, and brand storytelling." },
];

const tocItems = [
  { id: "what-is", label: "What is TikTok Marketing?" },
  { id: "sri-lanka-numbers", label: "TikTok in Sri Lanka — The 2026 Numbers" },
  { id: "algorithm", label: "How TikTok's Algorithm Works" },
  { id: "why-booming", label: "Why TikTok is Booming in Sri Lanka" },
  { id: "why-need", label: "Why Your Business Needs TikTok" },
  { id: "services", label: "Our TikTok Marketing Services" },
  { id: "ad-formats", label: "TikTok Ad Formats Explained" },
  { id: "whats-included", label: "What's Included" },
  { id: "process", label: "Our Strategy Process" },
  { id: "cost-effective", label: "Cost-Effective Approach" },
  { id: "cost-tables", label: "TikTok Marketing Cost in Sri Lanka" },
  { id: "industries", label: "Industries We Serve" },
  { id: "viral-framework", label: "Viral Content Framework" },
  { id: "influencer", label: "TikTok Influencer Marketing" },
  { id: "tiktok-seo", label: "TikTok SEO" },
  { id: "tiktok-vs-others", label: "TikTok vs Other Platforms" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
  { id: "pricing", label: "Pricing & Packages" },
  { id: "future", label: "Future of TikTok in Sri Lanka" },
  { id: "faqs", label: "FAQs" },
];

const TikTokMarketing = () => {
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
      name: "TikTok Marketing Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "TikTok Marketing",
      description: "TikTok marketing services in Sri Lanka including viral content creation, TikTok Ads management, influencer marketing, trend optimization, and performance analytics for businesses across all industries.",
      url: "https://cypherdigital.lk/tiktok-marketing-sri-lanka",
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
        { "@type": "ListItem", position: 2, name: "TikTok Marketing Sri Lanka", item: "https://cypherdigital.lk/tiktok-marketing-sri-lanka" },
      ],
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "TikTok Marketing Sri Lanka | TikTok Ads & Viral Campaigns | Cypher Digital",
      description: "Professional TikTok marketing services in Sri Lanka. Viral content creation, TikTok Ads, influencer marketing & trend optimization. Campaigns from LKR 30,000/month.",
      url: "https://cypherdigital.lk/tiktok-marketing-sri-lanka",
      dateModified: "2026-03-21",
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    });

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="TikTok Marketing Sri Lanka (2026) | TikTok Ads & Viral Campaigns | Cypher Digital"
        description="Professional TikTok marketing services in Sri Lanka. Viral content creation, TikTok Ads management, influencer marketing & trend optimization. Cost-effective campaigns from LKR 30,000/month."
        canonical="https://cypherdigital.lk/tiktok-marketing-sri-lanka"
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
      <PageBreadcrumb items={[{ label: "TikTok Marketing Sri Lanka" }]} />

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Music className="w-7 h-7" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">TikTok Marketing & Advertising</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              TikTok Marketing Sri Lanka – Grow Your Brand with Viral, Cost-Effective Campaigns
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              In today's fast-moving digital landscape, TikTok has become one of the most powerful platforms for businesses in Sri Lanka. At Cypher Digital, we specialize in creating <strong className="text-white/80">high-performance TikTok campaigns tailored specifically for Sri Lankan audiences</strong> — turning views into real customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20TikTok%20strategy%20session" target="_blank" rel="noopener noreferrer">
                  Get a Free Strategy Session
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
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">What is TikTok Marketing?</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">TikTok marketing</strong> involves using short-form video content to promote products and services, build brand awareness, engage audiences, and drive traffic and sales. This includes organic content strategy, paid TikTok advertising (In-Feed Ads, Spark Ads, TopView Ads), influencer collaborations, and trend-based content creation. TikTok's unique algorithm allows businesses in Sri Lanka to reach massive audiences organically — even with zero followers — making it one of the most cost-effective digital marketing platforms available today.
            </p>
          </div>
        </div>
      </section>

      {/* TikTok in Sri Lanka — Numbers */}
      <section id="sri-lanka-numbers" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">TikTok in Sri Lanka — The Numbers That Matter in 2026</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">TikTok is no longer a niche platform for teenage dancers. It is a mainstream marketing channel with a massive, highly engaged Sri Lankan audience.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { stat: "5M+", label: "Active TikTok users in Sri Lanka — growing dramatically year-over-year." },
                { stat: "60–90 min", label: "Average daily time spent per Sri Lankan user — more than any other social app." },
                { stat: "#1 Gen Z search", label: "TikTok has become the primary search engine for Gen Z in Sri Lanka." },
                { stat: "30–60% lower CPM", label: "TikTok Ads cost less per impression than Facebook or Instagram in Sri Lanka." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className="text-2xl font-extrabold text-primary mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8 max-w-3xl mx-auto leading-relaxed">Short-form vertical video (TikTok, Reels, Shorts) is now the dominant format for digital content consumption in Sri Lanka — and the businesses investing in <strong className="text-foreground">TikTok marketing Sri Lanka</strong> in 2026 are building a significant competitive advantage over those that wait.</p>
          </div>
        </div>
      </section>

      {/* How TikTok's Algorithm Works */}
      <section id="algorithm" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">How TikTok's Algorithm Works — And Why It Favours Small Businesses</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">Every TikTok user's home screen is the <strong className="text-foreground">For You Page (FYP)</strong> — a personalised feed of content from accounts they have never seen before. This means your content can reach millions of Sri Lankans with zero ad budget if it is relevant and engaging.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: "Watch Time & Completion Rate", desc: "The most critical signal. Videos watched to completion get pushed wider. The first 1–3 seconds determine everything." },
                { title: "Engagement Rate", desc: "Likes, comments, shares, and saves signal value. Comments are particularly powerful — they keep viewers on your video longer." },
                { title: "Shares", desc: "The highest-value engagement action on TikTok. When someone shares your video, distribution accelerates significantly." },
                { title: "Re-watches", desc: "If users watch your video more than once, TikTok counts this as an exceptional quality signal — perfect for tips, recipes, price lists." },
                { title: "Audio & Text Matching", desc: "TikTok reads captions, on-screen text, and transcribes spoken audio. Using your target keywords helps TikTok show your content to the right audience." },
                { title: "Sri Lanka Advantage", desc: "A bakery in Kandy, a workshop in Negombo, or a startup in Colombo can build massive audiences organically — no follower-buying, no big ad spend." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
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

      {/* Why TikTok is Booming */}
      <section id="why-booming" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Why TikTok Marketing is Booming in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              TikTok is no longer just a platform for entertainment — it's now a serious marketing channel with unmatched growth potential for Sri Lankan businesses.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Users className="w-5 h-5" />, title: "Rapid Gen Z & Millennial Growth", desc: "TikTok's user base in Sri Lanka is expanding rapidly among the most active consumer demographics." },
                { icon: <Clock className="w-5 h-5" />, title: "High Daily Engagement", desc: "Average users spend 60–90 minutes per day on TikTok — far higher than most other social platforms." },
                { icon: <Heart className="w-5 h-5" />, title: "Strong Purchase Influence", desc: "TikTok content directly influences purchasing decisions, with users actively discovering and buying products." },
                { icon: <Flame className="w-5 h-5" />, title: "Viral Potential on Any Budget", desc: "Unlike Facebook or Instagram, TikTok allows even small businesses to reach hundreds of thousands organically." },
                { icon: <DollarSign className="w-5 h-5" />, title: "Most Cost-Effective Platform", desc: "Lower CPM and CPC compared to traditional social media advertising — more reach for less money." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Early Mover Advantage", desc: "Businesses that invest in TikTok now will dominate their industries as the platform continues to grow." },
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

      {/* Why Your Business Needs TikTok */}
      <section id="why-need" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Why Your Business Needs TikTok Marketing in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">TikTok offers unique advantages that no other platform can match for Sri Lankan businesses.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Megaphone className="w-5 h-5" />, title: "Massive Organic Reach", desc: "TikTok's algorithm pushes content to new audiences — even if you have zero followers. You don't need a big budget to go viral." },
                { icon: <DollarSign className="w-5 h-5" />, title: "Lower Advertising Costs", desc: "Compared to Facebook and Google Ads, TikTok offers lower CPC and CPM — meaning more reach for less money." },
                { icon: <Heart className="w-5 h-5" />, title: "High Engagement Rates", desc: "TikTok users actively engage with likes, shares, comments, and saves — creating stronger brand connections." },
                { icon: <Zap className="w-5 h-5" />, title: "Faster Brand Growth", desc: "A single viral video can bring thousands of followers, generate leads instantly, and boost brand visibility overnight." },
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

      {/* Our TikTok Marketing Services */}
      <section id="services" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Our TikTok Marketing Services in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Complete TikTok marketing solutions designed for Sri Lankan businesses of all sizes.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Brain className="w-5 h-5" />, title: "TikTok Strategy Development", desc: "We analyze your industry, target audience, and competitors to create a customized strategy that maximizes reach, engagement, and conversions." },
                { icon: <Video className="w-5 h-5" />, title: "TikTok Content Creation", desc: "We produce viral-style videos, educational content, promotional clips, and behind-the-scenes content — all optimized for TikTok's algorithm." },
                { icon: <Target className="w-5 h-5" />, title: "TikTok Ads Management", desc: "We run high-performing In-Feed Ads, Spark Ads, and conversion campaigns focused on low cost per result, high ROI, and scalable growth." },
                { icon: <Users className="w-5 h-5" />, title: "Influencer Marketing", desc: "We connect your brand with Sri Lankan TikTok influencers and niche content creators to build trust and increase conversions." },
                { icon: <Sparkles className="w-5 h-5" />, title: "Trend & Hashtag Optimization", desc: "We track trending sounds, viral challenges, and hashtag strategies to ensure your content stays relevant and visible." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Reporting", desc: "We monitor views, engagement, conversions, and ROI — continuously optimizing your campaigns for maximum performance." },
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What's Included in Our TikTok Marketing Packages</h2>
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

      {/* TikTok Ad Formats Explained */}
      <section id="ad-formats" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">TikTok Ad Formats Explained</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">Choosing the right TikTok ad format is essential for an efficient advertising strategy. Here are the six formats Sri Lankan businesses use most.</p>
            <div className="space-y-4">
              {[
                { name: "In-Feed Ads", desc: "Short video ads (9–60 sec) appearing natively within the For You Page. Look and feel like organic content. Include a CTA button to website, app, or WhatsApp.", best: "Lead generation, website traffic, app installs, product awareness" },
                { name: "Spark Ads", desc: "TikTok's most powerful format — promote your existing organic posts (or a creator's) as paid ads while keeping all real likes, comments, and shares. Outperforms traditional ad creative consistently.", best: "Amplifying high-performing organic content & influencer collaborations" },
                { name: "TopView Ads", desc: "Full-screen, sound-on video ads shown as the first piece of content when a user opens TikTok. Maximum visibility for major brand campaigns.", best: "Large brand campaigns, product launches, national-scale awareness" },
                { name: "Brand Takeover", desc: "Full-screen ad appearing immediately when the app opens, before the FYP loads. Only one advertiser per day per category — extremely visible.", best: "High-impact, premium brand campaigns" },
                { name: "Collection Ads", desc: "Showcase multiple products in a single ad with a tappable product gallery. Users can browse and purchase without leaving TikTok.", best: "E-commerce & retail businesses in Sri Lanka selling multiple SKUs" },
                { name: "TikTok Shopping Ads", desc: "Product tagging directly within videos. Seamless path from content discovery to purchase — all inside TikTok.", best: "Sri Lankan e-commerce brands ready for in-app commerce" },
              ].map((f, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{f.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{f.desc}</p>
                  <p className="text-xs"><strong className="text-foreground">Best for:</strong> <span className="text-muted-foreground">{f.best}</span></p>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Benefits of TikTok Marketing for Your Business</h2>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Our TikTok Marketing Strategy Process</h2>
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

      {/* Cost-Effective Approach */}
      <section id="cost-effective" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Our Cost-Effective TikTok Marketing Approach</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">We focus on maximum results with minimum budget — here's how we keep TikTok marketing affordable for Sri Lankan businesses.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <PieChart className="w-5 h-5" />, title: "Smart Budget Allocation", desc: "We test multiple creatives and scale only what works — eliminating wasted ad spend." },
                { icon: <Play className="w-5 h-5" />, title: "Content-First Strategy", desc: "Instead of spending heavily on ads, we create viral organic content and boost only high-performing videos." },
                { icon: <Globe className="w-5 h-5" />, title: "Localized Content", desc: "We create content in Sinhala, Tamil, and English — increasing reach and engagement across all of Sri Lanka." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Data-Driven Decisions", desc: "Every decision is based on performance metrics, audience insights, and conversion data." },
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

      {/* TikTok Marketing Cost Tables */}
      <section id="cost-tables" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">How Much Does TikTok Marketing Cost in Sri Lanka?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">A realistic breakdown of TikTok Ads CPM, CPC and influencer rates in the current Sri Lankan market.</p>

            <h3 className="font-heading text-lg font-bold text-foreground mb-4">TikTok Advertising Costs (Sri Lanka 2026)</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border border-border rounded-xl overflow-hidden">
                <thead><tr className="bg-card">
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Ad Format</th>
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Estimated Cost</th>
                </tr></thead>
                <tbody>
                  {[
                    { f: "In-Feed Ads (CPM)", c: "LKR 500 – 2,000 per 1,000 impressions" },
                    { f: "Spark Ads (CPM)", c: "LKR 400 – 1,500 per 1,000 impressions" },
                    { f: "TopView Ads", c: "LKR 500,000+ per campaign" },
                    { f: "In-Feed CPC", c: "LKR 20 – 80 per click" },
                  ].map((r, i) => (
                    <tr key={i} className="bg-card">
                      <td className="p-4 text-sm font-semibold text-foreground border-b border-border">{r.f}</td>
                      <td className="p-4 text-sm text-muted-foreground border-b border-border">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic mb-10">Estimates based on current Sri Lankan market conditions. Actual costs vary based on targeting, creative quality and competition. TikTok typically delivers 30–60% lower CPM than Facebook Ads.</p>

            <h3 className="font-heading text-lg font-bold text-foreground mb-4">TikTok Influencer Marketing Costs in Sri Lanka</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-xl overflow-hidden">
                <thead><tr className="bg-card">
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Creator Tier</th>
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Followers</th>
                  <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Cost Per Post</th>
                </tr></thead>
                <tbody>
                  {[
                    { t: "Nano-influencer", f: "1,000 – 10,000", c: "LKR 5,000 – 20,000" },
                    { t: "Micro-influencer", f: "10,000 – 100,000", c: "LKR 20,000 – 80,000" },
                    { t: "Mid-tier creator", f: "100,000 – 500,000", c: "LKR 80,000 – 250,000" },
                    { t: "Macro-influencer", f: "500,000+", c: "LKR 250,000+" },
                  ].map((r, i) => (
                    <tr key={i} className="bg-card">
                      <td className="p-4 text-sm font-semibold text-foreground border-b border-border">{r.t}</td>
                      <td className="p-4 text-sm text-muted-foreground border-b border-border">{r.f}</td>
                      <td className="p-4 text-sm text-muted-foreground border-b border-border">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">Nano and micro-influencers often deliver the highest engagement rates and the most authentic audience connections, making them exceptional value for Sri Lankan SMEs. Cypher Digital's <strong className="text-foreground">TikTok marketing Sri Lanka</strong> packages start at LKR 30,000/month with no lock-in contracts.</p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Industries We Serve with TikTok Marketing</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Our TikTok marketing services are ideal for businesses across every sector in Sri Lanka.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏨", title: "Hotels & Tourism", desc: "Promote hotel experiences, showcase destinations, and attract foreign and local tourists.", link: "/hotel-digital-marketing-sri-lanka" },
                { icon: "🛍️", title: "E-commerce & Retail", desc: "Product demonstrations, flash promotions, and viral product trends.", link: "/ecommerce-digital-marketing-sri-lanka" },
                { icon: "🎓", title: "Education & Study Abroad", desc: "Student success stories, course promotions, and lead generation campaigns.", link: "/education-marketing-agency-sri-lanka" },
                { icon: "🍔", title: "Restaurants & Cafes", desc: "Food content, customer experiences, and viral menu items.", link: "/restaurant-digital-marketing-sri-lanka" },
                { icon: "💇", title: "Beauty & Salons", desc: "Before/after transformations, tutorials, and appointment-driving content.", link: "/beauty-salon-digital-marketing-sri-lanka" },
                { icon: "🏢", title: "SMEs & Startups", desc: "Brand awareness, lead generation, and low-budget growth strategies.", link: "/real-estate-digital-marketing-sri-lanka" },
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

      {/* Viral Content Framework */}
      <section id="viral-framework" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">How to Create Viral TikTok Content — The Proven Framework</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">The exact 5-step framework Cypher Digital uses to consistently produce high-performing TikTok content for Sri Lankan business clients.</p>
            <div className="space-y-4">
              {[
                { n: 1, title: "The Hook (First 1–3 Seconds)", desc: "The single most important element. Use provocative questions (\"Do you know why your business is losing customers on Google?\"), surprising statements (\"I opened a restaurant in Colombo with LKR 200,000…\"), visual intrigue (the finished result first), or trending audio." },
                { n: 2, title: "The Value Delivery", desc: "Deliver on the promise. Generic promo gets scrolled past. Educators share one genuine study tip. Restaurants show their signature dish being prepared. Hotels reveal the view that makes viewers want to book. Retailers demo a real problem-solving moment." },
                { n: 3, title: "The Pattern Interrupt", desc: "Every 3–5 seconds, introduce something that prevents scrolling — a visual cut, new info, unexpected development, text overlay, or sound effect. TikTok's editing culture expects rapid pacing." },
                { n: 4, title: "The Call to Action", desc: "Frame it naturally. \"Follow us for more tips\" beats \"Buy now.\" \"Comment what city you're from\" feeds the algorithm. Reserve direct sales CTAs for Spark Ads and In-Feed Ads." },
                { n: 5, title: "Optimise for TikTok SEO", desc: "Use target keywords in captions, spoken dialogue, and on-screen text. Add 3–5 relevant hashtags (mix niche-specific + broader). Choose trending audio where it fits naturally — audio popularity is a distribution signal." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">{s.n}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Marketing */}
      <section id="influencer" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">TikTok Influencer Marketing in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">On TikTok, <strong className="text-foreground">engagement rate and content authenticity matter far more than follower count</strong>. A Sri Lankan micro-influencer with 25,000 highly engaged followers typically outperforms a macro-influencer with 500,000 passive ones.</p>
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {[
                { title: "Niche Alignment", desc: "Does the creator's content naturally fit your product, service, or industry?" },
                { title: "Audience Demographics", desc: "Does their audience match your target customer profile in Sri Lanka?" },
                { title: "Engagement Rate", desc: "Are followers actively liking, commenting, and sharing — or just scrolling past?" },
                { title: "Content Quality", desc: "Is the creator's video quality, pacing, and storytelling appropriate for your brand?" },
                { title: "Previous Collaborations", desc: "Have they worked with brands in your category before? How did those posts actually perform?" },
                { title: "Sri Lanka Creator Network", desc: "Cypher Digital maintains relationships with TikTok creators across food, travel, fashion, lifestyle, education, business & entertainment verticals." },
              ].map((c, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 text-center">Types of Influencer Collaborations We Manage</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Gifted reviews — product/service in exchange for honest coverage",
                "Paid posts — compensated dedicated branded content",
                "Spark Ad permissions — license a creator's post to run as a paid Spark Ad",
                "Long-term brand ambassador programmes for sustained association",
                "Branded hashtag challenge campaigns",
                "Multi-creator coordinated campaigns for product launches",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              Want creator-led campaigns? Explore our full <Link to="/influencer-marketing-sri-lanka" className="text-primary font-semibold hover:underline">influencer marketing Sri Lanka</Link> service.
            </p>
          </div>
        </div>
      </section>

      {/* TikTok SEO */}
      <section id="tiktok-seo" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">TikTok SEO — How to Get Found Without Paying for Ads</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">TikTok SEO is one of the most overlooked, highest-opportunity strategies for Sri Lankan businesses in 2026. As more Sri Lankans — particularly Gen Z — use TikTok as their first search destination, appearing in TikTok search results drives massive organic traffic.</p>
            <div className="space-y-4">
              {[
                { title: "Keywords in Video Captions", desc: "Write captions that naturally include the terms your customers would search. A restaurant in Colombo should include \"best restaurant Colombo,\" \"food Sri Lanka,\" and related terms in their captions." },
                { title: "Speak Your Keywords Aloud", desc: "TikTok's auto-caption technology transcribes spoken dialogue. Speaking target keywords in the video itself signals relevance to the search algorithm." },
                { title: "On-Screen Text Overlays", desc: "Text displayed on screen is read by TikTok's algorithm and counted as a ranking signal. Include core keywords in on-screen text." },
                { title: "Optimise Your Profile Bio", desc: "Your TikTok bio is indexed by platform search. Include your main service and location — e.g. \"TikTok Marketing Agency | Colombo, Sri Lanka.\"" },
                { title: "Strategic Hashtag Mix", desc: "Use 3–5 targeted hashtags — mixing high-volume category hashtags with specific niche hashtags — to help TikTok categorise and surface your content in relevant searches." },
              ].map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8 leading-relaxed">
              Pair this with our <Link to="/seo-services-sri-lanka" className="text-primary font-semibold hover:underline">SEO services Sri Lanka</Link> for unified discoverability across Google and TikTok.
            </p>
          </div>
        </div>
      </section>

      {/* TikTok vs Other Platforms */}
      <section id="tiktok-vs-others" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">TikTok Marketing vs Other Platforms</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">See how TikTok compares to other digital marketing platforms for Sri Lankan businesses.</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-card">
                    <th className="p-4 text-left text-sm font-bold text-foreground border-b border-border">Platform</th>
                    <th className="p-4 text-center text-sm font-bold text-foreground border-b border-border">Cost</th>
                    <th className="p-4 text-center text-sm font-bold text-foreground border-b border-border">Reach</th>
                    <th className="p-4 text-center text-sm font-bold text-foreground border-b border-border">Engagement</th>
                    <th className="p-4 text-center text-sm font-bold text-foreground border-b border-border">Viral Potential</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { platform: "TikTok", cost: "Low", reach: "Very High", engagement: "Very High", viral: "Extreme", highlight: true },
                    { platform: "Facebook", cost: "Medium", reach: "Medium", engagement: "Medium", viral: "Low", highlight: false },
                    { platform: "Instagram", cost: "Medium", reach: "Medium", engagement: "High", viral: "Medium", highlight: false },
                    { platform: "Google Ads", cost: "High", reach: "High", engagement: "Low", viral: "None", highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? "bg-primary/5" : "bg-card"}>
                      <td className="p-4 text-sm font-semibold text-foreground border-b border-border">{row.highlight ? "🎵 " : ""}{row.platform}</td>
                      <td className="p-4 text-center text-xs text-muted-foreground border-b border-border">{row.cost}</td>
                      <td className="p-4 text-center text-xs text-muted-foreground border-b border-border">{row.reach}</td>
                      <td className="p-4 text-center text-xs text-muted-foreground border-b border-border">{row.engagement}</td>
                      <td className="p-4 text-center text-xs font-medium border-b border-border">
                        <span className={row.highlight ? "text-primary font-bold" : "text-muted-foreground"}>{row.viral}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              👉 <strong className="text-foreground">TikTok clearly offers the best ROI</strong> for modern businesses looking for cost-effective, high-reach marketing in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="mistakes" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Common TikTok Marketing Mistakes (And How We Fix Them)</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { mistake: "Posting without a strategy", fix: "We create data-driven content calendars aligned with your business goals and audience behavior." },
                { mistake: "Ignoring trends and viral sounds", fix: "We actively monitor and leverage trending sounds, challenges, and hashtags for maximum visibility." },
                { mistake: "Overly promotional content", fix: "We create authentic, entertaining content that builds trust before selling." },
                { mistake: "Poor video quality and no hooks", fix: "We produce professional-quality videos with attention-grabbing hooks in the first 3 seconds." },
                { mistake: "Not using analytics to optimize", fix: "We continuously monitor performance data and optimize content strategy based on real metrics." },
                { mistake: "Not running retargeting campaigns", fix: "We implement retargeting to convert warm audiences who've already engaged with your content." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <p className="text-sm font-medium text-destructive mb-2">❌ {item.mistake}</p>
                  <p className="text-xs text-muted-foreground">✅ {item.fix}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8">
              👉 That's why working with a <strong className="text-foreground">professional TikTok marketing agency</strong> matters.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Flexible & Affordable TikTok Marketing Packages</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              TikTok marketing is highly flexible. We design custom packages based on your goals and budget.
            </p>

            {/* Budget Tiers */}
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { tier: "Small Business", range: "LKR 30,000 – 100,000/mo", desc: "Organic content + basic ad campaigns" },
                { tier: "Medium Business", range: "LKR 100,000 – 300,000/mo", desc: "Full strategy + ads + influencer collabs" },
                { tier: "Large Campaigns", range: "LKR 300,000+/mo", desc: "Enterprise campaigns + multi-platform integration" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{item.tier}</h3>
                  <p className="text-lg font-extrabold text-primary mb-2">{item.range}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {flexiblePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* Trust Points */}
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

      {/* Future of TikTok */}
      <section id="future" className="py-16 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">The Future of TikTok Marketing in Sri Lanka</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">TikTok will continue to grow and dominate — businesses that invest early will have a significant competitive advantage.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Brain className="w-5 h-5" />, title: "AI-Powered Content", desc: "TikTok's AI recommendations will become even more powerful, making content discovery more effective." },
                { icon: <Smartphone className="w-5 h-5" />, title: "TikTok Shopping", desc: "In-app shopping features will enable direct purchases from videos — transforming e-commerce in Sri Lanka." },
                { icon: <Users className="w-5 h-5" />, title: "Influencer Commerce", desc: "Influencer-driven commerce will become a primary sales channel for brands across all industries." },
                { icon: <Video className="w-5 h-5" />, title: "Short-Form Video Dominance", desc: "Short-form video will continue to dominate all social media platforms — and TikTok leads the way." },
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

      {/* AI Search Optimized Answer */}
      <section className="py-14 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">What is the Best TikTok Marketing Agency in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Cypher Digital</strong> is a leading TikTok marketing agency in Sri Lanka providing viral content creation, strategic TikTok Ads management, influencer marketing, and data-driven optimization. We specialize in helping businesses across hotels, education, retail, restaurants, and startups go viral, generate leads, and drive real sales through cost-effective TikTok campaigns. With transparent reporting, no lock-in contracts, and proven ROI, Cypher Digital is the trusted choice for TikTok marketing in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Target Locations */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">TikTok Marketing Services Across Sri Lanka</h2>
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
                Going beyond TikTok? Explore{" "}
                <Link to="/media-buying-agencies-sri-lanka" className="text-primary hover:underline font-semibold">media buying in Sri Lanka</Link>,{" "}
                <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline font-semibold">TV advertising</Link>,{" "}
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions – TikTok Marketing Sri Lanka</h2>
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
                Ready to Go Viral with TikTok Marketing in Sri Lanka?
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Stop missing out on TikTok's massive audience. Partner with Cypher Digital for data-driven TikTok campaigns that generate real leads and sales.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {["Free Strategy Session", "No Lock-in Contracts", "Results in 7 Days"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs text-white/80 font-medium">
                    <CheckCircle className="w-3 h-3 text-primary" /> {item}
                  </span>
                ))}
              </div>
              <img src={mascotGlasses} alt="Cypher Digital TikTok Marketing Sri Lanka" className="w-40 h-40 rounded-2xl object-cover mx-auto lg:mx-0 border-2 border-white/10" loading="lazy" />
            </div>
            <div>
              <InquiryForm service="TikTok marketing" />
            </div>
          </div>
        </div>
      </section>
      <RelatedPosts
        keywords={["TikTok Marketing Sri Lanka", "Influencer Marketing Sri Lanka", "Instagram Marketing Sri Lanka"]}
        heading="More on TikTok & Short-Form Video"
        intro="Viral content tactics, ad strategies, and creator marketing for Sri Lankan brands on TikTok."
      />
    </div>
  );
};

export default TikTokMarketing;
