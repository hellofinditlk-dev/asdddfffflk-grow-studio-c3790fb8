import { Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Card } from "@/components/ui/card";
import { Linkedin, Users, Target, Briefcase, Globe, TrendingUp, FileText, UserCheck, Rocket, BarChart3, Check, X } from "lucide-react";

const WA = "https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20know%20more%20about%20LinkedIn%20marketing%20in%20Sri%20Lanka";

const stats = [
  { icon: Users, num: "1.2M+", desc: "LinkedIn users in Sri Lanka — predominantly professionals aged 25–45" },
  { icon: Target, num: "277%", desc: "More B2B leads generated vs Facebook and Twitter combined" },
  { icon: Briefcase, num: "80%", desc: "Of LinkedIn members drive business decisions at their companies" },
  { icon: Globe, num: "900M+", desc: "Global LinkedIn users — reach international clients from Sri Lanka" },
  { icon: TrendingUp, num: "6×", desc: "Higher conversion rate for B2B leads from LinkedIn vs other channels" },
];

const services = [
  { icon: FileText, title: "LinkedIn Company Page Management", desc: "A professionally managed LinkedIn company page is the foundation of your B2B presence in Sri Lanka. We handle everything from content creation to community engagement.", items: ["Complete company page setup and optimisation", "Weekly thought leadership content and posts", "Industry insights, company news and culture content", "Document posts and PDF carousel creation", "Follower growth strategy and engagement management", "Monthly analytics reporting and strategy review"] },
  { icon: Target, title: "LinkedIn Advertising & Paid Campaigns", desc: "LinkedIn Ads allow you to reach Sri Lankan and international decision-makers with precision targeting that no other platform can match for B2B audiences.", items: ["Sponsored Content campaigns in the LinkedIn feed", "LinkedIn Lead Gen Forms — in-app lead capture", "Message Ads — direct inbox campaigns to prospects", "Dynamic Ads and Text Ads for brand awareness", "Audience building and campaign structure setup", "A/B testing, optimisation and monthly reporting"] },
  { icon: UserCheck, title: "Personal Profile & Executive Branding", desc: "Personal profiles of your CEO, directors and senior leaders consistently outperform company pages in reach and lead generation. We build and manage executive profiles that generate inbound enquiries.", items: ["LinkedIn profile optimisation for visibility and trust", "Weekly thought leadership posts from your executives", "Content ghostwriting in your voice and industry", "Connection growth strategy targeting decision-makers", "Engagement strategy to build industry authority", "Inbound DM management and lead qualification"] },
  { icon: Rocket, title: "LinkedIn Lead Generation Campaigns", desc: "LinkedIn Lead Gen Forms are the most effective B2B lead generation tool in Sri Lanka right now. We build campaigns that collect qualified leads directly within LinkedIn.", items: ["Lead Gen Form campaign strategy and setup", "Target audience research and persona building", "Lead magnet creation — white papers, guides, checklists", "CRM integration for immediate lead follow-up", "WhatsApp and email lead nurture sequence setup", "Cost-per-lead tracking and ongoing optimisation"] },
  { icon: Globe, title: "International Client Acquisition", desc: "LinkedIn is the most effective platform for Sri Lankan businesses targeting clients in the UK, Australia, Middle East, and Southeast Asia.", items: ["International audience targeting by country and industry", "Content strategy positioned for global credibility", "Case study and portfolio content for international buyers", "LinkedIn InMail outreach campaigns to target accounts", "Account-based marketing (ABM) strategy", "Conversion tracking from LinkedIn to enquiry"] },
  { icon: BarChart3, title: "LinkedIn Content Strategy & Creation", desc: "Consistent, expert content is what builds LinkedIn authority over time. We produce posts, articles, documents, and videos that position your brand as the go-to authority in your industry.", items: ["Monthly LinkedIn content calendar and strategy", "Long-form LinkedIn Article writing", "Document carousel creation (PDF posts)", "Video content strategy and script writing", "Industry commentary and trending topic posts", "Employee advocacy programme development"] },
];

