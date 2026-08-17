import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const BlogPost153 = () => (
  <>
    <SEOHead
      title="How Much Does Video Production Cost in Sri Lanka? (2026 Price Guide)"
      description="A clear 2026 breakdown of video production costs in Sri Lanka — from social reels to TV commercials — and how AI production is changing the numbers."
      canonical="https://cypherdigital.lk/blog/video-production-cost-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Video Production Cost Sri Lanka 2026" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <div className="flex gap-2 mb-3 items-center">
              <span className="bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Pricing</span>
              <time className="text-xs text-muted-foreground">August 17, 2026</time>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4 leading-tight">How Much Does Video Production Cost in Sri Lanka? (2026 Price Guide)</h1>
            <p className="text-base text-muted-foreground leading-relaxed">If you've ever asked a production house for a quote in Sri Lanka, you already know the answer starts with "it depends." That's true — but it's not very helpful when you're planning a marketing budget. This guide gives you real 2026 price ranges for the most common types of business video, and explains why those numbers vary so widely.</p>
          </header>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">What actually drives the price of a video</h2>
            <p>Three things move the cost of any video project more than anything else: how much is filmed on location, how many people are involved, and how long post-production takes.</p>
            <p>A shoot with a camera crew, a location, lighting and on-screen talent carries fixed costs before a single second is edited. Add a scriptwriter, a director and a colourist, and you're paying several day rates. This is why a "simple" 60-second brand film from a traditional studio can land anywhere between LKR 80,000 and several hundred thousand rupees.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Typical 2026 price ranges in Sri Lanka</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Short social reels (15–30s):</strong> LKR 15,000–40,000 each, depending on whether footage is filmed or assembled from existing assets.</li>
              <li><strong>Brand or promotional videos (60–90s):</strong> LKR 50,000–250,000, driven mostly by shoot days and animation.</li>
              <li><strong>Product showcase videos:</strong> LKR 30,000–120,000.</li>
              <li><strong>TV commercials (TVCs):</strong> LKR 250,000 upwards, before media airtime.</li>
            </ul>
            <p>The wide bands exist because the same brief can be produced two very different ways.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Where AI production changes the maths</h2>
            <p>The biggest shift in the last two years is that scripting, voiceover, visuals and rough editing can now be produced with AI tools and then refined by a human editor. That removes most of the fixed shoot-day cost, which is exactly where traditional budgets balloon.</p>
            <p>This is why <Link to="/ai-video-production-sri-lanka" className="text-primary font-semibold hover:underline">AI Video Production in Sri Lanka</Link> has pushed entry pricing down to around LKR 18,000 for a finished social reel — roughly a quarter of what a comparable filmed piece would cost — while keeping turnaround to about 48 hours. It doesn't replace on-location filming for every job, but for social content, explainers and ad creatives, it changes the budgeting conversation entirely.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">How to budget sensibly</h2>
            <p>Decide what the video needs to <em>do</em> before you decide what to spend. A top-of-funnel reel meant to be swapped out every few weeks doesn't need a filmed shoot — it needs volume and speed. A flagship brand film that lives on your homepage for two years justifies a bigger one-time investment.</p>
            <p>Match the production method to the job, and you'll usually spend less while getting more usable content. If you're running paid campaigns, pair your video budget with your <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook advertising</Link> spend so creative and media work together.</p>

            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Get a Free Video Quote</h3>
              <p className="text-sm mb-4">WhatsApp +94 70 177 2626 and we'll price your project honestly — filmed, AI-assisted or both.</p>
              <a href="https://wa.me/94701772626" className="inline-block bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-md hover:opacity-90">Message us on WhatsApp →</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default BlogPost153;
