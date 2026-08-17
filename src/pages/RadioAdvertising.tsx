import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Radio, Clock, Music } from "lucide-react";
import OurWorkSection from "@/components/OurWorkSection";

const sinhalaStations = [
  { name: "Sirasa FM", freq: "106.5", owner: "MBC Networks / Capital Maharaja Organisation", top: true, desc: "One of Sri Lanka's most established and highest-rated Sinhala FM stations, on air since 1994. Sirasa FM combines contemporary Sinhala hits, talk shows, and news — delivering a broad Sinhala-speaking audience across all age groups. Its News First programming gives it particular credibility with adults 25–55.", tags: ["Island-wide", "Adults 25–55", "News & Music", "Since 1994"] },
  { name: "Hiru FM", freq: "96.1", owner: "ABC Radio Networks / Rayynor Silva Holdings", top: true, desc: "Launched in 1998, Hiru FM is one of Sri Lanka's most popular Sinhala radio stations with island-wide coverage. The Hiru brand is synonymous with high-quality entertainment across both radio and TV. Particularly strong among family demographics and entertainment-focused listeners.", tags: ["Island-wide", "Family", "Entertainment", "Since 1998"] },
  { name: "Shaa FM", freq: "90.9", owner: "ABC Radio Networks", desc: "Shaa FM launched in 2002 as Sri Lanka's first-ever youth-focused Sinhala radio station. The name means \"wow\" in Sinhala. Particularly popular among the 15–30 age group — the go-to station for brands targeting younger Sinhala-speaking consumers.", tags: ["Island-wide", "Youth 15–30", "Contemporary", "Since 2002"] },
  { name: "FM Derana", freq: "—", owner: "Capital Maharaja Organisation", desc: "FM Derana is the radio extension of the Derana media brand — one of Sri Lanka's most trusted news and entertainment brands. Strong in news-oriented, urban adult demographics. Effective for cross-media campaigns alongside TV Derana and Ada Derana digital.", tags: ["Island-wide", "Urban Adults", "News Audience"] },
  { name: "Gold FM", freq: "—", owner: "ABC Radio Networks", desc: "Gold FM targets an older Sinhala-speaking demographic with classic and nostalgic music programming. Effective for brands targeting adults 35+ — FMCG household products, health, banking and insurance, and traditional Sri Lankan consumer goods.", tags: ["Adults 35+", "Classic Music", "Traditional"] },
  { name: "Neth FM", freq: "—", owner: "SLBC (State)", desc: "Neth FM is the Sinhala commercial service of the state broadcaster SLBC. Significant reach in rural and regional areas not fully covered by commercial private stations. Useful for campaigns requiring maximum geographic coverage of Sinhala-speaking population.", tags: ["State", "Rural & Regional", "National Coverage"] },
];

const englishStations = [
  { name: "Yes FM", freq: "100.8", owner: "MBC Networks / Capital Maharaja Organisation", desc: "Sri Lanka's premier English-language FM station, on air since 1993. Plays contemporary international hits and targets urban, English-speaking Sri Lankans — particularly professionals, students, and youth aged 16–40 in Colombo and major cities. The go-to station for premium brands targeting the English-speaking middle and upper-middle class.", tags: ["English", "Urban 16–40", "Professionals", "Since 1993"] },
  { name: "Y FM", freq: "—", owner: "MBC Networks", desc: "Y FM is a contemporary English and bilingual station targeting Sri Lanka's younger demographic, particularly Gen Z listeners aged 15–28. EDM, pop and youth-oriented content — effective for lifestyle brands, tech, fashion, F&B and entertainment.", tags: ["English", "Gen Z", "Youth 15–28", "EDM & Pop"] },
];

