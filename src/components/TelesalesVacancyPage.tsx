import { useEffect } from "react";
import { MessageCircle, Send } from "lucide-react";
import SEOHead from "./SEOHead";
import PageBreadcrumb from "./PageBreadcrumb";
import { Button } from "./ui/button";
import { telesalesIsOpen, telesalesVacancy as job } from "../data/telesales-vacancy";
import { telesalesCanonical, telesalesSchemas, telesalesWhatsApp } from "../lib/telesales-seo";
import { markdownHtml, splitSeoMarkdown } from "../lib/newSeoMarkdown";
import markdown from "../content/telesales-executive-jobs-sri-lanka.md?raw";
import mascot from "../assets/mascot-headset.jpeg";
import "../styles/new-seo-pages.css";

export default function TelesalesVacancyPage() {
  const open = telesalesIsOpen();
  const content = splitSeoMarkdown(markdown);
  useEffect(() => {
    document.querySelectorAll("script[data-telesales-schema]").forEach(el => el.remove());
    const url = document.querySelector('meta[property="og:url"]');
    const previous = url?.getAttribute("content");
    url?.setAttribute("content", telesalesCanonical);
    return () => { if (previous) url?.setAttribute("content", previous); };
  }, []);
  return <main className="new-seo-page pb-24">
    <SEOHead title={job.metaTitle} description={job.metaDescription} canonical={telesalesCanonical} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(telesalesSchemas(markdown)).replace(/</g, "\\u003c") }} />
    <PageBreadcrumb items={[{ label: "Careers", href: "/careers" }, { label: job.title }]} />
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="border-b border-border pb-8 mb-8">
        <img src={mascot} alt="Cypher Digital headset bird mascot" width="96" height="96" className="w-24 h-24 object-contain mb-5 rounded-lg" />
        <p className="text-primary text-sm font-semibold mb-3">{open ? "Open vacancy · Telesales" : "Applications closed"}</p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-5">{job.h1}</h1>
        <p className="text-muted-foreground mb-3">{job.location} · {job.type}</p>
        <p className="text-sm text-muted-foreground mb-6"><time dateTime={job.datePosted}>Posted 26 October 2026</time> · Closes 31 January 2027</p>
        <div className="new-seo-copy" dangerouslySetInnerHTML={{ __html: markdownHtml(content.intro) }} />
        {open && <Button asChild className="mt-6 bg-cta text-cta-foreground border-0 hover:bg-cta/90"><a href={telesalesWhatsApp} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Apply on WhatsApp</a></Button>}
      </header>
      <nav aria-label="On this page" className="border-b border-border pb-6 mb-8">
        <h2 className="font-heading text-lg font-bold mb-3">On this page</h2>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm">{content.sections.map(s => <li key={s.id}><a className="text-primary" href={`#${s.id}`}>{s.title}</a></li>)}</ul>
      </nav>
      {content.sections.map(s => <section key={s.id} id={s.id} className="scroll-mt-24 mb-10">
        <h2 className="font-heading text-2xl font-bold mb-4">{s.title}</h2>
        <div className="new-seo-copy" dangerouslySetInnerHTML={{ __html: markdownHtml(s.markdown) }} />
      </section>)}
      <section id="apply" className="border-t border-border pt-8 scroll-mt-24">
        <h2 className="font-heading text-2xl font-bold mb-4">{open ? "Apply for Telesales Executive" : "This vacancy has closed"}</h2>
        {open ? <><p className="text-muted-foreground mb-5">Send your name, district, languages, availability and calling experience to +94 70 177 2626. No joining fee.</p><Button asChild className="bg-cta text-cta-foreground border-0 hover:bg-cta/90"><a href={telesalesWhatsApp} target="_blank" rel="noopener noreferrer"><Send className="mr-2 h-4 w-4" />Apply on WhatsApp</a></Button></> : <a href="/careers" className="text-primary">View current vacancies</a>}
      </section>
    </article>
    {open && <div className="fixed bottom-0 inset-x-0 border-t border-border bg-background py-3 px-4 pr-32 sm:pr-4 z-40 flex justify-start sm:justify-center"><Button asChild className="bg-cta text-cta-foreground border-0 hover:bg-cta/90"><a href={telesalesWhatsApp} aria-label="Apply for Telesales Executive" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Apply now</a></Button></div>}
  </main>;
}