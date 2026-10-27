/** Candidate contact links are independent of the agency's public CTA numbers. */
export function getCandidateCvWhatsappUrl(phone: string, name: string, position: string): string | null {
  if (/[a-z]/i.test(phone)) return null;
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (/^07\d{8}$/.test(digits)) digits = `94${digits.slice(1)}`;
  else if (/^7\d{8}$/.test(digits)) digits = `94${digits}`;
  if (!/^[1-9]\d{9,14}$/.test(digits)) return null;

  const message = `Hi ${name.trim()}, this is Cypher Digital. Thank you for applying for the ${position.trim()} position. Could you please send your latest CV here on WhatsApp? Thank you.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}