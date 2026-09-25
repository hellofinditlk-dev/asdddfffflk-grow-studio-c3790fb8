import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const CANONICAL = "https://cypherdigital.lk/call-center-outsourcing-sri-lanka";
const WA = "https://wa.me/94760317477?text=Hi%20Cypher%20Digital%2C%20I%27d%20like%20to%20start%20a%20first-call%20campaign.";
const TEL = "tel:+94760317477";
const TEL_DISPLAY = "076 031 7477";

const faqs = [
  { q: "What exactly do you do?", a: "We make the first call to your leads, understand what they need, and send your team feedback on each one so your salespeople can focus on converting." },
  { q: "Do you do the selling?", a: "No. We start the conversation and gather the information. Your own sales team handles pricing, negotiation and closing." },
  { q: "Do I provide the leads?", a: "Yes. You share your lead list and we call it. If you need leads as well, we can run the campaigns that generate them." },
  { q: "Can you call Facebook and Google Ads leads?", a: "Yes, along with website, WhatsApp, event and database leads." },
  { q: "How do I receive the feedback?", a: "As a structured report showing each lead's status, requirement and recommended next step. The format is agreed for each campaign." },
  { q: "How much does it cost?", a: "It depends on the number of leads, call attempts, questions and reporting needed. Message us for a campaign-specific quote." },
];

const steps = [
  { n: "01", t: "You send your leads", d: "From Facebook, Google Ads, your website, WhatsApp, events or an old customer list." },
  { n: "02", t: "We make the first call", d: "Our team calls each lead on behalf of your business and starts the conversation." },
  { n: "03", t: "We understand the person", d: "What they need, how interested they are, their questions, and when they'll decide." },
  { n: "04", t: "We give you feedback", d: "A clear report on every lead: status, requirement and the next step for sales." },
  { n: "05", t: "Your team converts", d: "Salespeople call the right people, already knowing what each one needs." },
];

const checks = [
  "Are they interested?",
  "Which product or service do they want?",
  "What is their actual requirement?",
  "What questions or concerns do they have?",
  "When do they expect to decide?",
  "Do they want a salesperson to call?",
  "When is the best time to call back?",
];

const benefits = [
  { t: "Save sales time", d: "Hours back every week for real sales conversations." },
  { t: "Every lead gets called", d: "Not just the ones your team finds time for." },
  { t: "Faster response", d: "Leads are contacted while their interest is still fresh." },
  { t: "Know your customers", d: "Real feedback on what people want, not just ad clicks." },
  { t: "Sharper marketing", d: "See which campaigns bring quality leads, and improve the rest." },
  { t: "No hiring costs", d: "No recruiting, training or managing an in-house calling team." },
];

const industries = ["Real estate", "Education", "Hotels & tourism", "Vehicle sales", "Insurance", "Banking & finance", "Healthcare", "Retail & e-commerce", "B2B services"];

const pillStyles: Record<string, string> = {
  Interested: "bg-green-100 text-green-800",
  "Needs info": "bg-blue-100 text-blue-800",
  Later: "bg-amber-100 text-amber-800",
  "No answer": "bg-muted text-muted-foreground",
};

const reportRows = [
  { name: "Nimal", status: "Interested", detail: "3-bed apartment · call today" },
  { name: "Shanika", status: "Needs info", detail: "Course fees · call Friday" },
  { name: "Ruwan", status: "Later", detail: "Buying next quarter" },
  { name: "Priya", status: "No answer", detail: "We retry" },
];

const tableRows = [
  { name: "Nimal", status: "Interested", wants: "3-bed apartment, Colombo 5", next: "Call today with options" },
  { name: "Shanika", status: "Needs info", wants: "Course fees and start dates", next: "Send brochure, call Friday" },
  { name: "Ruwan", status: "Later", wants: "Buying next quarter", next: "Follow up in 2 months" },
  { name: "Priya", status: "No answer", wants: "—", next: "We retry" },
];