const adFormats = [
  { n: "01", title: "Sponsored Content", desc: "Promoted posts that appear natively in the LinkedIn feed. Single image, video or carousel formats. Highest reach for Sri Lankan audiences.", tag: "Best for awareness" },
  { n: "02", title: "LinkedIn Lead Gen Forms", desc: "In-app forms pre-filled with the user's LinkedIn data. No landing page needed. The highest-converting LinkedIn ad format for B2B leads in Sri Lanka.", tag: "Best for leads" },
  { n: "03", title: "Message Ads (InMail)", desc: "Sponsored direct messages sent to targeted LinkedIn inboxes. ~50% open rates — ideal for event invitations, webinars and direct offers.", tag: "Best for outreach" },
  { n: "04", title: "Document Ads", desc: "Promoted PDF carousels users can read directly in the feed. Exceptional for thought leadership — whitepapers, guides and industry reports.", tag: "Best for authority" },
  { n: "05", title: "Dynamic Ads", desc: "Personalised ads that automatically insert the viewer's name and photo. Used for follower campaigns, job ads and spotlight campaigns.", tag: "Best for followers" },
  { n: "06", title: "Conversation Ads", desc: "Multi-choice message ads that allow prospects to interact with your campaign. Create personalised paths that guide prospects to the right offer.", tag: "Best for engagement" },
];

const industries = [
  { ico: "💻", title: "IT & Technology", desc: "Software companies, IT service providers, SaaS businesses and app developers targeting local and international corporate clients." },
  { ico: "⚖️", title: "Professional Services", desc: "Law firms, accounting firms, management consultants, HR consultancies and business advisory services in Sri Lanka." },
  { ico: "🏦", title: "Financial Services", desc: "Banks, insurance companies, investment firms and financial advisory businesses targeting corporate and high-net-worth clients." },
  { ico: "🎓", title: "Education & Training", desc: "Universities, professional training institutes and corporate learning providers targeting working professionals and HR teams." },
  { ico: "🏭", title: "Manufacturing & Export", desc: "Sri Lankan exporters and manufacturers looking to connect with international buyers, procurement managers and B2B customers." },
  { ico: "🏗️", title: "Construction & Engineering", desc: "Construction companies, engineering firms and project management businesses targeting corporate and government clients." },
  { ico: "🏥", title: "Healthcare & Pharma", desc: "Pharmaceutical companies, medical device suppliers and healthcare providers targeting doctors, hospitals and procurement teams." },
  { ico: "🌍", title: "BPO & Outsourcing", desc: "Sri Lankan BPO and outsourcing companies seeking international clients from the UK, Australia, Middle East and North America." },
];

const targeting = [
  { label: "Professional Identity", title: "Job Title & Function", desc: "Target by exact job title (CEO, CFO, Marketing Manager, IT Director) or by job function (Finance, Engineering, HR, Operations).", tags: ["CEO", "CFO", "IT Director", "HR Manager", "Marketing Head"] },
  { label: "Seniority & Experience", title: "Decision-Maker Levels", desc: "Target by seniority — from entry-level to C-suite. Reach only directors, VPs and owners who have authority to make decisions.", tags: ["Director", "VP Level", "C-Suite", "Owner", "Partner"] },
  { label: "Company Attributes", title: "Industry & Company Size", desc: "Target by industry vertical (Banking, Healthcare, Technology, Manufacturing) and company size — from SMEs to enterprise.", tags: ["Banking", "Technology", "Healthcare", "10,000+ employees"] },
  { label: "Geography", title: "Location Targeting", desc: "Target Sri Lanka nationally, specific cities like Colombo or Kandy, or international markets — UK, Australia, UAE, Singapore.", tags: ["Sri Lanka", "Colombo", "United Kingdom", "UAE", "Australia"] },
  { label: "Education & Skills", title: "Skills & Qualifications", desc: "Target professionals with specific skills, degrees or qualifications — ideal for recruitment, training providers and specialist services.", tags: ["MBA", "CIMA", "Project Management", "Digital Marketing"] },
  { label: "Retargeting", title: "Website & Engagement Retargeting", desc: "Retarget people who visited your website, watched your videos, engaged with your LinkedIn content or submitted a lead form.", tags: ["Website visitors", "Video viewers", "Lead form openers", "Company followers"] },
];

