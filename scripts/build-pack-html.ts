import { buildPackPages, buildPackCanonical, buildPackSchema, type BuildPackField } from "../src/data/buildPackPages";
import { buildPackBodyHtml, buildPackInlineHtml, buildPackSectionId } from "../src/lib/buildPackMarkdown";
import { escapeHtml } from "../src/lib/newSeoMarkdown";

function fieldHtml(field: BuildPackField) {
  const label = escapeHtml(field.label);
  if (field.type === "multi") return `<fieldset><legend>${label}</legend>${field.options?.map(option => `<label><input type="checkbox" name="${field.key}" value="${escapeHtml(option)}">${escapeHtml(option)}</label>`).join("") ?? ""}</fieldset>`;
  if (field.type === "select") return `<label>${label}<select name="${field.key}"><option value="">Select…</option>${field.options?.map(option => `<option>${escapeHtml(option)}</option>`).join("") ?? ""}</select></label>`;
  return `<label>${label}<input name="${field.key}" type="${field.type}"${field.type === "number" ? ' min="1"' : ""}></label>`;
}

/** Only these eight new routes receive generated content; existing HTML is returned byte-for-byte. */
export function buildPackHtml(template: string, pathname: string) {
  const path = pathname.split("?")[0].replace(/\/index\.html$/, "").replace(/\/$/, "");
  const page = buildPackPages.find(entry => entry.path === path);
  if (!page) return template;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const canonical = buildPackCanonical(page);
  const head = `<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:card" content="summary">
<script type="application/ld+json" data-build-pack-schema>${JSON.stringify(buildPackSchema(page)).replace(/</g, "\\u003c")}</script>`;
  const body = `<main data-build-pack-initial>
<nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#services">Services</a> / ${escapeHtml(page.breadcrumb)}</nav>
<section><h1>${escapeHtml(page.hero.title)}</h1>${buildPackBodyHtml(page.hero.body)}<a href="#quote-form">${escapeHtml(page.cta)}</a> <a href="https://wa.me/94701772626?text=${encodeURIComponent(`Hi, I'm interested in ${page.service}.`)}">WhatsApp us</a></section>
${page.sections.map(section => `<section id="${buildPackSectionId(section.title)}"><h2>${escapeHtml(section.title)}</h2>${buildPackBodyHtml(section.body)}</section>`).join("\n")}
<section><h2>Frequently asked questions</h2>${page.faqs.map(faq => `<details open><summary>${escapeHtml(faq.question)}</summary><p>${buildPackInlineHtml(faq.answer)}</p></details>`).join("")}</section>
<section id="quote-form"><h2>${escapeHtml(page.formTitle)}</h2><form aria-label="${escapeHtml(page.service)} inquiry form"><label>Name <input name="name" required maxlength="100" autocomplete="name"></label><label>${escapeHtml(page.companyLabel)}<input name="company" maxlength="150" autocomplete="organization"></label><label>Email <input name="email" type="email" maxlength="255" autocomplete="email"></label><label>Phone/WhatsApp <input name="phone" type="tel" required maxlength="20" autocomplete="tel"></label>${page.fields.map(fieldHtml).join("")}<label>Message<textarea name="message" maxlength="1000"></textarea></label><button type="submit">${escapeHtml(page.submit)}</button></form><noscript><a href="https://wa.me/94701772626">WhatsApp us</a></noscript></section>
</main>`;
  return template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:title|og:description|og:url|og:type|og:image(?::[^"']+)?|twitter:title|twitter:description|twitter:card|twitter:image)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}