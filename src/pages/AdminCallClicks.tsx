import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface CallClick {
  id: string;
  phone: string;
  source_path: string | null;
  user_agent: string | null;
  referrer: string | null;
  created_at: string;
}

export default function AdminCallClicks() {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState<CallClick[] | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [search, setSearch] = useState("");

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
        .from("call_clicks")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1000);
      if (error) {
        toast.error("Failed to load call clicks: " + error.message);
        return;
      }
      setClicks((data as CallClick[]) ?? []);
    };
    init();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const filtered = useMemo(() => {
    if (!clicks) return [];
    const q = search.trim().toLowerCase();
    if (!q) return clicks;
    return clicks.filter((c) =>
      c.phone.toLowerCase().includes(q) ||
      (c.source_path ?? "").toLowerCase().includes(q) ||
      (c.user_agent ?? "").toLowerCase().includes(q) ||
      (c.referrer ?? "").toLowerCase().includes(q)
    );
  }, [clicks, search]);

  const exportCSV = () => {
    if (!filtered.length) return;
    const header = ["Date", "Phone", "Source Page", "Referrer", "User Agent"];
    const rows = filtered.map((c) => [
      new Date(c.created_at).toISOString(),
      c.phone,
      c.source_path ?? "",
      c.referrer ?? "",
      c.user_agent ?? "",
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `call-clicks-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const total = clicks?.length ?? 0;
  const today = clicks?.filter((c) => new Date(c.created_at) >= startOfToday).length ?? 0;
  const thisMonth = clicks?.filter((c) => new Date(c.created_at) >= startOfMonth).length ?? 0;

  const topPages = useMemo(() => {
    const counts = new Map<string, number>();
    clicks?.forEach((c) => {
      const key = c.source_path || "(unknown)";
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [clicks]);

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

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Call Clicks</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Tracks every time a visitor taps the phone number on the website.
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/inquiries"><Button variant="outline">Inquiries</Button></Link>
          <Link to="/admin/leads"><Button variant="outline">AI Visibility Leads</Button></Link>
          <Button onClick={exportCSV} disabled={!filtered.length}>Export CSV</Button>
          <Button onClick={handleLogout} variant="outline">Sign Out</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border border-border p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Total</p>
          <p className="text-2xl font-bold mt-1">{total}</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Today</p>
          <p className="text-2xl font-bold mt-1">{today}</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">This Month</p>
          <p className="text-2xl font-bold mt-1">{thisMonth}</p>
        </div>
      </div>

      {topPages.length > 0 && (
        <div className="rounded-lg border border-border p-4 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Top Source Pages
          </p>
          <ul className="space-y-1.5 text-sm">
            {topPages.map(([page, count]) => (
              <li key={page} className="flex justify-between gap-4">
                <span className="truncate text-muted-foreground">{page}</span>
                <span className="font-semibold">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-4">
        <Input
          placeholder="Search by phone, page, user agent..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {!clicks ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">No call clicks yet.</div>
      ) : (
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Source Page</th>
                  <th className="px-4 py-3 font-semibold">Referrer</th>
                  <th className="px-4 py-3 font-semibold">Device</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => {
                  const ua = c.user_agent ?? "";
                  const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
                  return (
                    <tr key={c.id} className="border-t border-border">
                      <td className="px-4 py-3 whitespace-nowrap">
                        {new Date(c.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3">{c.phone}</td>
                      <td className="px-4 py-3 text-xs">{c.source_path ?? "—"}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground truncate max-w-[200px]">
                        {c.referrer || "—"}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">
                          {isMobile ? "Mobile" : "Desktop"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}