import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Newspaper, MessageCircle } from "lucide-react";

type Paper = { name: string; owner: string; freq: string; top?: boolean; lang: "English" | "Sinhala" | "Tamil"; desc: string; circ: string };

const english: Paper[] = [
  { name: "Daily Mirror", owner: "Wijeya Newspapers", freq: "Daily", top: true, lang: "English", desc: "One of Sri Lanka's most widely read English daily newspapers. Essential for reaching urban professionals, business owners, and educated consumers in Colombo and major cities. Positions your brand as credible and established among English-speaking audiences.", circ: "High circulation · Urban professionals · Colombo & cities" },
  { name: "The Sunday Times", owner: "Wijeya Newspapers", freq: "Sunday Only", top: true, lang: "English", desc: "Sri Lanka's highest-circulating English Sunday newspaper with over 330,000 readers. The flagship weekend property for English-speaking families and professionals. Sunday editions consistently outperform weekday papers in readership and engagement.", circ: "330,000+ circulation · Sunday · Families & professionals" },
  { name: "Daily FT", owner: "Wijeya Newspapers", freq: "Daily (Business)", lang: "English", desc: "Sri Lanka's only national business newspaper. The definitive channel for reaching CEOs, CFOs, investors, bankers, and corporate decision-makers. Essential for B2B brands, financial services, real estate developers, and senior business leadership.", circ: "Business audience · C-Suite · Investors · Finance" },
  { name: "The Island", owner: "Upali Newspapers", freq: "Daily", lang: "English", desc: "A well-established English daily with a loyal readership in Colombo, the Western Province, and among expatriates. Strong credibility and editorial depth — effective for institutional advertising, public notices, and professional services.", circ: "Loyal readership · Colombo · Professionals · Expats" },
  { name: "Sunday Observer", owner: "Lake House (ANCL) — State", freq: "Sunday", lang: "English", desc: "The state-owned Sunday Observer has nationwide distribution including deep regional penetration. Effective for government-related institutional advertising, public notices, and provincial coverage.", circ: "National distribution · State · Regional coverage" },
];

const sinhala: Paper[] = [
  { name: "Lankadeepa", owner: "Wijeya Newspapers", freq: "Daily", top: true, lang: "Sinhala", desc: "Sri Lanka's most widely read Sinhala daily, founded in 1991. Daily circulation over 285,000 and Sunday edition (Irida Lankadeepa) exceeds 580,000 — the single most powerful print advertising vehicle in Sri Lanka. SLIM-Kantar Most Popular Newspaper Award for 18 consecutive years. The #1 choice for any mass-market Sinhala campaign.", circ: "285,000 daily / 580,000 Sunday · 18× Award Winner" },
  { name: "Divaina", owner: "Lake House (ANCL) — State", freq: "Daily", top: true, lang: "Sinhala", desc: "A popular Sinhala daily from Lake House with strong readership across Colombo and regional cities. Loyal middle-class readership and particularly effective for audiences outside the Western Province. Sunday companion edition Silumina is among the most-read Sinhala weekend papers.", circ: "Strong regional reach · Middle-class · Provincial cities" },
  { name: "Silumina", owner: "Lake House (ANCL) — State", freq: "Sunday Only", lang: "Sinhala", desc: "The most widely read Sinhala Sunday newspaper from Lake House. Reaches a broad family audience across rural and regional Sri Lanka. Strong for mass-market household products, FMCG promotions, and Sinhala-speaking family demographics outside Colombo.", circ: "Mass Sunday readership · Rural · Family audience" },
  { name: "Mawbima", owner: "Capital Maharaja Organisation", freq: "Daily", lang: "Sinhala", desc: "The Sinhala daily from Capital Maharaja Organisation — the same group behind TV Derana and Sirasa TV. Strong brand association and read predominantly by Sinhala-speaking urban and semi-urban audiences. Effective complement to broadcast advertising on Sirasa or Derana.", circ: "Urban Sinhala readers · Maharaja Group · Colombo & suburbs" },
];

