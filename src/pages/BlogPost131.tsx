import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Marketing Intern", type: "Internship (3–6 months) · Paid", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: true },
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: false },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
];

const FLAGS = [
  { flag: "green", text: "You are assigned to real client accounts from week one" },
  { flag: "green", text: "You will run or contribute to actual campaigns — not just observe" },
  { flag: "green", text: "There is a structured learning plan or weekly skills sessions" },
  { flag: "green", text: "The internship is paid — even a modest allowance indicates the company values your time" },
  { flag: "green", text: "There is a clear path to a full-time offer for strong performers" },
  { flag: "red", text: "You are told to 'shadow' staff for the first month with no assigned work" },
  { flag: "red", text: "The role description is vague — 'assisting the marketing team' with no specifics" },
  { flag: "red", text: "No mention of which platforms, tools, or campaigns you will work on" },
  { flag: "red", text: "Unpaid with no structured learning or formal certificate provided" },
];

const PAY_ROWS = [
  ["Paid internship at an established agency", "LKR 20,000 – 40,000", "Industry standard — company values your time"],
  ["Paid internship at a small agency or startup", "LKR 10,000 – 25,000", "Acceptable if the learning opportunity is strong"],
  ["Unpaid with stipend (transport, meals)", "LKR 3,000 – 8,000", "Only worthwhile if learning opportunity is exceptional"],
  ["Fully unpaid", "LKR 0", "Rare at professional agencies — evaluate carefully"],
];

const LEARNING = [
  { skill: "Paid advertising — Meta Ads and Google Ads", detail: "Setting up campaigns, choosing objectives, building audiences, writing ad copy, and reading performance data. Doing this on a real client account with a real budget in week two of an internship will teach you more than three months of courses." },
  { skill: "Content creation and social media management", detail: "Planning and scheduling content calendars, creating post copy, understanding what content performs on each platform, and managing community engagement for client pages." },
  { skill: "Performance reporting", detail: "Pulling data from Meta Business Suite, Google Analytics, and compiling it into a client report. Understanding what the numbers mean and how to explain them. This is a skill most self-taught marketers lack and agencies value highly." },
  { skill: "Client communication basics", detail: "How to update clients, how to present creative work, how to respond to feedback professionally. This is rarely taught in courses and is one of the most valuable things you can learn in an internship." },
  { skill: "Creative production", detail: "Depending on your role — designing social media creatives in Canva, writing ad copy, editing short videos. Even non-creative roles involve understanding what makes good creative and giving useful feedback." },
];

const QUESTIONS = [
  { q: "Which client accounts will I be working on from week one?", why: "If they cannot name specific accounts, the internship is likely observation-based, not hands-on." },
  { q: "What will I be able to show in my portfolio after 3–6 months?", why: "A good internship should give you 4–6 portfolio pieces you can use in future job applications." },
  { q: "Who will I be reporting to and how often will I get feedback?", why: "Regular feedback is essential for growth. If you will only interact with your manager once a week, development will be slow." },
  { q: "Is there a path to a full-time role for strong performers?", why: "Not every internship leads to a job — but knowing the answer helps you understand how seriously the company takes its interns." },
  { q: "What tools and platforms will I be trained on?", why: "Meta Ads Manager, Google Ads, Canva, and scheduling tools like Meta Business Suite should be standard at any digital marketing agency." },
];

const CYPHER_BULLETS = [
  "You work on live client campaigns from day one — not internal projects or mock briefs",
  "You are assigned to real accounts across industries: restaurants, fashion, real estate, education, and healthcare",
  "You receive structured weekly skills sessions covering Meta Ads, Google Ads, content strategy, and reporting",
  "Your work will be in the market — actual ads running, actual posts published, actual results you can screenshot for your portfolio",
  "Strong performers are offered full-time roles before we post new vacancies publicly",
  "The programme pays a monthly allowance of LKR 20,000 – 40,000",
];

const RELATED = [
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job in Sri Lanka" },
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
  { href: "/careers/digital-marketing-jobs-sri-lanka", label: "Full-time executive roles at Cypher Digital" },
];

