import { describe, expect, it } from "vitest";
import { socialOpportunityIncomingLinks } from "@/data/social-opportunity-links";

describe("uploaded incoming-link rules", () => {
  it("contains six requested incoming links for each of the five destinations", () => {
    const paths = ["/social-media-ads-support-sri-lanka", "/social-media-boosting-service-sri-lanka", "/social-media-marketing-colombo", "/social-media-marketing-small-business-sri-lanka", "/social-media-cost-calculator"];
    for (const target of paths) expect(socialOpportunityIncomingLinks.filter(entry => entry.target === target)).toHaveLength(6);
  });
  it("does not modify the protected social management source or introduce its forbidden duplicate", () => {
    expect(socialOpportunityIncomingLinks.some(entry => entry.source === "/social-media-management-sri-lanka")).toBe(false);
    expect(socialOpportunityIncomingLinks.some(entry => entry.target === "/social-media-marketing-sri-lanka")).toBe(false);
  });
});