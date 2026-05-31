import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is the difference between SEO and AI visibility?","acceptedAnswer":{"@type":"Answer","text":"SEO is about ranking on Google's blue-link results. AI visibility is about being cited or recommended inside ChatGPT, Gemini, Perplexity and Google AI Overviews — a different and increasingly important channel."}},
    {"@type":"Question","name":"How long does it take to start showing up in ChatGPT answers?","acceptedAnswer":{"@type":"Answer","text":"Most businesses see initial citations within 3–6 months of consistent AEO work — faster for less competitive local niches in Sri Lanka."}}
  ]
};

const BlogPost145 = () => (
  <>
    <SEOHead
      title={"How Do I Get My Business to Show Up on ChatGPT Answers?"}
      description={"How to get your Sri Lankan business cited by ChatGPT, Gemini and Perplexity — AEO, structured content and AI visibility check. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/get-business-on-chatgpt-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "How Do I Get My Business to Show Up on ChatGPT Answers?" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">AI Visibility</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How Do I Get My Business to Show Up on ChatGPT Answers?</h1>
            <p className="text-base text-muted-foreground leading-relaxed">Something new is happening in how people find businesses in Sri Lanka. Alongside Google, a growing number of people are opening ChatGPT, Gemini or Perplexity and asking: "What is the best digital marketing agency in Colombo?" or "Which aesthetic clinic in Sri Lanka has the best reviews?" Most owners do not yet realise their business is invisible to these tools.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why AI visibility is the new SEO</h2>
            <p>ChatGPT has over 100 million active users. Perplexity is growing rapidly as a Google alternative. Google itself has rolled out AI Overviews above traditional results. People are getting answers from AI without clicking through to websites — and those answers recommend specific businesses. The ones that appear are gaining customers; the ones that do not are invisible. This shift is called Answer Engine Optimisation (AEO).</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How does ChatGPT decide which businesses to recommend?</h2>
            <p>Large language models learn from text across the web. A business is more likely to be cited when it is discussed across multiple reputable sites, has clear structured info about what it does, has been mentioned in news and industry publications, appears frequently in topic-relevant context and uses structured data (schema markup) on its website. Run a free <Link to="/ai-visibility-sri-lanka" className="text-primary font-semibold hover:underline">AI visibility check in Sri Lanka</Link> to see exactly how your brand appears across ChatGPT, Gemini and Perplexity today.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">What you can do this month</h2>
            <p>1) Publish detailed answer-style content on your own website (FAQ pages, comparison articles, definitive guides). 2) Add FAQPage and Organization schema to every key page. 3) Get listed in Sri Lankan business directories and industry publications. 4) Pitch guest articles to local news sites and blogs. 5) Encourage Google reviews — AI models heavily weight review consensus.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why this matters for Sri Lankan SMEs specifically</h2>
            <p>Sri Lanka's market is small enough that being mentioned consistently in even 10–20 high-quality sources is often enough to be cited by ChatGPT for category queries. The window is open right now because most local competitors are not yet investing in AEO. By the time they do, the businesses that started early will be the default AI recommendation.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">What is the difference between SEO and AI visibility?</h3>
            <p>SEO is about ranking on Google's blue-link results. AI visibility is about being cited or recommended inside ChatGPT, Gemini, Perplexity and Google AI Overviews — a different and increasingly important channel.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">How long does it take to start showing up in ChatGPT answers?</h3>
            <p>Most businesses see initial citations within 3–6 months of consistent AEO work — faster for less competitive local niches in Sri Lanka.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/ai-visibility-sri-lanka" className="text-primary font-semibold hover:underline">AI visibility check in Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/ai-visibility-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">AI Visibility Check Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Free check of your brand inside ChatGPT, Gemini & Perplexity.</p>
              </Link>
              <Link to="/seo-services-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">SEO Services Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Traditional SEO + AEO combined.</p>
              </Link>
              <Link to="/google-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Google Ads Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Reach people who still search Google.</p>
              </Link>
              <Link to="/blog/local-seo-strategies-sri-lankan-businesses" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Local SEO Strategies</h3>
                <p className="text-xs text-muted-foreground">Foundation for AI visibility.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost145;
