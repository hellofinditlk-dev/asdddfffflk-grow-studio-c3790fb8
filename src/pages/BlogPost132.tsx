import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const VACANCIES = [
  { title: "Digital Marketing Specialist", type: "Full-time", salary: "LKR 50,000 – 200,000", href: "/careers/digital-marketing-specialist-sri-lanka", hot: true },
  { title: "Graphic Designer", type: "Full-time / Part-time", salary: "LKR 45,000 – 150,000", href: "/careers/graphic-designer-jobs-sri-lanka", hot: false },
  { title: "Video Editor", type: "Full-time / Freelance", salary: "LKR 45,000 – 150,000", href: "/careers/video-editor-jobs-sri-lanka", hot: false },
  { title: "Marketing Intern", type: "Internship", salary: "LKR 20,000 – 40,000", href: "/careers/marketing-internship-sri-lanka", hot: false },
];

const LOOK_FOR = [
  "Quality over quantity — 3 strong pieces beat 10 weak ones",
  "Evidence of strategic thinking — explain why you made the choices you made",
  "Platform-specific knowledge — show you understand how Meta Ads, Instagram, or Google actually work",
  "Presentation — a clean, easy-to-navigate portfolio site beats a Google Drive folder of files",
  "Real or realistic results — even mock campaigns should show plausible metrics",
];

const ADS = [
  { title: "Run a real campaign with a small budget", body: "LKR 2,000–5,000 on Meta Ads is enough to generate real data. Promote a personal project, a friend's small business, or a local community event. What matters is real impressions, real CTR, and real spend data you can screenshot. A mock campaign says 'I know the theory'. A real campaign — even a tiny one — says 'I have done this'." },
  { title: "Create a mock campaign case study", body: "Pick a well-known Sri Lankan brand. Research their current Facebook page. Write a campaign strategy document: objective, target audience, ad formats, budget, expected results, and KPIs. Design three ad creatives. Present it as a PDF. This demonstrates strategic thinking, not just execution." },
  { title: "Show a results breakdown", body: "For any real campaign you run — even a LKR 2,000 experiment — screenshot every metric: reach, impressions, CTR, CPC, and any conversions. Format it into a one-page case study with a brief description of the objective and what you learned. Honest analysis of a small campaign is more impressive than inflated claims." },
];

const DESIGN = [
  { title: "Create a full social media content set for a fictional brand", body: "Invent a Sri Lankan small business — a Colombo café, a handmade jewellery brand, a fitness studio. Design a logo, a colour palette, and a month's worth of Instagram and Facebook posts. This shows brand consistency across a content calendar." },
  { title: "Design ad creatives with a brief", body: "Create three Meta ad creatives for the same fictional brand — one awareness ad, one engagement post, one conversion ad. For each one, write a one-sentence brief explaining your creative choices. Agencies value designers who can think, not just execute." },
  { title: "Redesign an existing brand's social media", body: "Take a real Sri Lankan brand's current social media presence and redesign three of their recent posts. Show the original and your redesign side by side. Explain briefly what you changed and why." },
];

const VIDEO = [
  { title: "Edit a product video using stock footage", body: "Free stock footage sites like Pexels and Pixabay have thousands of clips. Choose a category — food, fitness, fashion — and edit a 30-second product video as if it were an Instagram Reel for a real brand. Add music, captions, and motion text." },
  { title: "Film and edit something local", body: "Film a local market, a café, a beach, or a neighbourhood. Edit it into a 45-second brand video. This shows you can shoot and edit — not just edit provided footage." },
  { title: "Recreate a type of video that performs well", body: "Study the top-performing Reels from Sri Lankan brands. Identify what structure they use — strong hook, clear message, end CTA. Recreate that structure with your own content." },
];

const SEO = [
  { title: "Audit a real Sri Lankan business website", body: "Pick any local business with a website and conduct a basic SEO audit: check the title tags, meta descriptions, H1 structure, page speed, and mobile usability. Write a 2–3 page report with specific recommendations." },
  { title: "Start a personal blog and document progress", body: "Create a Blogger or WordPress site on any topic you know well. Write 5–10 articles targeting specific keywords. Document your Google Search Console data over time — even small ranking movements show you understand how SEO works in practice." },
  { title: "Create keyword research case studies", body: "Pick an industry in Sri Lanka — restaurants, hotels, fashion — and conduct keyword research for that sector. Show the keywords you found, their search volume, difficulty, and which pages you would create to target them." },
];

const TOOLS = [
  { tool: "Canva Website", best: "Simplest option — design it like a presentation and publish with one click. Works well for design and video portfolios." },
  { tool: "Notion", best: "Clean, text-heavy, good for written case studies and SEO audits. Free and shareable with a single link." },
  { tool: "WordPress.com", best: "Best for SEO-focused portfolios where you want to blog and show organic growth. Free plan is sufficient." },
  { tool: "Behance", best: "Designed for designers and creatives. Strong community discovery. Good for graphic design portfolios." },
  { tool: "Google Drive (as a backup)", best: "Use as a secondary option only — share a well-formatted PDF portfolio document as a backup to your main site." },
];

const RELATED = [
  { href: "/blog/how-to-get-digital-marketing-job-sri-lanka", label: "How to get a digital marketing job in Sri Lanka" },
  { href: "/blog/digital-marketing-skills-sri-lanka", label: "Top 10 skills employers look for" },
  { href: "/blog/digital-marketing-salary-sri-lanka-2026", label: "Digital marketing salary guide 2026" },
  { href: "/careers/marketing-internship-sri-lanka", label: "Apply for our marketing internship" },
];

