import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Video Editor", type: "Full-time / Freelance", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: true },
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: false },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

const SALARY = [
  { level: "Junior (0–1 yr)", range: "LKR 45,000 – 70,000", note: "CapCut proficient, basic Premiere" },
  { level: "Mid-level (2–3 yr)", range: "LKR 70,000 – 100,000", note: "Full Premiere, DaVinci, fast turnaround" },
  { level: "Senior (4+ yr)", range: "LKR 100,000 – 150,000", note: "After Effects, motion graphics, ad strategy" },
  { level: "Freelance per Reel", range: "LKR 3,000 – 15,000", note: "Depends on brief complexity and client" },
];

const TOOLS = [
  { name: "CapCut", level: "Essential", cost: "Free", best: "Reels, TikToks, quick turnaround", why: "CapCut is the fastest tool for short-form content. Most Sri Lankan agencies use it for Instagram Reels and TikTok videos. Being proficient in CapCut is the minimum requirement for any video role at a digital marketing agency." },
  { name: "Adobe Premiere Pro", level: "Standard", cost: "Paid (Adobe CC)", best: "Brand films, long-form, YouTube ads", why: "Premiere Pro is the industry standard for professional video editing. Required for any role that involves YouTube ads, brand films, corporate video, or complex multi-track editing. At mid-level and above, agencies expect Premiere proficiency." },
  { name: "DaVinci Resolve", level: "Differentiator", cost: "Free", best: "Colour grading, cinematic finish", why: "DaVinci is the best free professional editing tool available. Its colour grading suite is used in film production worldwide. Knowing DaVinci distinguishes you from editors who only know CapCut or basic Premiere." },
  { name: "Adobe After Effects", level: "Premium skill", cost: "Paid (Adobe CC)", best: "Motion graphics, animated text, ads", why: "After Effects allows you to add animated text, motion graphics, and visual effects. Editors who combine Premiere editing with After Effects motion graphics earn significantly more than editors who only cut footage." },
];

const REEL_TIPS = [
  { title: "Keep it under 90 seconds", body: "Hiring managers watch the first 10–15 seconds and decide whether to continue. If your best work is not in the first 10 seconds, restructure the reel. Do not build up to a big finale — start with your strongest edit." },
  { title: "Show variety across formats", body: "Include at least one Reel or TikTok, one longer-form brand video, and one ad creative example. This shows you can work across the formats agencies need — not just one style." },
  { title: "Include the brief or context for each clip", body: "Add a brief lower-third or end card for each piece showing what it was for — 'Reel for a Colombo restaurant, 280k views' or 'YouTube pre-roll ad, 18% CTR'. Context makes your work more impressive." },
  { title: "Show raw footage and your edit side by side", body: "Even for one clip, showing what you started with and what you produced demonstrates skill clearly. Any editor can claim they are good — showing the transformation proves it." },
];

const NEEDS = [
  "Instagram and Facebook Reels — 15 to 60 second scroll-stopping videos",
  "TikTok content — trend-led, native-feeling short-form videos",
  "YouTube ads — 6-second bumpers, 15-second skippable, and longer brand films",
  "Paid ad creative videos — structured for maximum watch time and CTR",
  "Product demos and testimonial videos for client landing pages",
  "Animated motion graphic overlays for static content",
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/graphic-designer-jobs-sri-lanka-guide", label: "Graphic designer jobs guide" },
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job" },
  { href: "/blog/digital-marketing-portfolio-sri-lanka", label: "Building a portfolio with no experience" },
];

