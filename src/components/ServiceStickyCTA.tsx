import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, Phone, Sparkles, Star, X } from "lucide-react";

const SERVICE_ROUTE_PATTERNS = [
  /-sri-lanka$/,
  /^\/advertising-in-sri-lanka/,
  /^\/event-management/,
  /^\/corporate-event-management/,
  /^\/wedding-planning/,
  /^\/event-marketing/,
  /^\/product-launch-events/,
];

const isServiceRoute = (pathname: string) => {
  if (pathname === "/") return false;
  if (pathname.startsWith("/blog")) return false;
  if (pathname.startsWith("/industries")) return false;
  return SERVICE_ROUTE_PATTERNS.some((re) => re.test(pathname));
};

const WA_HREF =
  "https://wa.me/94701772626?text=Hi%2C%20I%27d%20like%20a%20free%20consultation%20%26%20quote";
const TEL_HREF = "tel:+94701772626";

const ServiceStickyCTA = () => {
  const { pathname } = useLocation();
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  useEffect(() => {
    if (!isServiceRoute(pathname)) {
      setVisible(false);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (!isServiceRoute(pathname) || dismissed || !visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-4 sm:pb-4 pointer-events-none"
      role="region"
      aria-label="Talk to us"
    >
      <div className="pointer-events-auto mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-background/95 backdrop-blur shadow-[0_20px_60px_-20px_hsl(252,65%,55%,0.45)] overflow-hidden">
        <div className="flex items-stretch">
          {/* Left: pitch + trust */}
          <div className="hidden md:flex flex-col justify-center px-5 py-3 border-r border-border min-w-[260px] bg-gradient-to-br from-primary/8 via-background to-accent/8">
            <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-3 w-3" /> Free audit · This month
            </div>
            <p className="mt-1.5 font-heading text-sm font-extrabold text-foreground leading-tight">
              Talk to a strategist — reply in 1 hour
            </p>
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="flex text-[hsl(38,92%,50%)]">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
              </span>
              <span className="font-semibold text-foreground">200+</span> Sri Lankan clients
            </div>
          </div>

          {/* Mobile pitch */}
          <div className="flex md:hidden flex-col justify-center px-3 py-2 flex-1 min-w-0">
            <div className="inline-flex items-center gap-1 self-start rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-2.5 w-2.5" /> Free audit
            </div>
            <p className="mt-1 font-heading text-[13px] font-extrabold text-foreground leading-tight truncate">
              Reply in 1 hour
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 p-2 sm:p-3 md:flex-1 md:justify-end">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] !text-white px-3 sm:px-4 h-11 text-sm font-bold shadow-md hover:opacity-90 transition-opacity whitespace-nowrap"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
            <a
              href={TEL_HREF}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[hsl(25,95%,53%)] !text-white px-3 sm:px-4 h-11 text-sm font-bold shadow-md hover:bg-[hsl(25,95%,45%)] transition-colors whitespace-nowrap border-none"
              aria-label="Call Cypher Digital"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call now</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStickyCTA;
export { isServiceRoute };