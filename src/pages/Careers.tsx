import { Link } from "react-router-dom";
import { MessageCircle, Briefcase, Users, Sparkles, MapPin, ArrowRight, TrendingUp, Megaphone, Search, Video, Palette, BarChart3 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { vacancies } from "@/data/vacancies";

const WHATSAPP_BASE = "https://wa.me/94701772626";

const perks = [
  { icon: Users, title: "Work on 800+ brands", desc: "Campaigns spanning every major industry across Sri Lanka." },
  { icon: Sparkles, title: "Cypher360 Group", desc: "Part of the country's most integrated marketing ecosystem." },
  { icon: Briefcase, title: "Real responsibility", desc: "Own your work, ship fast, and see the impact in weeks — not years." },
  { icon: MapPin, title: "Colombo + flexibility", desc: "Office-based in Colombo with remote flexibility where it makes sense." },
  { icon: TrendingUp, title: "Fast career growth", desc: "Team members regularly advance to the next level within 12–18 months." },
  { icon: MessageCircle, title: "Apply in 60 seconds", desc: "WhatsApp-based hiring. We respond within 24 hours — no lengthy forms." },
];

const salaryRows = [
  { role: "Marketing Intern", level: "Student / Entry Level", salary: "LKR 20,000 – 40,000", type: "Internship" },
  { role: "Graphic Designer", level: "1–3 years experience", salary: "LKR 60,000 – 120,000", type: "Full-time / Part-time" },
  { role: "Video Editor", level: "1–4 years experience", salary: "LKR 60,000 – 150,000", type: "Full-time / Freelance" },
  { role: "Social Media Executive", level: "1–3 years experience", salary: "LKR 65,000 – 110,000", type: "Full-time" },
  { role: "SEO Executive", level: "1–3 years experience", salary: "LKR 70,000 – 120,000", type: "Full-time" },
  { role: "Digital Marketing Specialist", level: "2–5 years experience", salary: "LKR 80,000 – 200,000", type: "Full-time" },
  { role: "Paid Ads Manager (Meta + Google)", level: "3–6 years experience", salary: "LKR 120,000 – 220,000", type: "Full-time" },
  { role: "Digital Marketing Manager", level: "5+ years experience", salary: "LKR 150,000 – 280,000", type: "Full-time" },
];

const careerPath = [
  { step: "Step 1", title: "Marketing Intern", salary: "LKR 20K–40K/mo", time: "0–6 months" },
  { step: "Step 2", title: "DM Executive", salary: "LKR 60K–90K/mo", time: "6–18 months" },
  { step: "Step 3", title: "DM Specialist", salary: "LKR 90K–150K/mo", time: "1.5–3 years" },
  { step: "Step 4", title: "DM Manager", salary: "LKR 150K–280K/mo", time: "3–6 years" },
];

const roleDescriptions = [
  { title: "Social Media Marketing Jobs in Sri Lanka", desc: "Social media marketing executives at Cypher Digital plan, create and manage Facebook and Instagram content and community management for clients across Sri Lanka. Typical tasks include content calendar planning, caption writing, posting, inbox management and monthly performance reporting. Salaries range from LKR 65,000 to LKR 110,000 per month." },
  { title: "Paid Ads Specialist Jobs — Meta Ads & Google Ads Sri Lanka", desc: "Paid ads specialists manage Meta Ads (Facebook and Instagram advertising) and Google Ads budgets across Search, Display and YouTube for Sri Lankan brands. This is the highest-paying digital marketing job in Sri Lanka at the specialist level, with salaries of LKR 80,000–200,000 per month. Meta Blueprint or Google Ads certification is a strong advantage." },
  { title: "SEO Executive Jobs in Colombo, Sri Lanka", desc: "SEO executive roles involve on-page optimisation, keyword research, technical SEO audits, link building and local SEO for Sri Lankan business clients. SEO jobs in Colombo typically pay LKR 70,000 to LKR 120,000 per month. Knowledge of Google Search Console, Ahrefs or SEMrush is a strong advantage." },
  { title: "Graphic Designer Jobs in Sri Lanka", desc: "Graphic designers create social media creatives, brand identities, ad visuals, flyers and marketing collateral. The team works across Adobe Photoshop, Illustrator and Canva Pro. One of the most in-demand creative jobs in Sri Lanka, with strong demand in Colombo, Kandy and Galle." },
  { title: "Video Editor Jobs in Sri Lanka", desc: "Video editors focus on social media content — Reels, TikToks, YouTube ads and brand films — designed to perform in paid advertising campaigns. Editors work in Adobe Premiere Pro or DaVinci Resolve. After Effects motion graphics experience is a strong advantage. Both full-time and freelance arrangements available." },
  { title: "Digital Marketing Internships in Sri Lanka", desc: "Cypher Digital's marketing internship programme in Colombo is one of the best digital marketing internships in Sri Lanka. Interns work on live campaigns — not coffee runs. Runs for 3 to 6 months, paid, and regularly converts into full-time roles. Open to students of marketing, business, design or IT." },
];

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers at Cypher Digital",
  url: "https://cypherdigital.lk/careers",
  description:
    "Careers at Cypher Digital — Sri Lanka's top digital marketing agency. Open vacancies for Graphic Designer, Digital Marketing Specialist, Video Editor, and Marketing Intern in Colombo.",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: vacancies.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://cypherdigital.lk/careers/${v.slug}`,
    name: v.title,
  })),
};

