import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Are Facebook ads still effective in Sri Lanka in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. With 8.5 million users, Facebook ads remain the most cost-effective paid channel for most Sri Lankan SMEs — especially for lead generation, local services and e-commerce."}},
    {"@type":"Question","name":"What is the minimum budget for Facebook ads in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"You can start with LKR 10,000–15,000 per month for testing, but expect to scale to LKR 20,000+ once you have winning creative and audiences."}}
  ]
};

const BlogPost139 = () => (
  <>
    <SEOHead
      title={"How to Get More Customers Using Facebook Ads in Sri Lanka"}
      description={"Get more customers with Facebook Ads in Sri Lanka — budgets, campaign types, targeting and how to avoid the boost-post trap. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/get-more-customers-facebook-ads-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How to Get More Customers Using Facebook Ads in Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Facebook Ads</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How to Get More Customers Using Facebook Ads in Sri Lanka</h1>
            <p className="text-base text-muted-foreground leading-relaxed">Facebook advertising is one of the fastest ways a small or medium business in Sri Lanka can generate real, measurable leads — but only when done right. Many owners have boosted a post, spent a few thousand rupees and walked away with nothing. That is not how Facebook ads actually work.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why Facebook Ads work in Sri Lanka</h2>
            <p>Sri Lanka has over 8.5 million active Facebook users. Whether your customers are homebuyers in Colombo, parents looking for a tuition class in Kandy or patients searching for a clinic in Nugegoda — they are all on Facebook daily. Properly managed <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook ads Sri Lanka</Link> let you show your ad only to the exact type of person most likely to buy from you.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Boosting a post vs running a real campaign</h2>
            <p>Boosted posts are optimised for likes and reach, not customers. A proper campaign through Ads Manager lets you set Lead Generation or Conversions as the objective, build custom audiences, test multiple creatives, track exact cost per lead and retarget website visitors. The difference in results is typically 5–10x for the same budget.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How much should you spend on Facebook ads in Sri Lanka?</h2>
            <p>LKR 10,000–20,000/month is a testing budget. LKR 20,000–50,000/month gives consistent lead flow for most SMEs. LKR 50,000–150,000/month is scaling territory with lower cost per acquisition. Above LKR 150,000/month is for established businesses ready to grow aggressively.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Targeting that works for Sri Lankan businesses</h2>
            <p>Location targeting down to Colombo 3–7 or specific cities like Kandy, Galle and Negombo. Interest targeting layered with demographics (age, gender, household income proxies). Custom audiences from your existing customer list, website visitors and page engagers. Lookalike audiences once you have at least 200 customers to seed.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">Are Facebook ads still effective in Sri Lanka in 2026?</h3>
            <p>Yes. With 8.5 million users, Facebook ads remain the most cost-effective paid channel for most Sri Lankan SMEs — especially for lead generation, local services and e-commerce.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">What is the minimum budget for Facebook ads in Sri Lanka?</h3>
            <p>You can start with LKR 10,000–15,000 per month for testing, but expect to scale to LKR 20,000+ once you have winning creative and audiences.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook ads Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/facebook-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Facebook Ads Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Managed campaigns that bring measurable leads.</p>
              </Link>
              <Link to="/social-media-management-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Social Media Management Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Pair ads with consistent page content.</p>
              </Link>
              <Link to="/instagram-marketing-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Instagram Marketing Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Extend campaigns to Instagram for free.</p>
              </Link>
              <Link to="/blog/google-ads-vs-facebook-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Google Ads vs Facebook Ads</h3>
                <p className="text-xs text-muted-foreground">Which channel converts better?</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost139;
