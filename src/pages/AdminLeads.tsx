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
    const header = ["Date", "Name", "Email", "Phone", "Company", "Website", "Industry", "Score"];
    const rows = leads.map((l) => [
      new Date(l.created_at).toISOString(),
      l.name,
      l.email,
      l.phone,
      l.company,
      l.website,
      l.industry ?? "",
      l.result?.overall_score ?? "",
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
    <div className="container mx-auto px-4 py-12 max-w-7xl">
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
          <Button variant="outline" onClick={exportCSV} disabled={!leads?.length}>
            Export CSV
          </Button>
          <Button variant="outline" onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>

      {leads && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
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
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Est. Credits Used</p>
            <p className="text-2xl font-bold mt-1">~{estCreditsUsed}</p>
            <p className="text-[10px] text-muted-foreground mt-1">≈1 credit / audit</p>
          </div>
          <div className={`border rounded-xl p-4 ${creditsRemaining === 0 ? "border-destructive bg-destructive/10" : creditsRemaining <= 2 ? "border-orange-500 bg-orange-500/10" : "border-border bg-card"}`}>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Credits Remaining</p>
            <p className="text-2xl font-bold mt-1">{creditsRemaining} / {CREDIT_LIMIT}</p>
            <p className="text-[10px] text-muted-foreground mt-1">
              {creditsRemaining === 0 ? "Limit reached" : `${creditsRemaining} audit${creditsRemaining === 1 ? "" : "s"} left`}
            </p>
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
                        <td colSpan={8} className="px-4 py-4">
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