import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { JSDOM } from "jsdom";
import { digitalMarketingFaqHtml } from "../../scripts/digital-marketing-faq-html";
import { digitalMarketingFaqPrerender } from "../../scripts/digital-marketing-faq-prerender";
import { digitalMarketingFaq } from "../data/digitalMarketingFaq";
import { FAQ_PATH, digitalMarketingFaqSchema, stripHtml } from "../lib/digitalMarketingFaqSeo";

const template = readFileSync("index.html", "utf8");
describe("FAQ-only crawler response", () => {
  it("serves all 56 questions and complete answers without executing JavaScript", () => {
    const document = new JSDOM(digitalMarketingFaqHtml(template, FAQ_PATH)).window.document;
    const answers = document.querySelectorAll("details");
    expect(answers.length).toBe(56);
    for (const item of digitalMarketingFaq) {
      const answer = document.getElementById(item.id);
      expect(answer?.querySelector("h3")?.textContent).toBe(item.question);
      expect(answer?.querySelector(".ans p")?.innerHTML).toBe(item.answerHtml);
    }
    const graph = JSON.parse(document.querySelector("script[data-dm-faq-schema]")?.textContent ?? "null");
    expect(graph).toEqual(digitalMarketingFaqSchema());
    expect(graph["@graph"][0].mainEntity).toHaveLength(56);
    for (const [index, item] of digitalMarketingFaq.entries()) {
      expect(graph["@graph"][0].mainEntity[index].acceptedAnswer.text).toBe(stripHtml(item.answerHtml));
    }
  });
  it.each(["/", "/event-management-sri-lanka", "/google-ads-cost-sri-lanka", "/blog", `${FAQ_PATH}-other`])("leaves %s byte-for-byte unchanged", path => {
    expect(digitalMarketingFaqHtml(template, path)).toBe(template);
  });
  it("rewrites both Netlify URL forms directly to the single generated asset with 200", () => {
    const redirects = readFileSync("public/_redirects", "utf8");
    for (const path of [FAQ_PATH, `${FAQ_PATH}/`]) {
      expect(redirects.split("\n").filter(line => line.split(/\s+/)[0] === path)).toEqual([
        `${path} ${FAQ_PATH}/index.html 200!`,
      ]);
      expect(digitalMarketingFaqHtml(template, path)).toBe(digitalMarketingFaqHtml(template, FAQ_PATH));
    }
  });
  it("emits only the FAQ HTML asset and never overwrites the shared index", async () => {
    const plugin = digitalMarketingFaqPrerender();
    const hook = plugin.generateBundle;
    const handler = typeof hook === "function" ? hook : hook?.handler;
    if (!handler) throw new Error("Missing generation hook");
    const emitted: { fileName: string; source: string }[] = [];
    const bundle = { "index.html": { type: "asset", source: template } };
    await handler.call({ emitFile: (file: { fileName: string; source: string }) => emitted.push(file) } as never, {} as never, bundle as never, false);
    expect(emitted.map(file => file.fileName)).toEqual(["digital-marketing-faq-sri-lanka/index.html"]);
    expect(emitted[0]?.source).toBe(digitalMarketingFaqHtml(template, FAQ_PATH));
    expect(bundle["index.html"].source).toBe(template);
  });
});