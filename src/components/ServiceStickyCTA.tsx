import { useLocation } from "react-router-dom";
import { MessageCircle, Phone, Sparkles, Star, CheckCircle } from "lucide-react";

const SERVICE_ROUTE_PATTERNS = [
  /-sri-lanka$/,
  /^\/advertising-in-sri-lanka/,
  /^\/event-management/,
  /^\/corporate-event-management/,
  /^\/wedding-planning/,
  /^\/event-marketing/,
  /^\/product-launch-events/,
];

const CUSTOM_NUMBER_PAGES = [
  "/automotive-digital-marketing-sri-lanka",
  "/education-marketing-agency-sri-lanka",
  "/real-estate-digital-marketing-sri-lanka",
];

const isServiceRoute = (pathname: string) => {
  if (pathname === "/") return false;
  if (pathname.startsWith("/blog")) return false;
  if (pathname.startsWith("/industries")) return false;
  return SERVICE_ROUTE_PATTERNS.some((re) => re.test(pathname));
};

const ServiceStickyCTA = () => {
  const { pathname } = useLocation();
  if (!isServiceRoute(pathname)) return null;

  const number = CUSTOM_NUMBER_PAGES.includes(pathname) ? "94760317477" : "94701772626";
  const waHref = `https://wa.me/${number}?text=Hi%2C%20I%27d%20like%20a%20free%20consultation%20%26%20quote`;
  const telHref = `tel:+94${number.slice(2)}`;
  const displayNumber = `+94 ${number.slice(2, 4)} ${number.slice(4, 7)} ${number.slice(7)}`;

  return (
    <section className="bg-secondary/40 border-t border-border py-12 md:py-16" aria-label="Talk to us">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/8 via-background to-accent/8 overflow-hidden shadow-[0_20px_60px_-30px_hsl(252,65%,55%,0.35)]">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 p-6 md:p-10 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Free audit · This month
              </div>
              <h2 className="mt-3 font-heading text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Talk to a strategist — we reply in 1 hour
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                Get a free audit and a transparent quote on WhatsApp. No contracts, no fluff — just an honest plan tailored to your business.
              </p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> Free 30-min strategy call</li>
                <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> Reply within 1 business hour</li>
                <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> No long-term contracts</li>
                <li className="flex items-center gap-2 text-foreground/80"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> Transparent monthly reports</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-card border border-border p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex text-[hsl(38,92%,50%)]" aria-hidden="true">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">5.0 · 200+ Sri Lankan clients</span>
                </div>
                <p className="text-xs text-muted-foreground">Trusted by SMEs across Colombo, Kandy, Galle, Negombo, Jaffna and beyond.</p>
              </div>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] !text-white px-5 h-12 text-sm font-bold shadow-md hover:opacity-90 transition-opacity border-none"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(25,95%,53%)] !text-white px-5 h-12 text-sm font-bold shadow-md hover:bg-[hsl(25,95%,45%)] transition-colors border-none"
              >
                <Phone className="h-4 w-4" /> Call {displayNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStickyCTA;
export { isServiceRoute };
