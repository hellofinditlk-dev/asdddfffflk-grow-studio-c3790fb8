import { escapeHtml, markdownHtml, splitSeoMarkdown } from "../src/lib/newSeoMarkdown";
import { newSeoPages } from "../src/data/new-seo-pages";

export const MAX_PRERENDER_PAGES = 11;

export function newPageHtml(template: string, pathname: string, markdown: string): string {
  const page = newSeoPages.find(entry => entry.path === pathname);
  if (!page) return template;
  const canonical = `https://cypherdigital.lk${page.path}`;
  const content = splitSeoMarkdown(markdown);
  const schemas = [
    page.kind === "article"
      ? { "@context": "https://schema.org", "@type": "Article", headline: content.h1, description: page.description, mainEntityOfPage: canonical, datePublished: "2026-10-25", dateModified: "2026-10-25", author: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" }, publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" } }
      : { "@context": "https://schema.org", "@type": "Service", name: page.breadcrumbLabel, description: page.description, url: canonical, provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: content.faqs.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: page.kind === "article" ? "Blog" : "Services", item: page.kind === "article" ? "https://cypherdigital.lk/blog" : "https://cypherdigital.lk/#services" },
      { "@type": "ListItem", position: 3, name: page.breadcrumbLabel, item: canonical },
    ] },
  ];
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:title" content="${escapeHtml(page.title)}">`,
    `<meta property="og:description" content="${escapeHtml(page.description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:type" content="${page.kind === "article" ? "article" : "website"}">`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="robots" content="index, follow">`,
    `<script type="application/ld+json" data-new-page-schema>${JSON.stringify(schemas).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");
  // Modify only copies for explicitly registered new pages; the original index stays untouched.
  let html = template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|robots|og:title|og:description|og:url|og:type|twitter:title|twitter:description|twitter:card)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
  html = html.replace("</head>", `${tags}\n</head>`);
  const toc = content.sections.map(section => `<li><a href="#${section.id}">${escapeHtml(section.title)}</a></li>`).join("");
  const parent = page.kind === "article" ? { href: "/blog", label: "Blog" } : { href: "/#services", label: "Services" };
  const body = `<main class="new-seo-page container mx-auto px-4 pt-24 pb-16"><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="${parent.href}">${parent.label}</a> / ${escapeHtml(page.breadcrumbLabel)}</nav><nav aria-label="On this page"><h2>On this page</h2><ol>${toc}</ol></nav><article class="new-seo-copy">${markdownHtml(markdown)}</article></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  // Remove generic homepage-only noscript text from this new-page copy; preserve the tracking pixel.
  return html.replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}