import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 55,000 – 130,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: true },
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 60,000 – 175,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance", salary: "LKR 50,000 – 120,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship", salary: "LKR 25,000 – 45,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

const SALARY_TABLE = [
  { level: "Junior (0–1 yr)", range: "LKR 55,000 – 75,000", skills: "Canva, basic Photoshop" },
  { level: "Mid-level (2–3 yr)", range: "LKR 80,000 – 110,000", skills: "Adobe suite, brand identity" },
  { level: "Senior (4+ yr)", range: "LKR 120,000 – 180,000+", skills: "Full Adobe, motion, strategy" },
];

const DAILY_TASKS = [
  "Social media creatives — Facebook, Instagram, TikTok cover images and Stories",
  "Paid ad visuals — static and animated creatives for Meta and Google Ads",
  "Brand identity — logos, colour palettes, typography guidelines for new clients",
  "Marketing collateral — flyers, brochures, email headers, digital banners",
  "Presentation decks and reports for client meetings",
];

const PORTFOLIO_ITEMS = [
  { title: "Social media content sets", body: "Create a full month of social media posts for a fictional or real Sri Lankan brand — a restaurant, clothing brand, or salon. Design for Facebook, Instagram feed, and Stories. Show consistency across all formats. This demonstrates you can maintain a visual identity across a content calendar, which is what agencies do daily." },
  { title: "Ad creative examples", body: "Design three Meta ad creatives for a product or service. For each one, write a brief explaining your creative choices — why you chose that headline, that colour, that image crop. Agencies hire designers who understand why something works, not just designers who can make things look good." },
  { title: "Brand identity project", body: "Create a logo, colour palette, typography guide, and three branded mockups for a fictional Sri Lankan business. This demonstrates you understand brand thinking beyond just individual posts. Even one strong brand identity project significantly lifts a portfolio." },
  { title: "Before and after redesigns", body: "Take a real Sri Lankan brand's social media presence and redesign three posts to show how you would improve them. This shows critical thinking and understanding of design principles without needing the brand as a client." },
];

const RELATED = [
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job in Sri Lanka" },
  { href: "/blog/digital-marketing-portfolio-sri-lanka", label: "How to build a portfolio with no experience" },
  { href: "/blog/video-editor-jobs-sri-lanka", label: "Video editor jobs in Sri Lanka guide" },
];

