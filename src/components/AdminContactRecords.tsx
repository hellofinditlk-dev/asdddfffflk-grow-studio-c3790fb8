import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cleanPath } from "@/lib/serviceFromPath";
import type { ContactRecord } from "@/lib/contactRecords";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AdminContactRecords({ records }: { records: ContactRecord[] }) {
  const [kind, setKind] = useState("all");
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("all");
  const [page, setPage] = useState(0);
  const sources = useMemo(() => Array.from(new Set(records.map(r => cleanPath(r.source_path)))).sort(), [records]);
  const filtered = useMemo(() => records.filter(r =>
    (kind === "all" || r.kind === kind) && (source === "all" || cleanPath(r.source_path) === source) &&
    [r.name, r.email, r.phone, r.label, r.message, r.source_path, r.placement].join(" ").toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => b.created_at.localeCompare(a.created_at)), [records, kind, source, search]);
  const current = Math.min(page, Math.max(0, Math.ceil(filtered.length / 25) - 1));
  return <section className="mb-8 scroll-mt-28" aria-label="Contact records">
    <h2 className="text-xl font-semibold">All contact records</h2>
    <p className="text-sm text-muted-foreground mt-1 mb-4">WhatsApp and call clicks show contact intent, not sent messages or completed calls. Destination numbers are agency numbers; visitor details appear only when submitted.</p>
    <div className="flex flex-wrap gap-3 mb-4">
      <Tabs value={kind} onValueChange={v => { setKind(v); setPage(0); }}><TabsList className="h-auto flex-wrap">
        <TabsTrigger value="all">All records</TabsTrigger><TabsTrigger value="inquiry">Inquiries</TabsTrigger>
        <TabsTrigger value="whatsapp">WhatsApp clicks</TabsTrigger><TabsTrigger value="call">Call clicks</TabsTrigger>
      </TabsList></Tabs>
      <Input aria-label="Search contact records" placeholder="Search name, phone, page or message" className="max-w-sm" value={search} onChange={e => { setSearch(e.target.value); setPage(0); }} />
      <Select value={source} onValueChange={v => { setSource(v); setPage(0); }}><SelectTrigger className="w-full sm:w-72" aria-label="Filter source page"><SelectValue placeholder="Source page" /></SelectTrigger><SelectContent>
        <SelectItem value="all">All source pages</SelectItem>{sources.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
      </SelectContent></Select>
    </div>
    <div className="overflow-x-auto border-y border-border"><table className="w-full text-sm">
      <thead className="bg-muted text-left"><tr>{["Date / time", "Record", "Contact / destination", "Source page", "Details"].map(h => <th key={h} className="px-3 py-3">{h}</th>)}</tr></thead>
      <tbody>{filtered.slice(current * 25, (current + 1) * 25).map(r => <tr key={`${r.kind}:${r.id}`} className="border-t border-border">
        <td className="px-3 py-3 whitespace-nowrap">{new Date(r.created_at).toLocaleString("en-GB", { timeZone: "Asia/Colombo" })}<span className="block text-xs text-muted-foreground">Sri Lanka time</span></td>
        <td className="px-3 py-3">{r.kind === "inquiry" ? "Inquiry submitted" : r.kind === "call" ? "Call clicked" : "WhatsApp clicked"}<span className="block text-muted-foreground">{r.label}</span></td>
        <td className="px-3 py-3">{r.name || (r.kind === "inquiry" ? "—" : "Agency destination")}<span className="block">{r.phone || "Not available"}</span>{r.email && <span className="block">{r.email}</span>}</td>
        <td className="px-3 py-3"><Link to={cleanPath(r.source_path)} target="_blank" rel="noopener noreferrer" className="text-primary break-all hover:underline">{r.source_path ? cleanPath(r.source_path) : "Unknown"}</Link></td>
        <td className="px-3 py-3 min-w-48"><details><summary className="cursor-pointer text-primary">View details</summary><div className="max-w-md break-words space-y-2 pt-2">
          {r.placement && <p>Placement: {r.placement}</p>}<p className="whitespace-pre-wrap">{r.message || "No message supplied"}</p>{r.referrer && <p>Referrer: {r.referrer}</p>}<p className="text-xs text-muted-foreground">Record ID: {r.id}</p>
        </div></details></td>
      </tr>)}</tbody>
    </table>{filtered.length === 0 && <p className="py-8 text-center text-muted-foreground">No matching contact records.</p>}</div>
    <div className="flex items-center justify-between gap-3 mt-3"><p className="text-sm text-muted-foreground">{filtered.length} records · Page {current + 1} of {Math.max(1, Math.ceil(filtered.length / 25))}</p><div className="flex gap-2">
      <Button variant="outline" size="icon" aria-label="Previous records" disabled={current === 0} onClick={() => setPage(current - 1)}><ChevronLeft className="h-4 w-4" /></Button>
      <Button variant="outline" size="icon" aria-label="Next records" disabled={(current + 1) * 25 >= filtered.length} onClick={() => setPage(current + 1)}><ChevronRight className="h-4 w-4" /></Button>
    </div></div>
  </section>;
}