const tamilStations = [
  { name: "Shakthi FM", freq: "103.9", owner: "MBC Networks / Capital Maharaja Organisation", desc: "Sri Lanka's leading Tamil-language FM station, on air since 1998. Broadcasts island-wide including the Jaffna Peninsula and North-Eastern Province. Top choice for any brand targeting Tamil consumers across the Northern, Eastern, and Up-Country regions, as well as Tamil communities in Colombo.", tags: ["Tamil", "Island-wide", "Northern & Eastern SL", "Since 1998"] },
  { name: "Sooriyan FM", freq: "—", owner: "ABC Radio Networks", desc: "Sooriyan FM is a Tamil-language station from ABC Radio Networks (same group as Hiru FM). Effective complement to Shakthi FM for Tamil-language campaign coverage. Strong for FMCG, household products, and consumer goods targeting Tamil-speaking families.", tags: ["Tamil", "Island-wide", "Family audience"] },
  { name: "Vasantham FM", freq: "105.6", owner: "SLBC (State)", desc: "Vasantham FM is the Tamil commercial service of the state broadcaster SLBC. Broad national coverage for Tamil-speaking audiences, particularly in provincial areas. Useful for campaigns requiring island-wide Tamil coverage at competitive rates.", tags: ["Tamil", "State", "National Coverage"] },
];

const dayparts = [
  { time: "6:00 – 10:00 AM", name: "Morning Drive — PEAK", desc: "Commuters, professionals, students. The highest-rated radio period of the day. Captive audience that cannot skip ads. Top stations command their highest rates here.", rate: "LKR +++", tier: "prime" },
  { time: "10:00 AM – 12:00 PM", name: "Mid-Morning", desc: "Homemakers, remote workers, small business owners. Good for household products, FMCG, and local business advertising.", rate: "LKR ++", tier: "good" },
  { time: "12:00 – 3:00 PM", name: "Afternoon", desc: "Lower listenership across most stations. Cost-effective for frequency-building campaigns on a budget.", rate: "LKR +", tier: "low" },
  { time: "4:00 – 7:00 PM", name: "Evening Drive — HIGH REACH", desc: "Second peak — professionals and workers returning home. Strong for retail promotions, event ads, and time-sensitive offers.", rate: "LKR +++", tier: "prime" },
  { time: "7:00 – 10:00 PM", name: "Evening", desc: "Home listeners, families, youth. Music-heavy programming. Good for brand campaigns at mid-range rates.", rate: "LKR ++", tier: "good" },
  { time: "10:00 PM – 6:00 AM", name: "Late Night / Overnight", desc: "Lowest listenership. Lowest rates. Useful for building raw frequency on a tight budget.", rate: "LKR (low)", tier: "low" },
];

const rates = [
  ["Sirasa FM", "LKR 40,000 – 80,000", "LKR 35,000 – 70,000", "LKR 10,000 – 30,000", "Sinhala mass market"],
  ["Hiru FM", "LKR 40,000 – 80,000", "LKR 35,000 – 65,000", "LKR 10,000 – 28,000", "Sinhala family/entertainment"],
  ["Yes FM", "LKR 30,000 – 60,000", "LKR 25,000 – 50,000", "LKR 8,000 – 22,000", "English urban professionals"],
  ["Shaa FM", "LKR 25,000 – 55,000", "LKR 20,000 – 45,000", "LKR 7,000 – 20,000", "Sinhala youth 15–30"],
  ["Shakthi FM", "LKR 25,000 – 55,000", "LKR 20,000 – 45,000", "LKR 7,000 – 20,000", "Tamil island-wide"],
  ["FM Derana", "LKR 25,000 – 55,000", "LKR 20,000 – 45,000", "LKR 7,000 – 18,000", "Sinhala urban adults"],
  ["Gold FM", "LKR 15,000 – 35,000", "LKR 12,000 – 28,000", "LKR 5,000 – 14,000", "Sinhala adults 35+"],
  ["Neth FM (SLBC)", "LKR 10,000 – 25,000", "LKR 8,000 – 20,000", "LKR 3,000 – 10,000", "Rural & regional Sinhala"],
  ["Sooriyan FM", "LKR 15,000 – 35,000", "LKR 12,000 – 28,000", "LKR 4,000 – 14,000", "Tamil family audience"],
];

const production = [
  ["Basic Voice-over Ad", "LKR 15,000 – 40,000", "Script, professional voice-over, basic sound effects, mixing"],
  ["Standard Jingle", "LKR 30,000 – 80,000", "Original music composition, lyrics, singer, recording, mixing"],
  ["Premium Jingle", "LKR 80,000 – 150,000", "Full arrangement, professional studio, multiple vocalists, mastering"],
  ["Multi-language Ad", "LKR 40,000 – 120,000", "Same script recorded in Sinhala + Tamil + English with separate voice-overs"],
  ["Full Campaign Package", "LKR 80,000 – 250,000", "Multiple ad versions: 15s + 30s + 60s, full production suite"],
];

