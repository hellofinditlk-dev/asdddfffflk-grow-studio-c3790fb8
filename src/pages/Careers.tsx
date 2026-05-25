import { Palette, BarChart3, MessageCircle, Briefcase, Users, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_BASE = "https://wa.me/94701772626";

const positions = [
  {
    icon: Palette,
    title: "Graphic Designer",
    type: "Full-time / Part-time",
    location: "Colombo, Sri Lanka",
    summary:
      "Design social media creatives, brand identities, and marketing collateral for 800+ Sri Lankan brands.",
    duties: [
      "Design social media creatives, banners, stories, and reels for 800+ brands",
      "Create logos, brand identities, flyers, brochures, and packaging",
      "Work closely with the marketing team to bring campaigns to life",
      "Maintain brand consistency across all design deliverables",
    ],
    requirements: [
      "Proficiency in Adobe Photoshop, Illustrator, or similar tools",
      "A strong portfolio showing social media or branding work",
      "Creative eye with attention to detail",
      "Ability to work under deadlines and handle multiple projects",
      "Knowledge of Canva is a plus",
    ],
    whatsappMessage: "Graphic Designer Application – [Your Name]",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Colombo, Sri Lanka",
    summary:
      "Plan and run Meta, Google, and TikTok ad campaigns that generate real leads and measurable ROI.",
    duties: [
      "Plan and manage Facebook, Instagram, Google, and TikTok ad campaigns",
      "Generate leads and track performance using Meta Ads Manager and Google Ads",
      "Manage social media pages including content scheduling and inbox management",
      "Analyse campaign data and prepare monthly performance reports",
      "Collaborate with the design team on creatives and copy",
    ],
    requirements: [
      "Experience running paid ad campaigns (Meta Ads or Google Ads)",
      "Understanding of SEO, lead generation, and social media strategy",
      "Strong communication skills in English and Sinhala",
      "Analytical mindset — you love data and results",
      "Google Ads or Meta Blueprint certification is a plus",
    ],
    whatsappMessage: "Digital Marketing Specialist Application – [Your Name]",
  },
];

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
    "Join Cypher Digital — a leading digital marketing agency in Sri Lanka. Open roles for Graphic Designers and Digital Marketing Specialists in Colombo.",
};

const jobPostingsSchema = positions.map((p) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: p.title,
  description: p.summary,
  employmentType: p.type.toUpperCase().includes("PART") ? ["FULL_TIME", "PART_TIME"] : "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Cypher Digital",
    sameAs: "https://cypherdigital.lk",
  },
  jobLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  },
  datePosted: "2026-05-25",
  directApply: true,
}));

const Careers = () => (
  <div className="pt-16">
    <SEOHead
      title="Careers at Cypher Digital | Join Sri Lanka's Top Marketing Team"
      description="Hiring Graphic Designers and Digital Marketing Specialists in Colombo. Join Cypher Digital — part of the Cypher360 Group — and work on campaigns for 800+ Sri Lankan brands."
      canonical="https://cypherdigital.lk/careers"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />
    {jobPostingsSchema.map((s, i) => (
      <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
    ))}
    <PageBreadcrumb items={[{ label: "Careers" }]} />

    {/* Hero */}
    <section className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center animate-fade-up max-w-4xl">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Careers at Cypher Digital</p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Build Brands. Grow Fast. Work With Sri Lanka's Best.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          At Cypher Digital — part of the Cypher360 Group — we're always looking for talented, driven people who want to do work that actually matters. If you're passionate about creativity and results, we want to hear from you.
        </p>
        <Button asChild size="lg" className="bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
          <a href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Cypher Digital, I'd like to join your team.")}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" /> Apply on WhatsApp
          </a>
        </Button>
      </div>
    </section>

    {/* Open positions */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Open Positions</h2>
          <p className="text-muted-foreground">Two roles open right now — both Colombo-based, both full of growth.</p>
        </div>

        <div className="grid gap-8">
          {positions.map((p, i) => {
            const Icon = p.icon;
            const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(p.whatsappMessage)}`;
            return (
              <Card key={i} className="overflow-hidden border-border hover:border-primary transition-colors">
                <CardContent className="p-6 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold mb-1">{p.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {p.location}</span>
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {p.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{p.summary}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-heading font-bold mb-3">What you'll do</h4>
                      <ul className="space-y-2">
                        {p.duties.map((d, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-3">What we're looking for</h4>
                      <ul className="space-y-2">
                        {p.requirements.map((r, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-secondary/40 rounded-xl p-5 border border-border">
                    <p className="text-sm font-semibold mb-2">Apply via WhatsApp</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Send your name, portfolio link or experience summary, and a brief intro to <strong className="text-foreground">+94 70 177 2626</strong>. Message us: <em>"{p.whatsappMessage}"</em>
                    </p>
                    <Button asChild className="bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
                      <a href={waUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" /> Apply for {p.title}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    {/* Why work with us */}
    <section className="py-16 lg:py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Why Work With Us?</h2>
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

    {/* Don't see your role */}
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