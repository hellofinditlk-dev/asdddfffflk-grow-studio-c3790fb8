import { supabase } from "@/integrations/supabase/client";

export async function loadContactRecords(table: "inquiries" | "call_clicks" | "cta_clicks") {
  const records = [];
  for (let offset = 0; ; offset += 500) {
    const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false }).order("id").range(offset, offset + 499);
    if (error) return { data: null, error };
    records.push(...(data ?? []));
    if (!data || data.length < 500) return { data: records, error: null };
  }
}

export interface ContactRecord {
  id: string;
  kind: "inquiry" | "whatsapp" | "call";
  created_at: string;
  source_path: string | null;
  label: string;
  phone: string | null;
  message: string | null;
  name?: string;
  email?: string | null;
  referrer?: string | null;
  placement?: string | null;
}

export function whatsappDetails(href: string | null) {
  try {
    const url = new URL(href || "");
    return { phone: url.hostname === "wa.me" ? url.pathname.slice(1) : url.searchParams.get("phone"), message: url.searchParams.get("text") };
  } catch { return { phone: null, message: null }; }
}