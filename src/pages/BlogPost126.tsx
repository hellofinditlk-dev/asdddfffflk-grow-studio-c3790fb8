import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship (3–6 months)", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

const SPECIALISATIONS = [
  { role: "Paid Ads (Meta & Google)", desc: "The highest-paying entry point. Manage Facebook, Instagram, and Google campaigns. Requires analytical thinking. Leads to Digital Marketing Specialist roles.", link: "/careers/digital-marketing-specialist-sri-lanka", linkText: "Specialist jobs at Cypher Digital" },
  { role: "Social Media Management", desc: "Creating and scheduling content for Facebook, Instagram, and TikTok. Good starting point. Moves faster when you add paid ads skills.", link: "/careers/digital-marketing-jobs-sri-lanka", linkText: "Executive roles at Cypher Digital" },
  { role: "SEO", desc: "Growing website traffic through search engines. Slower to show results but high demand. Good for people who enjoy writing and research.", link: null as string | null, linkText: null as string | null },
  { role: "Graphic Design", desc: "Creating visuals for ads, social media, and brand identity. Requires Adobe or Canva proficiency. High demand at every agency.", link: "/careers/graphic-designer-jobs-sri-lanka", linkText: "Designer jobs at Cypher Digital" },
  { role: "Video Editing", desc: "Editing Reels, TikToks, and YouTube ads. Growing fast. Editors who understand pacing for paid ads earn significantly more.", link: "/careers/video-editor-jobs-sri-lanka", linkText: "Video editor jobs at Cypher Digital" },
];

const PORTFOLIO_STEPS = [
  { num: "01", title: "Create a mock campaign", body: "Pick a local Sri Lankan business — a restaurant, clothing brand, or salon. Design a Facebook ad campaign for them: write the ad copy, choose a target audience, set a hypothetical budget, and explain what results you would expect. Present this as a PDF case study." },
  { num: "02", title: "Run a real campaign with a small budget", body: "LKR 2,000–5,000 on Facebook Ads or Google Ads is enough to generate real data. Promote anything — a friend's business, a local event, even a personal project. Screenshot the results: impressions, CTR, spend, and reach. Real numbers beat mock-ups." },
  { num: "03", title: "Design spec work (for designers and video editors)", body: "Redesign social media posts for a brand you like. Edit a product video using free footage. Create three logo concepts for a fictional business. Package these with a brief explaining your creative thinking." },
  { num: "04", title: "Build a simple portfolio site", body: "Use Canva, Notion, or a free website builder. Keep it clean — your name, your specialisation, two or three portfolio pieces, your certifications, and a WhatsApp contact link. Agencies in Sri Lanka review portfolios on mobile, so make sure it works on a phone." },
];

const JOB_SOURCES = [
  { source: "Agency websites directly", detail: "The best roles are posted on agency websites before they reach job boards. Check the careers pages of digital marketing agencies in Colombo weekly. Cypher Digital posts all openings at our careers page.", link: "/careers", linkText: "Cypher Digital careers page" },
  { source: "LinkedIn Sri Lanka", detail: "Set up job alerts for 'digital marketing Sri Lanka' and 'marketing executive Colombo'. Many agencies post here. Connect with agency founders and marketing managers — a referral matters more than a CV.", link: null as string | null, linkText: null as string | null },
  { source: "Local job boards", detail: "TopJobs.lk and Jobs.lk list marketing roles regularly. Filter by 'digital marketing' or 'marketing executive' in Colombo. Be aware that these boards are often behind — the best roles fill before they're listed publicly.", link: null as string | null, linkText: null as string | null },
  { source: "WhatsApp and Telegram groups", detail: "Several Sri Lanka marketing and business communities share job openings in group chats. Ask in Facebook groups for Sri Lankan marketers and entrepreneurs.", link: null as string | null, linkText: null as string | null },
  { source: "University career boards", detail: "If you are a student or recent graduate, SLIIT, NSBM, and other Colombo universities post internship and junior role vacancies. Many agencies recruit directly from these boards.", link: null as string | null, linkText: null as string | null },
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary in Sri Lanka 2026" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
  { href: "/blog/digital-marketing-courses-sri-lanka", label: "Best digital marketing courses in Sri Lanka" },
];

