import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";
import { productPhotographyHtml } from "../../scripts/product-photography-html";
import {
  PRODUCT_PHOTOGRAPHY_CANONICAL,
  PRODUCT_PHOTOGRAPHY_PATH,
  productPhotographyCopy,
  productPhotographyFaqs,
  productPhotographySchema,
  productPhotographyServices,
} from "../data/productPhotography";
import { buildProductPhotographyMessage } from "../lib/productPhotographyInquiry";

const template = readFileSync("index.html", "utf8");

describe("Product Photography Sri Lanka", () => {
  it("ships the full supplied content, FAQs, schema and links without JavaScript", () => {
    const doc = new JSDOM(productPhotographyHtml(template, PRODUCT_PHOTOGRAPHY_PATH)).window.document;
    expect(doc.querySelectorAll("h1")).toHaveLength(1);
    expect(doc.querySelector("h1")?.textContent).toBe("Product Photography in Sri Lanka");
    for (const paragraph of productPhotographyCopy.heroParagraphs) expect(doc.body.textContent).toContain(paragraph);
    expect(doc.body.textContent).toContain("5 working days");
    expect(doc.body.textContent).toContain("portable product setup");
    expect(doc.body.textContent).toContain("hired studio space in Colombo");
    expect(doc.querySelectorAll("article h3")).toHaveLength(productPhotographyServices.length);
    expect(doc.querySelectorAll("#frequently-asked-questions details")).toHaveLength(productPhotographyFaqs.length);
    expect(doc.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(PRODUCT_PHOTOGRAPHY_CANONICAL);
    expect(JSON.parse(doc.querySelector("script[data-product-photography-schema]")?.textContent ?? "null")).toEqual(productPhotographySchema());
    for (const path of ["/reel-creation-sri-lanka", "/instagram-ads-sri-lanka", "/facebook-ads-sri-lanka", "/google-shopping-ads-sri-lanka", "/social-media-management-sri-lanka", "/our-work"]) {
      expect(doc.querySelector(`a[href="${path}"]`)).not.toBeNull();
    }
    expect(doc.querySelectorAll("main[data-product-photography-initial] img")).toHaveLength(0);
    expect(doc.body.textContent).not.toContain("[X working days]");
    expect(doc.body.textContent).not.toContain("Note for your team");
  });

  it("includes every requested quote field", () => {
    const doc = new JSDOM(productPhotographyHtml(template, PRODUCT_PHOTOGRAPHY_PATH)).window.document;
    for (const name of ["name", "brand", "email", "phone", "numberOfProducts", "shootType", "socialMediaInterest", "message"]) {
      expect(doc.querySelector(`[name="${name}"]`)).not.toBeNull();
    }
  });

  it("leaves every other route unchanged and rewrites both URL forms", () => {
    for (const path of ["/", "/social-media-management-sri-lanka", "/our-work"]) expect(productPhotographyHtml(template, path)).toBe(template);
    expect(productPhotographyHtml(template, `${PRODUCT_PHOTOGRAPHY_PATH}/`)).toBe(productPhotographyHtml(template, PRODUCT_PHOTOGRAPHY_PATH));
    const redirects = readFileSync("public/_redirects", "utf8");
    expect(redirects).toContain("/product-photography-sri-lanka/ /product-photography-sri-lanka/index.html 200!");
  });

  it("carries all shoot details into the saved and WhatsApp enquiry message", () => {
    const message = buildProductPhotographyMessage({
      name: "Amaya",
      brand: "Ceylon Skin",
      email: "amaya@example.com",
      phone: "0701234567",
      numberOfProducts: "12",
      shootType: "Lifestyle",
      socialMediaInterest: "Yes",
      message: "Photos for Daraz and Instagram",
    });
    for (const value of ["Amaya", "Ceylon Skin", "amaya@example.com", "0701234567", "12", "Lifestyle", "Yes", "Photos for Daraz and Instagram", "Product Photography"]) {
      expect(message).toContain(value);
    }
  });
});
