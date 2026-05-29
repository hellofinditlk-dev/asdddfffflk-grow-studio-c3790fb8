import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 60,000 – 175,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Digital Marketing Executive", type: "Full-time", salary: "LKR 80,000 – 140,000", href: "/careers/digital-marketing-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship", salary: "LKR 25,000 – 45,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 55,000 – 130,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
];

const DAILY = [
  "Morning: Check overnight performance data for all active campaigns — flag anything overspending or underperforming",
  "Campaign setup: Build new ad sets, write ad copy, upload creatives, configure audiences and placements",
  "Optimisation: Adjust bids, pause underperforming ads, scale ads that are hitting CPA targets",
  "Creative briefing: Brief the design team on new ad creative required based on performance data",
  "Reporting: Pull weekly or monthly reports for clients, translate data into plain language recommendations",
  "Strategy: Plan next month's campaign calendar — objectives, budgets, audience strategy, creative concepts",
];

const SALARY = [
  { level: "Junior ads manager (0–1 yr)", range: "LKR 80,000 – 110,000", note: "Basic campaign setup, supervised optimisation" },
  { level: "Ads executive (2–3 yr)", range: "LKR 115,000 – 160,000", note: "Independent account management, strategy input" },
  { level: "Senior specialist (4+ yr)", range: "LKR 165,000 – 220,000+", note: "Multi-account leadership, client strategy ownership" },
];

const BLUEPRINT = [
  "Level 1: Meta Certified Digital Marketing Associate — start here, free, most recognised by Sri Lankan agencies",
  "Level 2: Meta Certified Media Buying Professional — advanced, demonstrates campaign management at scale",
  "Level 3: Meta Certified Marketing Science Professional — analytics and measurement focus, rare in Sri Lanka",
];

const EXPECTATIONS = [
  { expectation: "Clear lead volume targets", reality: "Most Sri Lankan clients running Meta Ads want leads — enquiries, WhatsApp messages, form submissions — rather than brand awareness. Your job is to generate leads at an agreed cost per lead (CPL) and report on volume and quality." },
  { expectation: "Transparent reporting every week or month", reality: "Clients want to see what their money is doing. A simple, clear report showing spend, impressions, reach, leads generated, and CPL — in plain language, not marketing jargon — builds trust and retains clients." },
  { expectation: "Fast creative iteration", reality: "The biggest variable in Meta Ads performance is creative — the images, videos, and copy in the ads. Sri Lankan agency clients expect their specialist to identify underperforming creatives quickly and brief new ones. Speed of creative iteration is more important than any bidding strategy." },
  { expectation: "Honest communication when things are not working", reality: "Campaigns underperform. Clients who are told immediately — with a clear explanation and a plan to fix it — stay with agencies. Clients who find out late, or are given vague excuses, leave." },
];

const PATHS = [
  { path: "Senior Ads Specialist / Team Lead", desc: "Manage junior ads managers and own strategic direction across multiple client accounts. Salary range: LKR 180,000 – 250,000." },
  { path: "Digital Marketing Manager", desc: "Oversee all digital channels — Meta, Google, TikTok, SEO, email — for an agency or in-house. Typically requires 4–5 years of multi-channel experience." },
  { path: "Performance Marketing Consultant (freelance)", desc: "Work independently managing ad accounts for multiple clients. More viable after 3+ years of agency experience with a proven track record." },
  { path: "Head of Growth (in-house)", desc: "Senior in-house role at a product or ecommerce company, responsible for paid acquisition, retention, and revenue growth. Highest earning ceiling." },
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job in Sri Lanka" },
  { href: "/blog/seo-jobs-sri-lanka", label: "SEO jobs in Sri Lanka guide" },
];

