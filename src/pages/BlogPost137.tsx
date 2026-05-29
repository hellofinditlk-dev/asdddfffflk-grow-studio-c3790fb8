import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time · Colombo", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Digital Marketing Executive", type: "Full-time · Colombo", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship · Colombo", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
  { title: "Graphic Designer", type: "Full-time / Part-time · Colombo", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
];

const RESPONSIBILITIES = [
  "Keyword research — building keyword lists for Search campaigns using match types correctly",
  "Campaign structure — organising campaigns, ad groups, and ad variations logically",
  "Ad copy writing — testing multiple headline and description combinations, measuring CTR and Quality Score",
  "Bid management — choosing between manual CPC, Target CPA, and Target ROAS bidding strategies",
  "Negative keyword management — preventing irrelevant search queries from wasting budget",
  "Landing page assessment — identifying whether client landing pages can convert the traffic",
  "Performance reporting — pulling data, interpreting results, and recommending next steps in clear language",
];

const SALARY = [
  { level: "Junior Google Ads executive (0–1 yr)", range: "LKR 50,000 – 80,000", note: "Search campaigns, supervised optimisation, reporting" },
  { level: "Mid-level specialist (2–3 yr)", range: "LKR 80,000 – 130,000", note: "Independent multi-client management, Search + Display" },
  { level: "Senior specialist (4+ yr)", range: "LKR 130,000 – 200,000", note: "Full-funnel strategy, Performance Max, YouTube, team lead" },
];

const CERTS = [
  { cert: "Google Ads Search certification", priority: "Do first", why: "The most recognised Google Ads credential in Sri Lanka. Covers Search campaign setup, keyword match types, Quality Score, and Smart Bidding. Complete this before applying for any Google Ads role." },
  { cert: "Google Ads Display certification", priority: "Do second", why: "Display campaigns reach audiences across websites in Google's network. Many clients in Sri Lanka use Display for brand awareness campaigns alongside Search." },
  { cert: "Google Ads Video certification", priority: "Third — growing fast", why: "YouTube advertising is the fastest-growing Google Ads channel for Sri Lankan agencies in 2026. Demand for YouTube Ads expertise is outpacing supply across Colombo agencies." },
  { cert: "Google Ads Shopping certification", priority: "For ecommerce focus", why: "Relevant only if you are working with ecommerce clients who sell physical products online. In high demand for agencies that specialise in online retail." },
  { cert: "Google Analytics 4 certification", priority: "Pair with any Google Ads cert", why: "Agencies want Google Ads specialists who can also set up and read GA4 — because campaign performance tracking requires both platforms working together." },
];

const CHANNELS = [
  { channel: "Google Search Ads", best: "Most in-demand at Sri Lankan agencies", detail: "Search campaigns show ads to people who are actively searching for a product or service. They are the most direct-response channel and generate leads for clients immediately. This is where to develop your expertise first." },
  { channel: "Google Display Ads", best: "Strong demand, especially for larger clients", detail: "Display campaigns show banner and responsive ads across millions of websites. Used for brand awareness, retargeting, and reaching broad audiences affordably." },
  { channel: "YouTube Ads", best: "Fast-growing — fewer competitors", detail: "YouTube advertising is growing faster than any other Google Ads channel in Sri Lanka. Specialists who can brief or produce YouTube-optimised video content alongside running the campaign command premium rates." },
];

const LEARN = [
  { step: "Complete Google Ads Search certification via Google Skillshop", detail: "Free. Takes roughly 5–8 hours of study. Do this first. The certification demonstrates foundational knowledge and is the first thing agencies look for." },
  { step: "Complete Google Analytics 4 certification", detail: "Free. Another 3–5 hours. Pair this with your Search certification — agencies want Google Ads specialists who can also track and attribute results in GA4." },
  { step: "Run a real Google Ads campaign on a small budget", detail: "Even LKR 3,000–5,000 spent on a real Google Search campaign generates real data: impressions, clicks, CTR, average CPC, Quality Scores. Screenshot everything." },
  { step: "Build a Google Ads case study", detail: "Document your campaign: what keyword strategy you used, what the structure looked like, what results you got. Present this as a one-page PDF." },
  { step: "Apply and be honest about your experience level", detail: "Do not overstate your experience. Agencies can verify Google Ads performance quickly. Honesty combined with genuine certifications and a real case study will get you shortlisted." },
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/meta-ads-jobs-sri-lanka", label: "Meta Ads jobs in Sri Lanka" },
  { href: "/blog/seo-jobs-sri-lanka", label: "SEO jobs in Sri Lanka" },
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job" },
];

