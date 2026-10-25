import { readFileSync } from "node:fs";
import { newSeoPages } from "../src/data/new-seo-pages";
import { markdownHtml, escapeHtml, splitSeoMarkdown } from "../src/lib/newSeoMarkdown";
const path = process.argv[2];
const page = newSeoPages.find(p => p.path === path);
if (!page) throw new Error(`Unregistered page ${path}`);
const markdown = readFileSync(page.contentFile, "utf8");
let html = "";
let status = 0;
for (let attempt = 0; attempt < 40; attempt++) {
  try {
    const response = await fetch(`http://localhost:8080${path}`);
    status = response.status;
    html = await response.text();
    if (html.includes(markdownHtml(markdown))) break;
  } catch {}
  await new Promise(resolve => setTimeout(resolve, 500));
}
const checks = {
  status200: status === 200,
  fullBody: html.includes(markdownHtml(markdown)),
  title: html.includes(`<title>${escapeHtml(page.title)}</title>`),
  description: html.includes(`content="${escapeHtml(page.description)}"`),
  canonical: html.includes(`rel="canonical" href="https://cypherdigital.lk${path}"`),
  oneH1: (html.match(/<h1\b/g) ?? []).length === 1,
  indexable: !/<meta[^>]*content=["'][^"']*noindex/i.test(html),
  schema: html.includes(`"@type":"${page.kind === "article" ? "Article" : "Service"}"`) && html.includes('"@type":"FAQPage"') && html.includes('"@type":"BreadcrumbList"'),
  links: [...markdown.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].every(m => html.includes(`href="${escapeHtml(m[2])}">${escapeHtml(m[1])}</a>`)),
};
console.log(JSON.stringify({ path, checks, sections: splitSeoMarkdown(markdown).sections.length }));
if (Object.values(checks).some(value => !value)) process.exit(1);
