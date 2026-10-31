import { describe, expect, it } from "vitest";
import { whatsappContactSchema, requestWhatsappContact, type WhatsappRequest } from "@/lib/whatsappContact";
describe("required WhatsApp contact details", () => {
  const contact = { name: "Test Customer", email: "customer@example.com", phone: "076 031 7477" };
  it("requires a name", () => expect(whatsappContactSchema.safeParse({ ...contact, name: "" }).success).toBe(false));
  it("requires an email address", () => expect(whatsappContactSchema.safeParse({ ...contact, email: "invalid" }).success).toBe(false));
  it("requires a valid phone number", () => expect(whatsappContactSchema.safeParse({ ...contact, phone: "not a number" }).success).toBe(false));
  it("accepts and trims valid details", () => expect(whatsappContactSchema.parse({ ...contact, name: " Test Customer " }).name).toBe("Test Customer"));
  it("waits for contact capture rather than navigating immediately", async () => {
    let request: WhatsappRequest | undefined;
    const listener = (event: Event) => { request = (event as CustomEvent<WhatsappRequest>).detail; };
    window.addEventListener("whatsapp-contact-request", listener);
    const pending = requestWhatsappContact("https://wa.me/94760317477", "Estimate", "Calculator");
    expect(request?.href).toBe("https://wa.me/94760317477");
    request?.resolve(false);
    expect(await pending).toBe(false);
    window.removeEventListener("whatsapp-contact-request", listener);
  });
});