const BlogPost129 = () => (
  <>
    <SEOHead
      title="Graphic Designer Jobs in Sri Lanka — What to Expect, What It Pays (2026) | Cypher Digital"
      description="Salary ranges, required tools, portfolio advice, and how to land your first graphic design role at a digital marketing agency in Sri Lanka in 2026."
      canonical="https://cypherdigital.lk/blog/graphic-designer-jobs-sri-lanka-guide"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Graphic Designer Jobs in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Design Careers</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 8 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Graphic Designer Jobs in Sri Lanka — What to Expect, What It Pays (2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Salary ranges, required tools, portfolio advice, and how to land your first graphic design role at a digital marketing agency in Sri Lanka.
            </p>
            <Link to="/careers/graphic-designer-jobs-sri-lanka" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              View graphic designer jobs at Cypher Digital →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>
              Graphic designer jobs in Sri Lanka are among the most consistently in-demand roles in the digital marketing industry. Every agency that handles social media, paid ads, or brand work needs designers — and the gap between a fast, reliable designer and a slow one is reflected directly in salary. This guide covers what agencies in Sri Lanka actually expect, what the role pays in 2026, and how to build a portfolio that gets you hired.
            </p>
            <p>
              If you are ready to apply now, see our current <Link to="/careers/graphic-designer-jobs-sri-lanka" className="text-primary font-semibold underline">graphic designer jobs in Sri Lanka at Cypher Digital</Link>.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">What does a graphic designer do at a digital marketing agency?</h2>
            <p>
              At a digital marketing agency in Sri Lanka, a graphic designer's work is almost entirely focused on digital output — social media creatives, paid ad visuals, landing page graphics, email headers, and occasionally brand identity work. The pace is faster than in-house design because you work across multiple clients simultaneously.
            </p>
            <p>
              A typical week for a designer at an agency like <Link to="/" className="text-primary font-semibold underline">Cypher Digital</Link> includes producing social media posts and Stories for three to five client accounts, designing ad creatives for Meta and Google campaigns, creating monthly content calendars, and occasionally handling logo or brand identity work for new clients.
            </p>
            <div className="bg-card border border-border rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-3">Day-to-day design tasks at an agency</div>
              {DAILY_TASKS.map((t) => (
                <div key={t} className="text-sm text-muted-foreground py-1.5 border-b border-border/50 last:border-0 flex gap-2">
                  <span className="text-primary">→</span>{t}
                </div>
              ))}
            </div>
            <p>
              Speed matters enormously. An agency designer who can produce a high-quality social media creative in 20 minutes is worth significantly more than one who takes two hours. Clients expect fast turnarounds, and agencies build their team capacity around designers who can deliver reliably under pressure.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Graphic designer salary in Sri Lanka — 2026 figures</h2>
            <p>
              Graphic designer salaries in Sri Lanka range widely based on experience, tool proficiency, and the type of employer. Agency salaries are competitive with in-house roles and typically offer more variety in the work.
            </p>
            <div className="grid gap-2.5 my-5 not-prose">
              {SALARY_TABLE.map((row) => (
                <div key={row.level} className="bg-secondary rounded-lg p-4 flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <div className="font-bold text-sm">{row.level}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{row.skills}</div>
                  </div>
                  <div className="font-heading font-bold text-base text-primary">{row.range}</div>
                </div>
              ))}
            </div>
            <p>
              The biggest salary jumps come from adding motion graphics and video editing skills alongside static design, and from developing the ability to design specifically for paid advertising — understanding what visual formats drive CTR and conversions, not just what looks good. For the full picture across all digital marketing roles, read our <Link to="/blog/digital-marketing-salary-sri-lanka-2026" className="text-primary font-semibold underline">digital marketing salary guide for Sri Lanka 2026</Link>.
            </p>
            <p>Part-time and freelance graphic design work in Sri Lanka typically pays LKR 500–2,000 per post or creative, depending on complexity and client type.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Adobe vs Canva — what do agencies in Sri Lanka actually use?</h2>
            <p>This is one of the most common questions from designers entering the Sri Lanka job market. The honest answer is both — and knowing when to use which is itself a valued skill.</p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Canva</h3>
            <p>Canva is used daily at most digital marketing agencies in Sri Lanka for social media creatives, quick ad visuals, and presentation decks. It is fast, accessible on any device, and allows multiple team members to collaborate on brand templates. Knowing Canva well is the minimum requirement for a graphic designer role at any agency.</p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Adobe Photoshop and Illustrator</h3>
            <p>Adobe Photoshop is required for any role that involves photo retouching, complex ad compositing, or print work. Adobe Illustrator is essential for logo design and any vector work. At the junior level, Photoshop is more important than Illustrator. By mid-level, you should be proficient in both.</p>
            <h3 className="font-heading text-lg font-bold mt-6 mb-2">Adobe After Effects and Premiere Pro</h3>
            <p>Designers who can produce motion graphics and basic video editing in After Effects or Premiere Pro earn 20–35% more than static-only designers. Short animated posts, animated Stories, and motion graphic ad overlays are in high demand.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to build a graphic design portfolio for Sri Lankan agencies</h2>
            <p>Your portfolio is more important than your CV for graphic designer jobs in Sri Lanka. Agencies will look at your work before they read a single line about your education or experience. Here is what a strong agency-focused portfolio includes:</p>
            <div className="not-prose space-y-3 my-5">
              {PORTFOLIO_ITEMS.map((item, i) => (
                <div key={item.title} className="bg-card border border-border rounded-lg p-5 flex gap-4">
                  <div className="font-heading font-black text-2xl text-muted-foreground/30 flex-shrink-0 leading-none">0{i + 1}</div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <p>For a full guide on building your portfolio with no client experience, read <Link to="/blog/digital-marketing-portfolio-sri-lanka" className="text-primary font-semibold underline">how to build a digital marketing portfolio in Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Freelance vs full-time graphic designer jobs in Sri Lanka</h2>
            <p>Both paths are viable in Sri Lanka's current market. The right choice depends on your experience level and what you want to develop. For most designers with less than three years of experience, starting full-time at an agency is the fastest way to develop your skills and build a strong portfolio. Freelancing becomes more viable — and more lucrative — once you have two to three years of agency work behind you and a proven client base.</p>
            <p>Our current <Link to="/careers/graphic-designer-jobs-sri-lanka" className="text-primary font-semibold underline">graphic designer jobs in Sri Lanka</Link> include both full-time and part-time options.</p>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Now hiring at Cypher Digital — Colombo</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for graphic designer jobs at Cypher Digital</h2>
            <p className="text-background/70 mb-6">Design for 800+ Sri Lankan brands across restaurants, fashion, education, real estate, and healthcare. Apply via WhatsApp — we respond within 24 hours.</p>
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20want%20to%20apply%20for%20the%20Graphic%20Designer%20role." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost129;