import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Tv, Clock, BarChart3 } from "lucide-react";

const channels = [
  { name: "Hiru TV", owner: "Asia Broadcasting Corporation · Rayynor Silva Holdings", badge: "#1 Rated", top: true, desc: "Sri Lanka's first and only digital HD television channel. Hiru TV consistently ranks among the highest-rated channels for drama, news, and entertainment. Launched in 2012, it features DVB-T2 digital quality and covers all island. Commands exceptional viewer loyalty among Sinhala-speaking audiences aged 18–55.", tags: ["Sinhala", "HD Digital", "All Island", "Drama · News"] },
  { name: "Sirasa TV", owner: "Maharaja Entertainment / Capital Maharaja Organisation", badge: "High Reach", top: true, desc: "One of Sri Lanka's most established and trusted television brands. Known for popular drama serials, News First news programming, and lifestyle shows. Dominant among householders and family viewers — a top choice for FMCG and household brands.", tags: ["Sinhala", "Family", "News First", "Drama"] },
  { name: "TV Derana", owner: "Capital Maharaja Organisation", badge: "News #1", top: true, desc: "Wins SLIM-Nielsen Television Channel of the Year awards and holds the record for most programmes in the top 10 ratings. Ada Derana is Sri Lanka's #1 news brand. First Sri Lankan channel to reach 1 million YouTube subscribers. Best for news audiences and urban viewers.", tags: ["Sinhala", "Ada Derana News", "Urban", "YouTube reach"] },
  { name: "Swarnavahini", owner: "Associated Newspapers of Ceylon (ANCL)", desc: "One of Sri Lanka's oldest private channels with particularly strong viewership in rural and regional areas. Loyal base among traditional, family-oriented viewers outside the Western Province. Excellent value for regional Sri Lanka campaigns.", tags: ["Sinhala", "Regional", "Rural Reach"] },
  { name: "ITN", owner: "Independent Television Network (State)", desc: "The state broadcaster with the widest terrestrial transmission coverage in Sri Lanka. Essential for campaigns requiring maximum geographic coverage across all provinces. Also operates Vasantham TV, the primary Tamil-language state channel.", tags: ["Sinhala", "Max Coverage", "State"] },
  { name: "Rupavahini (SLRC)", owner: "Sri Lanka Rupavahini Corporation (State)", desc: "Sri Lanka's first television channel and the national broadcaster. Strong viewership among older demographics, rural audiences, and government sector workers. Includes Channel Eye (English), Nethra TV (Tamil), and NTV. Good value for mature audiences.", tags: ["Sinhala", "Older Demo", "Low Cost"] },
  { name: "Shakthi TV", owner: "Maharaja Entertainment", desc: "Sri Lanka's leading Tamil-language private television channel. The top choice for reaching Tamil-speaking audiences in Colombo, the Northern Province, Eastern Province, and the Up-Country region.", tags: ["Tamil", "Northern SL", "Eastern SL"] },
  { name: "Vasantham TV", owner: "Independent Television Network (State)", desc: "The dedicated Tamil-language television channel under the state ITN network. Serves Tamil-speaking audiences across Sri Lanka, particularly in state-served areas. A complement to Shakthi TV for wider provincial coverage.", tags: ["Tamil", "State", "Provincial"] },
  { name: "Siyatha TV", owner: "Voice of Asia Networks", desc: "A growing channel with increasing appeal among younger, urban viewers. Positioned as Sri Lanka's first and only 4K Ultra HD channel, attractive for premium brand campaigns seeking a quality visual environment.", tags: ["Sinhala", "4K UHD", "Youth"] },
];

const rates = [
  ["Hiru TV", "LKR 150,000 – 400,000", "LKR 50,000 – 150,000", "Mass Sinhala, all demographics"],
  ["Sirasa TV", "LKR 150,000 – 380,000", "LKR 50,000 – 140,000", "Family, householders, FMCG"],
  ["TV Derana", "LKR 140,000 – 380,000", "LKR 45,000 – 130,000", "Urban adults, news audience"],
  ["Swarnavahini", "LKR 100,000 – 280,000", "LKR 35,000 – 100,000", "Rural, regional Sri Lanka"],
  ["ITN", "LKR 80,000 – 220,000", "LKR 30,000 – 90,000", "Nationwide geographic coverage"],
  ["Rupavahini", "LKR 60,000 – 180,000", "LKR 25,000 – 80,000", "Older demographics, rural"],
  ["Shakthi TV", "LKR 80,000 – 220,000", "LKR 30,000 – 90,000", "Tamil-speaking consumers"],
  ["Vasantham TV", "LKR 50,000 – 150,000", "LKR 20,000 – 70,000", "Tamil audience, Northern/Eastern"],
  ["Siyatha TV", "LKR 60,000 – 180,000", "LKR 25,000 – 75,000", "Youth, urban, premium viewers"],
];

