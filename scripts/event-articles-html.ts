import { eventArticles, eventArticleSchema } from "../src/data/eventArticles";
import { escapeHtml } from "../src/lib/newSeoMarkdown";

const linked = (t: string) => escapeHtml(t).replace(/\[([^\]]+)\]\(((?:\/(?!\/)|https:\/\/)[^)\s]*)\)/g, '<a href="$2">$1</a>');
const p = (t: string) => `<p>${linked(t)}</p>`;
const ul = (items: string[]) => `<ul>${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;

/** Initial HTML only for supporting event article paths; other paths return the template unchanged. */
export function eventArticlesHtml(template: string, pathname: string): string {
  const path = pathname.split("?")[0].replace(/\/index\.html$/, "").replace(/\/$/, "");
  const a = eventArticles.find(x => `/blog/${x.slug}` === path);
  if (!a) return template;
  const url = `https://cypherdigital.lk/blog/${a.slug}`;
  const t = escapeHtml(a.title), d = escapeHtml(a.description);
  const tags = [`<title>${t}</title>`, `<meta name="description" content="${d}">`, `<link rel="canonical" href="${url}">`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">`, `<meta property="og:title" content="${t}">`,
    `<meta property="og:description" content="${d}">`, `<meta property="og:url" content="${url}">`, `<meta property="og:type" content="article">`,
    `<meta name="twitter:title" content="${t}">`, `<meta name="twitter:description" content="${d}">`, `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json" data-event-article-schema>${JSON.stringify(eventArticleSchema(a)).replace(/</g, "\\u003c")}</script>`].join("\n");
  const body = `<main class="event-page" data-event-article-initial><article>
<nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog">Blog</a> / ${escapeHtml(a.h1)}</nav>
<h1>${escapeHtml(a.h1)}</h1>${p(a.intro)}
${a.sections.map(s => `<section id="${s.id}"><h2>${escapeHtml(s.title)}</h2>${s.paragraphs.map(p).join("")}${s.list ? ul(s.list) : ""}</section>`).join("\n")}
<aside><p>Read the full <a href="/event-planning-sri-lanka">event planning Sri Lanka guide</a>, or ask our <a href="/event-management-sri-lanka">event management Sri Lanka</a> team for a written proposal within 24–48 hours.</p></aside>
<section id="faq"><h2>Frequently Asked Questions</h2>${a.faqs.map(f => `<details open><summary>${escapeHtml(f.q)}</summary>${p(f.a)}</details>`).join("")}</section>
<section id="enquiry"><h2>Send Us Your Event Brief</h2><a href="https://wa.me/94760317477">WhatsApp +94 76 031 7477</a></section>
</article></main>`;
  return template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:title|og:description|og:url|og:type|og:image(?::[^"']+)?|twitter:title|twitter:description|twitter:card|twitter:image)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${tags}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}
