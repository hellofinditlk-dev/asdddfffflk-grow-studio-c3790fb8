import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time · Colombo", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Graphic Designer", type: "Full-time / Part-time · Colombo", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance · Colombo", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship (3–6 months) · Colombo", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

const PROS = ["Work on 10–50 brands across multiple industries", "Skills grow faster because of volume and variety", "Strong portfolio across many client types", "Learn what works across industries, not just one"];
const CONS_AGENCY = ["Multiple clients and deadlines running simultaneously", "You never own the brand the way in-house does"];
const INHOUSE_PROS = ["Deep knowledge of one brand and customer", "Longer-term strategy ownership", "Usually more predictable hours"];
const INHOUSE_CONS = ["Narrower portfolio — one company's results", "Slower skill growth once you've mastered the brand", "Fewer colleagues to learn from"];

const PROGRESSION = [
  { stage: "Month 1–3", role: "Marketing intern or junior executive", what: "Learn the tools, client accounts, and internal processes" },
  { stage: "Month 4–12", role: "Executive", what: "Independent account management with senior oversight" },
  { stage: "Year 2–3", role: "Senior executive / specialist", what: "Own strategy for key accounts, mentor junior staff" },
  { stage: "Year 3+", role: "Team lead / senior specialist", what: "Manage a team, lead client strategy, own department output" },
];

const DAY = [
  { time: "8:30 AM", event: "Morning review", detail: "Check overnight ad performance for active campaigns. Flag anything overspending or with a CTR drop." },
  { time: "9:00 AM", event: "Creative briefing", detail: "Brief the design team on new ad creatives needed based on yesterday's data." },
  { time: "10:00 AM", event: "Campaign setup", detail: "Build a new Meta Ads campaign for a restaurant client launching a weekend promotion." },
  { time: "11:30 AM", event: "Content calendar review", detail: "Review next week's social media posts for two client accounts. Approve copy and schedule via Meta Business Suite." },
  { time: "1:00 PM", event: "Lunch break", detail: "The studio has a relaxed midday. Most of the team eat together." },
  { time: "2:00 PM", event: "Client report", detail: "Pull monthly performance data for a fashion brand client and write the plain-language summary." },
  { time: "3:30 PM", event: "Campaign optimisation", detail: "Pause underperforming creatives, increase budget on winning ads, test a new audience segment." },
  { time: "4:30 PM", event: "Learning or admin", detail: "Catch up on platform updates. Update the internal shared tracker with campaign status." },
  { time: "5:30 PM", event: "End of day", detail: "Colombo studio day ends. Some project-based work continues remotely depending on campaign needs." },
];

const INDUSTRIES = ["Restaurants and F&B", "Fashion and retail", "Real estate — residential and commercial", "Education — schools and institutions", "Healthcare and clinics", "Hospitality and hotels", "FMCG brands", "Automotive", "Ecommerce", "Beauty and wellness"];

const DOWNSIDES = [
  { downside: "Multiple deadlines running simultaneously", detail: "You will always have more than one client deliverable due at the same time. People who thrive in agencies have strong systems for prioritising and communicating." },
  { downside: "You never own the brand the way an in-house marketer does", detail: "When you work on a client's campaigns, you are always a service provider — not the brand's internal voice." },
  { downside: "Client demands can shift quickly", detail: "Clients change briefs, request last-minute campaigns, and have opinions that conflict with what the data says. Managing that gap is a skill." },
  { downside: "The pace does not suit everyone", detail: "If you do your best work when you can slow down and go deep on a single problem for days at a time, agency life will feel uncomfortable." },
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job in Sri Lanka" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
  { href: "/careers", label: "View all open digital marketing jobs" },
];

