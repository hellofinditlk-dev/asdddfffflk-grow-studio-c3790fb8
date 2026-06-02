import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const AIVideoProduction = () => {
  const [, setHoveredCard] = useState<number | null>(null);

  const videoTypes = [
    { icon: "📱", title: "Social Media Reels", desc: "Short-form vertical videos for TikTok, Instagram Reels, and Facebook Stories with AI-enhanced editing.", tag: "Most Popular" },
    { icon: "🎬", title: "Brand & Promo Videos", desc: "Cinematic brand stories and promotional films that build trust and drive conversions for your business.", tag: null },
    { icon: "📢", title: "Ad Creatives", desc: "High-converting video ads for Facebook, Google, YouTube, and TikTok campaigns — scripted and produced.", tag: null },
    { icon: "📦", title: "Product Showcase Videos", desc: "Feature your product with clean visuals, dynamic transitions, and voiceover narration that sells.", tag: null },
    { icon: "⭐", title: "Testimonial Videos", desc: "Polished customer testimonial edits with captions, B-roll, and background music for maximum social proof.", tag: null },
    { icon: "🤖", title: "AI Avatar Videos", desc: "Synthetic presenter videos using AI avatars — ideal for explainers, e-learning, and multilingual content.", tag: "AI-Powered" },
  ];

  const steps = [
    { num: "01", title: "Brief & Script", desc: "We gather your goals and AI-generate a tailored script in minutes" },
    { num: "02", title: "Storyboard & Assets", desc: "Visuals, voiceover, and assets are planned and created with AI assistance" },
    { num: "03", title: "Edit & Enhance", desc: "Our editors refine AI-generated cuts with colour grading and motion effects" },
    { num: "04", title: "Deliver & Publish", desc: "Final video delivered in all formats, ready for your ads and social channels" },
  ];

  const packages = [
    { name: "Starter", sub: "Short-form social", price: "From LKR 15,000", features: ["1 × 30-sec reel", "AI script", "Captions", "Background music", "2 revisions"], featured: false },
    { name: "Growth", sub: "Brand + Social pack", price: "From LKR 45,000", features: ["1 × 60–90 sec brand video", "3 × social reels", "AI voiceover", "Motion graphics", "3 revisions"], featured: true },
    { name: "Enterprise", sub: "Full production suite", price: "Custom", features: ["Multi-video campaigns", "AI avatar videos", "Dedicated editor", "On-site filming", "Unlimited revisions"], featured: false },
  ];

  const whyUs = [
    { icon: "✨", title: "AI-Accelerated Production", desc: "Latest generative AI tools cut production time without cutting quality" },
    { icon: "⚡", title: "48-Hour Delivery", desc: "Fast turnarounds for time-sensitive campaigns and product launches" },
    { icon: "💰", title: "LKR-Friendly Pricing", desc: "Enterprise-quality video at rates designed for Sri Lankan SMEs" },
    { icon: "📊", title: "Ad-Performance Focused", desc: "Every video is structured for engagement, click-throughs, and conversions" },
  ];


  const waBase = "https://wa.me/94701772626?text=";

  return (
    <>
      <SEOHead
        title="AI Video Production Sri Lanka | Cypher Digital"
        description="AI-powered video production in Sri Lanka. Cinematic brand videos, social reels, and ad creatives delivered in 48 hours. Packages from LKR 15,000."
      />
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

          {/* PORTFOLIO */}
          <section id="portfolio" style={{ padding: "48px 0", borderBottom: "0.5px solid rgba(0,0,0,0.09)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", marginBottom: 10 }}>Portfolio</div>
            <h2 className="syne" style={{ fontWeight: 700, fontSize: 28, marginBottom: 6, lineHeight: 1.2 }}>Recent Video Productions</h2>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 28 }}>A snapshot of brand and social videos produced for Sri Lankan clients.</p>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {portfolio.map((p) => (
                <div key={p.label} className="sample-thumb">
                  <div className="play-btn">▶</div>
                  <span style={{ fontSize: 11, color: "#aaa", fontWeight: 500 }}>{p.label}</span>
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