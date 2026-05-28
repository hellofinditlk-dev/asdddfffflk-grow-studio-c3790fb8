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
          Below you'll find every current digital marketing vacancy in Sri Lanka at Cypher Digital. Applications are reviewed within 24 hours via WhatsApp — no lengthy forms, no waiting weeks for a reply.
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