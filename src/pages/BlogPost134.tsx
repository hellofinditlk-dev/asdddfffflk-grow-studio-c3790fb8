import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Executive", type: "Full-time (includes SEO)", salary: "LKR 80,000 – 140,000", href: "/careers/digital-marketing-jobs-sri-lanka", hot: true },
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 60,000 – 175,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship", salary: "LKR 25,000 – 45,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 55,000 – 130,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
];

const AREAS = [
  { area: "On-page SEO", desc: "Optimising page titles, meta descriptions, heading structure, content quality, internal linking, and keyword targeting. This is where most SEO work happens and where most juniors start. It is methodical, learnable, and directly measurable in Google Search Console." },
  { area: "Technical SEO", desc: "Improving site speed, mobile usability, crawlability, structured data (schema markup), and Core Web Vitals. Requires some understanding of how websites are built — enough to communicate issues to developers. This is the most specialised area and commands the highest salary." },
  { area: "Off-page SEO (link building)", desc: "Acquiring backlinks from other websites to increase domain authority. At most Sri Lankan agencies, this means local directory submissions, outreach to relevant websites, and occasionally creating linkable content assets." },
];

const SALARY = [
  { level: "Junior SEO executive (0–1 yr)", range: "LKR 60,000 – 80,000", note: "On-page SEO, basic keyword research, Search Console" },
  { level: "Mid-level SEO executive (2–3 yr)", range: "LKR 85,000 – 130,000", note: "Multi-client, content strategy, local SEO" },
  { level: "Senior SEO specialist (4+ yr)", range: "LKR 135,000 – 200,000+", note: "Technical SEO, site audits, team lead" },
];

const TOOLS = [
  { tool: "Google Search Console", cost: "Free", why: "Essential. Every SEO job in Sri Lanka will expect you to use Search Console daily — for monitoring rankings, crawl errors, index coverage, and Core Web Vitals. This is the first tool to learn." },
  { tool: "Google Analytics 4", cost: "Free", why: "Required for tracking organic traffic, understanding user behaviour on client websites, and measuring the impact of SEO work. GA4 certification from Google Skillshop is worth completing." },
  { tool: "Ahrefs or Semrush", cost: "Paid", why: "The standard tools for keyword research, competitor analysis, backlink auditing, and rank tracking. Ahrefs is marginally preferred in the Sri Lanka agency market but both are acceptable. Learn the interface even if you cannot afford a subscription — many agencies provide tool access." },
  { tool: "Screaming Frog SEO Spider", cost: "Free", why: "Technical SEO crawler used for site audits. Identifies broken links, duplicate content, missing meta tags, and redirect chains. Used for client website audits at most professional agencies." },
  { tool: "Google PageSpeed Insights", cost: "Free", why: "Measures site speed and Core Web Vitals. You do not need to fix the technical issues yourself — but you need to understand them well enough to brief a developer." },
];

const LOCAL_SKILLS = [
  "Google Business Profile setup and optimisation",
  "Local keyword research — 'restaurant Colombo 7', 'salon near Nugegoda'",
  "NAP consistency — ensuring business name, address, phone number are identical across all listings",
  "Local citation building — submitting to Sri Lankan directories and maps",
  "Review management — generating and responding to Google reviews",
];

const LEARN = [
  { step: "Start with Google Search Console and GA4 certification", detail: "Both are free through Google Skillshop. Completing these first demonstrates you understand how to measure SEO performance, which is the foundation of all client-facing SEO work." },
  { step: "Complete the SEMrush SEO Fundamentals course", detail: "Free through SEMrush Academy. Covers keyword research, on-page optimisation, link building, and technical SEO basics. The certificate is recognised and the course content is practical." },
  { step: "Practice on a real website", detail: "Start a personal blog or small website on any topic. Apply what you learn: write keyword-targeted posts, optimise your meta tags, build internal links, and track your rankings in Search Console. Real ranking data from your own site is portfolio evidence." },
  { step: "Conduct a free SEO audit for a local business", detail: "Offer a free audit to a local Colombo business — a restaurant, a boutique, a gym. Document what you find and what you recommended. Present this as a case study in your portfolio." },
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
  { href: "/blog/meta-ads-jobs-sri-lanka", label: "Meta Ads jobs in Sri Lanka" },
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job" },
];

