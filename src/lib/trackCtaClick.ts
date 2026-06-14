import { supabase } from "@/integrations/supabase/client";

export type CtaType = "whatsapp" | "call" | "email" | "form" | "quote" | "other";

export interface TrackCtaClickArgs {
  ctaType: CtaType;
  ctaLabel?: string | null;
  placement?: string | null;
  href?: string | null;
}

export async function trackCtaClick({ ctaType, ctaLabel, placement, href }: TrackCtaClickArgs) {
  try {
    const { error } = await supabase.from("cta_clicks").insert({
      cta_type: ctaType,
      cta_label: ctaLabel ?? null,
      placement: placement ?? null,
      href: href ?? null,
      source_path:
        typeof window !== "undefined" ? window.location.pathname + window.location.search : null,
      referrer: typeof document !== "undefined" ? document.referrer || null : null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
    if (error) {
      console.error("Failed to track CTA click", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Failed to track CTA click", err);
    return false;
  }
}