const tamil: Paper[] = [
  { name: "Virakesari", owner: "Virakesari Ltd", freq: "Daily", top: true, lang: "Tamil", desc: "Sri Lanka's most widely read and trusted Tamil daily. Essential for reaching Tamil-speaking audiences across the Northern Province, Eastern Province, Up-Country, and Tamil communities in Colombo. Founded in 1930 — one of the oldest continuously published newspapers in Sri Lanka.", circ: "Leading Tamil daily · Northern · Eastern · Up-Country SL" },
  { name: "Tamil Mirror", owner: "Wijeya Newspapers", freq: "Daily", lang: "Tamil", desc: "Sister publication of the Daily Mirror, targeting Tamil-speaking readers in Colombo and the Western Province. Provides access to the Tamil business and professional community in Colombo, complementing Virakesari for urban Tamil audience reach.", circ: "Tamil urban audience · Colombo · Professional community" },
  { name: "Uthayan", owner: "Uthayan Newspapers", freq: "Daily", lang: "Tamil", desc: "A Tamil daily published primarily in Jaffna and distributed across the Northern Province. Valuable for brands targeting Northern Province Tamil audiences in Jaffna, Kilinochchi, Mullaitivu, and surrounding areas.", circ: "Northern Province focus · Jaffna · Northern Tamil audience" },
];

const sizes = [
  { name: "Full Page", dim: "Broadsheet or Tabloid", note: "Maximum impact. Complete page coverage. Best for major launches, brand campaigns, and high-visibility promotions.", area: "h-40" },
  { name: "Half Page", dim: "Horizontal", note: "Strong visual presence at lower cost. Runs across the full width of the page. Popular for product launches and sales events.", area: "h-20" },
  { name: "Half Page", dim: "Vertical", note: "Tall column format. Shares the page with editorial content. Effective for service listings, directories, and brand presence.", area: "h-40 w-1/2" },
  { name: "Quarter Page", dim: "Postcard size", note: "Cost-effective entry point for display advertising. Ideal for regular promotions, contact-led ads, and SME campaigns.", area: "h-20 w-1/2" },
  { name: "Strip Ad", dim: "Horizontal banner", note: "Runs across the full width at the top or bottom of a page. Great for offers, telephone numbers, and brand reminders.", area: "h-8" },
  { name: "Front Page Wrap", dim: "Jacket / Gatefold", note: "Wraps around the entire front and back page. Premium format for maximum visibility. Commands 2–4× standard full-page rates.", area: "h-40 border-4" },
];

const otherFormats = [
  ["Classified Ad", "Text-only small ads charged by word or line. Usually in dedicated classified sections", "Jobs, property listings, vehicle sales, personal notices"],
  ["Classified Display", "Small display ad within classified sections — allows logo, box borders, and basic graphics", "Recruitment, property, services — more visual than text classified"],
  ["Advertorial", "Paid editorial-style article designed to look like news content. Marked 'advertisement'", "Brand story-telling, product education, trust-building campaigns"],
  ["Obituary / Notice", "Dedicated notice sections for death announcements, public notices, legal notifications", "Legal compliance, public announcements, obituaries"],
  ["Supplement / Insert", "Printed flyer or brochure inserted loose into the newspaper", "Retail catalogues, property brochures, event programmes"],
  ["Full Colour Display", "Full-colour display ads on any page — premium over black-and-white", "Product campaigns, lifestyle brands, high-quality brand imagery"],
  ["Front Page Strip", "A strip ad on the front page itself — below the masthead or at the foot of the page", "Maximum visibility and credibility for any campaign"],
];

