import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import { CheckCircle, ArrowRight, MessageCircle, Zap, Rocket } from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";
import OurWorkSection from "@/components/OurWorkSection";

const services = [
  "Product launch event planning and execution",
  "Venue selection and stage design",
  "Media and press event coordination",
  "Influencer and VIP guest management",
  "Live demonstrations and product showcases",
  "Brand activation and experiential zones",
  "Audio-visual production and live streaming",
  "Social media coverage and live posting",
  "Post-launch marketing and PR",
  "Lead generation and attendee follow-up",
];

const faqs = [
  { q: "How much does a product launch event cost in Sri Lanka?", a: "Product launch event costs vary based on scale, venue, and production requirements. Small launches start from LKR 300,000 while large-scale launches can exceed LKR 2,000,000+. Contact us for a tailored quote." },
  { q: "How far in advance should I plan a product launch?", a: "We recommend planning 6-8 weeks in advance for medium launches and 2-3 months for large-scale events with media coverage." },
  { q: "Do you handle media and press for product launches?", a: "Yes, we coordinate media invitations, press kits, press releases, and post-event media coverage as part of our product launch services." },
  { q: "Can you help with virtual product launches?", a: "Yes, we provide full virtual and hybrid product launch management including live streaming, virtual demonstrations, and online audience engagement." },
];

const ProductLaunchEvents = () => {
  const canonical = "https://cypherdigital.lk/product-launch-events-sri-lanka";

  useEffect(() => {
    const schemas = [
      { "@context": "https://schema.org", "@type": "Service", name: "Product Launch Events Sri Lanka", description: "Professional product launch event management in Sri Lanka by Cypher Digital.", provider: { "@type": "LocalBusiness", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" } },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
        { "@type": "ListItem", position: 2, name: "Event Management", item: "https://cypherdigital.lk/event-management-sri-lanka" },
        { "@type": "ListItem", position: 3, name: "Product Launch Events", item: canonical },
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
      <SEOHead title="Product Launch Events Sri Lanka | Launch Event Planners | Cypher Digital" description="Professional product launch event management in Sri Lanka. Planning, execution, media coordination & marketing. Make your product launch unforgettable." canonical={canonical} />

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center animate-fade-up">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6"><Rocket className="w-6 h-6" /></div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Product Launch Experts</p>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Product Launch Events Sri Lanka</h1>
          <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-2xl mx-auto">
            Strategic product launch events designed to generate buzz, media coverage, and sales. We combine creative execution with digital marketing to ensure your product launch makes maximum impact in the Sri Lankan market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 text-sm px-7 h-12 rounded-xl">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20product%20launch%20event" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <MessageCircle className="w-4 h-4 ml-1" /></a>
            </Button>
            <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20product%20launch%20quote" target="_blank" rel="noopener noreferrer">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">Our Product Launch Services</h2>
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
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-4">Why Your Product Launch Needs Experts</h2>
          <p className="text-sm text-muted-foreground text-center mb-10 max-w-2xl mx-auto">A product launch is more than an event — it's the first impression your product makes on the market. Professional execution ensures your launch generates the buzz, media coverage, and sales momentum your product deserves.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Create memorable first impressions that drive word-of-mouth", "Generate media coverage and press mentions", "Build anticipation through strategic pre-launch campaigns", "Convert attendees into early adopters and brand advocates", "Create content assets for ongoing marketing use", "Ensure flawless execution that reflects your brand quality"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">FAQ – Product Launch Events Sri Lanka</h2>
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
            <Link to="/corporate-event-management-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Corporate Events</span></Link>
            <Link to="/event-marketing-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Event Marketing</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">Launch Your Product with Impact</h2>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">Get a free consultation and custom launch event plan. We'll make your product launch unforgettable.</p>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Cypher Digital" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Let's plan your product launch!</p>
                  <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                    <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20product%20launch%20event" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out on WhatsApp.</p>
              <InquiryForm service="Product Launch Event" />
            </div>
          </div>
        </div>
      </section>
      <OurWorkSection service="a product launch event" />
    </div>
  );
};

export default ProductLaunchEvents;
