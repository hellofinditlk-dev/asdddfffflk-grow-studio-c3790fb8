import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Do I need a professional videographer or can I shoot videos on my phone?","acceptedAnswer":{"@type":"Answer","text":"For social Reels and TikTok, a good phone with proper lighting is fine. For brand videos, ads and testimonials that represent your business, professional production is worth the investment."}},
    {"@type":"Question","name":"How long should a Facebook or Instagram video ad be?","acceptedAnswer":{"@type":"Answer","text":"15–30 seconds for cold audiences with the hook in the first 3 seconds; up to 60 seconds for retargeting where viewers are already familiar with your brand."}}
  ]
};

const BlogPost142 = () => (
  <>
    <SEOHead
      title={"What Kind of Video Should I Make to Promote My Business in Sri Lanka?"}
      description={"The 5 types of business videos in Sri Lanka — brand, promo, testimonial, product and educational. What to make, when and what it costs. Cypher Digital."}
      canonical="https://cypherdigital.lk/blog/what-video-to-promote-business-sri-lanka"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "What Kind of Video Should I Make to Promote My Business in S" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Video</span>
              <time className="text-xs text-muted-foreground">May 31, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">What Kind of Video Should I Make to Promote My Business in Sri Lanka?</h1>
            <p className="text-base text-muted-foreground leading-relaxed">Video is the highest-performing content type on every major platform right now — Facebook, Instagram, TikTok, YouTube and even Google. Sri Lankan businesses that invest in video consistently see higher engagement and better ad performance than those relying on photos and text alone.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why video works so well for Sri Lankan businesses</h2>
            <p>Video ads on Facebook generate significantly more leads than image ads at the same budget. Instagram Reels and TikTok get far more organic reach than static posts. A video on your landing page increases conversion rates by up to 80%. Beyond the numbers, video builds trust quickly — 60 seconds of your team at work conveys more credibility than any written description.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">The 5 types of business videos and when to use each</h2>
            <p>1) Brand Video (60–90 seconds telling your story — for established businesses building credibility), 2) Promotional Video / Ad Creative (15–45 seconds with a strong hook — for any business running paid ads), 3) Testimonial Video (real customers on camera — for high-trust services like clinics, finance and legal), 4) Product Demo (showing how your product works — for e-commerce and physical products), 5) Educational / How-To (giving free value — for service businesses building authority on social and YouTube).</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How much does video production cost in Sri Lanka?</h2>
            <p>Reels and short-form social content from LKR 25,000–60,000 per shoot day. Brand videos from LKR 80,000–250,000 depending on scripting, locations and post-production. Full TV-quality productions LKR 300,000+. Professional <Link to="/video-production-sri-lanka" className="text-primary font-semibold hover:underline">video production Sri Lanka</Link> teams will quote based on shoot days, locations and edit complexity.</p>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Where should you start?</h2>
            <p>If you have never produced video, start with one branded promotional video (45 seconds) plus 4–6 vertical Reels cut from the same shoot day. That gives you 4–6 months of content from a single production day.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-10">Frequently Asked Questions</h2>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">Do I need a professional videographer or can I shoot videos on my phone?</h3>
            <p>For social Reels and TikTok, a good phone with proper lighting is fine. For brand videos, ads and testimonials that represent your business, professional production is worth the investment.</p>
            <h3 className="font-heading text-base font-bold text-foreground mt-6">How long should a Facebook or Instagram video ad be?</h3>
            <p>15–30 seconds for cold audiences with the hook in the first 3 seconds; up to 60 seconds for retargeting where viewers are already familiar with your brand.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Talk to Cypher Digital</h3>
              <p className="text-sm mb-4">Get expert help with <Link to="/video-production-sri-lanka" className="text-primary font-semibold hover:underline">video production Sri Lanka</Link> from one of Colombo's most-trusted digital marketing agencies. Free strategy call on WhatsApp.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/video-production-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Video Production Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Brand videos, ads, Reels and corporate productions.</p>
              </Link>
              <Link to="/facebook-ads-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Facebook Ads Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Run your videos as paid ads that convert.</p>
              </Link>
              <Link to="/tiktok-marketing-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">TikTok Marketing Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Short-form video for Sri Lanka's fastest-growing platform.</p>
              </Link>
              <Link to="/instagram-marketing-sri-lanka" className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">Instagram Marketing Sri Lanka</h3>
                <p className="text-xs text-muted-foreground">Reels are the #1 driver of organic reach.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost142;
