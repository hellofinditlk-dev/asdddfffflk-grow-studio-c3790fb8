import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown, ArrowRight, BarChart3, BriefcaseBusiness, Building2, Car, CheckCircle2,
  CircleDollarSign, ClipboardCheck, Facebook, FileText, GraduationCap, HeartPulse, Hotel,
  Instagram, Landmark, LayoutTemplate, Linkedin, MessageCircle, MousePointerClick, Phone,
  RefreshCw, Search, Send, ShoppingBag, Sparkles, Target, TrendingUp, UserCheck, Users,
  Video, Wrench,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";

const URL = "https://cypherdigital.lk/lead-generation-campaigns-sri-lanka";
const PHONE_DISPLAY = "+94 70 177 2626";
const PHONE_TEL = "+94701772626";
const WA_URL = "https://wa.me/94701772626?text=Hi%20Cypher%20Digital%2C%20I%27d%20like%20to%20start%20a%20lead%20generation%20campaign.";

const faqs = [
  ["What is lead generation?", "Lead generation is the process of attracting potential customers and encouraging them to make an enquiry or provide their contact information so the business can continue the conversation."],
  ["What is a lead generation campaign?", "A lead generation campaign is a structured marketing campaign designed specifically to generate enquiries or potential customer contacts."],
  ["Which platforms can you use for lead generation?", "Depending on the business and campaign objective, lead generation can use Facebook, Instagram, Google, TikTok, LinkedIn, WhatsApp, landing pages and website enquiry forms."],
  ["Can you generate leads through Facebook?", "Yes. Facebook and Instagram can use lead forms, Click-to-WhatsApp, landing pages and other campaign formats to generate enquiries."],
  ["Can Google Ads generate leads?", "Yes. Google Search campaigns can reach people actively searching for products or services and direct them toward an appropriate enquiry route."],
  ["Can you generate B2B leads?", "Yes. B2B lead generation can use channels such as LinkedIn, Google Search, landing pages and other targeted digital campaigns."],
  ["What is a qualified lead?", "A qualified lead is a prospect that meets agreed criteria based on factors such as relevance, requirement, interest or other campaign-specific information."],
  ["Do you follow up the leads?", "Lead follow-up can be handled as a separate service. Cypher Digital's lead follow-up service contacts existing prospects, understands their requirements, collects customer feedback and provides structured information for further sales follow-up."],
  ["Can you create landing pages for lead generation?", "Yes. Landing pages can be used as part of lead-generation campaigns where the offer or product requires more information before the customer makes an enquiry."],
  ["Do you guarantee a certain number of leads?", "No fixed number of leads should be guaranteed because results depend on the market, audience, offer, creative, competition, platform and conversion process."],
  ["Do you only generate leads from Facebook?", "No. The appropriate channel depends on the business and audience. Campaigns can use multiple platforms where appropriate."],
];

const schemas = [
  {
    "@context": "https://schema.org", "@type": "Organization", name: "Cypher Digital",
    url: "https://cypherdigital.lk", telephone: PHONE_TEL,
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  },
  {
    "@context": "https://schema.org", "@type": "Service", name: "Lead Generation Campaigns in Sri Lanka",
    serviceType: "Multichannel digital lead generation campaigns",
    description: "Lead generation campaigns using social advertising, search advertising, WhatsApp, landing pages, qualification and follow-up planning.",
    provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    areaServed: { "@type": "Country", name: "Sri Lanka" }, url: URL,
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: "Lead Generation Campaigns", item: URL },
    ],
  },
  {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  },
];