const BlogPost137 = () => (
  <>
    <SEOHead
      title="Google Ads Jobs in Sri Lanka — 2026 Career Guide | Cypher Digital"
      description="Salary ranges, which certifications matter, Search vs Display vs YouTube, and how to build real Google Ads expertise for jobs in Colombo's digital marketing market."
      canonical="https://cypherdigital.lk/blog/google-ads-jobs-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Google Ads Jobs in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Google Ads Careers</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 8 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Google Ads Jobs in Sri Lanka — What You Need to Get Hired in 2026
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Salary ranges, which certifications matter, Search vs Display vs YouTube, and how to build real Google Ads expertise in Colombo's digital marketing market.
            </p>
            <Link to="/careers/digital-marketing-specialist-sri-lanka" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              View specialist jobs at Cypher Digital →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>Google Ads specialists are consistently underpaid in Sri Lanka relative to their value — because there are genuinely fewer properly certified Google Ads practitioners than the market needs. Most digital marketers in Sri Lanka have Meta Ads experience. Far fewer have gone through Google Skillshop, earned a Google Ads certification, and built the habit of managing Search campaigns with a disciplined bidding strategy. That gap is your opportunity.</p>
            <p>This guide covers what Google Ads roles at Sri Lankan agencies actually involve, what they pay, which certifications matter, and how to develop the skills that get you hired. For all current roles at Cypher Digital, see <Link to="/careers/digital-marketing-specialist-sri-lanka" className="text-primary font-semibold underline">digital marketing specialist jobs in Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">What Google Ads specialists do at digital marketing agencies in Sri Lanka</h2>
            <p>Google Ads management at a Colombo agency means managing Search, Display, and YouTube campaigns for multiple clients simultaneously. The day-to-day work is more data-driven and keyword-focused than Meta Ads — Quality Score, bid strategy, negative keyword management, and ad copy testing are the core skills.</p>
            <div className="bg-card border border-border rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">Core Google Ads responsibilities at a Sri Lankan agency</div>
              {RESPONSIBILITIES.map(t => <div key={t} className="text-sm py-1 flex gap-2"><span className="text-primary">→</span>{t}</div>)}
            </div>
            <p>At Cypher Digital, our <Link to="/google-ads-sri-lanka" className="text-primary font-semibold underline">Google Ads team in Sri Lanka</Link> works across industries including education, healthcare, real estate, and hospitality.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Google Ads specialist salary in Sri Lanka — 2026 figures</h2>
            <p>Google Ads specialists sit at the higher end of the digital marketing salary range in Sri Lanka. Because the skill is directly tied to measurable client results — leads generated, cost per lead, conversion rate — agencies can justify paying more than they would for roles with less direct revenue attribution.</p>
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
            <p>Google Ads specialists who also manage <Link to="/blog/meta-ads-jobs-sri-lanka" className="text-primary font-semibold underline">Meta Ads campaigns</Link> earn at the top of these ranges. For the full salary picture, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">2026 digital marketing salary guide for Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Google Ads certifications — which ones actually matter in Sri Lanka</h2>
            <p>Google Ads certifications are available free through Google Skillshop. Not all of them carry equal weight with Sri Lankan agencies. Here is which ones to prioritise:</p>
            <div className="not-prose space-y-3 my-5">
              {CERTS.map(item => (
                <div key={item.cert} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                    <span className="font-bold text-sm">{item.cert}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{item.priority}</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.why}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Google Search vs Display vs YouTube Ads — which to specialise in for Sri Lanka</h2>
            <p>Each Google Ads channel serves a different purpose and requires different skills:</p>
            <div className="not-prose space-y-3 my-5">
              {CHANNELS.map(ch => (
                <div key={ch.channel} className="bg-secondary rounded-lg p-5">
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                    <div className="font-bold text-sm">{ch.channel}</div>
                    <span className="text-[11px] font-bold text-muted-foreground">{ch.best}</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{ch.detail}</div>
                </div>
              ))}
            </div>
            <p>The recommendation for most entry-level candidates is to focus on Google Search first, add Display, and develop YouTube Ads as a second-stage specialisation.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to learn Google Ads and get hired at a Sri Lankan agency</h2>
            <p>The most effective path to a Google Ads role at a Colombo agency, in order:</p>
            <div className="not-prose space-y-3 my-5">
              {LEARN.map((item, i) => (
                <div key={item.step} className="bg-card border border-border rounded-lg p-5 flex gap-4">
                  <div className="font-heading font-black text-2xl text-muted-foreground/30 flex-shrink-0 leading-none">0{i + 1}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.step}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <p>For a complete job-hunting roadmap, read <Link to="/blog/how-to-get-digital-marketing-job-sri-lanka" className="text-primary font-semibold underline">how to get a digital marketing job in Sri Lanka</Link>. For portfolio-building advice, read <Link to="/blog/digital-marketing-portfolio-sri-lanka" className="text-primary font-semibold underline">how to build a digital marketing portfolio with no experience</Link>.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for Google Ads and digital marketing jobs at Cypher Digital</h2>
            <p className="text-background/70 mb-6">Our Google Ads team in Sri Lanka runs Search, Display, and YouTube campaigns for 800+ brands. We are hiring specialists with genuine platform knowledge — apply via WhatsApp and hear back within 24 hours.</p>
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20want%20to%20apply%20for%20a%20Google%20Ads%20role." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost137;