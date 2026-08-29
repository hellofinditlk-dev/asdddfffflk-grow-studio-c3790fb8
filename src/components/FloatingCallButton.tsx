import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

const PAGE_PHONE_NUMBERS: Record<string, string> = {
  "/automotive-digital-marketing-sri-lanka": "94760317477",
  "/education-marketing-agency-sri-lanka": "94760317477",
  "/real-estate-digital-marketing-sri-lanka": "94771437707",
  "/healthcare-digital-marketing-sri-lanka": "94771437707",
  "/finance-digital-marketing-sri-lanka": "94771437707",
};

const FloatingCallButton = () => {
  const { pathname } = useLocation();
  const number = PAGE_PHONE_NUMBERS[pathname] || "94701772626";

  return (
    <a
      href={`tel:+94${number.slice(2)}`}
      aria-label="Call Cypher Digital"
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2 h-12 px-4 rounded-full bg-[hsl(25,95%,53%)] !text-white font-bold text-sm shadow-lg hover:bg-[hsl(25,95%,45%)] hover:scale-105 transition-all border-none"
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
        <Phone className="h-4 w-4 relative" />
      </span>
      <span className="hidden sm:inline">Call Now</span>
    </a>
  );
};

export default FloatingCallButton;
