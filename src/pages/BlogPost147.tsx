import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Is LinkedIn worth it for B2B businesses in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"Yes — especially for professional services, software, recruitment and B2B education. LinkedIn delivers higher-quality B2B leads than Facebook in Sri Lanka, even though cost per click is higher."}},
    {"@type":"Question","name":"How much should I budget for LinkedIn Ads in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"Start with USD 300–600 per month for testing. Most Sri Lankan B2B brands scale to USD 1,000–3,000 per month once they have winning audiences and creative."}}
  ]
};

const BlogPost147 = () => (
  <>
    <SEOHead
      title={"How to Use LinkedIn to Get B2B Clients for Your Business in Sri Lanka"}
      description={"Use LinkedIn to get B2B clients in Sri Lanka — company page, content, outreach and LinkedIn Ads playbook for SMEs. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/linkedin-b2b-clients-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How to Use LinkedIn to Get B2B Clients for Your Business in " }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">LinkedIn</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How to Use LinkedIn to Get B2B Clients for Your Business in Sri Lanka</h1>
            <p className="text-base text-muted-foreground leading-relaxed">LinkedIn is the platform that most Sri Lankan businesses completely overlook — and that is exactly why the opportunity is so large right now. While everyone in Colombo competes for attention on Facebook and Instagram, LinkedIn remains relatively uncrowded in Sri Lanka's market. For B2B companies, it is the most direct path to decision-makers.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Who should be using LinkedIn in Sri Lanka</h2>
            <p>Professional services firms (accounting, legal, HR, consulting, IT), software and tech companies (especially exporting to the Middle East and Australia), recruitment and staffing agencies, training and corporate education providers, real estate developers targeting corporate investors, financial services (insurance, wealth, investment), marketing agencies like Cypher Digital, and export-focused businesses. If your customer is a company, manager, director or professional, <Link to="/linkedin-marketing-sri-lanka" className="text-primary font-semibold hover:underline">LinkedIn marketing Sri Lanka</Link> is where you should be investing.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">LinkedIn vs Facebook for B2B in Sri Lanka</h2>
            <p>LinkedIn audiences are in a professional, business-focused mindset. Targeting is by job title, industry, seniority and company size — far sharper than Facebook for B2B. Cost per click is higher, but lead quality is significantly better because the people coming through are actually decision-makers thinking about business problems.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Building a LinkedIn company page that attracts clients</h2>
            <p>Use your logo as profile image, a banner that clearly states what you do and who you serve, a 2-line tagline focused on outcomes (not your industry name), complete About section, regularly updated employee list and showcase pages for major service lines. Pin your best case study or service post to the top.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Content + outreach + ads — the 3-part playbook</h2>
            <p>1) Content: post 3 times per week — industry insight, case study, founder POV. 2) Outreach: founders and sales staff should send 5–10 personalised connection requests per day to ideal customer profiles. 3) Ads: run Sponsored Content campaigns targeting job titles + industries that match your ICP, plus retargeting against site visitors. Done together, this combination consistently delivers B2B leads in Sri Lanka at lower cost than cold email or trade shows.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">Is LinkedIn worth it for B2B businesses in Sri Lanka?</h3>
            <p>Yes — especially for professional services, software, recruitment and B2B education. LinkedIn delivers higher-quality B2B leads than Facebook in Sri Lanka, even though cost per click is higher.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">How much should I budget for LinkedIn Ads in Sri Lanka?</h3>
            <p>Start with USD 300–600 per month for testing. Most Sri Lankan B2B brands scale to USD 1,000–3,000 per month once they have winning audiences and creative.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/linkedin-marketing-sri-lanka" className="text-primary font-semibold hover:underline">LinkedIn marketing Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/linkedin-marketing-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">LinkedIn Marketing Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">B2B content, outreach and LinkedIn Ads.</p>
              </Link>
              <Link to="/google-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Google Ads Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Pair LinkedIn with high-intent Google search.</p>
              </Link>
              <Link to="/seo-services-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">SEO Services Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Rank for B2B service keywords.</p>
              </Link>
              <Link to="/blog/b2b-leads-linkedin-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">B2B Leads on LinkedIn</h3>
                <p className="text-xs text-muted-foreground">Step-by-step LinkedIn lead generation.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost147;
