import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import OurWorkSection from "@/components/OurWorkSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, CheckCircle2, MapPin } from "lucide-react";

const wa = (msg: string) => `https://wa.me/94701772626?text=${encodeURIComponent(msg)}`;

const reelTypes = [
  { icon: "🛍️", title: "Product reels", desc: "Show your product in action with crisp, scroll-stopping close-ups and demos." },
  { icon: "🍽️", title: "Food & restaurant reels", desc: "Mouth-watering food, plating and ambience shots for cafés and restaurants." },
  { icon: "🏨", title: "Hotel & property reels", desc: "Walkthroughs of rooms, villas and spaces that make people want to book." },
  { icon: "🎤", title: "Testimonials", desc: "Real customers and clients telling your story — trust that converts." },
  { icon: "👥", title: "Founder & team reels", desc: "Put a face to your brand with authentic founder and behind-the-team clips." },
  { icon: "🎬", title: "Behind-the-scenes", desc: "Show how it's made — the process content that audiences love to follow." },
  { icon: "🎉", title: "Event coverage", desc: "Launches, pop-ups and functions turned into shareable highlight reels." },
  { icon: "📣", title: "Promo & offer reels", desc: "Seasonal campaigns and offers built for reach and quick conversions." },
  { icon: "✨", title: "Brand-story reels", desc: "A cinematic take on who you are, what you do, and why it matters." },
];

const industries = ["Restaurants & cafés", "Hotels & villas", "Fashion & retail", "Real estate", "Salons & beauty", "Automotive", "Education", "E-commerce", "Small business"];

const steps = [
  { num: "01 / Book", title: "Tell us the vibe", desc: "Message us on WhatsApp with your brand and what you want to show. We lock a date and location." },
  { num: "02 / Film", title: "We come & shoot", desc: "Our team films on-site at your location — product, space, team or event — capturing enough for several reels in one visit." },
  { num: "03 / Deliver", title: "Edited & ready", desc: "We cut, caption and colour each reel, then send them ready to post. Up to 2 revisions included." },
];

const videoPricing = [
  { duration: "1 Minute", price: "LKR 25,000", includes: "Concept Development, Script Writing, Video Crew & Editing" },
  { duration: "1 – 3 Minutes", price: "LKR 35,000", includes: "Concept Development, Script Writing, Video Crew & Editing" },
  { duration: "5 Minutes & Above", price: "LKR 40,000 onwards", includes: "Concept Development, Script Writing, Video Crew & Editing" },
];

const aiCharacterPricing = [
  { duration: "15–30 sec reel", price: "LKR 18,000", includes: "AI Character Creation, AI Voice-over, Video Production & Editing" },
  { duration: "60 sec reel/ad", price: "LKR 30,000", includes: "AI Character Creation, AI Voice-over, Video Production & Editing" },
  { duration: "90 sec brand video", price: "LKR 45,000", includes: "AI Character Creation, AI Voice-over, Video Production & Editing" },
];

const videoPackageIncludes = [
  "Concept Development",
  "Script Writing",
  "Professional Video Crew",
  "Video Shooting",
  "Professional Video Editing",
];

const aiCharacterPackageIncludes = [
  "AI Character Creation",
  "AI Voice-over",
  "Script/Content Integration",
  "AI Video Production",
  "Video Editing",
];




const included = [
  { icon: "📍", title: "On-site filming", desc: "We travel to your location and shoot — no studio booking needed." },
  { icon: "✂️", title: "Full editing", desc: "Cuts, transitions, colour, music and captions — delivered post-ready." },
  { icon: "📱", title: "Vertical format", desc: "Shot 9:16 for Instagram Reels, TikTok and Facebook Reels." },
  { icon: "🗣️", title: "Sinhala or English", desc: "On-screen captions in the language your audience actually speaks." },
  { icon: "🔁", title: "2 revisions", desc: "Two rounds of tweaks per reel included, so it lands right." },
  { icon: "⚡", title: "Fast turnaround", desc: "Edited reels back to you within days of the shoot." },
];

const coverage = ["Colombo — free", "Battaramulla", "Nugegoda", "Dehiwala", "Gampaha", "Negombo", "Kalutara", "Panadura", "Kandy", "Galle", "Kurunegala", "Ratnapura", "Jaffna", "Trincomalee"];

