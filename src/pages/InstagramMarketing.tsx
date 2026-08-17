import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Card } from "@/components/ui/card";
import { Instagram, Users, Smartphone, Film, ShoppingBag, MessageCircle, Camera, Clock, Target, Store, Check, X } from "lucide-react";

const WA = "https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Instagram%20marketing%20in%20Sri%20Lanka";

const stats = [
  { icon: Users, num: "2M+", desc: "Active Instagram users in Sri Lanka in 2026" },
  { icon: Smartphone, num: "78%", desc: "Sri Lankan Instagram users access via mobile — mobile-first content essential" },
  { icon: Film, num: "3×", desc: "More reach from Reels vs standard feed posts in Sri Lanka" },
  { icon: ShoppingBag, num: "70%", desc: "Of Sri Lankan Instagram users have discovered a new brand through the platform" },
  { icon: MessageCircle, num: "80%", desc: "Of Instagram users follow at least one business account in Sri Lanka" },
];

const services = [
  { icon: Film, title: "Instagram Reels Production", desc: "Reels are the single most important Instagram format in 2026 — delivering 3× more organic reach than standard posts. We create professional Reels that stop the scroll and grow your audience in Sri Lanka.", items: ["Monthly Reels content strategy and scripting", "Filming direction and production guidance", "Professional video editing and colour grading", "Trending audio selection for maximum reach", "Caption writing with hashtag strategy", "Performance tracking and format optimisation"] },
  { icon: Camera, title: "Content Creation & Feed Management", desc: "Your Instagram feed is your brand's visual identity. We plan, create, and manage a cohesive feed that looks professional, reflects your brand, and attracts the right audience in Sri Lanka.", items: ["Monthly content calendar planning and approval", "Custom graphic design and visual direction", "Photography art direction and styling guidance", "Caption writing in English and Sinhala", "Optimal posting schedule for Sri Lankan audiences", "Hashtag research and strategy"] },
  { icon: Clock, title: "Instagram Stories Management", desc: "Stories are viewed by your existing followers every day — making them the most powerful channel for building relationships, driving direct messages, and keeping your brand top-of-mind for Sri Lankan consumers.", items: ["Daily Stories planning and scheduling", "Interactive Stories — polls, questions, sliders", "Behind-the-scenes and authentic content", "Story Highlights creation and organisation", "Link stickers and swipe-up call-to-actions", "Stories analytics and view tracking"] },
  { icon: Target, title: "Instagram Advertising (Instagram Ads)", desc: "Instagram Ads place your brand directly in front of your target audience in Sri Lanka — whether you want to reach Colombo consumers aged 25–35, island-wide fashion buyers, or tourists visiting Sri Lanka.", items: ["Instagram Ads account setup and strategy", "Feed ads, Stories ads and Reels ads", "Audience targeting and custom audience building", "Retargeting campaigns for website visitors", "A/B testing of creatives and audiences", "Monthly ad performance reports with ROI tracking"] },
  { icon: MessageCircle, title: "Community Management", desc: "Unanswered comments and DMs cost you customers. We manage your Instagram community — responding to comments, answering DMs, handling enquiries, and building the relationships that turn followers into paying customers.", items: ["Comment monitoring and response management", "DM management and enquiry handling", "Negative comment management and reputation protection", "Proactive engagement with target audience accounts", "Community growth through authentic interaction", "Response templates for common enquiries"] },
  { icon: Store, title: "Instagram Shopping Setup", desc: "For e-commerce businesses in Sri Lanka, Instagram Shopping allows customers to browse and purchase products directly through Instagram — without leaving the app. We set up and manage your full Instagram Shop.", items: ["Instagram Shopping account setup and verification", "Product catalogue creation and management", "Product tagging in posts, Reels and Stories", "Instagram Checkout integration (where available)", "Shopping Ads campaign management", "Product performance tracking and optimisation"] },
];

