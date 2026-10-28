import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { MAX_PRERENDER_PAGES, newPageHtml } from "../../scripts/new-page-html";
import { newSeoPages } from "@/data/new-seo-pages";
import { markdownHtml } from "@/lib/newSeoMarkdown";

const template = readFileSync("index.html", "utf8");
const markdown = readFileSync("src/content/google-ads-cost-sri-lanka.md", "utf8");

describe("new-pages-only full HTML", () => {
  it("leaves the existing social advertising page byte-for-byte unchanged", () => {
    expect(newPageHtml(template, "/social-media-advertising-sri-lanka", markdown)).toBe(template);
  });
  it("leaves the existing homepage byte-for-byte unchanged", () => {
    expect(newPageHtml(template, "/", markdown)).toBe(template);
  });
  it("includes the complete new article, canonical, original links and schema", () => {
    const html = newPageHtml(template, "/google-ads-cost-sri-lanka", markdown);
    expect(html).toContain(markdownHtml(markdown));
    expect(html).toContain("Most businesses get the fastest return from Search ads first");
    expect(html).toContain('href="/google-ads-sri-lanka">Google Ads Sri Lanka</a>');
    expect(html).toContain('rel="canonical" href="https://cypherdigital.lk/google-ads-cost-sri-lanka"');
    expect(html).toContain('"@type":"FAQPage"');
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html).not.toContain("noindex");
  });
  it("never generates more than the registered twenty-six new pages", () => {
    expect(MAX_PRERENDER_PAGES).toBe(26);
    expect(newSeoPages.length).toBeLessThanOrEqual(26);
  });
  it("registers the eleven supplied URLs in the required order", () => {
    expect(newSeoPages.slice(0, 11).map(page => page.path)).toEqual([
      "/google-ads-cost-sri-lanka", "/google-ads-specialist-sri-lanka",
      "/google-ads-audit-sri-lanka", "/youtube-ads-sri-lanka",
      "/google-shopping-ads-sri-lanka", "/google-remarketing-sri-lanka",
      "/instagram-ads-sri-lanka", "/tiktok-ads-sri-lanka",
      "/whatsapp-marketing-sri-lanka", "/blog/google-ads-vs-google-adsense-sri-lanka",
      "/web-design-sri-lanka",
    ]);
  });
  it.each(newSeoPages)("delivers full supplied content for $path", page => {
    const source = readFileSync(page.contentFile, "utf8");
    expect(newPageHtml(template, page.path, source)).toContain(markdownHtml(source));
  });
  it("uses Article rather than Service schema for the supplied blog page", () => {
    const page = newSeoPages.find(entry => entry.path === "/blog/google-ads-vs-google-adsense-sri-lanka");
    if (!page) throw new Error("Missing supplied blog page");
    const html = newPageHtml(template, page.path, readFileSync(page.contentFile, "utf8"));
    expect(html).toContain('"@type":"Article"');
    expect(html).not.toContain('"@type":"Service"');
    expect(html).toContain('"name":"Blog","item":"https://cypherdigital.lk/blog"');
  });
});