const formats = [
  { icon: "🎙️", name: "Standard Spot", dur: "30 seconds", desc: "The industry workhorse. Enough time for a strong message, key selling point, and clear call to action. Most cost-effective format for frequency campaigns." },
  { icon: "🎵", name: "Jingle Ad", dur: "30 – 60 seconds", desc: "A branded song or musical sting. Highly effective for brand recall in Sri Lanka's music-loving culture. Jingles are remembered long after the campaign ends." },
  { icon: "⚡", name: "Short Spot", dur: "15 seconds", desc: "Brief and punchy. Best for brand reminders, jingle repeats, or single-message ads. Lower cost allows high frequency." },
  { icon: "📖", name: "Long-form Spot", dur: "60 seconds", desc: "Extended storytelling. Useful for complex products, promotions with multiple components, or emotional narratives." },
  { icon: "🎤", name: "Live Read / Endorsement", dur: "30 – 90 seconds", desc: "A DJ or presenter reads your message live or records it in their own voice. Highly trusted by listeners — sounds like a personal recommendation. Premium format." },
  { icon: "🏆", name: "Programme Sponsorship", dur: "Ongoing", desc: "Sponsor a specific show — morning drive, news, or music countdown. \"Brought to you by\" brand association for sustained campaigns." },
  { icon: "🎁", name: "Competition / Promo", dur: "Ongoing", desc: "Branded listener competitions, giveaways, or promotions run through a station. Drives high engagement and word-of-mouth." },
  { icon: "📡", name: "Roadblock", dur: "One time slot", desc: "Running the same ad across multiple stations simultaneously at the same time. Maximum reach for product launches, sale openings, event announcements." },
];

const compare = [
  ["Reach", "Mass — millions of listeners per day island-wide", "Scalable — targeted reach from thousands to millions"],
  ["Targeting", "By station language, format, daypart, region", "Precise — age, location, income, interests, behaviour"],
  ["Minimum Budget", "LKR 50,000+ for a meaningful campaign", "LKR 5,000+ — scales from any starting point"],
  ["Production Cost", "LKR 15,000–150,000 for voice-over or jingle", "LKR 5,000–100,000 for digital ad creative"],
  ["Commuter Reach", "Excellent — radio is the commuter medium", "Limited — commuters can't view screen ads while driving"],
  ["Speed to Launch", "3–10 days (production + booking)", "24–48 hours from brief to live"],
  ["Measurability", "Audience estimates — no click-level data", "Real-time clicks, leads, conversions, ROAS"],
  ["Brand Recall", "Very high with jingles — audio memory is powerful", "Medium — depends on creative quality and frequency"],
  ["Skip Rate", "Zero — listeners cannot skip radio ads", "High — YouTube and social ads are frequently skipped"],
  ["Best For", "Mass reach, commuters, regional, brand recall, seasonal", "Lead generation, targeting, ROI measurement, e-commerce"],
];

