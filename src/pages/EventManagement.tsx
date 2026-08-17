import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import {
  CheckCircle, Zap, Shield, Clock, Users, BarChart3,
  ArrowRight, MapPin, MessageCircle, Calendar, Briefcase,
  Heart, Megaphone, Star, Target, TrendingUp, Award, Lightbulb,
  XCircle, Building2, ShoppingBag, Landmark, HeartPulse, GraduationCap, Cpu,
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";
import OurWorkSection from "@/components/OurWorkSection";

const stats = [
  { value: "100+", label: "Events Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "Island", label: "Wide Coverage" },
  { value: "24hr", label: "Response Time" },
];

const whyDifferent = [
  { icon: <Calendar className="w-5 h-5" />, title: "Event Planning", desc: "End-to-end event design and logistics management" },
  { icon: <Megaphone className="w-5 h-5" />, title: "Digital Marketing", desc: "Pre and post-event digital campaigns for maximum reach" },
  { icon: <Target className="w-5 h-5" />, title: "Social Media Promotion", desc: "Event content creation and social amplification" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Lead Generation", desc: "Turn event attendees into long-term customers" },
  { icon: <Star className="w-5 h-5" />, title: "Content Creation", desc: "Professional photo, video & graphic content" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Results Tracking", desc: "Measurable ROI from every event we execute" },
];

const corporateServices = [
  "Conferences and seminars",
  "Business forums and networking events",
  "Product launches and brand events",
  "Exhibitions and trade shows",
  "Corporate parties and award ceremonies",
  "Employee engagement events",
  "Training programs and workshops",
  "Team-building events",
  "Hybrid and virtual events",
];

const marketingEvents = [
  "Brand activations",
  "Roadshows",
  "Mall campaigns and promotions",
  "Experiential marketing events",
  "Product demonstrations and sampling",
  "Trade show exhibitions",
  "Pop-up experiences",
];

const socialEvents = [
  "Birthday parties and milestones",
  "Anniversaries and reunions",
  "Engagement parties",
  "VIP and exclusive gatherings",
  "Family celebrations",
];

const weddingServices = [
  "Full wedding planning and coordination",
  "Venue selection and setup",
  "Decoration and theme design",
  "Vendor management",
  "Entertainment and logistics",
];

const longTailKeywords = [
  "Product launch events Sri Lanka",
  "Exhibition organizers Sri Lanka",
  "Corporate event planners Sri Lanka",
  "Business event management Sri Lanka",
  "Brand activation companies Sri Lanka",
  "Event marketing agency Sri Lanka",
  "Conference organizers Sri Lanka",
];

const businessBenefits = [
  { icon: <Award className="w-5 h-5" />, title: "Brand Awareness", desc: "Events create memorable experiences that strengthen brand recognition" },
  { icon: <Users className="w-5 h-5" />, title: "Customer Engagement", desc: "Direct interaction with your target audience builds lasting relationships" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Sales Opportunities", desc: "Convert attendees into customers through strategic event funnels" },
  { icon: <Lightbulb className="w-5 h-5" />, title: "Thought Leadership", desc: "Position your brand as an industry leader through expert events" },
];

const authorityPoints = [
  "Professional execution with zero-error standards",
  "Creative concepts tailored to your brand identity",
  "Reliable coordination with proven vendor networks",
  "Marketing-driven strategies that deliver measurable ROI",
  "Post-event digital amplification and content repurposing",
  "Dedicated event manager for personalized service",
];

const marketingIntegration = [
  "Social media content creation and scheduling",
  "Event-based digital marketing campaigns",
  "Audience engagement and retargeting strategies",
  "Lead capture and CRM integration",
  "Post-event video production and promotion",
  "Email marketing and follow-up sequences",
];

const processSteps = [
  { title: "Requirement Analysis", desc: "Understanding your goals, audience, budget, and KPIs" },
  { title: "Creative Planning", desc: "Developing concepts, themes, and comprehensive event strategies" },
  { title: "Coordination & Setup", desc: "Managing vendors, logistics, timelines, and rehearsals" },
  { title: "Execution", desc: "Ensuring smooth on-ground operations with real-time management" },
  { title: "Post-Event Marketing", desc: "Content repurposing, follow-ups, and ROI measurement" },
];

const locations = ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Jaffna", "Matara", "Anuradhapura", "Trincomalee", "Island-wide"];

const faqs = [
  { q: "What is the best event management company in Sri Lanka?", a: "Cypher Digital is a leading event management Sri Lanka company that combines professional event execution with digital marketing expertise. We are trusted by businesses across Sri Lanka for corporate events, product launches, brand activations, and private celebrations." },
  { q: "How much does event planning cost in Sri Lanka?", a: "Event planning costs in Sri Lanka vary depending on event type, scale, number of guests, venue, and requirements. Corporate events typically range from LKR 200,000 to LKR 2,000,000+. Contact us for a detailed custom quotation tailored to your budget." },
  { q: "Do you handle corporate events in Sri Lanka?", a: "Yes, we specialize in corporate event planning Sri Lanka including conferences, seminars, product launches, award ceremonies, exhibitions, team-building events, and networking sessions. We handle everything from planning to post-event marketing." },
  { q: "What makes Cypher Digital different from other event companies?", a: "Unlike traditional event planners, Cypher Digital combines event management with digital marketing. We don't just plan your event — we promote it through social media, generate leads, create professional content, and ensure your event delivers measurable business results." },
  { q: "Do you provide island-wide event management services?", a: "Yes, we provide event management services across all major cities in Sri Lanka including Colombo, Kandy, Galle, Negombo, Kurunegala, Jaffna, and more. We have vendor partnerships across the island." },
  { q: "How can I contact you for event planning?", a: "You can reach us instantly via WhatsApp at 070 177 2626 for a free consultation. We typically respond within 1 hour during business hours." },
  { q: "Do you handle wedding planning in Sri Lanka?", a: "Yes, we offer comprehensive wedding planning Sri Lanka services including venue selection, decoration, theme design, vendor coordination, entertainment, and full day-of management." },
  { q: "Can you help with event marketing and promotion?", a: "Absolutely. Our event marketing Sri Lanka services include social media promotion, digital advertising, email campaigns, content creation, and post-event amplification to maximize attendance and ROI." },
  { q: "What are the best event management companies in Sri Lanka?", a: "The best event management companies in Sri Lanka combine professional logistics with strong marketing capabilities. Cypher Digital stands out as one of the top choices — the only event management company in Sri Lanka that fully integrates digital marketing, lead generation, and content production into every event across Colombo, Kandy, Galle, and island-wide locations." },
  { q: "What services do event management companies in Sri Lanka provide?", a: "Standard event management services in Sri Lanka include venue sourcing, vendor coordination, decoration, AV production, catering management, and on-site supervision. Cypher Digital additionally provides integrated digital marketing, pre-event promotion, live social media coverage, post-event content production, lead generation, and full ROI analytics." },
  { q: "How far in advance should I book an event management company in Sri Lanka?", a: "We recommend contacting us at least 3 months ahead for mid-size events and 6 months ahead for large conferences, product launches, or weddings. Shorter timelines can be accommodated — contact us to discuss your situation." },
  { q: "How do I choose the right event management company in Sri Lanka?", a: "Evaluate proven portfolio and client reviews, island-wide vendor network, dedicated event manager, transparent pricing, digital marketing capability, and post-event analytics. Cypher Digital offers all of these — plus full integration with our in-house digital marketing team for maximum event ROI." },
];

const comparisonRows = [
  { cap: "Venue & logistics management", trad: "Yes", cypher: "Yes" },
  { cap: "Vendor coordination", trad: "Yes", cypher: "Yes" },
  { cap: "Decoration & theme design", trad: "Yes", cypher: "Yes" },
  { cap: "AV production", trad: "Sometimes", cypher: "Yes" },
  { cap: "Digital marketing campaigns", trad: "No", cypher: "Yes" },
  { cap: "Social media promotion", trad: "Rarely", cypher: "Always" },
  { cap: "Lead generation strategy", trad: "No", cypher: "Yes" },
  { cap: "Professional video production", trad: "Outsourced", cypher: "In-house" },
  { cap: "Post-event content repurposing", trad: "No", cypher: "Yes" },
  { cap: "ROI analytics & reporting", trad: "Limited", cypher: "Full report" },
  { cap: "Dedicated event manager", trad: "Sometimes", cypher: "Always" },
  { cap: "Island-wide coverage", trad: "Colombo only", cypher: "All Sri Lanka" },
];

const pricingRows = [
  { type: "Corporate Workshop / Training", scale: "20–50 guests", price: "LKR 150,000 – 350,000" },
  { type: "Product Launch", scale: "50–300 guests", price: "LKR 400,000 – 1,200,000" },
  { type: "Mid-Size Conference / Seminar", scale: "100–300 guests", price: "LKR 500,000 – 1,200,000" },
  { type: "Brand Activation / Roadshow", scale: "Varies", price: "LKR 300,000 – 1,000,000+" },
  { type: "Award Ceremony / Gala Dinner", scale: "100–500 guests", price: "LKR 600,000 – 2,000,000" },
  { type: "Large Corporate Conference", scale: "300–1,000+ guests", price: "LKR 1,200,000 – 3,000,000+" },
  { type: "Wedding (Full Planning)", scale: "100–500 guests", price: "LKR 500,000 – 3,000,000+" },
  { type: "Private / Social Event", scale: "30–200 guests", price: "LKR 150,000 – 800,000" },
];

const industries = [
  { icon: <Building2 className="w-5 h-5" />, title: "Hospitality & Tourism", desc: "Hotel launches, travel trade events, tourism activations, resort promotions, MICE events." },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "FMCG & Retail", desc: "Product launches, in-store activations, consumer promotions, trade shows, sampling campaigns." },
  { icon: <Landmark className="w-5 h-5" />, title: "Banking & Finance", desc: "Investor forums, AGMs, award ceremonies, compliance events, staff conferences." },
  { icon: <HeartPulse className="w-5 h-5" />, title: "Healthcare & Pharma", desc: "Medical conferences, CME events, product launches, health awareness campaigns." },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Education", desc: "University open days, graduation ceremonies, education fairs, student recruitment events." },
  { icon: <Cpu className="w-5 h-5" />, title: "Technology", desc: "Tech launches, developer conferences, startup pitching events, digital summits." },
];

const expertTips = [
  { title: "Choose the Right Season for Your Event Location", desc: "Sri Lanka has two monsoons. The Southwest Monsoon (May–September) impacts Colombo, Galle and the Hill Country; the Northeast Monsoon (October–February) affects the North and East. Time outdoor events to avoid local monsoons." },
  { title: "Book Venues 3–6 Months in Advance", desc: "Top venues — especially five-star hotel ballrooms in Colombo — book out fast during peak corporate (Oct–Mar) and wedding (Dec–Apr) season. Start 3 months ahead for mid-size events, 6 months for large conferences or weddings." },
  { title: "Budget for Marketing as Part of the Event", desc: "The most successful events in Sri Lanka allocate 15–25% of total budget to marketing and promotion. Pre-event awareness campaigns improve attendance, engagement, and post-event ROI." },
  { title: "Always Have a Contingency Plan", desc: "Power outages, sudden rain, vendor cancellations, and traffic disruptions are real risks. Professional event management companies in Sri Lanka build in backup generators, wet-weather contingencies, substitute vendor lists, and live communication protocols." },
  { title: "Capture Every Moment on Professional Photo & Video", desc: "Photos and videos captured at your event should fuel your brand's social media, website, and ads for months. Budget for professional photography and a highlight video — the ROI is substantial." },
  { title: "Follow Up Within 48 Hours Post-Event", desc: "The 48 hours after your event are the highest-value window for lead conversion. Deploy thank-you emails, share highlights on social media, run retargeting, and activate CRM sequences while attention is fresh." },
];

const reviews = [
  { stars: 5, text: "Cypher Digital managed our annual corporate conference in Colombo flawlessly. From the venue setup to the post-event video they delivered in 48 hours — every detail was perfect. They are genuinely one of the best event management companies in Sri Lanka.", name: "Priya D.", role: "Head of Marketing, FMCG Company" },
  { stars: 5, text: "Our product launch generated more media coverage and social media buzz than any previous launch, thanks to Cypher Digital's pre-event marketing campaigns. Highly recommend for anyone looking for event planning in Sri Lanka.", name: "Kasun R.", role: "Director, Technology Brand" },
  { stars: 5, text: "They planned and executed our wedding in Kandy beautifully. Every vendor they recommended was professional, the decoration exceeded our expectations, and the video they produced is something we will treasure forever.", name: "Nirosha & Dinesh", role: "Wedding Clients, Kandy" },
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible packages with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Pricing", desc: "Clear quotations so you always know what you're paying for." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "Quick planning and execution within your timeline." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your event needs." },
];

const subPages = [
  { to: "/corporate-event-management-sri-lanka", label: "Corporate Event Management Sri Lanka", desc: "Professional conferences, seminars, product launches & business events" },
  { to: "/wedding-planning-sri-lanka", label: "Wedding Planning Sri Lanka", desc: "Complete wedding coordination from venue to entertainment" },
  { to: "/event-marketing-sri-lanka", label: "Event Marketing Sri Lanka", desc: "Digital promotion, social media campaigns & lead generation for events" },
  { to: "/product-launch-events-sri-lanka", label: "Product Launch Events Sri Lanka", desc: "Strategic product launches designed to generate buzz and media coverage" },
];

const ServiceBlock = ({ icon, title, items, highlight }: { icon: React.ReactNode; title: string; items: string[]; highlight?: string }) => (
  <div className="bg-card border border-border rounded-xl p-6 md:p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
      <h3 className="font-heading text-lg font-bold">{title}</h3>
    </div>
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <span className="text-sm text-muted-foreground">{item}</span>
        </div>
      ))}
    </div>
    {highlight && <p className="text-xs text-primary mt-4 font-medium">👉 {highlight}</p>}
  </div>
);

const EventManagement = () => {
  const canonical = "https://cypherdigital.lk/event-management-sri-lanka";

  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Cypher Digital — Event Management Sri Lanka",
        description: "Top event management company in Sri Lanka specializing in corporate events, product launches, brand activations and wedding planning.",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        priceRange: "LKR 150,000 – LKR 3,000,000+",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "50" },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Event Management Services in Sri Lanka — Cypher Digital",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Corporate Event Management Sri Lanka" },
          { "@type": "ListItem", position: 2, name: "Product Launch Events Sri Lanka" },
          { "@type": "ListItem", position: 3, name: "Brand Activation Sri Lanka" },
          { "@type": "ListItem", position: 4, name: "Wedding Planning Sri Lanka" },
          { "@type": "ListItem", position: 5, name: "Conference & Seminar Management Sri Lanka" },
          { "@type": "ListItem", position: 6, name: "Exhibition & Trade Show Management Sri Lanka" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Event Management Sri Lanka",
        description: "Professional marketing-driven event management and event planning services in Sri Lanka by Cypher Digital. Corporate events, weddings, brand activations, and product launches.",
        provider: {
          "@type": "LocalBusiness",
          name: "Cypher Digital",
          url: "https://cypherdigital.lk",
        },
        serviceType: "Event Management",
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Event Management Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Management Sri Lanka" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Planning Sri Lanka" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Marketing Sri Lanka" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Launch Events Sri Lanka" } },
          ],
        },
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
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
          { "@type": "ListItem", position: 2, name: "Event Management Sri Lanka", item: canonical },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Event Management Sri Lanka – Complete Guide & Services",
        url: canonical,
        dateModified: "2026-04-07",
        description: "Complete guide to professional event management and event planning services in Sri Lanka. Corporate events, weddings, brand activations, and marketing-driven event execution.",
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
      <SEOHead
        title="Event Management Sri Lanka"
        description="Looking for the best event management companies in Sri Lanka? Cypher Digital is a top-rated event management Sri Lanka company offering corporate events, product launches, brand activations & wedding planning. Free consultation — call 070 177 2626."
        canonical={canonical}
      />

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Marketing-Driven Event Planning Sri Lanka</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Event Management Sri Lanka
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-4">
              Complete Guide & Professional Event Planning Services
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-2xl mx-auto">
              When searching for the best <strong className="text-white/60">event management Sri Lanka</strong>, businesses and individuals look for more than just event organizers. They need a professional team that can handle planning, execution, and audience engagement. At Cypher Digital, we provide advanced <strong className="text-white/60">event planning Sri Lanka</strong> services that combine creativity, logistics, and marketing strategy. Unlike traditional event planners, we focus on delivering events that create long-term value, brand visibility, and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20plan%20an%20event" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp <MessageCircle className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20event%20consultation" target="_blank" rel="noopener noreferrer">
                  Get a Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="py-8 text-center">
                <div className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snippet Bait Definition */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-extrabold mb-4">What is Event Management?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              <strong>Event management</strong> is the professional process of planning, organizing, coordinating, and executing events from concept to completion. It includes budgeting, venue selection, vendor coordination, logistics, marketing, and on-site management to create memorable and impactful experiences.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional <strong>event management Sri Lanka</strong> companies like Cypher Digital go beyond traditional planning by integrating digital marketing, social media promotion, and lead generation strategies to maximize the ROI of every event.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Events – Topical Authority Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Comprehensive Services</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Types of Events We Manage in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              To become the leading <strong>event management Sri Lanka</strong> provider, we offer a wide range of services covering all industries and event types.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceBlock
              icon={<Briefcase className="w-5 h-5" />}
              title="Corporate Event Management Sri Lanka"
              items={corporateServices}
              highlight="Ideal for companies looking for event management Sri Lanka with real business impact"
            />
            <ServiceBlock
              icon={<Megaphone className="w-5 h-5" />}
              title="Marketing & Promotional Events"
              items={marketingEvents}
              highlight="Drive visibility and leads through strategic marketing events"
            />
            <ServiceBlock
              icon={<Star className="w-5 h-5" />}
              title="Social & Private Events"
              items={socialEvents}
            />
            <ServiceBlock
              icon={<Heart className="w-5 h-5" />}
              title="Wedding Planning Sri Lanka"
              items={weddingServices}
            />
          </div>
        </div>
      </section>

      {/* Differentiation – Why Cypher Digital is Different */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Unfair Advantage</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Why Cypher Digital is Different from Other Event Management Companies in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Most event companies focus only on logistics. Cypher Digital is a <strong>marketing-driven event management company</strong> that combines event execution with digital strategy to deliver measurable business results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyDifferent.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            This makes us a modern <strong>event planning Sri Lanka</strong> company focused on both experience and business results. Your event doesn't just happen — it generates leads, builds your brand, and creates content you can use for months.
          </p>
        </div>
      </section>

      {/* Event Management for Businesses */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">For Businesses</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Event Management Sri Lanka for Businesses</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Businesses today need events that generate tangible results — not just a gathering. Our <strong>event management Sri Lanka</strong> services are designed to support business growth through strategic planning and execution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {businessBenefits.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Tail Keywords – Corporate Event Planning */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Specialized Services</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Corporate Event Planning Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              We specialize in <strong>corporate event planning Sri Lanka</strong> across multiple categories. Whatever your business event needs, our team delivers professional results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {longTailKeywords.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-primary text-center mt-6 font-medium">👉 We cover every type of corporate and business event across Sri Lanka</p>
        </div>
      </section>

      {/* Authority Section – Best Event Management Company */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Trusted Partner</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Best Event Management Company in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Choosing the right event partner is critical for your brand's reputation and event success. Cypher Digital is rapidly becoming a preferred choice for <strong>event management Sri Lanka</strong>.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {authorityPoints.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Marketing Integration */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Beyond Traditional</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">SEO & Marketing-Driven Event Management</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              At Cypher Digital, we go beyond traditional event planning. Our <strong>event management Sri Lanka</strong> approach combines event execution with digital marketing to maximize results. Your event continues to generate value even after it ends.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {marketingIntegration.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Event Planning Process</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              We follow a structured, proven process to ensure every event is successful from concept to completion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Service Internal Links */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Explore Our Services</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Specialized Event Services</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Explore our specialized event management pages for detailed information about each service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {subPages.map((page, i) => (
              <Link key={i} to={page.to} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors group block">
                <h3 className="font-heading text-sm font-bold mb-2 group-hover:text-primary transition-colors">{page.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{page.desc}</p>
                <span className="text-xs text-primary font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Coverage</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Event Management Across Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              We provide <strong>event planning Sri Lanka</strong> services across all major cities and regions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Packages */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Affordable & Scalable</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Affordable Event Packages</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">We offer flexible pricing based on event type, number of guests, location, and custom requirements. No hidden fees — transparent quotations every time.</p>
          <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] rounded-xl font-semibold border-none">
            <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20custom%20event%20quotation" target="_blank" rel="noopener noreferrer">
              Get Your Custom Quotation <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Why Professional Event Management Matters */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Why Professional Event Management Matters</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Working with a professional <strong>event management Sri Lanka</strong> company ensures your event runs smoothly and delivers real results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Smooth execution with zero-error standards", "Time and cost efficiency through expert planning", "High-quality experiences that attendees remember", "Strong brand impact and measurable ROI"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">Avoid stress, delays, and poor coordination by choosing experts who combine creativity with strategic execution.</p>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Cypher Digital</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Work With Confidence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {trustPoints.map((tp, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-colors text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">
                  {tp.icon}
                </div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{tp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQ</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Frequently Asked Questions – Event Planning Sri Lanka</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-card border border-border rounded-xl p-5">
                <summary className="font-heading text-sm font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <Zap className="w-4 h-4 text-primary shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs Cypher Digital */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industry Comparison</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">How Cypher Digital Compares to Other Event Management Companies in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Most <strong>event companies in Sri Lanka</strong> focus on logistics. Cypher Digital combines full event management with integrated digital marketing — so every event also generates leads, brand equity, and content.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Capability</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical SL Event Companies</th>
                  <th className="text-left px-4 py-3 font-semibold">Cypher Digital</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{r.cap}</td>
                    <td className="px-4 py-3 text-muted-foreground inline-flex items-center gap-2">
                      {(r.trad === "No" || r.trad === "Rarely" || r.trad === "Outsourced" || r.trad === "Limited" || r.trad === "Colombo only") ? <XCircle className="w-4 h-4 text-destructive" /> : <CheckCircle className="w-4 h-4 text-primary/70" />}
                      {r.trad}
                    </td>
                    <td className="px-4 py-3 font-medium text-primary">
                      <span className="inline-flex items-center gap-2"><CheckCircle className="w-4 h-4" />{r.cypher}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-20 lg:py-28 bg-secondary" id="event-management-cost-sri-lanka">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Pricing Guide</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Event Management Cost in Sri Lanka — Transparent Pricing Guide</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              "How much does event management cost in Sri Lanka?" — the honest answer is that it varies. Below is an indicative budget guide before speaking to any <strong>event management company in Sri Lanka</strong>.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Event Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical Scale</th>
                  <th className="text-left px-4 py-3 font-semibold">Budget Range</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{r.type}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.scale}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6 max-w-3xl mx-auto">
            📋 Indicative ranges only. Final pricing depends on venue, guest count, catering, AV, decoration, and marketing scope. All Cypher Digital quotations are detailed, itemized, and 100% transparent — no hidden fees. Free custom quotation within 24 hours.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industry Expertise</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Industries We Serve Across Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              As one of the most versatile <strong>event management companies in Sri Lanka</strong>, we understand the unique event requirements of every major sector.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Expert Guide</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">How to Plan a Successful Event in Sri Lanka — Expert Tips</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Planning an <strong>event in Sri Lanka</strong> involves unique local factors. Here's what Cypher Digital has learned from managing 100+ events across the island.
            </p>
          </div>
          <div className="space-y-4">
            {expertTips.map((tip, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary/30 text-primary font-heading font-bold text-sm flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold mb-1.5">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Client Feedback</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">What Our Clients Say About Our Event Management in Sri Lanka</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="text-yellow-500 mb-3" aria-label={`${r.stars} stars`}>{"★".repeat(r.stars)}</div>
                <p className="text-sm italic text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
                <div className="text-sm font-semibold">{r.name} <span className="text-muted-foreground font-normal">— {r.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl font-extrabold text-center mb-8">Related Digital Marketing Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to="/social-media-management-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors">
              <span className="text-sm font-medium">Social Media Management Sri Lanka</span>
            </Link>
            <Link to="/video-production-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors">
              <span className="text-sm font-medium">Video Production Sri Lanka</span>
            </Link>
            <Link to="/advertising-in-sri-lanka" className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors">
              <span className="text-sm font-medium">Advertising in Sri Lanka</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get a Free Event Consultation</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">
                Plan Your Event with Cypher Digital Today
              </h2>
              <p className="text-white/50 mb-4 max-w-xl text-sm leading-relaxed">
                Planning an event in Sri Lanka? Let our experts help you design, plan, and execute a successful event. Work with a team that combines creativity, strategy, and execution.
              </p>
              <p className="text-white/40 mb-8 max-w-xl text-sm leading-relaxed">
                Whether it's a corporate conference, product launch, brand activation, or wedding — we'll create an event that delivers real results.
              </p>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Cypher Digital mascot" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Ready to create an unforgettable event? Let's talk!</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                      <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20plan%20an%20event" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                    </Button>
                    <Button asChild className="border border-white/20 bg-transparent rounded-xl h-11 px-6 hover:bg-white/5" style={{ color: "white" }}>
                      <a href="tel:+94701772626" onClick={() => trackCallClick()}>Call 070 177 2626</a>
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/30">👉 Fast Response | Free Consultation | Custom Packages</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out to you on WhatsApp.</p>
              <InquiryForm service="Event Management" />
            </div>
          </div>
        </div>
      </section>
      <OurWorkSection service="event management" />
    </div>
  );
};

export default EventManagement;