const formats = [
  { n: "01", title: "Reels", desc: "Short videos up to 90 seconds. The highest-reach format on Instagram — reaches far beyond your existing followers through the Reels feed and Explore page.", tag: "Highest organic reach" },
  { n: "02", title: "Feed Posts", desc: "Single images, carousels, and videos that appear on your profile grid. Builds your brand's visual identity and stays permanently on your profile.", tag: "Brand identity" },
  { n: "03", title: "Stories", desc: "24-hour content seen by your existing followers. Best for daily engagement, promotions, behind-the-scenes, and driving DMs and website clicks.", tag: "Daily engagement" },
  { n: "04", title: "Carousel Posts", desc: "Multi-image or multi-slide posts. Excellent for tutorials, before-and-after, product showcases, and listicle content. Higher save rates than single images.", tag: "High save rate" },
  { n: "05", title: "Instagram Ads", desc: "Paid promotions in feed, Stories, Reels and Explore. Targeted to your exact audience in Sri Lanka — by age, location, interest, or behaviour.", tag: "Best for leads" },
  { n: "06", title: "Broadcast Channels", desc: "Instagram's newest feature — direct messaging channel to broadcast updates to subscribers. Ideal for exclusive offers, new arrivals, and VIP community building.", tag: "Community building" },
];

const industries = [
  { ico: "🍽️", title: "Restaurants & Cafes", desc: "Food photography, Reels, and Stories driving reservations and walk-ins in Colombo and beyond." },
  { ico: "👗", title: "Fashion & Clothing", desc: "Lookbooks, outfit Reels, and Shopping ads for Sri Lankan fashion brands and boutiques." },
  { ico: "💄", title: "Beauty & Salons", desc: "Before-and-after content, service showcases, and Stories driving appointment bookings." },
  { ico: "🏨", title: "Hotels & Resorts", desc: "Travel photography, room showcases, and influencer collaborations for Sri Lankan hospitality." },
  { ico: "🏠", title: "Interior Design", desc: "Before-and-after Reels, project showcases, and design inspiration content that converts." },
  { ico: "💍", title: "Weddings & Events", desc: "Real wedding content, vendor showcases, and emotional storytelling that drives enquiries." },
  { ico: "🍰", title: "Bakeries & Desserts", desc: "Product photography, decoration Reels, and Stories that turn followers into regular customers." },
  { ico: "🏋️", title: "Fitness & Wellness", desc: "Transformation content, workout Reels, and class schedules for gyms and wellness studios." },
  { ico: "📸", title: "Photography", desc: "Portfolio showcases, behind-the-scenes content, and booking enquiry generation." },
  { ico: "🛍️", title: "Retail & E-commerce", desc: "Product Reels, Instagram Shopping, and conversion-focused ad campaigns for online stores." },
  { ico: "🧴", title: "Skincare & Beauty Products", desc: "Ingredient storytelling, before-and-after results, and influencer partnerships." },
  { ico: "🎉", title: "Event Planning", desc: "Venue showcases, styled shoots, and client testimonial content that builds credibility." },
];

const process = [
  { n: 1, title: "Free audit", desc: "We review your current Instagram presence, analyse your competitors, and identify your biggest growth opportunities." },
  { n: 2, title: "Strategy build", desc: "We create a custom content strategy, posting schedule, ad plan, and KPIs aligned to your business goals." },
  { n: 3, title: "Content creation", desc: "We produce your first month of content — graphics, captions, Reels, and Stories — and share for approval." },
  { n: 4, title: "Launch & manage", desc: "We go live, launch any paid campaigns, and begin active community management on your account." },
  { n: 5, title: "Report & grow", desc: "Monthly reports showing reach, engagement, follower growth, ad results, and next month's plan." },
];

const pricing = [
  { name: "Starter", price: "LKR 30,000", note: "For businesses starting or restarting their Instagram presence in Sri Lanka.", feats: [["12 feed posts per month", true], ["Custom graphic design", true], ["Caption writing (English)", true], ["Post scheduling & publishing", true], ["Monthly analytics report", true], ["Hashtag strategy", true], ["Reels production", false], ["Stories management", false], ["Instagram Ads management", false]] as [string, boolean][], cta: "Instagram%20Starter%20package", featured: false },
  { name: "Growth", price: "LKR 60,000", note: "For brands that want consistent growth, Reels, and paid advertising reach.", feats: [["20 feed posts per month", true], ["4 Reels per month (produced)", true], ["Daily Stories management", true], ["English + Sinhala captions", true], ["Community management & DM handling", true], ["Instagram Ads (up to LKR 25,000 ad spend)", true], ["Monthly growth report", true], ["Story Highlights creation", true], ["Instagram Shopping setup", false]] as [string, boolean][], cta: "Instagram%20Growth%20package", featured: true },
  { name: "Pro", price: "LKR 100,000", note: "Full Instagram management with premium video, shopping, and ads.", feats: [["30 feed posts per month", true], ["8 Reels per month (fully produced)", true], ["Daily Stories + Highlights management", true], ["Bilingual captions (English + Sinhala)", true], ["Full community management", true], ["Instagram Ads (up to LKR 60,000 ad spend)", true], ["Instagram Shopping setup & management", true], ["Weekly performance reports", true]] as [string, boolean][], cta: "Instagram%20Pro%20package", featured: false },
];

