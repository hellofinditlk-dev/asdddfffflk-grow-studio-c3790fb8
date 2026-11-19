import { Link } from "react-router-dom";
import { Linkedin, ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  eventTeam,
  eventFactStats,
  eventCaseStudies,
  eventTestimonials,
  googleReviewsUrl,
} from "@/data/eventTrust";

/**
 * Trust sections for /event-management-sri-lanka: team, case studies and
 * testimonials. Each section renders only when real owner-supplied content
 * exists in src/data/eventTrust.ts — empty data means the section is hidden,
 * so no placeholder or fabricated proof is ever published.
 */
const EventTrustSections = () => {
  const hasTeam = eventTeam.length > 0;
  const hasCaseStudies = eventCaseStudies.length > 0;
  const hasTestimonials = eventTestimonials.length > 0;

  if (!hasTeam && !hasCaseStudies && !hasTestimonials) return null;

  return (
    <>
      {hasTeam && (
        <section className="py-20 lg:py-28" id="event-team">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The People Behind Your Event</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Meet Our Event Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTeam.map((member) => (
                <div key={member.name} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={`${member.name}, ${member.role} at Cypher Digital`}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-primary/10 text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <h3 className="font-heading text-base font-bold">{member.name}</h3>
                  <p className="text-xs text-primary font-semibold mt-0.5">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {member.yearsExperience}+ years · {member.specialty}
                  </p>
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-muted-foreground hover:text-primary mt-3 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
            {eventFactStats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-secondary rounded-2xl p-8">
                {eventFactStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {hasCaseStudies && (
        <section className="py-20 lg:py-28 bg-secondary" id="event-case-studies">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Real Events, Real Results</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Event Case Studies</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {eventCaseStudies.map((study) => (
                <Link
                  key={study.slug}
                  to={`/work/${study.slug}`}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  {study.photoUrl && (
                    <img
                      src={study.photoUrl}
                      alt={`${study.eventType} for ${study.clientName} at ${study.venue}`}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                      {study.eventType}
                    </span>
                    <h3 className="font-heading text-base font-bold mb-3">{study.clientName}</h3>
                    <dl className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                      <div><dt className="inline font-semibold text-foreground">Brief: </dt><dd className="inline">{study.brief}</dd></div>
                      <div><dt className="inline font-semibold text-foreground">Guests: </dt><dd className="inline">{study.guests} · {study.venue}</dd></div>
                      <div><dt className="inline font-semibold text-foreground">What we did: </dt><dd className="inline">{study.whatWeDid}</dd></div>
                      <div><dt className="inline font-semibold text-foreground">Result: </dt><dd className="inline">{study.result}</dd></div>
                    </dl>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4 group-hover:gap-2 transition-all">
                      Read the full case study <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasTestimonials && (
        <section className="py-20 lg:py-28" id="event-testimonials">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Client Feedback</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {eventTestimonials.map((t) => (
                <figure key={`${t.clientName}-${t.company}`} className="bg-card border border-border rounded-2xl p-6">
                  <Quote className="w-6 h-6 text-primary/40 mb-4" />
                  <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">{t.quote}</blockquote>
                  <figcaption className="flex items-center gap-3">
                    {t.photoUrl ? (
                      <img src={t.photoUrl} alt={t.clientName} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs flex items-center justify-center">
                        {t.clientName.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold">{t.clientName}</p>
                      <p className="text-xs text-muted-foreground">{t.jobTitle}, {t.company}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            {googleReviewsUrl && (
              <div className="text-center mt-10">
                <Button asChild variant="outline" className="rounded-xl">
                  <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                    <Star className="w-4 h-4 mr-2" /> Read our Google reviews
                  </a>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default EventTrustSections;
