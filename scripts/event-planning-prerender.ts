import type { Plugin } from "vite";
import { PLANNING_PATH } from "../src/data/eventPlanningGuide";
import { eventPlanningHtml } from "./event-planning-html";

export function eventPlanningPrerender(): Plugin {
  return {
    name: "event-planning-only-prerender",
    enforce: "post",
    transformIndexHtml: { order: "post", handler(html, context) {
      return eventPlanningHtml(html, context.originalUrl ?? context.path);
    } },
    generateBundle: { order: "post", handler(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing compiled index.html for planning guide generation");
      this.emitFile({ type: "asset", fileName: `${PLANNING_PATH.slice(1)}/index.html`, source: eventPlanningHtml(index.source, PLANNING_PATH) });
    } },
  };
}