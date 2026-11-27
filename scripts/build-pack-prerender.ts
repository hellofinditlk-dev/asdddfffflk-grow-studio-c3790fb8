import type { Plugin } from "vite";
import { buildPackPages } from "../src/data/buildPackPages";
import { buildPackHtml } from "./build-pack-html";

export function buildPackPrerender(): Plugin {
  return {
    name: "remaining-build-pack-only-prerender",
    enforce: "post",
    transformIndexHtml: { order: "post", handler: (html, context) => buildPackHtml(html, context.originalUrl ?? context.path) },
    generateBundle: { order: "post", handler(_options, bundle) {
      if (buildPackPages.length > 8) throw new Error("Remaining build-pack page limit exceeded");
      const index = bundle["index.html"];
      if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing compiled HTML for build-pack pages");
      for (const page of buildPackPages) this.emitFile({ type: "asset", fileName: `${page.path.slice(1)}/index.html`, source: buildPackHtml(index.source, page.path) });
    } },
  };
}