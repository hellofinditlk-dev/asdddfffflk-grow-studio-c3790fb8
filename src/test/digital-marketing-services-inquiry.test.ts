import { describe, expect, it } from "vitest";
import { buildMarketingPlanMessage, selectedMarketingServices } from "@/lib/digitalMarketingServicesInquiry";

describe("All Services marketing plan", () => {
  it("retains multiple selected services without duplicates or unlisted values", () => {
    expect(selectedMarketingServices(["SEO", "Ads", "SEO", "Events", "unlisted"])).toEqual(["Ads", "SEO", "Events"]);
  });
  it("sends every supplied field and selected service in the editable draft", () => {
    const result = buildMarketingPlanMessage({ name: " Test Customer ", company: " Test Company ", email: "test@example.com", phone: "0771234567", services: ["Social media", "Traditional media"], message: "Please plan our launch" });
    expect(result).toBe("Hi, I'm Test Customer. I'd like a free marketing plan.\nCompany: Test Company\nEmail: test@example.com\nPhone/WhatsApp: 0771234567\nServices interested in: Social media, Traditional media\nMessage: Please plan our launch");
  });
});