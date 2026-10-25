import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { MAX_PRERENDER_PAGES, newPageHtml } from "../../scripts/new-page-html";
import { newSeoPages } from "@/data/new-seo-pages";

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
    expect(html).toContain("Typical Cost per Click by Industry in Sri Lanka");
    expect(html).toContain("Most businesses get the fastest return from Search ads first");
    expect(html).toContain('href="/google-ads-sri-lanka">Google Ads Sri Lanka</a>');
    expect(html).toContain('rel="canonical" href="https://cypherdigital.lk/google-ads-cost-sri-lanka"');
    expect(html).toContain('"@type":"FAQPage"');
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html).not.toContain("noindex");
  });
  it("never generates more than the eleven requested new pages", () => {
    expect(MAX_PRERENDER_PAGES).toBe(11);
    expect(newSeoPages.length).toBeLessThanOrEqual(11);
  });
});