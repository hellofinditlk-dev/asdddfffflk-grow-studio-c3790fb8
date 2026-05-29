import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship (3–6 months)", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

type Course = {
  name: string; provider: string; time: string; cost: string; cert: string; best: string; why: string; link: string; free: boolean;
};

const FREE_COURSES: Course[] = [
  { name: "Meta Blueprint — Facebook & Instagram Advertising", provider: "Meta (official)", time: "2–3 weeks", cost: "Free", cert: "Yes — Meta Certified Digital Marketing Associate", best: "Paid ads, social media management",
    why: "This is the single most valuable certification for getting hired at a digital marketing agency in Sri Lanka. Almost every agency runs Meta Ads for clients. The certification proves you understand campaign structure, audience targeting, and ad performance. Complete this one before any other.",
    link: "https://www.facebook.com/business/learn", free: true },
  { name: "Google Skillshop — Google Ads Certification", provider: "Google (official)", time: "1–2 weeks", cost: "Free", cert: "Yes — Google Ads Certified", best: "Paid search, Google campaigns",
    why: "Google Skillshop offers free certifications for Google Ads Search, Display, Video (YouTube), and Performance Max. Start with Search. Combined with Meta Blueprint, these two certifications make you competitive for most entry-level digital marketing executive roles in Colombo.",
    link: "https://skillshop.withgoogle.com", free: true },
  { name: "Google Analytics 4 Certification", provider: "Google (official)", time: "1 week", cost: "Free", cert: "Yes — GA4 Certified", best: "SEO, performance reporting, all roles",
    why: "GA4 replaced Universal Analytics and agencies use it to track website performance for clients. Understanding GA4 — sessions, conversions, traffic sources — is now expected in almost any digital marketing role above internship level.",
    link: "https://skillshop.withgoogle.com", free: true },
  { name: "HubSpot Academy — Inbound Marketing", provider: "HubSpot", time: "1 week", cost: "Free", cert: "Yes — HubSpot Certified", best: "Content marketing, SEO, email marketing",
    why: "HubSpot Academy covers inbound marketing strategy, content creation, email marketing, and lead generation. The certification is recognised internationally and is particularly useful for roles at agencies working with B2B or education clients.",
    link: "https://academy.hubspot.com", free: true },
  { name: "Google Digital Garage — Fundamentals of Digital Marketing", provider: "Google", time: "1–2 weeks", cost: "Free", cert: "Yes — IAB accredited", best: "Fresh beginners — broad overview",
    why: "A good starting point if you are completely new to digital marketing. It covers SEO, paid search, social media, analytics, and email at a beginner level. Do this first, then move on to the Meta Blueprint and Google Ads certifications above for deeper knowledge.",
    link: "https://learndigital.withgoogle.com", free: true },
];

const PAID_COURSES: Course[] = [
  { name: "TikTok Academy for Business", provider: "TikTok (official)", time: "1–2 weeks", cost: "Free", cert: "Yes — TikTok Ads certification", best: "TikTok Ads, short-form video marketing",
    why: "TikTok's official training platform covers TikTok Ads Manager, campaign setup, audience targeting, and creative best practices. This is the newest and least competitive certification in Sri Lanka — making it a strong differentiator for anyone applying for digital marketing specialist roles.",
    link: "https://www.tiktok.com/business/en/academy", free: true },
  { name: "Coursera — Meta Social Media Marketing Professional Certificate", provider: "Meta / Coursera", time: "5–6 months (part-time)", cost: "Paid (financial aid available)", cert: "Yes — Meta Professional Certificate", best: "Comprehensive social media and ads career path",
    why: "A structured programme covering social media strategy, content creation, advertising, and analytics. More comprehensive than individual certifications and recognised internationally. Financial aid is available through Coursera if cost is a barrier.",
    link: "https://www.coursera.org", free: false },
  { name: "Udemy — Meta Ads / Facebook Advertising courses", provider: "Udemy", time: "10–20 hours", cost: "LKR 800–3,000 (frequent sales)", cert: "Udemy completion certificate", best: "Practical Meta Ads skills, quick learning",
    why: "Udemy courses are practical and regularly updated. They are not as recognised as official certifications but are excellent for building real hands-on knowledge. Buy during Udemy's frequent sales — courses that list at LKR 25,000 regularly go on sale for under LKR 2,000.",
    link: "https://www.udemy.com", free: false },
];

