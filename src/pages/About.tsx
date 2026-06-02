import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import { Target, Users, TrendingUp, Award, Heart, Lightbulb, Phone, MessageCircle, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "15K+", label: "Qualified Leads Generated" },
  { value: "340%", label: "Average Client ROI" },
  { value: "200+", label: "Sri Lankan Brands Served" },
  { value: "8+", label: "Years of Experience" },
];

const values = [
  { icon: Target, title: "Results First", desc: "Every campaign is measured by leads, sales, and ROI — not vanity metrics." },
  { icon: Heart, title: "Client Partnership", desc: "We treat your business like our own. Your growth is our success story." },
  { icon: Lightbulb, title: "Creative Strategy", desc: "Bold ideas backed by Sri Lankan market data and proven digital frameworks." },
  { icon: TrendingUp, title: "Data-Driven", desc: "Every decision is informed by analytics, A/B tests, and audience insights." },
  { icon: Users, title: "Local Expertise", desc: "We understand Sri Lankan consumers — Sinhala, Tamil, English audiences alike." },
  { icon: Award, title: "Transparent Reporting", desc: "Monthly reports with real numbers, honest insights, and zero jargon." },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Cypher Digital — Digital Marketing Agency Sri Lanka",
  url: "https://cypherdigital.lk/about",
  mainEntity: {
    "@type": "Organization",
    name: "Cypher Digital",
    url: "https://cypherdigital.lk",
    logo: "https://cypherdigital.lk/logo.png",
    description: "Cypher Digital is a results-driven digital marketing agency in Colombo, Sri Lanka helping SMEs grow through social media, SEO, Google Ads and Facebook Ads.",
    telephone: "+94701772626",
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  },
};

const About = () => (
  <div className="pt-16">
    <SEOHead
      title="About Cypher Digital | Digital Marketing Agency in Sri Lanka"
      description="Learn about Cypher Digital — a results-driven digital marketing agency in Colombo, Sri Lanka. 200+ brands, 15K+ leads, 340% average ROI. Meet the team behind the growth."
      canonical="https://cypherdigital.lk/about"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
    <PageBreadcrumb items={[{ label: "About Us" }]} />

    {/* Hero */}
    <section className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center animate-fade-up max-w-4xl">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">About Cypher Digital</p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          The Digital Marketing Agency Helping Sri Lankan Brands Win Online
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're a Colombo-based team of strategists, creatives and performance marketers — committed to growing Sri Lankan businesses through smart, measurable digital marketing.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Built in Sri Lanka. Built for Sri Lankan Businesses.</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cypher Digital was founded with a simple belief: Sri Lankan brands deserve world-class digital marketing from a{" "}
              <Link to="/" className="text-primary font-semibold hover:underline">digital marketing agency</Link>
              {" "}that actually delivers — without the agency fluff, the inflated retainers, or the "we'll get back to you next week" attitude.
            </p>
            <p>
              We've watched too many local businesses burn budgets on boosted posts, generic{" "}
              <Link to="/" className="text-primary font-semibold hover:underline">digital agencies</Link>
              {" "}and freelancers who disappear after month two. So we built something different — a hands-on, performance-obsessed team that lives and breathes the Sri Lankan market.
            </p>
            <p>
              Today, we're proud to be one of the most trusted{" "}
              <Link to="/" className="text-primary font-semibold hover:underline">digital marketing agencies in Sri Lanka</Link>
              , partnering with everyone from neighbourhood salons in Nugegoda to national brands shipping across the island.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</p>
        <blockquote className="font-heading text-2xl md:text-4xl font-bold leading-snug">
          "To make professional, results-driven digital marketing accessible to every Sri Lankan business — from the corner café to the country's biggest brands."
        </blockquote>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
          <p className="text-muted-foreground">Six principles that shape every campaign, every client meeting, every piece of work we ship.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Card key={i} className="group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Sri Lankan Brands Pick Cypher Digital</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Deep Local Market Knowledge", d: "We know what works in Colombo, Kandy, Galle, and Jaffna — not just generic global playbooks." },
            { t: "Full-Service Under One Roof", d: "Strategy, design, ads, SEO, video — no juggling 5 agencies for one campaign." },
            { t: "WhatsApp-First Communication", d: "Reach your account manager directly. No ticketing systems. No 48-hour reply windows." },
            { t: "Transparent Pricing", d: "Clear monthly retainers, no hidden fees, and no long-term lock-ins to walk away from." },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="font-heading text-lg font-bold mb-2">{item.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Let's Grow Your Brand Together</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Ready to see what data-driven digital marketing can do for your business? Talk to our team — first consultation is free.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 !text-white border-0">
            <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20Cypher%20Digital" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-background/30 text-background hover:bg-background hover:text-foreground">
            <a href="tel:+94701772626" onClick={() => trackCallClick()}><Phone className="w-5 h-5" /> +94 70 177 2626</a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" /> Colombo, Sri Lanka
        </p>
        <p className="text-sm mt-4">
          Want to join our team?{" "}
          <Link to="/careers" className="text-orange-400 font-semibold hover:underline">
            Digital marketing jobs in Sri Lanka →
          </Link>
        </p>
      </div>
    </section>
  </div>
);

export default About;