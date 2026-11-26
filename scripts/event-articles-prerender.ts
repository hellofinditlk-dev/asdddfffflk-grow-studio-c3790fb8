import type { Plugin } from "vite";
import { eventArticles } from "../src/data/eventArticles";
import { eventArticlesHtml } from "./event-articles-html";

export function eventArticlesPrerender(): Plugin {
  return {
    name: "event-articles-only-prerender",
    enforce: "post",
    transformIndexHtml: { order: "post", handler(html, context) {
      return eventArticlesHtml(html, context.originalUrl ?? context.path);
    } },
    generateBundle: { order: "post", handler(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing compiled index.html for event article generation");
      for (const a of eventArticles) this.emitFile({ type: "asset", fileName: `blog/${a.slug}/index.html`, source: eventArticlesHtml(index.source, `/blog/${a.slug}`) });
    } },
  };
}
