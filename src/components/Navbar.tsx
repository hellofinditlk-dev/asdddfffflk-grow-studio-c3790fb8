import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { industries } from "@/data/industries";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Social Media", path: "/social-media-management-sri-lanka" },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka" },
  { label: "Google Ads", path: "/google-ads-sri-lanka" },
  { label: "SEO", path: "/seo-services-sri-lanka" },
  { label: "Graphic Design", path: "/graphic-design-sri-lanka" },
  
  { label: "TikTok", path: "/tiktok-marketing-sri-lanka" },
  { label: "AI Visibility", path: "/ai-visibility-sri-lanka" },
];

const industryItems = industries.map((i) => ({
  label: i.shortName,
  path: `/${i.slug}`,
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setOpen(false);
    setIndustriesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cypher Digital" className="h-8 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Industries Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                industryItems.some((i) => location.pathname === i.path)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
            </button>
            {industriesOpen && (
              <div className="absolute top-full right-0 mt-1 w-56 bg-card border border-border rounded-xl shadow-lg py-2 z-50">
                {industryItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Button asChild size="sm" className="ml-3 bg-[hsl(25,95%,53%)] !text-white font-semibold hover:bg-[hsl(25,95%,45%)] rounded-lg h-9 px-4 border-none">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Industries */}
            <button
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                industryItems.some((i) => location.pathname === i.path)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileIndustriesOpen && (
              <div className="pl-4 flex flex-col gap-0.5">
                {industryItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Button asChild size="sm" className="bg-[hsl(25,95%,53%)] !text-white font-semibold mt-2 rounded-lg hover:bg-[hsl(25,95%,45%)] border-none">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
