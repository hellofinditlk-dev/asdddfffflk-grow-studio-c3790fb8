import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { useWhatsappNumber } from "@/lib/whatsapp";
import { eventWork } from "@/data/eventWork";
import { PLANNING_CANONICAL, PLANNING_TITLE, PLANNING_DESCRIPTION, PLANNING_H1, PLANNING_INTRO, planningSections, eventTypeGuides, planningChecklist, hireAdvice, planningFaqs, eventPlanningSchema } from "@/data/eventPlanningGuide";
import "@/styles/event-management.css";

const photos = [eventWork[0], eventWork[1], eventWork[4]].filter(Boolean);

export default function EventPlanningSriLanka() {
  const whatsappNumber = useWhatsappNumber();
  const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'm planning an event and would like help with event management")}`;

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-planning-schema]");
    const script = existing ?? document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-planning-schema", "");
    script.text = JSON.stringify(eventPlanningSchema());
    if (!existing) document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="event-page pt-16">
      <SEOHead title={PLANNING_TITLE} description={PLANNING_DESCRIPTION} canonical={PLANNING_CANONICAL} />
      <section className="py-14 lg:py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
            <Link to="/">Home</Link> / <Link to="/event-management-sri-lanka">Event Management Sri Lanka</Link> / <span>Event Planning Guide</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{PLANNING_H1}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{PLANNING_INTRO}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#plan-checklist">Jump to the checklist</a></Button>
            <Button asChild size="lg" variant="outline"><Link to="/event-management-sri-lanka">Event management in Sri Lanka <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </div>
        </div>
      </section>

      <nav aria-label="Guide contents" className="container mx-auto px-4 max-w-3xl py-8">
        <h2 className="font-heading text-xl font-bold mb-3">In this guide</h2>
        <ol className="grid sm:grid-cols-2 gap-2 text-sm list-decimal pl-5">
          {planningSections.map(s => <li key={s.id}><a href={`#${s.id}`} className="text-primary hover:underline">{s.title.replace(/^Step \d+: /, "")}</a></li>)}
        </ol>
      </nav>

      <article className="container mx-auto px-4 max-w-3xl pb-8 space-y-12">
        {planningSections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">{s.title}</h2>
            {s.paragraphs.map((p, j) => <p key={j} className="text-muted-foreground leading-relaxed mb-4">{p}</p>)}
            {s.list && <ul className="space-y-2 mt-4">{s.list.map(item => <li key={item} className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>)}</ul>}
            {i === 3 && photos.length > 0 && (
              <div className="grid sm:grid-cols-3 gap-3 mt-6">
                {photos.map(ph => <figure key={ph.url}><img src={ph.url} alt={ph.alt} width={ph.width} height={ph.height} loading="lazy" className="rounded-lg w-full h-40 object-cover" /><figcaption className="text-xs text-muted-foreground mt-1">{ph.caption}</figcaption></figure>)}
              </div>
            )}
            {i === 2 && (
              <aside className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="font-heading font-bold mb-2">Planning an event? Get a written proposal within 24–48 hours.</p>
                <p className="text-sm text-muted-foreground mb-4">Share your date, guest count and location, and our <Link to="/event-management-sri-lanka" className="text-primary underline">event organisers in Sri Lanka</Link> will reply with a plan.</p>
                <Button asChild><a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />WhatsApp 076 031 7477</a></Button>
              </aside>
            )}
            {i === 5 && <p className="text-sm mt-4">Prefer one team to coordinate every supplier? See our <Link to="/event-management-sri-lanka" className="text-primary underline">event management in Sri Lanka</Link> service.</p>}
          </section>
        ))}

        <section id="plan-event-types">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Planning Tips by Event Type</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {eventTypeGuides.map(g => <div key={g.title} className="rounded-xl border border-border p-5"><h3 className="font-heading font-bold mb-2">{g.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{g.text}</p></div>)}
          </div>
          <p className="text-sm mt-4">For business audiences, read about <Link to="/corporate-event-management-sri-lanka" className="text-primary underline">corporate event management</Link> and <Link to="/event-marketing-sri-lanka" className="text-primary underline">event marketing</Link>.</p>
        </section>

        <section id="plan-checklist" className="rounded-2xl border border-border p-6 bg-muted/40 scroll-mt-24">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Event Planning Checklist</h2>
          <ul className="space-y-2">{planningChecklist.map(c => <li key={c} className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />{c}</li>)}</ul>
        </section>

        <section id="plan-hire">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">When to Hire an Event Management Company</h2>
          {hireAdvice.map((p, i) => <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>)}
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/event-management-sri-lanka">Hire an event management company</Link></Button>
            <Button asChild size="lg" variant="secondary"><a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />WhatsApp your brief</a></Button>
          </div>
        </section>

        <section id="plan-faq">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Event Planning FAQs</h2>
          <div className="space-y-3">
            {planningFaqs.map(f => <details key={f.q} className="rounded-xl border border-border p-4"><summary className="font-semibold cursor-pointer">{f.q}</summary><p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p></details>)}
          </div>
        </section>

        <section id="plan-enquiry" className="scroll-mt-24">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-2">Need Help Planning Your Event?</h2>
          <p className="text-muted-foreground mb-6">Send your brief and receive a written proposal within 24–48 hours. Learn more about our <Link to="/event-management-sri-lanka" className="text-primary underline">event management services in Sri Lanka</Link>.</p>
          <InquiryForm service="Event Management" whatsappNumber={whatsappNumber} />
        </section>
      </article>
    </div>
  );
}
