import { z } from "zod";

export const whatsappContactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d\s().-]+$/, "Enter a valid phone number").refine(v => v.replace(/\D/g, "").length >= 7, "Enter a valid phone number"),
});
export interface WhatsappRequest { href: string; label: string; placement: string; resolve: (saved: boolean) => void }
export function requestWhatsappContact(href: string, label: string, placement: string) {
  return new Promise<boolean>(resolve => window.dispatchEvent(new CustomEvent<WhatsappRequest>("whatsapp-contact-request", { detail: { href, label, placement, resolve } })));
}