const BlogPost131 = () => (
  <>
    <SEOHead
      title="Marketing Internships in Sri Lanka — The Honest 2026 Guide | Cypher Digital"
      description="What a good marketing internship in Sri Lanka actually involves, what you should be paid, the questions to ask before saying yes, and how to convert it to a full-time job."
      canonical="https://cypherdigital.lk/blog/marketing-internship-sri-lanka-guide"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Marketing Internships in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Intern Guide</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 7 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Marketing Internships in Sri Lanka — The Honest 2026 Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What a good internship actually involves, what you should be paid, the questions to ask before saying yes, and how to turn it into a full-time job.
            </p>
            <Link to="/careers/marketing-internship-sri-lanka" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              Apply for Cypher Digital's marketing internship →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>A marketing internship in Sri Lanka can either be the best career decision you make or a wasted few months fetching coffee and doing tasks nobody wants. The difference is almost entirely in which company and programme you choose. This guide gives you an honest view of what to look for, what to expect to be paid, and what you will genuinely learn at a good digital marketing internship in Colombo.</p>
            <p>If you are ready to apply, see our current <Link to="/careers/marketing-internship-sri-lanka" className="text-primary font-semibold underline">marketing internship in Sri Lanka at Cypher Digital</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">What to look for in a marketing internship in Sri Lanka</h2>
            <p>The most important thing to evaluate about any internship is not the company name — it is what you will actually be doing from day one. Many internships in Sri Lanka are structured around administrative tasks and observation rather than real work. Here is how to tell the difference before you accept an offer:</p>
            <div className="grid gap-2 my-5 not-prose">
              {FLAGS.map((item) => (
                <div key={item.text} className={`rounded-md p-3 flex gap-3 items-start ${item.flag === "green" ? "bg-emerald-50 dark:bg-emerald-950/30" : "bg-red-50 dark:bg-red-950/30"}`}>
                  <span className={`text-[11px] font-bold whitespace-nowrap pt-0.5 ${item.flag === "green" ? "text-emerald-800 dark:text-emerald-300" : "text-red-800 dark:text-red-300"}`}>{item.flag === "green" ? "GREEN FLAG" : "RED FLAG"}</span>
                  <span className={`text-sm leading-snug ${item.flag === "green" ? "text-emerald-900 dark:text-emerald-200" : "text-red-900 dark:text-red-200"}`}>{item.text}</span>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Paid vs unpaid marketing internships in Sri Lanka — what is normal?</h2>
            <p>Unpaid internships exist in Sri Lanka and are more common at smaller companies and startups. However, the standard at established digital marketing agencies in Colombo is a paid monthly allowance. For a 3–6 month internship at a Colombo agency, you should expect:</p>
            <div className="bg-card border border-border rounded-lg overflow-hidden my-5 not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-background"><th className="p-3 text-left font-bold">Type</th><th className="p-3 text-left font-bold">Monthly allowance</th><th className="p-3 text-left font-bold">What it signals</th></tr>
                </thead>
                <tbody>
                  {PAY_ROWS.map((r, i) => (
                    <tr key={r[0]} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                      <td className="p-3 font-medium">{r[0]}</td>
                      <td className="p-3">{r[1]}</td>
                      <td className="p-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Cypher Digital's <Link to="/careers/marketing-internship-sri-lanka" className="text-primary font-semibold underline">marketing internship in Sri Lanka</Link> is a paid programme. We believe interns who are compensated are more engaged, more productive, and get more out of the experience.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">What you will actually learn in a good digital marketing internship</h2>
            <p>A well-structured marketing internship at a Colombo agency will cover skills that take months to learn through self-study because you are applying them on real client accounts with real budgets.</p>
            <div className="not-prose space-y-3 my-5">
              {LEARNING.map((item, i) => (
                <div key={item.skill} className="bg-card border border-border rounded-lg p-5 flex gap-4">
                  <div className="font-heading font-black text-2xl text-muted-foreground/30 flex-shrink-0 leading-none">0{i + 1}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.skill}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Can a marketing internship become a full-time job in Sri Lanka?</h2>
            <p>Yes — and at good agencies it regularly does. The conversion from intern to full-time employee is one of the most reliable hiring pathways in the Sri Lanka digital marketing industry because agencies can evaluate a candidate over months of real work rather than a single interview.</p>
            <p>At Cypher Digital, strong interns are considered for full-time roles before we post new vacancies publicly. The criteria for conversion are straightforward: you complete work on time, you are proactive in asking questions and developing your skills, and your quality improves month on month.</p>
            <p>To maximise your chances of converting to a full-time <Link to="/careers" className="text-primary font-semibold underline">digital marketing job in Sri Lanka</Link>, treat every brief as if it were your permanent job. Deliver before deadlines, ask for feedback on every piece of work, and develop a second skill alongside your primary one.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Questions to ask before accepting a marketing internship in Sri Lanka</h2>
            <p>Ask these questions before accepting any internship offer. The quality of the answers will tell you more than any description on the company's website:</p>
            <div className="not-prose space-y-3 my-5">
              {QUESTIONS.map((item) => (
                <div key={item.q} className="bg-card border border-border rounded-lg p-4">
                  <div className="font-bold text-sm mb-1">"{item.q}"</div>
                  <div className="text-xs text-muted-foreground leading-relaxed"><span className="text-primary font-semibold">Why ask: </span>{item.why}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Cypher Digital's marketing internship in Sri Lanka — what to expect</h2>
            <p>Cypher Digital's <Link to="/careers/marketing-internship-sri-lanka" className="text-primary font-semibold underline">marketing internship in Sri Lanka</Link> is a 3–6 month paid programme based in Colombo. Here is what makes it different from most internships in the market:</p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-5 not-prose">
              {CYPHER_BULLETS.map((t) => (
                <div key={t} className="text-sm py-1.5 border-b border-primary/10 last:border-0 flex gap-2"><span className="text-primary">✓</span>{t}</div>
              ))}
            </div>
            <p>To understand what skills to develop before applying, read our guide on <Link to="/blog/digital-marketing-skills-sri-lanka" className="text-primary font-semibold underline">top 10 digital marketing skills employers in Sri Lanka look for</Link>. For salary expectations when you progress to a full-time role, see our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">digital marketing salary guide for Sri Lanka 2026</Link>.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now accepting intern applications</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for Cypher Digital's marketing internship in Sri Lanka</h2>
            <p className="text-background/70 mb-6">Work on live campaigns for 800+ brands. Paid monthly allowance. Real portfolio work from day one. Apply via WhatsApp — we respond within 24 hours.</p>
            <div className="grid gap-2 mb-5">
              {VACANCIES.map((v) => (
                <Link key={v.title} to={v.href} className="bg-background/5 border border-background/10 rounded-lg px-4 py-3 flex justify-between items-center flex-wrap gap-2 hover:bg-background/10">
                  <div>
                    <span className="font-bold text-sm text-background">{v.title}</span>
                    {v.hot && <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded ml-2">OPEN</span>}
                    <div className="text-xs text-background/50 mt-0.5">{v.type}</div>
                  </div>
                  <span className="text-sm text-primary font-semibold">{v.salary}</span>
                </Link>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link to="/careers" className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">View all digital marketing jobs in Sri Lanka →</Link>
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20want%20to%20apply%20for%20the%20Marketing%20Internship." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost131;