const production = [
  ["Basic TVC", "LKR 150,000 – 350,000", "Simple shoot, basic editing, voice-over, standard graphics"],
  ["Mid-Range TVC", "LKR 350,000 – 700,000", "Professional shoot, cast, locations, post-production, music"],
  ["High-End TVC", "LKR 700,000 – 2,000,000+", "Full production team, multiple locations, CGI, professional cast"],
  ["Animation / Motion", "LKR 200,000 – 800,000", "Fully animated or motion graphics TVC — no live shoot required"],
];

const formats = [
  { icon: "🎬", name: "Standard TVC", dur: "30 seconds", desc: "The main commercial spot. Industry standard for brand campaigns. Enough time for a strong message with visuals, dialogue, and CTA." },
  { icon: "⚡", name: "Short TVC", dur: "15 seconds", desc: "Condensed version of your main TVC. Used for frequency campaigns where the audience already knows your brand. Lower cost per spot." },
  { icon: "🎭", name: "Long-form TVC", dur: "45 – 60 seconds", desc: "Extended storytelling for premium brand narratives, emotional campaigns, or complex product explanations. Best for launch campaigns." },
  { icon: "🏷️", name: "Sponsorship Billboard", dur: "5 – 10 seconds", desc: '"Brought to you by" tag before or after a popular programme. Builds brand association with specific content.' },
  { icon: "🌟", name: "Programme Sponsorship", dur: "Ongoing", desc: "Exclusive or title sponsor of an entire programme or series. Deepest brand association possible." },
  { icon: "📜", name: "Scroll / Ticker Ad", dur: "Continuous", desc: "Text crawl at the bottom of the screen. Common on news channels. Low cost, good for announcements and event promotions." },
  { icon: "📺", name: "Infomercial", dur: "3 – 10 minutes", desc: "Long-form product demonstration in editorial style. Strong for direct response — viewers call or visit a website after watching." },
  { icon: "💻", name: "L-Band / Overlay", dur: "As agreed", desc: "Graphic overlay on the lower portion of the screen during a live programme. High visibility without interrupting content." },
];

const timeslots = [
  { time: "6:00 – 9:00 AM", label: "Morning — News & Breakfast Shows", desc: "Working adults, early risers. Good for brand recall and news association.", fill: 40, prime: false },
  { time: "12:00 – 2:00 PM", label: "Afternoon — Dramas & Midday News", desc: "Homemakers, older viewers. Strong for household products, FMCG, health.", fill: 50, prime: false },
  { time: "5:00 – 7:00 PM", label: "Early Evening — Children's & Family Dramas", desc: "Families returning home, children. Good for family brands, education, children's products.", fill: 65, prime: false },
  { time: "7:00 – 10:30 PM", label: "🔴 PRIME TIME — Peak Viewership", desc: "All demographics. Maximum reach. News, top dramas, reality shows. Highest rates, highest impact.", fill: 100, prime: true },
  { time: "8:00 – 9:30 PM", label: "🔴 Peak Drama Slot — Highest Ratings", desc: "The single most watched hour on Sri Lankan TV. Top drama serials air in this window. Most expensive slot on any channel.", fill: 100, prime: true },
  { time: "10:00 – 10:30 PM", label: "Late News — Premium News Audience", desc: "Urban adults aged 25–50. Decision-makers, professionals. Excellent for banking, finance, telecom, real estate.", fill: 75, prime: false },
  { time: "10:30 PM – 12:00 AM", label: "Late Night — Talk Shows & Movies", desc: "Urban adults, younger viewers. Lower rates with good quality audience for lifestyle and premium brands.", fill: 35, prime: false },
];

