import { Fragment, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { serviceFromPath, sourceFromReferrer, cleanPath } from "@/lib/serviceFromPath";

interface Inquiry {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  message: string | null;
  service: string | null;
  source_path: string | null;
  extra: Record<string, any> | null;
  created_at: string;
}
interface CallClick {
  id: string;
  phone: string;
  source_path: string | null;
  referrer: string | null;
  created_at: string;
}
interface CtaClick {
  id: string;
  cta_type: string;
  cta_label: string | null;
  placement: string | null;
  source_path: string | null;
  href: string | null;
  referrer: string | null;
  created_at: string;
}

type Range = "today" | "7d" | "30d";

const CTA_TYPE_LABEL: Record<string, string> = {
  whatsapp: "WhatsApp",
  call: "Call",
  form: "Form",
  email: "Email",
  quote: "Get Proposal",
  consultation: "Book Consultation",
  other: "Other",
};

export default function AdminInquiries() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[] | null>(null);
  const [callClicks, setCallClicks] = useState<CallClick[] | null>(null);
  const [ctaClicks, setCtaClicks] = useState<CtaClick[] | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [range, setRange] = useState<Range>("today");

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

      const [{ data: iData, error: iErr }, { data: ccData, error: ccErr }, { data: ctaData, error: ctaErr }] =
        await Promise.all([
          supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
          supabase
            .from("call_clicks")
            .select("id,phone,source_path,referrer,created_at")
            .order("created_at", { ascending: false }),
          (supabase as any)
            .from("cta_clicks")
            .select("id,cta_type,cta_label,placement,source_path,href,referrer,created_at")
            .order("created_at", { ascending: false }),
        ]);
      if (iErr) toast.error("Failed to load inquiries: " + iErr.message);
      if (ccErr) console.error("call_clicks error", ccErr);
      if (ctaErr) console.error("cta_clicks error", ctaErr);
      setInquiries((iData as Inquiry[]) ?? []);
      setCallClicks((ccData as CallClick[]) ?? []);
      setCtaClicks((ctaData as CtaClick[]) ?? []);
    };
    init();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const { rangeStart, rangeDays } = useMemo(() => {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const days = range === "today" ? 1 : range === "7d" ? 7 : 30;
    const start = new Date(startOfToday.getTime() - (days - 1) * 86400000);
    return { rangeStart: start, rangeDays: days };
  }, [range]);

  const inRange = <T extends { created_at: string }>(arr: T[] | null) =>
    (arr ?? []).filter((r) => new Date(r.created_at) >= rangeStart);

  const periodInq = useMemo(() => inRange(inquiries), [inquiries, rangeStart]);
  const periodCalls = useMemo(() => inRange(callClicks), [callClicks, rangeStart]);
  const periodCtas = useMemo(() => inRange(ctaClicks), [ctaClicks, rangeStart]);

  // ---------------- KPIs ----------------
  const totalCtaClicks = periodCtas.length + periodCalls.length;
  const totalLeads = periodInq.length;
  const convRate = totalCtaClicks > 0 ? (totalLeads / totalCtaClicks) * 100 : 0;

  // ---------------- Service performance ----------------
  type SvcRow = { service: string; views: number; ctaClicks: number; leads: number; conv: number };
  const serviceRows: SvcRow[] = useMemo(() => {
    const map = new Map<string, SvcRow>();
    const ensure = (s: string) => {
      let r = map.get(s);
      if (!r) {
        r = { service: s, views: 0, ctaClicks: 0, leads: 0, conv: 0 };
        map.set(s, r);
      }
      return r;
    };
    // views proxy = unique pages w/ activity isn't accurate; use total interactions as engagement signal
    for (const c of periodCtas) ensure(serviceFromPath(c.source_path)).ctaClicks += 1;
    for (const c of periodCalls) ensure(serviceFromPath(c.source_path)).ctaClicks += 1;
    for (const i of periodInq) ensure(serviceFromPath(i.source_path)).leads += 1;
    const arr = Array.from(map.values());
    arr.forEach((r) => {
      r.views = r.ctaClicks; // engagement proxy until pageview tracking exists
      r.conv = r.ctaClicks > 0 ? (r.leads / r.ctaClicks) * 100 : 0;
    });
    return arr.sort((a, b) => b.ctaClicks + b.leads - (a.ctaClicks + a.leads));
  }, [periodCtas, periodCalls, periodInq]);

  // ---------------- CTA Performance ----------------
  type CtaPerfRow = { type: string; today: number; d7: number; d30: number };
  const ctaPerf: CtaPerfRow[] = useMemo(() => {
    const now = new Date();
    const sot = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const s7 = new Date(sot.getTime() - 6 * 86400000);
    const s30 = new Date(sot.getTime() - 29 * 86400000);
    const buckets = new Map<string, CtaPerfRow>();
    const ensure = (t: string) => {
      const label = CTA_TYPE_LABEL[t] ?? t;
      let r = buckets.get(label);
      if (!r) {
        r = { type: label, today: 0, d7: 0, d30: 0 };
        buckets.set(label, r);
      }
      return r;
    };
    const bump = (type: string, at: Date) => {
      const r = ensure(type);
      if (at >= s30) r.d30 += 1;
      if (at >= s7) r.d7 += 1;
      if (at >= sot) r.today += 1;
    };
    (ctaClicks ?? []).forEach((c) => bump(c.cta_type, new Date(c.created_at)));
    (callClicks ?? []).forEach((c) => bump("call", new Date(c.created_at)));
    (inquiries ?? []).forEach((i) => bump("form", new Date(i.created_at)));
    return Array.from(buckets.values()).sort((a, b) => b.d30 - a.d30);
  }, [ctaClicks, callClicks, inquiries]);

  // ---------------- CTA Heatmap (top services × CTA type) ----------------
  type Heat = { service: string; whatsapp: number; call: number; form: number; total: number };
  const ctaHeatmap: Heat[] = useMemo(() => {
    const map = new Map<string, Heat>();
    const ensure = (s: string) => {
      let r = map.get(s);
      if (!r) {
        r = { service: s, whatsapp: 0, call: 0, form: 0, total: 0 };
        map.set(s, r);
      }
      return r;
    };
    for (const c of periodCtas) {
      const r = ensure(serviceFromPath(c.source_path));
      if (c.cta_type === "whatsapp") r.whatsapp += 1;
      else if (c.cta_type === "call") r.call += 1;
      else if (c.cta_type === "form") r.form += 1;
      r.total += 1;
    }
    for (const c of periodCalls) {
      const r = ensure(serviceFromPath(c.source_path));
      r.call += 1;
      r.total += 1;
    }
    for (const i of periodInq) {
      const r = ensure(serviceFromPath(i.source_path));
      r.form += 1;
      r.total += 1;
    }
    return Array.from(map.values())
      .sort((a, b) => b.total - a.total)
      .slice(0, 8);
  }, [periodCtas, periodCalls, periodInq]);

  // ---------------- Traffic Source ----------------
  type SrcRow = { source: string; ctaClicks: number; leads: number; conv: number };
  const sourceRows: SrcRow[] = useMemo(() => {
    const map = new Map<string, SrcRow>();
    const ensure = (s: string) => {
      let r = map.get(s);
      if (!r) {
        r = { source: s, ctaClicks: 0, leads: 0, conv: 0 };
        map.set(s, r);
      }
      return r;
    };
    for (const c of periodCtas) ensure(sourceFromReferrer(c.referrer)).ctaClicks += 1;
    for (const c of periodCalls) ensure(sourceFromReferrer(c.referrer)).ctaClicks += 1;
    for (const i of periodInq) ensure(sourceFromReferrer((i.extra?.referrer as string) ?? null)).leads += 1;
    const arr = Array.from(map.values());
    arr.forEach((r) => (r.conv = r.ctaClicks > 0 ? (r.leads / r.ctaClicks) * 100 : 0));
    return arr.sort((a, b) => b.leads + b.ctaClicks - (a.leads + a.ctaClicks));
  }, [periodCtas, periodCalls, periodInq]);

  // ---------------- Insights ----------------
  const insights = useMemo(() => {
    const sorted = [...serviceRows];
    const highestDemand = sorted.sort((a, b) => b.ctaClicks - a.ctaClicks)[0];
    const highestConverting = sorted
      .filter((s) => s.ctaClicks >= 3)
      .sort((a, b) => b.conv - a.conv)[0];

    // Fastest growing: compare last half vs first half within range
    const half = new Date(rangeStart.getTime() + (rangeDays * 86400000) / 2);
    const growth = new Map<string, { early: number; late: number }>();
    const add = (path: string | null, at: string, kind: "early" | "late") => {
      const s = serviceFromPath(path);
      const g = growth.get(s) ?? { early: 0, late: 0 };
      g[kind] += 1;
      growth.set(s, g);
    };
    [...periodCtas, ...periodCalls].forEach((c) =>
      add(c.source_path, c.created_at, new Date(c.created_at) >= half ? "late" : "early")
    );
    periodInq.forEach((i) =>
      add(i.source_path, i.created_at, new Date(i.created_at) >= half ? "late" : "early")
    );
    let fastest: { service: string; pct: number } | null = null;
    growth.forEach((g, service) => {
      if (g.early === 0 && g.late === 0) return;
      const pct = g.early === 0 ? 100 : ((g.late - g.early) / g.early) * 100;
      if (!fastest || pct > fastest.pct) fastest = { service, pct };
    });

    const bestSource = [...sourceRows].sort((a, b) => b.leads - a.leads).slice(0, 3);
    return { highestDemand, highestConverting, fastest, bestSource };
  }, [serviceRows, sourceRows, periodCtas, periodCalls, periodInq, rangeStart, rangeDays]);

  // ---------------- Service Demand Trend (last 30 days) ----------------
  const trendData = useMemo(() => {
    const now = new Date();
    const sot = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const days: { key: string; label: string }[] = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(sot.getTime() - i * 86400000);
      days.push({
        key: d.toISOString().slice(0, 10),
        label: d.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      });
    }
    // Top 4 services by interactions in last 30d
    const last30Start = new Date(sot.getTime() - 29 * 86400000);
    const tally = new Map<string, number>();
    const bump = (p: string | null, at: string) => {
      if (new Date(at) < last30Start) return;
      const s = serviceFromPath(p);
      tally.set(s, (tally.get(s) ?? 0) + 1);
    };
    (ctaClicks ?? []).forEach((c) => bump(c.source_path, c.created_at));
    (callClicks ?? []).forEach((c) => bump(c.source_path, c.created_at));
    (inquiries ?? []).forEach((i) => bump(i.source_path, i.created_at));
    const topServices = Array.from(tally.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([s]) => s);

    const series = days.map((d) => {
      const row: Record<string, any> = { date: d.label };
      topServices.forEach((s) => (row[s] = 0));
      return row;
    });
    const dayIndex = new Map(days.map((d, i) => [d.key, i]));
    const tick = (p: string | null, at: string) => {
      const s = serviceFromPath(p);
      if (!topServices.includes(s)) return;
      const key = new Date(at).toISOString().slice(0, 10);
      const idx = dayIndex.get(key);
      if (idx === undefined) return;
      series[idx][s] = (series[idx][s] ?? 0) + 1;
    };
    (ctaClicks ?? []).forEach((c) => tick(c.source_path, c.created_at));
    (callClicks ?? []).forEach((c) => tick(c.source_path, c.created_at));
    (inquiries ?? []).forEach((i) => tick(i.source_path, i.created_at));
    return { series, services: topServices };
  }, [ctaClicks, callClicks, inquiries]);

  // ---------------- Funnel ----------------
  const funnel = useMemo(() => {
    const cta = totalCtaClicks;
    const whatsapp = periodCtas.filter((c) => c.cta_type === "whatsapp").length;
    const calls = periodCtas.filter((c) => c.cta_type === "call").length + periodCalls.length;
    const formOpens = periodCtas.filter((c) => c.cta_type === "form").length + totalLeads;
    return [
      { stage: "CTA Clicks", count: cta },
      { stage: "WhatsApp + Call Intent", count: whatsapp + calls },
      { stage: "Form Opens", count: formOpens },
      { stage: "Leads Captured", count: totalLeads },
    ];
  }, [totalCtaClicks, totalLeads, periodCtas, periodCalls]);

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

  const rangeLabel = range === "today" ? "Today" : range === "7d" ? "Last 7 Days" : "Last 30 Days";

  const fmtPct = (n: number) => `${n.toFixed(1)}%`;
  const fmtNum = (n: number) => n.toLocaleString();

  const heatCell = (n: number, max: number) => {
    if (max === 0) return "bg-muted/20";
    const ratio = n / max;
    if (ratio === 0) return "bg-muted/10";
    if (ratio < 0.25) return "bg-primary/10";
    if (ratio < 0.5) return "bg-primary/20";
    if (ratio < 0.75) return "bg-primary/40";
    return "bg-primary/60";
  };
  const heatMax = Math.max(1, ...ctaHeatmap.flatMap((r) => [r.whatsapp, r.call, r.form]));

  const palette = ["hsl(var(--primary))", "#f97316", "#10b981", "#3b82f6"];

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Revenue Intelligence</h1>
          <p className="text-muted-foreground text-sm mt-1">
            What buyers actually want — by service, CTA, and traffic source.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/admin/leads"><Button variant="outline" size="sm">AI Visibility</Button></Link>
          <Link to="/admin/call-clicks"><Button variant="outline" size="sm">Call Log</Button></Link>
          <Button variant="outline" size="sm" onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>

      <Tabs value={range} onValueChange={(v) => setRange(v as Range)} className="mb-6">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="7d">Last 7 Days</TabsTrigger>
          <TabsTrigger value="30d">Last 30 Days</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <KPI label={`CTA Clicks · ${rangeLabel}`} value={fmtNum(totalCtaClicks)} accent="primary" />
        <KPI label={`WhatsApp · ${rangeLabel}`} value={fmtNum(periodCtas.filter((c) => c.cta_type === "whatsapp").length)} />
        <KPI label={`Leads · ${rangeLabel}`} value={fmtNum(totalLeads)} accent="orange" />
        <KPI label="Lead Conversion" value={fmtPct(convRate)} hint="Leads ÷ CTA Clicks" />
      </div>

      {/* Insight cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        <InsightCard
          icon="🔥"
          title="Highest Demand"
          value={insights.highestDemand?.service ?? "—"}
          sub={insights.highestDemand ? `${insights.highestDemand.ctaClicks} CTA clicks` : "No data yet"}
        />
        <InsightCard
          icon="🚀"
          title="Fastest Growing"
          value={insights.fastest?.service ?? "—"}
          sub={insights.fastest ? `${insights.fastest.pct >= 0 ? "+" : ""}${insights.fastest.pct.toFixed(0)}% vs first half` : "Need more data"}
        />
        <InsightCard
          icon="🎯"
          title="Best Converting"
          value={insights.highestConverting?.service ?? "—"}
          sub={insights.highestConverting ? `${fmtPct(insights.highestConverting.conv)} conv` : "Need 3+ clicks"}
        />
      </div>

      {/* Top Services */}
      <Section title="Top Services" sub={`Engagement and conversion by service page · ${rangeLabel}`}>
        <DataTable
          headers={["Service", "Engagement", "CTA Clicks", "Leads", "Conv %"]}
          rows={serviceRows.slice(0, 12).map((r) => [
            r.service,
            fmtNum(r.views),
            fmtNum(r.ctaClicks),
            <span className="font-semibold text-foreground">{fmtNum(r.leads)}</span>,
            <span className={r.conv >= 2 ? "text-emerald-600 font-semibold" : ""}>{fmtPct(r.conv)}</span>,
          ])}
          empty="No activity in this period."
        />
      </Section>

      {/* CTA Performance */}
      <Section title="CTA Performance" sub="Which CTA type is generating the most intent (all-time buckets)">
        <DataTable
          headers={["CTA", "Today", "7 Days", "30 Days"]}
          rows={ctaPerf.map((r) => [r.type, fmtNum(r.today), fmtNum(r.d7), fmtNum(r.d30)])}
          empty="No CTA clicks recorded."
        />
      </Section>

      {/* CTA Heatmap */}
      <Section title="CTA Heatmap" sub={`Top services × CTA type · ${rangeLabel}`}>
        {ctaHeatmap.length === 0 ? (
          <p className="text-sm text-muted-foreground p-6">No CTA data yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-2">Service</th>
                  <th className="px-4 py-2 text-center">WhatsApp</th>
                  <th className="px-4 py-2 text-center">Call</th>
                  <th className="px-4 py-2 text-center">Form</th>
                  <th className="px-4 py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {ctaHeatmap.map((r) => (
                  <tr key={r.service} className="border-t border-border">
                    <td className="px-4 py-2 font-medium">{r.service}</td>
                    <td className="px-2 py-2">
                      <div className={`mx-auto w-14 py-1 text-center rounded ${heatCell(r.whatsapp, heatMax)}`}>{r.whatsapp}</div>
                    </td>
                    <td className="px-2 py-2">
                      <div className={`mx-auto w-14 py-1 text-center rounded ${heatCell(r.call, heatMax)}`}>{r.call}</div>
                    </td>
                    <td className="px-2 py-2">
                      <div className={`mx-auto w-14 py-1 text-center rounded ${heatCell(r.form, heatMax)}`}>{r.form}</div>
                    </td>
                    <td className="px-4 py-2 text-right font-semibold">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>

      {/* Traffic Source */}
      <Section title="Traffic Source Performance" sub={`Where leads come from · ${rangeLabel}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <DataTable
              headers={["Source", "CTA Clicks", "Leads", "Conv %"]}
              rows={sourceRows.slice(0, 10).map((r) => [
                r.source,
                fmtNum(r.ctaClicks),
                <span className="font-semibold">{fmtNum(r.leads)}</span>,
                <span className={r.conv >= 2 ? "text-emerald-600 font-semibold" : ""}>{fmtPct(r.conv)}</span>,
              ])}
              empty="No referrer data."
            />
          </div>
          <div className="border border-border rounded-xl p-4 bg-card">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Best Lead Sources</p>
            <ol className="space-y-2 text-sm">
              {insights.bestSource.length === 0 && (
                <li className="text-muted-foreground">No leads yet.</li>
              )}
              {insights.bestSource.map((s, idx) => (
                <li key={s.source} className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <span className="text-base">{["🥇", "🥈", "🥉"][idx]}</span>
                    <span className="font-medium">{s.source}</span>
                  </span>
                  <span className="text-muted-foreground">{s.leads} leads</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Trend chart */}
      <Section title="Service Demand Trend" sub="Daily interactions for top 4 services · last 30 days">
        <div className="h-[320px] w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData.series}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} interval={4} />
              <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              {trendData.services.map((s, i) => (
                <Line key={s} type="monotone" dataKey={s} stroke={palette[i % palette.length]} strokeWidth={2} dot={false} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Section>

      {/* Funnel */}
      <Section title="Inquiry Funnel" sub={`How visitors move from intent to lead · ${rangeLabel}`}>
        <div className="p-6 space-y-3">
          {funnel.map((f, idx) => {
            const max = funnel[0].count || 1;
            const w = Math.max(8, Math.round((f.count / max) * 100));
            return (
              <div key={f.stage}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{f.stage}</span>
                  <span className="text-muted-foreground">
                    {fmtNum(f.count)}
                    {idx > 0 && funnel[idx - 1].count > 0 && (
                      <span className="ml-2 text-xs">
                        ({((f.count / funnel[idx - 1].count) * 100).toFixed(0)}% step)
                      </span>
                    )}
                  </span>
                </div>
                <div className="h-7 bg-muted/30 rounded">
                  <div
                    className="h-full rounded bg-gradient-to-r from-primary to-orange-500 transition-all"
                    style={{ width: `${w}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Recent inquiries */}
      <Section title="Recent Inquiries" sub="Latest leads with clean page names">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/30 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-2">When</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Page</th>
              </tr>
            </thead>
            <tbody>
              {(inquiries ?? []).slice(0, 25).map((i) => (
                <tr key={i.id} className="border-t border-border">
                  <td className="px-4 py-2 whitespace-nowrap text-muted-foreground">
                    {new Date(i.created_at).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 font-medium">{i.name}</td>
                  <td className="px-4 py-2">
                    <a className="text-primary hover:underline" href={`tel:${i.phone}`}>{i.phone}</a>
                  </td>
                  <td className="px-4 py-2">{i.service || serviceFromPath(i.source_path)}</td>
                  <td className="px-4 py-2 text-xs text-muted-foreground">{cleanPath(i.source_path)}</td>
                </tr>
              ))}
              {(inquiries ?? []).length === 0 && (
                <tr><td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">No inquiries yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

function KPI({ label, value, hint, accent }: { label: string; value: string; hint?: string; accent?: "primary" | "orange" }) {
  const tone =
    accent === "primary" ? "text-primary" : accent === "orange" ? "text-orange-500" : "text-foreground";
  return (
    <div className="border border-border rounded-xl p-4 bg-card">
      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${tone}`}>{value}</p>
      {hint && <p className="text-[11px] text-muted-foreground mt-1">{hint}</p>}
    </div>
  );
}

function InsightCard({ icon, title, value, sub }: { icon: string; title: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl p-5 bg-gradient-to-br from-card to-muted/30 border border-border">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        <span className="text-lg">{icon}</span>
        {title}
      </div>
      <p className="text-xl font-bold mt-2 truncate">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{sub}</p>
    </div>
  );
}

function Section({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section className="border border-border rounded-xl bg-card mb-6 overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-muted/20">
        <h2 className="font-semibold">{title}</h2>
        {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

function DataTable({
  headers,
  rows,
  empty,
}: {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  empty: string;
}) {
  if (rows.length === 0)
    return <p className="text-sm text-muted-foreground p-6">{empty}</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
            {headers.map((h, i) => (
              <th key={i} className={`px-4 py-2 ${i >= 1 ? "text-right" : ""}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="border-t border-border">
              {r.map((c, ci) => (
                <td key={ci} className={`px-4 py-2 ${ci >= 1 ? "text-right tabular-nums" : ""}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