const BlogPost135 = () => (
  <>
    <SEOHead
      title="Why Work at a Digital Marketing Agency in Sri Lanka? Honest Take | Cypher Digital"
      description="The real advantages, genuine downsides, and what a career at a Colombo digital marketing agency looks like day-to-day in 2026 — without the corporate spin."
      canonical="https://cypherdigital.lk/blog/why-work-at-digital-marketing-agency-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Why Work at a Digital Marketing Agency" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Agency Life</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 8 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Why Work at a Digital Marketing Agency in Sri Lanka? The Honest Take
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The real advantages, the genuine downsides, and what a career at a Colombo digital marketing agency looks like day-to-day — without the corporate spin.
            </p>
            <Link to="/careers" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              See open digital marketing jobs in Sri Lanka →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>If you are weighing up whether to take a job at a digital marketing agency or look for an in-house role, you will get a lot of opinions — most of them from people who have only done one or the other. This article gives you the honest version, based on what working at a Colombo digital marketing agency actually looks like in 2026.</p>
            <p>It is not all upside. Agency life has real trade-offs. But for most people early in their digital marketing career in Sri Lanka, it is the fastest way to develop skills that matter and build a portfolio that opens doors.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Agency vs in-house — what nobody tells you</h2>
            <p>The standard answer you will hear is that agencies offer variety and in-house offers depth. That is true, but it undersells how different the day-to-day experience actually is.</p>
            <p>At a digital marketing agency in Sri Lanka, you are working on anywhere from five to twenty client accounts at the same time. One morning you might be pulling ad results for a Colombo restaurant, then switching to a content calendar for a real estate developer, then briefing a designer on creatives for a fashion brand.</p>
            <p>In-house marketers go deeper on one brand, one audience, one product. They understand their customer better than most agency marketers ever will. But they often hit a ceiling where they have exhausted the learning available from that single context.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 not-prose">
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="font-heading font-bold text-base mb-3">Agency</div>
                {PROS.map(t => <div key={t} className="text-sm py-1 flex gap-2"><span className="text-primary">✓</span>{t}</div>)}
                {CONS_AGENCY.map(t => <div key={t} className="text-sm py-1 flex gap-2 text-muted-foreground"><span>–</span>{t}</div>)}
              </div>
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="font-heading font-bold text-base mb-3">In-house</div>
                {INHOUSE_PROS.map(t => <div key={t} className="text-sm py-1 flex gap-2"><span className="text-primary">✓</span>{t}</div>)}
                {INHOUSE_CONS.map(t => <div key={t} className="text-sm py-1 flex gap-2 text-muted-foreground"><span>–</span>{t}</div>)}
              </div>
            </div>

            <p>The honest career advice: spend your first two to three years at an agency, then move in-house if you want to. You will arrive with a portfolio that covers multiple industries and platform types.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How fast can you grow at a digital marketing agency in Sri Lanka?</h2>
            <p>Faster than almost any other environment — if you engage with the work rather than just completing tasks. At a Colombo digital marketing agency, a motivated junior can move from entry level to a mid-level specialist in 18 months to two years.</p>
            <p>At <Link to="/" className="text-primary font-semibold underline">Cypher Digital</Link>, team members who started as interns have moved into full-time executive roles and then into senior specialist positions within two years.</p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-3">Typical career progression at a Sri Lanka digital marketing agency</div>
              {PROGRESSION.map(row => (
                <div key={row.stage} className="flex gap-3 py-2 border-b border-primary/10 last:border-0">
                  <div className="min-w-[80px] text-xs font-bold text-primary">{row.stage}</div>
                  <div>
                    <div className="text-sm font-semibold">{row.role}</div>
                    <div className="text-xs text-muted-foreground">{row.what}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">A typical day at Cypher Digital — what it actually looks like</h2>
            <p>This is a representative day for a mid-level digital marketing executive at Cypher Digital's Colombo studio. It is not every day, but it is a fair picture of the rhythm:</p>
            <div className="not-prose my-5">
              {DAY.map(item => (
                <div key={item.time} className="flex gap-4 py-3 border-b border-border">
                  <div className="min-w-[72px] text-xs font-bold text-primary pt-0.5">{item.time}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.event}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">What you will actually work on at Cypher Digital</h2>
            <p>Cypher Digital works with over 800 Sri Lankan brands across a wide range of industries. As a team member, you will not be pigeonholed into one sector. Across a typical month, the same executive might handle campaigns for a Colombo restaurant, a fashion e-commerce brand, a private school, and a real estate developer.</p>
            <div className="bg-card border border-border rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">Industries and project types at Cypher Digital</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {INDUSTRIES.map(item => <div key={item} className="text-sm py-1 flex gap-2"><span className="text-primary">→</span>{item}</div>)}
              </div>
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">The honest downsides of working at a digital marketing agency</h2>
            <p>Any article about agency life that does not mention the downsides is selling you something. Here are the genuine trade-offs:</p>
            <div className="not-prose space-y-3 my-5">
              {DOWNSIDES.map(item => (
                <div key={item.downside} className="bg-card border border-border border-l-4 border-l-primary rounded-r-lg p-4">
                  <div className="font-bold text-sm mb-1">{item.downside}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Is Cypher Digital the right fit for you?</h2>
            <p>The best way to find out is to apply, have a conversation, and do a trial. We invite every serious candidate for a brief practical assessment before making an offer. For the salary you can expect, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">2026 digital marketing salary guide for Sri Lanka</Link>. For the skills we look for, see our <Link to="/blog/digital-marketing-skills-sri-lanka" className="text-primary font-semibold underline">top 10 digital marketing skills article</Link>.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Join the Cypher Digital team</h2>
            <p className="text-background/70 mb-6">We are a results-driven digital marketing agency in Sri Lanka working with 800+ brands. Currently hiring across paid ads, design, video editing, and internship roles in Colombo.</p>
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20read%20your%20agency%20culture%20article%20and%20want%20to%20apply." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost135;