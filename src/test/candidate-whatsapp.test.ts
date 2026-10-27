import { describe, expect, it } from "vitest";
import { getCandidateCvWhatsappUrl } from "@/lib/candidate-whatsapp";

describe("candidate WhatsApp recipients", () => {
  it.each(["0771234567", "771234567", "+94 77 123 4567", "0094771234567", "**0771234567"])(
    "routes %s to the candidate's Sri Lankan number",
    (phone) => {
      const link = getCandidateCvWhatsappUrl(phone, "Candidate", "Telesales");
      expect(link && new URL(link).pathname).toBe("/94771234567");
    },
  );

  it("preserves an international candidate number", () => {
    const link = getCandidateCvWhatsappUrl("+44 7700 900123", "Candidate", "Designer");
    expect(link && new URL(link).pathname).toBe("/447700900123");
  });

  it.each(["", "123", "not provided", "0000000000"])("rejects an unusable number %s", (phone) => {
    expect(getCandidateCvWhatsappUrl(phone, "Candidate", "Designer")).toBeNull();
  });
});