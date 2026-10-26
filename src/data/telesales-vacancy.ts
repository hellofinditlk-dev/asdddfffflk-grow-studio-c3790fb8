export const telesalesVacancy = {
  slug: "telesales-executive-jobs-sri-lanka",
  title: "Telesales Executive",
  shortTitle: "Telesales Executive",
  h1: "Telesales Executive Jobs in Sri Lanka: Sell Digital Marketing, Earn Commission, Grow Fast",
  metaTitle: "Telesales Executive Jobs Sri Lanka | Cypher Digital Careers",
  metaDescription: "Apply for a Telesales Executive job at Cypher Digital. Sell digital marketing to warm leads, full-time or part-time, from Colombo or home in Sri Lanka.",
  type: "Full-time or part-time · Commission-based",
  employmentType: ["FULL_TIME", "PART_TIME"],
  location: "Colombo office or work from home, anywhere in Sri Lanka",
  summary: "Cypher Digital is hiring Telesales Executives in Sri Lanka to sell digital marketing services by phone, WhatsApp and video call. Full-time and part-time options are available, from the Colombo office or fully from home in Sri Lanka. Training, scripts and warm leads are supplied. Earnings are commission-based; exact rates and payment arrangements are confirmed in a written offer.",
  duties: ["Call warm leads and understand each business's needs", "Recommend digital marketing services and explain the agreed scope", "Share proposals and follow up", "Close sales and record payments under the agency process", "Keep accurate CRM records and hand new clients to the account team"],
  requirements: ["Age 18 or older", "Clear speaking in Sinhala, Tamil or English", "Basic smartphone and computer skills", "Reliable phone, internet and a quiet workspace for remote work", "Sales experience welcome but not required"],
  perks: ["Training and ready-made scripts", "Warm leads supplied", "No registration fee, training fee or deposit"],
  whatsappMessage: "Hi Cypher Digital, I'd like to apply for the Telesales Executive role.\n\nName: \nDistrict: \nLanguages: \nFull-time or part-time: \nSales or calling experience: ",
  whatsappCta: "Apply",
  datePosted: "2026-10-26",
  lastUpdated: "2026-10-26",
  validThrough: "2027-01-31T23:59:00+05:30",
  monthsExperience: 0,
  educationRequirement: "No mandatory formal qualification; A/L preferred",
};

export function telesalesIsOpen(now = new Date()): boolean {
  return now.getTime() <= new Date(telesalesVacancy.validThrough).getTime();
}