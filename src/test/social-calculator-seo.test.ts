import { describe, expect, it } from "vitest";
import { socialCalculatorSchema } from "@/lib/socialCalculatorSeo";

describe("calculator business identity", () => {
  it("references the owner's supplied Google listing without inventing location or review data", () => {
    const schema = socialCalculatorSchema("Monthly marketing estimate in LKR");
    expect(schema.provider.sameAs).toEqual(["https://share.google/XT1Ol3n1HNjs9wAyT"]);
    expect(schema.provider.areaServed.name).toBe("Sri Lanka");
    expect(schema.provider).not.toHaveProperty("address");
    expect(schema.provider).not.toHaveProperty("aggregateRating");
  });
});