const faqs = [
  { q: "How much does radio advertising cost in Sri Lanka?", a: "A 30-second spot during morning drive on major stations like Sirasa FM or Hiru FM costs approximately LKR 40,000–80,000. Off-peak slots on the same stations range from LKR 10,000–30,000. Smaller or state stations (Neth FM, Vasantham FM) are significantly cheaper. Jingle or voice-over production adds LKR 15,000–150,000. A basic campaign across 2–3 stations for 4 weeks starts from around LKR 200,000–300,000." },
  { q: "Which is the best radio station to advertise on in Sri Lanka?", a: "For Sinhala mass-market reach: Sirasa FM and Hiru FM. For English-speaking urban professionals: Yes FM. For Tamil-speaking audiences: Shakthi FM. For Sinhala youth: Shaa FM. Your choice should match your target demographic — a media agency can advise on the optimal combination." },
  { q: "What is the best time to advertise on Sri Lankan radio?", a: "Morning drive time (6:00–10:00 AM) is radio's prime time in Sri Lanka — the highest-rated period on all stations. The afternoon drive (4:00–7:00 PM) is the second peak. These slots command premium rates but deliver the largest and most attentive audiences." },
  { q: "What is a jingle and do I need one for radio advertising in Sri Lanka?", a: "A jingle is a short, catchy song or musical sting that carries your brand message. In Sri Lanka, jingles are highly effective — local consumer culture responds strongly to music-led advertising. Production typically costs LKR 30,000–150,000 and a quality jingle is a multi-year brand asset." },
  { q: "How long does it take to launch a radio campaign in Sri Lanka?", a: "If you already have a finished ad, a campaign can be on-air within 3–7 days. Script writing and voice-over production takes 3–7 days. Adding a jingle adds 7–14 days. Booking airtime typically requires 1–2 weeks for standard campaigns and 3–4 weeks for peak seasons like Avurudu and Christmas." },
  { q: "How many spots per day do I need for an effective radio campaign?", a: "Listeners need to hear an ad 3–7 times before it influences behaviour. For a 4-week campaign, running 2–4 spots per day per station across morning and evening drive times delivers sufficient frequency. High-frequency promotions may benefit from 5–8 spots per day for 1–2 weeks." },
  { q: "Can small businesses afford radio advertising in Sri Lanka?", a: "Yes. Off-peak spots on regional or state stations start from as low as LKR 3,000–10,000 per spot. A small business can run a meaningful local radio campaign for LKR 50,000–150,000 per month — far less than TV or major print." },
];

const StationCard = ({ s, accent }: { s: typeof sinhalaStations[number]; accent: string }) => (
  <div className={`relative bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 ${accent}`}>
    {s.freq !== "—" && <span className="absolute top-3 right-3 font-heading text-sm font-bold text-muted-foreground">{s.freq}</span>}
    <div className="font-heading text-xl font-bold mb-1">{s.name}</div>
    <div className="text-xs text-muted-foreground mb-3">{s.owner}</div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
    <div className="flex flex-wrap gap-1.5">
      {s.tags.map(t => <span key={t} className="text-[11px] font-semibold bg-secondary border border-border rounded px-2 py-0.5 text-muted-foreground">{t}</span>)}
    </div>
  </div>
);

