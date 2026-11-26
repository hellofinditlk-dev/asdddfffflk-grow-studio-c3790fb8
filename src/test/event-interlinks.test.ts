import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
const read = (f: string) => readFileSync(`src/pages/${f}.tsx`, "utf8");
describe("event interlinking", () => {
  it("hub links to the planning guide", () => expect(read("EventManagement")).toContain('to="/event-planning-sri-lanka"'));
  it("guide links to the hub", () => expect(read("EventPlanningSriLanka")).toContain('to="/event-management-sri-lanka"'));
  it.each(["EventMarketing", "WeddingPlanning"])("%s sends 'event planning' anchor to the guide", (f) =>
    expect(read(f)).toMatch(/to="\/event-planning-sri-lanka"[^>]*>event planning in Sri Lanka</));
});
