import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const SALARY_DATA = [
  { role: "Digital Marketing Specialist", min: 60000, max: 175000, link: "/careers/digital-marketing-specialist-sri-lanka", tag: "Most In-Demand" },
  { role: "Social Media Manager", min: 65000, max: 180000, link: "/careers/digital-marketing-jobs-sri-lanka", tag: null as string | null },
  { role: "SEO Executive", min: 60000, max: 150000, link: "/careers/digital-marketing-jobs-sri-lanka", tag: null as string | null },
  { role: "Graphic Designer", min: 55000, max: 130000, link: "/careers/graphic-designer-jobs-sri-lanka", tag: null as string | null },
  { role: "Video Editor", min: 50000, max: 120000, link: "/careers/video-editor-jobs-sri-lanka", tag: null as string | null },
  { role: "Marketing Intern", min: 25000, max: 45000, link: "/careers/marketing-internship-sri-lanka", tag: null as string | null },
];

const EXPERIENCE_DATA = [
  { level: "Fresh Graduate", years: "0–1 year", range: "LKR 55,000 – 80,000" },
  { level: "Mid-Level", years: "2–4 years", range: "LKR 90,000 – 150,000" },
  { level: "Senior", years: "5+ years", range: "LKR 160,000 – 250,000+" },
];

const CITY_DATA = [
  { city: "Colombo", range: "LKR 90,000 – 180,000", note: "Most agency jobs, highest pay" },
  { city: "Kandy", range: "LKR 65,000 – 130,000", note: "Growing digital market" },
  { city: "Galle", range: "LKR 60,000 – 120,000", note: "Tourism + hospitality focus" },
  { city: "Remote (any city)", range: "LKR 75,000 – 160,000", note: "Colombo agency rates if skilled" },
];

const TIPS = [
  { num: "01", tip: "Complete Meta Blueprint certification", detail: "Free from Meta. Signals you can manage ad budgets responsibly. Adds LKR 15,000–30,000 to your market rate immediately." },
  { num: "02", tip: "Get Google Ads certified", detail: "Especially Search and Performance Max. Google Ads specialists are underpaid in Sri Lanka because so few are truly certified." },
  { num: "03", tip: "Build a portfolio of real results", detail: "Screenshot campaigns with CTR, CPL, and ROAS. Employers pay for proof, not promises. One strong case study beats five average ones." },
  { num: "04", tip: "Niche into TikTok Ads", detail: "TikTok paid specialists are the rarest role in Sri Lanka right now. Learning TikTok Ads Manager puts you ahead of 90% of applicants." },
  { num: "05", tip: "Move to an agency for 2 years", detail: "The variety of an agency builds your skill set faster than any in-house role. Most Sri Lanka salary jumps happen after an agency stint." },
];

const formatLKR = (n: number) => "LKR " + n.toLocaleString();

