import type { Plugin } from "vite";
import { FAQ_PATH } from "../src/lib/digitalMarketingFaqSeo";
import { digitalMarketingFaqHtml } from "./digital-marketing-faq-html";

export function digitalMarketingFaqPrerender(): Plugin {
  return {
    name: "digital-marketing-faq-only-prerender",
    enforce: "post",
    transformIndexHtml: { order: "post", handler(html, context) {
      return digitalMarketingFaqHtml(html, context.originalUrl ?? context.path);
    } },
    generateBundle: { order: "post", handler(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset" || typeof index.source !== "string") {
        throw new Error("Missing compiled index.html for FAQ generation");
      }
      this.emitFile({ type: "asset", fileName: `${FAQ_PATH.slice(1)}/index.html`, source: digitalMarketingFaqHtml(index.source, FAQ_PATH) });
    } },
  };
}