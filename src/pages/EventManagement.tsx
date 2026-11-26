import { EVENT_CANONICAL, EVENT_TITLE, EVENT_DESCRIPTION, EVENT_OVERVIEW, eventManagementSchema } from "@/lib/eventManagementSeo";
import { corporateServices, marketingEvents, socialEvents, weddingServices, corporateFormats, processSteps, locations, faqs, expertTips, subPages } from "@/data/eventManagementContent";
import eventConcept from "@/assets/event-planning-concept.jpg";
import EventWorkGallery from "@/components/EventWorkGallery";
import EventRelatedReading from "@/components/EventRelatedReading";
import "@/styles/event-management.css";
import EventPlanningGuide from "@/components/EventPlanningGuide";
import EventTrustSections from "@/components/EventTrustSections";
import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import { useWhatsappNumber, formatWhatsappDisplay } from "@/lib/whatsapp";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import {
  CheckCircle, Zap, Shield, Clock, Users, BarChart3,
  ArrowRight, MapPin, MessageCircle, Calendar, Briefcase,
  Heart, Megaphone, Star, Target, TrendingUp, Award, Lightbulb,
  Building2, ShoppingBag, Landmark, HeartPulse, GraduationCap, Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const whyDifferent = [
  { icon: <Calendar className="w-5 h-5" />, title: "Event Planning", desc: "End-to-end event design and logistics management" },
  { icon: <Megaphone className="w-5 h-5" />, title: "Digital Marketing", desc: "Pre and post-event digital campaigns for maximum reach" },
  { icon: <Target className="w-5 h-5" />, title: "Social Media Promotion", desc: "Event content creation and social amplification" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Enquiry Follow-Up", desc: "Plan the next conversation with attendees who request contact" },
  { icon: <Star className="w-5 h-5" />, title: "Content Creation", desc: "Professional photo, video & graphic content" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Results Tracking", desc: "Tracking aligned with the event objectives and available data" },
];

const businessBenefits = [
  { icon: <Award className="w-5 h-5" />, title: "Brand Awareness", desc: "Events create memorable experiences that strengthen brand recognition" },
  { icon: <Users className="w-5 h-5" />, title: "Customer Engagement", desc: "Direct interaction with your target audience builds lasting relationships" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Business Conversations", desc: "Create space for product questions, demonstrations and requested follow-ups" },
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

const industries = [
  { icon: <Building2 className="w-5 h-5" />, title: "Hospitality & Tourism", desc: "Hotel launches, travel trade events, tourism activations, resort promotions, MICE events." },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "FMCG & Retail", desc: "Product launches, in-store activations, consumer promotions, trade shows, sampling campaigns." },
  { icon: <Landmark className="w-5 h-5" />, title: "Banking & Finance", desc: "Investor forums, AGMs, award ceremonies, compliance events, staff conferences." },
  { icon: <HeartPulse className="w-5 h-5" />, title: "Healthcare & Pharma", desc: "Medical conferences, CME events, product launches, health awareness campaigns." },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Education", desc: "University open days, graduation ceremonies, education fairs, student recruitment events." },
  { icon: <Cpu className="w-5 h-5" />, title: "Technology", desc: "Tech launches, developer conferences, startup pitching events, digital summits." },
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "Written Event Scope", desc: "Confirm the scope and contract conditions before booking." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Pricing", desc: "Clear quotations so you always know what you're paying for." },
  { icon: <Clock className="w-5 h-5" />, title: "Agreed Timeline", desc: "Confirm availability and delivery dates in your proposal." },
  { icon: <Users className="w-5 h-5" />, title: "Coordination Contact", desc: "Agree who handles decisions and on-site coordination." },
];

const ServiceBlock = ({ icon, title, items, highlight, to }: { icon: React.ReactNode; title: string; items: string[]; highlight?: string; to?: string }) => (
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
    {highlight && <p className="text-xs text-muted-foreground mt-4">{highlight}</p>}
    {to && <Button asChild variant="link" className="px-0 mt-4"><Link to={to}>Explore this event format <ArrowRight /></Link></Button>}
  </div>
);

const EventManagement = () => {
  const whatsappNumber = useWhatsappNumber();
  const canonical = EVENT_CANONICAL;

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-event-schema]");
    const script = existing ?? document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-event-schema", "");
    script.text = JSON.stringify(eventManagementSchema());
    if (!existing) document.head.appendChild(script);
    const keys = [["property", "og:url", EVENT_CANONICAL], ["property", "og:type", "website"], ["name", "robots", "index, follow, max-snippet:-1, max-image-preview:large"]];
    const previous = keys.map(([attr, key, value]) => {
      const existingMeta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      const meta = existingMeta ?? document.createElement("meta");
      const content = meta.getAttribute("content");
      // A prerendered event URL belongs to this route, not the next public page.
      const original = key === "og:url" && content === EVENT_CANONICAL ? "https://cypherdigital.lk/" : content;
      meta.setAttribute(attr, key);
      meta.content = value;
      if (!existingMeta) document.head.appendChild(meta);
      return { meta, original, created: !existingMeta };
    });
    return () => {
      script.remove();
      previous.forEach(({ meta, original, created }) => {
        if (created) meta.remove();
        else if (original !== null) meta.content = original;
      });
    };
  }, []);

  return (
    <div className="event-page pt-16">
      <SEOHead
        title={EVENT_TITLE}
        description={EVENT_DESCRIPTION}
        canonical={canonical}
      />

      <section className="event-hero">
        <img src={eventConcept} alt="Concept illustration of a prepared conference venue with stage, seating and presentation screen" width={1920} height={1088} fetchPriority="high" />
        <div className="container mx-auto px-6">
          <div className="event-hero-copy">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs opacity-80">
              <ol className="flex flex-wrap gap-2"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Event Management</li></ol>
            </nav>
            <p className="event-eyebrow mb-5">Cypher Digital · Planning + Promotion</p>
            <h1 className="mb-6">Event Planning &amp; Event Management <span className="whitespace-nowrap">Sri Lanka</span></h1>
            <p className="event-lead mb-7">An event your guests remember. A plan your team can follow. Bring your corporate event, product launch or brand activation together with creative planning, coordinated delivery and digital promotion.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start">
              <Button asChild size="lg" className="event-quote-button h-12 px-5"><a href="#event-enquiry">Plan My Event — Get a Quote <ArrowRight /></a></Button>
              <Button asChild size="lg" className="event-whatsapp-button h-12 px-5"><a href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20to%20plan%20an%20event`} target="_blank" rel="noopener noreferrer"><MessageCircle /> Discuss Your Event</a></Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-xs">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Written scope</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Itemised quotation</span>
              <a href={`tel:+${whatsappNumber}`} onClick={() => trackCallClick()} className="flex items-center gap-2">Call {formatWhatsappDisplay(whatsappNumber)} <ArrowRight className="w-3 h-3" /></a>
            </div>
          </div>
        </div>
        <span className="event-hero-caption">Event venue concept · illustrative image</span>
      </section>
      <nav aria-label="Event page sections" className="event-section-nav">
        <div className="container mx-auto px-6 flex flex-wrap gap-x-7 gap-y-0">
          <a href="#event-work">Our event work</a><a href="#event-services">Event services</a><a href="#event-process">Our process</a><a href="#event-costs">Quotations</a><a href="#event-planning-guide">Planning &amp; budgets</a><a href="#event-faq">FAQs</a><a href="#event-enquiry">Start your brief <ArrowRight className="w-3 h-3 ml-2" /></a>
        </div>
      </nav>
      <section id="event-overview">
        <div className="container mx-auto px-6 max-w-5xl event-overview-grid">
          <div>
            <p className="event-eyebrow text-primary mb-4">A clear plan. A connected experience.</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Event planning in Sri Lanka,<br />from brief to event day.</h2>
            <p className="text-muted-foreground">{EVENT_OVERVIEW}</p>
          </div>
          <div className="event-overview-answer">
            <h3 className="font-heading text-lg font-bold mb-3">Event planning vs event management</h3>
            <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Event planning</strong> shapes the purpose, budget, venue, programme and guest experience before the event. <strong className="text-foreground">Event management</strong> coordinates suppliers, schedules, technical checks and on-site delivery so the plan can be put into action.</p>
            <p className="text-sm text-muted-foreground">Promotion is a separate part of the brief: connect invitations, registration and follow-up with an <Link to="/event-marketing-sri-lanka" className="text-primary underline underline-offset-4">event marketing plan</Link>. Confirm the responsibilities and costs in your written quotation.</p>
          </div>
        </div>
      </section>

      <EventWorkGallery />
      <EventRelatedReading title="Helpful Event Guides" slugs={["product-launch-event-ideas-sri-lanka","award-ceremony-planning-sri-lanka","graduation-inauguration-ceremony-planning-sri-lanka","event-decoration-ideas-sri-lanka","annual-get-together-ideas-sri-lanka","event-planner-vs-event-management-company-sri-lanka"]} />

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
              highlight="Shape the programme around your team, customers or stakeholders."
              to="/corporate-event-management-sri-lanka"
            />
            <ServiceBlock
              icon={<Megaphone className="w-5 h-5" />}
              title="Marketing & Promotional Events"
              items={marketingEvents}
              highlight="Connect your event concept with invitations, registration and promotion."
              to="/event-marketing-sri-lanka"
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
              to="/wedding-planning-sri-lanka"
            />
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

      {/* Trust sections: team, case studies, testimonials (hidden until real content is supplied) */}
      <EventTrustSections />

      {/* Affordable Packages */}

      <section className="py-20 lg:py-28" id="event-costs">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Built Around Your Brief</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Event Planning Costs & Custom Quotations</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">We offer flexible pricing based on event type, number of guests, location, and custom requirements. Ask for an itemised quotation with inclusions, exclusions and payment conditions.</p>
          <Button asChild size="lg" className="event-quote-button font-semibold">
            <a href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20a%20custom%20event%20quotation`} target="_blank" rel="noopener noreferrer">
              Get Your Custom Quotation <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Differentiation – Why Cypher Digital is Different */}
      <section className="py-20 lg:py-28" id="event-value">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Planning and Promotion</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Event Planning, Production & Promotion — Connected</h2>
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
            This makes our <strong>event planning in Sri Lanka</strong> approach focused on both experience and business results. Depending on the agreed scope, an event can support business conversations, brand awareness and reusable content.
          </p>
        </div>
      </section>

      {/* Event Management for Businesses */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">For Businesses</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Business Events with a Clear Objective</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Businesses today need events that generate tangible results — not just a gathering. Our <strong>event management</strong> services are designed to support business growth through strategic planning and execution.
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
              Discuss <strong>corporate event planning in Sri Lanka</strong> for conferences, launches and business gatherings. Confirm the planning, production and promotional services available for your brief.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {corporateFormats.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-primary text-center mt-6 font-medium">Share your format, location and date to confirm the available scope.</p>
        </div>
      </section>

      <section className="event-decision-band">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div><p className="event-eyebrow mb-3">Let’s turn the idea into a brief</p><h2 className="font-heading text-2xl font-bold mb-3">Have a date in mind?</h2><p>Share your event type, city and expected guests. Let’s discuss the next step.</p></div>
          <Button asChild size="lg" className="event-quote-button shrink-0"><a href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20event%20date%20and%20planning%20brief`} target="_blank" rel="noopener noreferrer"><MessageCircle /> Discuss My Event Date</a></Button>
        </div>
      </section>

      {/* Authority Section – Best Event Management Company */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Trusted Partner</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Choosing an Event Management Partner in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Choosing the right event partner is critical for your brand's reputation and event success. Discuss your requirements with Cypher Digital when comparing <strong>event organisers in Sri Lanka</strong>.
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
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Marketing-Driven Event Management</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Connect your <strong>corporate event planning</strong> brief to digital promotion before doors open and approved content after the event. Registration campaigns, photography and follow-up can support the wider business goal when their scope and permissions are agreed.
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
              Request <strong>event planning in Sri Lanka</strong> for Colombo or a regional location. Travel, suppliers and availability are confirmed for your date and venue.
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

      {/* Why Professional Event Management Matters */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Why Professional Event Management Matters</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Working with an <strong>event management company in Sri Lanka</strong> can help coordinate suppliers, reduce avoidable disruption and report against your agreed objectives.
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

      <section id="event-enquiry">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="event-eyebrow text-primary mb-4">Your next event starts here</p>
              <h2 className="font-heading text-3xl font-extrabold mb-5">Tell us what you’re planning.</h2>
              <p className="text-muted-foreground mb-6">A conference, product launch, activation or celebration — start with the essentials. We’ll discuss your requirements before preparing a custom scope and quotation.</p>
              <ul className="space-y-3 text-sm mb-8">
                {['Purpose and type of event', 'Preferred date, city and venue', 'Expected guests and available budget', 'Planning, production and promotion needs'].map(item => <li key={item} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary shrink-0" />{item}</li>)}
              </ul>
              <Button asChild className="event-quote-button"><a href={`tel:+${whatsappNumber}`} onClick={() => trackCallClick()}>Call {formatWhatsappDisplay(whatsappNumber)} <ArrowRight /></a></Button>
              <p className="text-sm text-muted-foreground mt-5">Send your event brief for a written proposal within 24–48 hours. Fees, supplier costs, payment terms and availability are confirmed in writing.</p>
            </div>
            <div className="event-form">
              <h3 className="font-heading text-xl font-bold mb-2">Request Your Event Quotation</h3>
              <p className="text-sm text-muted-foreground mb-6">Tell us your date, location and guest count. Not sure of every detail? Share what you know and start the conversation.</p>
              <InquiryForm service="Event Management" whatsappNumber={whatsappNumber} />
            </div>
          </div>
        </div>
      </section>

      <EventPlanningGuide />
      <p className="container mx-auto px-4 max-w-3xl -mt-8 mb-12 text-sm">Planning step by step? Read our <Link to="/event-planning-sri-lanka" className="text-primary underline">full event planning guide for Sri Lanka</Link>.</p>

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

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-secondary" id="event-faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQ</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Event Planning & Management: Your Questions Answered</h2>
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

    </div>
  );
};

export default EventManagement;
