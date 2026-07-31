import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string | null;
  result: any;
  created_at: string;
  source_page: string | null;
  utm_source: string | null;
}

export default function AdminLeads() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const userId = sessionData.session.user.id;
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId);
      const admin = roles?.some((r: any) => r.role === "admin") ?? false;
      setIsAdmin(admin);
      setAuthChecked(true);
      if (!admin) return;

      const { data, error } = await supabase
        .from("ai_visibility_leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        toast.error("Failed to load leads: " + error.message);
        return;
      }
      setLeads((data as Lead[]) ?? []);
    };
    init();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const exportCSV = () => {
    if (!leads || leads.length === 0) return;
    const header = ["Date", "Name", "Email", "Phone", "Company", "Website", "Industry", "Score", "Source Page", "UTM Source"];
    const rows = leads.map((l) => [
      new Date(l.created_at).toISOString(),
      l.name,
      l.email,
      l.phone,
      l.company,
      l.website,
      l.industry ?? "",
      l.result?.overall_score ?? "",
      l.source_page ?? "",
      l.utm_source ?? "",
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-visibility-leads-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const totalAudits = leads?.length ?? 0;
  const auditsToday = leads?.filter((l) => new Date(l.created_at) >= startOfToday).length ?? 0;
  const auditsThisMonth = leads?.filter((l) => new Date(l.created_at) >= startOfMonth).length ?? 0;

  const leadsByPage = (() => {
    if (!leads) return [] as { page: string; count: number; avg: number }[];
    const map = new Map<string, { count: number; sum: number; scored: number }>();
    for (const l of leads) {
      const key = (l.source_page || "(unknown)").split("?")[0] || "(unknown)";
      const score = Number(l.result?.overall_score ?? l.result?.overallScore ?? 0);
      const cur = map.get(key) ?? { count: 0, sum: 0, scored: 0 };
      cur.count += 1;
      if (score > 0) { cur.sum += score; cur.scored += 1; }
      map.set(key, cur);
    }
    return Array.from(map.entries())
      .map(([page, v]) => ({ page, count: v.count, avg: v.scored ? Math.round(v.sum / v.scored) : 0 }))
      .sort((a, b) => b.count - a.count);
  })();

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
          <p className="text-muted-foreground mb-6">
            Your account does not have admin access. Contact the site owner to be granted the admin role.
          </p>
          <Button onClick={handleLogout} variant="outline">Sign Out</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">AI Visibility Leads</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {leads?.length ?? 0} total submission{leads?.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/inquiries">
            <Button variant="outline">Website Inquiries</Button>
          </Link>
          <Link to="/admin/applications">
            <Button variant="outline">Applications</Button>
          </Link>
          <Button variant="outline" onClick={exportCSV} disabled={!leads?.length}>
            Export CSV
          </Button>
          <Button variant="outline" onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>

      {leads && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="border border-border rounded-xl p-4 bg-card">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Total Audits</p>
            <p className="text-2xl font-bold mt-1">{totalAudits}</p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-card">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Today</p>
            <p className="text-2xl font-bold mt-1">{auditsToday}</p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-card">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">This Month</p>
            <p className="text-2xl font-bold mt-1">{auditsThisMonth}</p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-card">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg. Score</p>
            <p className="text-2xl font-bold mt-1">
              {leads.length > 0
                ? Math.round(leads.reduce((s, l) => s + (l.result?.overall_score ?? 0), 0) / leads.length)
                : "—"}
            </p>
          </div>
        </div>
      )}

      {leads && leads.length > 0 && (
        <div className="border border-border rounded-xl bg-card mb-8 overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-muted/30">
            <h2 className="font-semibold">Leads by Page</h2>
            <p className="text-xs text-muted-foreground mt-1">Which pages are generating the most audit submissions</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/20">
                <tr className="text-left">
                  <th className="px-4 py-2 font-semibold">Page</th>
                  <th className="px-4 py-2 font-semibold">Leads</th>
                  <th className="px-4 py-2 font-semibold">Avg. Score</th>
                </tr>
              </thead>
              <tbody>
                {leadsByPage.map((row) => (
                  <tr key={row.page} className="border-t border-border">
                    <td className="px-4 py-2 font-mono text-xs">{row.page}</td>
                    <td className="px-4 py-2 font-semibold">{row.count}</td>
                    <td className="px-4 py-2">{row.avg || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!leads ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : leads.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">No leads yet.</p>
      ) : (
        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Company</th>
                  <th className="px-4 py-3 font-semibold">Website</th>
                  <th className="px-4 py-3 font-semibold">Source Page</th>
                  <th className="px-4 py-3 font-semibold">Score</th>
                  <th className="px-4 py-3 font-semibold">Report</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <Fragment key={l.id}>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 whitespace-nowrap">
                        {new Date(l.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3">{l.name}</td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${l.email}`} className="text-primary hover:underline">
                          {l.email}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <a href={`tel:${l.phone}`} className="text-primary hover:underline">
                          {l.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3">{l.company}</td>
                      <td className="px-4 py-3">
                        <a
                          href={l.website.startsWith("http") ? l.website : `https://${l.website}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          {l.website}
                        </a>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">
                        {l.source_page || "—"}
                        {l.utm_source && (
                          <span className="ml-1 text-muted-foreground">({l.utm_source})</span>
                        )}
                      </td>
                      <td className="px-4 py-3 font-semibold">
                        {l.result?.overall_score ?? "—"}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          className="text-primary hover:underline"
                          onClick={() => setExpanded(expanded === l.id ? null : l.id)}
                        >
                          {expanded === l.id ? "Hide" : "View"}
                        </button>
                      </td>
                    </tr>
                    {expanded === l.id && (
                      <tr className="border-t border-border bg-muted/30">
                        <td colSpan={9} className="px-4 py-4">
                          <pre className="text-xs whitespace-pre-wrap break-words max-h-96 overflow-auto">
                            {JSON.stringify(l.result, null, 2)}
                          </pre>
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