const BlogPost126 = () => (
  <>
    <SEOHead
      title="How to Get a Digital Marketing Job in Sri Lanka — 2026 Roadmap | Cypher Digital"
      description="Step-by-step 2026 roadmap to getting hired for a digital marketing job in Sri Lanka — qualifications, certifications, portfolio building, and where to apply."
      canonical="https://cypherdigital.lk/blog/how-to-get-digital-marketing-job-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How to Get a Digital Marketing Job in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Career Guide</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 8 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              How to Get a Digital Marketing Job in Sri Lanka — 2026 Roadmap
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A step-by-step guide covering qualifications, certifications, portfolio building, and where to apply — whether you're a fresh graduate or switching careers.
            </p>
            <Link to="/careers" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              See open digital marketing jobs in Sri Lanka →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>
              Getting your first digital marketing job in Sri Lanka is more straightforward than most people think — but only if you approach it the right way. You do not need a university degree, and you do not need years of experience. What you need is the right specialisation, a small portfolio of real work, and knowledge of where agencies are hiring.
            </p>
            <p>
              This guide gives you a realistic step-by-step roadmap — from choosing your specialisation all the way to submitting your application. If you want to jump straight to what is available right now, see the current <Link to="/careers" className="text-primary font-semibold underline">digital marketing jobs in Sri Lanka at Cypher Digital</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">What qualifications do you need for digital marketing jobs in Sri Lanka?</h2>
            <p>
              Most digital marketing agencies in Sri Lanka — including Cypher Digital — do not require a formal degree. What they look for is a combination of practical skills, platform knowledge, and a portfolio that shows you can produce results.
            </p>
            <p>
              That said, a degree in marketing, business, IT, or communications is useful background. The single most valuable credential is a recognised platform certification — specifically Meta Blueprint for paid social media roles, or Google Ads certification for search advertising roles. Both are free and take 1–2 weeks to complete.
            </p>
            <div className="bg-secondary border border-border rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">What agencies look at when hiring:</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Platform certifications (Meta Blueprint, Google Ads)</li>
                <li>✓ Portfolio — real campaign screenshots or spec work</li>
                <li>✓ Understanding of metrics: CTR, CPL, ROAS, CPC</li>
                <li>✓ Ability to write clear copy for ads and captions</li>
                <li>✓ Basic design skills (Canva at minimum)</li>
              </ul>
            </div>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Step 1 — Pick your specialisation</h2>
            <p>
              The biggest mistake people make when entering digital marketing is trying to learn everything at once. Agencies hire specialists, not generalists — especially at the entry level. Pick one area, get good at it, then expand.
            </p>
            <div className="not-prose space-y-3 my-5">
              {SPECIALISATIONS.map((s) => (
                <div key={s.role} className="bg-card border border-border rounded-lg p-4">
                  <div className="font-bold text-sm mb-1">{s.role}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
                  {s.link && <Link to={s.link} className="text-xs text-primary font-semibold underline mt-2 inline-block">→ {s.linkText}</Link>}
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Step 2 — Get certified (Meta Blueprint and Google Ads are free)</h2>
            <p>Certifications are the fastest way to prove your knowledge before you have real client experience. The two most valued in the Sri Lanka job market are:</p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Meta Blueprint certification</h3>
            <p>
              Meta's free certification programme covers Facebook and Instagram advertising from beginner to advanced. The Meta Certified Digital Marketing Associate exam is the one to aim for first. It demonstrates you understand campaign objectives, audience targeting, and ad performance measurement. Most agencies in Sri Lanka will shortlist you purely on the strength of this certificate.
            </p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Google Ads certification (Google Skillshop)</h3>
            <p>
              Free through Google Skillshop. Complete the Search Advertising certification first, then add Display and YouTube. Each certification takes roughly 3–5 hours of study. Combined with Meta Blueprint, these two credentials make you a stronger candidate than the majority of applicants for <Link to="/careers" className="text-primary font-semibold underline">digital marketing jobs in Sri Lanka</Link>.
            </p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Other useful certifications</h3>
            <p>
              HubSpot Academy (free) covers inbound marketing, email marketing, and content strategy. Google Analytics 4 certification is worth adding if you're going into a data or SEO-focused role. None of these are required, but they strengthen your application.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Step 3 — Build a portfolio with no client experience</h2>
            <p>Every hiring manager in Sri Lanka will ask to see your portfolio. The good news is that you do not need paid clients to build one. Here is how to create portfolio pieces from scratch:</p>
            <div className="not-prose space-y-3 my-5">
              {PORTFOLIO_STEPS.map((s) => (
                <div key={s.num} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                  <div className="font-heading text-2xl font-extrabold text-muted-foreground/30 shrink-0">{s.num}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{s.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Step 4 — Where to find digital marketing jobs in Sri Lanka</h2>
            <p>There are several places to find digital marketing vacancies in Sri Lanka. Here is where to look and what each option is best for:</p>
            <div className="not-prose space-y-3 my-5">
              {JOB_SOURCES.map((s) => (
                <div key={s.source} className="bg-card border border-border rounded-lg p-4">
                  <div className="font-bold text-sm mb-1">{s.source}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {s.detail}
                    {s.link && <> <Link to={s.link} className="text-primary font-semibold underline">→ {s.linkText}</Link></>}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Step 5 — How to apply and what agencies look for</h2>
            <p>Most digital marketing agencies in Sri Lanka — including Cypher Digital — use WhatsApp for initial applications. Here is how to stand out:</p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Your opening WhatsApp message</h3>
            <p>Send: your name, the role you are applying for, your key skill or certification, and a link to your portfolio. Keep it under 100 words. Do not send a wall of text. Example:</p>
            <div className="bg-secondary border border-border rounded-lg p-4 my-4 font-mono text-sm not-prose">
              "Hi, I'm [Name]. I'm applying for the Graphic Designer role at Cypher Digital. I'm Meta Blueprint certified and have 2 years of agency design experience. Portfolio: [link]. Happy to share more samples."
            </div>
            <p>
              For salary expectations, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">digital marketing salary guide for Sri Lanka 2026</Link> before any interview. Going in with realistic numbers shows professionalism.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Should you start with an internship or full-time?</h2>
            <p>If you have less than 6 months of relevant experience and no portfolio, start with an internship. A good internship — one where you work on real client campaigns — will give you more progress in 3 months than a year of self-study.</p>
            <p>If you have a solid portfolio and at least one platform certification, apply directly for junior or executive full-time roles. Many agencies in Sri Lanka will hire people with strong portfolios over people with years of unfocused experience.</p>
            <p>
              Cypher Digital runs a paid <Link to="/careers/marketing-internship-sri-lanka" className="text-primary font-semibold underline">marketing internship in Sri Lanka</Link> lasting 3–6 months. Interns work on live client campaigns from day one — not administrative tasks — and the programme has a structured path to a full-time offer.
            </p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo, Sri Lanka</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for digital marketing jobs at Cypher Digital</h2>
            <p className="text-background/70 mb-6">
              We are actively hiring across paid ads, design, video, and internship roles. No lengthy forms — apply via WhatsApp and get a reply within 24 hours.
            </p>
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
              <Link to="/careers" className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
                View all digital marketing jobs in Sri Lanka →
              </Link>
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20read%20your%20job%20guide%20and%20want%20to%20apply." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
                Apply on WhatsApp
              </a>
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

export default BlogPost126;