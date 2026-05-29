import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

type Skill = {
  id: string; num: string; title: string; demand: string; salary: string; body: string;
  whatToLearn: string[]; link: string | null; linkText: string | null;
};

const SKILLS: Skill[] = [
  { id: "meta-ads", num: "01", title: "Meta Ads — Facebook & Instagram advertising", demand: "Very High", salary: "LKR 50K–200K",
    body: "Meta Ads is the most in-demand skill for digital marketing jobs in Sri Lanka right now. Almost every business with a marketing budget runs Facebook or Instagram campaigns. If you can set up, manage, and optimise Meta Ads campaigns — with real results to show — you will receive interview calls faster than any other specialisation.",
    whatToLearn: ["Campaign objectives and when to use each", "Audience targeting — interest, lookalike, retargeting", "Ad creative formats — single image, carousel, video", "Reading and interpreting Ads Manager data", "Meta Blueprint certification (free from Meta)"],
    link: "/careers/digital-marketing-specialist-sri-lanka", linkText: "Paid ads specialist jobs at Cypher Digital" },
  { id: "google-ads", num: "02", title: "Google Ads — Search, Display, and YouTube", demand: "High", salary: "LKR 50K–200K",
    body: "Google Ads specialists are consistently underpaid in Sri Lanka because there are far fewer certified practitioners than there are agencies that need them. If you specialise in Google Search campaigns — bidding strategy, keyword research, Quality Score optimisation — you will command a premium salary. YouTube Ads is growing fast for 2026.",
    whatToLearn: ["Search campaign setup and keyword match types", "Bidding strategies — manual CPC vs Smart Bidding", "Quality Score and Ad Rank fundamentals", "Google Ads certification via Google Skillshop (free)", "Performance Max campaigns"],
    link: "/careers/digital-marketing-specialist-sri-lanka", linkText: "Google Ads roles at Cypher Digital" },
  { id: "tiktok", num: "03", title: "TikTok Ads and organic content creation", demand: "High — fast growing", salary: "LKR 45K–180K",
    body: "TikTok has grown rapidly in Sri Lanka and businesses are scrambling for people who can both create engaging organic content and run TikTok Ads campaigns. This is the newest specialisation and has the least competition — meaning if you develop this skill now, you will be ahead of most applicants for the next 2–3 years.",
    whatToLearn: ["TikTok content strategy — hooks, trends, formats", "TikTok Ads Manager — campaign setup and optimisation", "Video filming and basic on-device editing", "Understanding TikTok's algorithm and engagement signals"],
    link: "/careers/digital-marketing-specialist-sri-lanka", linkText: "Specialist roles at Cypher Digital" },
  { id: "seo", num: "04", title: "SEO — on-page, technical, and local SEO", demand: "Steady — consistent demand", salary: "LKR 50K–200K",
    body: "SEO professionals are needed by every business that wants to appear on Google without paying for every click. The skill has a steep learning curve but very low competition at the senior level in Sri Lanka. Local SEO — helping Colombo-based businesses appear in 'near me' searches — is particularly in demand for agencies working with restaurants, salons, and retail brands.",
    whatToLearn: ["On-page SEO — title tags, H1-H6, meta descriptions", "Keyword research using free tools", "Technical SEO — site speed, mobile, Core Web Vitals", "Link building basics", "Google Search Console and GA4"],
    link: "/careers/digital-marketing-jobs-sri-lanka", linkText: "Executive roles that include SEO" },
  { id: "graphic-design", num: "05", title: "Graphic design — social media, ads, and brand identity", demand: "Very High", salary: "LKR 45K–150K",
    body: "Every digital marketing agency in Sri Lanka needs graphic designers — for social media creatives, ad visuals, brand identity, and print materials. The gap between a designer who can produce good work fast and one who is slow is enormous, and agencies pay accordingly. Speed and consistency matter as much as raw creativity.",
    whatToLearn: ["Canva — essential for quick agency turnarounds", "Adobe Photoshop and Illustrator — required for senior roles", "Design for social media — size formats, safe zones", "Brand identity principles", "Ad creative best practices — what makes an ad stop the scroll"],
    link: "/careers/graphic-designer-jobs-sri-lanka", linkText: "Graphic designer jobs at Cypher Digital" },
  { id: "video-editing", num: "06", title: "Video editing — Reels, TikToks, and YouTube ads", demand: "High", salary: "LKR 45K–150K",
    body: "Short-form video is now the dominant ad format across Facebook, Instagram, TikTok, and YouTube. Agencies need video editors who understand not just how to cut and colour-grade footage, but how to structure a video for maximum watch time and click-through rate. Editors who can turn around a Reel in 24 hours earn significantly more than those who are slow.",
    whatToLearn: ["CapCut — fastest tool for Reels and TikToks", "Adobe Premiere Pro — standard for professional edits", "DaVinci Resolve — free, industry-grade colour grading", "Structuring videos for paid ads — hook in first 2 seconds", "Subtitles, motion text, and sound design basics"],
    link: "/careers/video-editor-jobs-sri-lanka", linkText: "Video editor jobs at Cypher Digital" },
  { id: "analytics", num: "07", title: "Analytics and performance reporting", demand: "Steady", salary: "LKR 50K–200K",
    body: "Being able to read data and translate it into clear recommendations for clients is one of the most underrated skills in the Sri Lanka digital marketing job market. Agencies that handle paid ads budgets need people who can produce reports that clients actually understand. This skill sits on top of any specialisation and raises your salary significantly.",
    whatToLearn: ["Meta Business Suite — reading campaign data", "Google Analytics 4 — sessions, conversions, acquisition", "Building simple dashboards in Google Looker Studio (free)", "Understanding key metrics: CTR, CPL, ROAS, CPC, CAC"],
    link: null, linkText: null },
  { id: "copywriting", num: "08", title: "Copywriting — ad copy, captions, and content writing", demand: "Steady", salary: "LKR 45K–180K",
    body: "The ability to write clear, compelling copy is valuable in every digital marketing role. Ad headlines, Facebook post captions, Google ad descriptions, website landing page copy — all of these require someone who understands what motivates a customer to click or buy. Copywriting as a standalone skill is moderately paid, but combined with paid ads or SEO it becomes a premium skill.",
    whatToLearn: ["Direct response copywriting — writing for clicks and conversions", "Facebook and Instagram caption writing", "Google ad headline and description best practices", "SEO content writing — writing for both humans and search engines"],
    link: null, linkText: null },
  { id: "email", num: "09", title: "Email marketing and basic automation", demand: "Growing", salary: "LKR 50K–200K",
    body: "Email marketing is used by ecommerce, education, and hospitality businesses across Sri Lanka, and demand for people who can set up and manage campaigns is growing. Tools like Mailchimp and Klaviyo are straightforward to learn. The key skill is understanding segmentation — sending the right message to the right audience at the right time.",
    whatToLearn: ["Mailchimp or Klaviyo — campaign setup and sending", "List segmentation and tagging", "Welcome sequences and automated flows", "Email metrics — open rate, click rate, unsubscribe rate"],
    link: null, linkText: null },
  { id: "lead-gen", num: "10", title: "Lead generation strategy", demand: "High", salary: "LKR 50K–200K",
    body: "Understanding the full funnel — from running a top-of-funnel awareness ad, through retargeting, to converting a lead into a customer — is the most senior skill on this list and the one that commands the highest salaries. Most junior marketers understand individual tactics. Those who understand the full strategy become team leads and specialists.",
    whatToLearn: ["Full-funnel thinking — awareness, consideration, conversion", "Lead magnet creation — what gets people to opt in", "Landing page optimisation for lead capture", "WhatsApp and Messenger automation for lead nurturing", "Reporting lead quality, not just volume"],
    link: "/careers/digital-marketing-specialist-sri-lanka", linkText: "Specialist roles that require lead gen strategy" },
];

