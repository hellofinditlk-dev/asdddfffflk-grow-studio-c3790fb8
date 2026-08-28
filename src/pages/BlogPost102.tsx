import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import OurWorkSection from "@/components/OurWorkSection";

const packages = [
  {
    name: "Basic",
    price: "LKR 85,000",
    posts: "12 posts / month",
    desc: "Facebook & Instagram — small businesses building a professional presence.",
    features: [
      "12 social media posts (graphics + carousels)",
      "3 reel creations (stock footage, 45 sec)",
      "Special day post creation",
      "Facebook cover image design",
      "TikTok reels cross-posting",
      "Web ads publishing (Findit.lk / StudyWay.lk)",
      "Story post sharing + monthly report",
    ],
    featured: false,
    msg: "Hi%2C%20I%20am%20interested%20in%20the%20Basic%20social%20media%20marketing%20package%20(LKR%2085%2C000)",
  },
  {
    name: "Silver",
    price: "LKR 100,000",
    posts: "15 posts / month",
    desc: "Most popular — growing brands that want original filmed content.",
    features: [
      "15 social media posts",
      "3 reels filmed on a 4-hour location shoot (45 sec)",
      "Special day posts + Facebook cover design",
      "TikTok reels cross-posting",
      "1 email campaign — 350,000 corporate database",
      "Web ads publishing (Findit.lk / StudyWay.lk)",
      "Story sharing + monthly report",
    ],
    featured: true,
    msg: "Hi%2C%20I%20am%20interested%20in%20the%20Silver%20social%20media%20marketing%20package%20(LKR%20100%2C000)",
  },
  {
    name: "Gold",
    price: "LKR 150,000",
    posts: "20 posts / month",
    desc: "Facebook, Instagram & LinkedIn — full-service for serious growth.",
    features: [
      "20 social media posts",
      "3 reels filmed on a 4-hour location shoot (45 sec)",
      "LinkedIn + TikTok cross-posting",
      "Special day posts + Facebook cover design",
      "2 email campaigns — 350,000 corporate database",
      "Web ads publishing (Findit.lk / StudyWay.lk)",
      "Story sharing + monthly report",
    ],
    featured: false,
    msg: "Hi%2C%20I%20am%20interested%20in%20the%20Gold%20social%20media%20marketing%20package%20(LKR%20150%2C000)",
  },
  {
    name: "Platinum",
    price: "LKR 250,000",
    posts: "Unlimited posts / month",
    desc: "Facebook, Instagram, LinkedIn & TikTok — full-scale management.",
    features: [
      "Unlimited social media posts",
      "8 reels filmed on an 8-hour location shoot (45 sec)",
      "Meta + LinkedIn cross-posting",
      "TikTok cross-posting + strategy",
      "4 email campaigns — 350,000 corporate database",
      "Web ads publishing (Findit.lk / StudyWay.lk)",
      "Story sharing + monthly report",
    ],
    featured: false,
    msg: "Hi%2C%20I%20am%20interested%20in%20the%20Platinum%20social%20media%20marketing%20package%20(LKR%20250%2C000)",
  },
];

