import { Fragment, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Application {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  position_title: string;
  position_slug: string | null;
  experience: string | null;
  portfolio_link: string | null;
  message: string | null;
  source_path: string | null;
  referrer: string | null;
  created_at: string;
}

const RANGES = [
  { key: "7", label: "Last 7 Days" },
  { key: "30", label: "Last 30 Days" },
  { key: "all", label: "All Time" },
] as const;

export default function AdminApplications() {
  const navigate = useNavigate();
  const [apps, setApps] = useState<Application[] | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [search, setSearch] = useState("");
  const [range, setRange] = useState<string>("30");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sessionData.session.user.id);
      const admin = roles?.some((r: any) => r.role === "admin") ?? false;
      setIsAdmin(admin);
      setAuthChecked(true);
      if (!admin) return;

      const { data, error } = await supabase
        .from("job_applications")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(2000);
      if (error) {
        toast.error("Failed to load applications: " + error.message);
        return;
      }
      setApps((data as Application[]) ?? []);
    };
    init();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const inRange = useMemo(() => {
    if (!apps) return [];
    if (range === "all") return apps;
    const cutoff = Date.now() - Number(range) * 86400000;
    return apps.filter((a) => new Date(a.created_at).getTime() >= cutoff);
  }, [apps, range]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return inRange;
    return inRange.filter((a) =>
      [a.name, a.email, a.phone, a.position_title, a.message, a.experience]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [inRange, search]);

  const byPosition = useMemo(() => {
    const map = new Map<string, { count: number; slug: string | null; last: string }>();
    for (const a of inRange) {
      const cur = map.get(a.position_title) ?? { count: 0, slug: a.position_slug, last: a.created_at };
      cur.count += 1;
      if (new Date(a.created_at) > new Date(cur.last)) cur.last = a.created_at;
      map.set(a.position_title, cur);
    }
    return Array.from(map.entries())
      .map(([position, v]) => ({ position, ...v }))
      .sort((a, b) => b.count - a.count);
  }, [inRange]);

  const sourceLabel = (ref: string | null) => {
    if (!ref) return "Direct";
    const r = ref.toLowerCase();
    if (r.includes("google")) return "Google";
    if (r.includes("chatgpt") || r.includes("openai")) return "ChatGPT";
    if (r.includes("facebook") || r.includes("fb.")) return "Facebook";
    if (r.includes("linkedin")) return "LinkedIn";
    if (r.includes("instagram")) return "Instagram";
    if (r.includes("cypherdigital")) return "Internal";
    try { return new URL(ref).hostname.replace("www.", ""); } catch { return "Other"; }
  };

  const bySource = useMemo(() => {
    const map = new Map<string, number>();
    for (const a of inRange) {
      const k = sourceLabel(a.referrer);
      map.set(k, (map.get(k) ?? 0) + 1);
    }
    return Array.from(map.entries()).map(([source, count]) => ({ source, count })).sort((a, b) => b.count - a.count);
  }, [inRange]);

  const exportCSV = () => {
    if (!filtered.length) return;
    const header = ["Date", "Name", "Position", "Phone", "Email", "Experience", "Portfolio", "Message", "Page", "Source"];
    const rows = filtered.map((a) => [
      new Date(a.created_at).toISOString(),
      a.name,
      a.position_title,
      a.phone,
      a.email ?? "",
      a.experience ?? "",
      a.portfolio_link ?? "",
      a.message ?? "",
      a.source_path ?? "",
      sourceLabel(a.referrer),
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `job-applications-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!authChecked) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-3">Access Denied</h1>
          <p className="text-muted-foreground mb-6">Your account does not have admin access.</p>
          <Button onClick={handleLogout} variant="outline">Sign Out</Button>
        </div>
      </div>
    );
  }

  const today = inRange.filter((a) => {
    const d = new Date(a.created_at);
    const n = new Date();
    return d.toDateString() === n.toDateString();
  }).length;

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Job Applications</h1>
          <p className="text-muted-foreground text-sm mt-1">Every candidate who applied through the careers pages</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/admin/inquiries"><Button variant="outline" size="sm">Dashboard</Button></Link>
          <Link to="/admin/call-clicks"><Button variant="outline" size="sm">Call Log</Button></Link>
          <Link to="/admin/leads"><Button variant="outline" size="sm">AI Visibility</Button></Link>
          <Button variant="outline" size="sm" onClick={exportCSV} disabled={!filtered.length}>Export CSV</Button>
          <Button variant="outline" size="sm" onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {RANGES.map((r) => (
          <Button key={r.key} size="sm" variant={range === r.key ? "default" : "outline"} onClick={() => setRange(r.key)}>
            {r.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="border border-border rounded-xl p-4 bg-card">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Applications</p>
          <p className="text-2xl font-bold mt-1">{inRange.length}</p>
        </div>
        <div className="border border-border rounded-xl p-4 bg-card">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Today</p>
          <p className="text-2xl font-bold mt-1">{today}</p>
        </div>
        <div className="border border-border rounded-xl p-4 bg-card">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Positions Applied</p>
          <p className="text-2xl font-bold mt-1">{byPosition.length}</p>
        </div>
        <div className="border border-border rounded-xl p-4 bg-card">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Top Position</p>
          <p className="text-sm font-semibold mt-2">{byPosition[0]?.position ?? "—"}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="border border-border rounded-xl bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-muted/30">
            <h2 className="font-semibold">Applications by Position</h2>
            <p className="text-xs text-muted-foreground mt-1">Which vacancies attract the most candidates</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/20">
                <tr className="text-left">
                  <th className="px-4 py-2 font-semibold">Position</th>
                  <th className="px-4 py-2 font-semibold">Applications</th>
                  <th className="px-4 py-2 font-semibold">Latest</th>
                </tr>
              </thead>
              <tbody>
                {byPosition.length === 0 ? (
                  <tr><td colSpan={3} className="px-4 py-6 text-muted-foreground">No applications yet.</td></tr>
                ) : byPosition.map((p) => (
                  <tr key={p.position} className="border-t border-border">
                    <td className="px-4 py-2">
                      {p.slug ? (
                        <a href={`/careers/${p.slug}`} target="_blank" rel="noreferrer" className="text-primary hover:underline">{p.position}</a>
                      ) : p.position}
                    </td>
                    <td className="px-4 py-2 font-semibold">{p.count}</td>
                    <td className="px-4 py-2 text-xs text-muted-foreground">{new Date(p.last).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-border rounded-xl bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-muted/30">
            <h2 className="font-semibold">Where Candidates Came From</h2>
            <p className="text-xs text-muted-foreground mt-1">Referral source of each application</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/20">
                <tr className="text-left">
                  <th className="px-4 py-2 font-semibold">Source</th>
                  <th className="px-4 py-2 font-semibold">Applications</th>
                </tr>
              </thead>
              <tbody>
                {bySource.length === 0 ? (
                  <tr><td colSpan={2} className="px-4 py-6 text-muted-foreground">No data yet.</td></tr>
                ) : bySource.map((s) => (
                  <tr key={s.source} className="border-t border-border">
                    <td className="px-4 py-2">{s.source}</td>
                    <td className="px-4 py-2 font-semibold">{s.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mb-4 max-w-sm">
        <Input placeholder="Search name, position, phone, email..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {!apps ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Position</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Experience</th>
                  <th className="px-4 py-3 font-semibold">Portfolio</th>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={9} className="px-4 py-10 text-center text-muted-foreground">No applications found.</td></tr>
                ) : filtered.map((a) => (
                  <Fragment key={a.id}>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 whitespace-nowrap">{new Date(a.created_at).toLocaleString()}</td>
                      <td className="px-4 py-3 font-medium">{a.name}</td>
                      <td className="px-4 py-3">{a.position_title}</td>
                      <td className="px-4 py-3"><a href={`tel:${a.phone}`} className="text-primary hover:underline">{a.phone}</a></td>
                      <td className="px-4 py-3">{a.email ? <a href={`mailto:${a.email}`} className="text-primary hover:underline">{a.email}</a> : "—"}</td>
                      <td className="px-4 py-3">{a.experience || "—"}</td>
                      <td className="px-4 py-3 max-w-[180px] truncate">
                        {a.portfolio_link ? (
                          <a href={a.portfolio_link.startsWith("http") ? a.portfolio_link : `https://${a.portfolio_link}`} target="_blank" rel="noreferrer" className="text-primary hover:underline">Open</a>
                        ) : "—"}
                      </td>
                      <td className="px-4 py-3 text-xs">{sourceLabel(a.referrer)}</td>
                      <td className="px-4 py-3">
                        <button className="text-primary hover:underline" onClick={() => setExpanded(expanded === a.id ? null : a.id)}>
                          {expanded === a.id ? "Hide" : "View"}
                        </button>
                      </td>
                    </tr>
                    {expanded === a.id && (
                      <tr className="border-t border-border bg-muted/30">
                        <td colSpan={9} className="px-4 py-4 text-sm space-y-2">
                          <p><span className="text-muted-foreground">Message:</span> {a.message || "—"}</p>
                          <p className="font-mono text-xs"><span className="text-muted-foreground">Applied from:</span> {a.source_path || "—"}</p>
                          <p className="font-mono text-xs break-all"><span className="text-muted-foreground">Referrer:</span> {a.referrer || "Direct"}</p>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