// Aggregate JobPosting schemas — one per open vacancy — so /careers itself is
// eligible for the Google Jobs rich result, not just each sub-page.
const rollingValidThrough = (() => {
  const d = new Date();
  d.setDate(d.getDate() + 90);
  return d.toISOString().slice(0, 10);
})();

const jobPostingSchemas = vacancies.map((v) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: v.title,
  description: `${v.summary} Responsibilities: ${v.duties.join("; ")}. Requirements: ${v.requirements.join("; ")}.`,
  datePosted: v.datePosted,
  validThrough: rollingValidThrough,
  employmentType: v.employmentType,
  identifier: { "@type": "PropertyValue", name: "Cypher Digital", value: v.slug },
  hiringOrganization: {
    "@type": "Organization",
    name: "Cypher Digital",
    sameAs: "https://cypherdigital.lk/",
    logo: "https://cypherdigital.lk/assets/logo-DJLYsmc6.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressRegion: "Western Province",
      addressCountry: { "@type": "Country", name: "LK" },
    },
  },
  applicantLocationRequirements: { "@type": "Country", name: "Sri Lanka" },
  directApply: true,
  url: `https://cypherdigital.lk/careers/${v.slug}`,
  ...(v.salaryRange && {
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: v.salaryRange.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: v.salaryRange.min,
        maxValue: v.salaryRange.max,
        unitText: v.salaryRange.unit,
      },
    },
  }),
}));

const jobCategories = [
  { icon: Megaphone, title: "Social Media Marketing Jobs in Sri Lanka", desc: "Plan and run Facebook, Instagram and TikTok campaigns for 800+ Sri Lankan brands." },
  { icon: BarChart3, title: "Paid Ads Specialist Jobs (Meta & Google Ads)", desc: "Manage Meta Ads, Google Ads and TikTok Ads budgets that drive real leads and ROI." },
  { icon: Search, title: "SEO Executive Jobs in Colombo", desc: "Grow organic search rankings for clients across Sri Lanka — local SEO, content and technical SEO." },
  { icon: Palette, title: "Graphic Designer Jobs in Sri Lanka", desc: "Design social creatives, brand identities and ad visuals for top Sri Lankan brands." },
  { icon: Video, title: "Video Editor Jobs in Sri Lanka", desc: "Cut scroll-stopping reels, TikToks and YouTube ads that perform in paid campaigns." },
  { icon: TrendingUp, title: "Digital Marketing Internships in Sri Lanka", desc: "Hands-on internships on live client campaigns — not coffee-fetching ones." },
];

const faqs = [
  {
    q: "Are you hiring digital marketing jobs in Sri Lanka right now?",
    a: "Yes. Cypher Digital is actively hiring across digital marketing, paid ads, SEO, social media, graphic design and video editing roles in Colombo, Sri Lanka. Apply directly via WhatsApp at +94 70 177 2626.",
  },
  {
    q: "What is the average digital marketing salary in Sri Lanka?",
    a: "Digital marketing salaries in Sri Lanka typically range between LKR 60,000 and LKR 200,000 per month depending on role, experience and platform specialisation (Meta Ads, Google Ads, SEO). Cypher Digital pays at the upper end of the market for proven performers.",
  },
  {
    q: "Do I need a degree to apply for digital marketing jobs at Cypher Digital?",
    a: "No degree required. We hire based on portfolio, campaign results, and the ability to think commercially. Certifications like Meta Blueprint and Google Ads are a strong plus.",
  },
  {
    q: "Where are your digital marketing jobs located?",
    a: "All roles are based at our Colombo, Sri Lanka studio. Some freelance and remote roles are open to candidates in Kandy, Galle, Negombo, Jaffna and other parts of Sri Lanka.",
  },
  {
    q: "Can students apply for digital marketing internships in Sri Lanka?",
    a: "Yes. Our Marketing Internship in Sri Lanka is open to students of marketing, business, design and IT. Interns work on live client campaigns and can convert into full-time roles.",
  },
  {
    q: "How do I apply for a digital marketing job in Sri Lanka at Cypher Digital?",
    a: "Send your name, CV or portfolio link and the role you want to apply for to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
  },
];

