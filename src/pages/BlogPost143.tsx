import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How often should my business post on TikTok in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"3–5 short vertical videos per week consistently for at least 90 days is the realistic minimum to see algorithm traction."}},
    {"@type":"Question","name":"Do TikTok Ads work in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"Yes — TikTok Ads now reach 5+ million Sri Lankan users with lower CPMs than Facebook for many categories, especially youth-oriented brands."}}
  ]
};

const BlogPost143 = () => (
  <>
    <SEOHead
      title={"Should My Business Be on TikTok in Sri Lanka?"}
      description={"Should your business be on TikTok in Sri Lanka? Honest guide to who it works for, who it doesn't and how to start. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/should-business-be-on-tiktok-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Should My Business Be on TikTok in Sri Lanka?" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">TikTok</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">Should My Business Be on TikTok in Sri Lanka?</h1>
            <p className="text-base text-muted-foreground leading-relaxed">Sri Lanka now has over 7.2 million TikTok users, making it one of the fastest-growing platforms in the country. But should your business be on it? The honest answer depends on your business type, your audience and whether you are willing to commit to a style of content that is very different from Facebook or Instagram.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why TikTok is growing so fast in Sri Lanka</h2>
            <p>TikTok's algorithm uniquely surfaces content to brand-new audiences — even accounts with zero followers can go viral overnight. It is mobile-native, which suits Sri Lanka's predominantly mobile internet user base. And the platform is no longer just for teens — a growing segment of users in Sri Lanka are 25–40 year-old working professionals, parents and decision-makers.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Who should be on TikTok in Sri Lanka</h2>
            <p>Restaurants and cafes (food is one of the highest-watched categories), beauty salons, clinics and spas (before/after transformations perform exceptionally), fashion and clothing brands (try-ons and styling), education and coaching (short value-packed tips), real estate (dynamic property tours), fitness and wellness. Professional <Link to="/tiktok-marketing-sri-lanka" className="text-primary font-semibold hover:underline">TikTok marketing Sri Lanka</Link> services can run both organic content and TikTok Ads for these industries.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Who might not need TikTok right now</h2>
            <p>B2B companies targeting corporate clients (LinkedIn and Google Ads usually deliver better ROI), industries with customers primarily aged 45+ (Facebook is stronger), highly regulated industries with strict content rules (legal, certain financial services) and businesses that cannot commit to publishing 3+ short videos per week consistently.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How to start on TikTok in Sri Lanka</h2>
            <p>Post 3–5 short videos per week in vertical 9:16 format. First 3 seconds decide whether the algorithm pushes the video. Use trending sounds. Show your real face, real location, real product — Sri Lankan TikTok rewards authenticity over polish. Expect 60–90 days to find your content rhythm.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">How often should my business post on TikTok in Sri Lanka?</h3>
            <p>3–5 short vertical videos per week consistently for at least 90 days is the realistic minimum to see algorithm traction.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">Do TikTok Ads work in Sri Lanka?</h3>
            <p>Yes — TikTok Ads now reach 5+ million Sri Lankan users with lower CPMs than Facebook for many categories, especially youth-oriented brands.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/tiktok-marketing-sri-lanka" className="text-primary font-semibold hover:underline">TikTok marketing Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/tiktok-marketing-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">TikTok Marketing Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Organic content plus paid TikTok Ads.</p>
              </Link>
              <Link to="/video-production-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Video Production Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Pro-quality short-form video shoots.</p>
              </Link>
              <Link to="/influencer-marketing-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Influencer Marketing Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Work with Sri Lankan TikTok creators.</p>
              </Link>
              <Link to="/blog/tiktok-ad-strategy-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">TikTok Ad Strategy</h3>
                <p className="text-xs text-muted-foreground">Step-by-step TikTok ad playbook.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost143;
