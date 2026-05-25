import { Link } from "react-router-dom";
import { MessageCircle, Briefcase, Users, Sparkles, MapPin, ArrowRight } from "lucide-react";
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

const Careers = () => (
  <div className="pt-16">
    <SEOHead
      title="Careers at Cypher Digital | Jobs in Sri Lanka"
      description="Join Cypher Digital — Sri Lanka's top digital marketing agency. View open vacancies for Graphic Designer, Digital Marketer, Video Editor & Internships in Colombo."
      canonical="https://cypherdigital.lk/careers"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    <PageBreadcrumb items={[{ label: "Careers" }]} />

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

    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Open Vacancies</h2>
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