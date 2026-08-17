import OurWorkSection from "@/components/OurWorkSection";
import { Link } from "react-router-dom";
import { trackCallClick } from "@/lib/trackCallClick";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";
import {
  Sparkles, Bot, AlertTriangle, TrendingDown, FileQuestion, BarChart3,
  Search, FileText, Award, LineChart, ClipboardList, Compass, Wrench, Activity,
  CheckCircle, Utensils, Building2, Heart, GraduationCap, Shirt, Scale, Plane, ShoppingBag,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AIVisibilityChecker from "@/components/AIVisibilityChecker";

const WA_AUDIT = "https://wa.me/94701772626?text=Hi,%20I%20want%20a%20free%20AI%20visibility%20audit";
const WA_QUOTE = "https://wa.me/94701772626?text=Hi,%20I%20want%20a%20custom%20AI%20visibility%20quote";

const stats = [
  { value: "100M+", label: "Monthly global AI assistant users" },
  { value: "67%", label: "Of buyers consult AI before contacting a brand" },
  { value: "3×", label: "Higher conversion from AI-referred traffic" },
  { value: "8.5M", label: "Sri Lankan users shifting to AI search" },
];

const problems = [
  { icon: <Bot className="w-5 h-5" />, title: "Not mentioned by AI", desc: "Your brand doesn't appear when ChatGPT or Gemini answers questions in your industry." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Competitors get cited instead", desc: "AI recommends your rivals when Sri Lankan customers ask for recommendations." },
  { icon: <TrendingDown className="w-5 h-5" />, title: "Declining search traffic", desc: "Traditional Google traffic is falling as users shift to AI-generated answers." },
  { icon: <FileQuestion className="w-5 h-5" />, title: "Wrong information", desc: "AI tools describe your business incorrectly or show outdated details." },
];

const services = [
  { num: "01", icon: <Search className="w-5 h-5" />, title: "AI Visibility Audit", desc: "A full report showing exactly how your brand appears across ChatGPT, Gemini, Perplexity, and Claude. Includes visibility score, brand mention frequency, and competitor benchmarking for your Sri Lankan market." },
  { num: "02", icon: <FileText className="w-5 h-5" />, title: "Answer Engine Optimisation (AEO)", desc: "We restructure your website content so AI models understand, trust, and recommend your business. Covers technical structure, schema markup, and content strategy built for how LLMs process information." },
  { num: "03", icon: <Award className="w-5 h-5" />, title: "Brand Authority Building", desc: "We build your presence across the trusted sources AI models draw from — digital PR, citation-worthy content, and review strategy that signals credibility to ChatGPT and Gemini." },
  { num: "04", icon: <LineChart className="w-5 h-5" />, title: "Ongoing AI Visibility Monitoring", desc: "Monthly tracking of your AI visibility score across all platforms, with performance reports and continuous optimisation as AI search evolves." },
];

const processSteps = [
  { num: "01", icon: <ClipboardList className="w-5 h-5" />, title: "Audit & Benchmark", desc: "We analyse your current AI visibility across ChatGPT, Gemini, and Perplexity and benchmark against your top Sri Lankan competitors." },
  { num: "02", icon: <Compass className="w-5 h-5" />, title: "Strategy & Roadmap", desc: "We deliver a prioritised action plan — technical fixes, content gaps, and authority-building opportunities specific to your industry." },
  { num: "03", icon: <Wrench className="w-5 h-5" />, title: "Implementation", desc: "Our team executes on-site optimisation, structured data, and off-site citation campaigns on your behalf." },
  { num: "04", icon: <Activity className="w-5 h-5" />, title: "Monitor & Refine", desc: "We track your visibility score monthly and refine the strategy as AI platforms evolve." },
];

const results = [
  "Your brand recommended in AI-generated answers Sri Lankan customers trust",
  "More qualified inbound leads from AI-referred traffic",
  "Stronger authority signals across the web and in AI training data",
  "Accurate, up-to-date brand representation in AI responses",
  "Competitive advantage as AI search becomes the main discovery channel",
  "Monthly reporting with a clear, measurable AI visibility score",
];

const industries = [
  { icon: <Utensils className="w-5 h-5" />, name: "Restaurants & Hotels" },
  { icon: <Building2 className="w-5 h-5" />, name: "Real Estate Developers" },
  { icon: <Heart className="w-5 h-5" />, name: "Aesthetic Clinics & Healthcare" },
  { icon: <GraduationCap className="w-5 h-5" />, name: "Education Institutes" },
  { icon: <Shirt className="w-5 h-5" />, name: "Fashion & Retail Brands" },
  { icon: <Scale className="w-5 h-5" />, name: "Legal & Financial Services" },
  { icon: <Plane className="w-5 h-5" />, name: "Travel & Tourism" },
  { icon: <ShoppingBag className="w-5 h-5" />, name: "Ecommerce Stores" },
];

const packages = [
  {
    name: "Starter",
    price: "LKR 35,000",
    period: "/month",
    features: [
      "AI Visibility Audit (1-time)",
      "1 platform optimised (ChatGPT or Gemini)",
      "Basic AEO content fixes",
      "Monthly report",
      "WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "LKR 75,000",
    period: "/month",
    features: [
      "Full AI Audit across all platforms",
      "AEO for full website",
      "Brand authority campaign",
      "Bi-weekly reports",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "LKR 140,000",
    period: "/month",
    features: [
      "Everything in Growth",
      "Monthly competitor benchmarking",
      "Ongoing content & citation building",
      "Weekly reports",
      "Strategy calls every 2 weeks",
    ],
    popular: false,
  },
];

const faqs = [
  { q: "What is AI visibility?", a: "AI visibility refers to how often and how prominently your brand appears in answers generated by AI tools like ChatGPT, Gemini, and Perplexity when customers search for services like yours." },
  { q: "Why does AI visibility matter for Sri Lankan businesses?", a: "Over 100 million people globally use AI assistants monthly to find and compare businesses. Sri Lankan consumers are rapidly adopting these tools. If your business doesn't appear in AI answers, you lose leads to competitors who do." },
  { q: "How do you check AI visibility?", a: "We run your brand across dozens of relevant prompts on ChatGPT, Gemini, and Perplexity, tracking how often you're mentioned, cited, or recommended — and compare results to your top competitors." },
  { q: "How long does it take to improve AI visibility?", a: "Initial improvements are visible within 4–8 weeks. Significant, sustained visibility typically builds over 3–6 months as authority signals accumulate." },
  { q: "Do you offer a free AI visibility check?", a: "Yes. Contact us on WhatsApp and we'll run a quick audit showing where your business currently stands." },
  { q: "What is Answer Engine Optimisation (AEO)?", a: "AEO is the practice of structuring your website content so AI assistants and answer engines can easily understand, trust, and recommend your business. It goes beyond traditional SEO by optimising for how large language models process and cite information." },
  { q: "How is AI visibility different from SEO?", a: "SEO targets Google search rankings with keywords and backlinks. AI visibility targets how AI models like ChatGPT and Gemini recommend businesses in conversational answers. The strategies overlap but AI visibility focuses more on structured data, clear entity definitions, and authority signals that LLMs use." },
  { q: "Which AI platforms do you optimise for?", a: "We cover the four major platforms Sri Lankan consumers use: ChatGPT by OpenAI, Google Gemini, Perplexity AI, and Claude by Anthropic. Our audits and strategies target all four to maximise your reach." },
  { q: "Can small businesses in Sri Lanka benefit from AI visibility?", a: "Absolutely. AI assistants don't favour big brands by default — they favour clear, well-structured, and authoritative information. A small business with strong AEO can outrank larger competitors in AI-generated answers." },
  { q: "How do I know if my AI visibility is improving?", a: "We provide a monthly AI visibility score that tracks how often and how prominently your brand appears across all platforms. You'll see concrete metrics, competitor comparisons, and trend lines over time." },
  { q: "Is AI visibility a one-time fix or ongoing work?", a: "AI models constantly update their training data and ranking signals. While an initial audit delivers quick wins, sustained visibility requires ongoing monitoring, content updates, and authority building — which is why we offer monthly packages." },
  { q: "What industries benefit most from AI visibility in Sri Lanka?", a: "Restaurants, hotels, real estate, healthcare, education, fashion, legal services, travel, and e-commerce all see strong results. Any business where customers ask for recommendations or comparisons benefits from appearing in AI answers." },
];

const AIVisibility = () => {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];
    const addSchema = (data: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    };

    addSchema({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Visibility Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "AI Visibility & Answer Engine Optimisation",
      description: "AI Visibility services in Sri Lanka — get your brand found on ChatGPT, Gemini, Perplexity & Claude through Answer Engine Optimisation, authority building, and ongoing AI visibility monitoring.",
      url: "https://cypherdigital.lk/ai-visibility-sri-lanka",
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
        { "@type": "ListItem", position: 2, name: "AI Visibility Sri Lanka", item: "https://cypherdigital.lk/ai-visibility-sri-lanka" },
      ],
    });

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="AI Visibility Check Sri Lanka | AI Visibility Checker Sri Lanka"
        description="Get a free AI Visibility Check in Sri Lanka. See how visible your business is on ChatGPT, Gemini, Claude & Perplexity. Get your AI visibility score."
        canonical="https://cypherdigital.lk/ai-visibility-sri-lanka"
      />

      {/* Breadcrumb */}
      <nav className="bg-secondary border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">AI Visibility Sri Lanka</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Sparkles className="w-7 h-7" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">New Service — AI Visibility</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Is Your Business Visible on ChatGPT & Gemini?
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Sri Lankan customers are now asking AI assistants to recommend businesses — before they ever Google you. If your brand isn't appearing in those answers, your competitors are getting those leads instead.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none shadow-[0_0_24px_hsl(25_95%_53%/0.3)] hover:shadow-[0_0_32px_hsl(25_95%_53%/0.5)] transition-all">
                <a href="#free-checker">Try Free AI Visibility Checker</a>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="#process">See How It Works</a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-14">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="text-xs text-white/50 mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free AI Visibility Checker */}
      <AIVisibilityChecker />

      {/* Stats heading section */}
      <section className="py-14 bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">AI Search Is Growing Fast in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed">
            A new generation of buyers is bypassing Google and asking ChatGPT, Gemini, and Perplexity for recommendations. The brands that show up in those answers win the lead.
          </p>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Common Problems We Solve</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Signs Your Business Is Invisible to AI</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {problems.map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">{p.icon}</div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Services</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">What Cypher Digital's AI Visibility Service Includes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s) => (
              <div key={s.num} className="bg-card border border-border rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-primary">{s.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">{s.icon}</div>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Process</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">How We Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {processSteps.map((s) => (
              <div key={s.num} className="bg-card border border-border rounded-2xl p-6">
                <div className="text-2xl font-extrabold text-primary mb-3">{s.num}</div>
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">{s.icon}</div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Results You Can Expect</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">What Improved AI Visibility Means for Your Business</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {results.map((r, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Who This Is For</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Perfect for These Sri Lankan Businesses</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-card border border-border rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">{ind.icon}</div>
                <p className="text-sm font-medium text-foreground">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Pricing</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">AI Visibility Packages for Sri Lankan Businesses</h2>
            <p className="text-sm text-muted-foreground">Ad budget billed separately.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-2xl p-7 flex flex-col ${pkg.popular ? "border-2 border-primary shadow-lg" : "border border-border"}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-2xl font-extrabold text-primary">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">{pkg.period}</span>
                </div>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] font-semibold rounded-xl border-none">
                  <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">FAQs</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">AI Visibility in Sri Lanka — Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="bg-card border border-border rounded-2xl px-6">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              Find Out If Your Business Is Invisible to AI
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Request a free AI visibility audit and see exactly how your brand appears — or doesn't — in the AI answers your Sri Lankan customers are already reading.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
                <a href={WA_AUDIT} target="_blank" rel="noopener noreferrer">Request Your Free Audit</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white text-sm px-7 h-12 rounded-xl font-semibold">
                <a href="tel:+94701772626" onClick={() => trackCallClick()}><Phone className="w-4 h-4 mr-2" /> +94 70 177 2626</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <OurWorkSection service="AI visibility optimisation" />
    </div>
  );
};

export default AIVisibility;