const results = [
  { n: "340%", l: "Average engagement growth within 3 months of professional management" },
  { n: "10×", l: "More Reel views than standard posts for the same Sri Lankan audiences" },
  { n: "2,800", l: "Followers gained in 3 months for a Colombo restaurant from zero following" },
  { n: "240%", l: "Online sales revenue growth for a fashion brand using Instagram Shopping + Ads" },
];

const faqs = [
  { q: "How much does Instagram marketing cost in Sri Lanka?", a: "Instagram marketing packages in Sri Lanka start from LKR 30,000 per month for basic content management and go up to LKR 100,000 per month for full management including Reels production, Stories, community management, and Instagram Ads. Ad spend is charged separately. Cypher Digital offers three packages — Starter, Growth, and Pro — with no lock-in contracts." },
  { q: "How many Instagram users are there in Sri Lanka?", a: "There are over 2 million active Instagram users in Sri Lanka in 2026, with the largest demographic being 18 to 34 year olds in urban areas. Instagram is particularly strong in Colombo, Kandy, Galle, and other major cities. The platform is the dominant channel for visual consumer brands — restaurants, fashion, beauty, hospitality, and lifestyle businesses." },
  { q: "What is the best Instagram content for Sri Lankan businesses?", a: "Instagram Reels consistently deliver the highest organic reach for Sri Lankan businesses in 2026 — 3 to 10 times more reach than standard posts. Food, fashion, beauty, and hospitality businesses see particularly strong results with Reels showing authentic behind-the-scenes content, transformation videos, and product showcases. Carousel posts generate the highest save rates. Stories drive daily engagement and DMs." },
  { q: "How do Instagram Ads work in Sri Lanka?", a: "Instagram Ads in Sri Lanka are managed through Meta Ads Manager. You can target audiences by age, location (Colombo, island-wide, or specific districts), interests, behaviours, and custom audiences. Ads appear in the feed, Stories, Reels feed, and Explore page. We handle complete campaign setup, creative production, audience targeting, and ongoing optimisation with monthly performance reporting." },
  { q: "Do you create Reels for businesses in Sri Lanka?", a: "Yes. Cypher Digital creates professional Instagram Reels for businesses across Sri Lanka. Our Growth and Pro packages include fully produced Reels every month — including content strategy, scripting, filming direction, professional editing, audio selection, captions, and hashtag strategy. Reels are the most important Instagram investment for organic reach in 2026 and we specialise in producing them consistently for Sri Lankan businesses." },
  { q: "Can you manage Instagram in Sinhala?", a: "Yes. All our Growth and Pro packages include bilingual content creation in English and Sinhala. We have native Sinhala writers on the team who understand local cultural nuance, tone, and how Sri Lankan audiences engage with Sinhala content on Instagram. Bilingual captions consistently outperform English-only content in reach and engagement for businesses targeting mass Sri Lankan consumer audiences." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Instagram Marketing Sri Lanka",
  alternateName: "Instagram Advertising Sri Lanka",
  provider: { "@type": "LocalBusiness", name: "Cypher Digital", url: "https://cypherdigital.lk", telephone: "+94701772626", address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" } },
  areaServed: "Sri Lanka",
  description: "Professional Instagram marketing and advertising services in Sri Lanka. Instagram Reels, Stories, content creation, community management and Instagram Ads for businesses in Colombo and across Sri Lanka.",
  offers: [
    { "@type": "Offer", name: "Instagram Starter Package", priceCurrency: "LKR", price: "30000" },
    { "@type": "Offer", name: "Instagram Growth Package", priceCurrency: "LKR", price: "60000" },
    { "@type": "Offer", name: "Instagram Pro Package", priceCurrency: "LKR", price: "100000" },
  ],
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const InstagramMarketing = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.text = JSON.stringify(serviceSchema);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.text = JSON.stringify(faqSchema);
    document.head.appendChild(s1);
    document.head.appendChild(s2);
    return () => { s1.remove(); s2.remove(); };
  }, []);

  return (
    <>
      <SEOHead
        title="Instagram Marketing Sri Lanka — Instagram Ads & Management 2026 | Cypher Digital"
        description="Instagram marketing Sri Lanka — professional Instagram management, Reels, Stories & Instagram Ads for Sri Lankan businesses. Grow your brand & generate leads. Free consultation."
        canonical="https://cypherdigital.lk/instagram-marketing-sri-lanka"
      />
      <PageBreadcrumb items={[{ label: "Services", href: "/" }, { label: "Instagram Marketing Sri Lanka" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary/30 text-background py-24 md:py-32">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-background/90 text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-medium">
            <Instagram className="w-3.5 h-3.5" /> Instagram Marketing Sri Lanka
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mb-6">
            Grow Your Brand on <span className="text-primary-foreground italic font-light">Instagram</span> in Sri Lanka
          </h1>
          <p className="text-lg text-background/70 max-w-2xl mb-10 leading-relaxed">
            Sri Lanka's specialist Instagram marketing agency — Reels production, content creation, community management, and Instagram Ads that build real audiences and generate consistent leads for your business.
          </p>
          <div className="flex flex-wrap gap-3 mb-14">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold border-none">
              Get a Free Instagram Audit
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-background/30 text-background hover:border-background/60 font-medium transition">
              Talk to an Expert
            </Link>
          </div>
          <div className="border-t border-background/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[["2M+", "Instagram users in Sri Lanka"], ["8–15%", "Engagement rate we achieve"], ["LKR 30K", "Starting price per month"], ["5.0★", "Client rating"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-heading text-3xl md:text-4xl font-bold mb-1">{n}</div>
                <div className="text-xs text-background/50">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurWorkSection service="Instagram marketing" />

      {/* WHY INSTAGRAM */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Why Instagram Sri Lanka</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-12 max-w-3xl">Why Instagram is essential for your Sri Lankan business in 2026</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Instagram is Sri Lanka's most visually powerful marketing platform. With over <strong className="text-foreground">2 million active users</strong> — predominantly aged 18 to 35 in urban areas — Instagram is where Sri Lankan consumers discover new brands, make purchasing decisions, and engage with businesses they want to buy from.</p>
              <p>Unlike Facebook, which is used by broad demographic groups for general content, Instagram's audience is specifically <strong className="text-foreground">aspirational and purchase-oriented</strong>. Sri Lankan users browse Instagram to find new restaurants to visit, fashion brands to buy from, beauty services to book, and lifestyle products to purchase. This buying mindset makes Instagram one of the highest-converting platforms for consumer businesses in Sri Lanka.</p>
              <p>In 2026, <strong className="text-foreground">Instagram Reels</strong> have become the most powerful organic content format available to Sri Lankan businesses. A single well-produced Reel from a restaurant in Colombo or a boutique in Kandy can reach tens of thousands of potential customers who have never heard of the business — for free.</p>
              <p>For businesses that sell anything visual — food, fashion, beauty, interiors, events, travel, fitness — Instagram is not optional. It is your most important marketing channel.</p>
              <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-5">
                <p className="text-foreground font-medium m-0">Instagram generates the highest engagement rates of any social platform in Sri Lanka for consumer brands — typically 3 to 8 times higher than Facebook for the same content.</p>
              </div>
            </div>
            <div className="space-y-3">
              {stats.map(({ icon: Icon, num, desc }) => (
                <Card key={num} className="p-5 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-primary leading-none mb-1">{num}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Instagram Services</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Complete Instagram marketing services for Sri Lankan businesses</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">From content creation to Instagram Ads management — everything your business needs to grow on Instagram in Sri Lanka.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, items }) => (
              <Card key={title} className="p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it} className="text-sm flex gap-2 text-muted-foreground">
                      <span className="text-primary">→</span> {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT FORMATS */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary-foreground font-semibold mb-3">Instagram Content Formats</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Every Instagram format we use for Sri Lankan businesses</h2>
          <p className="text-background/60 max-w-2xl mb-12">Each Instagram format serves a different purpose. We use all of them strategically to maximise reach, engagement, and leads.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((f) => (
              <div key={f.n} className="border border-background/10 rounded-xl p-6 bg-background/5">
                <div className="font-heading text-2xl text-primary-foreground/70 mb-2">{f.n}</div>
                <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-background/60 mb-4">{f.desc}</p>
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/20 text-background/90">{f.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Who We Help</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Instagram marketing for every visual business in Sri Lanka</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">Instagram works best for businesses where the product or service looks good on camera. If you are in any of these industries, Instagram is your most powerful marketing channel.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((i) => (
              <Card key={i.title} className="p-6">
                <div className="text-3xl mb-3">{i.ico}</div>
                <h3 className="font-heading text-lg font-bold mb-2">{i.title}</h3>
                <p className="text-sm text-muted-foreground">{i.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Instagram Marketing Packages Sri Lanka</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Transparent Instagram marketing pricing — no hidden costs</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">All packages include content creation, scheduling, and monthly reporting. Ad spend is separate. No lock-in contracts.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <Card key={p.name} className={`p-8 relative ${p.featured ? "border-primary border-2 shadow-xl md:scale-105" : ""}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</div>
                )}
                <div className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">{p.name}</div>
                <div className="font-heading text-4xl font-extrabold mb-2">{p.price}<span className="text-base text-muted-foreground font-normal">/month</span></div>
                <p className="text-sm text-muted-foreground mb-6">{p.note}</p>
                <ul className="space-y-2.5 mb-8">
                  {p.feats.map(([f, on]) => (
                    <li key={f} className={`text-sm flex gap-2 ${on ? "" : "text-muted-foreground/60 line-through"}`}>
                      {on ? <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> : <X className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/94701772626?text=${p.cta}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 rounded-lg bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold border-none">Get Started</a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">How We Work</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-12 max-w-3xl">How we launch your Instagram marketing in Sri Lanka</h2>
          <div className="grid md:grid-cols-5 gap-5">
            {process.map((p) => (
              <Card key={p.n} className="p-6">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">{p.n}</div>
                <h3 className="font-heading text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary-foreground font-semibold mb-3">Results</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">What Instagram marketing delivers for Sri Lankan businesses</h2>
          <p className="text-background/60 max-w-2xl mb-12">Real results from our Instagram marketing campaigns across Sri Lanka.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r) => (
              <div key={r.l} className="border border-background/10 rounded-xl p-6 bg-background/5">
                <div className="font-heading text-4xl font-extrabold text-primary-foreground mb-3">{r.n}</div>
                <div className="text-sm text-background/60">{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Complete Guide</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">Instagram marketing in Sri Lanka — the complete 2026 guide</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Instagram marketing in Sri Lanka has evolved from a platform for personal photo sharing into the most powerful visual marketing channel available to Sri Lankan consumer businesses. With over 2 million active users in Sri Lanka and engagement rates that consistently outperform every other social platform, Instagram is where Sri Lankan brands are built, reputations are established, and customers are won.</p>
            <p>This guide covers everything you need to know about Instagram marketing in Sri Lanka in 2026 — from understanding your audience to creating Reels that go viral to running Instagram Ads that generate consistent leads and sales for your business.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">The Instagram landscape in Sri Lanka in 2026</h3>
            <p>Instagram's user base in Sri Lanka is predominantly young, urban, and aspirational. The largest demographic is 18 to 34 year olds in Colombo and other urban areas — professionals, students, and young families with disposable income and strong purchase intent. This audience is actively looking for inspiration: new places to eat, new brands to wear, new services to try, and new experiences to book.</p>
            <p>Unlike Facebook — where users scroll through news, family updates, and community groups — Instagram users are in a fundamentally different mindset. They are browsing for discovery. This makes Instagram the highest-converting social platform for consumer businesses in Sri Lanka, particularly in the food and beverage, fashion, beauty, hospitality, and lifestyle sectors.</p>
            <p>The key shift in 2026 is the dominance of Reels. Instagram's algorithm now heavily prioritises Reels content in the feed and the Explore page — giving businesses the ability to reach completely new audiences without any paid advertising budget.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">Instagram marketing strategy for Sri Lankan businesses</h3>
            <p>An effective Instagram marketing strategy for a Sri Lankan business combines three elements: a strong visual brand identity, consistent and varied content types, and an active community management approach. Each element supports the others — the visual identity gives content cohesion, varied content types maximise reach across different algorithms, and community management converts reach into relationships and sales.</p>
            <p><strong className="text-foreground">Visual brand identity</strong> means that every post on your Instagram feed looks like it belongs to the same brand. Consistent colours, fonts, photography style, and graphic design create a professional impression that builds trust.</p>
            <p><strong className="text-foreground">Content variety</strong> is what keeps your audience engaged and maximises your reach. A healthy content mix for a Sri Lankan business in 2026 includes Reels for organic discovery, carousel posts for detailed storytelling and high save rates, single image posts for polished brand moments, and Stories for daily relationship-building.</p>
            <p><strong className="text-foreground">Community management</strong> is the most underestimated element. Responding to every comment within the first hour of posting significantly increases the reach of that post — Instagram's algorithm measures engagement velocity and boosts posts that receive rapid engagement after publishing.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">Instagram Reels strategy for Sri Lankan businesses</h3>
            <p>Reels are the single most important Instagram investment for Sri Lankan businesses in 2026. They consistently deliver 3 to 10 times the reach of standard feed posts, they appear on the Explore page to completely new audiences, and they are favoured by Instagram's algorithm above all other content formats.</p>
            <p>The most effective Reels for Sri Lankan businesses hook the viewer in the first one to two seconds, are 15 to 30 seconds long, use trending audio that fits the mood of the content, and include a clear call to action. Industries that consistently achieve viral reach through Reels in Sri Lanka include restaurants, fashion brands, beauty and salon businesses, and hospitality businesses.</p>
            <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-5">
              <p className="text-foreground font-medium m-0">The biggest mistake Sri Lankan businesses make with Reels is waiting until they have "professional" equipment. The most successful Reels on Sri Lankan Instagram are shot on smartphones, in natural light, with authentic subject matter.</p>
            </div>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">Instagram advertising in Sri Lanka — how it works</h3>
            <p>Instagram advertising in Sri Lanka is managed through Meta Ads Manager and gives businesses access to Instagram's full user base with precise targeting. You can target by age and gender, by location (Colombo specifically, Kandy, or island-wide), by interests, by behaviour, and by custom audiences.</p>
            <p>For Sri Lankan businesses new to Instagram advertising, the most effective starting point is retargeting. Running ads specifically to people who have already engaged with your Instagram content consistently delivers the highest return on ad spend because this audience is already warm.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">Instagram content creation for Sri Lankan audiences</h3>
            <p>Creating content that resonates with Sri Lankan Instagram audiences requires an understanding of local culture, language, and consumer behaviour. Sri Lankan audiences respond strongly to bilingual content — captions in both English and Sinhala consistently outperform English-only captions for businesses targeting mass consumer audiences.</p>
            <p>Seasonal and cultural relevance is also critical. Avurudu in April, Vesak in May, Christmas in December, and major sporting events like cricket matches are all periods when culturally relevant content dramatically outperforms generic branded content.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">Getting started with Instagram marketing in Sri Lanka</h3>
            <p>Working with a specialist <Link to="/" className="text-primary hover:underline font-semibold">digital marketing agency in Sri Lanka</Link> that understands Instagram's algorithm, content creation, and the Sri Lankan consumer market will dramatically accelerate your results.</p>
            <p>Read more: <Link to="/blog/instagram-marketing-strategy-sri-lankan-businesses" className="text-primary hover:underline font-semibold">Instagram marketing strategy for Sri Lankan businesses</Link>.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">FAQ</div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold">Frequently asked questions about Instagram marketing in Sri Lanka</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <Card key={f.q} className="p-6">
                <h3 className="font-heading text-base font-bold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest opacity-70 mb-3">Get Started</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-2xl mx-auto">Ready to grow your brand on Instagram in Sri Lanka?</h2>
          <p className="opacity-80 max-w-xl mx-auto mb-10">Get a free Instagram audit and custom package recommendation — no obligation, no commitment.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold border-none">Get a Free Instagram Audit</a>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/50 text-primary-foreground hover:border-primary-foreground font-medium transition">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <div className="py-8 border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Related services:{" "}
          <Link to="/" className="text-primary hover:underline">digital marketing agency in Sri Lanka</Link> ·{" "}
          <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">social media management in Sri Lanka</Link> ·{" "}
          <Link to="/advertising-in-sri-lanka" className="text-primary hover:underline">advertising in Sri Lanka</Link> ·{" "}
          <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook Ads Sri Lanka</Link> ·{" "}
          <Link to="/linkedin-marketing-sri-lanka" className="text-primary hover:underline">LinkedIn marketing Sri Lanka</Link>
        </div>
      </div>
    </>
  );
};

export default InstagramMarketing;
