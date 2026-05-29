import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time · Colombo", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Digital Marketing Executive", type: "Full-time · Colombo", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-jobs-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance · Colombo", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship · Colombo", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

const REASONS = [
  "Most digital marketers learned on Meta Ads — TikTok requires a fundamentally different content approach",
  "TikTok Ads Manager is a newer platform with less training material available in Sri Lanka",
  "Content that works on TikTok looks very different from Instagram content — it takes time to develop the instinct",
  "Fewer certification programmes exist compared to Meta Blueprint or Google Ads Skillshop",
  "The platform itself evolves faster than most other ad platforms",
];

const COMPARE = [
  { title: "TikTok Ads", salary: "LKR 50,000 – 200,000/mo", notes: ["Directly tied to client revenue", "Fewer people have this skill in Sri Lanka", "Works with TikTok Ads Manager", "Requires understanding of performance metrics"] },
  { title: "Organic TikTok content", salary: "LKR 45,000 – 180,000/mo", notes: ["High demand but more supply", "Requires strong creative instinct", "Works with native platform tools", "Harder to measure direct ROI"] },
];

const SALARY = [
  { level: "Junior TikTok content creator (0–1 yr)", range: "LKR 50,000 – 80,000", note: "Organic content, basic editing, trend research" },
  { level: "TikTok marketing executive (1–2 yr)", range: "LKR 80,000 – 130,000", note: "Organic + basic TikTok Ads, multi-client accounts" },
  { level: "TikTok Ads specialist (2–4 yr)", range: "LKR 130,000 – 200,000", note: "Full TikTok Ads management, lead generation, reporting" },
];

