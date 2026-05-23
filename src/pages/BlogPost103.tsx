import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const BlogPost103 = () => (
  <>
    <SEOHead
      title="Web Design in Sri Lanka — Pricing, Process & What's Included (2026)"
      description="Professional web design in Sri Lanka. Business websites, e-commerce stores and landing pages from LKR 75,000. Mobile-first, SEO-ready and conversion-focused."
      canonical="https://cypherdigital.lk/blog/web-design-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Article" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <time className="text-xs text-muted-foreground">May 23, 2026</time>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-3 mb-4">Web design in Sri Lanka — pricing, process & what's included (2026)</h1>
          </header>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <p>Your website is your most important digital marketing asset. Over 75% of web browsing in Sri Lanka happens on mobile, and visitors abandon sites that take longer than three seconds to load. This guide breaks down realistic <strong className="text-foreground">web design pricing in Sri Lanka</strong>, what should be included, and how the process works from brief to launch.</p>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">What type of website does your business need?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Business website:</strong> 5–10 pages for service businesses, clinics, law firms and agencies</li>
              <li><strong className="text-foreground">E-commerce store:</strong> product catalogue, cart, payments and order management</li>
              <li><strong className="text-foreground">Landing page:</strong> single conversion-focused page for ad campaigns and lead generation</li>
              <li><strong className="text-foreground">Hospitality:</strong> booking-integrated, image-first sites for hotels and restaurants</li>
              <li><strong className="text-foreground">Education:</strong> schools and tuition centres with course listings and enquiry forms</li>
            </ul>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">Transparent web design pricing</h2>
            <p><strong className="text-foreground">Starter — LKR 75,000 (one-time).</strong> Up to 5 pages, mobile-responsive, contact form and WhatsApp button, basic SEO, Google Maps integration. Ideal for a first professional presence.</p>
            <p><strong className="text-foreground">Business — LKR 150,000 (one-time).</strong> Up to 12 pages, premium responsive design, CRM-integrated lead forms, full SEO, blog section, custom animations and Google Analytics. Most popular package.</p>
            <p><strong className="text-foreground">E-commerce — LKR 250,000+ (one-time).</strong> Unlimited products, payment gateway integration, order management, inventory tracking, customer accounts and full product schema.</p>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">Our 5-step process</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong className="text-foreground">Discovery call</strong> — business, audience, competitors and goals</li>
              <li><strong className="text-foreground">Design mockup</strong> — visual concept approval before development</li>
              <li><strong className="text-foreground">Development</strong> — mobile-first build with SEO foundations</li>
              <li><strong className="text-foreground">Content & testing</strong> — content loaded, forms tested across devices</li>
              <li><strong className="text-foreground">Launch & support</strong> — go live with 30 days of free post-launch support</li>
            </ol>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">Why mobile-first matters in Sri Lanka</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">75%</strong> of Sri Lankan web browsing happens on mobile</li>
              <li><strong className="text-foreground">3 seconds</strong> is the load-time threshold before 40% of visitors leave</li>
              <li><strong className="text-foreground">88%</strong> of users will not return to a site after a bad mobile experience</li>
            </ul>

            <h2 className="text-foreground font-heading text-xl font-bold mt-8 mb-3">FAQs</h2>
            <p><strong className="text-foreground">How much does web design cost in Sri Lanka?</strong> LKR 75,000 for a basic business website to LKR 250,000+ for full e-commerce. Pages, complexity and functionality drive the price.</p>
            <p><strong className="text-foreground">How long does it take?</strong> 3–5 weeks for a standard business website; 6–10 weeks for e-commerce.</p>
            <p><strong className="text-foreground">Will my site be SEO-friendly?</strong> Yes — proper heading structure, meta titles, fast loading, mobile optimisation and schema markup are built in.</p>

            <p>Building an online store specifically? See our guide on <Link to="/blog/ecommerce-development-sri-lanka" className="text-primary hover:underline">e-commerce development in Sri Lanka</Link>. To turn that new site into traffic and leads, pair it with <Link to="/seo-services-sri-lanka" className="text-primary hover:underline">SEO services</Link> and <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads</Link>. For UI principles that improve conversion, read <Link to="/blog/ui-ux-design-best-practices-sri-lankan-websites" className="text-primary hover:underline">UI/UX best practices for Sri Lankan websites</Link>.</p>
            <p>For a full marketing partner after launch, work with a <Link to="/" className="text-primary font-semibold hover:underline">digital marketing agency in Sri Lanka</Link> and explore the wider mix of <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</Link>. Need ongoing organic growth? Compare our <Link to="/blog/seo-packages-sri-lanka" className="text-primary hover:underline">SEO packages in Sri Lanka</Link>.</p>
          </div>
        </div>
      </div>
    </article>
  </>
);
export default BlogPost103;