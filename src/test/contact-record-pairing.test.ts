import { describe, expect, it } from "vitest";
import { combineWhatsappContactRecords, type ContactRecord } from "@/lib/contactRecords";
const lead: ContactRecord = { id: "lead", kind: "inquiry", channel: "whatsapp", href: "https://wa.me/94760317477?text=Hi", created_at: "2026-11-04T03:19:30.172Z", source_path: "/social-media-ads-support-sri-lanka", label: "Chat on WhatsApp", phone: "0752616379", name: "Visitor", message: "Hi" };
const click: ContactRecord = { ...lead, id: "click", kind: "whatsapp", name: undefined, phone: "94760317477", created_at: "2026-11-04T03:19:30.455Z" };
describe("combined WhatsApp contact ledger", () => {
  it("shows one inquiry with visitor details and linked destination instead of two rows", () => {
    const result = combineWhatsappContactRecords([click, lead]);
    expect(result).toHaveLength(1);
    expect(result[0].phone).toBe("0752616379");
    expect(result[0].linkedClick?.id).toBe("click");
    expect(result[0].linkedClick?.phone).toBe("94760317477");
  });
  it("preserves unmatched clicks, other pages and calls", () => {
    const unrelated = { ...click, id: "other", source_path: "/other" };
    const call: ContactRecord = { ...click, id: "call", kind: "call" };
    expect(combineWhatsappContactRecords([lead, unrelated, call])).toHaveLength(3);
  });
  it("does not combine independent submissions or reuse a click", () => {
    const result = combineWhatsappContactRecords([lead, { ...lead, id: "second" }, click]);
    expect(result).toHaveLength(2);
    expect(result.filter(r => r.linkedClick)).toHaveLength(1);
  });
  it("preserves clicks outside the submission window or with different drafts", () => {
    expect(combineWhatsappContactRecords([lead, { ...click, created_at: "2026-11-04T03:20:30Z" }])).toHaveLength(2);
    expect(combineWhatsappContactRecords([lead, { ...click, href: "https://wa.me/94760317477?text=Other" }])).toHaveLength(2);
  });
});