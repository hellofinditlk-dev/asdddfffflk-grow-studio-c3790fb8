import type { Plugin } from "vite";
import { EVENT_PATH } from "../src/lib/eventManagementSeo";
import { eventManagementHtml } from "./event-management-html";

export function eventManagementPrerender(): Plugin {
  return {
    name: "event-management-only-prerender",
    enforce: "post",
    transformIndexHtml: { order: "post", handler(html, context) {
      return eventManagementHtml(html, context.originalUrl ?? context.path);
    } },
    generateBundle: { order: "post", handler(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing compiled index.html for event page generation");
      this.emitFile({ type: "asset", fileName: `${EVENT_PATH.slice(1)}/index.html`, source: eventManagementHtml(index.source, EVENT_PATH) });
    } },
  };
}