const ratesEN = [
  ["Daily Mirror", "LKR 250,000 – 500,000", "LKR 120,000 – 250,000", "LKR 65,000 – 130,000", "Weekday"],
  ["Sunday Times", "LKR 400,000 – 750,000", "LKR 200,000 – 375,000", "LKR 100,000 – 185,000", "Sunday"],
  ["Daily FT", "LKR 200,000 – 400,000", "LKR 100,000 – 200,000", "LKR 55,000 – 105,000", "Weekday"],
  ["The Island", "LKR 180,000 – 350,000", "LKR 90,000 – 175,000", "LKR 50,000 – 90,000", "Weekday"],
  ["Sunday Observer", "LKR 150,000 – 300,000", "LKR 75,000 – 150,000", "LKR 40,000 – 80,000", "Sunday"],
];
const ratesSI = [
  ["Lankadeepa (Daily)", "LKR 300,000 – 600,000", "LKR 150,000 – 300,000", "LKR 75,000 – 150,000", "Weekday"],
  ["Irida Lankadeepa", "LKR 500,000 – 900,000", "LKR 250,000 – 450,000", "LKR 125,000 – 225,000", "Sunday"],
  ["Divaina", "LKR 250,000 – 500,000", "LKR 125,000 – 250,000", "LKR 65,000 – 125,000", "Weekday"],
  ["Silumina", "LKR 300,000 – 550,000", "LKR 150,000 – 275,000", "LKR 75,000 – 135,000", "Sunday"],
  ["Mawbima", "LKR 200,000 – 400,000", "LKR 100,000 – 200,000", "LKR 55,000 – 105,000", "Weekday"],
];
const ratesTA = [
  ["Virakesari", "LKR 150,000 – 350,000", "LKR 80,000 – 175,000", "LKR 45,000 – 90,000", "National Tamil audience"],
  ["Tamil Mirror", "LKR 120,000 – 250,000", "LKR 60,000 – 125,000", "LKR 35,000 – 65,000", "Colombo Tamil audience"],
  ["Uthayan", "LKR 80,000 – 180,000", "LKR 40,000 – 90,000", "LKR 25,000 – 50,000", "Northern Province Tamil"],
];

const premium = [
  ["Front Page Strip / Jacket", "100 – 300% premium", "Every reader sees it. Maximum brand visibility and credibility. The most coveted print position in Sri Lanka."],
  ["Back Page", "50 – 100% premium", "High visibility — often the second page readers look at. Strong for retail, FMCG, and direct response ads."],
  ["Page 3 (Inside Front)", "30 – 60% premium", "One of the first pages readers turn to. High readership and engagement for news-adjacent content."],
  ["Full Colour (vs B&W)", "25 – 50% premium", "Colour ads stand out dramatically in print. Significantly higher recall than black-and-white."],
  ["Classified Prime (Top of Section)", "15 – 30% premium", "First ad seen in classified sections. Higher response rates for recruitment, property, and services."],
  ["Sunday Edition", "30 – 60% premium", "Sunday readership is 2–3× higher than weekday. Readers have more time — ads receive more attention."],
  ["Opposite Editorial", "20 – 40% premium", "Ads placed opposite major editorial features benefit from editorial credibility and extended dwell time."],
];

const compare = [
  ["Trust & Credibility", "Very high — print = institutional credibility", "Medium — depends on platform and creative quality"],
  ["Reach", "High for specific publications — up to 580,000 per edition", "Scalable from targeted thousands to millions island-wide"],
  ["Targeting", "By language, publication, day, and section", "Precise — age, location, income, interests, behaviour"],
  ["Minimum Budget", "LKR 40,000+ for a basic classified/quarter-page", "LKR 5,000+ — scales to any size"],
  ["Shelf Life", "Long — newspapers are kept, re-read, and shared", "Short — ads disappear when campaign stops"],
  ["Measurability", "Circulation figures and reader surveys", "Real-time clicks, leads, conversions, ROI tracking"],
  ["Speed to Launch", "3–7 days (artwork submission to print date)", "24–48 hours from brief to live"],
  ["Best For", "Credibility, B2B, real estate, recruitment, legal, older demos", "Lead generation, e-commerce, youth, measurable ROI"],
];

