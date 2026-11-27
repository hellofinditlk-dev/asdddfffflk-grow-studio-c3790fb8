import type { Plugin } from "vite";
import { PRODUCT_PHOTOGRAPHY_PATH } from "../src/data/productPhotography";
import { productPhotographyHtml } from "./product-photography-html";

export function productPhotographyPrerender(): Plugin {
  return {
    name: "product-photography-only-prerender",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html, context) {
        return productPhotographyHtml(html, context.originalUrl ?? context.path);
      },
    },
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
        const index = bundle["index.html"];
        if (!index || index.type !== "asset" || typeof index.source !== "string") throw new Error("Missing compiled index.html for product photography generation");
        this.emitFile({
          type: "asset",
          fileName: `${PRODUCT_PHOTOGRAPHY_PATH.slice(1)}/index.html`,
          source: productPhotographyHtml(index.source, PRODUCT_PHOTOGRAPHY_PATH),
        });
      },
    },
  };
}