const process = [
  { n: 1, title: "Discovery & Audit", desc: "We audit your existing LinkedIn presence, analyse your competitors, and understand your ideal target audience — job titles, industries and geographies." },
  { n: 2, title: "Strategy Build", desc: "We create a custom LinkedIn strategy — content plan, ad campaign structure, targeting, budget allocation and KPIs aligned to your business goals." },
  { n: 3, title: "Profile & Page Setup", desc: "We optimise your company page and executive profiles, set up LinkedIn Campaign Manager, install the LinkedIn Insight Tag and build your audiences." },
  { n: 4, title: "Campaign Launch", desc: "We publish your first content posts, launch paid campaigns and begin active engagement on your company page and executive profiles." },
  { n: 5, title: "Optimise & Report", desc: "Weekly campaign monitoring and optimisation. Clear monthly reports showing leads generated, cost per lead, reach, follower growth and next steps." },
];

const pricing = [
  { name: "Starter", price: "LKR 45,000", note: "For businesses starting their LinkedIn presence in Sri Lanka.", feats: [["LinkedIn company page management", true], ["8 posts per month", true], ["Profile optimisation (1 executive)", true], ["LinkedIn Ads setup & management", true], ["Monthly analytics report", true], ["Up to LKR 30,000 ad spend managed", true], ["Lead Gen Form campaigns", false], ["Executive thought leadership", false]] as [string, boolean][], cta: "LinkedIn%20Starter%20package", featured: false },
  { name: "Growth", price: "LKR 85,000", note: "For businesses serious about B2B lead generation in Sri Lanka and internationally.", feats: [["Full company page management", true], ["16 posts/month + 2 LinkedIn Articles", true], ["Executive profile management (2 profiles)", true], ["LinkedIn Ads — Sponsored Content + Lead Gen", true], ["Lead Gen Form campaigns", true], ["Up to LKR 80,000 ad spend managed", true], ["Monthly leads report + CRM export", true], ["Competitor analysis quarterly", true]] as [string, boolean][], cta: "LinkedIn%20Growth%20package", featured: true },
  { name: "Pro", price: "LKR 150,000", note: "For companies targeting international clients with full LinkedIn presence management.", feats: [["Premium company page management", true], ["24 posts + 4 Articles + Document posts", true], ["Executive profiles (up to 5 leaders)", true], ["Full LinkedIn Ads suite — all formats", true], ["International audience targeting campaigns", true], ["Unlimited ad spend managed", true], ["Weekly performance reports", true], ["Account-based marketing (ABM) strategy", true]] as [string, boolean][], cta: "LinkedIn%20Pro%20package", featured: false },
];

const results = [
  { n: "340%", l: "Average increase in LinkedIn profile views within 90 days of management" },
  { n: "50–80", l: "Qualified B2B leads per month from LinkedIn Lead Gen Form campaigns" },
  { n: "4", l: "International client contracts won within 6 months for an IT company in Colombo" },
  { n: "3,400", l: "Target-market LinkedIn connections built for a B2B client's CEO profile in 6 months" },
];

