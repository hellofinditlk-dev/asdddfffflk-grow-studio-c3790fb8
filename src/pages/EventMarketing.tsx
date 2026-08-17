import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import { CheckCircle, ArrowRight, MessageCircle, Megaphone, Zap } from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";
import OurWorkSection from "@/components/OurWorkSection";

const services = [
  "Pre-event social media campaigns",
  "Event-based digital advertising",
  "Email marketing and invitations",
  "Content creation for event promotion",
  "Influencer partnerships for events",
  "Live event social media coverage",
  "Post-event video production",
  "Lead capture and CRM integration",
  "Audience retargeting campaigns",
  "Event landing page creation",
  "Post-event content repurposing",
];

const faqs = [
  { q: "What is event marketing?", a: "Event marketing is the strategic promotion of events through digital channels including social media, email, paid advertising, and content marketing to maximize attendance, engagement, and ROI." },
  { q: "How can event marketing help my business?", a: "Event marketing increases event attendance, generates leads, builds brand awareness, and creates content that continues to drive value long after the event ends." },
  { q: "Do you provide post-event marketing?", a: "Yes, our event marketing services include post-event content repurposing, video production, email follow-ups, and retargeting campaigns to maximize long-term ROI." },
  { q: "How much does event marketing cost in Sri Lanka?", a: "Event marketing costs depend on campaign scope and channels. Packages start from LKR 100,000. Contact us for a custom quotation." },
];

const EventMarketing = () => {
  const canonical = "https://cypherdigital.lk/event-marketing-sri-lanka";

  useEffect(() => {
    const schemas = [
      { "@context": "https://schema.org", "@type": "Service", name: "Event Marketing Sri Lanka", description: "Digital marketing services for events in Sri Lanka including social media promotion, content creation and lead generation.", provider: { "@type": "LocalBusiness", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" } },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
        { "@type": "ListItem", position: 2, name: "Event Management", item: "https://cypherdigital.lk/event-management-sri-lanka" },
        { "@type": "ListItem", position: 3, name: "Event Marketing", item: canonical },
      ] },
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead title="Event Marketing Sri Lanka | Digital Promotion for Events | Cypher Digital" description="Event marketing services in Sri Lanka. Social media promotion, digital advertising, content creation & lead generation for events. Maximize your event ROI." canonical={canonical} />

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center animate-fade-up">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6"><Megaphone className="w-6 h-6" /></div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Event Promotion Sri Lanka</p>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Event Marketing Sri Lanka</h1>
          <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-2xl mx-auto">
            Maximize your event's reach, attendance, and ROI with strategic digital marketing. We combine social media, paid advertising, and content creation to ensure your event gets the attention it deserves — before, during, and after.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 text-sm px-7 h-12 rounded-xl">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20event%20marketing%20services" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <MessageCircle className="w-4 h-4 ml-1" /></a>
            </Button>
            <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20event%20marketing%20quote" target="_blank" rel="noopener noreferrer">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">Our Event Marketing Services</h2>
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
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-4">Why Event Marketing Matters</h2>
          <p className="text-sm text-muted-foreground text-center mb-10 max-w-2xl mx-auto">Events without marketing are like products without advertising. Our digital-first approach ensures your event reaches the right audience and delivers measurable business results.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Increase event attendance by 3x with targeted campaigns", "Generate qualified leads before and during events", "Create content assets that work long after the event", "Build brand authority through event thought leadership", "Track ROI with detailed analytics and reporting", "Retarget attendees for future conversions"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">FAQ – Event Marketing Sri Lanka</h2>
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
            <Link to="/social-media-management-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Social Media Management</span></Link>
            <Link to="/facebook-ads-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Facebook Ads</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">Promote Your Event with Cypher Digital</h2>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">Get a free marketing strategy consultation for your upcoming event. We'll create a plan to maximize attendance and ROI.</p>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Cypher Digital" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Let's promote your event!</p>
                  <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                    <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20event%20marketing" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out on WhatsApp.</p>
              <InquiryForm service="Event Marketing" />
            </div>
          </div>
        </div>
      </section>
      <OurWorkSection service="event marketing" />
    </div>
  );
};

export default EventMarketing;