const BlogPost130 = () => (
  <>
    <SEOHead
      title="Video Editor Jobs in Sri Lanka — Freelance, Full-Time & What Pays Best (2026) | Cypher Digital"
      description="Tools, salary ranges, showreel advice, and how to get your first video editing role at a digital marketing agency in Colombo in 2026."
      canonical="https://cypherdigital.lk/blog/video-editor-jobs-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Video Editor Jobs in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Video Careers</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 7 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Video Editor Jobs in Sri Lanka — Freelance, Full-Time & What Pays Best (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tools, salary ranges, showreel advice, and how to get your first video editing role at a digital marketing agency in Colombo.
            </p>
            <Link to="/careers/video-editor-jobs-sri-lanka" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              View video editor jobs at Cypher Digital →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>Video editor jobs in Sri Lanka are growing faster than almost any other digital marketing role. Short-form video now dominates Facebook, Instagram, TikTok, and YouTube — and every agency that manages social media or paid ads for clients needs editors who can produce scroll-stopping content fast. This guide covers what the role actually involves, what it pays in 2026, which tools you need, and how to get hired at a digital marketing agency in Colombo.</p>
            <p>If you are ready to apply, see our current <Link to="/careers/video-editor-jobs-sri-lanka" className="text-primary font-semibold underline">video editor jobs in Sri Lanka at Cypher Digital</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">What digital marketing agencies in Sri Lanka need from video editors</h2>
            <p>The video editing role at a digital marketing agency is very different from film or broadcast editing. The priorities are speed, consistency, and understanding what makes a video perform as a paid ad or organic social post — not cinematic quality for its own sake.</p>
            <div className="bg-card border border-border rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-3">What agencies hire video editors to produce</div>
              {NEEDS.map((t) => (
                <div key={t} className="text-sm text-muted-foreground py-1.5 border-b border-border/50 last:border-0 flex gap-2"><span className="text-primary">→</span>{t}</div>
              ))}
            </div>
            <p>The single most valuable skill that separates average from high-earning video editors in Sri Lanka is understanding how to structure a video for ad performance. This means knowing that the first two seconds of a Reel must stop the scroll, that captions increase watch time by 40%, and that the hook drives CTR regardless of how good the rest of the edit is. Editors who think like marketers earn more than editors who only think like filmmakers.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Video editor salary in Sri Lanka — 2026 figures</h2>
            <p>Video editing salaries in Sri Lanka have risen steadily over the past two years as demand for short-form content has grown across all industries. Here is what you can expect at each experience level:</p>
            <div className="grid gap-2.5 my-5 not-prose">
              {SALARY.map((row) => (
                <div key={row.level} className="bg-secondary rounded-lg p-4 flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <div className="font-bold text-sm">{row.level}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{row.note}</div>
                  </div>
                  <div className="font-heading font-bold text-base text-primary">{row.range}</div>
                </div>
              ))}
            </div>
            <p>Adding After Effects and motion graphics to your skill set is the fastest way to move from mid-level to senior salary range. For a full comparison across all digital marketing roles, see our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">digital marketing salary guide for Sri Lanka 2026</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Best tools for video editor jobs in Sri Lanka — ranked</h2>
            <p>The tools you know determine which roles you qualify for. Here is a clear breakdown of what each tool is used for and how valuable it is in the Sri Lanka market:</p>
            <div className="not-prose space-y-3 my-5">
              {TOOLS.map((tool) => (
                <div key={tool.name} className="bg-card border border-border rounded-lg p-5">
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                    <div className="font-heading font-bold text-base">{tool.name}</div>
                    <div className="flex gap-1.5">
                      <span className="bg-primary/10 text-primary text-[11px] font-bold px-2 py-0.5 rounded-full">{tool.level}</span>
                      <span className="bg-secondary text-secondary-foreground text-[11px] font-bold px-2 py-0.5 rounded-full">{tool.cost}</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">Best for: {tool.best}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{tool.why}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Ad video editing vs organic content — which skill is more valuable?</h2>
            <p>Editors who specialise in paid ad creative videos earn more than editors who focus on organic social content. This is because ad creative is directly tied to client revenue — a well-edited video ad that drives conversions is measurably valuable, while an organic Reel's value is harder to quantify.</p>
            <p>Ad video editing requires understanding performance metrics: watch-through rate, thumb-stop ratio, and CTR. An editor who can look at a video's stats and understand why it underperformed — and how to fix the next version — is a premium hire at any Sri Lankan agency.</p>
            <p>That said, organic content editing is the more accessible starting point. Most junior video editors begin with organic Reels and TikToks, then develop ad editing skills over time.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to build a video editing showreel for Sri Lankan agencies</h2>
            <p>A showreel is your most important job application document for any video editing role. Here is what makes a strong reel for agency applications in Sri Lanka:</p>
            <div className="not-prose space-y-3 my-5">
              {REEL_TIPS.map((item, i) => (
                <div key={item.title} className="bg-card border border-border rounded-lg p-5 flex gap-4">
                  <div className="font-heading font-black text-2xl text-muted-foreground/30 flex-shrink-0 leading-none">0{i + 1}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <p>For broader portfolio advice covering all digital marketing roles, read <Link to="/blog/digital-marketing-portfolio-sri-lanka" className="text-primary font-semibold underline">how to build a digital marketing portfolio in Sri Lanka with no experience</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Freelance vs full-time video editor jobs in Sri Lanka</h2>
            <p>Video editing is one of the roles where freelancing is genuinely viable from a relatively early career stage, because projects are project-based by nature and clients can evaluate your work before hiring. However, starting full-time at an agency has significant advantages for developing your skills and building a portfolio quickly. Our current <Link to="/careers/video-editor-jobs-sri-lanka" className="text-primary font-semibold underline">video editor jobs in Sri Lanka</Link> at Cypher Digital include both full-time studio positions and freelance project-based work.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for video editor jobs at Cypher Digital</h2>
            <p className="text-background/70 mb-6">Edit Reels, TikToks, YouTube ads, and brand films for 800+ Sri Lankan brands. Full-time studio and freelance options available in Colombo.</p>
            <div className="grid gap-2 mb-5">
              {VACANCIES.map((v) => (
                <Link key={v.title} to={v.href} className="bg-background/5 border border-background/10 rounded-lg px-4 py-3 flex justify-between items-center flex-wrap gap-2 hover:bg-background/10">
                  <div>
                    <span className="font-bold text-sm text-background">{v.title}</span>
                    {v.hot && <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded ml-2">HOT</span>}
                    <div className="text-xs text-background/50 mt-0.5">{v.type}</div>
                  </div>
                  <span className="text-sm text-primary font-semibold">{v.salary}</span>
                </Link>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link to="/careers" className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">View all digital marketing jobs in Sri Lanka →</Link>
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20want%20to%20apply%20for%20the%20Video%20Editor%20role." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
            </div>
          </section>

          <aside className="mt-12 bg-card border border-border rounded-lg p-5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Related articles</div>
            <div className="space-y-2">
              {RELATED.map((r) => (
                <Link key={r.href} to={r.href} className="block text-sm text-primary font-semibold hover:underline">{r.label}</Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost130;