const lmrb = [
  ["GRP (Gross Rating Points)", "Total audience delivery across all your ad spots in a campaign", "Measures overall campaign weight and reach × frequency"],
  ["TRP (Target Rating Points)", "Audience delivery among your specific target demographic only", "Ensures your budget reaches the right people, not just everyone"],
  ["Reach", "% of the total audience who saw your ad at least once", "Measures how widely your campaign penetrated the target market"],
  ["Frequency", "Average number of times your target audience saw your ad", "Controls repetition — too low = poor recall; too high = wastage"],
  ["CPT (Cost Per Thousand)", "Cost to reach 1,000 viewers of your target audience", "The primary efficiency metric for comparing channels and slots"],
  ["CPRP (Cost Per Rating Point)", "Cost per 1% of the target audience reached", "Used by large advertisers to set budgets and validate spending"],
];

const compare = [
  ["Reach", "Mass reach — millions per spot island-wide", "Targeted reach — scalable from thousands to millions"],
  ["Targeting", "Broad demographic segments by channel & time slot", "Precise — age, location, interest, behaviour, income"],
  ["Minimum Budget", "LKR 500,000+ for a meaningful campaign", "LKR 5,000+ — scales to any size"],
  ["Production Cost", "LKR 150,000 – 2,000,000 for TVC", "LKR 15,000 – 150,000 for digital video ad"],
  ["Speed to Launch", "3–6 weeks (production + booking)", "24–48 hours from brief to live"],
  ["Measurability", "GRP/TRP estimates via LMRB", "Real-time clicks, leads, conversions, ROAS"],
  ["Trust Factor", "Very high — TV = credibility and legitimacy", "Medium — depends on platform and creative quality"],
  ["Best For", "Brand awareness, mass market launches, credibility", "Lead generation, ROI measurement, targeted campaigns"],
];

const industries = [
  ["FMCG / Consumer Goods", "Hiru, Sirasa, Swarnavahini", "Afternoon + Prime Time", "Awareness + promotion"],
  ["Telecom", "All major channels", "Prime Time", "Product launch + offers"],
  ["Banking & Finance", "Derana, Hiru, ITN", "Late News (10 PM)", "Brand + product campaigns"],
  ["Automotive", "Hiru, Sirasa, Derana", "Prime Time", "Launch + seasonal deals"],
  ["Real Estate", "Hiru, Sirasa, Derana", "Evening + Prime Time", "Project launch"],
  ["Education", "All channels + ITN", "Morning + Evening", "Intake campaigns"],
  ["Healthcare / Pharma", "Hiru, Sirasa, Rupavahini", "Afternoon + Evening", "OTC product awareness"],
  ["Retail Chains", "Hiru, Sirasa, Swarnavahini", "Prime Time", "Promotions + new outlets"],
  ["Tourism & Hospitality", "Hiru, Derana, Siyatha", "Evening + Prime Time", "Brand + seasonal"],
  ["Insurance", "Derana, Hiru, ITN", "Late News", "Trust + product campaigns"],
];

const faqs = [
  { q: "How much does TV advertising cost in Sri Lanka?", a: "A 30-second prime time spot on top channels like Hiru TV or Sirasa TV costs approximately LKR 150,000–400,000. Off-peak slots are LKR 50,000–150,000. TVC production costs an additional LKR 150,000–1,000,000+ depending on quality. A full campaign typically starts at LKR 500,000. A media agency can reduce airtime by 20–40% through negotiated rates." },
  { q: "Which is the best TV channel to advertise on in Sri Lanka?", a: "For Sinhala mass-market audiences, Hiru TV, Sirasa TV, and TV Derana are the top three. For news/business audiences, Ada Derana is #1. For Tamil audiences, Shakthi TV is the leading choice. For national geographic coverage on a budget, ITN and Rupavahini offer lower rates with solid reach." },
  { q: "What is prime time on Sri Lankan TV?", a: "Prime time in Sri Lanka is 7:00 PM to 10:30 PM. The peak within prime time is 8:00–9:30 PM, when top drama serials and news programmes air on all major channels simultaneously. Spots in this window command the highest rates but deliver the widest reach." },
  { q: "How long does it take to launch a TV advertising campaign in Sri Lanka?", a: "From brief to on-air, expect 3–6 weeks. TVC production takes 2–4 weeks. Channel booking and scheduling requires 1–2 additional weeks. For Avurudu, Christmas, or Vesak campaigns, book 6–8 weeks in advance." },
  { q: "What is LMRB and why does it matter?", a: "LMRB (Lanka Market Research Bureau) is Sri Lanka's primary television audience measurement organisation. Since 2004, it has operated the PeopleMeter system to track real-time viewership across channels and demographics. Advertisers use LMRB ratings to plan campaigns, calculate GRPs and TRPs, and validate that their media spend reached the intended audience." },
  { q: "Do I need a media buying agency for TV advertising in Sri Lanka?", a: "Not strictly required, but a media buying agency provides significant advantages: access to LMRB data, negotiated rates (20–40% below rate card), campaign planning expertise, scheduling management, and post-campaign reconciliation reports. For budgets above LKR 300,000, working with an agency typically pays for itself." },
  { q: "Can small businesses afford TV advertising in Sri Lanka?", a: "TV advertising requires meaningful budgets — a minimum of LKR 500,000 for a basic campaign. For small businesses, digital advertising (Facebook Ads, Google Ads) delivers better ROI at lower budgets. TV becomes viable once your digital campaigns are already generating returns and you're ready to scale awareness." },
  { q: "How do I measure if my TV advertising is working?", a: "Measure TV effectiveness through LMRB delivery reports, brand tracking studies, increases in branded Google searches after the campaign airs, website traffic spikes, and sales data compared to pre-campaign periods. Combining TV with digital retargeting allows you to track online conversions from viewers exposed to your TVC." },
];