const BlogPost133 = () => (
  <>
    <SEOHead
      title="Meta Ads Jobs in Sri Lanka — What Facebook Advertising Specialists Earn (2026) | Cypher Digital"
      description="Salary ranges, daily responsibilities, Meta Blueprint advice, and what agencies in Colombo look for when hiring paid social and Facebook ads specialists in 2026."
      canonical="https://cypherdigital.lk/blog/meta-ads-jobs-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Meta Ads Jobs in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Paid Ads Careers</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 7 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Meta Ads Jobs in Sri Lanka — What Facebook Advertising Specialists Earn (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Salary ranges, daily responsibilities, Meta Blueprint advice, and what agencies in Colombo look for when hiring paid social specialists.
            </p>
            <Link to="/careers/digital-marketing-specialist-sri-lanka" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              View paid ads specialist jobs at Cypher Digital →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>Meta Ads is the most in-demand skill in Sri Lanka's digital marketing job market in 2026. Nearly every business in Colombo that runs social media marketing — from restaurants to real estate developers to fashion brands — uses Facebook and Instagram advertising to generate leads and sales. Agencies need specialists who can manage these campaigns profitably. This guide covers what the job actually involves, what it pays, and what you need to get hired.</p>
            <p>For all paid ads roles at Cypher Digital, see our <Link to="/careers/digital-marketing-specialist-sri-lanka" className="text-primary font-semibold underline">digital marketing specialist jobs in Sri Lanka</Link>. For a broader salary context, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">2026 digital marketing salary guide for Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">What a Meta Ads specialist does day-to-day at a Sri Lankan agency</h2>
            <p>The role is more analytical than most people expect. A Meta Ads specialist at a Colombo agency manages multiple client accounts simultaneously, each with different objectives, budgets, and target audiences. The daily rhythm looks like this:</p>
            <div className="bg-card border border-border rounded-lg p-5 my-5 not-prose">
              {DAILY.map((t) => (
                <div key={t} className="text-sm text-muted-foreground py-1.5 border-b border-border/50 last:border-0 flex gap-2"><span className="text-primary">→</span>{t}</div>
              ))}
            </div>
            <p>The most valued skill above all others is the ability to look at campaign data and know what to do next — not just what the numbers mean, but what action to take to improve results. This analytical-creative combination is what separates a junior ads manager from a specialist commanding LKR 150,000+ per month.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Meta Ads specialist salary in Sri Lanka — 2026 figures</h2>
            <p>Meta Ads specialists are among the highest-paid digital marketing professionals in Sri Lanka. The salary premium exists because the skill is directly tied to client revenue — a specialist who generates measurable leads and sales can prove their value in data.</p>
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
            <p>Specialists who also manage <Link to="/google-ads-sri-lanka" className="text-primary font-semibold underline">Google Ads campaigns</Link> alongside Meta earn at the higher end of the range, as multi-platform capability is particularly valued by full-service agencies.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Meta Blueprint certification — is it worth doing in Sri Lanka?</h2>
            <p>Yes, without question. The Meta Certified Digital Marketing Associate exam is free, takes two weeks of part-time study, and is the single most recognised credential for paid social media roles at digital marketing agencies in Sri Lanka. It proves you understand campaign structure, ad objectives, audience targeting, and the Meta Ads Manager interface.</p>
            <p>Beyond the associate level, the Meta Certified Media Buying Professional exam is the next credential to pursue. This certification demonstrates you can manage significant ad budgets, optimise for conversions, and build advanced audience strategies — the skills that command LKR 150,000+ monthly salary.</p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">Meta Blueprint certification path</div>
              {BLUEPRINT.map((t) => <div key={t} className="text-sm py-1 flex gap-2"><span className="text-primary">→</span>{t}</div>)}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">What clients expect from a Meta Ads specialist in Sri Lanka</h2>
            <p>Understanding client expectations is as important as understanding the technical platform — because your ability to manage the client relationship determines how long the agency retains the account, and that directly affects your value to the agency.</p>
            <div className="not-prose space-y-3 my-5">
              {EXPECTATIONS.map((item) => (
                <div key={item.expectation} className="bg-card border border-border rounded-lg p-4">
                  <div className="font-bold text-sm mb-1">{item.expectation}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.reality}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Career path from Meta Ads specialist in Sri Lanka</h2>
            <p>Meta Ads expertise is a strong foundation for a number of progression paths in the Sri Lanka digital marketing industry:</p>
            <div className="not-prose space-y-2.5 my-5">
              {PATHS.map((item) => (
                <div key={item.path} className="bg-card border border-border rounded-lg p-4 flex gap-3">
                  <span className="text-primary text-base flex-shrink-0">→</span>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.path}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p>The fastest path to the top of this progression is starting at an agency, developing genuine expertise across Meta and Google Ads, and building a track record of measurable results. For the full salary picture at each stage, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">digital marketing salary guide for Sri Lanka 2026</Link>.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for Meta Ads and paid media roles at Cypher Digital</h2>
            <p className="text-background/70 mb-6">Manage paid social and search campaigns for 800+ Sri Lankan brands. We are hiring at both executive and specialist level — apply via WhatsApp and get a response within 24 hours.</p>
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20want%20to%20apply%20for%20a%20Meta%20Ads%20role." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost133;