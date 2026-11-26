import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { useWhatsappNumber } from "@/lib/whatsapp";
import { eventWork } from "@/data/eventWork";
import { getEventArticle, eventArticleSchema } from "@/data/eventArticles";
import "@/styles/event-management.css";

function Linked({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((p, i) => {
    const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <Link key={i} to={m[2]} className="text-primary underline">{m[1]}</Link> : <Fragment key={i}>{p}</Fragment>;
  })}</>;
}

export default function EventArticle({ slug }: { slug: string }) {
  const a = getEventArticle(slug)!;
  const whatsappNumber = useWhatsappNumber();
  const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I read "${a.h1}" and would like help with my event`)}`;
  const canonical = `https://cypherdigital.lk/blog/${a.slug}`;
  const photos = a.photoIndexes.map(i => eventWork[i]).filter(Boolean);

  useEffect(() => {
    const s = document.createElement("script");
    s.type = "application/ld+json"; s.setAttribute("data-event-article-schema", "");
    s.text = JSON.stringify(eventArticleSchema(a));
    document.head.appendChild(s);
    return () => s.remove();
  }, [a]);

  return (
    <div className="event-page pt-16">
      <SEOHead title={a.title} description={a.description} canonical={canonical} />
      <section className="py-14 lg:py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
            <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / <span>{a.h1}</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{a.h1}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed"><Linked text={a.intro} /></p>
        </div>
      </section>
      <article className="container mx-auto px-4 max-w-3xl py-12 space-y-12">
        {a.sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">{s.title}</h2>
            {s.paragraphs.map((p, j) => <p key={j} className="text-muted-foreground leading-relaxed mb-4"><Linked text={p} /></p>)}
            {s.list && <ul className="space-y-2 mt-4">{s.list.map(item => <li key={item} className="flex gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>)}</ul>}
            {i === 1 && photos.length > 0 && (
              <div className="grid sm:grid-cols-3 gap-3 mt-6">
                {photos.map(ph => <figure key={ph.url}><img src={ph.url} alt={ph.alt} width={ph.width} height={ph.height} loading="lazy" className="rounded-lg w-full h-40 object-cover" /><figcaption className="text-xs text-muted-foreground mt-1">{ph.caption}</figcaption></figure>)}
              </div>
            )}
          </section>
        ))}
        <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6">
          <p className="font-heading font-bold text-lg mb-2">Planning an event in Sri Lanka?</p>
          <p className="text-sm text-muted-foreground mb-4">Read the full <Link to="/event-planning-sri-lanka" className="text-primary underline">event planning Sri Lanka guide</Link>, or let our <Link to="/event-management-sri-lanka" className="text-primary underline">event management Sri Lanka</Link> team prepare a written proposal within 24–48 hours.</p>
          <Button asChild><a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />WhatsApp 076 031 7477</a></Button>
        </aside>
        <section id="faq">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">{a.faqs.map(f => <details key={f.q} className="rounded-xl border border-border p-4"><summary className="font-semibold cursor-pointer">{f.q}</summary><p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p></details>)}</div>
        </section>
        <section id="enquiry">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Send Us Your Event Brief</h2>
          <InquiryForm service="Event Management" whatsappNumber={whatsappNumber} />
        </section>
      </article>
    </div>
  );
}
