import { digitalMarketingFaq, digitalMarketingFaqCategories } from "../src/data/digitalMarketingFaq";
import { CANONICAL, FAQ_PATH, PAGE_TITLE, PAGE_DESCRIPTION, digitalMarketingFaqSchema } from "../src/lib/digitalMarketingFaqSeo";
import { escapeHtml } from "../src/lib/newSeoMarkdown";

/** Only this route gets a generated copy; the shared index is never modified. */
export function digitalMarketingFaqHtml(template: string, pathname: string): string {
  const path = pathname.split("?")[0].replace(/\/$/, "");
  if (path !== FAQ_PATH && path !== `${FAQ_PATH}/index.html`) return template;

  const tags = [
    `<title>${escapeHtml(PAGE_TITLE)}</title>`,
    `<meta name="description" content="${escapeHtml(PAGE_DESCRIPTION)}">`,
    `<link rel="canonical" href="${CANONICAL}">`,
    `<meta name="robots" content="index, follow, max-snippet:-1">`,
    `<meta property="og:title" content="${escapeHtml(PAGE_TITLE)}">`,
    `<meta property="og:description" content="${escapeHtml(PAGE_DESCRIPTION)}">`,
    `<meta property="og:url" content="${CANONICAL}">`,
    `<meta property="og:type" content="website">`,
    `<meta name="twitter:title" content="${escapeHtml(PAGE_TITLE)}">`,
    `<meta name="twitter:description" content="${escapeHtml(PAGE_DESCRIPTION)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json" data-dm-faq-schema>${JSON.stringify(digitalMarketingFaqSchema()).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");
  let html = template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:title|og:description|og:url|og:type|og:image(?::[^"']+)?|twitter:title|twitter:description|twitter:card|twitter:image)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${tags}\n</head>`);
  const categories = digitalMarketingFaqCategories.map(category => {
    const answers = digitalMarketingFaq.filter(item => item.categoryId === category.id).map(item =>
      `<details class="qa" id="${escapeHtml(item.id)}" open><summary><h3>${escapeHtml(item.question)}</h3></summary><div class="ans"><p>${item.answerHtml}</p><a href="#${escapeHtml(item.id)}" aria-label="Link to this answer">#</a></div></details>`
    ).join("\n");
    return `<section class="cat" id="${escapeHtml(category.id)}"><h2>${escapeHtml(category.title)}</h2>${answers}</section>`;
  }).join("\n");
  const body = `<main class="dm-faq"><div class="narrow"><nav aria-label="Breadcrumb"><a href="/">Home</a> / Digital Marketing FAQ</nav><h1>Digital marketing questions, answered.</h1><p>${escapeHtml(PAGE_DESCRIPTION)}</p>${categories}</div></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  // Keep the tracking pixel, but omit the generic homepage fallback in this copy.
  return html.replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}