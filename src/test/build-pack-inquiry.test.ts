import { describe, expect, it } from "vitest";
import { buildPackPages } from "@/data/buildPackPages";
import { buildPackDetails, buildPackInquiryMessage } from "@/lib/buildPackInquiry";

describe("Build-pack service enquiries", () => {
  for (const page of buildPackPages) {
    it(`${page.path} retains all requested details and selected options`, () => {
      const details: Record<string, string | string[]> = {};
      for (const field of page.fields) details[field.key] = field.type === "multi" ? (field.options ?? []).slice(0, 2) : field.type === "select" ? field.options?.[0] ?? "" : "Sample detail";
      const form = { name: "Customer", company: "Business", email: "customer@example.com", phone: "0771234567", message: "Please quote our project", details };
      const result = buildPackInquiryMessage(page, form);
      expect(result).toContain(`Hi, I'm Customer. I'm interested in ${page.service}.`);
      expect(result).toContain(`${page.companyLabel}: Business`);
      expect(result).toContain("Email: customer@example.com\nPhone/WhatsApp: 0771234567");
      expect(result).toContain("Message: Please quote our project");
      for (const field of page.fields) {
        const value = details[field.key];
        expect(result).toContain(`${field.label}: ${Array.isArray(value) ? value.join(", ") : value}`);
      }
    });
  }
  it("advertising accepts multiple requested channels and rejects unlisted values", () => {
    const page = buildPackPages.find(entry => entry.id === "02");
    if (!page) throw new Error("Advertising page missing");
    expect(buildPackDetails(page, { channels: ["TV", "Outdoor", "TV", "invalid"] }).channels).toEqual(["TV", "Outdoor"]);
  });
  it("outdoor accepts the brief's billboard and LED formats together", () => {
    const page = buildPackPages.find(entry => entry.id === "09");
    if (!page) throw new Error("Outdoor page missing");
    expect(buildPackDetails(page, { formats: ["Billboards", "LED screens"] }).formats).toEqual(["Billboards", "LED screens"]);
  });
});