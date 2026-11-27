import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { RELATED_NEW_SERVICES, NEW_SERVICE_PAGES } from "@/data/newServiceLinks";

const app = readFileSync("src/App.tsx", "utf8");
const hasRoute = (p: string) => app.includes(`path="${p}"`);

describe("new service links", () => {
  it("every source and destination is a real route", () => {
    for (const [src, links] of Object.entries(RELATED_NEW_SERVICES)) {
      expect(hasRoute(src), src).toBe(true);
      for (const l of links) expect(hasRoute(l.path), l.path).toBe(true);
    }
  });
  it("each of the nine new pages gets at least one incoming link", () => {
    const targets = new Set(Object.values(RELATED_NEW_SERVICES).flat().map((l) => l.path));
    for (const p of Object.values(NEW_SERVICE_PAGES)) expect(targets.has(p.path), p.path).toBe(true);
  });
});
