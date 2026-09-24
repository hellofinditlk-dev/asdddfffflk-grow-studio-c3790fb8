import { useState, FormEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowDown, Phone, MessageCircle, ListChecks, PhoneOutgoing, Search, Gauge, MessageSquareText,
  ClipboardList, ThumbsUp, UserCheck, Info, Clock, XCircle, PhoneOff, Users, Timer, Target, FileSpreadsheet,
  Layers, Megaphone, Globe, LayoutTemplate, Mail, CalendarDays, Tag, Database, Building2, GraduationCap,
  Hotel, Car, ShieldCheck, Landmark, HeartPulse, Briefcase, ShoppingBag, CheckCircle2,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";

const URL = "https://cypherdigital.lk/lead-follow-up-services-sri-lanka";
const PHONE_DISPLAY = "077 143 7707";
const PHONE_TEL = "+94771437707";
const WA = "94771437707";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const WA_START = waLink("Hi Cypher Digital, I'd like to start a lead follow-up campaign.");

const faqs = [
  ["What is lead follow-up?", "Lead follow-up is the process of contacting existing leads, prospects or enquiries to understand their requirements, level of interest and next steps."],
  ["Do I need to provide the leads?", "Yes. This service is primarily designed for businesses that already have a list of leads, prospects, enquiries or customers that need to be contacted."],
  ["Can you follow up Facebook leads?", "Yes. Leads generated through Facebook and Instagram campaigns can be provided for follow-up and qualification."],
  ["Can you follow up Google Ads leads?", "Yes. Website enquiries and leads generated through Google Ads can be included in a follow-up campaign."],
  ["What happens during the first call?", "The team contacts the prospect, starts the conversation, understands their requirement, asks agreed qualification questions and records the call outcome and relevant feedback."],
  ["Can you identify interested prospects?", "Yes. Prospects can be categorized according to agreed qualification criteria, such as interested, needs more information, follow up later, not interested or unreachable."],
  ["Do you provide call recordings?", "The service is focused on call outcomes, prospect information, qualification and customer feedback rather than providing call recordings."],
  ["Can you make multiple follow-up calls?", "Follow-up attempts can be structured according to the requirements and scope of the campaign."],
  ["Is this the same as a traditional call center?", "No. This is a specialized lead follow-up and prospect qualification service focused on the first stage of the sales process."],
  ["Can you collect customer feedback?", "Yes. The campaign can include questions designed to collect relevant customer and prospect feedback."],
  ["Can you set appointments?", "Appointment setting can be included where it is relevant to the campaign and agreed as part of the service."],
  ["What industries can use lead follow-up?", "Lead follow-up can be used across industries including real estate, education, hotels and tourism, automotive, insurance, finance, healthcare, retail, e-commerce and B2B services."],
  ["How much does lead follow-up cost?", "Pricing depends on lead volume, campaign duration, number of follow-up attempts, qualification requirements, reporting and other campaign requirements. Contact Cypher Digital for a campaign-specific proposal."],
];

const schemas = [
  {
    "@context": "https://schema.org", "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk",
    telephone: PHONE_TEL, address: { "@type": "PostalAddress", addressCountry: "LK" },
  },
  {
    "@context": "https://schema.org", "@type": "Service", name: "Lead Follow-Up Services in Sri Lanka",
    serviceType: "Lead follow-up, prospect qualification and customer feedback calling",
    description: "First-stage follow-up of existing leads: initial call, requirement understanding, qualification, customer feedback and a structured report for the client's sales team.",
    provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    areaServed: { "@type": "Country", name: "Sri Lanka" }, url: URL,
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: "Lead Follow-Up Services", item: URL },
    ],
  },
  {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
];

const L = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="text-primary font-medium underline-offset-4 hover:underline">{children}</Link>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{children}</p>
);

const Section = ({ id, alt, children }: { id?: string; alt?: boolean; children: ReactNode }) => (
  <section id={id} className={`py-14 md:py-20 ${alt ? "bg-secondary/50" : "bg-background"}`}>
    <div className="container mx-auto px-4 max-w-6xl">{children}</div>
  </section>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground mb-5 leading-tight">{children}</h2>
);

