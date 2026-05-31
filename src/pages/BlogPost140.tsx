import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How long does Google Ads take to show results in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"Ads can be live within 24–48 hours and the first leads typically arrive within the first week."}},
    {"@type":"Question","name":"Can I do Google Ads and SEO at the same time?","acceptedAnswer":{"@type":"Answer","text":"Yes — they complement each other. Ads give immediate flow while SEO builds long-term organic visibility."}}
  ]
};

const BlogPost140 = () => (
  <>
    <SEOHead
      title={"How to Get Your Business to Show Up on Google Search in Sri Lanka"}
      description={"How to show up on Google search in Sri Lanka with Google Ads and SEO — costs, timelines and which to choose first. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/show-up-google-search-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How to Get Your Business to Show Up on Google Search in Sri " }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Search Marketing</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How to Get Your Business to Show Up on Google Search in Sri Lanka</h1>
            <p className="text-base text-muted-foreground leading-relaxed">If someone in Colombo types "best dentist near me" or "interior designer in Sri Lanka" into Google and your business does not appear, you are invisible to one of the most valuable customer types — someone actively searching for exactly what you offer right now. There are two ways to fix that.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why Google search visibility matters</h2>
            <p>Over 82% of Sri Lankan consumers research online before making a purchase. Even when someone hears about you through word of mouth, they will verify you exist by searching Google. If you do not show up, a competitor who does will get the customer.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Method 1 — Google Ads (paid search)</h2>
            <p><Link to="/google-ads-sri-lanka" className="text-primary font-semibold hover:underline">Google Ads Sri Lanka</Link> lets you pay to appear at the very top of search results within 24–48 hours. You only pay per click (PPC). Cost per click in Sri Lanka ranges from LKR 15 for low-competition niches to LKR 300+ for insurance, real estate and medical services. Best when you need leads fast and customers actively search for your service.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Method 2 — SEO (organic search)</h2>
            <p><Link to="/seo-services-sri-lanka" className="text-primary font-semibold hover:underline">SEO services Sri Lanka</Link> work on ranking your website organically. Slower (3–6 months for visible results, 6–12 for competitive niches) but free traffic once you rank. Best for long-term compounding growth, blogs, content-heavy industries and businesses with thin ad budgets.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Which should you start with?</h2>
            <p>If you need leads this month, start with Google Ads. If you want a long-term traffic asset, start SEO immediately. Most successful Sri Lankan businesses run both — Google Ads for immediate flow, SEO for compounding visibility over 12–24 months.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">How long does Google Ads take to show results in Sri Lanka?</h3>
            <p>Ads can be live within 24–48 hours and the first leads typically arrive within the first week.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">Can I do Google Ads and SEO at the same time?</h3>
            <p>Yes — they complement each other. Ads give immediate flow while SEO builds long-term organic visibility.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/google-ads-sri-lanka" className="text-primary font-semibold hover:underline">Google Ads Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/google-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Google Ads Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Search, Display and YouTube campaign management.</p>
              </Link>
              <Link to="/seo-services-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">SEO Services Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Rank #1 for the keywords your customers search.</p>
              </Link>
              <Link to="/ai-visibility-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">AI Visibility Check Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Be found in ChatGPT, Gemini and Perplexity answers.</p>
              </Link>
              <Link to="/blog/google-ads-vs-facebook-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Google Ads vs Facebook Ads</h3>
                <p className="text-xs text-muted-foreground">Compare both channels for your business.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost140;
