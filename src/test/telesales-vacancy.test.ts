import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { telesalesVacancy as job, telesalesIsOpen } from "../data/telesales-vacancy";
import { telesalesHtml, telesalesSchemas } from "../lib/telesales-seo";

const markdown = readFileSync("src/content/telesales-executive-jobs-sri-lanka.md", "utf8");
const now = new Date("2026-10-26T03:31:00Z");
const schema = telesalesSchemas(markdown, now).find(s => s["@type"] === "JobPosting");
describe("Owner-supplied telesales rules", () => {
  it("serves both vacancy URL forms without a normalized self-redirect", () => {
    const path = "/careers/telesales-executive-jobs-sri-lanka";
    const rules = readFileSync("public/_redirects", "utf8").split("\n")
      .filter(line => line.startsWith(path)).map(line => line.trim().split(/\s+/));
    expect(rules).toEqual([
      [path, `${path}/index.html`, "200!"],
      [`${path}/`, `${path}/index.html`, "200!"],
    ]);
  });
  it("offers full-time and part-time employment", () => expect(job.employmentType).toEqual(["FULL_TIME", "PART_TIME"]));
  it("uses the actual posted date", () => expect(schema).toHaveProperty("datePosted", "2026-10-26"));
  it("uses the supplied closing date", () => expect(schema).toHaveProperty("validThrough", "2027-01-31T23:59:00+05:30"));
  it("limits remote applicants to Sri Lanka and includes Colombo office", () => {
    expect(schema).toHaveProperty("jobLocationType", "TELECOMMUTE");
    expect(schema).toHaveProperty("applicantLocationRequirements.name", "Sri Lanka");
    expect(schema).toHaveProperty("jobLocation.address.addressLocality", "Colombo");
  });
  it("allows beginners", () => expect(schema).toHaveProperty("experienceRequirements.monthsOfExperience", 0));
  it("does not invent a base salary", () => expect(schema).not.toHaveProperty("baseSalary"));
  it("closes at the supplied deadline rather than rolling indefinitely", () => {
    expect(telesalesIsOpen(new Date("2027-01-31T18:29:00Z"))).toBe(true);
    expect(telesalesIsOpen(new Date("2027-01-31T18:29:01Z"))).toBe(false);
    expect(telesalesSchemas(markdown, new Date("2027-02-01"))).toHaveLength(1);
  });
  it("keeps matching complete HTML and schema with a direct application option", () => {
    const html = telesalesHtml('<html><head><title>Old</title></head><body><div id="root"></div></body></html>', markdown, now);
    expect(html).toContain('"@type":"JobPosting"');
    expect(html).toContain("https://wa.me/94701772626");
    expect((html.match(/<h1\b/g) ?? []).length).toBe(1);
    expect(html).not.toMatch(/\[X\]|\[Y\]|\[N\]|\[ADD|\[CONFIRM/);
  });
});