const statusText: Record<string, string> = {
  Interested: "text-green-700 font-semibold",
  "Needs info": "text-blue-700 font-semibold",
  Later: "text-amber-700 font-semibold",
  "No answer": "text-muted-foreground",
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Call Center Outsourcing Sri Lanka",
    description: "First-call and feedback service in Sri Lanka. We call your leads, understand what each person needs and send clear feedback so your sales team can focus on converting.",
    provider: {
      "@type": "LocalBusiness",
      name: "Cypher Digital",
      url: "https://cypherdigital.lk",
      telephone: "+94760317477",
      address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    url: CANONICAL,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: "Call Center Outsourcing Sri Lanka", item: CANONICAL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const Eyebrow = ({ children, dark }: { children: string; dark?: boolean }) => (
  <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${dark ? "text-[hsl(25,95%,70%)]" : "text-primary"}`}>{children}</p>
);

const CallCenterOutsourcing = () => {
  return (
    <div className="pt-16">
      <SEOHead
        title="Call Center Outsourcing Sri Lanka | First-Call & Feedback Service | Cypher Digital"
        description="We make the first call to your leads, understand what they need and send you clear feedback, so your sales team can focus on converting. Call center outsourcing in Sri Lanka."
        canonical={CANONICAL}
      />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* HERO */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-fade-up">
              <Eyebrow dark>Call Center Outsourcing · Sri Lanka</Eyebrow>
              <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                We make the first call. Your sales team closes the deal.
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-8">
                Send us your leads. We call them, understand what each person needs, and give you clear feedback on every conversation. Your salespeople stop chasing numbers and start converting.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[hsl(25,95%,53%)] !text-white font-semibold text-sm px-7 h-12 rounded-xl hover:bg-[hsl(25,95%,45%)] transition-colors border-none">
                  Start on WhatsApp
                </a>
                <a href={TEL} className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 h-12 rounded-xl hover:bg-white/5 transition-colors">
                  <Phone className="w-4 h-4" /> Call {TEL_DISPLAY}
                </a>
              </div>
            </div>

            {/* Example report card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <strong className="text-white font-heading text-sm">First-call feedback</strong>
                <span className="text-xs text-white/40 uppercase tracking-widest">Example</span>
              </div>
              <div className="space-y-3">
                {reportRows.map((r) => (
                  <div key={r.name} className="flex flex-wrap items-center gap-2 sm:gap-3 bg-white/5 rounded-xl px-4 py-3">
                    <b className="text-white text-sm w-20 shrink-0">{r.name}</b>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${pillStyles[r.status]}`}>{r.status}</span>
                    <span className="text-xs text-white/50 w-full sm:w-auto sm:flex-1 sm:text-right">{r.detail}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-5 text-[hsl(25,95%,70%)] text-sm font-medium">
                <ArrowRight className="w-4 h-4" />
                Handed to your sales team, ready to convert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold leading-tight">Your sales team is making the wrong calls.</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Most of a salesperson's day disappears into first calls. Numbers that don't answer. People who forgot they enquired. Someone who only wanted a price, or won't be ready for months.</p>
              <p>By the time your team finds the genuinely interested prospects, the day is gone, and many leads were never called at all.</p>
              <p className="text-foreground font-semibold">The first call matters. It just doesn't need to be made by your closers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold">First call. Feedback. Conversion.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl">
            {steps.map((s) => (
              <div key={s.n} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all">
                <div className="font-heading text-primary font-extrabold text-lg mb-3">{s.n}</div>
                <h3 className="font-heading text-sm font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE FIND OUT */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <Eyebrow>Understanding your leads</Eyebrow>
              <h2 className="font-heading text-2xl md:text-4xl font-extrabold mb-5">What we find out in the first call</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">Every call follows questions we agree with you in advance, so the feedback matches how your sales team works.</p>
              <ul className="space-y-3">
                {checks.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="text-left font-heading font-bold text-sm px-5 pt-5 pb-3">The feedback you receive</caption>
                    <thead>
                      <tr className="border-y border-border bg-secondary/60 text-left">
                        <th className="px-5 py-3 font-semibold">Lead</th>
                        <th className="px-5 py-3 font-semibold">Status</th>
                        <th className="px-5 py-3 font-semibold">Wants</th>
                        <th className="px-5 py-3 font-semibold">Next step</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.map((r) => (
                        <tr key={r.name} className="border-b border-border last:border-0">
                          <td className="px-5 py-3 font-semibold">{r.name}</td>
                          <td className={`px-5 py-3 ${statusText[r.status]}`}>{r.status}</td>
                          <td className="px-5 py-3 text-muted-foreground">{r.wants}</td>
                          <td className="px-5 py-3 text-muted-foreground">{r.next}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Example only. Fields and statuses are agreed for each campaign. Every lead gets an outcome; nothing sits untouched in a spreadsheet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-12 max-w-3xl">Your sales team focuses on converting.</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="border border-white/10 rounded-2xl p-7">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Without us</div>
              <q className="text-white/70 text-lg leading-relaxed">Here are 500 leads. Call everyone.</q>
            </div>
            <div className="border border-[hsl(25,95%,53%)]/40 bg-[hsl(25,95%,53%)]/10 rounded-2xl p-7">
              <div className="text-xs font-semibold uppercase tracking-widest text-[hsl(25,95%,70%)] mb-4">With Cypher Digital</div>
              <q className="text-white text-lg leading-relaxed">These are interested and ready to talk. These need more information. These want a call later. The rest aren't interested right now.</q>
            </div>
          </div>
          <p className="text-white/50 leading-relaxed max-w-3xl">Your salespeople start every conversation with context. They know the person's need before they dial, so they go straight to what matters: the offer, the quote, the close.</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold mb-12">Why outsource the first call?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.t} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all">
                <h3 className="font-heading text-sm font-bold mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES + INTERNAL LINKS */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">Built for businesses that generate enquiries</h2>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((i) => (
                  <span key={i} className="bg-card border border-border rounded-full px-4 py-2 text-sm">{i}</span>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-7 md:p-8 space-y-4">
              <Eyebrow>Part of our lead follow-up service</Eyebrow>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This first-call service is part of our wider{" "}
                <Link to="/lead-follow-up-services-sri-lanka" className="text-primary font-semibold hover:underline">lead follow-up services in Sri Lanka</Link>, covering lead qualification, prospect callbacks and customer feedback calling in more detail.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Need more leads to call? Our <Link to="/facebook-ads-sri-lanka" className="text-primary font-semibold hover:underline">Facebook advertising</Link>,{" "}
                <Link to="/google-ads-sri-lanka" className="text-primary font-semibold hover:underline">Google Ads</Link> and{" "}
                <Link to="/lead-generation-campaigns-sri-lanka" className="text-primary font-semibold hover:underline">lead generation campaigns</Link> bring them in, and we'll make the first call too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-card border border-border rounded-xl p-5">
                <summary className="font-heading text-sm font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <Zap className="w-4 h-4 text-primary shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6">Let us make the first call.</h2>
          <p className="text-white/50 leading-relaxed mb-10">You've already paid to get the lead. Send us your list. We'll call them, understand them and give you the feedback. Your sales team does the converting.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[hsl(25,95%,53%)] !text-white font-semibold text-sm px-7 h-12 rounded-xl hover:bg-[hsl(25,95%,45%)] transition-colors border-none">
              Start on WhatsApp
            </a>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 h-12 rounded-xl hover:bg-white/5 transition-colors">
              <Phone className="w-4 h-4" /> Call {TEL_DISPLAY}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center text-[hsl(25,95%,70%)] font-semibold text-sm px-7 h-12 rounded-xl hover:text-white transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallCenterOutsourcing;
