import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { newSeoPages } from "@/data/new-seo-pages";
import { newPageHtml } from "../../scripts/new-page-html";
import { markdownHtml } from "@/lib/newSeoMarkdown";

describe("approved Batch 2 delivery", () => {
  it("registers exactly ten Batch 2 pages after the original eleven", () => {
    expect(newSeoPages.slice(11).map(page => page.path)).toEqual([
      "/blog/newspaper-advertising-rates-sri-lanka", "/blog/ads-support-sri-lanka",
      "/blog/meta-ads-payment-sri-lanka", "/blog/facebook-boost-price-sri-lanka",
      "/blog/web-design-price-sri-lanka", "/blog/student-lead-generation-sri-lanka",
      "/blog/hire-social-media-manager-sri-lanka", "/blog/youtube-seo-sri-lanka",
      "/blog/sri-lanka-tv-channels-advertising-guide", "/blog/social-media-statistics-sri-lanka-2026",
    ]);
  });
  it.each(newSeoPages.slice(11))("keeps all article content in initial HTML for $path", page => {
    const markdown = readFileSync(page.contentFile, "utf8");
    expect(newPageHtml(readFileSync("index.html", "utf8"), page.path, markdown)).toContain(markdownHtml(markdown));
  });
});