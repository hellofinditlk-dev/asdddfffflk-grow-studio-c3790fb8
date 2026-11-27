import type { Plugin } from "vite";
import { SERVICES_HUB_PATH } from "../src/data/digitalMarketingServices";
import { digitalMarketingServicesHtml } from "./digital-marketing-services-html";

export function digitalMarketingServicesPrerender(): Plugin {
  return {
    name: "digital-marketing-services-only-prerender",
    enforce: "post",
    transformIndexHtml: { order: "post", handler: (html, context) => digitalMarketingServicesHtml(html, context.originalUrl ?? context.path) },
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
        const index = bundle["index.html"];
        if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing compiled index.html for services hub generation");
        this.emitFile({ type: "asset", fileName: `${SERVICES_HUB_PATH.slice(1)}/index.html`, source: digitalMarketingServicesHtml(index.source, SERVICES_HUB_PATH) });
      },
    },
  };
}