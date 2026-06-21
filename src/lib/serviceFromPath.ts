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
  "facebook-ads": "Facebook Ads",
  "instagram-marketing": "Instagram Marketing",
  "tiktok-marketing": "TikTok Marketing",
  "linkedin-advertising": "LinkedIn Ads",
  "social-media-management": "Social Media",
  "social-media-management-sri-lanka": "Social Media",
  "influencer-marketing": "Influencer Marketing",
  "video-production": "Video Production",
  "ai-video-production": "AI Video Production",
  "graphic-design": "Graphic Design",
  "ai-visibility": "AI Visibility",
  "newspaper-advertising-sri-lanka": "Newspaper Advertising",
  "tv-advertising": "TV Advertising",
  "radio-advertising": "Radio Advertising",
  "event-management": "Event Management",
  "corporate-event-management": "Event Management",
  "product-launch-events": "Event Management",
  "event-marketing": "Event Marketing",
  "wedding-planning": "Wedding Planning",
  "media-buying-agencies": "Media Buying",
  "advertising-in-sri-lanka": "Advertising Pillar",
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
