import { describe, expect, it } from "vitest";
import { inlineMarkdown, splitSeoMarkdown } from "@/lib/newSeoMarkdown";

describe("new SEO page brief safeguards", () => {
  it("preserves the specified money-page destination without nofollow", () => {
    const html = inlineMarkdown("[Google Ads Sri Lanka](/google-ads-sri-lanka)");
    expect(html).toContain('href="/google-ads-sri-lanka"');
    expect(html).not.toContain("nofollow");
  });
  it("does not substitute invented prices for real-data placeholders", () => {
    const html = inlineMarkdown("[ADD REAL PRICE]");
    expect(html).toContain("[ADD REAL PRICE]");
    expect(html).not.toMatch(/LKR\s*\d/);
  });
  it("keeps all supplied FAQ answers available to the schema", () => {
    const data = splitSeoMarkdown("# Cost\n\nIntro\n\n## Frequently Asked Questions\n\n### Minimum budget?\n[ADD REAL LKR AMOUNT]\n\n### Billing?\n[CONFIRM: billing currency]\n\n## Contact\nContact us");
    expect(data.faqs).toEqual([
      { q: "Minimum budget?", a: "[ADD REAL LKR AMOUNT]" },
      { q: "Billing?", a: "[CONFIRM: billing currency]" },
    ]);
  });
});