const BlogPost125 = () => (
  <>
    <SEOHead
      title="Digital Marketing Salary in Sri Lanka 2026 — Complete Guide | Cypher Digital"
      description="Real digital marketing salaries in Sri Lanka 2026 — by role, experience and city. LKR 25,000 intern to 250,000+ senior. By Cypher Digital."
      canonical="https://cypherdigital.lk/blog/digital-marketing-salary-sri-lanka-2026"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Digital Marketing Salary Sri Lanka 2026" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-4">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Careers Guide</span>
              <span className="text-[11px] text-muted-foreground py-1">Updated May 2026</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Digital Marketing Salary in Sri Lanka 2026 — The Complete Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real salary ranges by role, experience level and city — from Cypher Digital, one of Sri Lanka's leading digital marketing agencies.
            </p>
            <Link
              to="/careers"
              className="inline-block mt-6 bg-[#f97316] text-white font-semibold text-sm px-6 py-3 rounded-md hover:opacity-90"
            >
              View open digital marketing jobs in Sri Lanka →
            </Link>
          </header>

          <section className="mb-10 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              If you are looking for work in digital marketing, the first question you will ask is: <em>how much does it actually pay in Sri Lanka?</em> In 2026, digital marketing salaries in Sri Lanka range from <strong className="text-foreground">LKR 55,000</strong> for entry-level roles to over <strong className="text-foreground">LKR 250,000 per month</strong> for experienced paid ads specialists.
            </p>
            <p>
              This guide gives you the real numbers — by role, by experience, and by city — based on what we see across the market at <Link to="/" className="text-primary font-semibold hover:underline">Cypher Digital</Link>, a results-driven digital marketing agency in Colombo working with 800+ Sri Lankan brands.
            </p>
            <p>
              If you are actively job hunting, see our current <Link to="/careers" className="text-primary font-semibold hover:underline">digital marketing jobs in Sri Lanka</Link> — we are hiring now and respond via WhatsApp within 24 hours.
            </p>
          </section>

          <section id="by-role" className="mb-14 scroll-mt-24">
            <h2 className="font-heading text-2xl font-bold border-b-2 border-primary pb-3 mb-6">
              Digital marketing salaries in Sri Lanka by role (2026)
            </h2>
            <div className="grid gap-3 mb-8">
              {SALARY_DATA.map((row) => (
                <div key={row.role} className="bg-card border border-border rounded-lg p-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-foreground">{row.role}</span>
                    {row.tag && <span className="bg-primary/10 text-primary text-[11px] font-bold px-2 py-0.5 rounded">{row.tag}</span>}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{formatLKR(row.min)}</strong>
                      <span className="mx-1">–</span>
                      <strong className="text-foreground">{formatLKR(row.max)}</strong>
                      <span className="text-xs ml-1">/month</span>
                    </span>
                    <Link to={row.link} className="bg-[#f97316] text-white text-xs font-bold px-3 py-1.5 rounded hover:opacity-90 whitespace-nowrap">
                      View jobs →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-foreground mt-8 mb-3">Digital marketing specialist salary — LKR 80,000 to 180,000/month</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A digital marketing specialist managing Meta Ads, Google Ads, and TikTok campaigns is the most in-demand role in Sri Lanka right now. Entry specialists with 1–2 years of experience start around LKR 80,000–100,000. Those with a proven track record of generating measurable leads and ROI command LKR 150,000–180,000 or more.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              See our open <Link to="/careers/digital-marketing-specialist-sri-lanka" className="text-primary font-semibold hover:underline">digital marketing specialist jobs in Sri Lanka</Link> at Cypher Digital.
            </p>

            <h3 className="text-lg font-bold text-foreground mb-3">Social media manager salary — LKR 65,000 to 140,000/month</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Social media managers handling Facebook, Instagram, and TikTok content earn LKR 65,000–90,000 at the junior level. Those who can also run <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook advertising campaigns</Link> alongside organic content move up to LKR 120,000–140,000. The salary jump comes from adding paid media to creative skills.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              View our <Link to="/careers/digital-marketing-jobs-sri-lanka" className="text-primary font-semibold hover:underline">digital marketing executive jobs in Sri Lanka</Link> — this role includes social media management.
            </p>

            <h3 className="text-lg font-bold text-foreground mb-3">SEO executive salary in Sri Lanka — LKR 60,000 to 150,000/month</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SEO executives focused on technical SEO, content, and link-building earn LKR 60,000–80,000 to start. Senior SEO executives managing multiple client accounts reach LKR 120,000–150,000. Proficiency in Google Search Console, Ahrefs, and Semrush is expected. Our <Link to="/seo-services-sri-lanka" className="text-primary hover:underline">SEO services team in Sri Lanka</Link> works across all major industries.
            </p>

            <h3 className="text-lg font-bold text-foreground mb-3">Graphic designer salary in Sri Lanka — LKR 55,000 to 130,000/month</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Graphic designers creating social media creatives, ad visuals, and brand identities for agencies start at LKR 55,000–75,000. Senior designers who work fast across multiple client styles and handle both digital and print earn LKR 100,000–130,000.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are currently hiring — see <Link to="/careers/graphic-designer-jobs-sri-lanka" className="text-primary font-semibold hover:underline">graphic designer jobs in Sri Lanka</Link> at Cypher Digital.
            </p>

            <h3 className="text-lg font-bold text-foreground mb-3">Video editor salary in Sri Lanka — LKR 50,000 to 120,000/month</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Video editors producing Reels, TikToks, and YouTube ads are increasingly in demand. Starting salaries sit at LKR 50,000–70,000. Editors who understand pacing for paid ads and deliver fast earn LKR 90,000–120,000.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Check our open <Link to="/careers/video-editor-jobs-sri-lanka" className="text-primary font-semibold hover:underline">video editor jobs in Sri Lanka</Link>.
            </p>

            <h3 className="text-lg font-bold text-foreground mb-3">Marketing intern salary — LKR 25,000 to 45,000/month</h3>
            <p className="text-muted-foreground leading-relaxed">
              Paid marketing internships in Sri Lanka typically pay LKR 25,000–45,000 per month. The best internships give you real client work rather than admin tasks. Cypher Digital's <Link to="/careers/marketing-internship-sri-lanka" className="text-primary font-semibold hover:underline">marketing internship in Sri Lanka</Link> is a 3–6 month hands-on paid program with a clear path to full-time employment.
            </p>
          </section>

          <section id="by-experience" className="mb-14 scroll-mt-24">
            <h2 className="font-heading text-2xl font-bold border-b-2 border-primary pb-3 mb-6">
              Digital marketing salary by experience level in Sri Lanka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experience level is the single biggest factor affecting your digital marketing salary in Sri Lanka — more than your specific role or city.
            </p>
            <div className="grid gap-3 mb-6">
              {EXPERIENCE_DATA.map((row) => (
                <div key={row.level} className="bg-primary/5 border border-primary/20 rounded-lg p-5 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="font-bold text-foreground">{row.level}</div>
                    <div className="text-xs text-muted-foreground">{row.years}</div>
                  </div>
                  <div className="font-heading font-bold text-lg text-primary">{row.range}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Platform certifications — Meta Blueprint and Google Ads — combined with a portfolio of real campaign results (CTR, CPL, ROAS) move you up the scale faster than years of experience alone. A mid-level marketer with proven paid ads results can earn senior-level pay within 2–3 years.
            </p>
          </section>

          <section id="by-city" className="mb-14 scroll-mt-24">
            <h2 className="font-heading text-2xl font-bold border-b-2 border-primary pb-3 mb-6">
              Colombo vs. other cities — does location affect digital marketing pay?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most digital marketing agency jobs in Sri Lanka are concentrated in Colombo, and Colombo-based roles typically pay 15–25% more than equivalent roles in Kandy or Galle, primarily because of the higher cost of living and proximity to the largest clients.
            </p>
            <div className="bg-card border border-border rounded-lg overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="p-3 text-left font-bold">City</th>
                    <th className="p-3 text-left font-bold">Mid-level range</th>
                    <th className="p-3 text-left font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {CITY_DATA.map((r) => (
                    <tr key={r.city} className="border-b border-border last:border-0">
                      <td className="p-3 font-semibold text-foreground">{r.city}</td>
                      <td className="p-3 text-muted-foreground">{r.range}</td>
                      <td className="p-3 text-muted-foreground">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Remote and freelance roles have partially closed the gap since 2022, with many Colombo agencies now hiring remotely for content, SEO, and design roles. <Link to="/careers" className="text-primary hover:underline">Cypher Digital</Link> is based in Colombo with remote flexibility for some positions.
            </p>
          </section>

          <section id="agency-vs-inhouse" className="mb-14 scroll-mt-24">
            <h2 className="font-heading text-2xl font-bold border-b-2 border-primary pb-3 mb-6">
              Agency vs. in-house — which pays more in Sri Lanka?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Agency", pros: ["Higher variety — 10+ industries", "Faster career growth", "Broader skill set", "Cypher Digital pays LKR 80K–200K"], cons: ["Faster pace", "Multiple clients at once"] },
                { title: "In-house", pros: ["Deeper brand focus", "Slightly more stability", "One product to master"], cons: ["Slower growth curve", "Narrower skills"] },
              ].map((col) => (
                <div key={col.title} className="bg-card border border-border rounded-lg p-5">
                  <div className="font-bold text-foreground mb-3">{col.title}</div>
                  {col.pros.map((p) => (
                    <div key={p} className="text-sm text-muted-foreground py-1 flex gap-2"><span className="text-green-600">✓</span>{p}</div>
                  ))}
                  {col.cons.map((c) => (
                    <div key={c} className="text-sm text-muted-foreground/70 py-1 flex gap-2"><span>–</span>{c}</div>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              In-house marketing roles for single brands often offer slightly higher base salaries and more stability. Agency roles at companies like <Link to="/" className="text-primary hover:underline">Cypher Digital</Link> pay competitively while offering faster career growth — because you work across 50+ industries rather than one product. Most senior marketers in Sri Lanka started agency-side for the learning speed.
            </p>
          </section>

          <section id="increase-salary" className="mb-14 scroll-mt-24">
            <h2 className="font-heading text-2xl font-bold border-b-2 border-primary pb-3 mb-6">
              How to increase your digital marketing salary in Sri Lanka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The fastest salary jumps come from adding paid media skills to a creative or social background. Here is what works in the Sri Lanka market:
            </p>
            <div className="grid gap-3">
              {TIPS.map((item) => (
                <div key={item.num} className="bg-card border border-border rounded-lg p-4 flex gap-4">
                  <div className="font-heading font-black text-2xl text-border leading-none shrink-0">{item.num}</div>
                  <div>
                    <div className="font-bold text-foreground mb-1 text-sm">{item.tip}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="apply" className="scroll-mt-24">
            <div className="bg-foreground rounded-xl p-8 text-center">
              <div className="text-xs text-background/60 tracking-widest uppercase mb-3">We are hiring now</div>
              <h2 className="font-heading text-2xl font-bold text-background mb-3">
                Join Cypher Digital — Sri Lanka's most integrated marketing agency
              </h2>
              <p className="text-background/70 mb-6 leading-relaxed">
                We pay LKR 80,000–200,000 for proven digital marketing talent in Colombo. No lengthy application — apply via WhatsApp in 60 seconds.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link to="/careers" className="bg-[#f97316] text-white font-semibold text-sm px-6 py-3 rounded-md hover:opacity-90">
                  View all digital marketing jobs in Sri Lanka →
                </Link>
                <a
                  href="https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%20read%20your%20salary%20guide%20and%20want%20to%20apply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-background border border-background/30 font-semibold text-sm px-6 py-3 rounded-md hover:bg-background/10"
                >
                  Apply on WhatsApp
                </a>
              </div>
              <div className="mt-6 flex justify-center gap-5 flex-wrap">
                {[
                  { href: "/careers/graphic-designer-jobs-sri-lanka", label: "Graphic Designer" },
                  { href: "/careers/video-editor-jobs-sri-lanka", label: "Video Editor" },
                  { href: "/careers/marketing-internship-sri-lanka", label: "Marketing Intern" },
                  { href: "/careers/digital-marketing-specialist-sri-lanka", label: "DM Specialist" },
                ].map((l) => (
                  <Link key={l.href} to={l.href} className="text-xs text-background/60 underline hover:text-background">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <p className="mt-10 text-sm text-muted-foreground">
            Related: <Link to="/careers" className="text-primary font-semibold hover:underline">digital marketing jobs Sri Lanka</Link> · <Link to="/blog" className="text-primary font-semibold hover:underline">All Blog Posts</Link>
          </p>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost125;