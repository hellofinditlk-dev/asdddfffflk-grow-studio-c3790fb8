// Map a URL path to a clean, human-readable service name.
// Strips query strings, UTM params, hashes, and trailing slashes.

const EXACT: Record<string, string> = {
  "": "Home",
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/careers": "Careers",
};

const FIRST_SEGMENT: Record<string, string> = {
  "seo": "SEO",
  "seo-services": "SEO",
  "search-engine-optimization": "SEO",
  "google-ads": "Google Ads",
  "google-ads-sri-lanka": "Google Ads",
  "facebook-ads": "Facebook Ads",
  "facebook-advertising": "Facebook Ads",
  "facebook-ads-sri-lanka": "Facebook Ads",
  "instagram-marketing": "Instagram Marketing",
  "tiktok-marketing": "TikTok Marketing",
  "tiktok-marketing-sri-lanka": "TikTok Marketing",
  "linkedin-advertising": "LinkedIn Ads",
  "social-media-management": "Social Media",
  "social-media-management-sri-lanka": "Social Media",
  "influencer-marketing": "Influencer Marketing",
  "video-production": "Video Production",
  "video-production-sri-lanka": "Video Production",
  "ai-video-production": "AI Video Production",
  "ai-video-production-sri-lanka": "AI Video Production",
  "graphic-design": "Graphic Design",
  "graphic-design-sri-lanka": "Graphic Design",
  "ai-visibility": "AI Visibility",
  "ai-visibility-sri-lanka": "AI Visibility",
  "newspaper-advertising-sri-lanka": "Newspaper Advertising",
  "newspaper-advertising": "Newspaper Advertising",
  "tv-advertising": "TV Advertising",
  "tv-advertising-sri-lanka": "TV Advertising",
  "radio-advertising": "Radio Advertising",
  "radio-advertising-sri-lanka": "Radio Advertising",
  "event-management": "Event Management",
  "corporate-event-management": "Event Management",
  "product-launch-events": "Event Management",
  "event-marketing": "Event Marketing",
  "wedding-planning": "Wedding Planning",
  "media-buying-agencies": "Media Buying",
  "media-buying-sri-lanka": "Media Buying",
  "advertising-in-sri-lanka": "Advertising Pillar",
  "advertising-sri-lanka": "Advertising Pillar",
};

export function serviceFromPath(rawPath: string | null | undefined): string {
  if (!rawPath) return "Unknown";
  // strip query + hash + trailing slash
  const clean = rawPath.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  if (EXACT[clean] !== undefined) return EXACT[clean];

  if (clean.startsWith("/blog")) return "Blog";
  if (clean.startsWith("/careers")) return "Careers";
  if (clean.startsWith("/industries/")) return "Industries";
  if (clean.startsWith("/admin")) return "Admin";

  const seg = clean.replace(/^\//, "").split("/")[0];
  if (FIRST_SEGMENT[seg]) return FIRST_SEGMENT[seg];

  // Fallback: title-case the slug
  return seg
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Return the canonical site URL that originally produced a given path.
// Used so the admin dashboard can deep-link to the source page even when
// multiple paths roll up to the same service name.
export function urlFromPath(rawPath: string | null | undefined): string | null {
  if (!rawPath) return null;
  const clean = rawPath.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  if (clean === "/" || clean.startsWith("/")) return clean;
  return "/" + clean;
}

export function cleanPath(rawPath: string | null | undefined): string {
  if (!rawPath) return "(unknown)";
  return rawPath.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
}

export function sourceFromReferrer(ref: string | null | undefined): string {
  if (!ref) return "Direct";
  try {
    const host = new URL(ref).hostname.replace(/^www\./, "");
    if (host.includes("google.")) return "Google Organic";
    if (host.includes("bing.")) return "Bing";
    if (host.includes("yahoo.")) return "Yahoo";
    if (host.includes("duckduckgo.")) return "DuckDuckGo";
    if (host.includes("facebook.") || host.includes("fb.")) return "Facebook";
    if (host.includes("instagram.")) return "Instagram";
    if (host.includes("linkedin.")) return "LinkedIn";
    if (host.includes("tiktok.")) return "TikTok";
    if (host.includes("youtube.")) return "YouTube";
    if (host.includes("twitter.") || host.includes("x.com") || host.includes("t.co")) return "Twitter / X";
    if (host.includes("whatsapp.") || host.includes("wa.me")) return "WhatsApp";
    if (host.includes("chatgpt.") || host.includes("openai.")) return "ChatGPT";
    if (host.includes("perplexity.")) return "Perplexity";
    if (host.includes("gemini.") || host.includes("bard.")) return "Gemini";
    if (host.includes("claude.")) return "Claude";
    if (host.includes("cypherdigital.lk")) return "Internal";
    return host;
  } catch {
    return "Direct";
  }
}

// Map a clean service name back to its canonical page URL on the site.
const SERVICE_URL: Record<string, string> = {
  "Home": "/",
  "About": "/about",
  "Contact": "/contact",
  "Blog": "/blog",
  "Careers": "/careers",
  "SEO": "/seo-services",
  "Google Ads": "/google-ads",
  "Facebook Ads": "/facebook-ads",
  "Instagram Marketing": "/instagram-marketing",
  "TikTok Marketing": "/tiktok-marketing",
  "LinkedIn Ads": "/linkedin-advertising",
  "Social Media": "/social-media-management-sri-lanka",
  "Influencer Marketing": "/influencer-marketing",
  "Video Production": "/video-production",
  "AI Video Production": "/ai-video-production",
  "Graphic Design": "/graphic-design",
  "AI Visibility": "/ai-visibility",
  "Newspaper Advertising": "/newspaper-advertising-sri-lanka",
  "TV Advertising": "/tv-advertising",
  "Radio Advertising": "/radio-advertising",
  "Event Management": "/event-management",
  "Event Marketing": "/event-marketing",
  "Wedding Planning": "/wedding-planning",
  "Media Buying": "/media-buying-agencies",
  "Advertising Pillar": "/advertising-in-sri-lanka",
  "Industries": "/",
  "Admin": "/admin/inquiries",
};

export function serviceUrl(service: string): string | null {
  return SERVICE_URL[service] ?? null;
}
