export interface ProductPhotographyInquiry {
  name: string;
  brand: string;
  email: string;
  phone: string;
  numberOfProducts: string;
  shootType: string;
  socialMediaInterest: string;
  message: string;
}

export function buildProductPhotographyMessage(form: ProductPhotographyInquiry) {
  return [
    `Hi, I'm ${form.name.trim()}.`,
    form.brand.trim() ? `Brand / company: ${form.brand.trim()}` : "",
    form.email.trim() ? `Email: ${form.email.trim()}` : "",
    `Phone/WhatsApp: ${form.phone.trim()}`,
    form.numberOfProducts.trim() ? `Number of products: ${form.numberOfProducts.trim()}` : "",
    `Shoot type: ${form.shootType}`,
    `Interested in social media management too? ${form.socialMediaInterest}`,
    form.message.trim() ? `\n${form.message.trim()}` : "",
    "\nI'm interested in Product Photography services.",
  ].filter(Boolean).join("\n");
}
