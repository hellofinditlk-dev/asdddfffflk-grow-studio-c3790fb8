import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, BarChart3, Layers, Megaphone, TrendingUp, Phone } from "lucide-react";

const services = [
  { name: "Facebook & Instagram Media Buying", desc: "Targeted paid campaigns for leads, awareness, and conversions." },
  { name: "Google Ads Management", desc: "Search, Display, Shopping, and YouTube campaigns." },
  { name: "TikTok Ads Management", desc: "Performance campaigns targeting the 18–35 audience." },
  { name: "YouTube Advertising", desc: "Video ad campaigns across skippable and non-skippable formats." },
  { name: "LinkedIn Advertising", desc: "B2B campaigns for professional and corporate audiences." },
  { name: "Media Planning & Strategy", desc: "Full-funnel media plans with platform mix and budget allocation." },
  { name: "Creative Production", desc: "Videos, graphics, and copy aligned to media strategy." },
  { name: "Campaign Optimisation", desc: "Ongoing A/B testing, bid management, and audience refinement." },
];

const whyUs = [
  { icon: <Target className="w-5 h-5" />, title: "Strategy Before Spend", desc: "Every campaign starts with market research, audience profiling, and competitive analysis." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Performance-Focused", desc: "We buy media for results — leads, sales, and conversions — not vanity impressions." },
  { icon: <Layers className="w-5 h-5" />, title: "Multi-Platform Expertise", desc: "Facebook, Instagram, Google, YouTube, TikTok, and LinkedIn under one team." },
  { icon: <Megaphone className="w-5 h-5" />, title: "Creative + Media In-House", desc: "High-converting ad creatives produced alongside every media buy." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports with every metric explained in plain language." },
  { icon: <CheckCircle className="w-5 h-5" />, title: "SME-Friendly Pricing", desc: "Enterprise-quality media buying at packages designed for Sri Lankan businesses." },
];

const costs = [
  ["Facebook / Instagram Ads", "LKR 200–800 CPM", "Varies by audience and creative quality"],
  ["Google Search Ads", "LKR 30–150 per click", "Depends on keyword competition"],
  ["YouTube Ads", "LKR 50–200 per view", "Skippable and non-skippable formats"],
  ["TikTok Ads", "LKR 300–900 CPM", "Strong youth reach"],
  ["LinkedIn Ads", "LKR 400–1,200 CPC", "B2B audiences"],
  ["Agency Management Fee", "LKR 15,000–150,000/mo", "Depends on scope and channels"],
];

const faqs = [
  { q: "What is the difference between media planning and media buying?", a: "Media planning is the strategic process of deciding which channels to use, what audience to target, and how to allocate budget. Media buying is the execution — actually purchasing the ad space. Most full-service agencies offer both." },
  { q: "How much should I spend on media buying in Sri Lanka?", a: "For digital campaigns, even a budget of LKR 25,000–50,000 per month can deliver measurable results when managed well. Scaling brands typically invest LKR 100,000+ per month across platforms." },
  { q: "Can a small business in Sri Lanka afford a media buying agency?", a: "Yes. Digital media buying has made advertising accessible to businesses of all sizes. At Cypher Digital, packages start from LKR 15,000/month in management fees, with ad spend scaled to your budget." },
  { q: "How long before I see results from a media buying campaign?", a: "Digital campaigns can show early results within 7–14 days. For full optimisation and reliable data, allow 30–60 days." },
  { q: "How do I get started with Cypher Digital?", a: "Book a free consultation via our contact page or WhatsApp us on +94 70 177 2626. We'll review your business goals and recommend the right media mix." },
];

const MediaBuyingAgencies = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="Media Buying Agencies in Sri Lanka | Media Buying Sri Lanka"
        description="Looking for the best media buying agencies in Sri Lanka? Cypher Digital offers expert media planning and buying across Facebook, Google, TikTok & more. Free consultation."
        canonical="https://cypherdigital.lk/media-buying-agencies-sri-lanka"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageBreadcrumb items={[{ label: "Media Buying Agencies Sri Lanka" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Media Buying Agencies in Sri Lanka — The Complete 2025 Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you're a startup in Colombo or an established brand scaling across Sri Lanka, choosing the right media buying agency can make or break your advertising ROI. This guide covers what media buying is, how to choose an agency, what to expect, and why <strong>Cypher Digital</strong> is the go-to choice for businesses that want results.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20media%20buying%20agency" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Free Consultation
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-4xl py-16 space-y-14">
        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">What Is Media Buying?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Media buying is the process of purchasing advertising space and airtime across platforms — digital or traditional — at the best possible price and placement to reach your target audience effectively.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">In Sri Lanka, this includes:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Digital media buying</strong> — Facebook Ads, Google Ads, YouTube Ads, TikTok Ads, Instagram Ads</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Traditional media buying</strong> — TV commercials, radio spots, newspaper and magazine placements</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Out-of-Home (OOH) buying</strong> — billboards, transit ads, hoardings</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Programmatic media buying</strong> — automated digital ad purchases using audience data</span></li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            A professional media buying agency handles negotiation, placement, scheduling, targeting, and post-campaign reporting — so your budget works harder and reaches the right people at the right time.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">Why You Need a Media Buying Agency in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Many businesses in Sri Lanka attempt to run their own ads. While platforms like Facebook and Google make it easy to get started, running campaigns without media expertise often leads to:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            {["Wasted ad spend on wrong audiences","Poor ad placements that don't convert","No benchmarking against industry rates","Lack of multi-channel strategy","No proper attribution or reporting"].map((p,i)=>(
              <li key={i} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{p}</span></li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            A specialist <strong>media buying agency in Sri Lanka</strong> knows the local digital landscape, platform costs, audience behaviours, and campaign seasonality — helping you spend smarter and scale faster.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">The Sri Lankan Media Landscape in 2025</h2>
          <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Digital Media</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Facebook</strong> remains the most widely used social platform, with over 6 million users in Sri Lanka.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>YouTube</strong> is the dominant video platform, heavily consumed on mobile.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>TikTok</strong> has grown rapidly among the 18–35 demographic.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Google Search Ads</strong> are essential for capturing purchase-intent audiences.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Instagram</strong> is gaining ground in urban, lifestyle, and fashion categories.</span></li>
          </ul>
          <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Traditional Media</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>TV advertising</strong> — Hiru TV, Sirasa TV, Derana, and Swarnavahini dominate mass-market reach.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Radio advertising</strong> — Strong reach in rural and commuter segments via Yes FM, Shakthi FM, and Sirasa FM.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Newspaper advertising</strong> — Daily Mirror, Lankadeepa, and Virakesari serve demographic-specific segments.</span></li>
          </ul>
          <h3 className="font-heading text-xl font-semibold mt-6 mb-3">Key Trends for 2025</h3>
          <ul className="space-y-2 text-muted-foreground">
            {["Performance-based media buying (pay per result) is increasingly preferred by SMEs","Video-first ad formats dominate engagement across Facebook and TikTok","Programmatic advertising is entering the Sri Lankan market for larger brands","Regional language targeting (Sinhala, Tamil) is essential for mass reach"].map((p,i)=>(
              <li key={i} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{p}</span></li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">Types of Media Buying Agencies in Sri Lanka</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["1. Digital-Only Media Buying Agencies","Focused exclusively on online platforms — Facebook, Google, YouTube, TikTok. Best for SMEs, ecommerce, startups, and performance-focused goals."],
              ["2. Traditional Media Buying Agencies","Handle TV, radio, print, and OOH placements. Typically large agencies with established relationships with Sri Lankan broadcasters and publishers."],
              ["3. Full-Service / Integrated Media Agencies","Offer both digital and traditional planning and buying under one roof — usually serving large-scale advertisers."],
              ["4. Performance Marketing Agencies","Focus on measurable outcomes — leads, sales, app installs — rather than impressions. The modern approach for SMEs in Sri Lanka."],
            ].map(([t,d],i)=>(
              <div key={i} className="p-5 rounded-lg border border-border bg-card">
                <h3 className="font-heading font-semibold mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">How to Choose the Best Media Buying Agency in Sri Lanka</h2>
          <div className="space-y-4">
            {[
              ["Do they understand your target audience?","The best agencies build detailed audience profiles — location, age, interests, device, language, income — before spending a single rupee."],
              ["Do they offer transparent reporting?","You should receive regular reports with clear metrics: reach, impressions, CPM, CPC, CTR, conversion rate, and ROAS."],
              ["Are they platform-certified?","Look for Google Partner status or Meta Business Partner credentials — these signal verified expertise."],
              ["What is their track record?","Case studies, testimonials, and proven results matter more than awards or size. Ask for local examples from your industry."],
              ["Do they handle creative as well?","Media buying without strong creative is like buying billboard space and putting up a blank poster. The best agencies align both."],
            ].map(([q,a],i)=>(
              <div key={i} className="p-5 rounded-lg border border-border">
                <h3 className="font-heading font-semibold mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" />{q}</h3>
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">What Does Media Buying Cost in Sri Lanka?</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-heading">Platform</th>
                  <th className="text-left p-3 font-heading">Estimated Cost</th>
                  <th className="text-left p-3 font-heading">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((row,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3 text-muted-foreground">{row[1]}</td>
                    <td className="p-3 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-6">Why Cypher Digital Is the Best Media Buying Agency in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At <strong>Cypher Digital</strong>, we are a results-driven digital marketing and media buying agency based in Colombo, Sri Lanka. We specialise in helping businesses invest their advertising budgets where it matters most.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {whyUs.map((w,i)=>(
              <div key={i} className="p-5 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  {w.icon}
                  <h3 className="font-heading font-semibold text-foreground">{w.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-6">Cypher Digital Media Buying Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s,i)=>(
              <div key={i} className="p-5 rounded-lg border border-border bg-card">
                <h3 className="font-heading font-semibold mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cypher Digital has delivered media buying campaigns for businesses across:</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {["Hotels & Tourism","Real Estate","Education & Training Institutes","Ecommerce & Retail","Beauty, Salons & Wellness","Restaurants & F&B","Automotive Dealerships","Healthcare & Clinics","Fashion & Lifestyle Brands","Financial Services & Insurance"].map((i)=>(
              <div key={i} className="flex items-center gap-2 p-3 rounded border border-border bg-card">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />{i}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f,i)=>(
              <div key={i} className="p-5 rounded-lg border border-border bg-card">
                <h3 className="font-heading font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Ready to Make Every Rupee Count?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            The right media buying agency doesn't just place ads — they make sure every rupee is working toward a measurable business goal. Let's talk about your campaign.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20media%20buying%20agency" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> WhatsApp +94 70 177 2626
              </a>
            </Button>
            <Button asChild size="lg" variant="outline"><Link to="/contact">Get a Free Quote</Link></Button>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold mb-4">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/facebook-ads-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Facebook Advertising</Link>
            <Link to="/google-ads-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Google Ads</Link>
            <Link to="/tiktok-marketing-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">TikTok Marketing</Link>
            <Link to="/social-media-management-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Social Media Management</Link>
            <Link to="/influencer-marketing-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Influencer Marketing</Link>
            <Link to="/advertising-in-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Advertising in Sri Lanka</Link>
          </div>
        </section>

        <InquiryForm />
      </article>
    </>
  );
};

export default MediaBuyingAgencies;