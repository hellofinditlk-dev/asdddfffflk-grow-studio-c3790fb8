import { describe, expect, it } from "vitest";
import { getWhatsappNumber, formatWhatsappDisplay } from "@/lib/whatsapp";

describe("social media page WhatsApp and call routing", () => {
  it.each([
    "/social-media-strategy-sri-lanka",
    "/social-media-content-creation-sri-lanka",
    "/social-media-lead-generation-sri-lanka",
    "/social-media-audit-sri-lanka",
    "/social-media-consultant-sri-lanka",
    "/facebook-ads-sri-lanka",
    "/instagram-ads-sri-lanka",
    "/tiktok-ads-sri-lanka",
    "/linkedin-advertising-sri-lanka",
    "/whatsapp-marketing-sri-lanka",
    "/social-media-management-sri-lanka",
  ])("routes %s to the social media line 94760317477", (path) => {
    expect(getWhatsappNumber(path)).toBe("94760317477");
  });

  it("keeps the social line when a trailing slash is present", () => {
    expect(getWhatsappNumber("/instagram-ads-sri-lanka/")).toBe("94760317477");
  });

  it.each(["/", "/blog/newspaper-advertising-rates-sri-lanka", "/web-design-sri-lanka"])(
    "routes %s to the main line 94701772626",
    (path) => {
      expect(getWhatsappNumber(path)).toBe("94701772626");
    },
  );

  it("keeps dedicated industry overrides", () => {
    expect(getWhatsappNumber("/real-estate-digital-marketing-sri-lanka")).toBe("94771437707");
    expect(getWhatsappNumber("/hotel-digital-marketing-sri-lanka")).toBe("94771976351");
  });

  it("formats the social line for display", () => {
    expect(formatWhatsappDisplay("94760317477")).toBe("+94 76 031 7477");
    expect(formatWhatsappDisplay("94701772626")).toBe("+94 70 177 2626");
  });
});
