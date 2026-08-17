import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const AIVideoProduction = () => {
  const [, setHoveredCard] = useState<number | null>(null);

  const videoTypes = [
    { icon: "📱", title: "Social Media Reels", desc: "Short-form vertical videos for Facebook Reels, Instagram, and TikTok. AI-assisted pipeline delivers scroll-stopping reels with captions, music, and brand visuals in 24–48 hours.", best: "Retail, F&B, fashion, salons.", tag: "Most Popular" },
    { icon: "🎬", title: "Brand & Promotional Videos", desc: "60–90 second brand films combining AI-generated visuals, professional voiceover, and motion graphics into a cinematic piece for your website, ads, and social.", best: "New launches, rebrands, market entries.", tag: null },
    { icon: "📢", title: "Facebook & Google Video Ads", desc: "High-converting video ad creatives structured for Facebook Ads, Google Display, and YouTube pre-roll — optimised for the first 3 seconds and built to drive clicks.", best: "Businesses running paid campaigns.", tag: null },
    { icon: "📦", title: "Product Showcase Videos", desc: "Your product in action with clean visuals, dynamic transitions, voiceover narration, and branded graphics. Increases purchase intent and reduces hesitation.", best: "E-commerce, manufacturers, product brands.", tag: null },
    { icon: "⭐", title: "Customer Testimonial Videos", desc: "Polished testimonial edits featuring real customers — with captions, music, and branded lower-thirds. Video testimonials convert 34% better than written reviews.", best: "Services, healthcare, education, real estate.", tag: null },
    { icon: "🤖", title: "AI Avatar & Presenter Videos", desc: "Professional on-screen presenter videos using AI avatar technology — no camera needed. Sinhala, Tamil, or English with realistic lip-sync.", best: "Education, healthcare, finance, e-learning.", tag: "AI-Powered" },
    { icon: "📺", title: "TV Commercial Production (TVC)", desc: "Full TVC production for Sri Lankan television — concept, scriptwriting, AI-enhanced post-production, colour grading, and broadcast-ready delivery.", best: "Brands advertising on ITN, Sirasa, Hiru, Derana.", tag: null },
  ];

  const steps = [
    { num: "01", title: "Brief & Strategy", desc: "Discovery call or WhatsApp chat to define goals, audience, format, length, and platform strategy." },
    { num: "02", title: "AI Script Writing", desc: "AI generates and refines a tailored script in minutes. You review and approve before production." },
    { num: "03", title: "Visuals & Voiceover", desc: "AI tools generate visuals, motion graphics, and voiceover. AI avatars are built and rendered here." },
    { num: "04", title: "Editing & Refinement", desc: "Our in-house editors review every cut, apply colour grading, refine transitions, and add captions." },
    { num: "05", title: "Delivery & Formatting", desc: "Final video delivered in 9:16, 1:1, and 16:9 — typically within 48 hours of brief approval." },
  ];

  const packages = [
    { name: "Starter", sub: "Short-form social content", price: "From LKR 15,000", features: ["1 × 30-second social reel", "AI script writing", "Subtitles / captions", "Licensed background music", "1 format export (9:16)", "2 rounds of revisions"], featured: false },
    { name: "Growth", sub: "Brand + social content pack", price: "From LKR 45,000", features: ["1 × 60–90 sec brand video", "3 × social media reels", "AI voiceover (Sinhala or English)", "Motion graphics & lower-thirds", "3 format exports (9:16, 1:1, 16:9)", "3 rounds of revisions"], featured: true },
    { name: "Enterprise", sub: "Full video production suite", price: "Custom quote", features: ["Multi-video campaign packages", "AI avatar presenter videos", "Dedicated editor & account manager", "On-site filming (Colombo & surrounds)", "TV commercial production", "Unlimited revisions"], featured: false },
  ];

  const whyUs = [
    { icon: "✨", title: "AI Speed Without Sacrificing Quality", desc: "Runway, HeyGen, ElevenLabs, and Adobe Firefly combined with human oversight at every stage." },
    { icon: "🇱🇰", title: "Built for the Sri Lankan Market", desc: "We know what works on local social, the ad formats that convert in Colombo vs Kandy, and language preferences." },
    { icon: "💰", title: "Transparent, Fixed-Price Packages in LKR", desc: "No surprise bills, no hidden shoot-day costs, no overseas invoicing in USD. Affordable for local businesses." },
    { icon: "🎯", title: "Strategy-First Production", desc: "Every video is built around a clear objective — awareness, lead gen, or conversion — with hook and CTA designed to achieve it." },
    { icon: "👥", title: "Dedicated Creative Team", desc: "You work directly with our in-house Sri Lanka team — your account manager, scriptwriter, and editor are reachable on WhatsApp." },
    { icon: "📈", title: "Results Across 500+ Businesses", desc: "From solo entrepreneurs to enterprise clients across Colombo, Kandy, Galle, Negombo, Jaffna, and Kurunegala. +340% avg paid video ROI." },
  ];

  const industries = [
    { title: "Retail & Fashion", desc: "Product showcase reels, seasonal campaign videos, and TikTok content for fashion and retail brands." },
    { title: "Restaurants & Food", desc: "Mouth-watering food videos, delivery promo reels, and brand stories for restaurants, cafés, and caterers." },
    { title: "Real Estate", desc: "Property tour videos, project launch films, and developer brand videos across Colombo and Sri Lanka." },
    { title: "Healthcare & Clinics", desc: "Patient education videos, doctor intros, and service explainers for hospitals, dental and beauty clinics." },
    { title: "Education Institutes", desc: "Admission promos, course previews, campus tours, and AI avatar explainers for schools and tuition centres." },
    { title: "Financial Services", desc: "Product explainers for insurance, loans, investment, and banking — in Sinhala, Tamil, and English." },
    { title: "Technology & SaaS", desc: "Product demos, explainer animations, and culture films for Sri Lanka's growing tech sector." },
    { title: "Automotive", desc: "Vehicle showcase videos, dealer promo reels, and launch films for car brands and dealerships." },
  ];

  const comparison = [
    ["Turnaround", "48–72 hours", "2–4 weeks"],
    ["Starting Cost", "LKR 15,000", "LKR 80,000+"],
    ["Script Writing", "Included", "Extra cost"],
    ["Revisions", "Included", "Charged per revision"],
    ["Language Options", "Sinhala, Tamil, English", "Depends on talent"],
    ["Platform Formatting", "All formats included", "Usually one format"],
    ["Scalability", "Unlimited volume", "Limited by crew"],
    ["Availability", "7 days a week", "Business hours only"],
  ];

  const locations = [
    ["Colombo", "Largest market for digital video production in Sri Lanka"],
    ["Kandy", "Education, tourism, and retail businesses"],
    ["Galle", "Tourism, hospitality, and F&B in the south"],
    ["Negombo", "Hospitality, logistics, and manufacturing"],
    ["Jaffna", "Northern market in Tamil and English"],
    ["Kurunegala", "Retail, agricultural, and manufacturing"],
    ["Ratnapura", "Gemstone industry, retail, and services"],
  ];

  const testimonials = [
    { quote: "Cypher Digital produced our product launch video in under 48 hours. The quality was beyond what we expected and it's already our best-performing ad creative.", author: "E-commerce brand owner, Colombo" },
    { quote: "We were spending LKR 100,000+ on traditional video production. Cypher Digital delivers the same quality for a quarter of the price with AI. Game-changer for our marketing budget.", author: "Restaurant owner, Kandy" },
    { quote: "The AI avatar video they produced for our clinic is professional, multilingual, and has significantly increased patient inquiries from our Facebook ads.", author: "Healthcare clinic director, Colombo" },
  ];

  const faqs = [
    { q: "How much does AI video production cost in Sri Lanka?", a: "AI video production at Cypher Digital starts from LKR 15,000 for a short social media reel. Brand and promotional videos start from LKR 45,000. Enterprise packages with multiple videos and on-site filming are custom-quoted. All prices are in Sri Lankan rupees with no hidden fees." },
    { q: "How long does AI video production take?", a: "Most projects are delivered within 48 hours of script approval. Complex brand films or multi-video packages take 3–5 business days. Rush delivery is available for time-sensitive campaigns." },
    { q: "Do you produce videos in Sinhala?", a: "Yes. We produce video content in Sinhala, Tamil, and English using AI voiceover technology and bilingual captioning. Sinhala-language videos are particularly effective for businesses targeting local audiences across Sri Lanka." },
    { q: "Can you produce video ads ready to run on Facebook and Google?", a: "Yes. Every video ad we produce is formatted specifically for the platform — including the correct aspect ratios, file formats, and length requirements for Facebook Ads, Google Display, YouTube pre-roll, and TikTok." },
    { q: "Do you offer video production outside Colombo?", a: "Yes. Most of our AI video production services are delivered remotely and are available to businesses across Sri Lanka — Kandy, Galle, Negombo, Jaffna, and beyond. On-site filming is available in Colombo and the Western Province." },
    { q: "What makes AI video production different from traditional video production?", a: "AI video production uses artificial intelligence tools for scripting, voiceover, visual generation, and editing — dramatically reducing turnaround time and cost. At Cypher Digital, every AI-assisted project is reviewed and refined by our in-house creative team, ensuring professional quality at every stage." },
    { q: "Can I use AI avatar videos for my Sri Lankan business?", a: "Yes. AI avatar videos are ideal for businesses that need a professional on-screen presenter without the cost of hiring and filming talent. They work exceptionally well for education institutes, healthcare, financial services, and any business needing multilingual content." },
    { q: "How do I get started?", a: "The easiest way is to WhatsApp us on +94 70 177 2626. Tell us what type of video you need and we'll recommend the right package and give you a fixed-price quote within a few hours." },
  ];


  const waBase = "https://wa.me/94701772626?text=";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Video Production Sri Lanka",
    provider: {
      "@type": "LocalBusiness",
      name: "Cypher Digital",
      url: "https://cypherdigital.lk",
      telephone: "+94701772626",
      address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47" },
    },
    serviceType: "AI Video Production",
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    description: "Professional AI video production services in Sri Lanka. Social media reels, brand films, ad creatives, product videos, and AI avatar videos for businesses in Colombo and across Sri Lanka.",
    offers: { "@type": "AggregateOffer", lowPrice: "15000", highPrice: "200000", priceCurrency: "LKR" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="AI Video Production Sri Lanka | Cypher Digital"
        description="Sri Lanka's #1 AI video production agency. Social reels, brand films & ad creatives from LKR 15,000. 48-hour delivery. Trusted by 500+ businesses. Free quote today."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#0a0a0a", background: "#fff" }}>
        <style>{`
          .aivp .syne { font-family: 'Syne', sans-serif; }
          .aivp .btn-primary { background: #FF6B2B; color: #fff; padding: 12px 22px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; border: none; transition: background 0.2s; text-decoration: none; }
          .aivp .btn-primary:hover { background: #e05518; }
          .aivp .btn-secondary { background: transparent; color: #0a0a0a; padding: 12px 22px; border-radius: 8px; font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(0,0,0,0.15); text-decoration: none; }
          .aivp .btn-secondary:hover { border-color: rgba(0,0,0,0.3); }
          .aivp .video-card { border: 0.5px solid rgba(0,0,0,0.09); border-radius: 10px; padding: 20px; background: #fff; position: relative; transition: border-color 0.2s, box-shadow 0.2s; }
          .aivp .video-card:hover { border-color: rgba(255,107,43,0.35); box-shadow: 0 2px 16px rgba(255,107,43,0.07); }
          .aivp .pkg-card { border: 0.5px solid rgba(0,0,0,0.09); border-radius: 10px; padding: 22px; background: #fff; transition: box-shadow 0.2s; position: relative; }
          .aivp .pkg-card.featured { border: 1.5px solid #FF6B2B; }
          .aivp .pkg-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
          .aivp .why-card { background: #f5f4f0; border-radius: 10px; padding: 18px; }
          .aivp .sample-thumb { border-radius: 8px; background: #f5f4f0; aspect-ratio: 16/9; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; border: 0.5px solid rgba(0,0,0,0.09); }
          .aivp .play-btn { width: 36px; height: 36px; background: rgba(255,107,43,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; color: #fff; }
          .aivp .wa-btn { background: #25D366; color: #fff; padding: 12px 22px; border-radius: 8px; font-size: 14px; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
          @media (max-width: 768px) {
            .aivp .grid-3 { grid-template-columns: 1fr !important; }
            .aivp .grid-2 { grid-template-columns: 1fr !important; }
            .aivp h1.hero { font-size: 36px !important; }
          }
        `}</style>

        <div className="aivp" style={{ maxWidth: 960, margin: "0 auto", padding: "80px 24px 0" }}>
          {/* HERO */}
          <section style={{ padding: "40px 0 48px", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,107,43,0.08)", border: "0.5px solid rgba(255,107,43,0.25)", borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: "#FF6B2B", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 22 }}>
              ✦ Sri Lanka's #1 AI Video Production Agency
            </div>
            <h1 className="syne hero" style={{ fontWeight: 800, fontSize: 52, lineHeight: 1.04, letterSpacing: "-1.5px", marginBottom: 18, maxWidth: 620 }}>
              AI Video Production<br />in <span style={{ color: "#FF6B2B" }}>Sri Lanka</span>
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.65, maxWidth: 520, marginBottom: 32 }}>
              Cinematic brand videos, social media reels, and high-converting ad creatives — produced with the latest AI tools and delivered in 48 hours. Trusted by 500+ businesses across Colombo and Sri Lanka.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <a href={waBase + encodeURIComponent("Hi, I want a free quote for AI video production")} target="_blank" rel="noreferrer" className="btn-primary">Get a Free Quote →</a>
              <a href="#packages" className="btn-secondary">View Packages</a>
            </div>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(0,0,0,0.09)", border: "0.5px solid rgba(0,0,0,0.09)", borderRadius: 10, overflow: "hidden", maxWidth: 620 }}>
              {[["500+", "Videos Produced"], ["48 hrs", "Avg Delivery"], ["LKR 15K", "Starting From"], ["5.0 ★", "Client Rating"]].map(([num, lbl]) => (
                <div key={lbl} style={{ background: "#fff", padding: "18px 12px", textAlign: "center" }}>
                  <div className="syne" style={{ fontWeight: 800, fontSize: 24 }}>{num}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 3 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </section>

          {/* INTRO */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Why Video Now</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 16, lineHeight: 1.2 }}>What Is AI Video Production — and Why Is It the Smartest Investment for Your Business in 2025?</h2>
            <div style={{ fontSize: 15, color: "#444", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: 14 }}>
              <p>Video is the highest-performing content format on every platform Sri Lankan businesses use — Facebook, Instagram, TikTok, YouTube, and Google. But traditional video production in Sri Lanka is expensive, slow, and inaccessible for most small and medium businesses.</p>
              <p>AI video production changes this completely.</p>
              <p>At Cypher Digital, we combine the latest AI tools — for scripting, voiceover, motion graphics, and editing — with our in-house creative team to produce professional videos at a fraction of the traditional cost and in half the time. The result: broadcast-quality video content that your competitors can't match, at a price your business can actually afford.</p>
              <p>From a single <a href={waBase + encodeURIComponent("Hi, I want a social media reel")} target="_blank" rel="noreferrer" style={{ color: "#FF6B2B", textDecoration: "underline" }}>social media reel</a> to a full brand film, our AI video production Sri Lanka service covers every format your business needs.</p>
            </div>
          </section>

          {/* VIDEO TYPES */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>What We Create</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>AI Video Production Services We Offer in Sri Lanka</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>Every video format your business needs — scripted, produced, and delivered.</p>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {videoTypes.map((v, i) => (
                <div key={i} className="video-card" onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}>
                  {v.tag && (
                    <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,107,43,0.1)", color: "#FF6B2B", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 10 }}>{v.tag}</div>
                  )}
                  <div style={{ width: 40, height: 40, background: "rgba(255,107,43,0.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>{v.icon}</div>
                  <h3 className="syne" style={{ fontWeight: 700, fontSize: 14, margin: 0, marginBottom: 6 }}>{v.title}</h3>
                  <div style={{ fontSize: 12, color: "#777", lineHeight: 1.55 }}>{v.desc}</div>
                  <div style={{ fontSize: 11, color: "#FF6B2B", marginTop: 10, fontWeight: 600 }}>Best for: <span style={{ color: "#555", fontWeight: 400 }}>{v.best}</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* OUR WORK */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Our Work</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>AI Video Production Work Samples</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>Real videos produced for Sri Lankan businesses — watch the quality before you decide.</p>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { id: "K5iZaX8-QaE", title: "AI Video Production Sample 1" },
                { id: "qKmgqf9IpUw", title: "AI Video Production Sample 2" },
                { id: "n2nJ6gJqOtU", title: "AI Video Production Sample 3" },
                { id: "2RHQ06uIEuA", title: "AI Video Production Sample 4" },
                { id: "vXoPdG-WYDs", title: "AI Video Production Sample 5" },
                { id: "LrBEZw9PPBo", title: "AI Video Production Sample 6" },
              ].map((video) => (
                <div key={video.id} style={{ borderRadius: 10, overflow: "hidden", border: "0.5px solid rgba(0,0,0,0.09)", background: "#fff" }}>
                  <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, background: "#000" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a href={waBase + encodeURIComponent("Hi, I saw your AI video work samples and want a similar video for my business")} target="_blank" rel="noreferrer" className="btn-primary">Get a Video Like This →</a>
            </div>
          </section>

          {/* AI PROCESS */}

          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ background: "#0a0a0a", borderRadius: 14, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", border: "36px solid rgba(255,107,43,0.12)", pointerEvents: "none" }} />
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 12 }}>Our Process</div>
              <h2 className="syne" style={{ fontWeight: 800, fontSize: 26, color: "#fff", marginBottom: 8, lineHeight: 1.15 }}>How Our AI Video Production Process Works — From Brief to Broadcast in 48 Hours</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 28, lineHeight: 1.6 }}>A production pipeline that combines AI speed with human creative judgment.</p>
              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {steps.map((s) => (
                  <div key={s.num} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ minWidth: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,107,43,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#FF6B2B", flexShrink: 0 }}>{s.num}</div>
                    <div>
                      <h3 style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: 0, marginBottom: 3 }}>{s.title}</h3>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PACKAGES */}
          <section id="packages" style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Pricing</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>AI Video Production Packages & Pricing in Sri Lanka</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>Transparent, fixed-price packages designed for Sri Lankan businesses. All packages include scripting, editing, music, captions & revisions.</p>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {packages.map((p) => (
                <div key={p.name} className={`pkg-card${p.featured ? " featured" : ""}`}>
                  {p.featured && (
                    <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: "#FF6B2B", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 14px", borderRadius: 10, whiteSpace: "nowrap" }}>Most Popular</div>
                  )}
                  <h3 className="syne" style={{ fontWeight: 700, fontSize: 15, margin: 0, marginBottom: 3 }}>{p.name}</h3>
                  <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{p.sub}</div>
                  <div className="syne" style={{ fontWeight: 800, fontSize: 22, marginBottom: 18 }}>{p.price}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, padding: 0, margin: 0 }}>
                    {p.features.map((f) => (
                      <li key={f} style={{ fontSize: 13, color: "#555", display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ color: "#22c55e", fontSize: 14 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waBase + encodeURIComponent(`Hi, I'm interested in the ${p.name} video package`)}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginTop: 20, display: "block", textAlign: "center", padding: "10px", borderRadius: 8, background: p.featured ? "#FF6B2B" : "transparent", color: p.featured ? "#fff" : "#FF6B2B", border: p.featured ? "none" : "1px solid rgba(255,107,43,0.4)", fontSize: 13, fontWeight: 600, textDecoration: "none" }}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#666", marginTop: 20, textAlign: "center" }}>Not sure which package is right for you? WhatsApp us on <a href={waBase + encodeURIComponent("Hi, I need help choosing an AI video package")} target="_blank" rel="noreferrer" style={{ color: "#FF6B2B", fontWeight: 600 }}>+94 70 177 2626</a> and we'll recommend the best option for your budget and goals.</p>
          </section>

          {/* WHY US */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Why Cypher Digital</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>Why Sri Lankan Businesses Choose Cypher Digital for AI Video Production</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>Six reasons 500+ businesses across Sri Lanka trust our AI video production team.</p>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
              {whyUs.map((w) => (
                <div key={w.title} className="why-card">
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 600, fontSize: 14, margin: 0, marginBottom: 5 }}>{w.title}</h3>
                  <div style={{ fontSize: 13, color: "#777", lineHeight: 1.5 }}>{w.desc}</div>
                </div>
              ))}
            </div>
          </section>


          {/* INDUSTRIES */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Industries</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>AI Video Production for Every Industry in Sri Lanka</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>Tailored to the specific needs and audiences of different industries across Sri Lanka.</p>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
              {industries.map((ind) => (
                <div key={ind.title} className="why-card">
                  <h3 style={{ fontWeight: 600, fontSize: 14, margin: 0, marginBottom: 5 }}>{ind.title}</h3>
                  <div style={{ fontSize: 13, color: "#777", lineHeight: 1.5 }}>{ind.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* COMPARISON */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Comparison</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>AI Video Production vs Traditional Video Production in Sri Lanka</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>AI video production doesn't mean lower quality — it means smarter production.</p>
            <div style={{ border: "0.5px solid rgba(0,0,0,0.09)", borderRadius: 10, overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#f5f4f0" }}>
                    <th style={{ textAlign: "left", padding: "12px 14px", fontWeight: 700 }}> </th>
                    <th style={{ textAlign: "left", padding: "12px 14px", fontWeight: 700, color: "#FF6B2B" }}>AI Video (Cypher Digital)</th>
                    <th style={{ textAlign: "left", padding: "12px 14px", fontWeight: 700, color: "#666" }}>Traditional Production</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([label, ai, trad], i) => (
                    <tr key={label} style={{ borderTop: "0.5px solid rgba(0,0,0,0.07)", background: i % 2 ? "#fafafa" : "#fff" }}>
                      <td style={{ padding: "11px 14px", fontWeight: 600 }}>{label}</td>
                      <td style={{ padding: "11px 14px", color: "#222" }}>{ai}</td>
                      <td style={{ padding: "11px 14px", color: "#777" }}>{trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* LOCATIONS */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Locations</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>AI Video Production Services Across Sri Lanka</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 24, lineHeight: 1.65 }}>Cypher Digital serves businesses across Sri Lanka from our base in Colombo. Most AI video production services are delivered remotely — meaning businesses in any part of the island can access the same quality and pricing as Colombo clients.</p>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
              {locations.map(([city, desc]) => (
                <div key={city} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
                  <span style={{ color: "#FF6B2B", fontWeight: 700, fontSize: 13, minWidth: 90 }}>{city}</span>
                  <span style={{ fontSize: 13, color: "#666" }}>{desc}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#666", marginTop: 18, lineHeight: 1.65 }}>For on-site filming in Colombo and the Western Province, our team can come to your location. For all other areas, we work remotely using your existing footage, AI-generated visuals, or phone-captured content.</p>
          </section>

          {/* TESTIMONIALS */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Testimonials</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>What Our Video Production Clients Say</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>5.0 ★ rating across 47+ verified client reviews.</p>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {testimonials.map((t, i) => (
                <div key={i} className="why-card">
                  <div style={{ fontSize: 14, color: "#FF6B2B", marginBottom: 8 }}>★★★★★</div>
                  <div style={{ fontSize: 13, color: "#333", lineHeight: 1.6, marginBottom: 12, fontStyle: "italic" }}>"{t.quote}"</div>
                  <div style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>— {t.author}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>FAQ</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 24, lineHeight: 1.2 }}>Frequently Asked Questions — AI Video Production Sri Lanka</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map((f, i) => (
                <details key={i} style={{ border: "0.5px solid rgba(0,0,0,0.09)", borderRadius: 10, padding: "14px 18px", background: "#fff" }}>
                  <summary style={{ cursor: "pointer", fontSize: 14, fontWeight: 600, color: "#0a0a0a", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span>{f.q}</span>
                    <span style={{ color: "#FF6B2B", fontSize: 18, fontWeight: 700 }}>+</span>
                  </summary>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginTop: 12 }}>{f.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED SERVICES */}
          <section style={{ padding: "32px 0 16px", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Related Services</div>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75 }}>
              Pair AI video with our{" "}
              <a href="/social-media-management-sri-lanka" style={{ color: "#FF6B2B" }}>social media management</a>,{" "}
              <a href="/facebook-ads-sri-lanka" style={{ color: "#FF6B2B" }}>Facebook advertising</a>,{" "}
              <a href="/google-ads-sri-lanka" style={{ color: "#FF6B2B" }}>Google Ads</a>,{" "}
              <a href="/graphic-design-sri-lanka" style={{ color: "#FF6B2B" }}>graphic design</a>, and{" "}
              <a href="/tiktok-marketing-sri-lanka" style={{ color: "#FF6B2B" }}>TikTok marketing</a> for a full-funnel campaign.
            </p>
          </section>

          {/* CTA */}
          <section style={{ padding: "48px 0 64px" }}>
            <div style={{ background: "#FF6B2B", borderRadius: 14, padding: "44px 32px", textAlign: "center" }}>
              <h2 className="syne" style={{ fontWeight: 800, fontSize: 30, color: "#fff", marginBottom: 10 }}>Ready to Create Your First AI Video in Sri Lanka?</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.92)", maxWidth: 560, margin: "0 auto 24px", lineHeight: 1.6 }}>Join 500+ businesses across Sri Lanka that trust Cypher Digital to produce their video content. Get a free consultation and fixed-price quote — no commitment required.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 22 }}>
                <a href={waBase + encodeURIComponent("Hi, I want a free quote for AI video production in Sri Lanka")} target="_blank" rel="noreferrer" className="wa-btn">💬 WhatsApp Us Now</a>
                <a href="tel:+94701772626" style={{ background: "rgba(255,255,255,0.18)", color: "#fff", padding: "12px 22px", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(255,255,255,0.35)" }}>📞 Call +94 70 177 2626</a>
              </div>
              <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", fontSize: 12, color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>
                <span>✅ 500+ videos produced</span>
                <span>✅ 48-hour delivery</span>
                <span>✅ Fixed LKR pricing</span>
                <span>✅ 5.0 ★ rating</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIVideoProduction;