import { useParams, Link, Navigate } from "react-router-dom";
import { MessageCircle, Briefcase, MapPin, CheckCircle2, Sparkles, ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getVacancyBySlug, vacancies } from "@/data/vacancies";

const WHATSAPP_BASE = "https://wa.me/94701772626";

// Service pages related to each role family — keeps career pages linked into the money pages.
const SERVICE_LINKS: { match: RegExp; links: { href: string; label: string }[] }[] = [
  {
    match: /graphic|design/,
    links: [
      { href: "/graphic-design-sri-lanka", label: "Graphic design services in Sri Lanka" },
      { href: "/social-media-management-sri-lanka", label: "Social media management" },
    ],
  },
  {
    match: /video/,
    links: [
      { href: "/video-production-sri-lanka", label: "Video production services" },
      { href: "/social-media-management-sri-lanka", label: "Social media management" },
    ],
  },
  {
    match: /social/,
    links: [
      { href: "/social-media-management-sri-lanka", label: "Social media management services" },
      { href: "/advertising-in-sri-lanka", label: "Advertising in Sri Lanka" },
    ],
  },
  {
    match: /content/,
    links: [
      { href: "/seo-services-sri-lanka", label: "SEO services in Sri Lanka" },
      { href: "/blog", label: "Cypher Digital blog" },
    ],
  },
  {
    match: /sales|business-development/,
    links: [
      { href: "/advertising-in-sri-lanka", label: "Advertising in Sri Lanka" },
      { href: "/google-ads-sri-lanka", label: "Google Ads management" },
    ],
  },
  {
    match: /.*/,
    links: [
      { href: "/social-media-management-sri-lanka", label: "Social media management services" },
      { href: "/seo-services-sri-lanka", label: "SEO services in Sri Lanka" },
    ],
  },
];

const FAMILIES: RegExp[] = [
  /internship|intern/,
  /sales|business-development/,
  /graphic|video|content|design/,
  /digital-marketing|social/,
];

