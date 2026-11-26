import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
const read = (f: string) => readFileSync(`src/pages/${f}.tsx`, "utf8");
describe("event interlinking", () => {
  it("hub links to the planning guide", () => expect(read("EventManagement")).toContain('to="/event-planning-sri-lanka"'));
  it("guide links to the hub", () => expect(read("EventPlanningSriLanka")).toContain('to="/event-management-sri-lanka"'));
  it.each(["EventMarketing", "WeddingPlanning"])("%s sends 'event planning' anchor to the guide", (f) =>
    expect(read(f)).toMatch(/to="\/event-planning-sri-lanka"[^>]*>event planning in Sri Lanka</));
});
import { eventArticles } from "@/data/eventArticles";
describe("supporting event articles", () => {
  it.each(eventArticles.map(a => a.slug))("%s links to the guide and the hub", (slug) => {
    const a = eventArticles.find(x => x.slug === slug)!;
    const text = [a.intro, ...a.sections.flatMap(s => s.paragraphs)].join(" ");
    expect(text).toContain("(/event-planning-sri-lanka)");
    expect(text).toContain("(/event-management-sri-lanka)");
  });
});
import { eventArticlesHtml } from "../../scripts/event-articles-html";
describe("event article prerender", () => {
  const tpl = '<html><head><title>x</title></head><body><div id="root"></div></body></html>';
  it.each(eventArticles.map(a => a.slug))("%s renders full text without JavaScript", (slug) => {
    const html = eventArticlesHtml(tpl, `/blog/${slug}`);
    expect(html).toContain(`<link rel="canonical" href="https://cypherdigital.lk/blog/${slug}">`);
    expect(html).toContain('href="/event-management-sri-lanka"');
    expect(html).toContain('href="/event-planning-sri-lanka"');
    expect(html).toContain('"FAQPage"');
  });
  it("leaves other routes unchanged", () => expect(eventArticlesHtml(tpl, "/blog/other")).toBe(tpl));
});
