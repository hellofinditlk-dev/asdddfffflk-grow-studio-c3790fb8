import { toast } from "sonner";
import { trackCtaClick } from "@/lib/trackCtaClick";
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