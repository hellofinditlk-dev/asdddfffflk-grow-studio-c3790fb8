import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const BlogPost102 = () => (
  <>
    <SEOHead
      title="Social Media Marketing Packages in Sri Lanka — 2026 Pricing Guide"
      description="Social media marketing packages in Sri Lanka from LKR 35,000/month. Facebook, Instagram & TikTok management with content, ads and monthly reporting."
      canonical="https://cypherdigital.lk/blog/social-media-marketing-packages"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Article" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <time className="text-xs text-muted-foreground">May 23, 2026</time>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-3 mb-4">Social media marketing packages in Sri Lanka — 2026 pricing guide</h1>
          </header>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <p>With over 5 million daily Facebook users and a fast-growing TikTok base, <strong className="text-foreground">social media marketing in Sri Lanka</strong> is no longer optional for consumer-facing brands. The question for most businesses is not whether to invest, but which package size makes sense and what should be included.</p>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">Platforms worth managing in Sri Lanka</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Facebook:</strong> still Sri Lanka's largest social platform — page management, content, ads and community</li>
              <li><strong className="text-foreground">Instagram:</strong> visual content, Reels, Stories and Shopping for consumer brands</li>
              <li><strong className="text-foreground">TikTok:</strong> fastest-growing platform in Sri Lanka for under-35 audiences</li>
              <li><strong className="text-foreground">LinkedIn:</strong> B2B lead generation for professional services</li>
              <li><strong className="text-foreground">YouTube:</strong> long-form content and YouTube Ads for storytelling</li>
            </ul>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">Transparent social media packages — Sri Lanka pricing</h2>
            <p><strong className="text-foreground">Starter — LKR 35,000/month.</strong> 1 platform (Facebook or Instagram), 12 posts/month, custom graphic design, English captions, scheduling, monthly analytics. No paid ads or video.</p>
            <p><strong className="text-foreground">Growth — LKR 65,000/month.</strong> Facebook + Instagram, 20 posts/month, bilingual captions (English + Sinhala), community management, 4 Reels per month, and <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook Ads</Link> management up to LKR 30K ad spend. Most popular package.</p>
            <p><strong className="text-foreground">Pro — LKR 120,000/month.</strong> Facebook + Instagram + TikTok, 30 posts/month, premium design and video, 8 Reels/TikTok videos, full ads management, weekly reports.</p>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">What every package should include</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Content creation</strong> — original graphics and video, not stock</li>
              <li><strong className="text-foreground">Content calendar</strong> — monthly plan aligned to your campaigns and Sri Lankan seasons</li>
              <li><strong className="text-foreground">Community management</strong> — replies to comments and DMs</li>
              <li><strong className="text-foreground">Monthly reporting</strong> — reach, engagement, follower growth, next steps</li>
              <li><strong className="text-foreground">Localised content</strong> — English and Sinhala with cultural relevance</li>
              <li><strong className="text-foreground">Paid advertising</strong> — Meta ads that generate real leads (Growth and Pro)</li>
            </ul>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">FAQs</h2>
            <p><strong className="text-foreground">How much does social media management cost in Sri Lanka?</strong> Between LKR 35,000 and LKR 120,000 per month depending on platforms, post volume and whether ads are included. Ad spend is separate.</p>
            <p><strong className="text-foreground">Is there a minimum contract?</strong> We recommend 3 months to see meaningful results, but month-to-month is fine — no lock-ins.</p>
            <p><strong className="text-foreground">Do you create Sinhala content?</strong> Yes — Growth and Pro packages include bilingual content written by native Sinhala writers.</p>

            <p>For a deeper look at delivery and case studies, see our <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">social media management in Sri Lanka</Link> service page. To weigh organic vs paid effort, read <Link to="/blog/organic-social-media-vs-paid-ads-sri-lanka" className="text-primary hover:underline">organic social media vs paid ads</Link>. Pure focus on Instagram? See our guide on <Link to="/blog/instagram-marketing-sri-lanka" className="text-primary hover:underline">Instagram marketing in Sri Lanka</Link>.</p>
          </div>
        </div>
      </div>
    </article>
  </>
);
export default BlogPost102;