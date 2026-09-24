import { useLocation } from "react-router-dom";

const DEFAULT_WHATSAPP = "94701772626";

/** Exact-match overrides (industry pages with dedicated lines). */
const PAGE_WHATSAPP_NUMBERS: Record<string, string> = {
  "/real-estate-digital-marketing-sri-lanka": "94771437707",
  "/healthcare-digital-marketing-sri-lanka": "94771437707",
  "/finance-digital-marketing-sri-lanka": "94771437707",
  "/b2b-digital-marketing-sri-lanka": "94771437707",
  "/call-center-outsourcing-sri-lanka": "94771437707",
  "/hotel-digital-marketing-sri-lanka": "94771976351",
  "/travel-agency-digital-marketing-sri-lanka": "94771976351",
};

/** Route prefixes that route WhatsApp chats to the social media line. */
const SOCIAL_MEDIA_PREFIXES = [
  "/social-media-",
  "/facebook-",
  "/instagram-",
  "/tiktok-",
  "/linkedin-",
];

const SOCIAL_MEDIA_WHATSAPP = "94760317477";

export const getWhatsappNumber = (pathname: string): string => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (PAGE_WHATSAPP_NUMBERS[clean]) return PAGE_WHATSAPP_NUMBERS[clean];
  if (SOCIAL_MEDIA_PREFIXES.some((p) => clean.startsWith(p))) {
    return SOCIAL_MEDIA_WHATSAPP;
  }
  // Legacy exact matches that also use the social media line
  if (
    clean === "/automotive-digital-marketing-sri-lanka" ||
    clean === "/education-marketing-agency-sri-lanka" ||
    clean === "/home-services-construction-digital-marketing-sri-lanka"
  ) {
    return SOCIAL_MEDIA_WHATSAPP;
  }
  return DEFAULT_WHATSAPP;
};

/** Convenience hook for components. */
export const useWhatsappNumber = (): string => {
  const { pathname } = useLocation();
  return getWhatsappNumber(pathname);
};
