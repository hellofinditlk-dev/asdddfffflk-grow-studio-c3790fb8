import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const BlogPost151 = () => (
  <>
    <SEOHead
      title="Video Ads on Facebook & Google in Sri Lanka: The Complete Guide"
      description="How to use video ads on Facebook and Google in Sri Lanka — formats, hooks, budgets, CPMs and what makes a high-converting video ad. Cypher Digital."
      canonical="https://cypherdigital.lk/blog/video-ads-facebook-google-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Video Ads Sri Lanka" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Video Ads</span>
              <time className="text-xs text-muted-foreground">June 2, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How to Use Video Ads on Facebook and Google to Grow Your Business in Sri Lanka</h1>
            <p className="text-base text-muted-foreground leading-relaxed">Video ads are the highest-performing ad format on Facebook and Google in Sri Lanka right now. But most businesses are still running static image ads — and wondering why their cost-per-lead keeps going up.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why Video Ads Outperform Image Ads in Sri Lanka</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>20–30% lower cost-per-click than image ads on Facebook</li>
              <li>YouTube pre-roll has the highest recall rate of any digital ad format</li>
              <li>Facebook video ads generate 6x more engagement than link ads</li>
              <li>Google Performance Max (video-prioritised) delivers better ROAS than Search-only for most local businesses</li>
            </ul>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">What Makes a High-Performing Video Ad</h2>
            <p><strong>Hook in 3 seconds.</strong> Bold statement, surprising visual or direct question. No slow intros.</p>
            <p><strong>Clear offer by 8 seconds.</strong> "Free consultation," "Free delivery to Colombo," "Limited spots."</p>
            <p><strong>Subtitles always.</strong> 80%+ of Facebook videos in Sri Lanka are watched on mute.</p>
            <p><strong>Local language.</strong> Sinhala or bilingual ads consistently outperform English-only outside Colombo.</p>
            <p><strong>Strong CTA.</strong> One clear action — WhatsApp, website or call.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Video Ad Formats by Platform</h2>
            <p><strong>Facebook & Instagram:</strong> Reels (9:16, 15–30s), in-feed (4:5 or 1:1, 30–60s), Story (9:16, 15s).</p>
            <p><strong>Google & YouTube:</strong> Skippable in-stream (30s+), bumper ads (6s), YouTube Shorts ads.</p>
            <p><strong>TikTok:</strong> in-feed (9:16, 15–60s), TopView premium placement.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How Much Do Video Ads Cost in Sri Lanka?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Facebook / Instagram: from LKR 500/day, CPM LKR 200–500</li>
              <li>YouTube: from LKR 1,000/day, CPM LKR 300–700</li>
              <li>TikTok: from LKR 1,500/day, CPM LKR 250–600</li>
            </ul>
            <p>A well-produced creative runs cheaper and converts better. Poor creative wastes spend.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Getting Your Video Ads Produced</h2>
            <p>The barrier isn't ad budget — it's producing creative that converts. This is where professional <Link to="/ai-video-production-sri-lanka" className="text-primary font-semibold hover:underline">AI video production in Sri Lanka</Link> makes a real difference. Cypher Digital produces ad-ready creatives — scripted for conversion, formatted per platform, delivered in 48 hours. Our <Link to="/ai-video-production-sri-lanka" className="text-primary font-semibold hover:underline">AI video production Sri Lanka</Link> packages include Facebook-ready and YouTube-ready exports as standard. Pair with our <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook Ads Sri Lanka</Link> or <Link to="/google-ads-sri-lanka" className="text-primary font-semibold hover:underline">Google Ads Sri Lanka</Link> service for end-to-end campaigns.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Plan Your First Video Ad Campaign</h3>
              <p className="text-sm mb-4">WhatsApp +94 70 177 2626 — we'll script, produce and launch.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost151;