const LOCAL_QUESTIONS = [
  { q: "Is the curriculum up to date for 2026?", a: "Digital marketing changes fast. A course that does not cover Meta Ads, Google Performance Max, and TikTok Ads is already outdated. Ask specifically what ad platforms are covered." },
  { q: "Do trainers have agency or client experience?", a: "Theory without practice is not useful for agency jobs. Ask whether trainers have worked at a digital marketing agency or run real campaigns for paying clients." },
  { q: "Will you work on real campaigns during the course?", a: "The best local programmes give students a small ad budget and let them run real campaigns. This generates real data and real portfolio content — far more valuable than theoretical assignments." },
  { q: "What is the job placement or alumni track record?", a: "Ask how many recent graduates got marketing jobs in Colombo within three months of completing the course. A good programme will have this number. If they can't tell you, that is a warning sign." },
];

const RELATED = [
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job in Sri Lanka" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/careers/marketing-internship-sri-lanka", label: "Apply for our marketing internship" },
];

const CourseCard = ({ course }: { course: Course }) => (
  <div className="bg-card border border-border rounded-lg p-5 my-3">
    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
      <div className="font-heading font-bold text-base flex-1">{course.name}</div>
      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${course.free ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`}>{course.cost}</span>
    </div>
    <div className="flex gap-2 flex-wrap mb-3">
      <span className="bg-secondary text-secondary-foreground text-[11px] px-2 py-0.5 rounded">By: {course.provider}</span>
      <span className="bg-secondary text-secondary-foreground text-[11px] px-2 py-0.5 rounded">Time: {course.time}</span>
      <span className="bg-primary/10 text-primary text-[11px] font-semibold px-2 py-0.5 rounded">Cert: {course.cert}</span>
      <span className="bg-accent/10 text-accent text-[11px] px-2 py-0.5 rounded">Best for: {course.best}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{course.why}</p>
    <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-primary font-semibold underline">Visit course →</a>
  </div>
);

const BlogPost128 = () => (
  <>
    <SEOHead
      title="Digital Marketing Courses in Sri Lanka — Free and Paid Options (2026) | Cypher Digital"
      description="The best digital marketing courses and certifications in Sri Lanka 2026 — free Meta Blueprint, Google Ads, paid Coursera and Udemy. Ranked by what agencies value."
      canonical="https://cypherdigital.lk/blog/digital-marketing-courses-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Digital Marketing Courses in Sri Lanka 2026" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Learning Guide</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 9 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Digital Marketing Courses in Sri Lanka — Free and Paid Options (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The courses and certifications that actually get you hired at a digital marketing agency in Sri Lanka — ranked by what employers value most.
            </p>
            <Link to="/careers" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              See open digital marketing jobs in Sri Lanka →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>
              You do not need to spend a large amount of money or enrol in a university programme to get a digital marketing job in Sri Lanka in 2026. The most valuable credentials are official platform certifications — and the two best ones, Meta Blueprint and Google Ads, are completely free.
            </p>
            <p>
              This guide covers which courses and certifications are worth your time, which ones agencies in Sri Lanka actually recognise, and how to go from completing a course to applying for your first role. Before diving in, see what skills are most in demand in our <Link to="/blog/digital-marketing-skills-sri-lanka" className="text-primary font-semibold underline">top 10 digital marketing skills guide for Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Free digital marketing courses and certifications worth doing</h2>
            <p>
              These five free options are the ones with the highest value in the Sri Lanka job market. Complete Meta Blueprint and Google Ads first — everything else is a bonus.
            </p>
            <div className="not-prose">
              {FREE_COURSES.map((c) => <CourseCard key={c.name} course={c} />)}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Paid courses and programmes worth the investment</h2>
            <p>
              These options cost money but offer more depth, structure, or internationally recognised credentials. If budget is limited, complete all the free certifications above first.
            </p>
            <div className="not-prose">
              {PAID_COURSES.map((c) => <CourseCard key={c.name} course={c} />)}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Which certification gets you hired fastest in Sri Lanka?</h2>
            <p>If your only goal is to get your first digital marketing job in Sri Lanka as quickly as possible, here is the fastest path:</p>
            <div className="bg-foreground rounded-lg p-6 my-5 not-prose">
              {[
                { week: "Week 1–2", action: "Complete Meta Blueprint — Digital Marketing Associate exam" },
                { week: "Week 3", action: "Complete Google Ads Search certification via Skillshop" },
                { week: "Week 4", action: "Build two portfolio case studies — one Meta Ads, one Google Ads (mock or real)" },
                { week: "Week 5", action: "Apply for digital marketing executive and internship roles in Colombo" },
              ].map((item, i, arr) => (
                <div key={item.week} className={`flex gap-4 ${i < arr.length - 1 ? "pb-3 mb-3 border-b border-background/10" : ""}`}>
                  <div className="min-w-[60px] text-[11px] font-bold text-primary pt-0.5">{item.week}</div>
                  <div className="text-sm text-background/80 leading-relaxed">{item.action}</div>
                </div>
              ))}
            </div>
            <p>
              Most people who follow this plan and build a basic portfolio are ready to apply for <Link to="/careers/digital-marketing-jobs-sri-lanka" className="text-primary font-semibold underline">digital marketing jobs in Sri Lanka</Link> within five weeks. For salary expectations before your interviews, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">2026 digital marketing salary guide for Sri Lanka</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Do you need a degree for digital marketing jobs in Sri Lanka?</h2>
            <p>
              No. Digital marketing agencies in Sri Lanka — including Cypher Digital — hire based on skills and portfolio, not academic credentials. A degree in marketing, IT, or business is useful background, but a candidate with Meta Blueprint certification and a portfolio of two real campaigns will be shortlisted ahead of a degree holder with no certifications or practical work.
            </p>
            <div className="bg-secondary border border-border rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">What Cypher Digital looks for when hiring</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Platform certification (Meta Blueprint or Google Ads)</li>
                <li>✓ Portfolio — 2 or more real or mock campaign examples</li>
                <li>✓ Understanding of key metrics: CTR, CPL, ROAS</li>
                <li>✓ Clear communication in WhatsApp and email</li>
                <li>✓ Reliability and ability to deliver on time</li>
              </ul>
            </div>
            <p>
              For a full guide on preparing your application, read <Link to="/blog/how-to-get-digital-marketing-job-sri-lanka" className="text-primary font-semibold underline">how to get a digital marketing job in Sri Lanka — the 2026 roadmap</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Local digital marketing training in Sri Lanka</h2>
            <p>
              Several institutes in Colombo offer digital marketing training programmes. These vary significantly in quality and industry recognition. When evaluating a local course, ask:
            </p>
            <div className="not-prose space-y-3 my-5">
              {LOCAL_QUESTIONS.map((item) => (
                <div key={item.q} className="bg-card border border-border rounded-lg p-4">
                  <div className="font-bold text-sm mb-1">{item.q}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
            <p>
              A strong local course combined with official certifications from Meta and Google is the most credible combination for job applications in Sri Lanka.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">After your course — where to apply</h2>
            <p>
              Once you have at least one certification and a portfolio with two or more pieces, you are ready to start applying. Do not wait until you feel "completely ready" — that point rarely comes, and agencies prefer candidates who are eager to learn on the job over those who have spent two years over-preparing.
            </p>
            <p>
              If you are a student or have less than 6 months of relevant experience, start by applying for a <Link to="/careers/marketing-internship-sri-lanka" className="text-primary font-semibold underline">marketing internship in Sri Lanka</Link>. A hands-on internship at an agency will develop your skills faster than any course.
            </p>
            <p>
              If you have completed your certifications and have a portfolio ready, apply directly for junior roles. See all current <Link to="/careers" className="text-primary font-semibold underline">digital marketing jobs in Sri Lanka at Cypher Digital</Link> — we review applications within 24 hours via WhatsApp.
            </p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring at Cypher Digital — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Put your new skills to work</h2>
            <p className="text-background/70 mb-6">
              Apply via WhatsApp — we respond within 24 hours.
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20read%20your%20courses%20guide%20and%20want%20to%20apply." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
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

export default BlogPost128;