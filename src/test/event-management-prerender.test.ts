import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";
import { eventManagementHtml } from "../../scripts/event-management-html";
import { eventManagementPrerender } from "../../scripts/event-management-prerender";
import { EVENT_PATH, EVENT_CANONICAL, eventManagementSchema } from "../lib/eventManagementSeo";
import { faqs, eventPlanningGuideSections } from "../data/eventManagementContent";
import { eventWork } from "../data/eventWork";

const template = readFileSync("index.html", "utf8");
describe("event-page initial response", () => {
  it("makes the entire shared planning guide and 12 supplied FAQs readable without JavaScript", () => {
    const document = new JSDOM(eventManagementHtml(template, EVENT_PATH)).window.document;
    expect(document.querySelectorAll("h1")).toHaveLength(1);
    expect(document.querySelectorAll("#event-faq details")).toHaveLength(12);
    for (const faq of faqs) expect(document.querySelector("#event-faq")?.textContent).toContain(faq.a);
    for (const section of eventPlanningGuideSections) for (const paragraph of section.paragraphs) expect(document.querySelector("#event-planning-guide")?.textContent).toContain(paragraph);
    expect(document.querySelectorAll("#event-work img")).toHaveLength(14);
    for (const photo of eventWork) expect(document.querySelector(`img[alt="${photo.alt}"]`)?.getAttribute("src")).toBe(photo.url);
    expect(JSON.parse(document.querySelector("script[data-event-schema]")?.textContent ?? "null")).toEqual(eventManagementSchema());
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(EVENT_CANONICAL);
  });
  it.each(["/", "/event-marketing-sri-lanka", "/corporate-event-management-sri-lanka", "/digital-marketing-faq-sri-lanka", "/white-label-design", "/blog"]) ("leaves %s unchanged", path => {
    expect(eventManagementHtml(template, path)).toBe(template);
  });
  it("serves both URL forms directly instead of introducing slash loops", () => {
    const redirects = readFileSync("public/_redirects", "utf8").split("\n");
    for (const path of [EVENT_PATH, `${EVENT_PATH}/`]) {
      expect(redirects.filter(line => line.split(/\s+/)[0] === path)).toEqual([`${path} ${EVENT_PATH}/index.html 200!`]);
      expect(eventManagementHtml(template, path)).toBe(eventManagementHtml(template, EVENT_PATH));
    }
  });
  it("emits only the event page and preserves the shared index", async () => {
    const hook = eventManagementPrerender().generateBundle;
    const handler = typeof hook === "function" ? hook : hook?.handler;
    if (!handler) throw new Error("Missing generation hook");
    const emitted: { fileName: string }[] = [];
    const bundle = { "index.html": { type: "asset", source: template } };
    await handler.call({ emitFile: (file: { fileName: string }) => emitted.push(file) } as never, {} as never, bundle as never, false);
    expect(emitted.map(file => file.fileName)).toEqual(["event-management-sri-lanka/index.html"]);
    expect(bundle["index.html"].source).toBe(template);
  });
});