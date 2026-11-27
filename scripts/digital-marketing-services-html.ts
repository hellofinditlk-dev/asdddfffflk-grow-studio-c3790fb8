import {
  SERVICES_HUB_CANONICAL, SERVICES_HUB_DESCRIPTION, SERVICES_HUB_PATH, SERVICES_HUB_TITLE,
  marketingServiceOptions, servicesHubFaqs, servicesHubHero, servicesHubLinkedRoutes,
  servicesHubSchema, servicesHubSections,
} from "../src/data/digitalMarketingServices";
import { escapeHtml, markdownHtml, sectionId } from "../src/lib/newSeoMarkdown";

// Missing routes stay readable without creating links to pages that do not exist.
export function servicesHubMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, (match, label: string, href: string) => servicesHubLinkedRoutes.includes(href) ? match : label);
}

export function digitalMarketingServicesHtml(template: string, pathname: string): string {
  const path = pathname.split("?")[0].replace(/\/index\.html$/, "").replace(/\/$/, "");
  if (path !== SERVICES_HUB_PATH) return template;
  const title = escapeHtml(SERVICES_HUB_TITLE);
  const description = escapeHtml(SERVICES_HUB_DESCRIPTION);
  const head = `<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${SERVICES_HUB_CANONICAL}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${SERVICES_HUB_CANONICAL}">
<meta property="og:type" content="website">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:card" content="summary">
<script type="application/ld+json" data-services-hub-schema>${JSON.stringify(servicesHubSchema()).replace(/</g, "\\u003c")}</script>`;
  const content = `<main data-services-hub-initial>
<nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/#services">Services</a> / Digital Marketing Services</nav>
<section><h1>${escapeHtml(servicesHubHero.title)}</h1>${markdownHtml(servicesHubMarkdown(servicesHubHero.body))}<a href="#marketing-plan">Get a free marketing plan</a> <a href="https://wa.me/94701772626?text=Hi%2C%20I%27d%20like%20a%20free%20marketing%20plan.">WhatsApp us</a></section>
${servicesHubSections.map(section => `<section id="${sectionId(section.title)}"><h2>${escapeHtml(section.title)}</h2>${markdownHtml(servicesHubMarkdown(section.body))}</section>`).join("\n")}
<section><h2>Frequently asked questions</h2>${servicesHubFaqs.map(faq => `<details open><summary>${escapeHtml(faq.question)}</summary>${markdownHtml(servicesHubMarkdown(faq.answer))}</details>`).join("")}</section>
<section id="marketing-plan"><h2>Get a free marketing plan</h2>
<form aria-label="Marketing plan form"><label>Name <input name="name" required maxlength="100" autocomplete="name"></label><label>Company <input name="company" maxlength="150" autocomplete="organization"></label><label>Email <input name="email" type="email" maxlength="255" autocomplete="email"></label><label>Phone/WhatsApp <input name="phone" type="tel" required maxlength="20" autocomplete="tel"></label><fieldset><legend>Services interested in</legend>${marketingServiceOptions.map(option => `<label><input name="services" type="checkbox" value="${escapeHtml(option)}">${escapeHtml(option)}</label>`).join("")}</fieldset><label>Message <textarea name="message" maxlength="1000"></textarea></label><button type="submit">Get my plan</button></form>
<noscript><a href="https://wa.me/94701772626">WhatsApp us</a></noscript></section></main>`;
  return template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:title|og:description|og:url|og:type|og:image(?::[^"']+)?|twitter:title|twitter:description|twitter:card|twitter:image)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
    .replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}