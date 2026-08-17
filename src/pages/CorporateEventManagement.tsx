import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import { CheckCircle, ArrowRight, MessageCircle, Briefcase, Users, Award, Target, BarChart3, Zap } from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";

const services = [
  "Conferences and seminars",
  "Business forums and networking events",
  "Product launches and brand events",
  "Exhibitions and trade shows",
  "Corporate parties and award ceremonies",
  "Employee engagement events",
  "Training programs and workshops",
  "Team-building events",
  "Hybrid and virtual events",
  "Annual general meetings",
  "Investor and stakeholder meetings",
];

const benefits = [
  { icon: <Target className="w-5 h-5" />, title: "Strategic Planning", desc: "Every corporate event is designed to achieve specific business objectives" },
  { icon: <Users className="w-5 h-5" />, title: "Audience Engagement", desc: "Interactive formats that keep attendees engaged and participating" },
  { icon: <Award className="w-5 h-5" />, title: "Brand Enhancement", desc: "Professional execution that reflects positively on your organization" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Measurable Results", desc: "Post-event analytics and ROI tracking for every corporate event" },
];

const faqs = [
  { q: "What corporate events do you manage in Sri Lanka?", a: "We manage conferences, seminars, product launches, exhibitions, award ceremonies, team-building events, training workshops, AGMs, and more across Sri Lanka." },
  { q: "How much does corporate event management cost in Sri Lanka?", a: "Corporate event costs vary based on scale, venue, and requirements. Small events start from LKR 200,000 while large-scale conferences can range from LKR 1,000,000+. Contact us for a custom quote." },
  { q: "Do you handle virtual and hybrid corporate events?", a: "Yes, we provide full hybrid and virtual event management including live streaming, virtual platforms, interactive sessions, and technical support." },
  { q: "How far in advance should we book?", a: "We recommend booking at least 4-6 weeks in advance for medium events and 2-3 months for large corporate events. However, we can accommodate shorter timelines." },
];

const CorporateEventManagement = () => {
  const canonical = "https://cypherdigital.lk/corporate-event-management-sri-lanka";

  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org", "@type": "Service",
        name: "Corporate Event Management Sri Lanka",
        description: "Professional corporate event management services in Sri Lanka including conferences, product launches, exhibitions and team-building events.",
        provider: { "@type": "LocalBusiness", name: "Cypher Digital", url: "https://cypherdigital.lk" },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
      },
      {
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
          { "@type": "ListItem", position: 2, name: "Event Management", item: "https://cypherdigital.lk/event-management-sri-lanka" },
          { "@type": "ListItem", position: 3, name: "Corporate Event Management", item: canonical },
        ],
      },
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead title="Corporate Event Management Sri Lanka | Conferences & Business Events | Cypher Digital" description="Professional corporate event management in Sri Lanka. Conferences, seminars, product launches, exhibitions & team-building events. Get a free consultation today." canonical={canonical} />

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center animate-fade-up">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6"><Briefcase className="w-6 h-6" /></div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Corporate Events Sri Lanka</p>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Corporate Event Management Sri Lanka</h1>
          <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-2xl mx-auto">
            Professional corporate event management services designed to enhance your brand, engage your audience, and deliver measurable business results. From conferences to product launches, we handle everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 text-sm px-7 h-12 rounded-xl">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20corporate%20event%20management" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <MessageCircle className="w-4 h-4 ml-1" /></a>
            </Button>
            <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20quote%20for%20a%20corporate%20event" target="_blank" rel="noopener noreferrer">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>
      <OurWorkSection service="corporate event management" />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Corporate Event Services</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">We deliver professional corporate events that enhance your brand and create real business impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">Why Choose Us for Corporate Events</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{b.icon}</div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">FAQ – Corporate Events Sri Lanka</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-card border border-border rounded-xl p-5">
                <summary className="font-heading text-sm font-semibold cursor-pointer list-none flex items-center justify-between">{f.q}<Zap className="w-4 h-4 text-primary shrink-0 group-open:rotate-90 transition-transform" /></summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-xl font-extrabold text-center mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/event-management-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Event Management Sri Lanka</span></Link>
            <Link to="/product-launch-events-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Product Launch Events</span></Link>
            <Link to="/event-marketing-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Event Marketing</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">Plan Your Corporate Event Today</h2>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">Get a free consultation and custom quotation for your corporate event. We handle everything from planning to execution.</p>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Cypher Digital" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Let's plan your corporate event!</p>
                  <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                    <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20corporate%20event%20management" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out on WhatsApp.</p>
              <InquiryForm service="Corporate Event Management" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateEventManagement;