const related = [
  { label: "AI Video Production", to: "/ai-video-production-sri-lanka", desc: "AI-generated video for brands that want striking content, fast." },
  { label: "Video Production", to: "/video-production-sri-lanka", desc: "Longer-form brand films, ads and corporate video, produced end to end." },
  { label: "TikTok Marketing", to: "/tiktok-marketing-sri-lanka", desc: "Viral-style TikTok content and ad campaigns built for under-35 audiences." },
  { label: "Instagram Marketing", to: "/instagram-marketing-sri-lanka", desc: "Grow reach with Reels, Stories and a content strategy that converts." },
  { label: "Social Media Management", to: "/social-media-management-sri-lanka", desc: "Full Facebook and Instagram management, from posts to ads to reporting." },
  { label: "Graphic Design", to: "/graphic-design-sri-lanka", desc: "Brand-consistent graphics, carousels and motion design for social." },
];

const faqs = [
  { q: "How much does video production cost in Sri Lanka?", a: "Professional video shoots start at LKR 25,000 for a 1-minute video, LKR 35,000 for 1–3 minutes, and LKR 40,000 onwards for 5 minutes or longer. Full AI character videos start at LKR 18,000 for a 15–30 second reel, LKR 30,000 for a 60 second reel/ad, and LKR 45,000 for a 90 second brand video. Final pricing depends on concept, production requirements, locations, talent, equipment, and other project requirements." },
  { q: "Do you come to our location to film the reels?", a: "Yes — for professional video shoots our team comes to your business, shop, restaurant, hotel, event or chosen spot anywhere in Sri Lanka, films on-site, and edits everything afterwards. You don't need a studio or any equipment of your own. AI character videos are produced digitally without an on-site visit." },
  { q: "What kinds of reels do you create?", a: "Product reels, brand-story reels, founder and team clips, customer testimonials, behind-the-scenes footage, event coverage, food and restaurant reels, hotel and property walkthroughs, and promotional videos — all shot vertical for Instagram Reels, TikTok and Facebook Reels. We also create AI character videos for brands that want digital avatars and voice-overs." },
  { q: "Which areas in Sri Lanka do you cover?", a: "We film nationwide. Colombo shoots are free of travel charges. We also cover Greater Colombo (Gampaha, Kalutara, Negombo, Panadura), regional cities (Kandy, Galle, Kurunegala, Ratnapura), and outstation locations like Jaffna and Trincomalee, with a travel fee by distance." },
  { q: "Is filming really free within Colombo?", a: "Yes. There's no travel fee for shoots within Colombo. Outside Colombo we add a flat fee by distance: Greater Colombo +LKR 6,000, regional areas +LKR 12,000, and outstation locations quoted per trip." },
  { q: "How long does it take to get the edited videos?", a: "Edited videos are usually delivered within a few days of the shoot or script approval. We handle cuts, transitions, colour, music and on-screen captions, and send each video ready to post." },
  { q: "Can one shoot cover a whole month of content?", a: "Yes. A single on-location shoot can produce multiple reels — enough to post consistently for a month. It's the most cost-effective way to book, and it means one trip instead of several." },
  { q: "Do you write captions in Sinhala?", a: "Yes. On-screen captions can be in Sinhala, English, or both — written by native writers so your reels connect with a local Sri Lankan audience." },
  { q: "How many revisions do I get?", a: "Up to 2 rounds of revisions per video are included. If you need more after that, extra edits are charged per revision." },
  { q: "Can I add video production to a monthly package?", a: "Yes. Video production and AI character videos can be booked as one-off projects or added on top of any Cypher Digital social media management package for ongoing monthly content." },
];


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "On-Location Social Media Reel Creation and AI Character Videos",
  provider: {
    "@type": "LocalBusiness",
    name: "Cypher Digital",
    telephone: "+94701772626",
    areaServed: "Sri Lanka",
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    url: "https://cypherdigital.lk/",
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  offers: { "@type": "AggregateOffer", priceCurrency: "LKR", lowPrice: "18000", highPrice: "40000", offerCount: "6" },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
    { "@type": "ListItem", position: 2, name: "Reel Creation Sri Lanka", item: "https://cypherdigital.lk/reel-creation-sri-lanka" },
  ],
};

