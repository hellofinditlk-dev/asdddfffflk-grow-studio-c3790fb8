import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";
import { eventPlanningHtml } from "../../scripts/event-planning-html";
import { PLANNING_PATH, PLANNING_CANONICAL, planningSections, planningFaqs, eventPlanningSchema } from "../data/eventPlanningGuide";

const template = readFileSync("index.html", "utf8");
describe("event planning guide initial response", () => {
  it("contains the full guide, FAQs, schema and links to the service page", () => {
    const doc = new JSDOM(eventPlanningHtml(template, PLANNING_PATH)).window.document;
    expect(doc.querySelectorAll("h1")).toHaveLength(1);
    for (const s of planningSections) for (const para of s.paragraphs) expect(doc.body.textContent).toContain(para);
    expect(doc.querySelectorAll("#plan-faq details")).toHaveLength(planningFaqs.length);
    expect(doc.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(PLANNING_CANONICAL);
    expect(JSON.parse(doc.querySelector("script[data-planning-schema]")?.textContent ?? "null")).toEqual(eventPlanningSchema());
    expect(doc.querySelectorAll('a[href="/event-management-sri-lanka"]').length).toBeGreaterThanOrEqual(2);
  });
  it("leaves other routes unchanged and serves both URL forms", () => {
    for (const p of ["/", "/event-management-sri-lanka", "/blog"]) expect(eventPlanningHtml(template, p)).toBe(template);
    expect(eventPlanningHtml(template, `${PLANNING_PATH}/`)).toBe(eventPlanningHtml(template, PLANNING_PATH));
    const redirects = readFileSync("public/_redirects", "utf8");
    expect(redirects).toContain("/event-planning-sri-lanka/ /event-planning-sri-lanka/index.html 200!");
  });
});
