import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import { CheckCircle, ArrowRight, MessageCircle, Heart, Zap } from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";

const services = [
  "Full wedding planning and coordination",
  "Venue selection and inspection",
  "Decoration and theme design",
  "Catering and menu planning",
  "Entertainment and DJ booking",
  "Photography and videography coordination",
  "Invitation design and management",
  "Guest list and seating arrangements",
  "Transportation and logistics",
  "Day-of wedding coordination",
  "Honeymoon planning assistance",
];

const faqs = [
  { q: "How much does wedding planning cost in Sri Lanka?", a: "Wedding planning costs in Sri Lanka vary based on scale, venue, and requirements. Budget weddings start from LKR 500,000, while luxury weddings can exceed LKR 5,000,000+. Contact us for a tailored quote." },
  { q: "How early should I book a wedding planner?", a: "We recommend booking 6-12 months in advance for the best venue and vendor availability. However, we can accommodate shorter timelines for intimate weddings." },
  { q: "Do you handle destination weddings in Sri Lanka?", a: "Yes, we specialize in destination weddings across Sri Lanka including beach weddings in Galle, hill country weddings in Kandy, and resort weddings in Negombo." },
  { q: "What areas do you cover for wedding planning?", a: "We provide wedding planning services across all of Sri Lanka including Colombo, Kandy, Galle, Negombo, Bentota, Ella, and more." },
];

const WeddingPlanning = () => {
  const canonical = "https://cypherdigital.lk/wedding-planning-sri-lanka";

  useEffect(() => {
    const schemas = [
      { "@context": "https://schema.org", "@type": "Service", name: "Wedding Planning Sri Lanka", description: "Professional wedding planning services in Sri Lanka by Cypher Digital.", provider: { "@type": "LocalBusiness", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" } },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
        { "@type": "ListItem", position: 2, name: "Event Management", item: "https://cypherdigital.lk/event-management-sri-lanka" },
        { "@type": "ListItem", position: 3, name: "Wedding Planning", item: canonical },
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
      <SEOHead title="Wedding Planning Sri Lanka | Professional Wedding Planners | Cypher Digital" description="Expert wedding planning services in Sri Lanka. Full coordination, venue selection, decoration & vendor management. Create your dream wedding. Contact via WhatsApp." canonical={canonical} />

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center animate-fade-up">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6"><Heart className="w-6 h-6" /></div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Wedding Planners Sri Lanka</p>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Wedding Planning Sri Lanka</h1>
          <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-2xl mx-auto">
            Create beautiful, stress-free weddings tailored to your vision. Our professional wedding planning team handles everything from venue selection to day-of coordination, so you can enjoy every moment of your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 text-sm px-7 h-12 rounded-xl">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20wedding%20planning%20services" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <MessageCircle className="w-4 h-4 ml-1" /></a>
            </Button>
            <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20wedding%20planning%20quote" target="_blank" rel="noopener noreferrer">Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">Our Wedding Planning Services</h2>
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
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-4">Why Choose Cypher Digital for Your Wedding</h2>
          <p className="text-sm text-muted-foreground text-center mb-10 max-w-2xl mx-auto">We don't just plan weddings — we create unforgettable experiences. Our team combines creative vision with meticulous coordination to deliver flawless celebrations.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Creative themes tailored to your personality", "Stress-free planning from start to finish", "Strong vendor network across Sri Lanka", "Budget-friendly packages without compromising quality", "Professional day-of coordination", "Post-wedding content and social media coverage"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurWorkSection service="wedding planning" />
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-12">FAQ – Wedding Planning Sri Lanka</h2>
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
            <Link to="/event-marketing-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Event Marketing</span></Link>
            <Link to="/video-production-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"><span className="text-sm font-medium">Video Production</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">Plan Your Dream Wedding Today</h2>
              <p className="text-white/50 mb-8 text-sm leading-relaxed">Get a free consultation and custom wedding package. We handle everything so you can enjoy your special day.</p>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Cypher Digital" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Let's plan your perfect wedding!</p>
                  <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                    <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20wedding%20planning" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out on WhatsApp.</p>
              <InquiryForm service="Wedding Planning" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPlanning;
