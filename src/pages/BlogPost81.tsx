import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const BlogPost81 = () => (
  <>
    <SEOHead
      title="Online Advertising in Sri Lanka — Complete Platform Guide (2026) | Cypher Digital"
      description="Complete guide to online advertising in Sri Lanka — Facebook, Google, TikTok, YouTube, display ads, and SEO. Platforms, costs, targeting, and which one is right for your business."
      canonical="https://cypherdigital.lk/blog/online-advertising-sri-lanka-platform-guide"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Online Advertising Platform Guide" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <time className="text-xs text-muted-foreground">May 7, 2026</time>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-3 mb-4">Online Advertising in Sri Lanka — Complete Platform Guide for Businesses (2026)</h1>
          </header>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <p>Online advertising has transformed how Sri Lankan businesses reach customers. With over 11 million internet users and 8 million social media users, the digital audience is large and growing. This guide covers every major platform — see also our <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">complete guide to advertising in Sri Lanka</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Why Online Advertising Works in Sri Lanka</h2>
            <p>Consumers spend 2.5–3 hours/day on social media. Mobile is 85%+ of all traffic. Key advantages: precise targeting, real-time measurement, flexible budgets, fast results, and continuous optimisation.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Facebook Advertising</h2>
            <p><strong className="text-foreground">Audience:</strong> ~7M. <strong className="text-foreground">Best for:</strong> B2C, lead gen, brand awareness, retargeting. Formats include image, video, carousel, lead and story ads. CPC LKR 8–35; CPL LKR 150–600. Min budget LKR 15K/month. See <Link to="/facebook-ads-sri-lanka" className="text-primary underline">Facebook Ads Sri Lanka</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Instagram Advertising</h2>
            <p><strong className="text-foreground">Audience:</strong> ~2M+. <strong className="text-foreground">Best for:</strong> fashion, food, beauty, hospitality. Formats: Feed, Reels, Stories, Shopping. Use Instagram when targeting 18–35 with visually compelling products.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Google Search Advertising</h2>
            <p><strong className="text-foreground">Audience:</strong> 11–12M. <strong className="text-foreground">Best for:</strong> service businesses with high-intent searchers — real estate, education, legal, medical, home services. CPC LKR 25–400 depending on competition. See <Link to="/google-ads-sri-lanka" className="text-primary underline">Google Ads Sri Lanka</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. YouTube Advertising</h2>
            <p><strong className="text-foreground">Audience:</strong> 6M+. <strong className="text-foreground">Best for:</strong> awareness, product launches, retargeting. Formats: skippable in-stream, non-skippable, bumper, discovery. CPV LKR 5–20; CPM LKR 150–400. Pair with quality <Link to="/video-production-sri-lanka" className="text-primary underline">video production</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. TikTok Advertising</h2>
            <p>Fastest-growing platform; lower competition means cheaper reach. CPC LKR 10–40, CPM LKR 60–180. Min ~LKR 1,800/day. Best for 15–35 consumer brands — see <Link to="/tiktok-marketing-sri-lanka" className="text-primary underline">TikTok marketing</Link>.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Google Display</h2>
            <p>Banner ads across Google's network. Best for retargeting and brand awareness. CPM LKR 20–80, CPC LKR 10–40.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. WhatsApp Business Marketing</h2>
            <p>Click-to-WhatsApp ads from Facebook/Instagram drive direct conversations. Powerful for high-consideration purchases — real estate, education, vehicles, and services.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Choosing the Right Platform</h2>
            <p>Restaurants → Facebook + Instagram + TikTok. Real estate → Google + Facebook. Education → Google + Facebook. Ecommerce → Facebook + Instagram + Google Shopping. Hotels → Instagram + YouTube + Google. Fashion → Instagram + TikTok. Healthcare → Google + Facebook.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Multi-Platform Funnel Strategy</h2>
            <p><strong className="text-foreground">Awareness:</strong> TikTok + YouTube. <strong className="text-foreground">Consideration:</strong> Facebook + Instagram. <strong className="text-foreground">Conversion:</strong> Google Search. <strong className="text-foreground">Retention:</strong> Facebook retargeting + WhatsApp.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Get Started</h2>
            <p>Cypher Digital manages campaigns across Facebook, Instagram, Google, TikTok, and YouTube for Sri Lankan SMEs. <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20online%20advertising%20consultation" className="text-primary font-semibold hover:underline">📞 Free consultation on WhatsApp →</a> or visit our <Link to="/contact" className="text-primary underline">contact page</Link>.</p>
          </div>
          <div className="mt-10 text-center"><Link to="/blog" className="text-primary font-semibold underline">← Back to Blog</Link></div>
  <p className="mt-8 text-sm text-muted-foreground">To understand how automated ad buying works across the wider web, see <Link to="/blog/what-is-programmatic-advertising-sri-lanka" className="text-primary font-semibold hover:underline">what programmatic advertising is and how it works in Sri Lanka</Link>.</p>
        </div>
      </div>
    </article>
  </>
);
export default BlogPost81;