const Cards = ({ items }: { items: { title: string; body: string }[] }) => (
  <div className="not-prose space-y-3 my-5">
    {items.map((item, i) => (
      <div key={item.title} className="bg-card border border-border rounded-lg p-5 flex gap-4">
        <div className="font-heading font-black text-2xl text-muted-foreground/30 flex-shrink-0 leading-none">0{i + 1}</div>
        <div>
          <div className="font-bold text-sm mb-1">{item.title}</div>
          <div className="text-sm text-muted-foreground leading-relaxed">{item.body}</div>
        </div>
      </div>
    ))}
  </div>
);

const BlogPost132 = () => (
  <>
    <SEOHead
      title="How to Build a Digital Marketing Portfolio in Sri Lanka With No Experience (2026) | Cypher Digital"
      description="A practical guide to building portfolio pieces for paid ads, design, video, and SEO roles in Sri Lanka — using free tools and no client budget required."
      canonical="https://cypherdigital.lk/blog/digital-marketing-portfolio-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Digital Marketing Portfolio Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Portfolio Guide</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026 · 9 min read</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              How to Build a Digital Marketing Portfolio in Sri Lanka With No Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A practical guide to building portfolio pieces for paid ads, design, video, and SEO roles — using free tools and no client budget required.
            </p>
            <Link to="/careers" className="inline-block mt-5 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">
              See open digital marketing jobs in Sri Lanka →
            </Link>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground">
            <p>The most common reason good candidates do not get hired for digital marketing jobs in Sri Lanka is not a lack of skills — it is a lack of proof. Agencies cannot see inside your head. They need to see your work. This guide shows you how to build a strong, convincing portfolio for any digital marketing role, even if you have never had a paying client.</p>
            <p>For a broader roadmap to getting hired, read <Link to="/blog/how-to-get-digital-marketing-job-sri-lanka" className="text-primary font-semibold underline">how to get a digital marketing job in Sri Lanka — the 2026 guide</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-primary">Why you need a portfolio before applying for digital marketing jobs in Sri Lanka</h2>
            <p>Hiring managers at digital marketing agencies in Colombo review portfolios before they read CVs. This is because a portfolio answers the only question that matters: can this person do the work? A CV tells them you claim to have skills. A portfolio proves it.</p>
            <p>The good news is that "portfolio" does not mean a collection of work you were paid to do. It means a collection of work that demonstrates your capability. Mock campaigns, spec work, personal projects, and redesigns of real brands all count — if they are well-executed and clearly presented.</p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-5 not-prose">
              <div className="font-bold text-sm mb-2">What agencies look for in a portfolio</div>
              {LOOK_FOR.map((t) => (
                <div key={t} className="text-sm py-1 flex gap-2"><span className="text-primary">✓</span>{t}</div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to build a Meta Ads portfolio with no clients</h2>
            <p>Paid ads portfolio pieces are the most powerful type for getting hired at digital marketing agencies in Sri Lanka because they directly demonstrate the most in-demand skill. Here is how to build them without client access:</p>
            <Cards items={ADS} />
            <p>These portfolio pieces support applications for <Link to="/careers/digital-marketing-specialist-sri-lanka" className="text-primary font-semibold underline">digital marketing specialist jobs in Sri Lanka</Link> and any paid ads or executive role.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to build a graphic design portfolio for agency jobs in Sri Lanka</h2>
            <p>Graphic design portfolios for agency roles should demonstrate three things: that you can maintain a visual identity consistently, that you understand how to design for digital platforms, and that you can work across different brand styles.</p>
            <Cards items={DESIGN} />
            <p>Strong design portfolios support applications for <Link to="/careers/graphic-designer-jobs-sri-lanka" className="text-primary font-semibold underline">graphic designer jobs in Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to build a video editing showreel with no paid work</h2>
            <p>For video editor roles, a showreel is your primary application document. You do not need paid client work to build one — you need strong edits. Here are ways to create portfolio pieces without a paying client:</p>
            <Cards items={VIDEO} />
            <p>Apply these pieces to <Link to="/careers/video-editor-jobs-sri-lanka" className="text-primary font-semibold underline">video editor jobs in Sri Lanka</Link>.</p>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">How to build an SEO portfolio with no client access</h2>
            <p>SEO portfolios are the hardest to build without client access because results take months to appear. Here are ways to demonstrate SEO competence before you have ranking evidence:</p>
            <Cards items={SEO} />

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-primary">Free tools to build and host your portfolio website</h2>
            <p>Your portfolio needs a home that is easy to share via a single link and that loads cleanly on mobile — because hiring managers in Sri Lanka will open it on their phone first. Here are the best free options:</p>
            <div className="not-prose space-y-2 my-5">
              {TOOLS.map((item) => (
                <div key={item.tool} className="bg-card border border-border rounded-lg p-4 flex gap-3 items-start flex-wrap">
                  <span className="font-bold text-sm text-primary min-w-[120px]">{item.tool}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed flex-1">{item.best}</span>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-12 bg-foreground rounded-xl p-8 not-prose">
            <div className="text-[11px] font-bold uppercase tracking-wider text-background/60 mb-2">Portfolio ready? We are hiring</div>
            <h2 className="font-heading text-2xl font-bold text-background mb-2">Apply for digital marketing jobs at Cypher Digital</h2>
            <p className="text-background/70 mb-6">If you have completed your certifications and built your portfolio, you are ready to apply. We review every application within 24 hours via WhatsApp.</p>
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
              <a href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20have%20my%20portfolio%20ready%20and%20want%20to%20apply." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Apply on WhatsApp</a>
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

export default BlogPost132;