const SKILLS = [
  { skill: "TikTok Ads Manager", detail: "Learn the campaign structure: campaign → ad group → ad. Understand the five campaign objectives: reach, traffic, app installs, lead generation, conversions. TikTok Academy (free) has the official training." },
  { skill: "Native TikTok content creation", detail: "Spend time on TikTok studying what content performs in the niches relevant to Sri Lankan businesses — food, fashion, real estate, education. Practice creating this content before you apply for roles." },
  { skill: "Short-form video editing (CapCut)", detail: "CapCut is the standard tool for TikTok content editing. It is free, mobile-first, and has built-in TikTok-optimised features. Proficiency is the minimum requirement for any TikTok content role." },
  { skill: "Performance metrics", detail: "Understand video views, watch-through rate, thumb-stop ratio, CTR, and cost per result. Understanding what each metric signals about creative performance separates ads managers from content creators." },
  { skill: "TikTok's algorithm basics", detail: "TikTok's recommendation system distributes content to non-followers more aggressively than Instagram. Understanding the signals — completion rate, shares, saves, comments — helps you create content designed to get distributed." },
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/meta-ads-jobs-sri-lanka", label: "Meta Ads jobs in Sri Lanka" },
  { href: "/blog/video-editor-jobs-sri-lanka", label: "Video editor jobs guide" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
];

const BlogPost136 = () => (
  <>
    <SEOHead
      title="TikTok Marketing Jobs in Sri Lanka — 2026 Career Guide | Cypher Digital"
      description="Why TikTok specialist roles are in high demand in Sri Lanka, what the job involves, what it pays, and how to get hired in Colombo's fastest-growing digital discipline."
      canonical="https://cypherdigital.lk/blog/tiktok-marketing-jobs-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "TikTok Marketing Jobs in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">TikTok Careers</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 7 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              TikTok Marketing Jobs in Sri Lanka — The Newest and Fastest Growing Role (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Why TikTok specialist roles are in high demand, what the job involves, what it pays, and how to get hired in Colombo's fastest-growing digital discipline.
            </p>
            <Link to="/careers/digital-marketing-specialist-sri-lanka" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              View specialist jobs at Cypher Digital →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>TikTok marketing jobs in Sri Lanka barely existed two years ago. In 2026, they are one of the fastest-growing roles at digital marketing agencies in Colombo. The platform has grown rapidly across Sri Lanka — and businesses that were early adopters are now pulling significant sales and enquiries from TikTok. Agencies cannot find enough people who genuinely understand the platform. That gap is a career opportunity.</p>
            <p>This guide covers what TikTok marketing roles at Sri Lankan agencies actually involve, what they pay, and exactly what skills you need to build. For all current specialist roles at Cypher Digital, see our <Link to="/careers/digital-marketing-specialist-sri-lanka" className="text-primary font-semibold underline">digital marketing specialist jobs in Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Why TikTok marketing jobs are booming in Sri Lanka in 2026</h2>
            <p>Sri Lanka's TikTok user base crossed significant thresholds in 2024 and 2025 — particularly in the 18–35 demographic that most consumer brands want to reach. The supply of people who genuinely understand TikTok — the algorithm, the content format, TikTok Ads Manager — has not kept up with demand.</p>
            <p>At Cypher Digital, our <Link to="/tiktok-marketing-sri-lanka" className="text-primary font-semibold underline">TikTok marketing service in Sri Lanka</Link> works with brands across restaurants, fashion, healthcare, and education. Demand for team members who can execute this work is growing directly alongside the client base.</p>
            <div className="bg-card border border-border rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">Why TikTok specialists are scarce in Sri Lanka</div>
              {REASONS.map(t => <div key={t} className="text-sm py-1 flex gap-2"><span className="text-primary">→</span>{t}</div>)}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">What a TikTok marketing specialist does day-to-day at a Sri Lankan agency</h2>
            <p>TikTok marketing roles at agencies typically split across two areas: organic content and paid ads. Most positions in Sri Lanka cover both, because the client base tends to be SMEs who need the full package.</p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Organic TikTok content</h3>
            <p>Creating, scripting, and producing short-form videos for client TikTok accounts. The key skill is understanding what makes content feel native on TikTok rather than like a repurposed Instagram post.</p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">TikTok Ads</h3>
            <p>Setting up and managing paid campaigns in TikTok Ads Manager. Managing TikTok Ads requires understanding the platform's ad formats (TopView, In-Feed Ads, Branded Hashtag Challenges), audience targeting, and how to read TikTok's performance metrics.</p>
            <p>This combined skill — creating content that works organically on TikTok and running paid campaigns — is the full package that commands the highest salary. For context on how salaries compare, see our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">2026 digital marketing salary guide for Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">TikTok Ads vs organic content — which skill is more valuable in Sri Lanka?</h2>
            <p>TikTok Ads pays more than organic content creation — consistently and significantly. Paid advertising skills are tied directly to client revenue. However, the biggest variable in TikTok ad performance is creative — the video itself. The marketers who develop both skills simultaneously are the ones who command the highest salaries.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 not-prose">
              {COMPARE.map(col => (
                <div key={col.title} className="bg-card border border-border rounded-lg p-5">
                  <div className="font-bold text-sm mb-1">{col.title}</div>
                  <div className="text-sm font-bold text-primary mb-3">{col.salary}</div>
                  {col.notes.map(n => <div key={n} className="text-xs py-1 flex gap-2 text-muted-foreground"><span className="text-primary">→</span>{n}</div>)}
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">TikTok marketing salary in Sri Lanka — 2026 figures</h2>
            <p>TikTok specialisation sits within the broader digital marketing salary band, but experienced TikTok Ads specialists earn at the higher end because of the scarcity of genuine expertise:</p>
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
            <p>TikTok specialists who also manage <Link to="/blog/meta-ads-jobs-sri-lanka" className="text-primary font-semibold underline">Meta Ads campaigns</Link> alongside TikTok earn at the top of the range — multi-platform capability is particularly valued at full-service agencies.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">TikTok marketing skills and tools to learn in Sri Lanka</h2>
            <p>Here is exactly what to focus on to become hireable as a TikTok marketing specialist at a Colombo agency:</p>
            <div className="not-prose space-y-3 my-5">
              {SKILLS.map((item, i) => (
                <div key={item.skill} className="bg-card border border-border rounded-lg p-5 flex gap-4">
                  <div className="font-heading font-black text-2xl text-muted-foreground/30 flex-shrink-0 leading-none">0{i + 1}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.skill}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <p>For a full picture of which skills are most in demand, see our <Link to="/blog/digital-marketing-skills-sri-lanka" className="text-primary font-semibold underline">top 10 digital marketing skills article</Link>. For video editing tools specifically, read our <Link to="/blog/video-editor-jobs-sri-lanka" className="text-primary font-semibold underline">video editor jobs guide</Link>.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for TikTok and digital marketing specialist roles at Cypher Digital</h2>
            <p className="text-background/70 mb-6">We run TikTok campaigns for brands across Sri Lanka. Our TikTok marketing team is growing and we are hiring specialists who understand both content and paid ads on the platform.</p>
            <div className="grid gap-2 mb-5">
              {VACANCIES.map((v) => (
                <Link key={v.title} to={v.href} className="bg-background/5 border border-background/10 rounded-lg px-4 py-3 flex justify-between items-center flex-wrap gap-2 hover:bg-background/10">
                  <div>
                    <span className="font-bold text-sm text-background">{v.title}</span>
                    {v.hot && <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded ml-2">HIRING</span>}
                    <div className="text-xs text-background/50 mt-0.5">{v.type}</div>
                  </div>
                  <span className="text-sm text-primary font-semibold">{v.salary}</span>
                </Link>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link to="/careers" className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">View all digital marketing jobs in Sri Lanka →</Link>
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20want%20to%20apply%20for%20a%20TikTok%20marketing%20role." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost136;