const Cta = ({ label, variant = "primary" }: { label: string; variant?: "primary" | "outline" }) => (
  <Button asChild size="lg" variant={variant === "outline" ? "outline" : "default"}
    className={variant === "primary" ? "bg-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,45%)] !text-white font-semibold border-none min-h-12" : "min-h-12"}>
    <a href={WA_START} target="_blank" rel="noopener noreferrer">{label} <ArrowRight className="w-4 h-4 ml-1" /></a>
  </Button>
);

const Flow = ({ steps, vertical, highlight }: { steps: string[]; vertical?: boolean; highlight?: number }) => (
  <div className={`flex ${vertical ? "flex-col" : "flex-col md:flex-row md:flex-wrap"} items-stretch md:items-center gap-2`}>
    {steps.map((s, i) => (
      <div key={s} className={`flex ${vertical ? "flex-col" : "flex-col md:flex-row"} items-center gap-2`}>
        <div className={`rounded-lg px-4 py-3 text-sm font-semibold text-center w-full md:w-auto shadow-sm border ${highlight === i ? "bg-primary text-white border-primary shadow-md shadow-primary/25" : "border-border bg-card text-foreground"}`}>
          <span className={highlight === i ? "text-white/70 mr-1.5" : "text-primary mr-1.5"}>{String(i + 1).padStart(2, "0")}</span>{s}
        </div>
        {i < steps.length - 1 && (
          <>
            <ArrowDown className={`w-4 h-4 text-primary ${vertical ? "" : "md:hidden"}`} />
            {!vertical && <ArrowRight className={`w-4 h-4 hidden md:block ${highlight === i ? "text-primary" : "text-primary/60"}`} />}
          </>
        )}
      </div>
    ))}
  </div>
);