faqs.push(
  {
    q: "What skills do I need for a digital marketing job in Sri Lanka?",
    a: "Required skills depend on the role. Paid ads: Meta Ads and Google Ads campaign experience. SEO: on-page SEO, keyword research, Google Search Console. Social media: content planning, copywriting, community management. Graphic design: Adobe Creative Suite or Canva Pro with a strong portfolio. Video editing: Adobe Premiere Pro or DaVinci Resolve. All roles need good communication and a commercial mindset.",
  },
  {
    q: "What is the digital marketing career growth path in Sri Lanka?",
    a: "A typical path moves from Marketing Intern (LKR 20K–40K) → Digital Marketing Executive (LKR 60K–90K) → Digital Marketing Specialist (LKR 90K–150K) → Digital Marketing Manager (LKR 150K–280K). At Cypher Digital, team members regularly advance within 12–18 months due to the volume and variety of brand campaigns.",
  },
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Careers = () => (
  <div className="pt-16">
    <SEOHead
      title="Digital Marketing Jobs in Sri Lanka 2026 | Apply Today — Cypher Digital"
      description="Looking for digital marketing jobs in Sri Lanka? Cypher Digital is hiring in Colombo — paid ads, SEO, social media, graphic design, video editing & internships. Apply via WhatsApp."
      canonical="https://cypherdigital.lk/careers"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    {jobPostingSchemas.map((schema, i) => (
      <script
        key={`jobposting-${i}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ))}
    <PageBreadcrumb items={[{ label: "Careers" }]} />

    <section className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center animate-fade-up max-w-4xl">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Careers at Cypher Digital</p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Digital Marketing Jobs in Sri Lanka — Join Cypher Digital
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Searching for the best digital marketing jobs in Sri Lanka? Cypher Digital is hiring across paid ads, SEO, social media marketing, graphic design and video editing in Colombo. Join Sri Lanka's most integrated marketing group — Cypher360 — and work on campaigns for 800+ brands.
        </p>
        <Button asChild size="lg" className="bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
          <a href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Cypher Digital, I'd like to join your team.")}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" /> Apply on WhatsApp
          </a>
        </Button>
      </div>
    </section>

    {/* SEO intro */}
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-5">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
          Hiring digital marketing professionals across Sri Lanka
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Cypher Digital is one of the leading digital marketing agencies in Sri Lanka, and we're hiring full-time, part-time and freelance talent across every digital marketing discipline. Whether you're a Meta Ads specialist in Colombo, a freelance graphic designer in Kandy, an SEO executive in Galle, or a video editor in Negombo — there's a digital marketing job in Sri Lanka here for you.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          As part of the Cypher360 Group, we run digital marketing, events and production campaigns for 800+ Sri Lankan brands across restaurants, fashion, education, real estate, healthcare and FMCG. That means our team works on more real campaigns — and grows faster — than almost any other digital marketing employer in Sri Lanka.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Below you'll find every current digital marketing vacancy in Sri Lanka at Cypher Digital — including specialist, executive, designer, video and internship roles. Applications are reviewed within 24 hours via WhatsApp — no lengthy forms, no waiting weeks for a reply.
        </p>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Open Digital Marketing Vacancies in Sri Lanka</h2>
          <p className="text-muted-foreground">Four roles open right now — all Colombo-based, all full of growth.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {vacancies.map((v) => {
            const Icon = v.icon;
            return (
              <Link key={v.slug} to={`/careers/${v.slug}`} className="group">
                <Card className="h-full border-border hover:border-primary transition-colors">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {v.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {v.location}</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {v.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{v.summary}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      View role & apply <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* Job categories — keyword-rich */}
    <section className="py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Types of Digital Marketing Jobs in Sri Lanka at Cypher Digital</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From paid ads and SEO to creative and video — every digital marketing career path in Sri Lanka under one roof.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold mb-2 text-base">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Why Cypher Digital is the best place for digital marketing jobs in Sri Lanka</h2>
          <p className="text-muted-foreground">A creative, fast-paced team where your work ships and your career grows.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
          Digital Marketing Jobs in Sri Lanka — FAQs
        </h2>
        <div className="space-y-5">
          {faqs.map((f, i) => (
            <div key={i} className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-heading font-bold mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Don't See Your Role?</h2>
        <p className="text-muted-foreground mb-8">
          We're always open to talented people. If you think you'd be a great fit at Cypher Digital, send us a message anyway.
        </p>
        <Button asChild size="lg" className="bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
          <a href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Cypher Digital, I'd like to apply for a role at your team.")}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp: +94 70 177 2626
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default Careers;