const RELATED = [
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job in Sri Lanka" },
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/digital-marketing-courses-sri-lanka", label: "Best courses to learn these skills" },
];

const BlogPost127 = () => (
  <>
    <SEOHead
      title="Top 10 Digital Marketing Skills Employers in Sri Lanka Look For (2026) | Cypher Digital"
      description="The top 10 digital marketing skills Sri Lankan agencies hire for in 2026 — Meta Ads, Google Ads, TikTok, SEO, design, video, analytics. Salary ranges included."
      canonical="https://cypherdigital.lk/blog/digital-marketing-skills-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Top Digital Marketing Skills Sri Lanka 2026" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Skills Guide</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 10 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Top 10 Digital Marketing Skills Employers in Sri Lanka Look For in 2026
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From Meta Ads to lead generation strategy — what agencies actually want to see, how much each skill pays, and where to learn it.
            </p>
            <Link to="/careers" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              See open digital marketing jobs in Sri Lanka →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>
              Knowing <em>which</em> skills to develop is the difference between spending months learning things nobody wants and landing a digital marketing job within weeks of finishing your studies. This guide is based on what agencies in Sri Lanka — including <Link to="/" className="text-primary font-semibold underline">Cypher Digital</Link> — actually look for when hiring across all roles.
            </p>
            <p>
              Each skill below includes the current demand level, approximate salary range, and exactly what to learn. For the full salary breakdown by role, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">digital marketing salary guide for Sri Lanka 2026</Link>.
            </p>

            {SKILLS.map((skill, i) => (
              <section key={skill.id} id={skill.id} className="mt-10 not-prose">
                <div className="flex items-start gap-4 mb-3">
                  <div className="font-heading text-3xl font-extrabold text-muted-foreground/30 shrink-0">{skill.num}</div>
                  <div className="flex-1">
                    <h2 className="font-heading text-xl font-bold mb-2">{skill.title}</h2>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-secondary text-secondary-foreground text-[11px] font-bold px-2 py-0.5 rounded-full">Demand: {skill.demand}</span>
                      <span className="bg-primary/10 text-primary text-[11px] font-bold px-2 py-0.5 rounded-full">Salary: {skill.salary}/mo</span>
                    </div>
                  </div>
                </div>
                <p className="text-base text-foreground leading-relaxed mb-3">{skill.body}</p>
                <div className="bg-card border border-border rounded-lg p-4 my-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">What to learn</div>
                  {skill.whatToLearn.map((item) => (
                    <div key={item} className="text-sm text-foreground py-1 flex gap-2 border-b border-border/50 last:border-0">
                      <span className="text-primary shrink-0">→</span>{item}
                    </div>
                  ))}
                </div>
                {skill.link && (
                  <p className="text-sm mt-2">
                    <Link to={skill.link} className="text-primary font-semibold underline">→ {skill.linkText}</Link>
                  </p>
                )}
                {i < SKILLS.length - 1 && <hr className="border-t border-border mt-8" />}
              </section>
            ))}

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Which skill should you learn first?</h2>
            <p>
              If you want to get hired as fast as possible and earn the highest starting salary, learn <strong>Meta Ads first</strong>. Complete your Meta Blueprint certification, build two or three mock campaign case studies, and start applying for <Link to="/careers/digital-marketing-jobs-sri-lanka" className="text-primary font-semibold underline">digital marketing jobs in Sri Lanka</Link>. This is the fastest path from zero experience to a paying role.
            </p>
            <p>
              If you are more creative and less analytical, start with <strong>graphic design or video editing</strong>. Build a portfolio of 6–10 pieces, learn the tools used by agencies (Canva minimum, Adobe for senior roles), and apply for <Link to="/careers/graphic-designer-jobs-sri-lanka" className="text-primary font-semibold underline">graphic designer jobs in Sri Lanka</Link> or <Link to="/careers/video-editor-jobs-sri-lanka" className="text-primary font-semibold underline">video editor jobs in Sri Lanka</Link>.
            </p>
            <p>
              Once you are working, learn a second skill alongside your primary one. The marketers who reach LKR 150,000+ per month are almost always specialists who can also handle one adjacent skill — an ads specialist who can also design creatives, or a designer who can run Meta Ads campaigns.
            </p>
            <p>
              For a full roadmap, read <Link to="/blog/how-to-get-digital-marketing-job-sri-lanka" className="text-primary font-semibold underline">how to get a digital marketing job in Sri Lanka — the 2026 guide</Link>.
            </p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply your skills at Cypher Digital</h2>
            <p className="text-background/70 mb-6">
              We are hiring across paid ads, graphic design, video editing, and internship roles. Apply via WhatsApp — we respond within 24 hours.
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20read%20your%20skills%20guide%20and%20want%20to%20apply." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
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

export default BlogPost127;