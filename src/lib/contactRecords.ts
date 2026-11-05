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
  channel?: string | null;
  href?: string | null;
  linkedClick?: ContactRecord;
}

// Pair legacy events one-to-one; never collapse independent leads or call clicks.
export function combineWhatsappContactRecords(records: ContactRecord[]): ContactRecord[] {
  const used = new Set<string>();
  const paired = new Map<string, ContactRecord>();
  for (const inquiry of records.filter(r => r.kind === "inquiry" && r.channel === "whatsapp")) {
    if (!inquiry.href) continue;
    const time = Date.parse(inquiry.created_at);
    const click = records.filter(r => r.kind === "whatsapp" && !used.has(r.id) &&
      r.source_path === inquiry.source_path && r.href === inquiry.href && r.label === inquiry.label &&
      Date.parse(r.created_at) >= time && Date.parse(r.created_at) - time <= 10000
    ).sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))[0];
    if (click) { used.add(click.id); paired.set(inquiry.id, click); }
  }
  return records.filter(r => r.kind !== "whatsapp" || !used.has(r.id)).map(r =>
    paired.has(r.id) ? { ...r, linkedClick: paired.get(r.id) } : r);
}

export function whatsappDetails(href: string | null) {
  try {
    const url = new URL(href || "");
    return { phone: url.hostname === "wa.me" ? url.pathname.slice(1) : url.searchParams.get("phone"), message: url.searchParams.get("text") };
  } catch { return { phone: null, message: null }; }
}