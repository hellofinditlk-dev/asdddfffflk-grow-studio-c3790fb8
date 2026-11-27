import { marketingServiceOptions } from "@/data/digitalMarketingServices";

export interface MarketingPlanInquiry {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

export function selectedMarketingServices(values: string[]): string[] {
  return marketingServiceOptions.filter(option => values.includes(option));
}

export function buildMarketingPlanMessage(form: MarketingPlanInquiry): string {
  return [
    `Hi, I'm ${form.name.trim()}. I'd like a free marketing plan.`,
    form.company.trim() ? `Company: ${form.company.trim()}` : "",
    form.email.trim() ? `Email: ${form.email.trim()}` : "",
    `Phone/WhatsApp: ${form.phone.trim()}`,
    selectedMarketingServices(form.services).length ? `Services interested in: ${selectedMarketingServices(form.services).join(", ")}` : "",
    form.message.trim() ? `Message: ${form.message.trim()}` : "",
  ].filter(Boolean).join("\n");
}