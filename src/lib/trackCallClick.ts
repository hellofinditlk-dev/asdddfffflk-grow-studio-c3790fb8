import { supabase } from "@/integrations/supabase/client";

export async function trackCallClick(phone: string = "+94701772626") {
  try {
    const { error } = await supabase.from("call_clicks").insert({
      phone,
      source_path: typeof window !== "undefined" ? window.location.pathname + window.location.search : null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      referrer: typeof document !== "undefined" ? document.referrer || null : null,
    });
    if (error) {
      console.error("Failed to track call click", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Failed to track call click", err);
    return false;
  }
}