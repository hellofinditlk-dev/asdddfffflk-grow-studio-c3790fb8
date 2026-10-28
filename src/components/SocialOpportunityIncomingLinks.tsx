import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { socialOpportunityIncomingLinks } from "@/data/social-opportunity-links";

/** Scoped to the source URLs explicitly supplied in the five briefs. */
export default function SocialOpportunityIncomingLinks() {
  const { pathname } = useLocation();
  const [host, setHost] = useState<HTMLElement | null>(null);
  const entries = socialOpportunityIncomingLinks.filter(entry => entry.source === pathname);
  useEffect(() => {
    setHost(null);
    if (!entries.length) return;
    let element: HTMLParagraphElement | null = null;
    const mount = () => {
      const article = document.querySelector("main article");
      const paragraphs = article ? Array.from(article.querySelectorAll("p")) : Array.from(document.querySelectorAll("main section:not(:first-of-type) p"));
      const paragraph = paragraphs.find(item => !item.closest("header, aside, nav, [data-blog-cta-end], [data-blog-internal-links]") && (item.textContent?.length ?? 0) > 80);
      if (!paragraph) return false;
      element = document.createElement("p");
      element.setAttribute("data-social-opportunity-incoming", "");
      element.className = "text-muted-foreground leading-relaxed mt-4";
      paragraph.after(element);
      setHost(element);
      return true;
    };
    const observer = new MutationObserver(() => { if (mount()) observer.disconnect(); });
    if (!mount()) observer.observe(document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 5000);
    return () => { observer.disconnect(); window.clearTimeout(timeout); element?.remove(); };
  }, [pathname]);
  if (!host) return null;
  return createPortal(<>{entries.map((entry, index) => <span key={entry.target}>{index > 0 ? " " : ""}{entry.prefix}<Link className="text-primary font-semibold hover:underline" to={entry.target}>{entry.anchor}</Link>{entry.suffix}</span>)}</>, host);
}