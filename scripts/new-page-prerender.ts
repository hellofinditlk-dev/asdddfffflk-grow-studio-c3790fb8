import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import { newSeoPages } from "../src/data/new-seo-pages";
import { MAX_PRERENDER_PAGES, newPageHtml } from "./new-page-html";

export function newPagePrerender(): Plugin {
  let root = process.cwd();
  const readMarkdown = (contentFile: string) => readFileSync(resolve(root, contentFile), "utf8");
  return {
    name: "new-pages-only-prerender",
    enforce: "post",
    configResolved(config) { root = config.root; },
    transformIndexHtml: {
      order: "post",
      handler(html, context) {
        const pathname = (context.originalUrl ?? context.path).split("?")[0];
        const page = newSeoPages.find(entry => entry.path === pathname);
        return page ? newPageHtml(html, page.path, readMarkdown(page.contentFile)) : html;
      },
    },
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
        if (newSeoPages.length > MAX_PRERENDER_PAGES) throw new Error("New-page prerender limit exceeded");
        const index = bundle["index.html"];
        if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing compiled index.html for new-page generation");
        for (const page of newSeoPages) {
          this.emitFile({ type: "asset", fileName: `${page.path.slice(1)}/index.html`, source: newPageHtml(index.source, page.path, readMarkdown(page.contentFile)) });
        }
      },
    },
  };
}