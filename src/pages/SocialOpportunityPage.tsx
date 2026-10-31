import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import NewSeoHead from "@/components/NewSeoHead";
import SocialCostCalculator from "@/components/SocialCostCalculator";
import { newSeoPages } from "@/data/new-seo-pages";
import { inlineMarkdown, splitSeoMarkdown } from "@/lib/newSeoMarkdown";
import { socialCalculatorSchema } from "@/lib/socialCalculatorSeo";
import { useWhatsappNumber, formatWhatsappDisplay } from "@/lib/whatsapp";
import support from "@/content/social-media-ads-support-sri-lanka.md?raw";
import boosting from "@/content/social-media-boosting-service-sri-lanka.md?raw";
import colombo from "@/content/social-media-marketing-colombo.md?raw";
import small from "@/content/social-media-marketing-small-business-sri-lanka.md?raw";
import calculator from "@/content/social-media-cost-calculator.md?raw";
import socialImage from "@/assets/advertising-social.jpg";
import "@/styles/new-seo-pages.css";
import "@/styles/social-opportunity-pages.css";

const sources: Record<string, string> = {
  "/social-media-ads-support-sri-lanka": support,
  "/social-media-boosting-service-sri-lanka": boosting,
  "/social-media-marketing-colombo": colombo,
  "/social-media-marketing-small-business-sri-lanka": small,
  "/social-media-cost-calculator": calculator,
};

function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let previous = 0;
  for (const match of text.matchAll(/\[([^\]]+)\]\((\/[^)]+)\)/g)) {
    const index = match.index ?? 0;
    parts.push(<span key={`text-${index}`} dangerouslySetInnerHTML={{ __html: inlineMarkdown(text.slice(previous, index)) }} />);
    parts.push(<Link key={`link-${index}`} to={match[2]}>{match[1]}</Link>);
    previous = index + match[0].length;
  }
  parts.push(<span key="end" dangerouslySetInnerHTML={{ __html: inlineMarkdown(text.slice(previous)) }} />);
  return <>{parts}</>;
}

function Copy({ markdown }: { markdown: string }) {
  const blocks: ReactNode[] = [];
  const lines = markdown.trim().split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line === "---") { i++; continue; }
    const cta = line.match(/^\[([^\]]+)\]\((https:\/\/wa\.me\/[^)]+)\)$/);
    if (cta) {
      blocks.push(<div className="not-prose my-6" key={i}><Button asChild className="h-auto min-h-12 max-w-full whitespace-normal bg-cta text-cta-foreground border-0 py-3 px-6"><a href={cta[2]} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4 mr-2 shrink-0" />{cta[1]}</a></Button></div>); i++; continue;
    }
    if (line.startsWith("### ")) { blocks.push(<h3 key={i}><Inline text={line.slice(4)} /></h3>); i++; continue; }
    if (line.startsWith("|")) {
      const key = i;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const row = lines[i].trim();
        if (!/^\|[\s:|\-]+\|$/.test(row)) rows.push(row.slice(1, -1).split("|").map(cell => cell.trim()));
        i++;
      }
      const [head, ...body] = rows;
      if (head) blocks.push(<div className="new-seo-table social-responsive-table" key={key}><table><thead><tr>{head.map((cell, index) => <th key={index} scope="col"><Inline text={cell} /></th>)}</tr></thead><tbody>{body.map((row, index) => <tr key={index}>{row.map((cell, col) => <td key={col} data-label={head[col] || "Comparison"}><Inline text={cell} /></td>)}</tr>)}</tbody></table></div>);
      continue;
    }
    if (/^(- |\d+\. )/.test(line)) {
      const key = i; const ordered = /^\d+\./.test(line); const items: string[] = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i].trim())) { items.push(lines[i].trim().replace(/^(- |\d+\. )/, "")); i++; }
      const content = items.map((item, index) => <li key={index}><Inline text={item} /></li>);
      blocks.push(ordered ? <ol key={key}>{content}</ol> : <ul key={key}>{content}</ul>); continue;
    }
    const key = i; const paragraph = [line]; i++;
    while (i < lines.length && lines[i].trim() && !/^(### |\||- |\d+\. |---)/.test(lines[i].trim())) { paragraph.push(lines[i].trim()); i++; }
    blocks.push(<p key={key}><Inline text={paragraph.join(" ")} /></p>);
  }
  return <div className="new-seo-copy">{blocks}</div>;
}

