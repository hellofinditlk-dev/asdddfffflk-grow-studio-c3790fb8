import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How much does a professional logo cost in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"Quality logo design in Sri Lanka starts from LKR 6,000 for simple marks and goes up to LKR 25,000+ for full identity packages with multiple rounds and brand guidelines."}},
    {"@type":"Question","name":"Do I need a website if I already have a Facebook page?","acceptedAnswer":{"@type":"Answer","text":"Yes — a website signals you are a real, established business and lets you control SEO, content and customer experience without depending on a single platform."}}
  ]
};

const BlogPost144 = () => (
  <>
    <SEOHead
      title={"How to Make My Business Look More Professional Online in Sri Lanka"}
      description={"Make your business look more professional online in Sri Lanka — logo, profiles, website and content design tips that build trust. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/make-business-look-professional-online-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How to Make My Business Look More Professional Online in Sri" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Branding</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How to Make My Business Look More Professional Online in Sri Lanka</h1>
            <p className="text-base text-muted-foreground leading-relaxed">In Sri Lanka's increasingly digital market, the way your business looks online directly affects whether potential customers trust you enough to make contact. Before someone calls, messages on WhatsApp or walks in, they have already judged your business by your Facebook page, your logo and your posts.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">The 5 areas that define your business's online appearance</h2>
            <p>1) Your logo — the foundation of your visual identity. A blurry or clip-art logo undermines everything else. Professional <Link to="/graphic-design-sri-lanka" className="text-primary font-semibold hover:underline">graphic design Sri Lanka</Link> studios offer logo design from LKR 6,000–25,000 depending on rounds and deliverables. 2) Your Facebook and Instagram profiles — high-resolution logo as profile photo, branded cover, complete About section, clear CTA button. 3) Your website — fast, mobile-optimised, professionally designed with clear navigation. 4) Your content design — consistent colours, fonts and templates across every post. 5) Your photography — real, well-lit photos of your product, team and premises beat stock images every time.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why brand consistency matters</h2>
            <p>Customers remember businesses where colours, fonts and tone are consistent across every touchpoint. When your Facebook posts, website, business card and WhatsApp profile all look like they belong to the same brand, you appear bigger, more established and more trustworthy — even if you are a 3-person team.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How much does professional brand design cost in Sri Lanka?</h2>
            <p>Logo from LKR 6,000. Full brand identity (logo + colour system + typography + business card + letterhead) from LKR 25,000–80,000. Social media template pack from LKR 15,000–35,000. A simple website from LKR 60,000–150,000. These are one-time investments that pay back over years.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Where to start if you are on a budget</h2>
            <p>Start with logo, social media profile assets (cover + post template) and a one-page website. Once those are professional and consistent, expand into custom photography and a full website. Trying to do everything at once is how SMEs burn budget without seeing improvement.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">How much does a professional logo cost in Sri Lanka?</h3>
            <p>Quality logo design in Sri Lanka starts from LKR 6,000 for simple marks and goes up to LKR 25,000+ for full identity packages with multiple rounds and brand guidelines.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">Do I need a website if I already have a Facebook page?</h3>
            <p>Yes — a website signals you are a real, established business and lets you control SEO, content and customer experience without depending on a single platform.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/graphic-design-sri-lanka" className="text-primary font-semibold hover:underline">graphic design Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/graphic-design-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Graphic Design Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Logo, brand identity and social media design.</p>
              </Link>
              <Link to="/logo-design-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Logo Design Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Professional logos from LKR 6,000.</p>
              </Link>
              <Link to="/social-media-design-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Social Media Design</h3>
                <p className="text-xs text-muted-foreground">Branded post and cover templates.</p>
              </Link>
              <Link to="/social-media-management-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Social Media Management</h3>
                <p className="text-xs text-muted-foreground">Consistent posting on top of great design.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost144;