const BlogPost134 = () => (
  <>
    <SEOHead
      title="SEO Jobs in Sri Lanka — Career Guide for 2026 | Cypher Digital"
      description="What SEO roles at digital marketing agencies in Sri Lanka involve, what they pay, which tools you need, and how to build an SEO career in Colombo in 2026."
      canonical="https://cypherdigital.lk/blog/seo-jobs-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "SEO Jobs in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">SEO Careers</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 7 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              SEO Jobs in Sri Lanka — Career Guide for 2026
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What SEO roles at digital marketing agencies involve, what they pay, which tools you need, and how to build an SEO career in Colombo.
            </p>
            <Link to="/careers/digital-marketing-jobs-sri-lanka" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              View digital marketing jobs at Cypher Digital →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>SEO is one of the most sustainable digital marketing skills in Sri Lanka — businesses that invest in search engine optimisation get results that compound over time, unlike paid ads which stop the moment you stop spending. This creates a consistent demand for SEO professionals at agencies across Colombo. The catch is that SEO is also one of the most misunderstood skills, and many people in the market who call themselves SEO specialists have only surface-level knowledge. Real SEO expertise is genuinely scarce — and pays accordingly.</p>
            <p>This guide covers what SEO jobs in Sri Lanka actually involve, what they pay in 2026, and how to develop real, hireable SEO skills. For a broader view of all digital marketing careers, see our <Link to="/blog/how-to-get-digital-marketing-job-sri-lanka" className="text-primary font-semibold underline">guide to getting a digital marketing job in Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">What SEO jobs at digital marketing agencies in Sri Lanka actually involve</h2>
            <p>SEO at a digital marketing agency means managing a portfolio of client websites — improving their rankings in Google for keywords their customers are searching. The work splits into three main areas:</p>
            <div className="not-prose space-y-3 my-5">
              {AREAS.map((item) => (
                <div key={item.area} className="bg-card border border-border rounded-lg p-5">
                  <div className="font-heading font-bold text-base mb-1">{item.area}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <p>Most SEO roles at agencies in Sri Lanka cover all three areas. A dedicated technical SEO specialist role is rare and typically found only at larger agencies or in-house at large companies. At <Link to="/" className="text-primary font-semibold underline">Cypher Digital</Link>, SEO is part of our <Link to="/seo-services-sri-lanka" className="text-primary font-semibold underline">full-service digital marketing offering</Link> and SEO executives work across multiple client accounts in different industries.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">SEO executive salary in Sri Lanka — 2026 figures</h2>
            <p>SEO salaries in Sri Lanka sit slightly below paid ads specialist salaries at the junior level but can match or exceed them at the senior level — particularly for technical SEO specialists, who are extremely rare in the market.</p>
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
            <p>SEO professionals who develop content strategy and writing skills in addition to technical optimisation earn at the higher end of these ranges. For a full comparison across all digital marketing roles, see our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">2026 digital marketing salary guide</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">SEO tools you need to know for jobs in Sri Lanka</h2>
            <p>These are the tools agencies in Sri Lanka use and expect SEO hires to know:</p>
            <div className="not-prose space-y-3 my-5">
              {TOOLS.map((item) => (
                <div key={item.tool} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                    <span className="font-bold text-sm">{item.tool}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.cost === "Free" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`}>{item.cost}</span>
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.why}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Local SEO vs technical SEO — which is more in demand in Sri Lanka?</h2>
            <p>For agencies in Sri Lanka, local SEO is currently more in demand than technical SEO — primarily because most clients are local businesses (restaurants, salons, hotels, medical practices) who want to appear in "near me" searches and Google Maps results. Local SEO is also more accessible to learn and less technically complex.</p>
            <p>Technical SEO is rarer in the market and commands higher salaries, but requires a deeper understanding of how websites function. If you have a background in IT or web development alongside your digital marketing knowledge, technical SEO is the highest-earning path in the SEO discipline in Sri Lanka.</p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">Local SEO skills most needed at Sri Lanka agencies</div>
              {LOCAL_SKILLS.map((t) => (
                <div key={t} className="text-sm py-1 flex gap-2"><span className="text-primary">✓</span>{t}</div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to learn SEO and get hired in Sri Lanka</h2>
            <p>SEO has no official certification as universally recognised as Meta Blueprint, but there are structured learning paths that agencies in Sri Lanka respect:</p>
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
            <p>For portfolio-building advice across all digital marketing specialisations, read our guide on <Link to="/blog/digital-marketing-portfolio-sri-lanka" className="text-primary font-semibold underline">how to build a digital marketing portfolio in Sri Lanka with no experience</Link>.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for digital marketing jobs at Cypher Digital</h2>
            <p className="text-background/70 mb-6">Our SEO team in Sri Lanka works across all major industries. We are currently hiring across executive and specialist roles — apply via WhatsApp and get a response within 24 hours.</p>
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20want%20to%20apply%20for%20an%20SEO%20role." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost134;