export default function SocialOpportunityPage() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "");
  const page = newSeoPages.find(item => item.path === path);
  const markdown = sources[path];
  const number = useWhatsappNumber();
  useEffect(() => { document.querySelector('script[data-new-page-schema]')?.remove(); }, [path]);
  if (!page || !markdown) return null;
  const content = splitSeoMarkdown(markdown);
  const isCalculator = path === "/social-media-cost-calculator";
  const canonical = `https://cypherdigital.lk${path}`;
  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent(`Hi Cypher Digital, ${page.cta}.`)}`;
  const schemas = [
    isCalculator ? socialCalculatorSchema(page.description) : { "@context": "https://schema.org", "@type": "Service", name: page.breadcrumbLabel, description: page.description, url: canonical, provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": path.includes("colombo") ? "City" : "Country", name: path.includes("colombo") ? "Colombo" : "Sri Lanka" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: content.faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" }, { "@type": "ListItem", position: 2, name: "Social Media Marketing", item: "https://cypherdigital.lk/social-media-management-sri-lanka" }, { "@type": "ListItem", position: 3, name: page.breadcrumbLabel, item: canonical }] },
  ];
  const intro = content.intro.split("\n\n").filter(block => !block.startsWith("[Get") && !/^\[[^\]]+\]\(https:\/\/wa\.me/.test(block) && !block.startsWith("**Default planning estimate:")).join("\n\n");
  return <div className="new-seo-page social-opportunity-page pb-20 lg:pb-0">
    <NewSeoHead page={page} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
    <PageBreadcrumb items={[{ label: "Social Media Marketing", href: "/social-media-management-sri-lanka" }, { label: page.breadcrumbLabel }]} />
    <header className="new-seo-hero relative isolate overflow-hidden bg-foreground py-14 lg:py-20">
      <img src={socialImage} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover" /><div className="absolute inset-0 -z-10 bg-foreground/90" />
      <div className="container max-w-4xl mx-auto px-4 text-center"><p className="text-background/80 text-sm mb-4">Cypher Digital · {page.breadcrumbLabel}</p><h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight text-background mb-6">{content.h1}</h1><Copy markdown={intro} />
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-7">
          <Button asChild className="bg-cta text-cta-foreground border-0 whitespace-normal h-auto min-h-12 py-3 px-6"><a href={isCalculator ? "#calculator" : whatsapp} target={isCalculator ? undefined : "_blank"} rel="noopener noreferrer">{isCalculator ? "Build my estimate" : page.cta}<ArrowRight className="h-4 w-4 ml-2 shrink-0" /></a></Button>
          <Button asChild variant="secondary" className="whitespace-normal h-auto min-h-12 py-3 px-6"><Link to="/social-media-marketing-packages-sri-lanka">View Social Media Packages</Link></Button>
          <Button asChild variant="secondary" className="whitespace-normal h-auto min-h-12 py-3 px-6"><a href={`tel:+${number}`}><Phone className="h-4 w-4 mr-2" />{formatWhatsappDisplay(number)}</a></Button>
        </div>
      </div>
    </header>
    {isCalculator && <SocialCostCalculator />}
    <nav aria-label="On this page" className="border-y border-border bg-secondary/40 py-8"><div className="container max-w-4xl mx-auto px-4"><h2 className="font-semibold mb-4">On this page</h2><ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">{content.sections.map(section => <li key={section.id}><a className="text-muted-foreground hover:text-primary" href={`#${section.id}`}>{section.title}</a></li>)}</ol></div></nav>
    <article className="container max-w-4xl mx-auto px-4 py-12 space-y-12">{content.sections.map(section => <section key={section.id} id={section.id} className="scroll-mt-24"><h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>{section.title === "Frequently Asked Questions" ? <div className="border-t border-border">{content.faqs.map(faq => <details key={faq.q} className="border-b border-border py-5"><summary className="cursor-pointer font-semibold">{faq.q}</summary><div className="mt-4"><Copy markdown={faq.a} /></div></details>)}</div> : <Copy markdown={section.markdown} />}</section>)}</article>
    {!isCalculator && <div className="social-mobile-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-4 pt-3 lg:hidden"><Button asChild className="social-whatsapp h-auto min-h-11 whitespace-normal w-full border-0"><a href={whatsapp} target="_blank" rel="noopener noreferrer">{page.cta}</a></Button></div>}
  </div>;
}