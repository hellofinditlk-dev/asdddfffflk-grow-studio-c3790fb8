import { describe, it, expect } from "vitest";
import { excludeCareerRecords, isCareerPath } from "@/lib/serviceFromPath";

// Admin "Recent Inquiries" must exclude career page and job application
// contacts — they are job seekers, not sales leads.
describe("isCareerPath", () => {
  it("matches the careers index page", () => {
    expect(isCareerPath("/careers")).toBe(true);
  });

  it("matches vacancy detail pages", () => {
    expect(isCareerPath("/careers/telesales-executive-jobs-sri-lanka")).toBe(true);
  });

  it("matches careers paths with query strings or trailing slashes", () => {
    expect(isCareerPath("/careers/?utm_source=facebook")).toBe(true);
    expect(isCareerPath("/careers/graphic-designer#apply")).toBe(true);
  });

  it("does not match service or other pages", () => {
    expect(isCareerPath("/social-media-management-sri-lanka")).toBe(false);
    expect(isCareerPath("/")).toBe(false);
    expect(isCareerPath(null)).toBe(false);
    expect(isCareerPath(undefined)).toBe(false);
  });
});

describe("All contact records career exclusion", () => {
  for (const kind of ["inquiry", "whatsapp", "call"]) {
    it(`excludes career ${kind} records while retaining service records`, () => {
      const records = [
        { id: "career", kind, source_path: "/careers" },
        { id: "vacancy", kind, source_path: "/careers/work-from-home-call-center-jobs-sri-lanka?apply=1" },
        { id: "service", kind, source_path: "/social-media-cost-calculator" },
        { id: "unknown", kind, source_path: null },
      ];
      expect(excludeCareerRecords(records).map(record => record.id)).toEqual(["service", "unknown"]);
      expect(records).toHaveLength(4);
    });
  }
});
