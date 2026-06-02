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
              ✦ New · AI-Powered
            </div>
            <h1 className="syne hero" style={{ fontWeight: 800, fontSize: 52, lineHeight: 1.04, letterSpacing: "-1.5px", marginBottom: 18, maxWidth: 620 }}>
              AI Video Production<br />in <span style={{ color: "#FF6B2B" }}>Sri Lanka</span>
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.65, maxWidth: 520, marginBottom: 32 }}>
              Cinematic brand videos, social reels, and ad creatives — powered by the latest AI tools and produced by Sri Lanka's most trusted digital team in Colombo.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <a href={waBase + encodeURIComponent("Hi, I want a quote for AI video production")} target="_blank" rel="noreferrer" className="btn-primary">▶ View Packages</a>
            </div>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(0,0,0,0.09)", border: "0.5px solid rgba(0,0,0,0.09)", borderRadius: 10, overflow: "hidden", maxWidth: 480 }}>
              {[["500+", "Videos Produced"], ["48 hrs", "Avg Turnaround"], ["5.0 ★", "Client Rating"]].map(([num, lbl]) => (
                <div key={lbl} style={{ background: "#fff", padding: "18px 12px", textAlign: "center" }}>
                  <div className="syne" style={{ fontWeight: 800, fontSize: 24 }}>{num}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 3 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </section>

          {/* VIDEO TYPES */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>What We Create</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>Every Video Format Your Brand Needs</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>From 15-second social reels to full brand films — all AI-enhanced, all production-ready.</p>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {videoTypes.map((v, i) => (
                <div key={i} className="video-card" onMouseEnter={() => setHoveredCard(i)} onMouseLeave={() => setHoveredCard(null)}>
                  {v.tag && (
                    <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,107,43,0.1)", color: "#FF6B2B", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 10 }}>{v.tag}</div>
                  )}
                  <div style={{ width: 40, height: 40, background: "rgba(255,107,43,0.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>{v.icon}</div>
                  <div className="syne" style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{v.title}</div>
                  <div style={{ fontSize: 12, color: "#777", lineHeight: 1.55 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI PROCESS */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ background: "#0a0a0a", borderRadius: 14, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", border: "36px solid rgba(255,107,43,0.12)", pointerEvents: "none" }} />
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 12 }}>Our Process</div>
              <h2 className="syne" style={{ fontWeight: 800, fontSize: 26, color: "#fff", marginBottom: 8, lineHeight: 1.15 }}>From Brief to Broadcast — In 48 Hours</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 28, lineHeight: 1.6 }}>AI tools accelerate every step. Our creative team ensures every frame is on-brand.</p>
              <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {steps.map((s) => (
                  <div key={s.num} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ minWidth: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,107,43,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#FF6B2B", flexShrink: 0 }}>{s.num}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 3 }}>{s.title}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PACKAGES */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Pricing</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>Transparent Video Production Packages</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>All packages include scripting, editing, music, captions & revisions.</p>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {packages.map((p) => (
                <div key={p.name} className={`pkg-card${p.featured ? " featured" : ""}`}>
                  {p.featured && (
                    <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: "#FF6B2B", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 14px", borderRadius: 10, whiteSpace: "nowrap" }}>Most Popular</div>
                  )}
                  <div className="syne" style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{p.name}</div>
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
          </section>

          {/* WHY US */}
          <section style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Why Cypher Digital</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>Built for Sri Lankan Businesses</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>We understand the local market, the platforms, and what drives conversions in Sri Lanka.</p>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
              {whyUs.map((w) => (
                <div key={w.title} className="why-card">
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{w.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 5 }}>{w.title}</div>
                  <div style={{ fontSize: 13, color: "#777", lineHeight: 1.5 }}>{w.desc}</div>
                </div>
              ))}
            </div>
          </section>


          {/* CTA */}
          <section style={{ padding: "48px 0 64px" }}>
            <div style={{ background: "#FF6B2B", borderRadius: 14, padding: "44px 32px", textAlign: "center" }}>
              <h2 className="syne" style={{ fontWeight: 800, fontSize: 30, color: "#fff", marginBottom: 10 }}>Ready to Create Your First AI Video?</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginBottom: 28, lineHeight: 1.6 }}>Get a free consultation with our video team. We'll recommend the right format and package for your brand.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={waBase + encodeURIComponent("Hi, I want a free consultation for AI video production")} target="_blank" rel="noreferrer" className="wa-btn">💬 WhatsApp Us</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIVideoProduction;