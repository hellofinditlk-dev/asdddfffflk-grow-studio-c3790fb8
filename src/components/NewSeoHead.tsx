import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import type { NewSeoPage } from "@/data/new-seo-pages";

/** Metadata scoped to the eleven-page allowlist; shared public SEOHead stays unchanged. */
export default function NewSeoHead({ page }: { page: NewSeoPage }) {
  const canonical = `https://cypherdigital.lk${page.path}`;
  useEffect(() => {
    const previous = Array.from(document.head.querySelectorAll<HTMLMetaElement>('meta[property="og:url"], meta[property="og:type"]')).map(meta => ({ meta, content: meta.content }));
    const added: HTMLMetaElement[] = [];
    for (const [property, value] of [["og:url", canonical], ["og:type", page.kind === "article" ? "article" : "website"]]) {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
        added.push(meta);
      }
      meta.content = value;
    }
    return () => {
      added.forEach(meta => meta.remove());
      previous.forEach(({ meta, content }) => { meta.content = content; });
    };
  }, [canonical, page.kind]);
  return <SEOHead title={page.title} description={page.description} canonical={canonical} />;
}