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

interface CallClick {
  id: string;
  phone: string;
  source_path: string | null;
  created_at: string;
}

interface CtaClick {
  id: string;
  cta_type: string;
  cta_label: string | null;
  placement: string | null;
  source_path: string | null;
  href: string | null;
  created_at: string;
}

export default function AdminInquiries() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[] | null>(null);
  const [callClicks, setCallClicks] = useState<CallClick[] | null>(null);
  const [ctaClicks, setCtaClicks] = useState<CtaClick[] | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string>("");
  const [range, setRange] = useState<"today" | "7d" | "30d">("today");

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

      const [{ data, error }, { data: ccData, error: ccErr }, { data: ctaData, error: ctaErr }] = await Promise.all([
        supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
        supabase.from("call_clicks").select("id,phone,source_path,created_at").order("created_at", { ascending: false }),
        (supabase as any)
          .from("cta_clicks")
          .select("id,cta_type,cta_label,placement,source_path,href,created_at")
          .order("created_at", { ascending: false }),
      ]);
      if (error) {
        toast.error("Failed to load inquiries: " + error.message);
        return;
      }
      if (ccErr) {
        console.error("Failed to load call clicks", ccErr);
      }
      if (ctaErr) {
        console.error("Failed to load CTA clicks", ctaErr);
      }
      setInquiries((data as Inquiry[]) ?? []);
      setCallClicks((ccData as CallClick[]) ?? []);
      setCtaClicks((ctaData as CtaClick[]) ?? []);
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
  const startOf7d = new Date(startOfToday.getTime() - 6 * 24 * 60 * 60 * 1000);
  const startOf30d = new Date(startOfToday.getTime() - 29 * 24 * 60 * 60 * 1000);
  const rangeStart = range === "today" ? startOfToday : range === "7d" ? startOf7d : startOf30d;
  const rangeLabel = range === "today" ? "Today" : range === "7d" ? "Last 7 days" : "Last 30 days";
  const total = inquiries?.length ?? 0;
  const today = inquiries?.filter((l) => new Date(l.created_at) >= startOfToday).length ?? 0;
  const thisMonth = inquiries?.filter((l) => new Date(l.created_at) >= startOfMonth).length ?? 0;

  const todaysInquiries = useMemo(
    () => (inquiries ?? []).filter((l) => new Date(l.created_at) >= rangeStart),
    [inquiries, rangeStart]
  );
  const todaysCalls = useMemo(
    () => (callClicks ?? []).filter((c) => new Date(c.created_at) >= rangeStart),
    [callClicks, rangeStart]
  );
  const todaysCtas = useMemo(
    () => (ctaClicks ?? []).filter((c) => new Date(c.created_at) >= rangeStart),
    [ctaClicks, rangeStart]
  );

  const todaysByPage = useMemo(() => {
    const map = new Map<string, {
      page: string;
      form: number;
      whatsapp: number;
      call: number;
      email: number;
      quote: number;
      other: number;
      total: number;
      ctas: Map<string, number>; // "CTA — placement" -> count
    }>();
    const ensure = (page: string) => {
      const key = page || "(unknown)";
      let row = map.get(key);
      if (!row) {
        row = { page: key, form: 0, whatsapp: 0, call: 0, email: 0, quote: 0, other: 0, total: 0, ctas: new Map() };
        map.set(key, row);
      }
      return row;
    };
    const classify = (label: string): "form" | "whatsapp" | "call" | "email" | "quote" | "other" => {
      const s = label.toLowerCase();
      if (s.includes("whatsapp") || s.includes("wa ")) return "whatsapp";
      if (s.includes("call") || s.includes("phone")) return "call";
      if (s.includes("email") || s.includes("mail")) return "email";
      if (s.includes("quote") || s.includes("audit") || s.includes("proposal")) return "quote";
      if (s.includes("form") || s.includes("inquiry") || s.includes("contact")) return "form";
      return "other";
    };
    for (const i of todaysInquiries) {
      const row = ensure(i.source_path ?? "");
      const ctaLabel = (i.extra?.cta as string) || "Form Submission";
      const placement = (i.extra?.placement as string) || (i.service ?? "");
      const bucket = classify(`${ctaLabel} ${placement}`);
      row[bucket] += 1;
      row.total += 1;
      const key = placement ? `${ctaLabel} — ${placement}` : ctaLabel;
      row.ctas.set(key, (row.ctas.get(key) ?? 0) + 1);
    }
    for (const c of todaysCalls) {
      const row = ensure(c.source_path ?? "");
      row.call += 1;
      row.total += 1;
      const key = `Call Click — ${c.phone}`;
      row.ctas.set(key, (row.ctas.get(key) ?? 0) + 1);
    }
    for (const c of todaysCtas) {
      const row = ensure(c.source_path ?? "");
      const bucket = (["whatsapp", "call", "email", "quote", "form", "other"] as const).includes(c.cta_type as any)
        ? (c.cta_type as "whatsapp" | "call" | "email" | "quote" | "form" | "other")
        : "other";
      row[bucket] += 1;
      row.total += 1;
      const niceType = bucket.charAt(0).toUpperCase() + bucket.slice(1);
      const label = c.cta_label?.trim() || niceType + " Click";
      const key = c.placement ? `${niceType}: ${label} — ${c.placement}` : `${niceType}: ${label}`;
      row.ctas.set(key, (row.ctas.get(key) ?? 0) + 1);
    }
    return Array.from(map.values()).sort((a, b) => b.total - a.total);
  }, [todaysInquiries, todaysCalls, todaysCtas]);

  const todayTotals = useMemo(() => {
    return todaysByPage.reduce(
      (acc, r) => {
        acc.form += r.form;
        acc.whatsapp += r.whatsapp;
        acc.call += r.call;
        acc.email += r.email;
        acc.quote += r.quote;
        acc.other += r.other;
        acc.total += r.total;
        return acc;
      },
      { form: 0, whatsapp: 0, call: 0, email: 0, quote: 0, other: 0, total: 0 }
    );
  }, [todaysByPage]);

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
          <Link to="/admin/call-clicks">
            <Button variant="outline">Call Clicks</Button>
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

      <div className="rounded-xl border border-border bg-card mb-8 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-border bg-muted/30">
          <div>
            <h2 className="text-lg font-semibold">Inquiries by Page — {rangeLabel}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Which pages are driving demand and which CTAs visitors are clicking on each page.
            </p>
            <div className="inline-flex mt-3 rounded-md border border-border bg-background overflow-hidden text-xs">
              {([
                { key: "today", label: "Today" },
                { key: "7d", label: "Last 7 days" },
                { key: "30d", label: "Last 30 days" },
              ] as const).map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setRange(opt.key)}
                  className={
                    "px-3 py-1.5 font-medium transition-colors " +
                    (range === opt.key
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted")
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-primary/10 text-primary px-2.5 py-1 font-medium">Total {todayTotals.total}</span>
            <span className="rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2.5 py-1 font-medium">Form {todayTotals.form}</span>
            <span className="rounded-full bg-green-500/10 text-green-600 dark:text-green-400 px-2.5 py-1 font-medium">WhatsApp {todayTotals.whatsapp}</span>
            <span className="rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 px-2.5 py-1 font-medium">Call {todayTotals.call}</span>
            <span className="rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2.5 py-1 font-medium">Email {todayTotals.email}</span>
            <span className="rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 px-2.5 py-1 font-medium">Quote {todayTotals.quote}</span>
          </div>
        </div>

        {todaysByPage.length === 0 ? (
          <div className="px-5 py-10 text-center text-sm text-muted-foreground">
            No inquiries or CTA clicks recorded in {rangeLabel.toLowerCase()} yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/20 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Page</th>
                  <th className="px-4 py-3 font-semibold text-center">Total</th>
                  <th className="px-4 py-3 font-semibold text-center">Form</th>
                  <th className="px-4 py-3 font-semibold text-center">WhatsApp</th>
                  <th className="px-4 py-3 font-semibold text-center">Call</th>
                  <th className="px-4 py-3 font-semibold text-center">Email</th>
                  <th className="px-4 py-3 font-semibold text-center">Quote</th>
                  <th className="px-4 py-3 font-semibold">CTAs (placement × count)</th>
                </tr>
              </thead>
              <tbody>
                {todaysByPage.map((row) => (
                  <tr key={row.page} className="border-t border-border align-top">
                    <td className="px-4 py-3 max-w-[260px]">
                      {row.page && row.page !== "(unknown)" ? (
                        <a
                          href={row.page}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary hover:underline break-all"
                        >
                          {row.page}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">(unknown page)</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center font-semibold">{row.total}</td>
                    <td className="px-4 py-3 text-center">{row.form || <span className="text-muted-foreground">—</span>}</td>
                    <td className="px-4 py-3 text-center">{row.whatsapp || <span className="text-muted-foreground">—</span>}</td>
                    <td className="px-4 py-3 text-center">{row.call || <span className="text-muted-foreground">—</span>}</td>
                    <td className="px-4 py-3 text-center">{row.email || <span className="text-muted-foreground">—</span>}</td>
                    <td className="px-4 py-3 text-center">{row.quote || <span className="text-muted-foreground">—</span>}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {Array.from(row.ctas.entries()).map(([label, count]) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs"
                          >
                            <span>{label}</span>
                            <span className="text-muted-foreground">× {count}</span>
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
