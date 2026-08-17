import OurWorkSection from "@/components/OurWorkSection";
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
      <OurWorkSection service="media buying" />

      <article className="container mx-auto px-4 max-w-4xl py-16 space-y-14">
        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">What Is Media Buying?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Media buying is the process of purchasing advertising space and airtime across platforms — digital or traditional — at the best possible price and placement to reach your target audience effectively.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">In Sri Lanka, this includes:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Digital media buying</strong> — <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook Ads</Link>, <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads</Link>, YouTube Ads, <Link to="/tiktok-marketing-sri-lanka" className="text-primary hover:underline">TikTok Ads</Link>, Instagram Ads</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>Traditional media buying</strong> — <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline">TV commercials</Link>, <Link to="/radio-advertising-sri-lanka" className="text-primary hover:underline">radio spots</Link>, <Link to="/newspaper-advertising-sri-lanka" className="text-primary hover:underline">newspaper</Link> and magazine placements</span></li>
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
            A specialist <strong>media buying agency in Sri Lanka</strong> knows the local digital landscape, platform costs, audience behaviours, and campaign seasonality — helping you spend smarter and scale faster. For context, read our complete <Link to="/advertising-in-sri-lanka" className="text-primary hover:underline font-semibold">guide to advertising in Sri Lanka</Link>.
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
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong><Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline">TV advertising</Link></strong> — Hiru TV, Sirasa TV, Derana, and Swarnavahini dominate mass-market reach.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong><Link to="/radio-advertising-sri-lanka" className="text-primary hover:underline">Radio advertising</Link></strong> — Strong reach in rural and commuter segments via Yes FM, Shakthi FM, and Sirasa FM.</span></li>
            <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong><Link to="/newspaper-advertising-sri-lanka" className="text-primary hover:underline">Newspaper advertising</Link></strong> — Daily Mirror, Lankadeepa, and Virakesari serve demographic-specific segments.</span></li>
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

        {/* Newspaper Advertising Section */}
        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">Newspaper Advertising in Sri Lanka — Complete Guide</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Newspaper advertising remains one of the most trusted and high-reach advertising channels in Sri Lanka, particularly for reaching older demographics, regional audiences, and business decision-makers. Despite the rise of digital media, print advertising in Sri Lanka continues to deliver strong credibility and brand authority.
          </p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">Major Newspapers in Sri Lanka for Advertising</h3>

          <h4 className="font-heading text-lg font-semibold mt-6 mb-2">English Language Newspapers</h4>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Daily Mirror</strong> is one of the most widely read English newspapers in Sri Lanka, ideal for reaching urban professionals, business owners, and educated consumers in Colombo and major cities. Advertising here positions your brand as credible and established.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>The Sunday Times</strong> is the highest-circulating English Sunday newspaper in Sri Lanka, making it ideal for weekend campaigns targeting family decision-makers and urban professionals.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Daily FT (Financial Times Sri Lanka)</strong> is the go-to newspaper for reaching Sri Lanka's business community — CEOs, CFOs, investors, and corporate decision-makers. Best for B2B brands, financial services, real estate, and professional services.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>The Island</strong> is a well-established English daily with a loyal readership base across Colombo and the Western Province.</p>

          <h4 className="font-heading text-lg font-semibold mt-6 mb-2">Sinhala Language Newspapers</h4>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Lankadeepa</strong> is Sri Lanka's most widely read Sinhala daily newspaper with a daily circulation of over 285,000 and a Sunday edition exceeding 580,000 readers. It has won the SLIM-Kantar Most Popular Newspaper Award for 18 consecutive years. For mass-market Sinhala-speaking audiences, Lankadeepa is the #1 choice.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Divaina</strong> is another popular Sinhala daily owned by Associated Newspapers of Ceylon (Lake House), reaching readers across the island including regional cities and towns.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Silumina</strong> is the Sunday Sinhala newspaper from Lake House — a strong vehicle for Sunday campaigns targeting family audiences.</p>

          <h4 className="font-heading text-lg font-semibold mt-6 mb-2">Tamil Language Newspapers</h4>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Virakesari</strong> is the most widely read Tamil daily newspaper in Sri Lanka, essential for reaching the Tamil-speaking population across the Northern, Eastern, and Central Provinces.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Tamil Mirror</strong> is a sister publication of Daily Mirror targeting Tamil readers in Colombo and the Northern Province.</p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">Types of Newspaper Ads in Sri Lanka</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-heading">Ad Format</th>
                  <th className="text-left p-3 font-heading">Description</th>
                  <th className="text-left p-3 font-heading">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Full Page","Complete page coverage, maximum impact","Brand launches, major promotions"],
                  ["Half Page","Strong presence at lower cost than full page","Product launches, sales events"],
                  ["Quarter Page","Cost-effective visibility","Regular promotions, announcements"],
                  ["Strip Ad","Horizontal banner across the page","Retail offers, contact promotions"],
                  ["Classified Ad","Text-only small ad","Jobs, property, vehicle listings"],
                  ["Advertorial","Editorial-style paid article","Trust-building, detailed brand stories"],
                  ["Front Page Strip","Prime position at top/bottom of front page","Maximum visibility campaigns"],
                  ["Wraparound","Covers front and back page","Major brand campaigns"],
                ].map((row,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3 text-muted-foreground">{row[1]}</td>
                    <td className="p-3 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">Newspaper Advertising Costs in Sri Lanka (2025)</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-heading">Newspaper</th>
                  <th className="text-left p-3 font-heading">Full Page (Approx.)</th>
                  <th className="text-left p-3 font-heading">Half Page (Approx.)</th>
                  <th className="text-left p-3 font-heading">Audience</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Lankadeepa (Daily)","LKR 300,000–600,000","LKR 150,000–300,000","Sinhala mass market"],
                  ["Lankadeepa (Sunday)","LKR 500,000–900,000","LKR 250,000–450,000","Sinhala family/Sunday"],
                  ["Daily Mirror","LKR 250,000–500,000","LKR 120,000–250,000","English urban professionals"],
                  ["Sunday Times","LKR 400,000–750,000","LKR 200,000–375,000","English family/Sunday"],
                  ["Daily FT","LKR 200,000–400,000","LKR 100,000–200,000","Business decision-makers"],
                  ["Virakesari","LKR 150,000–350,000","LKR 80,000–175,000","Tamil-speaking audiences"],
                  ["Divaina","LKR 250,000–500,000","LKR 125,000–250,000","Sinhala regional audiences"],
                ].map((row,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3 text-muted-foreground">{row[1]}</td>
                    <td className="p-3 text-muted-foreground">{row[2]}</td>
                    <td className="p-3 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-3">Note: Rates vary by position (front page vs. inside), day of week, and negotiated media buys. A media buying agency can often negotiate 20–40% off rate card prices.</p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">When Should Your Business Advertise in Newspapers?</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">Newspaper advertising works best for:</p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              ["Brand credibility","When you want your business to appear established and trustworthy"],
              ["Mass market launches","Reaching large audiences quickly across the island"],
              ["Event announcements","Sales, grand openings, product launches"],
              ["Real estate","Property listings and project launches remain strong in print"],
              ["Government tenders & legal notices","Mandatory print publication requirements"],
              ["Recruitment","Job advertisements still perform well in Sunday editions"],
              ["FMCG promotions","Price promotions and offers targeting householders"],
              ["Regional campaigns","Reaching audiences in cities outside Colombo"],
            ].map(([t,d],i)=>(
              <li key={i} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>{t}</strong> — {d}</span></li>
            ))}
          </ul>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">Tips for Effective Newspaper Advertising in Sri Lanka</h3>
          <ol className="space-y-3 text-muted-foreground list-decimal pl-6">
            <li><strong>Choose the right language</strong> — Sinhala newspapers reach the widest audience, but English papers reach higher-income, decision-making demographics. Tamil papers are essential for Northern and Eastern Province campaigns.</li>
            <li><strong>Sunday editions outperform weekdays</strong> — Sunday circulation is significantly higher than daily editions across all major Sri Lankan newspapers. Schedule key ads for Sunday for maximum reach.</li>
            <li><strong>Front page positions command premium</strong> — A strip ad or jacket on the front page of Lankadeepa or Daily Mirror delivers exceptional visibility but costs 2–3x standard rates.</li>
            <li><strong>Combine print with digital</strong> — The most effective campaigns run <Link to="/newspaper-advertising-sri-lanka" className="text-primary hover:underline">newspaper ads</Link> simultaneously with <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook</Link> and <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google campaigns</Link>. Print builds credibility; digital captures the leads.</li>
            <li><strong>Advertorials outperform standard display ads</strong> — A well-written advertorial (editorial-style article) builds deeper trust than a display banner and often gets read in full.</li>
            <li><strong>Book early for peak seasons</strong> — New Year (Avurudu), Christmas, and Vesak periods see high advertiser demand. Book newspaper space 3–4 weeks in advance for peak periods.</li>
          </ol>
        </section>

        {/* TV Advertising Section */}
        <section>
          <h2 className="font-heading text-3xl font-bold mb-4">TV Advertising in Sri Lanka — Complete Guide</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Television advertising remains the most powerful mass-reach medium in Sri Lanka, capable of reaching millions of viewers across all demographics and regions simultaneously. For brands seeking nationwide visibility, strong brand recall, and emotional connection with audiences, TV advertising in Sri Lanka is unmatched.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Many brands searching for <Link to="/blog/tv-advertising-companies-sri-lanka" className="text-primary hover:underline font-semibold">TV advertising companies in Sri Lanka</Link> also need a media buying partner — here is how to tell the difference. TV remains the most powerful mass media channel — read our complete <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline font-semibold">TV advertising in Sri Lanka</Link> guide for 2025 rates and channel selection.
          </p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">Major TV Channels in Sri Lanka for Advertising</h3>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Hiru TV</strong> is Sri Lanka's first and only digital HD television channel, owned by Asia Broadcasting Corporation. Launched in 2012, Hiru TV has rapidly grown to become one of the highest-rated channels in Sri Lanka for entertainment and news programming. It reaches a wide Sinhala-speaking audience across all age groups and income levels nationwide.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Sirasa TV</strong> is owned by Maharaja Entertainment and is one of Sri Lanka's most established and trusted television brands. Known for strong drama serials, news programmes (News First), and entertainment shows, Sirasa TV commands a loyal, mass-market Sinhala viewership. The Sirasa brand also includes Shakthi TV for Tamil-speaking audiences.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>TV Derana</strong> is operated by Capital Maharaja Organisation and is consistently ranked among Sri Lanka's top-rated channels. TV Derana has won multiple SLIM-Nielsen Television Channel of the Year awards and holds records for having the most programmes in the top 10 ratings. Ada Derana is the island's #1 news brand with massive digital reach as well.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Swarnavahini</strong> is one of Sri Lanka's oldest private television channels with a particularly strong following in rural and regional audiences. Known for drama serials, reality shows, and religious programming targeting traditional, family-oriented viewers.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>ITN (Independent Television Network)</strong> is the state broadcaster with nationwide transmission coverage including areas that private channels may not fully reach. ITN is the go-to for campaigns requiring maximum geographic coverage across Sri Lanka.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Rupavahini (SLRC)</strong> is Sri Lanka's first television channel and the national broadcaster, with strong viewership among older demographics and government-related content.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Vasantham TV (under ITN)</strong> is the dedicated Tamil-language state channel — essential for reaching Tamil audiences across the Northern and Eastern Provinces.</p>
          <p className="text-muted-foreground leading-relaxed mb-3"><strong>Siyatha TV</strong> is a growing channel under Voice of Asia Networks with an increasing youth and urban audience base.</p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">TV Ad Formats in Sri Lanka</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-heading">Format</th>
                  <th className="text-left p-3 font-heading">Duration</th>
                  <th className="text-left p-3 font-heading">Description</th>
                  <th className="text-left p-3 font-heading">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard TVC","30 seconds","Main commercial spot","Brand awareness, product launch"],
                  ["Short TVC","15 seconds","Condensed brand message","Recall campaigns, frequency"],
                  ["Long-form TVC","45–60 seconds","Extended storytelling","Premium brand narratives"],
                  ["Sponsorship Billboard","5–10 seconds","Sponsored content tag","Programme association"],
                  ["Programme Sponsorship","Ongoing","Exclusive programme title sponsor","Deep brand association"],
                  ["Scroll / Ticker Ad","Ongoing","Text crawl at bottom of screen","News channels, announcements"],
                  ["Infomercial","3–10 minutes","Long-form product demonstration","Direct response, product education"],
                ].map((row,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3 text-muted-foreground">{row[1]}</td>
                    <td className="p-3 text-muted-foreground">{row[2]}</td>
                    <td className="p-3 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">TV Advertising Costs in Sri Lanka (2025)</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-heading">Channel</th>
                  <th className="text-left p-3 font-heading">Prime Time 30-sec</th>
                  <th className="text-left p-3 font-heading">Off-Peak 30-sec</th>
                  <th className="text-left p-3 font-heading">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hiru TV","LKR 150,000–400,000","LKR 50,000–150,000","Mass Sinhala audience, HD quality"],
                  ["Sirasa TV","LKR 150,000–380,000","LKR 50,000–140,000","Drama-watching Sinhala families"],
                  ["TV Derana","LKR 140,000–380,000","LKR 45,000–130,000","News audience, youth, urban"],
                  ["Swarnavahini","LKR 100,000–280,000","LKR 35,000–100,000","Rural & regional Sinhala audiences"],
                  ["ITN","LKR 80,000–220,000","LKR 30,000–90,000","Nationwide coverage, regional reach"],
                  ["Rupavahini","LKR 60,000–180,000","LKR 25,000–80,000","Older demographics, government sector"],
                  ["Vasantham TV","LKR 50,000–150,000","LKR 20,000–70,000","Tamil-speaking audiences"],
                ].map((row,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3 text-muted-foreground">{row[1]}</td>
                    <td className="p-3 text-muted-foreground">{row[2]}</td>
                    <td className="p-3 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-3">Prime time in Sri Lanka is typically 7:00 PM – 10:30 PM. News programmes and popular drama serials command the highest rates. A media buying agency can negotiate packages significantly below rate card.</p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">Understanding TV Ratings in Sri Lanka</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">Sri Lanka's TV advertising industry uses LMRB (Lanka Market Research Bureau) ratings data to measure channel viewership. Key metrics include:</p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              ["GRP (Gross Rating Points)","Total audience delivery across all spots in a campaign"],
              ["TRP (Target Rating Points)","Audience delivery among your specific target demographic"],
              ["Reach","The percentage of the total audience who saw your ad at least once"],
              ["Frequency","The average number of times your target audience saw your ad"],
              ["CPT (Cost Per Thousand)","How much you pay per 1,000 viewers reached"],
            ].map(([t,d],i)=>(
              <li key={i} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>{t}</strong> — {d}</span></li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">A professional media buying agency plans TV campaigns using LMRB data to ensure your budget reaches the right audience at the lowest cost per target viewer.</p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">Prime Time Programming: When to Advertise on Sri Lankan TV</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-heading">Time Slot</th>
                  <th className="text-left p-3 font-heading">Programme Type</th>
                  <th className="text-left p-3 font-heading">Audience</th>
                  <th className="text-left p-3 font-heading">Strategy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6:00 AM – 9:00 AM","Morning news, breakfast shows","Working adults, commuters","Brand recall, news association"],
                  ["12:00 PM – 2:00 PM","Afternoon dramas, news","Homemakers, older viewers","FMCG, household products"],
                  ["5:00 PM – 7:00 PM","Evening dramas, children's","Families, children","Family products, children's brands"],
                  ["7:00 PM – 10:30 PM","Prime time drama, news","All demographics — peak","Maximum reach campaigns"],
                  ["10:30 PM – 12:00 AM","Late news, talk shows","Urban adults 25–45","Premium brands, financial services"],
                ].map((row,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3 text-muted-foreground">{row[1]}</td>
                    <td className="p-3 text-muted-foreground">{row[2]}</td>
                    <td className="p-3 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">When Should Your Business Advertise on TV?</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">TV advertising in Sri Lanka is most effective for:</p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              ["FMCG brands","Reaching householders making daily purchase decisions"],
              ["Telecom & banking","Mass awareness campaigns for new products or offers"],
              ["Automotive","New model launches and dealership campaigns"],
              ["Real estate","Project launches requiring mass market awareness"],
              ["Political & government campaigns","Island-wide messaging"],
              ["Seasonal promotions","Avurudu, Christmas, Vesak, back-to-school"],
              ["Brand building","Establishing new brands or repositioning existing ones"],
              ["Retail chains","Promotional campaigns across multiple branches"],
            ].map(([t,d],i)=>(
              <li key={i} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>{t}</strong> — {d}</span></li>
            ))}
          </ul>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">TV Advertising vs Digital Advertising in Sri Lanka</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-3 font-heading">Factor</th>
                  <th className="text-left p-3 font-heading">TV Advertising</th>
                  <th className="text-left p-3 font-heading">Digital Advertising</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reach","Mass reach (millions per spot)","Targeted reach (scalable)"],
                  ["Targeting","Broad demographic segments","Precise — age, interest, behaviour, location"],
                  ["Minimum Budget","LKR 200,000+ per campaign","LKR 5,000+ per campaign"],
                  ["Production Cost","LKR 150,000–1,000,000+ for TVC","LKR 15,000–150,000 for video ad"],
                  ["Speed to Launch","2–4 weeks (production + booking)","24–48 hours"],
                  ["Measurability","GRP/TRP estimates","Real-time clicks, leads, conversions"],
                  ["Trust Factor","Very high (TV = credibility)","Medium–high (depends on platform)"],
                  ["Best For","Mass awareness, brand credibility","Lead generation, ROI measurement"],
                ].map((row,i)=>(
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-medium">{row[0]}</td>
                    <td className="p-3 text-muted-foreground">{row[1]}</td>
                    <td className="p-3 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            <strong>The winning strategy in Sri Lanka:</strong> Run <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline">TV</Link> for brand awareness and credibility, combined with <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook</Link> and <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads</Link> for lead generation and direct response. This integrated approach delivers the widest reach and the best measurable ROI.
          </p>

          <h3 className="font-heading text-2xl font-semibold mt-8 mb-3">How Cypher Digital Helps with <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline">TV</Link> & <Link to="/newspaper-advertising-sri-lanka" className="text-primary hover:underline">Newspaper Advertising</Link></h3>
          <p className="text-muted-foreground leading-relaxed mb-3">While Cypher Digital specialises in digital media buying, we help our clients navigate traditional media as well:</p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              ["TV & Newspaper Media Planning","We advise on the right channels, publications, and budgets for your campaign objectives"],
              ["TVC Creative Brief","We help develop the creative brief and messaging strategy for your TV commercial"],
              ["Integrated Campaign Strategy","We build full-funnel plans that combine TV or newspaper advertising with digital campaigns for maximum impact"],
              ["Media Partner Connections","We connect clients with trusted traditional media buying partners in Sri Lanka for TV and newspaper placements"],
              ["Performance Tracking","We set up digital tracking to measure how traditional advertising drives online behaviour (website visits, searches, social engagement)"],
            ].map(([t,d],i)=>(
              <li key={i} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span><strong>{t}</strong> — {d}</span></li>
            ))}
          </ul>

          <div className="mt-6 p-5 rounded-lg border border-primary/30 bg-primary/5">
            <p className="text-sm text-foreground"><strong>💡 Pro Tip from Cypher Digital:</strong> The most effective advertising campaigns in Sri Lanka in 2025 combine traditional media for reach and credibility with digital media for targeting and lead generation. A <Link to="/tv-advertising-sri-lanka" className="text-primary hover:underline font-semibold">TV spot</Link> on Hiru TV or Sirasa TV paired with a <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline font-semibold">Facebook retargeting campaign</Link> can deliver dramatically better results than either channel alone.</p>
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
          <h2 className="font-heading text-2xl font-bold mb-4">Related Advertising Guides &amp; Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/tv-advertising-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">TV Advertising in Sri Lanka</Link>
            <Link to="/newspaper-advertising-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Newspaper Advertising in Sri Lanka</Link>
            <Link to="/radio-advertising-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Radio Advertising in Sri Lanka</Link>
            <Link to="/advertising-in-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Advertising in Sri Lanka</Link>
            <Link to="/facebook-ads-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Facebook Advertising</Link>
            <Link to="/google-ads-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Google Ads</Link>
            <Link to="/tiktok-marketing-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">TikTok Marketing</Link>
            <Link to="/social-media-management-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Social Media Management</Link>
            <Link to="/influencer-marketing-sri-lanka" className="p-4 rounded-lg border border-border hover:border-primary transition-colors">Influencer Marketing</Link>
          </div>
        </section>

        <InquiryForm />
      </article>
    </>
  );
};

export default MediaBuyingAgencies;