const scrollToPricing = () => {
  document.getElementById('reel-pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const ReelCreation = () => (
  <>
    <SEOHead
      title="Reel Creation Sri Lanka | Video Production from LKR 15,000"
      description="Professional video shoots and AI character videos in Sri Lanka. On-location crew filming, script-to-edit delivery, and AI avatar production — from LKR 15,000."
      canonical="https://cypherdigital.lk/reel-creation-sri-lanka"
    />

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

    <PageBreadcrumb items={[{ label: "Reel Creation Sri Lanka" }]} />

    {/* HERO */}
    <section className="relative bg-[#FBF8F3] overflow-hidden py-14 md:py-20 border-b border-[#E4DCCD]">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#FF4438] mb-4">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF4438] opacity-60 animate-ping" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#FF4438]" />
              </span>
              On-location reel creation · Sri Lanka
            </p>
            <h1 className="font-heading text-[2.1rem] leading-[1.05] md:text-5xl lg:text-[3.9rem] font-extrabold tracking-[-0.02em] text-[#14203B] mb-5">
              Reel Creation in Sri Lanka — We Bring the Camera, You Get{" "}
              <span className="text-[#FF4438]">Scroll-Stopping Reels</span>
            </h1>
            <p className="text-[#243450] text-base md:text-lg leading-relaxed mb-7 max-w-[32em]">
              Our team comes to your location anywhere in Sri Lanka, films on-site, and fully edits every reel — ready to post.
              Shot vertical for Instagram Reels, TikTok and Facebook Reels.
            </p>
            <div className="flex flex-wrap gap-3.5 items-center">
              <a
                href={wa("Hi, I want to book an on-location reel shoot in Sri Lanka")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 h-[52px] px-7 rounded-full bg-[#FF4438] !text-white text-[15px] font-semibold shadow-[0_10px_26px_-8px_rgba(255,68,56,0.55)] hover:-translate-y-0.5 transition-transform border-none"
              >
                Book a Shoot on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#reel-pricing"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-full border-[1.5px] border-[#14203B] text-[#14203B] text-[15px] font-semibold hover:bg-[#14203B] hover:text-[#FBF8F3] transition-colors"
              >
                See pricing
              </a>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-7">
              <span className="font-heading text-[26px] font-extrabold text-[#14203B]">From LKR 18,000</span>
              <span className="font-mono text-[13px] text-[#6A7385]">AI character videos · professional shoots from LKR 25,000</span>
            </div>

            <button
              onClick={scrollToPricing}
              className="inline-flex items-center gap-2 mt-5 text-[13px] font-semibold text-[#14203B] hover:text-[#FF4438] transition-colors"
              aria-label="Scroll to pricing"
            >
              Scroll to pricing <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* REEL STAGE — signature phone stack */}
          <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[440px]">
            {/* back reels */}
            <div className="absolute top-8 right-2 md:right-4 w-[170px] md:w-[190px] aspect-[9/16] rounded-[22px] rotate-[9deg] bg-gradient-to-br from-[#243450] to-[#141f38] opacity-85 shadow-[0_24px_44px_-22px_rgba(20,32,59,0.5)]" />
            <div className="absolute bottom-6 left-0 md:left-2 w-[150px] md:w-[170px] aspect-[9/16] rounded-[20px] -rotate-[11deg] bg-gradient-to-br from-[#2b3d5c] to-[#1a2740] opacity-60" />
            {/* main reel */}
            <div className="relative z-10 w-[216px] md:w-[236px] aspect-[9/16] rounded-[26px] border-[6px] border-[#0e1729] bg-[#0e1729] overflow-hidden shadow-[0_30px_60px_-20px_rgba(20,32,59,0.55)]">
              <img
                src="https://i.ytimg.com/vi/oMxfgioWCdI/maxresdefault.jpg"
                onError={(e) => { const t = e.currentTarget; if (!t.dataset.fb) { t.dataset.fb = "1"; t.src = "https://i.ytimg.com/vi/oMxfgioWCdI/hqdefault.jpg"; } }}
                alt="Behind the scenes of a Cypher Digital on-location reel shoot in Sri Lanka"
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_15%,rgba(47,107,255,0.35),transparent_55%),radial-gradient(120%_80%_at_80%_90%,rgba(255,68,56,0.45),transparent_55%)]" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0e1729]/80 via-transparent to-[#0e1729]/40" />
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center font-mono text-[11px] opacity-90">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF4438] animate-pulse" /> REC
                  </span>
                  <span>0:07 / 0:15</span>
                </div>
                <div className="absolute right-3 bottom-[74px] flex flex-col gap-4 items-center">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-[34px] h-[34px] rounded-full bg-white/15 block" />
                  ))}
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl leading-tight">On-site.<br />Fully edited.</div>
                  <div className="text-[11px] opacity-80 mt-1">@yourbrand · Colombo 🇱🇰</div>
                </div>
              </div>
            </div>
            {/* float badges */}
            <div className="absolute top-4 left-0 md:-left-2 z-20 flex items-center gap-2 bg-[#FBF8F3] border border-[#E4DCCD] rounded-[14px] px-3.5 py-2.5 text-[13px] font-semibold text-[#14203B] shadow-[0_12px_28px_-14px_rgba(20,32,59,0.4)]">
              🎬 <span>One visit</span>
            </div>
            <div className="absolute bottom-8 right-0 md:-right-3 z-20 flex items-center gap-2 bg-[#FBF8F3] border border-[#E4DCCD] rounded-[14px] px-3.5 py-2.5 text-[13px] font-semibold text-[#14203B] shadow-[0_12px_28px_-14px_rgba(20,32,59,0.4)]">
              <span className="font-mono text-[15px] text-[#FF4438]">4×</span> reels a month
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* STRIP */}
    <div className="bg-[#14203B] text-[#FBF8F3] py-5">
      <div className="container mx-auto px-4 max-w-6xl flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-medium">
        {["Instagram Reels", "TikTok", "Facebook Reels", "Filmed on-location", "Edited in-house"].map((t) => (
          <span key={t} className="inline-flex items-center gap-2.5 opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4438]" /> {t}
          </span>
        ))}
      </div>
    </div>

    {/* INTRO */}
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Reel and video creation in Sri Lanka</h2>
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            Short-form video is how Sri Lankan brands get discovered in 2026 — and the reels that actually perform are shot on location, not pulled from stock.
            Cypher Digital is a Colombo-based video and social team creating on-location reels and videos for businesses across Sri Lanka. We come to you, film real footage
            of your product, space, food, team or event, and hand back fully edited vertical videos ready for Instagram Reels, TikTok and Facebook Reels.
          </p>
          <p>
            Most agencies recycle stock clips or make you come to a studio. We do the opposite: our team travels to your location, captures authentic footage that
            looks like your brand, and edits it in-house with cuts, colour, music and Sinhala or English captions. If you also want AI-generated visuals, avatars or
            faster turnaround, see our <Link to="/ai-video-production-sri-lanka" className="text-primary font-semibold hover:underline">AI video production in Sri Lanka</Link> service —
            many clients combine both.
          </p>
          <p>
            Pricing is simple and public. Professional video shoots start at LKR 25,000 for a 1-minute video, and full AI character videos start at LKR 18,000 for a 15–30 second reel.
            Rates are based on format, so you know exactly what you pay before you book. Reels also plug straight into our{" "}
            <Link to="/social-media-management-sri-lanka" className="text-primary font-semibold hover:underline">social media management</Link>,{" "}
            <Link to="/instagram-marketing-sri-lanka" className="text-primary font-semibold hover:underline">Instagram marketing</Link> and{" "}
            <Link to="/tiktok-marketing-sri-lanka" className="text-primary font-semibold hover:underline">TikTok marketing</Link> plans.
          </p>

        </div>
      </div>
    </section>

    {/* WHAT WE FILM */}
    <section className="py-12 md:py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">What we film</p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-3">Reels for every kind of business</h2>
        <p className="text-sm text-muted-foreground max-w-2xl mb-8">
          From a single product clip to a full brand story, we shoot the short-form formats that drive reach in Sri Lanka.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {reelTypes.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors">
              <div className="text-2xl mb-2">{r.icon}</div>
              <h3 className="font-heading text-base font-bold mb-1.5">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SOCIAL PROOF */}
    <OurWorkSection variant="preview" service="on-location reel creation" />

    {/* HOW IT WORKS */}
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">How it works</p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">One visit. A month of content.</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.num} className="bg-card border border-border rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{s.num}</p>
              <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING */}
    <section id="reel-pricing" className="py-12 md:py-16 bg-secondary border-y border-border scroll-mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">Transparent pricing</p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-3">Real video production rates in Sri Lanka</h2>
        <p className="text-sm text-muted-foreground max-w-2xl mb-8">
          Two clear options: on-location professional video shoots with our crew, or full AI character videos built from script to final edit. Final pricing may vary depending on the concept, production requirements, locations, talent, equipment, and other project requirements.
        </p>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border bg-muted/40">
              <h3 className="font-heading text-lg font-bold">Professional Video Shoot</h3>
              <p className="text-xs text-muted-foreground mt-1">On-location crew, filming & editing</p>
            </div>
            <div className="px-5 py-3 border-b border-border flex justify-between text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              <span>Duration</span><span>Price</span>
            </div>
            {videoPricing.map((p) => (
              <div key={p.duration} className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border last:border-0">
                <span className="text-sm font-semibold">{p.duration}</span>
                <span className="text-right">
                  <span className="block font-heading text-base font-extrabold">{p.price}</span>
                  <span className="block text-[11px] text-muted-foreground">{p.includes}</span>
                </span>
              </div>
            ))}
            <div className="px-5 py-4 border-t border-border bg-muted/20">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Package includes</p>
              <ul className="grid grid-cols-2 gap-1.5 text-sm text-muted-foreground">
                {videoPackageIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border bg-muted/40">
              <h3 className="font-heading text-lg font-bold">Full AI Character Videos</h3>
              <p className="text-xs text-muted-foreground mt-1">AI avatar, voice-over & production</p>
            </div>
            <div className="px-5 py-3 border-b border-border flex justify-between text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              <span>Duration</span><span>Price</span>
            </div>
            {aiCharacterPricing.map((p) => (
              <div key={p.duration} className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border last:border-0">
                <span className="text-sm font-semibold">{p.duration}</span>
                <span className="text-right">
                  <span className="block font-heading text-base font-extrabold">{p.price}</span>
                  <span className="block text-[11px] text-muted-foreground">{p.includes}</span>
                </span>
              </div>
            ))}
            <div className="px-5 py-4 border-t border-border bg-muted/20">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Package includes</p>
              <ul className="grid grid-cols-2 gap-1.5 text-sm text-muted-foreground">
                {aiCharacterPackageIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a
            href={wa("Hi, I want a quote for video production. My project is: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 h-12 px-6 rounded-xl bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm font-semibold border-none transition-colors"
          >
            Get my video quote on WhatsApp
          </a>
        </div>
      </div>
    </section>


    {/* INCLUDED */}
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">What you get</p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">Everything included in the price</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {included.map((i) => (
            <div key={i.title} className="bg-card border border-border rounded-2xl p-5">
              <div className="text-2xl mb-2">{i.icon}</div>
              <h3 className="font-heading text-base font-bold mb-1.5">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* INDUSTRIES + COVERAGE */}
    <section className="py-12 md:py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">Who we work with</p>
          <h2 className="font-heading text-xl md:text-2xl font-extrabold mb-4">Trusted across Sri Lankan industries</h2>
          <div className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-sm bg-card border border-border rounded-full px-3.5 py-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {i}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">Coverage</p>
          <h2 className="font-heading text-xl md:text-2xl font-extrabold mb-4">We film reels across Sri Lanka</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Based in Colombo, on the road nationwide. Filming within Colombo is free — everywhere else, a clear travel fee by distance.
          </p>
          <div className="flex flex-wrap gap-2">
            {coverage.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 text-sm bg-card border border-border rounded-full px-3.5 py-2">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">Questions</p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">Good to know before you book</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="bg-card border border-border rounded-2xl p-5 group">
              <summary className="font-heading text-base font-bold cursor-pointer list-none flex justify-between gap-3">
                {f.q}<span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* RELATED */}
    <section className="py-12 md:py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">Explore more</p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">Related services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {related.map((r) => (
            <Link key={r.to} to={r.to} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors">
              <h3 className="font-heading text-base font-bold mb-1.5 flex items-center gap-2">{r.label} <ArrowRight className="w-4 h-4 text-primary" /></h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-3">Let's shoot your next month of reels</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Message us on WhatsApp with your brand and location — we'll suggest the right number of reels and send a quote the same day.
        </p>
        <a
          href={wa("Hi, I want to book a reel shoot. My business and location: ")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto justify-center items-center gap-2 h-12 px-7 rounded-xl bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm font-semibold border-none transition-colors"
        >
          Book a Shoot on WhatsApp
        </a>
      </div>
    </section>
  </>
);

export default ReelCreation;
