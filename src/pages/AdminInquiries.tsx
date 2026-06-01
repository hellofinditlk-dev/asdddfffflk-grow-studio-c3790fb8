import { Fragment, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Inquiry {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  message: string | null;
  service: string | null;
  source_path: string | null;
  extra: Record<string, string> | null;
  created_at: string;
}

export default function AdminInquiries() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[] | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string>("");

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
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        toast.error("Failed to load inquiries: " + error.message);
        return;
      }
      setInquiries((data as Inquiry[]) ?? []);
    };
    init();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const services = useMemo(() => {
    const set = new Set<string>();
    inquiries?.forEach((i) => i.service && set.add(i.service));
    return Array.from(set).sort();
  }, [inquiries]);

  const filtered = useMemo(() => {
    if (!inquiries) return [];
    const q = search.trim().toLowerCase();
    return inquiries.filter((i) => {
      if (serviceFilter && i.service !== serviceFilter) return false;
      if (!q) return true;
      return (
        i.name.toLowerCase().includes(q) ||
        (i.email ?? "").toLowerCase().includes(q) ||
        i.phone.toLowerCase().includes(q) ||
        (i.service ?? "").toLowerCase().includes(q) ||
        (i.message ?? "").toLowerCase().includes(q) ||
        (i.source_path ?? "").toLowerCase().includes(q)
      );
    });
  }, [inquiries, search, serviceFilter]);

  const exportCSV = () => {
    if (!filtered.length) return;
    const header = ["Date", "Name", "Email", "Phone", "Service", "Source Page", "Message", "Extra"];
    const rows = filtered.map((l) => [
      new Date(l.created_at).toISOString(),
      l.name,
      l.email ?? "",
      l.phone,
      l.service ?? "",
      l.source_path ?? "",
      l.message ?? "",
      l.extra ? JSON.stringify(l.extra) : "",
    ]);
    const csv = [header, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inquiries-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const total = inquiries?.length ?? 0;
  const today = inquiries?.filter((l) => new Date(l.created_at) >= startOfToday).length ?? 0;
  const thisMonth = inquiries?.filter((l) => new Date(l.created_at) >= startOfMonth).length ?? 0;

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
            Your account does not have admin access.
          </p>
          <Button onClick={handleLogout} variant="outline">Sign Out</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Website Inquiries</h1>
          <p className="text-muted-foreground text-sm mt-1">
            All inquiries submitted through website forms, with the service they came from.
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/leads">
            <Button variant="outline">AI Visibility Leads</Button>
          </Link>
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

      <div className="flex flex-wrap gap-3 mb-4">
        <Input
          placeholder="Search by name, phone, email, service, page..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={serviceFilter}
          onChange={(e) => setServiceFilter(e.target.value)}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm"
        >
          <option value="">All services</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {!inquiries ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No inquiries found.
        </div>
      ) : (
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Source Page</th>
                  <th className="px-4 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => (
                  <Fragment key={l.id}>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 whitespace-nowrap">
                        {new Date(l.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3">{l.name}</td>
                      <td className="px-4 py-3">
                        <a href={`tel:${l.phone}`} className="text-primary hover:underline">{l.phone}</a>
                        {" "}
                        <a
                          href={`https://wa.me/${l.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-2 text-xs text-muted-foreground hover:underline"
                        >
                          WA
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        {l.email ? (
                          <a href={`mailto:${l.email}`} className="text-primary hover:underline">{l.email}</a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">
                          {l.service ?? "General"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {l.source_path ? (
                          <a
                            href={l.source_path}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary hover:underline text-xs"
                          >
                            {l.source_path}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
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
                        <td colSpan={7} className="px-4 py-4 space-y-3">
                          {l.message && (
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Message</p>
                              <p className="whitespace-pre-wrap">{l.message}</p>
                            </div>
                          )}
                          {l.extra && Object.keys(l.extra).length > 0 && (
                            <div>
                              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Extra Fields</p>
                              <ul className="text-sm">
                                {Object.entries(l.extra).map(([k, v]) => (
                                  <li key={k}><span className="text-muted-foreground">{k}:</span> {v}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {!l.message && !l.extra && (
                            <p className="text-muted-foreground text-sm">No additional details.</p>
                          )}
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
