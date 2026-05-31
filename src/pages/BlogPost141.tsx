import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How long does SEO take to rank on Google in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"Expect 3–6 months for visible movement and 6–12 months for first-page rankings on competitive keywords."}},
    {"@type":"Question","name":"Is SEO worth it for a small business in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"Yes, especially for local services where ranking for 'service + city' keywords brings in qualified leads at near-zero ongoing cost."}}
  ]
};

const BlogPost141 = () => (
  <>
    <SEOHead
      title={"How to Rank Your Business Website on Google in Sri Lanka"}
      description={"How to rank your website on Google in Sri Lanka — on-page, technical, content and link building strategies that actually work. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/rank-website-google-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How to Rank Your Business Website on Google in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">SEO</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How to Rank Your Business Website on Google in Sri Lanka</h1>
            <p className="text-base text-muted-foreground leading-relaxed">Ranking on the first page of Google in Sri Lanka is one of the most powerful long-term growth moves a business can make. Unlike paid ads that stop the moment you stop spending, SEO delivers free, consistent traffic month after month. But it is also one of the most misunderstood services — many owners have paid for SEO and seen nothing back.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">What ranking on Google actually means</h2>
            <p>The first result on Google gets around 30% of all clicks, the second around 15% and by page two almost no one is clicking. If you are not on page one, you are effectively invisible. SEO is the process of making your site more likely to rank at the top for searches your customers are already doing.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">The 4 pillars of SEO for Sri Lankan businesses</h2>
            <p>On-page SEO (title tags, headings, keyword placement, page speed, mobile optimisation), off-page SEO (backlinks from reputable Sri Lankan directories, news sites and blogs), technical SEO (clean site architecture, schema markup, HTTPS, no broken links) and content (consistent, helpful, keyword-focused articles that answer real customer questions). Professional <Link to="/seo-services-sri-lanka" className="text-primary font-semibold hover:underline">SEO services Sri Lanka</Link> work all four pillars together — anyone who only focuses on one is selling you half a service.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How long does SEO take in Sri Lanka?</h2>
            <p>First measurable lift in 3–4 months. First-page rankings for low-competition local keywords in 4–6 months. Page-one rankings for competitive national keywords in 6–12+ months. Anyone promising you page one in 30 days is misleading you.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Realistic budget for SEO in Sri Lanka</h2>
            <p>LKR 25,000–50,000/month for local-only campaigns (a salon in Nugegoda, a clinic in Kandy). LKR 50,000–120,000/month for national keyword targeting. LKR 120,000+/month for highly competitive niches like real estate, finance and education.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">How long does SEO take to rank on Google in Sri Lanka?</h3>
            <p>Expect 3–6 months for visible movement and 6–12 months for first-page rankings on competitive keywords.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">Is SEO worth it for a small business in Sri Lanka?</h3>
            <p>Yes, especially for local services where ranking for 'service + city' keywords brings in qualified leads at near-zero ongoing cost.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/seo-services-sri-lanka" className="text-primary font-semibold hover:underline">SEO services Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/seo-services-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">SEO Services Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Full-service SEO that delivers ranking and traffic.</p>
              </Link>
              <Link to="/google-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Google Ads Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Pair SEO with paid search for full coverage.</p>
              </Link>
              <Link to="/ai-visibility-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">AI Visibility Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Get cited by ChatGPT, Gemini and Perplexity.</p>
              </Link>
              <Link to="/blog/local-seo-strategies-sri-lankan-businesses" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Local SEO Strategies</h3>
                <p className="text-xs text-muted-foreground">Rank in your city's Google Map Pack.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost141;