const tips = [
  ["1. Match Language to Audience", "Sri Lanka's newspaper market is segmented by language. Sinhala newspapers deliver the widest mass-market reach. English papers target higher-income, urban decision-makers. Tamil papers are essential for Northern, Eastern, and Up-Country audiences. Running across all three languages ensures no demographic is missed."],
  ["2. Sunday Always Outperforms Weekday", "Sunday circulation in Sri Lanka is 2–3× higher than weekday editions. Irida Lankadeepa alone reaches 580,000 readers every Sunday — compared to 285,000 on weekdays. Schedule your most important ads for Sunday and complement with weekday insertions for frequency."],
  ["3. Front Page Positions Are Worth the Premium", "A strip ad or jacket on the front page costs 2–4× more than an inside page but delivers dramatically higher exposure. Every reader sees the front page; inside pages may never be reached by a significant portion of readers."],
  ["4. Full Colour Dramatically Increases Recall", "Full-colour ads stand out against predominantly black-and-white editorial content. Research consistently shows colour ads achieve significantly higher recall. If your budget allows only one upgrade, choose colour over size."],
  ["5. Advertorials Outperform Standard Display Ads", "A well-written advertorial receives significantly more reader attention than a display ad of the same size. Readers engage with articles — they read them in full, trust them more, and remember them longer."],
  ["6. Combine Print with Digital for Maximum Impact", "The most effective Sri Lankan campaigns run newspaper ads simultaneously with targeted Facebook and Google campaigns. Print builds credibility; digital captures the leads print generates. Without digital presence, you are losing those leads."],
  ["7. Book Early for Peak Seasons", "Avurudu (April), Christmas (December), Vesak (May), and school-year starts are highest-demand periods. Prime positions are booked weeks in advance. Submit 3–4 weeks ahead for regular periods and 5–6 weeks ahead for peak seasons."],
];

const steps = [
  ["Step 1 — Define Your Objective and Budget", "Determine what you want to achieve — brand awareness, product launch, recruitment, real estate, seasonal promotion — and set a realistic budget. This determines which publications, ad sizes, and positions are available to you."],
  ["Step 2 — Select Your Publications and Language", "Match audience to publications. Sinhala mass market → Lankadeepa. English business → Daily FT. Tamil → Virakesari. Family Sundays → Sunday Times or Irida Lankadeepa. For maximum coverage, run across multiple publications and languages."],
  ["Step 3 — Choose Your Ad Format and Position", "Select ad size, colour, and preferred position. Discuss availability and premium positions with the publication's advertising team or your media agency."],
  ["Step 4 — Design Your Ad Creative", "Prepare print-ready artwork to the publication's specs: 300 DPI, CMYK colour mode, correct dimensions with bleed/trim where required. Newspapers typically need artwork 5–7 days before publication."],
  ["Step 5 — Submit Booking and Artwork", "Submit your booking, confirm placement, and provide artwork by the paper's stated deadline. For peak seasons, confirm 3–5 weeks in advance to secure your preferred position."],
  ["Step 6 — Verify Publication and Follow Up", "Request a tearsheet (printed copy of the page your ad appeared on) as proof of publication. Track measurable response — calls, traffic, walk-ins — to evaluate effectiveness."],
];

