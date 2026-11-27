import {
  PRODUCT_PHOTOGRAPHY_CANONICAL,
  PRODUCT_PHOTOGRAPHY_DESCRIPTION,
  PRODUCT_PHOTOGRAPHY_PATH,
  PRODUCT_PHOTOGRAPHY_TITLE,
  productPhotographyAdPoints,
  productPhotographyCopy,
  productPhotographyFaqs,
  productPhotographyPackages,
  productPhotographySchema,
  productPhotographyServices,
  productPhotographySteps,
} from "../src/data/productPhotography";
import { escapeHtml } from "../src/lib/newSeoMarkdown";

const linked = (text: string) => escapeHtml(text).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a href="$2">$1</a>');
const paragraph = (text: string) => `<p>${linked(text)}</p>`;

/** Full initial HTML only for the product photography route. */
export function productPhotographyHtml(template: string, pathname: string): string {
  const path = pathname.split("?")[0].replace(/\/index\.html$/, "").replace(/\/$/, "");
  if (path !== PRODUCT_PHOTOGRAPHY_PATH) return template;

  const title = escapeHtml(PRODUCT_PHOTOGRAPHY_TITLE);
  const description = escapeHtml(PRODUCT_PHOTOGRAPHY_DESCRIPTION);
  const head = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<link rel="canonical" href="${PRODUCT_PHOTOGRAPHY_CANONICAL}">`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${PRODUCT_PHOTOGRAPHY_CANONICAL}">`,
    `<meta property="og:type" content="website">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json" data-product-photography-schema>${JSON.stringify(productPhotographySchema()).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");

  const body = `<main data-product-photography-initial>
<nav aria-label="Breadcrumb"><a href="/">Home</a> / Services / Product Photography</nav>
<section><h1>${productPhotographyCopy.h1}</h1><p><strong>${productPhotographyCopy.heroLead}</strong></p>${productPhotographyCopy.heroParagraphs.map(paragraph).join("")}${paragraph(productPhotographyCopy.shootSetup)}<a href="#book-a-product-shoot">Get a product shoot quote</a><a href="https://wa.me/94701772626">WhatsApp us</a></section>
<section><h2>Product photography services</h2>${productPhotographyServices.map((service) => `<article><h3>${escapeHtml(service.title)}</h3>${paragraph(service.text)}</article>`).join("")}</section>
<section><h2>Product photos that become ads</h2>${paragraph(productPhotographyCopy.adsIntro)}<ul>${productPhotographyAdPoints.map((point) => `<li>${linked(point)}</li>`).join("")}</ul></section>
<section><h2>Packages</h2><table><thead><tr><th>Package</th><th>Best for</th><th>What you get</th></tr></thead><tbody>${productPhotographyPackages.map((item) => `<tr><th>${escapeHtml(item.name)}</th><td>${escapeHtml(item.bestFor)}</td><td>${escapeHtml(item.includes)}</td></tr>`).join("")}</tbody></table>${paragraph(productPhotographyCopy.packagesOutro)}</section>
<section><h2>How a product shoot works</h2><ol>${productPhotographySteps.map((step) => `<li><strong>${escapeHtml(step.title)}</strong> ${escapeHtml(step.text)}</li>`).join("")}</ol></section>
<section><h2>Who we shoot for</h2>${paragraph(productPhotographyCopy.audience)}</section>
<section><h2>Recent product shoots</h2><a href="/our-work">our work</a></section>
<section><h2>After the shoot: keep your feed full</h2>${paragraph(productPhotographyCopy.afterShoot)}<a href="/social-media-marketing-packages-sri-lanka">See social media packages</a></section>
<section id="frequently-asked-questions"><h2>Frequently asked questions</h2>${productPhotographyFaqs.map((faq) => `<details open><summary>${escapeHtml(faq.question)}</summary>${paragraph(faq.answer)}</details>`).join("")}</section>
<section id="book-a-product-shoot"><h2>Book a product shoot</h2>${paragraph(productPhotographyCopy.formIntro)}<form aria-label="Product shoot quote form"><label>Name <input name="name" type="text"></label><label>Brand / company <input name="brand" type="text"></label><label>Email <input name="email" type="email"></label><label>Phone/WhatsApp <input name="phone" type="tel"></label><label>Number of products <input name="numberOfProducts" type="number"></label><label>Shoot type <select name="shootType"><option>White background</option><option>Lifestyle</option><option>Flat lay</option><option>Video</option><option>Not sure</option></select></label><label>Interested in social media management too? <select name="socialMediaInterest"><option>Yes</option><option>No</option><option>Maybe</option></select></label><label>Message <textarea name="message"></textarea></label><button type="submit">Get my quote</button></form></section>
</main>`;

  return template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:title|og:description|og:url|og:type|og:image(?::[^"']+)?|twitter:title|twitter:description|twitter:card|twitter:image)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}