const faqs = [
  { q: "How much does LinkedIn advertising cost in Sri Lanka?", a: "Management packages at Cypher Digital start from LKR 45,000/month. LinkedIn ad spend starts from approximately USD 300–500/month (LKR 90,000–150,000) for meaningful results, as LinkedIn has a minimum daily budget of USD 10 per campaign. LinkedIn CPCs are higher than Facebook, but lead quality is significantly better for B2B businesses." },
  { q: "Is LinkedIn marketing effective for Sri Lankan businesses?", a: "Yes — particularly for B2B businesses, professional services, IT companies, education providers and exporters. LinkedIn has over 1.2 million users in Sri Lanka, predominantly professionals in management and senior roles. LinkedIn consistently delivers higher-quality leads than Facebook or Instagram at a lower cost per qualified lead." },
  { q: "What types of LinkedIn ads work best in Sri Lanka?", a: "LinkedIn Lead Gen Forms consistently deliver the best results. Sponsored Content works best for brand awareness, Message Ads have the highest open rates for direct offers, and Document Ads (PDF carousels) drive strong engagement for thought leadership." },
  { q: "Can LinkedIn help me reach international clients from Sri Lanka?", a: "Yes — this is one of LinkedIn's most powerful applications. LinkedIn allows you to target professionals in the UK, Australia, UAE, Singapore or any other country by job title, seniority, industry and company size. Sri Lankan IT, BPO and professional services firms regularly use it to win international contracts." },
  { q: "How long does LinkedIn marketing take to generate leads?", a: "Paid Lead Gen Form campaigns can generate qualified leads within the first week. Organic LinkedIn marketing typically takes 2–3 months to build consistent inbound enquiries. Most clients see meaningful B2B lead generation within 30–60 days of launching paid campaigns." },
  { q: "Do you manage LinkedIn company pages for businesses in Sri Lanka?", a: "Yes. Cypher Digital offers complete LinkedIn company page management including content strategy, post creation, thought leadership articles, document carousels, follower growth, community engagement and monthly analytics reporting." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LinkedIn Marketing Sri Lanka",
  alternateName: "LinkedIn Advertising Sri Lanka",
  provider: {
    "@type": "LocalBusiness",
    name: "Cypher Digital",
    url: "https://cypherdigital.lk",
    telephone: "+94701772626",
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  },
  areaServed: "Sri Lanka",
  description: "Professional LinkedIn marketing and advertising services in Sri Lanka including Sponsored Content, Lead Gen Forms, Message Ads, company page management and B2B lead generation.",
  offers: [
    { "@type": "Offer", name: "LinkedIn Starter Package", priceCurrency: "LKR", price: "45000" },
    { "@type": "Offer", name: "LinkedIn Growth Package", priceCurrency: "LKR", price: "85000" },
    { "@type": "Offer", name: "LinkedIn Pro Package", priceCurrency: "LKR", price: "150000" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const LinkedInAdvertising = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.text = JSON.stringify(serviceSchema);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.text = JSON.stringify(faqSchema);
    document.head.appendChild(s1);
    document.head.appendChild(s2);
    return () => { s1.remove(); s2.remove(); };
  }, []);

  return (
    <>
      <SEOHead
        title="LinkedIn Marketing Sri Lanka — LinkedIn Advertising Agency | Cypher Digital"
        description="Expert LinkedIn marketing and LinkedIn advertising in Sri Lanka. B2B lead generation, company page management, Sponsored Content & LinkedIn Ads. Free consultation."
        canonical="https://cypherdigital.lk/linkedin-advertising-sri-lanka"
      />
      <PageBreadcrumb items={[{ label: "Services", href: "/" }, { label: "LinkedIn Marketing Sri Lanka" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary/30 text-background py-24 md:py-32">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-background/90 text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-medium">
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn Marketing Sri Lanka
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mb-6">
            LinkedIn Marketing & <span className="text-primary-foreground italic font-light">Advertising</span> in Sri Lanka
          </h1>
          <p className="text-lg text-background/70 max-w-2xl mb-10 leading-relaxed">
            Sri Lanka's specialist LinkedIn marketing agency — B2B lead generation, company page management, LinkedIn Ads, and thought leadership strategies that reach decision-makers locally and internationally.
          </p>
          <div className="flex flex-wrap gap-3 mb-14">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold border-none">
              Get a Free LinkedIn Audit
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-background/30 text-background hover:border-background/60 font-medium transition">
              Talk to an Expert
            </Link>
          </div>
          <div className="border-t border-background/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[["1.2M+", "LinkedIn users in Sri Lanka"], ["4×", "More leads than other platforms for B2B"], ["LKR 45K", "Starting price per month"], ["5.0★", "Client satisfaction rating"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-heading text-3xl md:text-4xl font-bold mb-1">{n}</div>
                <div className="text-xs text-background/50">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LINKEDIN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Why LinkedIn Sri Lanka</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-12 max-w-3xl">Why LinkedIn is the most powerful B2B platform in Sri Lanka right now</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>LinkedIn is the only social platform in Sri Lanka where you can reach professionals by their exact job title, seniority level, industry, company size and function — simultaneously. While Facebook and Instagram reach mass consumer audiences, LinkedIn puts your brand directly in front of <strong className="text-foreground">the people who make buying decisions</strong>.</p>
              <p>With over 1.2 million LinkedIn users in Sri Lanka — predominantly professionals aged 25 to 45 in management, senior, and director-level roles — the platform has become the dominant channel for B2B lead generation, corporate recruitment and professional brand building in 2026.</p>
              <p>Sri Lankan businesses that invest in LinkedIn marketing consistently generate higher-quality leads than those relying solely on Facebook and Instagram. A single well-placed LinkedIn campaign reaching 50 CEOs and Finance Directors is worth more than reaching 50,000 general consumers on Facebook — when your product or service is B2B.</p>
              <p>For <strong className="text-foreground">IT companies, professional services firms, exporters, education providers, financial services businesses and any company targeting international clients</strong>, LinkedIn is not optional — it is the most important digital marketing channel you are not using.</p>
              <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-5">
                <p className="text-foreground font-medium m-0">LinkedIn generates 277% more leads for B2B businesses than Facebook and Twitter combined. In Sri Lanka, LinkedIn competition is still relatively low — meaning early adopters win the most ground.</p>
              </div>
            </div>
            <div className="space-y-3">
              {stats.map(({ icon: Icon, num, desc }) => (
                <Card key={num} className="p-5 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-primary leading-none mb-1">{num}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our LinkedIn Services</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Complete LinkedIn marketing services for Sri Lankan businesses</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">From company page setup to full LinkedIn Ads management — everything your business needs to dominate LinkedIn in Sri Lanka.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, items }) => (
              <Card key={title} className="p-7 hover:shadow-lg hover:-translate-y-0.5 transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it} className="text-sm flex gap-2 text-muted-foreground">
                      <span className="text-primary">→</span> {it}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AD FORMATS */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary-foreground font-semibold mb-3">LinkedIn Ad Formats</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Every LinkedIn ad format we run for Sri Lankan businesses</h2>
          <p className="text-background/60 max-w-2xl mb-12">LinkedIn offers more precise B2B targeting options than any other platform. Here are the ad formats we use and when each one works best.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {adFormats.map((f) => (
              <div key={f.n} className="border border-background/10 rounded-xl p-6 bg-background/5">
                <div className="font-heading text-2xl text-primary-foreground/70 mb-2">{f.n}</div>
                <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-background/60 mb-4">{f.desc}</p>
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/20 text-background/90">{f.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Who Needs LinkedIn Marketing</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Which Sri Lankan businesses benefit most from LinkedIn marketing</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">LinkedIn marketing is not for every business — but for the right industries, it is by far the most valuable digital marketing channel available.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((i) => (
              <Card key={i.title} className="p-6">
                <div className="text-3xl mb-3">{i.ico}</div>
                <h3 className="font-heading text-lg font-bold mb-2">{i.title}</h3>
                <p className="text-sm text-muted-foreground">{i.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TARGETING */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">LinkedIn Targeting Capabilities</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Target exactly the right professionals — no other platform comes close</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">LinkedIn's targeting options are the reason it outperforms every other platform for B2B marketing.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {targeting.map((t) => (
              <Card key={t.title} className="p-6">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{t.label}</div>
                <h3 className="font-heading text-lg font-bold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Process</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-12 max-w-3xl">How we launch your LinkedIn marketing campaign in Sri Lanka</h2>
          <div className="grid md:grid-cols-5 gap-5">
            {process.map((p) => (
              <Card key={p.n} className="p-6">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">{p.n}</div>
                <h3 className="font-heading text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">LinkedIn Marketing Packages Sri Lanka</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">Transparent LinkedIn marketing pricing — no hidden fees</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">All packages include campaign setup, content creation and monthly reporting. Ad spend is separate. No lock-in contracts.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <Card key={p.name} className={`p-8 relative ${p.featured ? "border-primary border-2 shadow-xl md:scale-105" : ""}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</div>
                )}
                <div className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">{p.name}</div>
                <div className="font-heading text-4xl font-extrabold mb-2">{p.price}<span className="text-base text-muted-foreground font-normal">/month</span></div>
                <p className="text-sm text-muted-foreground mb-6">{p.note}</p>
                <ul className="space-y-2.5 mb-8">
                  {p.feats.map(([f, on]) => (
                    <li key={f} className={`text-sm flex gap-2 ${on ? "" : "text-muted-foreground/60 line-through"}`}>
                      {on ? <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> : <X className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/94701772626?text=${p.cta}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 rounded-lg bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold border-none">Get Started</a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest text-primary-foreground font-semibold mb-3">Results</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl">What LinkedIn marketing delivers for Sri Lankan businesses</h2>
          <p className="text-background/60 max-w-2xl mb-12">Real outcomes from our LinkedIn marketing campaigns for businesses in Sri Lanka.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r) => (
              <div key={r.l} className="border border-background/10 rounded-xl p-6 bg-background/5">
                <div className="font-heading text-4xl font-extrabold text-primary-foreground mb-3">{r.n}</div>
                <div className="text-sm text-background/60">{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Complete Guide</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">LinkedIn Marketing in Sri Lanka — the complete 2026 guide</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>LinkedIn marketing in Sri Lanka has transformed from a niche channel used by a handful of corporate recruiters into the most important B2B marketing platform available to Sri Lankan businesses in 2026. With over 1.2 million professional users in Sri Lanka and a global network exceeding 900 million members, LinkedIn offers targeting precision and audience quality that no other social platform comes close to matching.</p>
            <p>This guide covers everything you need to know about LinkedIn marketing and LinkedIn advertising in Sri Lanka — from understanding why the platform works, to building an effective content strategy, to running LinkedIn Ads that generate consistent B2B leads for your business.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">What is LinkedIn marketing and why does it work?</h3>
            <p>LinkedIn marketing encompasses all the activities a business undertakes on LinkedIn to build brand awareness, generate leads, recruit talent and establish thought leadership. Unlike Facebook and Instagram — which are built around personal connections and entertainment — LinkedIn is built around professional identity and career development.</p>
            <p>This fundamental difference is what makes LinkedIn so powerful for B2B marketing in Sri Lanka. Every LinkedIn user has provided verified professional information: their job title, employer, industry, seniority level and career history. When you run a LinkedIn campaign targeting "Financial Directors at companies with 200+ employees in Colombo," you are reaching exactly that audience — not an approximation of it.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">The LinkedIn landscape in Sri Lanka in 2026</h3>
            <p>LinkedIn adoption in Sri Lanka has grown significantly over the past five years. The platform now has over 1.2 million users in Sri Lanka, with the largest demographic being professionals aged 25 to 34 followed by 35 to 44 year olds. These are working professionals — managers, executives, business owners and decision-makers across every major industry in Sri Lanka.</p>
            <p>What makes the current LinkedIn landscape particularly valuable is that the platform remains relatively underutilised for paid advertising compared to Facebook and Instagram. Most Sri Lankan businesses have not yet discovered the power of LinkedIn Ads — meaning early adopters gain a significant competitive advantage.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">LinkedIn organic marketing strategies that work in Sri Lanka</h3>
            <p>Organic LinkedIn marketing — building your presence without paid advertising — is the foundation of a long-term LinkedIn strategy. <strong className="text-foreground">Company page optimisation</strong> is the starting point. Your page needs a complete, professional profile with a clear description of what you do and who you serve, a high-quality banner image, your website URL, and regular posting activity.</p>
            <p><strong className="text-foreground">Consistent content posting</strong> is what builds followers and generates organic reach. The most effective LinkedIn content types include industry insights, case studies with real numbers, behind-the-scenes content, document carousels and commentary on local business news.</p>
            <p><strong className="text-foreground">Executive personal profiles</strong> are consistently the highest-performing organic LinkedIn asset. Your CEO or senior leaders posting regularly will build audiences and generate inbound enquiries far more effectively than any company page alone.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">LinkedIn advertising in Sri Lanka — a complete overview</h3>
            <p>LinkedIn Lead Gen Forms are the most important ad format for B2B lead generation in Sri Lanka. The form is pre-populated with the user's LinkedIn data, meaning the user can submit details in a single tap. This dramatic reduction in friction is why LinkedIn Lead Gen Forms consistently outperform landing page campaigns.</p>
            <p>Sponsored Content builds brand awareness when the content itself is genuinely valuable. Message Ads deliver sponsored messages directly to the LinkedIn inbox of your target audience with open rates typically 50% or higher — far above email marketing benchmarks.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">LinkedIn marketing for international client acquisition from Sri Lanka</h3>
            <p>One of the most powerful applications of LinkedIn marketing for Sri Lankan businesses is international client acquisition. A Sri Lankan software company can run LinkedIn Ad campaigns specifically targeting CTOs and IT Directors at mid-sized companies in the United Kingdom, Australia, or the UAE — with the same precision as any local competitor.</p>
            <p>For Sri Lankan businesses serious about international growth, LinkedIn is the most direct route to reaching international decision-makers at a fraction of the cost of travel, trade shows or traditional international marketing.</p>

            <h3 className="font-heading text-2xl font-bold text-foreground pt-6">Getting started with LinkedIn marketing in Sri Lanka</h3>
            <p>The fastest path to LinkedIn results is to combine immediate paid advertising with a medium-term organic content strategy. Working with a specialist <Link to="/" className="text-primary hover:underline font-semibold">digital marketing agency in Sri Lanka</Link> that understands LinkedIn's platform deeply — its Campaign Manager, its targeting nuances and its content algorithm — will significantly accelerate your results.</p>
            <p>Read more: <Link to="/blog/linkedin-marketing-sri-lanka-2026" className="text-primary hover:underline font-semibold">LinkedIn marketing for Sri Lankan businesses — the 2026 guide</Link>.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">FAQ</div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold">Frequently asked questions about LinkedIn marketing in Sri Lanka</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <Card key={f.q} className="p-6">
                <h3 className="font-heading text-base font-bold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <div className="text-xs uppercase tracking-widest opacity-70 mb-3">Get Started Today</div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 max-w-2xl mx-auto">Ready to generate B2B leads with LinkedIn in Sri Lanka?</h2>
          <p className="opacity-80 max-w-xl mx-auto mb-10">Get a free LinkedIn audit and strategy session — we will show you exactly what is possible for your business on LinkedIn.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold border-none">Get a Free LinkedIn Audit</a>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/50 text-primary-foreground hover:border-primary-foreground font-medium transition">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <div className="py-8 border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Related services:{" "}
          <Link to="/" className="text-primary hover:underline">digital marketing agency in Sri Lanka</Link> ·{" "}
          <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">social media management in Sri Lanka</Link> ·{" "}
          <Link to="/advertising-in-sri-lanka" className="text-primary hover:underline">advertising in Sri Lanka</Link> ·{" "}
          <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook Ads Sri Lanka</Link> ·{" "}
          <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Google Ads Sri Lanka</Link>
        </div>
      </div>
    </>
  );
};

export default LinkedInAdvertising;