export type NewServiceLink = { label: string; path: string };

export const NEW_SERVICE_PAGES: Record<string, NewServiceLink> = {
  all: { label: "All Digital Marketing Services", path: "/digital-marketing-services-sri-lanka" },
  agency: { label: "Advertising Agency in Sri Lanka", path: "/advertising-agency-sri-lanka" },
  consultant: { label: "Digital Marketing Consultant", path: "/digital-marketing-consultant-sri-lanka" },
  photoshoot: { label: "Photoshoot Services", path: "/photoshoot-sri-lanka" },
  corporate: { label: "Corporate Photography Colombo", path: "/corporate-photography-colombo" },
  web: { label: "Web Development Sri Lanka", path: "/web-development-sri-lanka" },
  ecommerce: { label: "Ecommerce Website Development", path: "/ecommerce-website-sri-lanka" },
  outdoor: { label: "Outdoor & Billboard Advertising", path: "/outdoor-advertising-sri-lanka" },
  email: { label: "Email Marketing Services", path: "/email-marketing-sri-lanka" },
};

const k = (...keys: string[]) => keys.map((key) => NEW_SERVICE_PAGES[key]);

/** Existing or new page path -> related new pages shown above the footer. */
export const RELATED_NEW_SERVICES: Record<string, NewServiceLink[]> = {
  "/advertising-in-sri-lanka": k("agency", "outdoor"),
  "/newspaper-advertising-sri-lanka": k("agency", "outdoor"),
  "/tv-advertising-sri-lanka": k("agency", "outdoor"),
  "/radio-advertising-sri-lanka": k("agency", "outdoor"),
  "/google-ads-sri-lanka": k("agency", "consultant"),
  "/facebook-ads-sri-lanka": k("agency", "consultant"),
  "/social-media-consultant-sri-lanka": k("consultant"),
  "/seo-services-sri-lanka": k("web", "ecommerce"),
  "/product-photography-sri-lanka": k("photoshoot", "corporate"),
  "/social-media-content-creation-sri-lanka": k("photoshoot", "corporate"),
  "/lead-follow-up-services-sri-lanka": k("email"),
  "/blog/email-marketing-sri-lanka-guide-2026": k("email"),
  "/graphic-design-sri-lanka": k("web", "photoshoot"),
  // New pages cross-linked
  "/advertising-agency-sri-lanka": k("outdoor", "consultant", "all"),
  "/outdoor-advertising-sri-lanka": k("agency", "all"),
  "/digital-marketing-consultant-sri-lanka": k("agency", "email", "all"),
  "/photoshoot-sri-lanka": k("corporate", "all"),
  "/corporate-photography-colombo": k("photoshoot", "all"),
  "/web-development-sri-lanka": k("ecommerce", "all"),
  "/ecommerce-website-sri-lanka": k("web", "email", "all"),
  "/email-marketing-sri-lanka": k("ecommerce", "consultant", "all"),
};
