/**
 * Trust content for /event-management-sri-lanka (team, case studies,
 * testimonials, client logos). Every entry must be real, owner-supplied
 * content — never invent names, clients, results or reviews.
 * A section stays hidden on the page while its array is empty.
 */

export interface EventTeamMember {
  name: string;
  role: string;
  yearsExperience: number;
  specialty: string;
  linkedinUrl?: string;
  photoUrl?: string;
}

export interface EventCaseStudy {
  slug: string; // used for the /work/[slug] detail page
  clientName: string;
  eventType: string; // e.g. "Product Launch"
  brief: string;
  guests: number;
  venue: string;
  whatWeDid: string;
  result: string;
  photoUrl?: string;
  logoUrl?: string;
}

export interface EventTestimonial {
  quote: string;
  clientName: string;
  jobTitle: string;
  company: string;
  photoUrl?: string;
}

export interface EventFactStat {
  value: string; // e.g. "2019"
  label: string; // e.g. "founded"
}

// Owner-supplied real content goes here. Empty = section hidden.
export const eventTeam: EventTeamMember[] = [];

export const eventFactStats: EventFactStat[] = [];

export const eventCaseStudies: EventCaseStudy[] = [];

export const eventTestimonials: EventTestimonial[] = [];

// Client logos for the "Trusted by" strip under the hero.
export const trustedByLogos: { name: string; logoUrl: string }[] = [];

// Google Business Profile URL for the "Read our Google reviews" button.
export const googleReviewsUrl = "https://share.google/1QSNKkuQt3BOA1juS";

// Event Management Association of Sri Lanka membership — keep false
// until membership is confirmed; the badge area stays hidden.
export const isEmaMember = false;
