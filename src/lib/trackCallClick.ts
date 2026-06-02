import { supabase } from "@/integrations/supabase/client";

export function trackCallClick(phone: string = "+94701772626") {
  try {
    void supabase.from("call_clicks").insert({
      phone,
      source_path: typeof window !== "undefined" ? window.location.pathname + window.location.search : null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      referrer: typeof document !== "undefined" ? document.referrer || null : null,
    });
  } catch (err) {
    console.error("Failed to track call click", err);
  }
}