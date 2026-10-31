import { supabase } from "@/integrations/supabase/client";

let recent: { key: string; at: number; promise: Promise<boolean> } | undefined;

export function trackCallClick(phone: string = "+94701772626") {
  if (window.location.pathname.startsWith("/admin")) return Promise.resolve(true);
  const key = `${window.location.pathname}:${phone.replace(/\D/g, "")}`;
  // Capture listener and legacy React handlers share one write for the same click.
  if (recent?.key === key && Date.now() - recent.at < 100) return recent.promise;
  const promise = saveCallClick(phone);
  recent = { key, at: Date.now(), promise };
  return promise;
}

async function saveCallClick(phone: string) {
  try {
    const { error } = await supabase.from("call_clicks").insert({
      phone,
      source_path: typeof window !== "undefined" ? window.location.pathname : null,
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