const L = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="font-semibold text-primary underline-offset-4 hover:underline">{children}</Link>
);
const Section = ({ children, alt = false, id }: { children: ReactNode; alt?: boolean; id?: string }) => (
  <section id={id} className={`py-14 md:py-20 ${alt ? "bg-secondary/50" : "bg-background"}`}>
    <div className="container mx-auto max-w-6xl px-4">{children}</div>
  </section>
);
const Eyebrow = ({ children }: { children: ReactNode }) => <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{children}</p>;
const H2 = ({ children }: { children: ReactNode }) => <h2 className="mb-5 font-heading text-2xl font-extrabold leading-tight text-foreground md:text-4xl">{children}</h2>;
const Bullets = ({ items }: { items: string[] }) => (
  <ul className="grid gap-2 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-foreground/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul>
);
const CardGrid = ({ items, columns = 4 }: { items: { icon: typeof Target; title: string; text: string }[]; columns?: 3 | 4 }) => (
  <div className={`grid gap-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
    {items.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-lg border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
      <h3 className="mb-2 font-heading font-bold text-foreground">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>)}
  </div>
);
const CTA = ({ children }: { children: ReactNode }) => <Button asChild size="lg" className="min-h-12 border-none bg-cta font-semibold text-cta-foreground hover:bg-cta/90"><a href={WA_URL} target="_blank" rel="noopener noreferrer">{children}<ArrowRight className="ml-1 h-4 w-4" /></a></Button>;
const Funnel = ({ steps, highlight }: { steps: string[]; highlight?: number }) => (
  <ol className="flex flex-col items-stretch gap-2">
    {steps.map((step, index) => <li key={step} className="flex flex-col items-center gap-2">
      <div className={`w-full rounded-lg border px-4 py-3 text-center text-sm font-bold ${index === highlight ? "border-primary bg-primary text-primary-foreground shadow-md" : "border-border bg-card text-foreground"}`}><span className={index === highlight ? "mr-2 text-primary-foreground/70" : "mr-2 text-primary"}>{String(index + 1).padStart(2, "0")}</span>{step}</div>
      {index < steps.length - 1 && <ArrowDown className="h-4 w-4 text-primary" />}
    </li>)}
  </ol>
);

const campaignCards = [
  { icon: Facebook, title: "Facebook Lead Generation", text: "Use Facebook Lead Ads, messaging campaigns and targeted advertising to generate enquiries from relevant audiences." },
  { icon: Instagram, title: "Instagram Lead Generation", text: "Use Instagram Reels, Stories, Feed and lead-generation campaigns to reach potential customers and encourage enquiries." },
  { icon: Search, title: "Google Lead Generation", text: "Use Google Search and other Google advertising formats to reach people actively searching for relevant products and services." },
  { icon: MessageCircle, title: "WhatsApp Lead Generation", text: "Create Click-to-WhatsApp campaigns that allow potential customers to start a direct conversation with the business." },
  { icon: LayoutTemplate, title: "Landing Page Lead Generation", text: "Send targeted traffic to dedicated landing pages designed to encourage relevant enquiries." },
  { icon: Linkedin, title: "LinkedIn B2B Lead Generation", text: "Reach professionals and decision-makers through LinkedIn campaigns designed for B2B enquiries." },
  { icon: Video, title: "TikTok Lead Generation", text: "Use TikTok advertising and short-form creative to reach relevant audiences and generate enquiries where appropriate." },
  { icon: RefreshCw, title: "Retargeting Campaigns", text: "Reconnect with visitors, content engagers, form openers and people who previously showed interest but did not enquire." },
];
const process = [
  ["Understand Your Business", "We identify your products, services, target customers, sales process and campaign objective."],
  ["Define the Target Audience", "We identify the locations, interests, behaviour or professional attributes relevant to the campaign."],
  ["Develop the Offer", "We shape a reason to enquire, such as a consultation, quotation, appointment, course information, viewing or demonstration."],
  ["Choose the Right Lead Route", "The journey may use lead forms, WhatsApp, landing pages, website forms, phone calls or appointment forms."],
  ["Create the Campaign", "We develop the ad copy, creative, videos, lead forms, landing pages, qualification questions and call-to-action."],
  ["Launch and Optimize", "We monitor leads, cost per lead, qualified leads, conversion rate, audiences, creative and enquiry quality."],
  ["Improve the Campaign", "Campaign data and customer feedback guide improvements to targeting, creative, offer and lead relevance."],
];
const goodCampaign = [
  { icon: Target, title: "Right Audience", text: "Reach people who are relevant to your product or service." },
  { icon: Sparkles, title: "Strong Offer", text: "Give people a clear reason to enquire." },
  { icon: Video, title: "Good Creative", text: "Communicate the value quickly and clearly." },
  { icon: MousePointerClick, title: "Simple Enquiry Process", text: "Make it easy for people to take the next step." },
  { icon: ClipboardCheck, title: "Proper Qualification", text: "Collect information that helps determine lead relevance." },
  { icon: Phone, title: "Fast Follow-Up", text: "Make sure enquiries are not left waiting." },
];
const industries = [
  { icon: Building2, title: "Real Estate", text: "Property enquiries, buyer and investor enquiries, and viewing requests." },
  { icon: GraduationCap, title: "Education", text: "Student enquiries for courses, institutes, intakes and training programs." },
  { icon: Hotel, title: "Hotels & Tourism", text: "Booking, accommodation, event and travel enquiries." },
  { icon: HeartPulse, title: "Healthcare & Wellness", text: "Enquiries for relevant treatments, consultations and services." },
  { icon: Car, title: "Automotive", text: "Vehicle enquiries, test-drive requests and service enquiries." },
  { icon: ClipboardCheck, title: "Insurance", text: "Enquiries from people interested in relevant insurance products." },
  { icon: Landmark, title: "Finance", text: "Relevant enquiries for financial products and services." },
  { icon: ShoppingBag, title: "Retail & E-commerce", text: "Product enquiries and purchase opportunities." },
  { icon: Wrench, title: "Construction & Home Services", text: "Construction, renovation, solar, interior and home-improvement enquiries." },
  { icon: BriefcaseBusiness, title: "B2B & Professional Services", text: "Business enquiries from companies and decision-makers." },
];
const whyCypher = [
  { icon: Target, title: "Strategy First", text: "Campaigns are planned around the business objective, audience, offer and conversion path." },
  { icon: Users, title: "Multi-Channel", text: "Use Facebook, Instagram, Google, TikTok, LinkedIn, WhatsApp and landing pages where appropriate." },
  { icon: TrendingUp, title: "Lead-Focused", text: "The campaign is designed around generating enquiries rather than simply maximizing reach." },
  { icon: Sparkles, title: "Creative + Performance", text: "Creative development and paid campaign management work together." },
  { icon: UserCheck, title: "Qualification", text: "Lead forms and campaigns can include relevant qualification questions." },
  { icon: Phone, title: "Follow-Up Integration", text: "Lead generation can be connected with a structured lead follow-up process." },
  { icon: BarChart3, title: "Reporting", text: "Track campaign performance using lead and business-relevant metrics." },
  { icon: RefreshCw, title: "Continuous Optimization", text: "Campaigns can be adjusted based on actual performance and feedback." },
];

const LeadGenerationCampaigns = () => (
  <div>
    <SEOHead title="Lead Generation Campaigns Sri Lanka | Generate Quality Leads" description="Lead generation campaigns in Sri Lanka using Facebook, Instagram, Google, TikTok, LinkedIn, WhatsApp and landing pages to generate relevant business enquiries." canonical={URL} />
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <PageBreadcrumb items={[{ label: "Lead Generation Campaigns" }]} />

    <section className="relative overflow-hidden border-b border-border bg-background py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,hsl(var(--editorial-tint)),transparent_58%)]" aria-hidden="true" />
      <div className="container relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.06fr_.94fr]">
        <div><Eyebrow>Multi-channel lead generation · Sri Lanka</Eyebrow>
          <h1 className="mb-4 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-5xl">Lead Generation Campaigns in Sri Lanka</h1>
          <p className="mb-4 font-heading text-xl font-bold text-primary md:text-2xl">Generate More Leads. Reach the Right Customers.</p>
          <p className="mb-3 text-lg leading-relaxed text-muted-foreground"><L to="/">Cypher Digital</L> creates and manages lead generation campaigns in Sri Lanka designed to turn digital advertising into real customer enquiries.</p>
          <p className="mb-7 leading-relaxed text-muted-foreground">From Facebook and Instagram lead campaigns to Google Search, WhatsApp, landing pages and retargeting, we build the complete journey from ad → enquiry → lead → follow-up.</p>
          <div className="flex flex-col gap-3 sm:flex-row"><CTA>Start a Lead Generation Campaign</CTA><Button asChild size="lg" variant="outline" className="min-h-12"><a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-4 w-4" />Talk to Our Team</a></Button></div>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-xl md:p-7"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">From audience to opportunity</p><Funnel steps={["Target Audience", "Ad / Campaign", "Enquiry", "Lead", "Qualification", "Follow-Up", "Sales Opportunity"]} highlight={3} /><p className="mt-5 border-l-2 border-cta pl-4 text-sm font-semibold text-foreground">Don't just generate traffic. Generate opportunities for your sales team.</p></div>
      </div>
    </section>

    <Section><div className="grid gap-10 lg:grid-cols-2"><div><Eyebrow>The outcome</Eyebrow><H2>What Is Lead Generation?</H2><div className="space-y-3 leading-relaxed text-muted-foreground"><p>Lead generation is the process of attracting people who may have a genuine interest in your product or service and encouraging them to take an action that allows your business to continue the conversation.</p><p>The objective is not simply to generate more clicks. It is to generate relevant enquiries that your business can follow up and potentially convert into customers.</p></div></div><div className="rounded-lg border border-border bg-card p-6"><h3 className="mb-4 font-heading font-bold">That action could be:</h3><Bullets items={["Submit a lead form", "Send a WhatsApp message", "Make a phone enquiry", "Complete a website form", "Request a quotation", "Book an appointment", "Register for an event", "Request more information"]} /></div></div></Section>

    <Section alt><Eyebrow>Connected planning</Eyebrow><H2>What Makes a Lead Generation Campaign Different?</H2><p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">A lead-generation campaign is built around a specific business objective. It connects the audience, offer, enquiry route and sales process instead of simply running advertisements and waiting. That planning should align with a clear <L to="/social-media-strategy-sri-lanka">social media strategy</L> and the practical execution of your <L to="/social-media-campaigns-sri-lanka">social media campaigns</L>.</p><Bullets items={["What are you selling?", "Who is the ideal customer?", "What problem does it solve?", "What offer will encourage an enquiry?", "Where should the enquiry happen?", "What information should be collected?", "How will the lead be qualified?", "Who will follow up?", "What happens after the first enquiry?"]} /></Section>

    <Section><Eyebrow>Channel mix</Eyebrow><H2>Lead Generation Campaigns We Run</H2><p className="mb-7 max-w-3xl text-muted-foreground">Channel choice follows the audience and objective. Paid social activity can be coordinated through our <L to="/social-media-advertising-sri-lanka">Social Media Advertising</L> service.</p><CardGrid items={campaignCards} /></Section>

    <Section alt><Eyebrow>Seven steps</Eyebrow><H2>Our Lead Generation Campaign Process</H2><ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{process.map(([title, text], index) => <li key={title} className={`relative rounded-lg border bg-card p-5 ${index === process.length - 1 ? "border-primary shadow-md" : "border-border shadow-card"}`}><span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span><h3 className="mb-2 font-heading font-bold">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></li>)}</ol></Section>

    <Section><div className="grid gap-10 lg:grid-cols-2"><div><Eyebrow>Paid social</Eyebrow><H2>Facebook & Instagram Lead Generation</H2><div className="space-y-3 leading-relaxed text-muted-foreground"><p>Facebook and Instagram can generate enquiries through Instant Lead Forms, Click-to-WhatsApp, website landing pages, Messenger, direct enquiries and retargeting.</p><p>The correct route depends on the product, audience and sales process. Low-friction forms can generate enquiries quickly, while higher-value products may benefit from landing pages where customers need more information first.</p><p>Explore our dedicated <L to="/social-media-lead-generation-sri-lanka">Social Media Lead Generation Services</L>.</p></div></div><div><Eyebrow>Search intent</Eyebrow><H2>Google Lead Generation</H2><div className="space-y-3 leading-relaxed text-muted-foreground"><p>Google is particularly useful when people are already searching for a product or service: a hotel in Colombo, property for sale, an English course, wedding photography or a solar company.</p><p>The campaign can direct this intent to a landing page, website form, phone call, WhatsApp or another relevant enquiry route. Learn about <L to="/google-ads-sri-lanka">Google Ads in Sri Lanka</L>.</p></div></div></div></Section>

    <Section alt><div className="grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><Eyebrow>Direct conversation</Eyebrow><H2>WhatsApp Lead Generation</H2><div className="space-y-3 leading-relaxed text-muted-foreground"><p>For many Sri Lankan businesses, WhatsApp is an important part of the enquiry journey. Click-to-WhatsApp campaigns let potential customers start a direct conversation.</p><p>This can support product, service, quotation, hotel, education, real estate, automotive, healthcare, event and retail enquiries.</p><p className="font-semibold text-foreground">The campaign should not stop when someone sends a message. The business needs a process for responding, qualifying and following up.</p></div></div><div className="rounded-lg border border-border bg-card p-6"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">A useful WhatsApp path</p><Funnel steps={["Ad seen", "WhatsApp opened", "Requirement shared", "Qualification", "Next step agreed"]} highlight={2} /></div></div></Section>

    <Section id="generation-follow-up"><Eyebrow>The connected journey</Eyebrow><H2>Lead Generation and Lead Follow-Up Work Together</H2><div className="grid items-center gap-10 lg:grid-cols-[1fr_.85fr]"><div className="space-y-4 leading-relaxed text-muted-foreground"><p>Generating the lead is only the first part of the process. A campaign can generate enquiries successfully but still produce poor business results if those enquiries are not followed up properly.</p><p>Once your campaign starts generating enquiries, the next challenge is making sure those prospects are contacted and understood. Our <L to="/lead-follow-up-services-sri-lanka">Lead Follow-Up Services in Sri Lanka</L> help businesses contact existing leads, understand their requirements, collect customer feedback and identify prospects that may require further sales follow-up.</p><p>This is why lead generation should be connected to a clear response and follow-up process.</p></div><div className="rounded-lg border-2 border-primary bg-primary/5 p-5"><Funnel steps={["Advertising", "Lead Generated", "First Response", "Lead Qualification", "Customer Feedback", "Sales Follow-Up", "Sales Opportunity"]} highlight={2} /></div></div></Section>

    <Section alt><div className="grid gap-10 lg:grid-cols-2"><div><Eyebrow>Qualification</Eyebrow><H2>Lead Qualification</H2><p className="mb-5 leading-relaxed text-muted-foreground">Not every lead has the same level of interest. Qualification helps reveal what the prospect wants, whether they have a current requirement, how soon they may need it, what information is missing and whether they want a salesperson to contact them.</p><p className="text-muted-foreground">Questions can be added to lead forms, WhatsApp conversations, landing pages and initial follow-up calls. See our approach to <L to="/lead-follow-up-services-sri-lanka">lead qualification and follow-up</L>.</p></div><div className="rounded-lg border border-border bg-card p-6"><h3 className="mb-4 font-heading font-bold">What information should you collect?</h3><Bullets items={["Name", "Phone number", "Email", "Location", "Product or service interest", "Requirement", "Preferred contact method", "Preferred time", "Campaign-specific qualification answers"]} /><p className="mt-5 text-sm text-muted-foreground">The fields depend on the business. Do not collect unnecessary personal information.</p></div></div></Section>

    <Section><Eyebrow>Campaign essentials</Eyebrow><H2>What Makes a Good Lead Generation Campaign?</H2><CardGrid items={goodCampaign} columns={3} /></Section>

    <Section alt><Eyebrow>Industry journeys</Eyebrow><H2>Lead Generation for Different Industries</H2><CardGrid items={industries} /></Section>

    <Section><div className="grid gap-10 lg:grid-cols-2"><div><Eyebrow>B2B campaigns</Eyebrow><H2>Lead Generation for B2B Businesses</H2><p className="mb-5 leading-relaxed text-muted-foreground">B2B campaigns often use LinkedIn, Google Search, landing pages, email, social advertising and content marketing. Qualification may include company, industry, role, business or project requirement, timeline and contact preference.</p><p className="text-muted-foreground">For professional audiences, explore <L to="/linkedin-marketing-sri-lanka">LinkedIn B2B Lead Generation</L>.</p></div><div className="rounded-lg border border-border bg-card p-6"><Eyebrow>Meaningful measurement</Eyebrow><H2>Lead Generation Campaign Reporting</H2><Bullets items={["Leads generated", "Cost per lead", "Qualified leads", "Cost per qualified lead", "Lead source", "Conversion rate", "Enquiry response time", "Sales follow-up status", "Sales opportunities where data is available"]} /><p className="mt-5 font-semibold text-foreground">A cheap lead is not necessarily a good lead. Are the leads relevant, and can your sales team act on them?</p></div></div></Section>

    <Section alt><div className="grid gap-10 lg:grid-cols-2"><div><Eyebrow>Data-led refinement</Eyebrow><H2>How We Improve Lead Quality</H2><Bullets items={["Audience refinement", "Creative testing", "Offer testing", "Qualification questions", "Landing page improvements", "Lead form improvements", "Retargeting", "Campaign structure", "Search keyword refinement", "Excluding irrelevant audiences", "Reviewing sales feedback"]} /><p className="mt-5 text-sm text-muted-foreground">Optimization does not guarantee lower costs. The goal is to improve campaign efficiency and lead relevance based on actual data.</p></div><div><Eyebrow>Objective comparison</Eyebrow><H2>Lead Generation vs Traffic Campaigns</H2><div className="overflow-x-auto rounded-lg border border-border bg-card"><table className="w-full min-w-[520px] text-left text-sm"><thead className="bg-secondary"><tr><th className="p-4">Traffic Campaign</th><th className="p-4">Lead Generation Campaign</th></tr></thead><tbody className="divide-y divide-border">{[["Goal: Website visits", "Goal: Enquiries"], ["Optimized for visits", "Optimized for lead actions"], ["Measures clicks", "Measures leads"], ["Useful for awareness and traffic", "Useful when a business needs potential customers"], ["May not collect contact details", "Can collect relevant prospect information"]].map(([a,b]) => <tr key={a}><td className="p-4 text-muted-foreground">{a}</td><td className="p-4 font-medium text-foreground">{b}</td></tr>)}</tbody></table></div><p className="mt-4 text-sm text-muted-foreground">The correct campaign objective depends on the business goal.</p></div></div></Section>

    <Section><Eyebrow>Why Cypher</Eyebrow><H2>Why Choose Cypher Digital for Lead Generation?</H2><CardGrid items={whyCypher} /></Section>

    <Section alt><Eyebrow>Complete funnel</Eyebrow><H2>Build a Complete Lead Generation Funnel</H2><div className="grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr]"><Funnel steps={["Audience", "Advertising", "Enquiry", "Qualification", "Lead Follow-Up", "Sales Team", "Customer"]} highlight={4} /><div className="space-y-4"><div className="rounded-lg border border-border bg-card p-5"><h3 className="font-heading font-bold">Advertising</h3><p className="mt-2 text-sm text-muted-foreground">Facebook · Instagram · Google · TikTok · LinkedIn</p></div><div className="rounded-lg border border-border bg-card p-5"><h3 className="font-heading font-bold">Enquiry routes</h3><p className="mt-2 text-sm text-muted-foreground">Lead form · WhatsApp · Website · Landing page · Phone</p></div><div className="rounded-lg border border-border bg-card p-5"><h3 className="font-heading font-bold">Qualification and follow-up</h3><p className="mt-2 text-sm text-muted-foreground">Questions · Requirement · Interest · Initial contact · Customer feedback · Prospect status</p></div><div className="rounded-lg border-2 border-primary bg-primary/5 p-5"><p className="font-heading text-lg font-extrabold text-foreground">Lead generation should not exist separately from your sales process.</p></div></div></div></Section>

    <Section id="faq"><Eyebrow>Clear answers</Eyebrow><H2>Frequently Asked Questions</H2><div className="max-w-4xl space-y-3">{faqs.map(([question, answer], index) => <details key={question} className="group rounded-lg border border-border bg-card p-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading font-bold text-foreground"><h3 className="text-base">{question}</h3><span className="text-xl leading-none text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}{index === 7 && <> Learn more about <L to="/lead-follow-up-services-sri-lanka">Lead Follow-Up Services in Sri Lanka</L>.</>}</p></details>)}</div></Section>

    <section className="bg-primary py-14 text-primary-foreground md:py-20"><div className="container mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-[1fr_auto]"><div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Reach → enquire → qualify → follow up</p><h2 className="mb-4 font-heading text-3xl font-extrabold md:text-4xl">Ready to Generate More Relevant Leads?</h2><p className="max-w-3xl leading-relaxed text-primary-foreground/80">Tell us about your business, target audience and what you want to achieve. We'll help you build a lead-generation campaign around the right audience, offer, enquiry route and follow-up process.</p><div className="mt-6 flex flex-wrap gap-5 text-sm"><a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 font-semibold text-primary-foreground hover:underline"><Phone className="h-4 w-4" />{PHONE_DISPLAY}</a><span className="flex items-center gap-2 text-primary-foreground/80"><Building2 className="h-4 w-4" />Colombo, Sri Lanka</span></div></div><div className="flex flex-col gap-3"><CTA>Start Your Lead Generation Campaign</CTA><Button asChild size="lg" variant="secondary" className="min-h-12"><a href={`tel:${PHONE_TEL}`}>Talk to Cypher Digital</a></Button></div></div></section>
  </div>
);

export default LeadGenerationCampaigns;
