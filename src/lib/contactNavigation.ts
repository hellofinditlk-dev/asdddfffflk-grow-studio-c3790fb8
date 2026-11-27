import { toast } from "sonner";
import { requestWhatsappContact } from "@/lib/whatsappContact";

/** Open only after the record is accepted; retain a same-tab fallback for popup blockers. */
export async function recordBeforeOpening(record: () => Promise<boolean>, href: string, newTab = false) {
  const tab = newTab ? window.open("about:blank", "_blank") : null;
  if (tab) tab.opener = null;
  let saved = false;
  try { saved = await record(); } catch { saved = false; }
  if (!saved) {
    tab?.close();
    toast.error("Could not save your contact request. Please try again.");
    return false;
  }
  if (tab && !tab.closed) tab.location.href = href;
  else window.location.assign(href);
  return true;
}

export function openTrackedWhatsapp(href: string, label: string, placement: string) {
  return requestWhatsappContact(href, label, placement);
}
/** For forms that already saved the inquiry: record the click and open WhatsApp directly, without the contact dialog. */
export async function openWhatsappAfterSavedForm(href: string, label: string, placement: string) {
  const { trackCtaClick } = await import("@/lib/trackCtaClick");
  return recordBeforeOpening(async () => {
    await trackCtaClick({ ctaType: "whatsapp", ctaLabel: label, placement, href });
    return true;
  }, href);
}