const CardGrid = ({ items, cols = 3 }: { items: { icon: any; title: string; text: string }[]; cols?: number }) => (
  <div className={`grid gap-4 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
    {items.map(({ icon: Icon, title, text }) => (
      <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3"><Icon className="w-5 h-5" /></div>
        <h3 className="font-heading font-bold text-foreground mb-1.5">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    ))}
  </div>
);

const Checks = ({ items }: { items: string[] }) => (
  <ul className="grid sm:grid-cols-2 gap-2">
    {items.map((i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{i}</li>
    ))}
  </ul>
);

const steps = [
  { icon: ListChecks, t: "You Give Us Your Lead List", c: "Provide your existing list of leads, prospects, enquiries or customers that you want to contact." },
  { icon: PhoneOutgoing, t: "We Make the First Call", c: "Our team contacts the people on your list and starts the initial conversation on behalf of your business." },
  { icon: Search, t: "We Understand Their Requirement", c: "We ask relevant questions to understand what the prospect is looking for, what they need and whether your product or service is relevant to them." },
  { icon: Gauge, t: "We Identify Their Interest", c: "Prospects can be categorized according to their response and the qualification criteria agreed for your campaign." },
  { icon: MessageSquareText, t: "We Collect Customer Feedback", c: "We record useful information from the conversation, including requirements, questions, concerns, interest level and other relevant feedback." },
  { icon: ClipboardList, t: "Your Sales Team Gets the Follow-Up Information", c: "You receive a structured report showing the outcome of the calls and which prospects may require further sales follow-up." },
];

const statuses = [
  { icon: ThumbsUp, title: "Interested", text: "The prospect has expressed interest and may require further sales follow-up.", tone: "bg-primary text-white" },
  { icon: UserCheck, title: "Potential Customer", text: "The prospect has a relevant requirement and may be suitable for your product or service.", tone: "bg-primary/10 text-primary" },
  { icon: Info, title: "Needs More Information", text: "The prospect wants additional information before making a decision.", tone: "bg-accent/20 text-accent border border-accent/50" },
  { icon: Clock, title: "Follow Up Later", text: "The prospect may be interested but is not ready to proceed immediately.", tone: "bg-muted text-muted-foreground" },
  { icon: XCircle, title: "Not Interested", text: "The prospect does not currently have a requirement or interest.", tone: "bg-muted text-muted-foreground" },
  { icon: PhoneOff, title: "No Answer / Invalid Contact", text: "The prospect could not be reached or the contact information may require verification.", tone: "bg-muted text-muted-foreground" },
];

const sources = [
  { icon: Megaphone, title: "Facebook & Instagram Leads", text: "Lead-form and message enquiries from Meta campaigns can be passed to the follow-up team for first contact and qualification." },
  { icon: Target, title: "Google Ads Leads", text: "Calls-to-action and form submissions from search campaigns can be contacted while the enquiry is still fresh." },
  { icon: Globe, title: "Website Enquiries", text: "Contact-form and quote requests from your website can be followed up and qualified." },
  { icon: LayoutTemplate, title: "Landing Page Leads", text: "Leads from campaign landing pages can be called to understand what prompted the enquiry." },
  { icon: MessageCircle, title: "WhatsApp Enquiries", text: "Numbers that messaged your business can be called for a clearer conversation about their requirement." },
  { icon: Mail, title: "Email Campaign Leads", text: "Recipients who responded to an email campaign can be contacted for initial qualification." },
  { icon: CalendarDays, title: "Event Leads", text: "Contacts collected at exhibitions, fairs and events can be followed up after the event." },
  { icon: Tag, title: "Promotional Campaign Leads", text: "Enquiries from a specific offer or promotion can be called and qualified around that offer." },
  { icon: Database, title: "Existing Customer Databases", text: "Past enquiries and existing customers can be contacted for feedback or renewed interest." },
];

const industries = [
  { icon: Building2, title: "Real Estate", text: "Follow up property enquiries and understand buyer or investor requirements." },
  { icon: GraduationCap, title: "Education", text: "Contact student enquiries and understand course or program interests." },
  { icon: Hotel, title: "Hotels & Tourism", text: "Follow up accommodation, event and tourism enquiries." },
  { icon: Car, title: "Automotive", text: "Contact vehicle enquiries and understand purchase interest." },
  { icon: ShieldCheck, title: "Insurance", text: "Follow up insurance enquiries and identify prospects requiring further information." },
  { icon: Landmark, title: "Banking & Finance", text: "Contact prospects and understand their requirements before further sales discussions." },
  { icon: HeartPulse, title: "Healthcare & Wellness", text: "Follow up service enquiries and understand potential customer requirements." },
  { icon: Briefcase, title: "B2B & Professional Services", text: "Contact business prospects and identify companies requiring further sales conversations." },
  { icon: ShoppingBag, title: "Retail & E-commerce", text: "Follow up product enquiries, promotions and customer interest." },
];

const whyOutsource = [
  { icon: Users, title: "Follow Up More Leads", text: "Your internal sales team may not have enough time to contact every enquiry." },
  { icon: Timer, title: "Save Sales Team Time", text: "Let your salespeople focus on qualified follow-up conversations while the initial calling process is handled separately." },
  { icon: Search, title: "Understand Your Prospects", text: "Find out what your leads are actually looking for." },
  { icon: ListChecks, title: "Reduce Untouched Leads", text: "Give more of your enquiries an opportunity to respond." },
  { icon: FileSpreadsheet, title: "Get Structured Feedback", text: "Turn conversations into useful information for your sales and marketing teams." },
  { icon: Layers, title: "Flexible Campaigns", text: "Run lead follow-up campaigns around specific products, services, promotions or lead databases." },
];

const whyCypher = [
  { icon: Target, title: "Sales-Focused Follow-Up", text: "Our process is designed around helping your sales team understand and follow up with prospects." },
  { icon: ListChecks, title: "Structured Qualification", text: "Qualification questions can be customized around your campaign." },
  { icon: MessageSquareText, title: "Customer Feedback", text: "Go beyond simply knowing whether a prospect answered the phone." },
  { icon: FileSpreadsheet, title: "Clear Reporting", text: "Receive structured information about call outcomes and prospect feedback." },
  { icon: Layers, title: "Flexible Campaigns", text: "Run campaigns based on your lead volume and business requirements." },
  { icon: Megaphone, title: "Integrated Digital Marketing", text: "Lead follow-up can work alongside your digital advertising and lead-generation campaigns." },
];

const LeadForm = () => {
  const [f, setF] = useState({ name: "", business: "", phone: "", leads: "", source: "", message: "" });
  const set = (k: keyof typeof f) => (e: any) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hi Cypher Digital, I'd like a lead follow-up proposal.\nName: ${f.name}\nBusiness: ${f.business}\nPhone: ${f.phone}\nApprox. leads: ${f.leads}\nLead source: ${f.source}\nNotes: ${f.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };
  const input = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 shadow-lg space-y-3">
      <h3 className="font-heading font-bold text-lg text-foreground">Request a campaign proposal</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <input required maxLength={80} placeholder="Your name" aria-label="Your name" className={input} value={f.name} onChange={set("name")} />
        <input required maxLength={100} placeholder="Business name" aria-label="Business name" className={input} value={f.business} onChange={set("business")} />
        <input required maxLength={20} type="tel" placeholder="Phone number" aria-label="Phone number" className={input} value={f.phone} onChange={set("phone")} />
        <input maxLength={30} placeholder="Approx. number of leads" aria-label="Approximate number of leads" className={input} value={f.leads} onChange={set("leads")} />
      </div>
      <input maxLength={100} placeholder="Where do your leads come from? (e.g. Facebook, website)" aria-label="Lead source" className={input} value={f.source} onChange={set("source")} />
      <textarea maxLength={500} rows={3} placeholder="What would you like to find out from your prospects?" aria-label="Campaign notes" className={input} value={f.message} onChange={set("message")} />
      <Button type="submit" size="lg" className="w-full bg-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,45%)] !text-white font-semibold border-none min-h-12">
        Send via WhatsApp <MessageCircle className="w-4 h-4 ml-1" />
      </Button>
    </form>
  );
};

const LeadFollowUpServices = () => (
  <div>
    <SEOHead
      title="Lead Follow-Up Services Sri Lanka | Lead Qualification | Cypher Digital"
      description="Lead follow-up services in Sri Lanka. We contact your prospects, understand their requirements, collect customer feedback and identify opportunities for your sales team."
      canonical={URL}
    />
    {schemas.map((s, i) => (
      <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
    ))}
    <PageBreadcrumb items={[{ label: "Lead Follow-Up Services" }]} />

    {/* Hero */}
    <section className="relative overflow-hidden bg-background py-14 md:py-20 border-b border-border">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom_right,hsl(252,65%,96%),transparent_55%)]" aria-hidden="true" />
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center relative">
        <div>
          <Eyebrow>Lead Follow-Up · Prospect Qualification</Eyebrow>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">Lead Follow-Up Services in Sri Lanka</h1>
          <p className="font-heading text-xl md:text-2xl font-bold text-primary mb-5">Turn Your Leads Into Real Sales Opportunities</p>
          <p className="text-lg font-semibold text-foreground mb-3">You generate the leads. We make the first call.</p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Cypher Digital helps businesses follow up with their leads and prospects, understand their requirements, identify their level of interest and collect useful customer feedback.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-7">
            Your sales team receives a structured list showing who responded, what they are looking for and which prospects require further follow-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Cta label="Get Started" />
            <Button asChild size="lg" variant="outline" className="min-h-12">
              <a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4 mr-1" /> Talk to Our Team</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-primary/5 blur-xl pointer-events-none" aria-hidden="true" />
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">From enquiry to opportunity</p>
            <ol className="space-y-2">
              <li className="rounded-xl border border-dashed border-border bg-secondary/50 px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-secondary text-foreground/70 flex items-center justify-center shrink-0"><Database className="w-5 h-5" /></span>
                  <div>
                    <p className="text-sm font-bold text-foreground">01 · Your lead list</p>
                    <p className="text-xs text-muted-foreground">Enquiries from your campaigns, waiting for a first call.</p>
                  </div>
                </div>
              </li>
              <li className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary" /></li>
              <li className="rounded-xl bg-primary px-4 py-3.5 shadow-md shadow-primary/25">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0"><PhoneOutgoing className="w-5 h-5" /></span>
                  <div>
                    <p className="text-sm font-bold text-white">02 · We make the first call</p>
                    <p className="text-xs text-white/75">Requirement understanding, qualification questions and customer feedback.</p>
                  </div>
                </div>
              </li>
              <li className="flex justify-center"><ArrowDown className="w-4 h-4 text-primary" /></li>
              <li className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3.5">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0"><UserCheck className="w-5 h-5" /></span>
                  <p className="text-sm font-bold text-foreground">03 · Your sales team gets the opportunity</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-12">
                  <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-primary/10 text-primary">Interested</span>
                  <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-primary/10 text-primary">Potential customer</span>
                  <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-accent/20 text-accent border border-accent/50">Needs more information</span>
                  <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-muted text-muted-foreground">Follow up later</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl">
        <H2>Your Leads Are Only Valuable When Someone Follows Them Up.</H2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>Marketing campaigns can generate hundreds of enquiries and potential customers. But every lead needs a timely follow-up.</p>
          <p>Cypher Digital helps businesses make that important first conversation.</p>
          <p>Give us your lead list. Our team contacts your prospects, understands their requirements, identifies their level of interest and records useful customer feedback.</p>
          <p>You then receive a structured follow-up list that helps your sales team focus on the prospects who need further attention.</p>
        </div>
        <div className="mt-6"><Cta label="Start Your Lead Follow-Up Campaign" /></div>
      </div>
    </Section>

    <Section alt>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Eyebrow>The basics</Eyebrow>
          <H2>What Is Lead Follow-Up?</H2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>Lead follow-up is the process of contacting people who have already shown interest in your business, product or service.</p>
            <p>These leads may come from Facebook advertising, Google Ads, websites, landing pages, WhatsApp, email campaigns, events, promotions or an existing customer database. If you're still building that pipeline, <L to="/social-media-lead-generation-sri-lanka">learn more about social media lead generation</L>.</p>
            <p>Instead of leaving those leads sitting in a spreadsheet or CRM, a calling team contacts them and finds out what they actually need.</p>
            <p className="font-semibold text-foreground">The objective is simple: help your sales team understand which prospects need attention and what each prospect is looking for.</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-heading font-bold text-foreground mb-4">A lead follow-up call can help you understand:</h3>
          <Checks items={["Who answered the call", "Whether the prospect is interested", "What product or service they are interested in", "What the prospect is looking for", "Whether they need more information", "What questions or concerns they have", "Whether they want a salesperson to contact them", "Whether they want to be contacted later", "Whether they are not currently interested"]} />
        </div>
      </div>
    </Section>

    <Section id="how-it-works">
      <Eyebrow>Six steps</Eyebrow>
      <H2>How Our Lead Follow-Up Service Works</H2>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {steps.map(({ icon: Icon, t, c }, i) => (
          <li key={t} className={`relative rounded-xl border bg-card p-5 transition-all hover:-translate-y-0.5 ${i === 5 ? "border-primary/50 shadow-md shadow-primary/10 hover:shadow-lg" : "border-border shadow-sm hover:shadow-md"}`}>
            <span className="absolute top-4 right-4 font-heading text-3xl font-extrabold text-primary/15">{i + 1}</span>
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-3"><Icon className="w-5 h-5" /></div>
            <h3 className="font-heading font-bold text-foreground mb-1.5">Step {i + 1}: {t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c}</p>
            {i === 0 && (
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold text-foreground">Sources:</span> Facebook campaigns, Google Ads, website enquiries, landing pages, WhatsApp, email campaigns, events, promotions, previous enquiries, existing databases.
              </p>
            )}
            {i === 5 && <span className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-primary" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <div className="mt-8"><Cta label="Discuss Your Lead Follow-Up Campaign" /></div>
    </Section>

    <Section alt>
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <Eyebrow>What you receive</Eyebrow>
          <H2>What Information Can We Collect From Your Prospects?</H2>
          <p className="text-muted-foreground leading-relaxed mb-5">A successful follow-up campaign should provide more than a simple "answered" or "not answered" result. Depending on your campaign, we can collect information such as:</p>
          <Checks items={["Prospect name", "Contact details", "Call status", "Product or service interest", "Customer requirement", "Level of interest", "Questions", "Concerns", "Customer feedback", "Expected purchase timeframe", "Preferred follow-up time", "Request for additional information", "Recommended next action"]} />
        </div>
        <figure className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden" aria-label="Sample lead follow-up report">
          <div className="flex items-center justify-between bg-primary px-5 py-3 text-primary-foreground">
            <span className="flex items-center gap-2 text-sm font-semibold"><FileSpreadsheet className="w-4 h-4" /> Lead follow-up report</span>
            <span className="text-[10px] uppercase tracking-widest opacity-80">Sample</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border bg-secondary/50">
                  <th className="px-4 py-2.5 font-semibold">Prospect</th>
                  <th className="px-4 py-2.5 font-semibold">Call status</th>
                  <th className="px-4 py-2.5 font-semibold">Interest</th>
                  <th className="px-4 py-2.5 font-semibold">Next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "John", status: "Answered", tone: "bg-primary/10 text-primary", interest: "Interested", step: "Sales team to follow up", strong: true },
                  { name: "Kamala", status: "Answered", tone: "bg-accent/20 text-accent border border-accent/50", interest: "Needs more information", step: "Send details, call again" },
                  { name: "Ruwan", status: "No answer", tone: "bg-muted text-muted-foreground", interest: "Unknown", step: "Retry at a later time" },
                ].map((r) => (
                  <tr key={r.name} className={r.strong ? "bg-primary/[0.04]" : ""}>
                    <td className="px-4 py-3 font-semibold text-foreground">{r.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.status}</td>
                    <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap ${r.tone}`}>{r.interest}</span></td>
                    <td className="px-4 py-3 text-foreground/80">{r.step}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="px-5 py-3 text-xs text-muted-foreground bg-secondary/60">Example only — fields and statuses are agreed per campaign.</figcaption>
        </figure>
      </div>
    </Section>

    <Section>
      <Eyebrow>Lead status</Eyebrow>
      <H2>We Help You Understand the Status of Every Lead</H2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {statuses.map(({ icon: Icon, title, text, tone }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-3 ${tone}`}><Icon className="w-3.5 h-3.5" />{title}</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section alt>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Eyebrow>Qualification</Eyebrow>
          <H2>Lead Qualification Services</H2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>Not every lead has the same level of value or urgency.</p>
            <p>Lead qualification helps your sales team understand which prospects may require immediate attention, which prospects need more information and which prospects may not require further follow-up.</p>
            <p>Our qualification process can be customized around your business. The questions can be designed around your campaign objectives.</p>
          </div>
          <div className="mt-6"><Cta label="Qualify Your Leads" /></div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-heading font-bold text-foreground mb-4">Example qualification questions</h3>
          <ol className="space-y-2.5">
            {["Are they interested?", "What product or service are they interested in?", "What are they looking for?", "When are they planning to make a decision?", "Do they need more information?", "Would they like a salesperson to contact them?"].map((q, i) => (
              <li key={q} className="flex gap-3 text-sm text-foreground/80"><span className="font-heading font-bold text-primary">Q{i + 1}</span>{q}</li>
            ))}
          </ol>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <H2>Prospect Follow-Up Services in Sri Lanka</H2>
          <div className="space-y-3 text-muted-foreground leading-relaxed mb-5">
            <p>A prospect may have shown interest in your business but may not be ready to speak to your sales team immediately.</p>
            <p>Our prospect follow-up service helps you start the conversation and understand where the prospect currently stands. We can help identify prospects who:</p>
          </div>
          <Checks items={["Are actively interested", "Need additional information", "Want a quotation", "Want a salesperson to contact them", "Need more time", "Want to be contacted later", "Are not currently interested"]} />
          <p className="text-muted-foreground mt-4">This gives your sales team useful context before continuing the conversation.</p>
        </div>
        <div>
          <H2>Customer Feedback Calling</H2>
          <div className="space-y-3 text-muted-foreground leading-relaxed mb-5">
            <p>Your prospects can provide valuable information that cannot always be seen in advertising dashboards.</p>
            <p>Analytics can tell you how many people clicked an advertisement or submitted an enquiry. A conversation can tell you why they enquired and what they actually want.</p>
          </div>
          <Checks items={["What prospects are looking for", "What products or services interest them", "What questions they have", "What concerns they have", "Why some prospects are not interested", "What information they need", "Whether they want further contact"]} />
          <p className="text-muted-foreground mt-4">This information can help your sales and marketing teams understand the quality of their leads and improve future campaigns — for example, when refining your <L to="/social-media-advertising-sri-lanka">social media advertising</L> targeting.</p>
        </div>
      </div>
    </Section>

    <Section alt>
      <Eyebrow>Sales handover</Eyebrow>
      <H2>Give Your Sales Team Better Follow-Up Information</H2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">Your sales team does not need to start every conversation from zero. After the initial follow-up process, they can receive useful information about the prospect.</p>
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
        <div className="rounded-xl border border-dashed border-border bg-secondary/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Instead of</p>
          <p className="font-heading text-lg font-bold text-foreground/70">"Here are 500 leads. Call everyone."</p>
        </div>
        <div className="flex md:flex-col items-center justify-center gap-1 text-primary">
          <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
          <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest">Cypher</span>
        </div>
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-6 shadow-md shadow-primary/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Your sales team receives</p>
          <p className="text-foreground leading-relaxed">"These prospects answered, these prospects showed interest, these prospects need more information, these prospects want a follow-up later, and these prospects are not currently interested."</p>
        </div>
      </div>
      <p className="font-semibold text-foreground mt-6">The goal is to give your sales team better information before the next conversation.</p>
    </Section>

    <Section>
      <Eyebrow>Marketing funnel</Eyebrow>
      <H2>Connect Your Marketing With Your Sales Team</H2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">Your advertising campaign should not end when someone submits an enquiry. Lead follow-up connects your marketing activity with the next stage of the customer journey.</p>
      <Flow highlight={2} steps={["Digital Advertising", "Lead Generation", "Lead Follow-Up", "Prospect Qualification", "Customer Feedback", "Sales Team Follow-Up", "Sales Opportunity"]} />
      <p className="text-muted-foreground leading-relaxed max-w-3xl mt-6">
        Cypher Digital can help businesses connect their digital marketing activities with structured lead follow-up and prospect qualification — whether leads come from <L to="/facebook-ads-sri-lanka">generating leads through Facebook advertising</L>, <L to="/google-ads-sri-lanka">Google Ads search campaigns</L> or broader <L to="/social-media-management-sri-lanka">social media marketing</L>.
      </p>
    </Section>

    <Section alt>
      <Eyebrow>Lead sources</Eyebrow>
      <H2>Follow Up Leads From Your Marketing Campaigns</H2>
      <div className="mt-6"><CardGrid items={sources} /></div>
    </Section>

    <Section>
      <Eyebrow>Industries</Eyebrow>
      <H2>Lead Follow-Up for Different Industries</H2>
      <div className="mt-6"><CardGrid items={industries} /></div>
    </Section>

    <Section alt>
      <H2>Why Outsource Lead Follow-Up?</H2>
      <div className="mt-6"><CardGrid items={whyOutsource} /></div>
    </Section>

    <Section>
      <H2>Why Choose Cypher Digital for Lead Follow-Up?</H2>
      <div className="mt-6"><CardGrid items={whyCypher} /></div>
      <p className="text-muted-foreground mt-6 max-w-3xl"><L to="/social-media-lead-generation-sri-lanka">Combine lead generation with lead follow-up</L> so every enquiry from your campaigns gets a first conversation.</p>
    </Section>

    <Section alt>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Eyebrow>Focused scope</Eyebrow>
          <H2>A Specialized Lead Follow-Up Service</H2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>Our lead follow-up service is not designed to replace every type of call center operation. It focuses on one specific stage of the customer journey: following up with your existing leads and prospects.</p>
            <p>Traditional call center services may include customer support, inbound calls, technical support and other telephone operations.</p>
            <p>This focused approach makes the service suitable for businesses that already generate leads and need help contacting and understanding those prospects.</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-heading font-bold text-foreground mb-4">Our lead follow-up service focuses on:</h3>
          <Flow vertical steps={["Lead List", "Initial Call", "Requirement Understanding", "Qualification", "Customer Feedback", "Sales Follow-Up"]} />
        </div>
      </div>
    </Section>

    <Section>
      <H2>Lead Generation vs Lead Follow-Up</H2>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {[
          { h: "Lead Generation", p: "Find and attract potential customers.", ex: ["Facebook Ads", "Google Ads", "SEO", "Social Media Marketing", "Email Marketing", "SMS Marketing", "WhatsApp Marketing"] },
          { h: "Lead Follow-Up", p: "Contact and understand people who have already become leads or prospects.", ex: ["Initial calling", "Requirement understanding", "Lead qualification", "Customer feedback", "Prospect follow-up", "Sales handover"] },
        ].map((c, i) => (
          <div key={c.h} className={`rounded-xl p-6 bg-card ${i ? "border-2 border-primary shadow-md" : "border border-border"}`}>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{c.h}</h3>
            <p className="text-sm text-muted-foreground mb-4"><span className="font-semibold text-foreground">Purpose:</span> {c.p}</p>
            <div className="flex flex-wrap gap-2">{c.ex.map((e) => <span key={e} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">{e}</span>)}</div>
          </div>
        ))}
      </div>
      <p className="font-heading text-lg font-bold text-foreground mt-6">Lead generation creates the opportunity. Lead follow-up helps your business understand what to do with that opportunity.</p>
      <p className="text-sm text-muted-foreground mt-2">Related: <L to="/seo-services-sri-lanka">SEO services</L> · <L to="/social-media-campaigns-sri-lanka">social media campaigns</L> · <L to="/">Cypher Digital's digital marketing services</L></p>
      <p className="text-sm text-muted-foreground mt-2">Guides: <L to="/blog/what-is-lead-follow-up">what is lead follow-up</L> · <L to="/blog/how-to-qualify-leads">how to qualify leads</L> · <L to="/blog/how-to-follow-up-facebook-leads">following up Facebook leads</L> · <L to="/blog/why-marketing-leads-are-not-converting">why leads don't convert</L> · <L to="/blog/lead-generation-vs-lead-qualification-vs-lead-follow-up">lead generation vs qualification</L></p>
    </Section>

    <Section alt id="faq">
      <H2>Frequently Asked Questions</H2>
      <div className="mt-6 space-y-3 max-w-4xl">
        {faqs.map(([q, a]) => (
          <details key={q} className="group rounded-xl border border-border bg-card p-5">
            <summary className="cursor-pointer list-none flex justify-between gap-4 font-heading font-bold text-foreground">
              <h3 className="text-base">{q}</h3><span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">{a}</p>
          </details>
        ))}
      </div>
    </Section>

    <section id="contact" className="py-14 md:py-20 bg-[linear-gradient(to_bottom,hsl(252,65%,97%),hsl(252,65%,93%))]">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <H2>Don't Let Your Leads Go Cold</H2>
          <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
            <p>You've already invested in generating the lead. Now make sure someone follows it up.</p>
            <p>Give Cypher Digital your prospect list. We'll make the first call, understand the requirement, collect the feedback and give your sales team the information they need for the next conversation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Cta label="Start Your Lead Follow-Up Campaign" />
            <Button asChild size="lg" variant="outline" className="min-h-12"><Link to="/contact">Contact Cypher Digital</Link></Button>
          </div>
          <div className="space-y-2 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-foreground hover:text-primary"><Phone className="w-4 h-4 text-primary" /> {PHONE_DISPLAY}</a>
            <a href={WA_START} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp {PHONE_DISPLAY}</a>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  </div>
);

export default LeadFollowUpServices;