const TvAdvertising = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TV Advertising in Sri Lanka — The Complete 2025 Guide",
    description: "Comprehensive guide to television advertising in Sri Lanka covering channels, costs, ad formats, prime time, and campaign strategy.",
    author: { "@type": "Organization", name: "Cypher Digital" },
    publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    url: "https://cypherdigital.lk/tv-advertising-sri-lanka",
    datePublished: "2025-01-01",
    dateModified: "2025-07-01",
  };

  return (
    <>
      <SEOHead
        title="TV Advertising in Sri Lanka — Complete 2025 Guide | Cypher Digital"
        description="Complete guide to TV advertising in Sri Lanka. Learn about Hiru TV, Sirasa, Derana ad rates, TVC formats, prime time slots, costs and how to run a successful TV campaign."
        canonical="https://cypherdigital.lk/tv-advertising-sri-lanka"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageBreadcrumb items={[
        { label: "Advertising in Sri Lanka", href: "/advertising-in-sri-lanka" },
        { label: "TV Advertising Sri Lanka" },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Tv className="w-3.5 h-3.5" /> Television Advertising Guide 2025
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            TV Advertising in Sri Lanka — The Complete 2025 Guide
          </h1>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Last updated: June 2025</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Television advertising in Sri Lanka remains one of the most powerful ways to reach mass audiences island-wide. Whether you are launching a new product, running a seasonal promotion or building brand awareness across Sinhala, Tamil and English speaking households, <strong>TV advertising in Sri Lanka</strong> delivers unmatched reach — particularly on <strong>Hiru TV, Sirasa TV and TV Derana</strong> during prime time. This complete 2025 guide by <strong>Cypher Digital</strong> covers channels, costs, ad formats, prime-time slots and LMRB ratings.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Looking for TV advertising companies in Sri Lanka? <Link to="/blog/tv-advertising-companies-sri-lanka" className="text-primary font-semibold hover:underline">See our full agency comparison guide →</Link>
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20learn%20about%20TV%20advertising%20in%20Sri%20Lanka" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Get a Free TV Media Plan
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#channels">Explore TV Channels</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
          {[
            ["20+", "Active TV Channels"],
            ["6M+", "Daily TV Viewers"],
            ["7–10:30", "Prime Time (PM)"],
            ["LMRB", "Audience Rating Body"],
          ].map(([n, l]) => (
            <div key={l} className="py-6 px-4 text-center border-r border-white/15 last:border-r-0">
              <div className="font-heading text-2xl md:text-3xl font-bold">{n}</div>
              <div className="text-[11px] uppercase tracking-wider opacity-80 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Overview</span>
          <h2 className="font-heading text-3xl font-bold mb-4">What Is TV Advertising in Sri Lanka?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Television advertising in Sri Lanka is the placement of paid commercial messages — known as TVCs (Television Commercials) — on broadcast TV channels to reach mass audiences across the island. It remains one of the most powerful media channels for building brand awareness, launching products, and reaching millions of Sri Lankan viewers simultaneously.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Sri Lanka has over 20 active television channels broadcasting in Sinhala, Tamil, and English. The industry relies on <strong className="text-foreground">LMRB (Lanka Market Research Bureau)</strong> ratings to measure viewership and guide media buying decisions. Advertisers pay per 30-second spot, with rates varying by channel, time slot, programme, and negotiated deal.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">For brands targeting the mass Sri Lankan consumer market, TV advertising delivers <strong className="text-foreground">unmatched reach, emotional impact, and brand credibility</strong> — particularly when combined with digital campaigns for lead generation and direct response.</p>
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm">
            <strong>💡 Pro Tip:</strong> The most effective campaigns in Sri Lanka combine TV advertising for mass awareness with <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook Ads</Link> and <Link to="/google-ads-sri-lanka" className="text-primary font-semibold hover:underline">Google Ads</Link> for targeted lead generation. Together they deliver dramatically better results than either channel alone.
          </div>
        </div>
      </section>

      {/* Channels */}
      <section id="channels" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">TV Channels</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Major TV Channels for Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8">Choosing the right channel is the foundation of any successful TV campaign. Here are the key channels, their audiences, and why they matter for advertisers.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map(c => (
              <div key={c.name} className={`relative bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-all hover:-translate-y-1 ${c.top ? "border-t-4 border-t-primary" : ""}`}>
                {c.badge && <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">{c.badge}</span>}
                <div className="font-heading text-xl font-bold mb-1">{c.name}</div>
                <div className="text-xs text-muted-foreground mb-3">{c.owner}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map(t => <span key={t} className="text-[11px] font-semibold bg-secondary border border-border rounded px-2 py-0.5 text-muted-foreground">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Advertising Costs</span>
          <h2 className="font-heading text-3xl font-bold mb-4">TV Advertising Rates in Sri Lanka 2025</h2>
          <p className="text-muted-foreground mb-6">TV advertising rates in Sri Lanka are negotiated directly with channels or through media buying agencies. The rates below represent estimated market ranges — a professional <Link to="/media-buying-agencies-sri-lanka" className="text-primary font-semibold hover:underline">media buying agency</Link> can typically negotiate 20–40% below published rate cards. For a full 2025 channel-by-channel breakdown with prime time vs off-peak comparison, see our dedicated <Link to="/blog/tv-advertising-rates-sri-lanka" className="text-primary font-semibold hover:underline">TV advertising rates Sri Lanka</Link> guide.</p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">TV Channel</th>
                  <th className="px-4 py-3 text-left font-semibold">Prime Time 30-sec</th>
                  <th className="px-4 py-3 text-left font-semibold">Off-Peak 30-sec</th>
                  <th className="px-4 py-3 text-left font-semibold">Best Audience</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-semibold">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm my-6">
            <strong>💰 Budget Tip:</strong> A basic TV campaign on 2–3 channels with 3 spots per day over 4 weeks typically requires a minimum budget of <strong>LKR 500,000 – 1,500,000</strong> in airtime, plus TVC production costs.
          </div>

          <h3 className="font-heading text-2xl font-bold mt-10 mb-3">TVC Production Costs in Sri Lanka</h3>
          <p className="text-muted-foreground mb-4">Beyond airtime, you need a professionally produced TVC. Production quality directly affects campaign performance — poor quality creatives undermine even the best media placement.</p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Production Level</th>
                  <th className="px-4 py-3 text-left font-semibold">Estimated Cost</th>
                  <th className="px-4 py-3 text-left font-semibold">What You Get</th>
                </tr>
              </thead>
              <tbody>
                {production.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-semibold">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Need a TVC? Our <Link to="/video-production-sri-lanka" className="text-primary font-semibold hover:underline">video production team in Sri Lanka</Link> produces broadcast-ready commercials at every budget tier.</p>
        </div>
      </section>

      {/* Formats */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Ad Formats</span>
          <h2 className="font-heading text-3xl font-bold mb-4">TV Ad Formats in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8">Sri Lankan TV channels offer a range of advertising formats beyond the standard commercial spot. Understanding these helps you choose the right format for your campaign objectives and budget.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {formats.map(f => (
              <div key={f.name} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="font-semibold">{f.name}</div>
                <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">{f.dur}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prime time */}
      <section id="primetime" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Time Slots</span>
          <h2 className="font-heading text-3xl font-bold mb-4 flex items-center gap-2"><Clock className="w-7 h-7 text-primary" /> When to Advertise — Sri Lankan TV Time Slots</h2>
          <p className="text-muted-foreground mb-8">TV viewership in Sri Lanka follows predictable patterns driven by work schedules, school hours, and programme schedules. Understanding peak viewing times helps you maximise audience reach per rupee spent.</p>
          <div className="space-y-3">
            {timeslots.map(t => (
              <div key={t.time} className={`grid grid-cols-1 md:grid-cols-[180px_1fr_100px] gap-4 md:items-center bg-card border border-border rounded-lg p-4 ${t.prime ? "border-l-4 border-l-primary" : ""}`}>
                <div className={`font-heading font-bold ${t.prime ? "text-primary" : ""}`}>{t.time}</div>
                <div>
                  <div className="text-sm font-semibold">{t.label}</div>
                  <div className="text-xs text-muted-foreground">{t.desc}</div>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${t.fill}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LMRB */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Audience Measurement</span>
          <h2 className="font-heading text-3xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="w-7 h-7 text-primary" /> Understanding LMRB Ratings in Sri Lanka</h2>
          <p className="text-muted-foreground mb-4">Sri Lanka's television advertising industry uses <strong className="text-foreground">LMRB (Lanka Market Research Bureau)</strong> audience ratings to measure TV viewership and guide media buying decisions. LMRB revolutionised TV audience measurement in Sri Lanka in 2004 by introducing the PeopleMeter system, which tracks what households are watching in real time.</p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-5 my-6 italic text-muted-foreground">
            "Sri Lanka's advertising market depends heavily on LMRB TV ratings to guide where advertising money is placed — with payments to channels by many large advertisers calculated and validated on a cost-per-rating-point (CPRP) basis."
            <div className="not-italic text-xs text-muted-foreground/80 mt-2">— Daily FT, Sri Lanka</div>
          </blockquote>
          <h3 className="font-heading text-xl font-bold mb-4">Key LMRB Metrics You Need to Know</h3>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Metric</th>
                  <th className="px-4 py-3 text-left font-semibold">What It Means</th>
                  <th className="px-4 py-3 text-left font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {lmrb.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">A professional media buying agency uses LMRB data to plan every TV campaign — selecting channels, time slots, and spot quantities that deliver the required GRPs at the lowest possible CPT. Without this data, you are guessing.</p>
        </div>
      </section>

      {/* When to use TV */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Strategy</span>
          <h2 className="font-heading text-3xl font-bold mb-4">When Should Your Business Advertise on TV?</h2>
          <p className="text-muted-foreground mb-6">TV advertising is not right for every business. Here's when it makes strategic sense for brands in Sri Lanka — and when digital alone is the smarter choice.</p>
          <h3 className="font-heading text-xl font-bold mb-3">✅ TV Advertising Works Best For</h3>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground mb-6">
            <li><strong className="text-foreground">FMCG brands</strong> — reaching householders making daily and weekly purchase decisions</li>
            <li><strong className="text-foreground">Telecom & banking</strong> — mass awareness for new products, offers, and brand repositioning</li>
            <li><strong className="text-foreground">Automotive dealerships</strong> — new model launches and seasonal promotions</li>
            <li><strong className="text-foreground">Real estate developers</strong> — project launches needing island-wide mass awareness</li>
            <li><strong className="text-foreground">Retail chains</strong> — promotional campaigns, price offers, and new branch openings</li>
            <li><strong className="text-foreground">Education institutions</strong> — annual intake campaigns during Jan–Mar and Aug–Sep</li>
            <li><strong className="text-foreground">Healthcare and pharmaceuticals</strong> — OTC products targeting mass consumer health awareness</li>
            <li><strong className="text-foreground">Avurudu, Christmas & Vesak campaigns</strong> — seasonal promotions during peak spending periods</li>
            <li><strong className="text-foreground">Brand building & repositioning</strong> — establishing or shifting brand perception at scale</li>
          </ul>
          <h3 className="font-heading text-xl font-bold mb-3">When Digital Is a Better Choice</h3>
          <p className="text-muted-foreground">For SMEs with budgets under LKR 300,000, startups testing product-market fit, and businesses needing immediate measurable ROI, <strong className="text-foreground">digital advertising via <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook Ads</Link> and <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads</Link></strong> typically delivers better returns.</p>
        </div>
      </section>

      {/* TV vs Digital */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Comparison</span>
          <h2 className="font-heading text-3xl font-bold mb-4">TV Advertising vs Digital Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">Understanding how TV and digital media complement each other helps you allocate budget effectively across your campaign.</p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">📺 TV Advertising</th>
                  <th className="px-4 py-3 text-left font-semibold">📱 Digital Advertising</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
                <tr className="bg-primary/10">
                  <td colSpan={3} className="px-4 py-3 text-center text-primary font-bold">Run TV for awareness + Digital for leads = Maximum ROI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to run a campaign */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Step-by-Step</span>
          <h2 className="font-heading text-3xl font-bold mb-4">How to Run a TV Advertising Campaign in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">Here is the step-by-step process for launching a successful TV advertising campaign, whether you manage it yourself or work with a media agency.</p>
          {[
            ["Step 1 — Define Your Campaign Objectives", "Are you building brand awareness, launching a product, promoting a seasonal offer, or driving direct response? Your objective determines your media strategy, budget allocation, and success metrics."],
            ["Step 2 — Identify Your Target Audience", "Define who you are trying to reach — language (Sinhala / Tamil / English), age range, gender, region, income level, and viewing habits. This determines which channels and time slots to choose."],
            ["Step 3 — Choose Your Channels and Time Slots", "Match your audience profile to the right channels. Use LMRB data to identify which channels over-index with your target demographic. Select time slots based on your objective."],
            ["Step 4 — Produce Your TVC", "Develop your TVC — script, cast, shoot, and post-production. A 30-second TVC should have a clear message in the first 5 seconds, a strong hook, and a clear call to action. For Sinhala audiences, local language and culturally relevant storytelling outperform translated English concepts."],
            ["Step 5 — Book Airtime", "Submit your booking to channel sales teams (directly or via a media agency). Book 2–3 weeks in advance for regular campaigns and 4–6 weeks ahead for peak seasons (Avurudu, Christmas, Vesak, back-to-school)."],
            ["Step 6 — Monitor and Measure", "Track performance through LMRB audience delivery reports, channel confirmation logs, and digital signals your TV campaign drives (branded search, traffic spikes, social mentions). Combine with digital retargeting to capture exposed viewers."],
          ].map(([t, d]) => (
            <div key={t} className="mb-5">
              <h3 className="font-heading text-lg font-bold mb-1">{t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm mt-6">
            <strong>🎯 Agency Advantage:</strong> A professional <Link to="/media-buying-agencies-sri-lanka" className="text-primary font-semibold hover:underline">media buying agency</Link> handles all channel negotiations, booking, scheduling, and post-campaign reconciliation — and typically secures 20–40% better rates than direct bookings.
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Industries</span>
          <h2 className="font-heading text-3xl font-bold mb-6">Top Industries Using TV Advertising in Sri Lanka</h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Industry</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Channels</th>
                  <th className="px-4 py-3 text-left font-semibold">Best Time Slot</th>
                  <th className="px-4 py-3 text-left font-semibold">Campaign Type</th>
                </tr>
              </thead>
              <tbody>
                {industries.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">FAQ</span>
          <h2 className="font-heading text-3xl font-bold mb-6">Frequently Asked Questions — TV Advertising Sri Lanka</h2>
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cypher Digital */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Why Cypher Digital</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Why Work With a TV Advertising Agency in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Planning and buying TV advertising in Sri Lanka without agency support means paying published rate card prices, without LMRB data to validate your channel selection, and without post-campaign reporting to confirm your spots actually aired as booked.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Working with Cypher Digital gives you:</p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li>• <strong className="text-foreground">Media planning backed by audience data</strong> — right channels, right time slots, right budget split</li>
            <li>• <strong className="text-foreground">Negotiated airtime rates</strong> across Hiru TV, Sirasa, Derana, Swarnavahini, ITN and Shakthi TV</li>
            <li>• <strong className="text-foreground">In-house TVC production</strong> from script to broadcast-ready delivery</li>
            <li>• <strong className="text-foreground">Integration with Facebook Ads and Google Ads</strong> to capture the demand your TV campaign creates</li>
            <li>• <strong className="text-foreground">Full post-campaign report</strong> showing spots aired, GRPs delivered and audience reached</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            For an agency comparison and how to brief one, read our guide to <Link to="/blog/tv-advertising-companies-sri-lanka" className="text-primary font-semibold hover:underline">TV advertising companies in Sri Lanka</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Advertise on TV in Sri Lanka?</h2>
          <p className="text-muted-foreground mb-8">Get a free media plan from Cypher Digital — including channel recommendations, time slot strategy, estimated reach, and budget guidance for your TV advertising campaign.</p>
          <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
            <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20TV%20media%20plan" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" /> Get a Free TV Media Plan
            </a>
          </Button>
          <div className="mt-6 text-sm text-muted-foreground">
            📞 <a href="tel:+94701772626" className="hover:text-primary" onClick={() => trackCallClick()}>+94 70 177 2626</a> · 📍 Colombo, Sri Lanka
          </div>
        </div>
      </section>

      {/* Related Advertising Guides */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Related Advertising Guides — Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">Plan a full-funnel campaign by combining TV with print, radio and professional media buying.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/media-buying-agencies-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Media Buying Agencies in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">How to choose the right agency to negotiate TV, print and radio rates on your behalf.</div>
            </Link>
            <Link to="/newspaper-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Newspaper Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Daily News, Lankadeepa, Thinakkural & more — 2025 rates and ad formats.</div>
            </Link>
            <Link to="/radio-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Radio Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Sirasa FM, Hiru FM, Yes FM, Shakthi FM — station mix and daypart strategy.</div>
            </Link>
            <Link to="/advertising-in-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Advertising in Sri Lanka — Complete Guide</div>
              <div className="text-sm text-muted-foreground">The pillar guide covering every paid channel, budgets and 2025 benchmarks.</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Amplify TV with Digital Services */}
      <OurWorkSection service="TV advertising" />
      <section className="py-14 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Amplify Your TV Campaign</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Pair TV Advertising with Our Digital Marketing Services</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">TV builds awareness — digital captures the demand. Combine your TV campaign with these Cypher Digital services for measurable ROI from every rupee spent on TV.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/social-media-management-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Social Media Management</div>
              <div className="text-sm text-muted-foreground">Re-target TV viewers on Facebook, Instagram & TikTok with the same creative.</div>
            </Link>
            <Link to="/facebook-ads-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Facebook Advertising</div>
              <div className="text-sm text-muted-foreground">Run lower-funnel conversion ads while your TVC drives top-of-mind awareness.</div>
            </Link>
            <Link to="/google-ads-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Google Ads</div>
              <div className="text-sm text-muted-foreground">Capture branded search spikes that always follow a strong TV campaign.</div>
            </Link>
            <Link to="/event-management-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Event Management</div>
              <div className="text-sm text-muted-foreground">Activate your TV campaign on-ground with launches and brand experiences.</div>
            </Link>
            <Link to="/seo-services-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">SEO Services</div>
              <div className="text-sm text-muted-foreground">Make sure your website ranks #1 when viewers search after seeing your TVC.</div>
            </Link>
            <Link to="/video-production-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Video Production</div>
              <div className="text-sm text-muted-foreground">Full TVC production — script, shoot, edit and broadcast-ready delivery.</div>
            </Link>
            <Link to="/tiktok-marketing-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">TikTok Marketing</div>
              <div className="text-sm text-muted-foreground">Cut your TVC into short-form TikTok content to reach Gen Z viewers.</div>
            </Link>
            <Link to="/influencer-marketing-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Influencer Marketing</div>
              <div className="text-sm text-muted-foreground">Partner with Sri Lankan influencers to amplify your TV campaign message.</div>
            </Link>
            <Link to="/instagram-marketing-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Instagram Marketing</div>
              <div className="text-sm text-muted-foreground">Build a strong Instagram presence so TV-driven traffic finds an active brand.</div>
            </Link>
            <Link to="/linkedin-marketing-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">LinkedIn Marketing</div>
              <div className="text-sm text-muted-foreground">B2B brands on TV — capture decision-makers via LinkedIn targeting.</div>
            </Link>
            <Link to="/graphic-design-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Graphic Design</div>
              <div className="text-sm text-muted-foreground">Keyframes, end-cards and matching print/social creative for your TVC.</div>
            </Link>
            <Link to="/media-buying-agencies-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Media Buying</div>
              <div className="text-sm text-muted-foreground">Negotiate TV slots, print and digital placements under one media plan.</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TvAdvertising;
