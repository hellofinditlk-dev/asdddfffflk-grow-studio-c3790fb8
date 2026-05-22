import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import mascotDefault from "@/assets/mascot-default.jpeg";

const Footer = () => (
  <footer className="border-t border-border bg-secondary" role="contentinfo">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Cypher Digital" className="h-8 w-auto" />
            <img src={mascotDefault} alt="Cypher Digital mascot" className="w-8 h-8 rounded-lg object-cover" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Results-driven digital marketing agency in Sri Lanka helping businesses grow.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/cypherdigitalsrilanka" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/cypherdigital_sl/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Services</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/social-media-management-sri-lanka" className="hover:text-foreground transition-colors">Social Media Management</Link>
            <Link to="/facebook-ads-sri-lanka" className="hover:text-foreground transition-colors">Facebook Advertising</Link>
            <Link to="/google-ads-sri-lanka" className="hover:text-foreground transition-colors">Google Ads</Link>
            <Link to="/video-production-sri-lanka" className="hover:text-foreground transition-colors">Video Production</Link>
            <Link to="/seo-services-sri-lanka" className="hover:text-foreground transition-colors">SEO Services</Link>
            <Link to="/graphic-design-sri-lanka" className="hover:text-foreground transition-colors">Graphic Design</Link>
            <Link to="/tiktok-marketing-sri-lanka" className="hover:text-foreground transition-colors">TikTok Marketing</Link>
            <Link to="/influencer-marketing-sri-lanka" className="hover:text-foreground transition-colors">Influencer Marketing</Link>
            <Link to="/event-management-sri-lanka" className="hover:text-foreground transition-colors">Event Management</Link>
            <Link to="/media-buying-agencies-sri-lanka" className="hover:text-foreground transition-colors">Media Buying</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Industries</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/hotel-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Hotel Marketing</Link>
            <Link to="/travel-agency-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Travel Agency</Link>
            <Link to="/fashion-brand-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Fashion Brand</Link>
            <Link to="/restaurant-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Restaurant</Link>
            <Link to="/real-estate-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Real Estate</Link>
            <Link to="/education-marketing-agency-sri-lanka" className="hover:text-foreground transition-colors">Education</Link>
            <Link to="/beauty-salon-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Beauty Salon</Link>
            <Link to="/automotive-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Automotive</Link>
            <Link to="/small-business-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Small Business</Link>
            <Link to="/ecommerce-digital-marketing-sri-lanka" className="hover:text-foreground transition-colors">Ecommerce</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Design Services</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/logo-design-sri-lanka" className="hover:text-foreground transition-colors">Logo Design</Link>
            <Link to="/brand-identity-design-sri-lanka" className="hover:text-foreground transition-colors">Brand Identity</Link>
            <Link to="/social-media-design-sri-lanka" className="hover:text-foreground transition-colors">Social Media Design</Link>
            <Link to="/flyer-design-sri-lanka" className="hover:text-foreground transition-colors">Flyer Design</Link>
            <Link to="/packaging-design-sri-lanka" className="hover:text-foreground transition-colors">Packaging Design</Link>
            <Link to="/ui-ux-design-sri-lanka" className="hover:text-foreground transition-colors">UI/UX Design</Link>
            <Link to="/motion-graphics-sri-lanka" className="hover:text-foreground transition-colors">Motion Graphics</Link>
            <Link to="/infographic-design-sri-lanka" className="hover:text-foreground transition-colors">Infographic Design</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Company</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About Us</Link>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/advertising-in-sri-lanka" className="hover:text-foreground transition-colors">Advertising Sri Lanka</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+94701772626" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5" /> +94 70 177 2626
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Colombo, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground space-y-2">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <Link to="/advertising-in-sri-lanka" className="hover:text-foreground transition-colors">Advertising Sri Lanka</Link>
          <span className="text-border">|</span>
          <Link to="/social-media-management-sri-lanka" className="hover:text-foreground transition-colors">Social Media Marketing Sri Lanka</Link>
          <span className="text-border">|</span>
          <Link to="/google-ads-sri-lanka" className="hover:text-foreground transition-colors">Google Ads Sri Lanka</Link>
          <span className="text-border">|</span>
          <Link to="/tiktok-marketing-sri-lanka" className="hover:text-foreground transition-colors">TikTok Marketing Sri Lanka</Link>
          <span className="text-border">|</span>
          <Link to="/media-buying-agencies-sri-lanka" className="hover:text-foreground transition-colors">Media Buying Sri Lanka</Link>
        </div>
        <p>© 2022 Cypher Digital — <Link to="/" className="hover:text-foreground transition-colors">Digital Marketing Agency Sri Lanka</Link></p>
      </div>
    </div>
  </footer>
);

export default Footer;
