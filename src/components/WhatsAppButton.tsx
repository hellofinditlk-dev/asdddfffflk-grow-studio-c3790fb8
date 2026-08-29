import mascotHeadset from "@/assets/mascot-headset.jpeg";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const PAGE_WHATSAPP_NUMBERS: Record<string, string> = {
  "/automotive-digital-marketing-sri-lanka": "94760317477",
  "/education-marketing-agency-sri-lanka": "94760317477",
  "/real-estate-digital-marketing-sri-lanka": "94771437707",
};

const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const number = PAGE_WHATSAPP_NUMBERS[pathname] || "94701772626";

  return (
    <a
      href={`https://wa.me/${number}?text=Hi%2C%20I%20need%20digital%20marketing%20services`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 h-12 pl-1 pr-4 rounded-full bg-[#25D366] !text-white font-bold text-sm shadow-lg hover:scale-105 hover:bg-[#1ebe5d] transition-all animate-pulse-glow border-none"
      aria-label="Chat on WhatsApp"
    >
      <span className="w-10 h-10 rounded-full overflow-hidden bg-white/20 flex items-center justify-center shrink-0">
        <img src={mascotHeadset} alt="" className="w-full h-full object-cover" />
      </span>
      <MessageCircle className="w-4 h-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
