import { useParams, Link, Navigate } from "react-router-dom";
import { MessageCircle, Briefcase, MapPin, CheckCircle2, Sparkles, ArrowLeft, Building2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getVacancyBySlug } from "@/data/vacancies";

const WHATSAPP_BASE = "https://wa.me/94701772626";

const VacancyPage = () => {
  const { slug } = useParams();
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) return <Navigate to="/careers" replace />;

  const Icon = vacancy.icon;
  const canonical = `https://cypherdigital.lk/careers/${vacancy.slug}`;
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(vacancy.whatsappMessage)}`;

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacancy.title,
    description: `${vacancy.summary} Responsibilities: ${vacancy.duties.join("; ")}. Requirements: ${vacancy.requirements.join("; ")}.`,
    datePosted: vacancy.datePosted,
    validThrough: "2026-08-25",
    employmentType: vacancy.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Cypher Digital",
      sameAs: "https://cypherdigital.lk",
      logo: "https://cypherdigital.lk/assets/logo-DJLYsmc6.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
    },
    applicantLocationRequirements: { "@type": "Country", name: "Sri Lanka" },
    directApply: true,
    url: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://cypherdigital.lk/careers" },
      { "@type": "ListItem", position: 3, name: vacancy.shortTitle, item: canonical },
    ],
  };

  return (
    <div className="pt-16">
      <SEOHead title={vacancy.metaTitle} description={vacancy.metaDescription} canonical={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageBreadcrumb items={[{ label: "Careers", href: "/careers" }, { label: vacancy.shortTitle }]} />

      {/* Hero */}
      <section className="section-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Open Vacancy</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">{vacancy.h1}</h1>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {vacancy.location}</span>
            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {vacancy.type}</span>
            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> Cypher Digital</span>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{vacancy.summary}</p>
          <Button asChild size="lg" className="bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" /> {vacancy.whatsappCta} on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Job details */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-border">
            <CardContent className="p-6 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">{vacancy.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-heading font-bold mb-3 text-lg">What you'll do</h3>
                  <ul className="space-y-2.5">
                    {vacancy.duties.map((d, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-3 text-lg">What we're looking for</h3>
                  <ul className="space-y-2.5">
                    {vacancy.requirements.map((r, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {vacancy.perks && (
                <div className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="font-heading font-bold mb-3 flex items-center gap-2 text-lg">
                    <Sparkles className="w-4 h-4 text-primary" /> What you'll gain
                  </h3>
                  <ul className="space-y-2.5">
                    {vacancy.perks.map((g, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-secondary/40 rounded-xl p-6 border border-border">
                <h3 className="font-heading font-bold mb-2">How to Apply</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send your name, portfolio link or experience summary, and a brief intro to <strong className="text-foreground">+94 70 177 2626</strong> on WhatsApp. We respond within 24 hours — no lengthy forms, no waiting.
                </p>
                <Button asChild className="bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> {vacancy.whatsappCta}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-xl font-bold mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <Link to="/careers" className="block p-5 rounded-xl bg-card border border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                <ArrowLeft className="w-4 h-4" /> All Open Vacancies
              </div>
              <p className="text-sm text-muted-foreground">See every role open at Cypher Digital.</p>
            </Link>
            <Link to="/about" className="block p-5 rounded-xl bg-card border border-border hover:border-primary transition-colors">
              <div className="font-semibold mb-1">About Cypher Digital</div>
              <p className="text-sm text-muted-foreground">Meet the team, our story, and the brands we work with.</p>
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Other open roles:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { slug: "graphic-designer-jobs-sri-lanka", label: "Graphic Designer" },
                { slug: "digital-marketing-jobs-sri-lanka", label: "Digital Marketing Specialist" },
                { slug: "video-editor-jobs-sri-lanka", label: "Video Editor" },
                { slug: "marketing-internship-sri-lanka", label: "Marketing Internship" },
              ]
                .filter((v) => v.slug !== vacancy.slug)
                .map((v) => (
                  <Link
                    key={v.slug}
                    to={`/careers/${v.slug}`}
                    className="px-3 py-1.5 rounded-full bg-card border border-border text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {v.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacancyPage;