import EventPlanningGuide from "@/components/EventPlanningGuide";
import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import {
  CheckCircle, Zap, Shield, Clock, Users, BarChart3,
  ArrowRight, MapPin, MessageCircle, Calendar, Briefcase,
  Heart, Megaphone, Star, Target, TrendingUp, Award, Lightbulb,
  Building2, ShoppingBag, Landmark, HeartPulse, GraduationCap, Cpu,
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";

const whyDifferent = [
  { icon: <Calendar className="w-5 h-5" />, title: "Event Planning", desc: "End-to-end event design and logistics management" },
  { icon: <Megaphone className="w-5 h-5" />, title: "Digital Marketing", desc: "Pre and post-event digital campaigns for maximum reach" },
  { icon: <Target className="w-5 h-5" />, title: "Social Media Promotion", desc: "Event content creation and social amplification" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Lead Generation", desc: "Turn event attendees into long-term customers" },
  { icon: <Star className="w-5 h-5" />, title: "Content Creation", desc: "Professional photo, video & graphic content" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Results Tracking", desc: "Tracking aligned with the event objectives and available data" },
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
  "Structured planning, technical checks and on-site coordination",
  "Creative concepts tailored to your brand identity",
  "Supplier responsibilities agreed in the event brief",
  "Marketing plans and reporting aligned with agreed objectives",
  "Post-event digital amplification and content repurposing",
  "A coordination contact confirmed in the proposal",
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
  { title: "Post-Event Marketing", desc: "Approved content, requested follow-ups and outcome reporting" },
];

const locations = ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Jaffna", "Matara", "Anuradhapura", "Trincomalee", "Island-wide"];

const faqs = [
  { q: "How do I choose an event management company in Sri Lanka?", a: "Compare relevant work examples, the proposed scope, on-site responsibilities and written quotation. Ask for references where available and confirm supplier costs, cancellation conditions and reporting deliverables before booking." },
  { q: "How much does event planning cost in Sri Lanka?", a: "Costs depend on guest count, venue, catering, production, staffing, location and promotion. The organiser's fee may be separate from supplier costs. Cypher Digital provides custom quotations after reviewing the brief; this page does not advertise a confirmed fixed event price." },
  { q: "Can I discuss corporate events with Cypher Digital?", a: "Yes. Share your conference, workshop, launch or networking brief so the planning and promotion requirements can be discussed. The written proposal should confirm the available scope, suppliers and responsibilities." },
  { q: "Can event planning include digital marketing?", a: "Event promotion can include social content, paid campaigns, registration support and approved post-event content. Confirm the selected services, advertising budget and reporting scope in the proposal rather than assuming everything is included." },
  { q: "Can I request an event outside Colombo?", a: "Share the event location and date when requesting a quotation. Availability, travel, accommodation, local suppliers and venue requirements need to be confirmed for the specific event." },
  { q: "How can I contact you for event planning?", a: "Contact Cypher Digital on WhatsApp or call 070 177 2626. Include your event purpose, date, location, estimated guest count and required scope to help prepare the discussion." },
  { q: "Can I discuss wedding planning?", a: "You can send a wedding brief covering the venue, guest count, date and coordination requirements. Confirm which planning and supplier services are available in the written quotation." },
  { q: "How early should I start planning?", a: "Start as soon as the purpose and preferred dates are known, especially when venue availability, speakers, travel or multiple suppliers are involved. The required lead time depends on the scale and complexity; a shorter timeline needs an availability check." },
  { q: "Are social media packages included in an event quotation?", a: "Not automatically. Ongoing social media packages, event promotion, ad spend and production are different scopes. Ask which items are included and which would be quoted separately." },
  { q: "Can event results be guaranteed?", a: "Attendance, leads and sales depend on the audience, offer, promotion and follow-up. Agree realistic objectives and reporting measures, but do not treat a planning proposal as a guarantee of revenue or return on investment." },
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
  { title: "Budget for Marketing as Part of the Event", desc: "Set a promotion budget based on the audience, registration objective and selected channels. Identify agency work and advertising spend separately; no universal percentage applies to every event." },
  { title: "Always Have a Contingency Plan", desc: "Power outages, sudden rain, vendor cancellations, and traffic disruptions are real risks. Professional event management companies in Sri Lanka build in backup generators, wet-weather contingencies, substitute vendor lists, and live communication protocols." },
  { title: "Capture Every Moment on Professional Photo & Video", desc: "Photos and videos captured at your event should fuel your brand's social media, website, and ads for months. Budget for professional photography and a highlight video and confirm the intended usage before the event." },
  { title: "Agree a Post-Event Follow-Up Schedule", desc: "Agree a follow-up schedule before the event. Share approved materials and respond to requested conversations promptly, respecting attendee consent and avoiding automatic sales contact for every guest." },
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "Written Event Scope", desc: "Confirm the scope and contract conditions before booking." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Pricing", desc: "Clear quotations so you always know what you're paying for." },
  { icon: <Clock className="w-5 h-5" />, title: "Agreed Timeline", desc: "Confirm availability and delivery dates in your proposal." },
  { icon: <Users className="w-5 h-5" />, title: "Coordination Contact", desc: "Agree who handles decisions and on-site coordination." },
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
        "@id": "https://cypherdigital.lk/#event-service-provider",
        name: "Cypher Digital",
        description: "Event planning and marketing coordination in Sri Lanka covering corporate events, product launches, brand activations and wedding planning.",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
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
        "@id": `${canonical}#service`,
        url: canonical,
        name: "Event Management Sri Lanka",
        description: "Professional marketing-driven event management and event planning services in Sri Lanka by Cypher Digital. Corporate events, weddings, brand activations, and product launches.",
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://cypherdigital.lk/#event-service-provider",
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
        "@id": `${canonical}#webpage`,
        inLanguage: "en-LK",
        mainEntity: { "@id": `${canonical}#service` },
        name: "Event Management Sri Lanka – Complete Guide & Services",
        url: canonical,
        dateModified: "2026-11-11",
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
        title="Event Management Sri Lanka | Planning & Marketing | Cypher Digital"
        description="Plan corporate events, product launches and celebrations in Sri Lanka. Explore budgeting, venue selection, event promotion and custom quotes from Cypher Digital."
        canonical={canonical}
      />

      {/* Hero */}
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4 text-sm text-muted-foreground">
        <ol className="flex flex-wrap gap-2"><li><Link to="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Event Management Sri Lanka</li></ol>
      </nav>
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
              Cypher Digital brings together event planning and digital promotion for corporate events, product launches, brand activations and celebrations in Sri Lanka. Start with your purpose, date, location and guest count; agree the planning, supplier coordination, content and marketing scope in a written proposal. Event fees and availability are confirmed for your brief, not assumed from a generic price list.
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

      {/* Snippet Bait Definition */}
      <section className="py-16 lg:py-20" id="event-overview">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav aria-label="Event page sections" className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm text-primary">
            <a href="#event-services" className="hover:underline">Event services</a>
            <a href="#event-process" className="hover:underline">Planning process</a>
            <a href="#event-planning-guide" className="hover:underline">Budget and planning guide</a>
            <a href="#event-faq" className="hover:underline">Questions</a>
            <a href="#event-enquiry" className="hover:underline">Request a quotation</a>
          </nav>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-xl md:text-2xl font-extrabold mb-4">What is Event Management?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              <strong>Event management</strong> is the professional process of planning, organizing, coordinating, and executing events from concept to completion. It includes budgeting, venue selection, vendor coordination, logistics, marketing, and on-site management to create memorable and impactful experiences.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An <strong>event management Sri Lanka</strong> brief can also include digital marketing, social media promotion and enquiry follow-up, with responsibilities and reporting agreed before work begins.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Events – Topical Authority Section */}
      <section className="py-20 lg:py-28 bg-secondary" id="event-services">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Comprehensive Services</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Types of Events We Manage in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Discuss the event format that fits your audience, purpose and budget. The proposal should identify the services and suppliers available for your date and location.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Planning and Promotion</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Why Cypher Digital is Different from Other Event Management Companies in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Cypher Digital brings together planning and promotion through a <strong>marketing-driven event management company</strong> that combines event execution with digital strategy to support your agreed business objectives.
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
            This makes us a modern <strong>event planning Sri Lanka</strong> company focused on both experience and business results. Depending on the agreed scope, an event can support business conversations, brand awareness and reusable content.
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
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Choosing an Event Management Partner in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Choosing the right event partner is critical for your brand's reputation and event success. Discuss your requirements with Cypher Digital when considering <strong>event management Sri Lanka</strong>.
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
      <section className="py-20 lg:py-28 bg-secondary" id="event-process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Event Planning Process</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              A structured event plan covers responsibilities from the first brief through delivery and follow-up.
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
      <OurWorkSection service="event management" />
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Affordable & Scalable</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Affordable Event Packages</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">We offer flexible pricing based on event type, number of guests, location, and custom requirements. Ask for an itemised quotation with inclusions, exclusions and payment conditions.</p>
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
              Working with an <strong>event management Sri Lanka</strong> company can help coordinate suppliers, reduce avoidable disruption and report against your agreed objectives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Preparation, technical checks and contingency planning", "Time and cost efficiency through expert planning", "High-quality experiences that attendees remember", "Brand presentation and reporting against agreed objectives"].map((item, i) => (
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
      <section className="py-20 lg:py-28 bg-secondary" id="event-faq">
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

      <EventPlanningGuide />

      {/* Industries */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industry Expertise</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Industries We Serve Across Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              When comparing <strong>event management companies in Sri Lanka</strong>, consider how the brief changes for different audiences and sectors.
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
              Planning an <strong>event in Sri Lanka</strong> involves unique local factors. Consider the following practical points when preparing your brief.
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
      <section className="bg-foreground py-20 lg:py-28" id="event-enquiry">
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
              <p className="text-xs text-white/30">👉 Event Brief | Consultation | Custom Quotation</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out to you on WhatsApp.</p>
              <InquiryForm service="Event Management" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventManagement;