const faqs = [
  { q: "How much does newspaper advertising cost in Sri Lanka?", a: "A full-page ad in Lankadeepa (daily) costs approximately LKR 300,000–600,000. Irida Lankadeepa (Sunday) runs LKR 500,000–900,000 for a full page. Daily Mirror full-page ads range from LKR 250,000–500,000. Quarter-page ads start from around LKR 40,000–75,000 depending on publication and position. A media buying agency typically delivers 20–35% savings below rate card." },
  { q: "Which is the most widely read newspaper in Sri Lanka?", a: "Lankadeepa is Sri Lanka's most widely read Sinhala daily with over 285,000 daily circulation. Its Sunday edition, Irida Lankadeepa, exceeds 580,000 — the highest of any newspaper in the country. It has won the SLIM-Kantar Most Popular Newspaper Award for 18 consecutive years. For English readers, The Sunday Times leads with 330,000+ circulation." },
  { q: "Is newspaper advertising still effective in Sri Lanka?", a: "Yes. Print holds significant importance especially among older demographics, business decision-makers, and regional language audiences. Newspapers deliver high credibility, long shelf life, and are particularly effective for real estate, recruitment, legal notices, B2B brands, and regional campaigns. Combined with digital, print provides a credibility layer that lifts conversion across all channels." },
  { q: "What is the best newspaper to advertise in for reaching the widest audience?", a: "For widest Sinhala reach: Irida Lankadeepa (Sunday) at 580,000. For English: Sunday Times at 330,000+. For Tamil: Virakesari. For business decision-makers: Daily FT. The widest total reach comes from a combined multi-language Sunday campaign across Lankadeepa, Sunday Times, and Virakesari." },
  { q: "How far in advance do I need to book newspaper advertising in Sri Lanka?", a: "Regular campaigns: 1–2 weeks is typically sufficient. Peak seasons (Avurudu, Christmas, Vesak, school-year starts): book 3–5 weeks ahead. Premium positions (front page, back page, Sunday full pages): book 3–4 weeks ahead at any time of year." },
  { q: "What file format do newspapers in Sri Lanka require for ads?", a: "Most Sri Lankan newspapers require print-ready PDF at 300 DPI in CMYK colour mode. Correct dimensions with bleed and trim marks are needed for full-page and large-format ads. Submission deadlines are typically 5–7 days before publication." },
  { q: "Can a small business advertise in Sri Lankan newspapers?", a: "Yes. Classified and small quarter-page display ads in regional papers start from LKR 5,000–40,000. For SMEs, a classified display ad in Sunday editions of Lankadeepa or Sunday Times delivers strong results for recruitment, services, and product promotions. Combining a small print ad with an active digital campaign multiplies the effectiveness of both." },
  { q: "What types of newspaper ads are available in Sri Lanka?", a: "Display ads (full, half, quarter page, strip), classified text ads, classified display, advertorials, front-page jackets/wraps, supplements/inserts, and online versions of print ads on publication websites." },
];

const langClass = (l: Paper["lang"]) => ({
  English: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Sinhala: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Tamil: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
}[l]);

