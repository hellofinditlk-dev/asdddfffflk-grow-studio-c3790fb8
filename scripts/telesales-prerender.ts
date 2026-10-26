import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Plugin } from "vite";
import { telesalesHtml, telesalesPath } from "../src/lib/telesales-seo";

export function telesalesPrerender(): Plugin {
  let root = process.cwd();
  const content = () => readFileSync(resolve(root, "src/content/telesales-executive-jobs-sri-lanka.md"), "utf8");
  return {
    name: "telesales-only-prerender", enforce: "post",
    configResolved(config) { root = config.root; },
    transformIndexHtml: { order: "post", handler(html, context) {
      const path = (context.originalUrl ?? context.path).split("?")[0].replace(/\/$/, "");
      return path === telesalesPath ? telesalesHtml(html, content()) : html;
    } },
    generateBundle: { order: "post", handler(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing index for telesales page");
      this.emitFile({ type: "asset", fileName: `${telesalesPath.slice(1)}/index.html`, source: telesalesHtml(index.source, content()) });
    } },
  };
}