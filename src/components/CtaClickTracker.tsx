import { useEffect } from "react";
import { trackCtaClick, type CtaType } from "@/lib/trackCtaClick";

/**
 * Global delegated click listener that records clicks on WhatsApp, tel:,
 * and mailto: links anywhere in the app. Uses event delegation so we don't
 * have to instrument every individual CTA across hundreds of pages.
 */
const CtaClickTracker = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!href) return;

      let ctaType: CtaType | null = null;
      if (/wa\.me|api\.whatsapp\.com|wa\.link/i.test(href)) ctaType = "whatsapp";
      else if (href.startsWith("mailto:")) ctaType = "email";
      if (!ctaType) return;
      // Note: tel: links are tracked separately via call_clicks (trackCallClick)
      // to avoid double-counting in the Today's Inquiries dashboard.
      const label = (anchor.getAttribute("aria-label") || anchor.innerText || "").trim().slice(0, 120);
      const placement =
        anchor.dataset.ctaPlacement ||
        anchor.closest("[data-cta-placement]")?.getAttribute("data-cta-placement") ||
        null;

      trackCtaClick({ ctaType, ctaLabel: label || null, placement, href });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true } as any);
  }, []);

  return null;
};

export default CtaClickTracker;