const faqs = [
  {
    q: "How much do social media marketing packages cost in Sri Lanka?",
    a: "Cypher Digital's social media marketing packages in Sri Lanka cost LKR 85,000/month (Basic), LKR 100,000/month (Silver), LKR 150,000/month (Gold) and LKR 250,000/month (Platinum). Ad spend is billed separately and goes directly to Meta.",
  },
  {
    q: "Which social media marketing package is best for a small business?",
    a: "Basic (LKR 85,000/month) suits small businesses that need consistent Facebook and Instagram content. If you want original filmed reels and access to our 350,000-contact email database, Silver (LKR 100,000/month) is the most popular choice.",
  },
  {
    q: "Are reels and video included in the packages?",
    a: "Yes. Basic includes 3 reels edited from stock footage. Silver and Gold include 3 reels filmed on a 4-hour location shoot. Platinum includes 8 reels from an 8-hour shoot. Extra 45-second reels can be added for LKR 30,000 + travel.",
  },
  {
    q: "Is ad spend included in the monthly package price?",
    a: "No. Management fees and ad spend are separate. Most Sri Lankan SMEs start with LKR 25,000–50,000/month in Meta ad spend on top of their package.",
  },
  {
    q: "Do you create Sinhala content?",
    a: "Yes — captions and creatives are produced in English and Sinhala by native Sinhala copywriters, never machine-translated.",
  },
  {
    q: "Is there a contract or setup fee?",
    a: "No annual lock-in and no setup fee. Onboarding, brand audit, strategy brief and the first content calendar are included in every package.",
  },
  {
    q: "How fast do social media marketing packages show results?",
    a: "Engagement and reach usually lift within 30 days. Lead-focused results from paid campaigns typically become measurable in month 2–3 once creatives and audiences are tested.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Social media marketing packages in Sri Lanka — 2026 pricing guide",
  description:
    "Social media marketing packages in Sri Lanka with real 2026 prices: Basic LKR 85,000, Silver LKR 100,000, Gold LKR 150,000 and Platinum LKR 250,000 per month.",
  mainEntityOfPage: "https://cypherdigital.lk/blog/social-media-marketing-packages",
  datePublished: "2026-05-23",
  dateModified: "2026-08-28",
  author: { "@type": "Organization", name: "Cypher Digital" },
  publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing Packages Sri Lanka",
  serviceType: "Social media marketing",
  provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  offers: packages.map((p) => ({
    "@type": "Offer",
    name: `${p.name} social media marketing package`,
    price: p.price.replace("LKR ", "").replace(/,/g, ""),
    priceCurrency: "LKR",
    description: `${p.posts} — ${p.desc}`,
    url: "https://cypherdigital.lk/blog/social-media-marketing-packages",
  })),
};

const BlogPost102 = () => (
  <>
    <SEOHead
      title="Social Media Marketing Packages in Sri Lanka — 2026 Pricing Guide"
      description="Social media marketing packages in Sri Lanka from LKR 85,000/month. Compare Basic, Silver, Gold & Platinum plans — posts, reels, ads and monthly reporting."
      canonical="https://cypherdigital.lk/blog/social-media-marketing-packages"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Article" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <time className="text-xs text-muted-foreground">Updated August 28, 2026</time>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-3 mb-4">Social media marketing packages in Sri Lanka — 2026 pricing guide</h1>
            <p className="text-sm text-muted-foreground">Real prices, real deliverables. Compare four <strong className="text-foreground">social media marketing packages in Sri Lanka</strong> — from LKR 85,000 to LKR 250,000 per month — and see exactly how many posts, reels, shoots and email campaigns you get at each tier.</p>
          </header>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">

            <div className="not-prose bg-muted/40 border border-border rounded-xl p-5 my-2">
              <div className="font-heading text-sm font-extrabold text-foreground mb-2">Quick answer</div>
              <p className="text-sm text-muted-foreground">Social media marketing packages in Sri Lanka typically cost <strong className="text-foreground">LKR 85,000–250,000 per month</strong>. At Cypher Digital: Basic LKR 85,000 (12 posts + 3 reels), Silver LKR 100,000 (15 posts + 3 filmed reels + email campaign), Gold LKR 150,000 (20 posts + LinkedIn), Platinum LKR 250,000 (unlimited posts + 8 reels from an 8-hour shoot). Meta ad spend is separate.</p>
            </div>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">Social media marketing packages &amp; pricing — Sri Lanka 2026</h2>
            <p>These are the live <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">social media advertising Sri Lanka</Link> packages from Cypher Digital. Every deliverable is listed — no vague promises, no hidden fees, no annual lock-in.</p>

            <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
              {packages.map((p) => (
                <div key={p.name} className={`rounded-xl p-5 relative bg-card ${p.featured ? "border-2 border-[#f97316]" : "border border-border"}`}>
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full whitespace-nowrap">Most Popular</span>
                  )}
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#f97316] mb-1">{p.name}</div>
                  <div className="font-heading text-xl font-extrabold text-foreground">{p.price}<span className="text-xs font-semibold text-muted-foreground"> /month</span></div>
                  <div className="text-xs font-semibold text-foreground mt-1">{p.posts}</div>
                  <p className="text-xs text-muted-foreground mt-2 mb-3">{p.desc}</p>
                  <ul className="text-xs text-muted-foreground space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/94701772626?text=${p.msg}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full text-center bg-[#f97316] text-white px-4 py-2 rounded-md font-semibold text-xs hover:opacity-90">Enquire — {p.name} →</a>
                </div>
              ))}
            </div>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Package comparison at a glance</h2>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-xs border border-border">
                <thead className="bg-muted"><tr><th className="p-2 text-left">Feature</th><th className="p-2 text-left">Basic</th><th className="p-2 text-left">Silver</th><th className="p-2 text-left">Gold</th><th className="p-2 text-left">Platinum</th></tr></thead>
                <tbody>
                  <tr><td className="p-2 border-t font-semibold text-foreground">Monthly price (LKR)</td><td className="p-2 border-t">85,000</td><td className="p-2 border-t">100,000</td><td className="p-2 border-t">150,000</td><td className="p-2 border-t">250,000</td></tr>
                  <tr><td className="p-2 border-t">Posts per month</td><td className="p-2 border-t">12</td><td className="p-2 border-t">15</td><td className="p-2 border-t">20</td><td className="p-2 border-t">Unlimited</td></tr>
                  <tr><td className="p-2 border-t">Reels (45 sec)</td><td className="p-2 border-t">3 (stock)</td><td className="p-2 border-t">3 (4-hr shoot)</td><td className="p-2 border-t">3 (4-hr shoot)</td><td className="p-2 border-t">8 (8-hr shoot)</td></tr>
                  <tr><td className="p-2 border-t">Platforms</td><td className="p-2 border-t">FB, IG, TikTok</td><td className="p-2 border-t">FB, IG, TikTok</td><td className="p-2 border-t">+ LinkedIn</td><td className="p-2 border-t">FB, IG, LinkedIn, TikTok</td></tr>
                  <tr><td className="p-2 border-t">Email campaigns (350K database)</td><td className="p-2 border-t">—</td><td className="p-2 border-t">1</td><td className="p-2 border-t">2</td><td className="p-2 border-t">4</td></tr>
                  <tr><td className="p-2 border-t">Special day posts + FB cover</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td></tr>
                  <tr><td className="p-2 border-t">Web ads (Findit.lk / StudyWay.lk)</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td></tr>
                  <tr><td className="p-2 border-t">Monthly reporting</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td><td className="p-2 border-t">✓</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Video &amp; reel add-ons</h2>
            <p>Need more video than your package includes? Add production on top of any tier — or see full rates on our <Link to="/reel-creation-sri-lanka" className="text-primary hover:underline">reel creation Sri Lanka</Link> and <Link to="/ai-video-production-sri-lanka" className="text-primary hover:underline">AI video production in Sri Lanka</Link> pages.</p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-xs border border-border">
                <thead className="bg-muted"><tr><th className="p-2 text-left">Add-on</th><th className="p-2 text-left">Price</th></tr></thead>
                <tbody>
                  <tr><td className="p-2 border-t">45-second reel video creation</td><td className="p-2 border-t">LKR 30,000 + travel</td></tr>
                  <tr><td className="p-2 border-t">Landscape / corporate video (from)</td><td className="p-2 border-t">LKR 40,000 +</td></tr>
                  <tr><td className="p-2 border-t">AI character video (15–30 sec reel)</td><td className="p-2 border-t">from LKR 18,000</td></tr>
                  <tr><td className="p-2 border-t">Google Business Profile management</td><td className="p-2 border-t">On request</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Which package should you choose?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Salons, cafés, small retail:</strong> Basic — consistent, well-designed posts keep you visible without a big commitment.</li>
              <li><strong className="text-foreground">Schools, clinics, real estate:</strong> Silver — filmed reels plus one email campaign to 350,000 corporate contacts drive real enquiries.</li>
              <li><strong className="text-foreground">B2B and professional services:</strong> Gold — LinkedIn cross-posting and two email campaigns reach decision-makers.</li>
              <li><strong className="text-foreground">National brands &amp; multi-branch businesses:</strong> Platinum — unlimited posts, 8 filmed reels and four email campaigns for full-scale coverage.</li>
            </ul>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">What every package includes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Original content creation</strong> — brand-specific graphics and video, not stock templates</li>
              <li><strong className="text-foreground">Monthly content calendar</strong> — aligned to your campaigns and Sri Lankan seasons (Avurudu, Vesak, Ramadan, cricket season)</li>
              <li><strong className="text-foreground">Community management</strong> — replies to comments and DMs</li>
              <li><strong className="text-foreground">Bilingual copy</strong> — English and Sinhala by native writers</li>
              <li><strong className="text-foreground">Monthly reporting</strong> — reach, engagement, follower growth and next steps</li>
              <li><strong className="text-foreground">Optional paid ads</strong> — <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook Ads</Link> management on top of any package</li>
            </ul>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Platforms worth managing in Sri Lanka</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 not-prose my-5">
              {[
                { i: "📘", n: "Facebook", d: "8.7M+ Sri Lankan users. Reach, ads, community.", b: "All Packages" },
                { i: "📸", n: "Instagram", d: "Visual-first. Reels drive organic reach.", b: "All Packages" },
                { i: "🎵", n: "TikTok", d: "Fastest growing for under-35s.", b: "All Packages" },
                { i: "💼", n: "LinkedIn", d: "B2B leads & employer branding.", b: "Gold + Platinum" },
                { i: "✉️", n: "Email", d: "350,000 corporate contact database.", b: "Silver upward" },
                { i: "▶️", n: "YouTube", d: "Long-form storytelling & ads.", b: "Add-On" },
              ].map((p) => (
                <div key={p.n} className="bg-muted/40 border border-border rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">{p.i}</div>
                  <div className="font-heading text-sm font-bold text-foreground">{p.n}</div>
                  <p className="text-[11px] text-muted-foreground mt-1">{p.d}</p>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded">{p.b}</span>
                </div>
              ))}
            </div>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Why content quality is the biggest variable</h2>
            <p>Two businesses can spend the same on social media and get completely different results. The difference is almost always content quality — not budget.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Original design vs templates.</strong> Stock template posts are immediately recognisable; original brand design builds trust.</li>
              <li><strong className="text-foreground">Native Sinhala copy vs translation.</strong> Machine-translated Sinhala reads as unprofessional.</li>
              <li><strong className="text-foreground">Video-first strategy.</strong> Reels and TikTok consistently get 3–5× more reach than static posts.</li>
              <li><strong className="text-foreground">Local cultural relevance.</strong> Local context outperforms generic global content.</li>
            </ul>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Onboarding — your first 2 weeks</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong className="text-foreground">Package selection &amp; agreement</strong> — one-page service agreement, signed within 24 hours.</li>
              <li><strong className="text-foreground">Brand intake</strong> — 15–20 minutes covering identity, audience, products, competitors.</li>
              <li><strong className="text-foreground">Strategy brief</strong> — delivered within 2 business days with themes, frequency and platform focus.</li>
              <li><strong className="text-foreground">Content calendar</strong> — topics, formats, captions and dates for your approval.</li>
              <li><strong className="text-foreground">Shoot, design &amp; go live</strong> — location shoot (Silver upward), final approval, scheduling, publish.</li>
            </ol>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">What a professional monthly report covers</h2>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-xs border border-border">
                <thead className="bg-muted"><tr><th className="p-2 text-left">Metric</th><th className="p-2 text-left">What it tells you</th></tr></thead>
                <tbody>
                  <tr><td className="p-2 border-t">Reach &amp; impressions</td><td className="p-2 border-t">How many people saw your content</td></tr>
                  <tr><td className="p-2 border-t">Engagement rate</td><td className="p-2 border-t">How much your audience interacts</td></tr>
                  <tr><td className="p-2 border-t">Follower growth</td><td className="p-2 border-t">Net new followers and trend</td></tr>
                  <tr><td className="p-2 border-t">Reel views &amp; shares</td><td className="p-2 border-t">Video performance and organic reach</td></tr>
                  <tr><td className="p-2 border-t">Ad results</td><td className="p-2 border-t">Clicks, leads and cost-per-lead</td></tr>
                  <tr><td className="p-2 border-t">Next-month strategy</td><td className="p-2 border-t">Pivots and new campaign ideas</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Frequently asked questions</h2>
            {faqs.map((f) => (
              <p key={f.q}><strong className="text-foreground">{f.q}</strong> {f.a}</p>
            ))}

            <h2 className="text-foreground font-heading text-xl font-bold mt-10 mb-3">Related guides</h2>
            <p>For delivery detail and case studies, see our <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">social media management in Sri Lanka</Link> service page. To weigh organic vs paid effort, read <Link to="/blog/organic-social-media-vs-paid-ads-sri-lanka" className="text-primary hover:underline">organic social media vs paid ads</Link>. Instagram-only focus? See <Link to="/blog/instagram-marketing-sri-lanka" className="text-primary hover:underline">Instagram marketing in Sri Lanka</Link>. Comparing agencies? Read <Link to="/blog/social-media-agency-colombo" className="text-primary hover:underline">how to choose a social media agency in Colombo</Link>. Many clients bundle social with <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads</Link> and <Link to="/seo-services-sri-lanka" className="text-primary hover:underline">SEO services</Link> through our <Link to="/" className="text-primary font-semibold hover:underline">digital marketing agency in Sri Lanka</Link>.</p>

            <div className="not-prose bg-primary/5 border border-primary/20 rounded-lg p-5 mt-10 text-center">
              <p className="text-foreground font-semibold mb-2">Find out which package is right for your business</p>
              <p className="text-sm text-muted-foreground mb-3">Message us on WhatsApp — we'll recommend the right tier in under 5 minutes.</p>
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20discuss%20social%20media%20marketing%20packages" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#f97316] text-white px-5 py-2 rounded-md font-semibold text-sm hover:opacity-90">💬 Chat on WhatsApp →</a>
            </div>
          </div>
          <OurWorkSection service="social media marketing" variant="preview" />
        </div>
      </div>
    </article>
  </>
);
export default BlogPost102;