const PaperGrid = ({ papers }: { papers: Paper[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
    {papers.map(p => (
      <div key={p.name} className={`relative bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-all hover:-translate-y-1 ${p.top ? "border-t-4 border-t-primary" : ""}`}>
        <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${langClass(p.lang)}`}>{p.lang}</span>
        <div className="font-heading text-xl font-bold mb-1 pr-16">{p.name}</div>
        <div className="text-xs text-muted-foreground mb-1">{p.owner}</div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">{p.freq}</div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
        <div className="text-xs text-foreground font-semibold border-t border-border pt-3">{p.circ}</div>
      </div>
    ))}
  </div>
);

const RateTable = ({ rows, lastHeader }: { rows: string[][]; lastHeader: string }) => (
  <div className="overflow-x-auto border border-border rounded-lg mb-6">
    <table className="w-full text-sm">
      <thead className="bg-foreground text-background">
        <tr>
          <th className="px-4 py-3 text-left font-semibold">Publication</th>
          <th className="px-4 py-3 text-left font-semibold">Full Page</th>
          <th className="px-4 py-3 text-left font-semibold">Half Page</th>
          <th className="px-4 py-3 text-left font-semibold">Quarter Page</th>
          <th className="px-4 py-3 text-left font-semibold">{lastHeader}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
            <td className="px-4 py-3 font-semibold">{r[0]}</td>
            <td className="px-4 py-3 text-primary font-semibold">{r[1]}</td>
            <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
            <td className="px-4 py-3 text-muted-foreground">{r[3]}</td>
            <td className="px-4 py-3 text-muted-foreground">{r[4]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const NewspaperAdvertising = () => {
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
    headline: "Newspaper Advertising in Sri Lanka — The Complete 2025 Guide",
    description: "Comprehensive guide to print and newspaper advertising in Sri Lanka covering all major papers, costs, ad formats, and strategy.",
    author: { "@type": "Organization", name: "Cypher Digital" },
    publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    url: "https://cypherdigital.lk/newspaper-advertising-sri-lanka",
    datePublished: "2025-01-01",
    dateModified: "2025-07-01",
  };

  return (
    <>
      <SEOHead
        title="Newspaper Advertising in Sri Lanka — Complete 2025 Guide | Cypher Digital"
        description="Complete guide to newspaper advertising in Sri Lanka. Rates for Daily Mirror, Lankadeepa, Sunday Times, Virakesari & more. Ad formats, costs, tips & strategy."
        canonical="https://cypherdigital.lk/newspaper-advertising-sri-lanka"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageBreadcrumb items={[
        { label: "Advertising in Sri Lanka", href: "/advertising-in-sri-lanka" },
        { label: "Newspaper Advertising Sri Lanka" },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Newspaper className="w-3.5 h-3.5" /> Print Advertising Guide 2025
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Newspaper Advertising in Sri Lanka — The Complete 2025 Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Publications, rates, ad formats, circulation figures, tips and how to run a high-impact print campaign in Sri Lanka. Everything you need to plan and book newspaper advertising — from <strong>Lankadeepa, Daily Mirror and Sunday Times</strong> to Virakesari and Daily FT — by <strong>Cypher Digital</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20learn%20about%20newspaper%20advertising%20in%20Sri%20Lanka" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> Get a Free Print Media Plan
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#newspapers">Explore Newspapers</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5">
          {[
            ["15+", "Major Newspapers"],
            ["580K", "Sunday Lankadeepa Circ."],
            ["330K", "Sunday Times Circ."],
            ["3", "Languages (EN / SI / TA)"],
            ["18×", "Lankadeepa Award Wins"],
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
          <h2 className="font-heading text-3xl font-bold mb-4">What Is Newspaper Advertising in Sri Lanka?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Newspaper advertising in Sri Lanka is the placement of paid promotional messages — display ads, classifieds, advertorials, and wraps — within print publications. Despite the rise of digital media, <strong className="text-foreground">print advertising remains one of the most trusted and credible advertising channels</strong> in Sri Lanka, particularly for reaching business decision-makers, older demographics, regional audiences, and Tamil and Sinhala language communities.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Sri Lanka has a rich newspaper landscape with publications in all three official languages — Sinhala, Tamil, and English — reaching millions of readers across the island every day. Sunday editions, in particular, command significantly higher circulations and are among the most valuable advertising properties in the country.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">For brands seeking credibility, authority, and reach among established consumer segments, newspaper advertising remains a cornerstone of any integrated media strategy in Sri Lanka.</p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-5 italic text-muted-foreground">
            "Print media, including newspapers and magazines, still hold significant importance in Sri Lanka, especially among older demographics. Many businesses use print ads to convey detailed messages or reach niche markets, particularly in regional languages."
            <div className="not-italic text-xs text-muted-foreground/80 mt-2">— Advertising Landscape in Sri Lanka, 2025 Report</div>
          </blockquote>
        </div>
      </section>

      {/* Newspapers */}
      <section id="newspapers" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Publications</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Major Newspapers for Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8">Sri Lanka's newspaper market is divided across three language segments. Choosing the right publication is critical to reaching your target audience effectively.</p>

          <h3 className="font-heading text-2xl font-bold mb-4">📰 English Language Newspapers</h3>
          <PaperGrid papers={english} />

          <h3 className="font-heading text-2xl font-bold mb-4">📰 Sinhala Language Newspapers</h3>
          <PaperGrid papers={sinhala} />

          <h3 className="font-heading text-2xl font-bold mb-4">📰 Tamil Language Newspapers</h3>
          <PaperGrid papers={tamil} />
        </div>
      </section>

      {/* Ad Formats */}
      <section id="formats" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Ad Formats</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Newspaper Ad Formats & Sizes in Sri Lanka</h2>
          <p className="text-muted-foreground mb-8">Sri Lankan newspapers offer a range of advertising formats. Choosing the right format depends on your budget, message complexity, and how much visual impact you need.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {sizes.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5">
                <div className="bg-secondary/60 border border-dashed border-border rounded mb-4 p-3 h-32 flex items-center justify-center">
                  <div className={`bg-primary/30 border border-primary/60 rounded ${s.area} w-full`} />
                </div>
                <div className="font-heading text-lg font-bold">{s.name}</div>
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{s.dim}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-2xl font-bold mb-4">Other Key Newspaper Ad Formats</h3>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Format</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {otherFormats.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap">{r[0]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Advertising Costs</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Newspaper Advertising Rates in Sri Lanka 2025</h2>
          <p className="text-muted-foreground mb-6">Rates below are estimated market ranges for 2025. Actual rates vary by ad position, colour, day of week, and negotiated deals. Working with a <Link to="/media-buying-agencies-sri-lanka" className="text-primary font-semibold hover:underline">media buying agency</Link> typically secures 20–35% below published rate card prices.</p>

          <h3 className="font-heading text-xl font-bold mb-3">English Language Newspapers</h3>
          <RateTable rows={ratesEN} lastHeader="Edition" />

          <h3 className="font-heading text-xl font-bold mb-3">Sinhala Language Newspapers</h3>
          <RateTable rows={ratesSI} lastHeader="Edition" />

          <h3 className="font-heading text-xl font-bold mb-3">Tamil Language Newspapers</h3>
          <RateTable rows={ratesTA} lastHeader="Audience" />

          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm">
            <strong>💰 Rate Card Tip:</strong> Front page positions, back page, and Sunday editions command a <strong>30–100% premium</strong> over inside weekday rates. Full-colour ads cost more than B&W. A media buying agency can typically negotiate 20–35% below rate cards on multi-week campaigns.
          </div>

          <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 text-center">
            <h3 className="font-heading text-xl font-bold mb-2">Need Exact Newspaper Ad Rates?</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">Get a custom media plan with real-time rate cards, position availability, and 20–35% agency discounts for your campaign.</p>
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20exact%20newspaper%20advertising%20rates%20for%20my%20campaign" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" /> Get Exact Rates on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium positions */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Premium Placements</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Premium Positions in Sri Lankan Newspapers</h2>
          <p className="text-muted-foreground mb-6">Where your ad appears within a newspaper is just as important as which paper you choose. These positions command premium rates but deliver significantly higher readership and impact.</p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Position</th>
                  <th className="px-4 py-3 text-left font-semibold">Premium Over Standard</th>
                  <th className="px-4 py-3 text-left font-semibold">Why It Works</th>
                </tr>
              </thead>
              <tbody>
                {premium.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to advertise */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Strategy</span>
          <h2 className="font-heading text-3xl font-bold mb-4">When Should Your Business Advertise in Newspapers?</h2>
          <p className="text-muted-foreground mb-6">Newspaper advertising delivers the strongest returns when your business goals align with its particular strengths. Here's when it makes strategic sense:</p>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground mb-6">
            <li><strong className="text-foreground">Brand credibility building</strong> — when you want your business to appear established, trustworthy, and authoritative.</li>
            <li><strong className="text-foreground">Major product or service launches</strong> — full-page ads in Lankadeepa or Sunday Times create instant island-wide awareness.</li>
            <li><strong className="text-foreground">Real estate projects</strong> — property launches and housing schemes remain highly effective in print.</li>
            <li><strong className="text-foreground">Recruitment advertising</strong> — job ads still perform strongly in Sunday editions of Lankadeepa, Sunday Times, and Daily Mirror.</li>
            <li><strong className="text-foreground">Legal notices and public announcements</strong> — many notices are legally required to be published in print newspapers.</li>
            <li><strong className="text-foreground">B2B targeting</strong> — reaching decision-makers through Daily FT for corporate services, banking, and professional services.</li>
            <li><strong className="text-foreground">Seasonal campaigns</strong> — Avurudu, Christmas, Vesak, back-to-school — peak seasons for print.</li>
            <li><strong className="text-foreground">Regional and provincial campaigns</strong> — reaching audiences in the Northern, Eastern, and Central Provinces through Virakesari or Uthayan.</li>
            <li><strong className="text-foreground">Retail promotions</strong> — price-focused promotions and sale events in Sinhala-language papers targeting householders.</li>
            <li><strong className="text-foreground">Government and NGO campaigns</strong> — institutional credibility and public accountability are best served through print.</li>
          </ul>
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm">
            <strong>📅 Timing Tip:</strong> Peak newspaper advertising periods in Sri Lanka are <strong>January–February</strong> (new year, recruitment), <strong>March–April</strong> (Avurudu), <strong>May</strong> (Vesak), and <strong>November–December</strong> (Christmas and year-end). Book <strong>2–3 weeks in advance</strong> — prime positions sell out fast.
          </div>

          <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 text-center">
            <h3 className="font-heading text-xl font-bold mb-2">Not Sure Which Newspaper to Choose?</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">Our media team will match your audience, budget and goals to the right publications — free consultation.</p>
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20newspaper%20for%20my%20campaign" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" /> Ask Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Best Practices</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Tips for Effective Newspaper Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">Getting the most from your print advertising budget requires more than just booking space. Here are the practices that consistently deliver better results:</p>
          {tips.map(([t, d]) => (
            <div key={t} className="mb-5">
              <h3 className="font-heading text-lg font-bold mb-1">{t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}

          <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 text-center">
            <h3 className="font-heading text-xl font-bold mb-2">Want Better Results from Your Print Ads?</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">Get a free creative review and media plan — we design, book and track your newspaper campaign from start to finish.</p>
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20creative%20review%20and%20media%20plan%20for%20newspaper%20advertising" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" /> Get a Free Media Plan
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Print vs Digital */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Comparison</span>
          <h2 className="font-heading text-3xl font-bold mb-4">Newspaper Advertising vs Digital Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">Understanding the strengths of each channel helps you allocate budget effectively across your campaign.</p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">📰 Newspaper Advertising</th>
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
                  <td colSpan={3} className="px-4 py-3 text-center text-primary font-bold">Newspaper for credibility and reach + Digital for targeting and leads = best ROI</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-6">Pair print with <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook Ads</Link>, <Link to="/google-ads-sri-lanka" className="text-primary font-semibold hover:underline">Google Ads</Link>, and <Link to="/seo-services-sri-lanka" className="text-primary font-semibold hover:underline">SEO services in Sri Lanka</Link> for a fully integrated campaign.</p>

          <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 text-center">
            <h3 className="font-heading text-xl font-bold mb-2">Get the Best of Both — Print + Digital</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">We design integrated campaigns that use newspaper ads for credibility and digital ads for leads. Chat with our team today.</p>
            <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20an%20integrated%20print%20and%20digital%20campaign%20plan" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" /> Plan My Campaign on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="py-14 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary border border-border rounded px-2.5 py-1 mb-3">Step by Step</span>
          <h2 className="font-heading text-3xl font-bold mb-6">How to Book a Newspaper Ad in Sri Lanka</h2>
          {steps.map(([t, d]) => (
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
          <h2 className="font-heading text-3xl font-bold mb-6">Frequently Asked Questions — Newspaper Advertising Sri Lanka</h2>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Advertise in Sri Lankan Newspapers?</h2>
          <p className="text-muted-foreground mb-8">Get expert guidance on newspaper selection, ad formats, rates, and campaign strategy — free, from Cypher Digital's media team in Colombo.</p>
          <Button asChild size="lg" className="!bg-orange-500 hover:!bg-orange-600 !text-white !border-0">
            <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20print%20media%20plan" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" /> Get a Free Print Media Plan
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
          <p className="text-muted-foreground mb-6">Combine print with TV, radio and a professional media buyer for a full-funnel campaign.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/media-buying-agencies-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Media Buying Agencies in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">How agencies secure 20–35% below published newspaper rate cards.</div>
            </Link>
            <Link to="/tv-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">TV Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Hiru, Sirasa, Derana, ITN & more — 2025 rates and prime-time strategy.</div>
            </Link>
            <Link to="/radio-advertising-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Radio Advertising in Sri Lanka</div>
              <div className="text-sm text-muted-foreground">Station selection, daypart strategy and 2025 radio rate cards.</div>
            </Link>
            <Link to="/advertising-in-sri-lanka" className="block p-5 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="font-heading font-bold mb-1">Advertising in Sri Lanka — Complete Guide</div>
              <div className="text-sm text-muted-foreground">The pillar guide covering every paid channel, budgets and 2025 benchmarks.</div>
            </Link>
          </div>
        </div>
      </section>
      <OurWorkSection service="newspaper advertising" />
    </>
  );
};

export default NewspaperAdvertising;