const RadioAdvertising = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Radio Advertising in Sri Lanka — The Complete 2025 Guide",
    description: "A comprehensive guide to radio advertising in Sri Lanka covering all major FM stations, rates, ad formats, dayparts, jingle production and campaign strategy.",
    author: { "@type": "Organization", name: "Cypher Digital" },
    publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    url: "https://cypherdigital.lk/radio-advertising-sri-lanka",
    datePublished: "2025-01-01",
    dateModified: "2025-07-01",
  };

  return (
    <>
      <SEOHead
        title="Radio Advertising in Sri Lanka — Complete 2025 Guide | Cypher Digital"
        description="Complete guide to radio advertising in Sri Lanka. Rates, stations, formats, dayparts and jingle production for Sirasa FM, Hiru FM, Yes FM, Shakthi FM & more."
        canonical="https://cypherdigital.lk/radio-advertising-sri-lanka"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageBreadcrumb items={[
        { label: "Advertising in Sri Lanka", href: "/advertising-in-sri-lanka" },
        { label: "Radio Advertising Sri Lanka" },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5" /> Radio Advertising Guide 2025
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Radio Advertising in Sri Lanka — The Complete 2025 Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Stations, ad rates, dayparts, jingle production, formats and how to run a powerful radio campaign that reaches millions of Sri Lankan listeners — from <strong>Sirasa FM, Hiru FM, Yes FM</strong> to Shakthi FM, Shaa FM and more, by <strong>Cypher Digital</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20learn%20about%20radio%20advertising%20in%20Sri%20Lanka" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Get a Free Radio Media Plan
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#stations">See All FM Stations</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5">
          {[
            ["30+", "FM Stations"],
            ["3", "Languages (SI/EN/TA)"],
            ["6–10 AM", "Peak Morning Drive"],
            ["30s", "Standard Spot"],
            ["LKR 10K", "Entry Spot Rate"],
          ].map(([n, l]) => (
            <div key={l} className="py-6 px-4 text-center border-r border-white/15 last:border-r-0">
              <div className="font-heading text-xl md:text-2xl font-bold">{n}</div>
              <div className="text-[11px] uppercase tracking-wider opacity-80 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Overview</span>
          <h2 className="font-heading text-3xl font-bold mb-4">What Is Radio Advertising in Sri Lanka?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Radio advertising in Sri Lanka is the purchase of commercial airtime on FM radio stations to broadcast paid promotional messages to listeners. With over 30 active FM stations broadcasting in Sinhala, Tamil, and English, Sri Lanka's radio landscape reaches <strong className="text-foreground">millions of listeners</strong> daily — in their cars during commutes, at home, at work, and on mobile devices.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Radio is one of the most <strong className="text-foreground">cost-effective mass-reach media channels</strong> in Sri Lanka. Compared to TV, radio advertising requires a fraction of the production cost while still delivering significant audience reach, high frequency, and exceptional brand recall — especially through music-led jingles that are deeply embedded in Sri Lankan consumer culture.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">For brands targeting commuters, regional audiences, Sinhala or Tamil-speaking consumers, or seeking high-frequency brand reinforcement at affordable rates, radio remains a powerful and underutilised channel in Sri Lanka's media mix.</p>
          <div className="rounded-lg bg-foreground text-background p-5 text-sm">
            <strong className="text-primary">📻 Key Insight:</strong> Radio is the only medium that reaches consumers in their cars during commute hours — the highest-attention advertising window of the day. Morning drive time (6–10 AM) delivers a captive audience that cannot skip or scroll past your message.
          </div>
        </div>
      </section>

      {/* Stations */}
      <section id="stations" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Radio Stations</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Major FM Stations for Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8">Sri Lanka has a rich FM landscape. Here are the key stations, their audiences, and what makes them valuable for advertisers.</p>

          <h3 className="font-heading text-xl font-bold mb-4">📻 Sinhala Language Stations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {sinhalaStations.map(s => <StationCard key={s.name} s={s} accent="border-t-primary" />)}
          </div>

          <h3 className="font-heading text-xl font-bold mb-4">📻 English Language Stations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {englishStations.map(s => <StationCard key={s.name} s={s} accent="border-t-blue-600" />)}
          </div>

          <h3 className="font-heading text-xl font-bold mb-4">📻 Tamil Language Stations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tamilStations.map(s => <StationCard key={s.name} s={s} accent="border-t-green-600" />)}
          </div>
        </div>
      </section>

      {/* Dayparts */}
      <section id="dayparts" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Dayparts & Timing</span>
          <h2 className="font-heading text-3xl font-bold mb-4 flex items-center gap-2"><Clock className="w-7 h-7 text-primary" /> Best Times to Advertise on Radio in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8">Radio listening in Sri Lanka follows daily patterns tied to commute times, work schedules, and leisure hours. The time slot you choose — called a <strong className="text-foreground">daypart</strong> — has the biggest impact on both audience size and cost per spot.</p>
          <div className="space-y-3">
            {dayparts.map(d => (
              <div key={d.time} className={`grid grid-cols-1 md:grid-cols-[180px_1fr_120px] gap-4 md:items-center bg-card border border-border rounded-lg p-4 ${d.tier === "prime" ? "border-l-4 border-l-primary" : d.tier === "good" ? "border-l-4 border-l-amber-500" : ""}`}>
                <div className={`font-heading font-bold ${d.tier === "prime" ? "text-primary" : ""}`}>{d.time}</div>
                <div>
                  <div className="text-sm font-semibold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.desc}</div>
                </div>
                <div className={`text-right font-heading font-bold ${d.tier === "prime" ? "text-primary" : d.tier === "good" ? "text-amber-600" : "text-muted-foreground"}`}>{d.rate}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm mt-6">
            <strong>⏰ Strategy:</strong> For maximum reach, book the <strong>Morning Drive (6–10 AM)</strong> on 2–3 top stations simultaneously. For budget-conscious campaigns, combine one Morning Drive spot with multiple off-peak spots to build frequency without breaking the budget.
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Advertising Costs</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Radio Advertising Rates in Sri Lanka 2025</h2>
          <p className="text-muted-foreground mb-6">Rates below are estimated market ranges. A <Link to="/media-buying-agencies-sri-lanka" className="text-primary font-semibold hover:underline">media buying agency</Link> typically secures 20–35% below published rate cards, particularly for multi-station or multi-week packages.</p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Station</th>
                  <th className="px-4 py-3 text-left font-semibold">Morning Drive 30s</th>
                  <th className="px-4 py-3 text-left font-semibold">Evening Drive 30s</th>
                  <th className="px-4 py-3 text-left font-semibold">Off-Peak 30s</th>
                  <th className="px-4 py-3 text-left font-semibold">Audience</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-semibold">{r[1]}</td>
                    <td className="px-4 py-3 text-primary font-semibold">{r[2]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[3]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-2xl font-bold mt-10 mb-3">Radio Ad Production Costs in Sri Lanka</h3>
          <p className="text-muted-foreground mb-4">Beyond airtime, you need a professionally produced radio ad. Production quality directly affects listener engagement and brand recall.</p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Production Type</th>
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
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm my-6">
            <strong>💰 Budget Guidance:</strong> A basic radio campaign across 2–3 stations with 3 spots per day over 4 weeks requires approximately <strong>LKR 200,000 – 600,000</strong> in airtime. Add LKR 30,000–80,000 for a quality jingle or voice-over.
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Ad Formats</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Radio Ad Formats in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8">Sri Lankan radio stations offer several advertising formats beyond the standard spot. Choose the right format for your message, budget, and campaign goals.</p>
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

      {/* Jingles */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Jingles</span>
          <h2 className="font-heading text-3xl font-bold mb-4 flex items-center gap-2"><Music className="w-7 h-7 text-primary" /> The Power of Jingles in Sri Lankan Radio</h2>
          <p className="text-muted-foreground mb-4">In Sri Lanka's music-rich culture, <strong className="text-foreground">jingles are one of the most powerful advertising tools available</strong>. A well-crafted jingle attaches your brand name to a melody — and melodies are remembered far longer than any spoken message. Think of the Sri Lankan brands you can sing from memory — that's the power of a jingle.</p>
          <h3 className="font-heading text-xl font-bold mt-6 mb-3">Why Jingles Work So Well in Sri Lanka</h3>
          <ul className="space-y-2 text-muted-foreground">
            {[
              ["Music is culturally embedded", "Sri Lankan consumers across all demographics respond strongly to music-led communication."],
              ["Higher recall than voice-over ads", "Musical memory is processed differently in the brain — listeners remember jingles after a single hearing."],
              ["Works across language barriers", "A catchy melody with a simple brand name resonates across Sinhala, Tamil, and English listeners simultaneously."],
              ["Free frequency through humming", "Successful jingles are repeated by listeners in daily life — delivering free brand impressions."],
              ["Transfers across media", "A radio jingle can be adapted for TV ads, social media videos, and in-store audio."],
              ["Builds brand personality", "Tone, tempo, and style communicate your brand's character faster than any script."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">{t}</strong> — {d}</span></li>
            ))}
          </ul>
          <div className="rounded-lg bg-foreground text-background p-5 text-sm mt-6">
            <strong className="text-primary">🎵 Jingle Investment:</strong> A quality jingle is a long-term brand asset. Unlike airtime which is consumed and gone, a great jingle runs for years across radio, TV, digital, and events. Budget <strong className="text-primary">LKR 30,000–150,000</strong> for a professionally produced jingle and treat it as a multi-year marketing investment.
          </div>
        </div>
      </section>

      {/* When to use radio */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Strategy</span>
          <h2 className="font-heading text-3xl font-bold mb-4">When Should Your Business Advertise on Radio?</h2>
          <p className="text-muted-foreground mb-6">Radio advertising delivers the strongest returns in specific scenarios:</p>
          <ul className="space-y-2 text-muted-foreground">
            {[
              ["Reaching commuters", "Morning and evening drive slots deliver an unbeatable captive audience with no skip button."],
              ["High-frequency brand reinforcement", "Radio's affordability allows multiple spots per day, building brand recall through repetition."],
              ["Regional and provincial campaigns", "Sinhala and Tamil language stations reach audiences deep in rural and provincial Sri Lanka."],
              ["Seasonal & time-sensitive promotions", "Avurudu, Christmas, Vesak, back-to-school. Fast awareness at short notice for limited-time offers."],
              ["Retail and food & beverage", "QSRs, supermarkets, and retail chains use radio to drive in-store traffic with proximity timing."],
              ["Event promotion", "Concerts, exhibitions, product launches, and grand openings — radio generates buzz at affordable rates."],
              ["Local and regional businesses", "Reach a specific geographic audience at lower cost than island-wide stations."],
              ["Supporting TV and digital campaigns", "Radio reinforces TV and digital ads by reaching consumers in the car and at work."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">{t}</strong> — {d}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Radio vs Digital */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Comparison</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Radio Advertising vs Digital Advertising in Sri Lanka</h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">📻 Radio Advertising</th>
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
                  <td colSpan={3} className="px-4 py-3 text-center text-primary font-bold">Run radio for awareness + <Link to="/facebook-ads-sri-lanka" className="underline">Facebook Ads</Link> & <Link to="/google-ads-sri-lanka" className="underline">Google Ads</Link> for leads = Maximum ROI</td>
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
          <h2 className="font-heading text-3xl font-bold mb-4">How to Run a Radio Advertising Campaign in Sri Lanka</h2>
          {[
            ["Step 1 — Set Your Objective and Budget", "Define what you want to achieve — brand awareness, event promotion, retail traffic, seasonal offer, product launch — and set a realistic budget."],
            ["Step 2 — Choose Your Stations and Language", "Match your target audience to the right stations. Sinhala mass market → Sirasa FM or Hiru FM. English urban professionals → Yes FM. Tamil audiences → Shakthi FM. Youth → Shaa FM or Y FM."],
            ["Step 3 — Select Your Daypart", "Morning drive (6–10 AM) for maximum reach. Evening drive (4–7 PM) for secondary peak. Off-peak for frequency building on a budget."],
            ["Step 4 — Produce Your Radio Ad", "Write a concise, memorable script. For a 30-second spot, you have approximately 75 words. Lead with your brand name, state the key benefit, and end with a clear call to action."],
            ["Step 5 — Book Your Airtime", "Submit your booking to the station's advertising team. Provide your finished audio file in broadcast quality (WAV or MP3, 320kbps minimum). Book 1–2 weeks ahead for standard campaigns, 3–4 weeks for peak seasons."],
            ["Step 6 — Monitor and Optimise", "Track campaign impact through inbound call volumes, website traffic spikes, and in-store footfall. Combine with digital retargeting to capture listeners exposed to your radio ads."],
          ].map(([t, d]) => (
            <div key={t} className="mb-5">
              <h3 className="font-heading text-lg font-bold mb-1">{t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">FAQ</span>
          <h2 className="font-heading text-3xl font-bold mb-6">Frequently Asked Questions — Radio Advertising Sri Lanka</h2>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Hit the Airwaves?</h2>
          <p className="text-muted-foreground mb-8">Get a free radio media plan from Cypher Digital — station recommendations, daypart strategy, estimated reach, and budget guidance tailored to your business goals.</p>
          <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
            <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20learn%20about%20radio%20advertising%20in%20Sri%20Lanka" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" /> Get a Free Radio Media Plan
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
          <p className="text-muted-foreground mb-6">Pair radio with TV, print and a professional media buyer for maximum reach and frequency.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/media-buying-agencies-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Media Buying Agencies in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Negotiate 20–35% below published radio rate cards through an experienced agency.</div>
            </Link>
            <Link to="/tv-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">TV Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">2025 rates, channel mix and prime-time strategy across all major TV stations.</div>
            </Link>
            <Link to="/newspaper-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Newspaper Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">English, Sinhala and Tamil publications — ad formats, premium positions and rates.</div>
            </Link>
            <Link to="/advertising-in-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Advertising in Sri Lanka — Complete Guide</div>
              <div className="text-sm text-muted-foreground">The pillar guide covering every paid channel, budgets and 2025 benchmarks.</div>
            </Link>
          </div>
        </div>
      </section>
      <OurWorkSection service="radio advertising" />
    </>
  );
};

export default RadioAdvertising;