const VacancyPage = () => {
  const { slug } = useParams();
  const vacancy = getVacancyBySlug(slug);

  if (!vacancy) return <Navigate to="/careers" replace />;

  const Icon = vacancy.icon;
  const canonical = `https://cypherdigital.lk/careers/${vacancy.slug}`;
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(vacancy.whatsappMessage)}`;

  // Rolling validThrough: always 90 days from today so evergreen vacancies never expire in Google for Jobs.
  const validThrough = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 90);
    return d.toISOString().slice(0, 10);
  })();

  const jobPostingSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacancy.title,
    description: `${vacancy.summary} Responsibilities: ${vacancy.duties.join("; ")}. Requirements: ${vacancy.requirements.join("; ")}.`,
    datePosted: vacancy.datePosted,
    validThrough,
    identifier: {
      "@type": "PropertyValue",
      name: "Cypher Digital",
      value: vacancy.slug,
    },
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
        streetAddress: "Kotte",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        postalCode: "10100",
        addressCountry: "LK",
      },
    },
    applicantLocationRequirements: { "@type": "Country", name: "Sri Lanka" },
    directApply: false,
    url: canonical,
  };

  // ---- Enriched Google for Jobs fields ----
  const isIntern = /intern/i.test(vacancy.slug) || /INTERN/.test(String(vacancy.employmentType));
  const monthsExperience =
    vacancy.monthsExperience ?? (isIntern ? 0 : 12);
  const educationRequirement =
    vacancy.educationRequirement ?? (isIntern ? "high school" : "bachelor degree");
  const skills =
    vacancy.skills ??
    [
      ...(vacancy.softwareSkills?.items.map((s) => s.name) ?? []),
      ...vacancy.requirements,
    ];

  jobPostingSchema.responsibilities = vacancy.duties.join("; ");
  jobPostingSchema.qualifications = vacancy.requirements.join("; ");
  jobPostingSchema.skills = skills.join(", ");
  jobPostingSchema.educationRequirements = {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: educationRequirement,
  };
  jobPostingSchema.experienceRequirements = {
    "@type": "OccupationalExperienceRequirements",
    monthsOfExperience: monthsExperience,
  };
  jobPostingSchema.experienceInPlaceOfEducation = true;
  jobPostingSchema.industry = "Digital Marketing";
  jobPostingSchema.occupationalCategory = vacancy.title;
  jobPostingSchema.workHours = vacancy.type;
  jobPostingSchema.jobLocationType = "TELECOMMUTE" === vacancy.location ? "TELECOMMUTE" : undefined;
  if (!jobPostingSchema.jobLocationType) delete jobPostingSchema.jobLocationType;
  if (vacancy.perks && vacancy.perks.length > 0) {
    jobPostingSchema.jobBenefits = vacancy.perks.join("; ");
  }
  jobPostingSchema.applicantLocationRequirements = { "@type": "Country", name: "Sri Lanka" };
  jobPostingSchema.employmentUnit = {
    "@type": "Organization",
    name: "Cypher Digital",
  };
  jobPostingSchema.applicationContact = {
    "@type": "ContactPoint",
    contactType: "Recruitment",
    telephone: "+94701772626",
    url: waUrl,
  };
  jobPostingSchema.potentialAction = {
    "@type": "ApplyAction",
    target: { "@type": "EntryPoint", urlTemplate: waUrl },
    name: `Apply for ${vacancy.title} on WhatsApp`,
  };

  const lastUpdatedIso = vacancy.lastUpdated ?? vacancy.datePosted;
  jobPostingSchema.dateModified = lastUpdatedIso;
  const lastUpdatedLabel = new Date(`${lastUpdatedIso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  if (vacancy.salaryRange) {
    jobPostingSchema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: vacancy.salaryRange.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: vacancy.salaryRange.min,
        maxValue: vacancy.salaryRange.max,
        unitText: vacancy.salaryRange.unit,
      },
    };
  }

  const faqSchema = vacancy.faqs && vacancy.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: vacancy.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

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
    <div>
      <SEOHead title={vacancy.metaTitle} description={vacancy.metaDescription} canonical={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
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
          <p className="text-sm text-muted-foreground mb-6">
            Last Updated:{" "}
            <time dateTime={lastUpdatedIso} className="font-semibold text-foreground">{lastUpdatedLabel}</time>
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{vacancy.summary}</p>
          <Button asChild size="lg" className="bg-[hsl(20,90%,55%)] hover:bg-[hsl(20,90%,50%)] text-white border-0">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" /> {vacancy.whatsappCta} on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* SEO intro */}
      {vacancy.seoIntro && vacancy.seoIntro.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-5">
            {vacancy.kwIntro && (
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl p-5 text-base leading-relaxed text-foreground/90 mb-2">
                {vacancy.kwIntro}
              </div>
            )}
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              About this {vacancy.shortTitle} job in Sri Lanka
            </h2>
            {vacancy.seoIntro.map((p, i) => (
              <p key={i} className="text-base text-muted-foreground leading-relaxed">{p}</p>
            ))}
            {vacancy.slug === "digital-marketing-jobs-sri-lanka" && (
              <p className="text-base text-muted-foreground leading-relaxed">
                Looking for more{" "}
                <Link to="/careers" className="text-primary hover:underline">digital marketing jobs in sri lanka</Link>
                ? Browse all open vacancies at Cypher Digital.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Salary guide */}
      {vacancy.salaryGuide && (
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              {vacancy.shortTitle} Salary in Sri Lanka 2026
            </h2>
            {vacancy.salaryGuide.intro.map((p, i) => (
              <p key={i} className="text-base text-muted-foreground leading-relaxed mb-3">{p}</p>
            ))}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
              {vacancy.salaryGuide.levels.map((l, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 border-t-4 border-t-primary">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{l.name}</p>
                  <p className="text-xs text-muted-foreground mb-2">{l.exp}</p>
                  <p className="font-heading font-bold text-foreground">{l.salary}</p>
                </div>
              ))}
            </div>
            {vacancy.salaryGuide.note && (
              <p className="text-sm text-muted-foreground italic mt-5">{vacancy.salaryGuide.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Software skills */}
      {vacancy.softwareSkills && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Software Skills Required for {vacancy.shortTitle} Jobs in Sri Lanka
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">{vacancy.softwareSkills.intro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vacancy.softwareSkills.items.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <div className="text-2xl shrink-0">{s.icon}</div>
                  <div>
                    <p className="font-heading font-bold mb-1">{s.name}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio steps */}
      {vacancy.portfolioSteps && (
        <section className="py-12 lg:py-16 section-dark">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              How to Build a {vacancy.shortTitle} Portfolio for Jobs in Sri Lanka
            </h2>
            <p className="text-base opacity-80 leading-relaxed mb-6">{vacancy.portfolioSteps.intro}</p>
            <ol className="space-y-3">
              {vacancy.portfolioSteps.steps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <p className="text-sm md:text-base opacity-90 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Career path */}
      {vacancy.careerPath && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              {vacancy.shortTitle} Career Path in Sri Lanka
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {vacancy.careerPath.steps.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Step {i + 1}</p>
                  <p className="font-heading font-bold text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-primary font-semibold mb-1">{s.salary}</p>
                  <p className="text-xs text-muted-foreground">{s.exp}</p>
                </div>
              ))}
            </div>
            {vacancy.careerPath.note && (
              <p className="text-sm text-muted-foreground leading-relaxed mt-6">{vacancy.careerPath.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Day in the life */}
      {vacancy.dayInLife && (
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              A Day in the Life of a Cypher Digital {vacancy.shortTitle}
            </h2>
            {vacancy.dayInLife.intro && (
              <p className="text-base text-muted-foreground leading-relaxed mb-6">{vacancy.dayInLife.intro}</p>
            )}
            <div className="space-y-2.5">
              {vacancy.dayInLife.items.map((it, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border">
                  <span className="text-sm font-semibold text-primary min-w-[70px]">{it.time}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.task}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Why join */}
      {vacancy.whyJoin && vacancy.whyJoin.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
              Why this is one of the best {vacancy.shortTitle.toLowerCase()} jobs in Sri Lanka
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {vacancy.whyJoin.map((w, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="font-heading font-bold mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {vacancy.faqs && vacancy.faqs.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
              {vacancy.shortTitle} jobs in Sri Lanka — FAQs
            </h2>
            <div className="space-y-5">
              {vacancy.faqs.map((f, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="font-heading font-bold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            {vacancy.internalLinks?.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block p-5 rounded-xl bg-card border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                  {link.label} <ArrowRight className="w-4 h-4" />
                </div>
                {link.desc && <p className="text-sm text-muted-foreground">{link.desc}</p>}
              </Link>
            ))}
          </div>
          {similarRoles.length > 0 && (
            <div className="mb-8">
              <h3 className="font-heading text-lg font-bold mb-2">Similar jobs in Sri Lanka</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {similarRoles.map((v) => (
                  <Link
                    key={v.slug}
                    to={`/careers/${v.slug}`}
                    className="block p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      {v.shortTitle} jobs in Sri Lanka <ArrowRight className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{v.metaDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-heading text-lg font-bold mb-3">What this team works on</h3>
            <div className="flex flex-wrap gap-2">
              {serviceLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="px-3 py-1.5 rounded-full bg-card border border-border text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-3">All open vacancies at Cypher Digital</h3>
            <div className="flex flex-wrap gap-2">
              {otherRoles.map((v) => (
                <Link
                  key={v.slug}
                  to={`/careers/${v.slug}`}
                  className="px-3 py-1.5 rounded-full bg-card border border-border text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {v.shortTitle}
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