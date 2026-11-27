import type { BuildPackPage } from "@/data/buildPackPages";

export interface BuildPackInquiry {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  details: Record<string, string | string[]>;
}

export function buildPackDetails(page: BuildPackPage, details: BuildPackInquiry["details"]) {
  const result: Record<string, string | string[]> = {};
  for (const field of page.fields) {
    const value = details[field.key];
    if (field.type === "multi") {
      result[field.key] = (field.options ?? []).filter(option => Array.isArray(value) && value.includes(option));
    } else if (field.type === "select") {
      result[field.key] = typeof value === "string" && field.options?.includes(value) ? value : "";
    } else result[field.key] = typeof value === "string" ? value.trim() : "";
  }
  return result;
}

export function buildPackInquiryMessage(page: BuildPackPage, form: BuildPackInquiry) {
  const details = buildPackDetails(page, form.details);
  return [
    `Hi, I'm ${form.name.trim()}. I'm interested in ${page.service}.`,
    form.company.trim() ? `${page.companyLabel}: ${form.company.trim()}` : "",
    form.email.trim() ? `Email: ${form.email.trim()}` : "",
    `Phone/WhatsApp: ${form.phone.trim()}`,
    ...page.fields.map(field => {
      const value = details[field.key];
      const text = Array.isArray(value) ? value.join(", ") : value;
      return text ? `${field.label}: ${text}` : "";
    }),
    form.message.trim() ? `Message: ${form.message.trim()}` : "",
  ].filter(Boolean).join("\n");
}