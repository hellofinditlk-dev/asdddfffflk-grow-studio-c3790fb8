import { useState } from "react";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { calculateSocialCost, defaultSocialCostInputs, formatLkr, socialEstimateMessage, socialPackageRates, type SocialCostInputs } from "@/lib/socialCostCalculator";
import { useWhatsappNumber } from "@/lib/whatsapp";

export default function SocialCostCalculator() {
  const [input, setInput] = useState<SocialCostInputs>(defaultSocialCostInputs);
  const update = (patch: Partial<SocialCostInputs>) => setInput(old => ({ ...old, ...patch }));
  const result = calculateSocialCost(input);
  const number = useWhatsappNumber();
  const href = `https://wa.me/${number}?text=${encodeURIComponent(socialEstimateMessage(input))}`;
  const track = () => {
    const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
    analytics.gtag?.("event", "calculator_whatsapp_click", { package_name: result.name });
  };
  return <section id="calculator" aria-label="Social media cost calculator" className="scroll-mt-24 container max-w-6xl mx-auto px-4 py-12">
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-10 items-start">
      <div className="space-y-8 min-w-0">
        <h2 className="font-heading text-2xl font-bold">Build your monthly plan</h2>
        <fieldset><legend className="font-semibold mb-4">Platforms</legend><div className="flex flex-wrap gap-5">
          <label className="flex items-center gap-2"><Checkbox checked disabled />Facebook & Instagram</label>
          <label className="flex items-center gap-2"><Checkbox checked={input.tiktok} onCheckedChange={checked => update({ tiktok: checked === true, fullTiktok: false })} />TikTok</label>
          <label className="flex items-center gap-2"><Checkbox checked={input.linkedin} onCheckedChange={checked => update({ linkedin: checked === true })} />LinkedIn</label>
        </div></fieldset>
        {input.tiktok && <fieldset><legend className="font-semibold mb-3">TikTok level</legend><RadioGroup value={input.fullTiktok ? "full" : "cross"} onValueChange={value => update({ fullTiktok: value === "full" })}>
          <label className="flex items-center gap-2"><RadioGroupItem value="cross" />Cross-post our content to TikTok</label>
          <label className="flex items-center gap-2"><RadioGroupItem value="full" />Full TikTok strategy</label>
        </RadioGroup></fieldset>}
        <fieldset><legend className="font-semibold mb-3">Posts per month</legend><RadioGroup className="flex flex-wrap gap-5" value={String(input.posts)} onValueChange={value => update({ posts: Number(value) as SocialCostInputs["posts"] })}>
          {[12, 15, 20, 21].map(value => <label key={value} className="flex items-center gap-2"><RadioGroupItem value={String(value)} />{value === 21 ? "More than 20" : value}</label>)}
        </RadioGroup></fieldset>
        <label className="flex items-center justify-between gap-4 font-semibold">Location shoot at your business<Switch checked={input.shoot} onCheckedChange={shoot => update({ shoot })} aria-label="Location shoot at your business" /></label>
        <div><p className="font-semibold mb-3" id="reels-label">Reels per month</p><div className="flex gap-3 items-center">
          <Button variant="outline" size="icon" aria-label="Fewer reels" title="Fewer reels" disabled={input.reels === 0} onClick={() => update({ reels: input.reels - 1 })}><Minus className="h-4 w-4" /></Button>
          <input aria-labelledby="reels-label" className="w-20 h-10 text-center border border-input bg-background rounded-md" type="number" min={0} max={12} value={input.reels} onChange={event => update({ reels: Math.max(0, Math.min(12, Math.round(Number(event.target.value)))) })} />
          <Button variant="outline" size="icon" aria-label="More reels" title="More reels" disabled={input.reels === 12} onClick={() => update({ reels: input.reels + 1 })}><Plus className="h-4 w-4" /></Button>
        </div></div>
        <label className="flex items-center justify-between gap-4 font-semibold">Manage my paid ads<Switch checked={input.ads} onCheckedChange={ads => update({ ads, budget: ads ? 50000 : 0 })} aria-label="Manage my paid ads" /></label>
        {input.ads && <div><label className="font-semibold flex justify-between gap-3 mb-5" id="budget-label">Monthly ad budget<span>{formatLkr(input.budget)}</span></label><Slider aria-labelledby="budget-label" min={0} max={300000} step={10000} value={[input.budget]} onValueChange={values => update({ budget: values[0] ?? 0 })} /><div className="flex justify-between text-xs text-muted-foreground mt-3"><span>LKR 0</span><span>LKR 300,000</span></div></div>}
      </div>
      <div className="lg:sticky lg:top-24 rounded-lg border border-border bg-card p-6 min-w-0" aria-live="polite" aria-atomic="true">
        <p className="text-sm text-muted-foreground mb-2">Recommended package</p><h3 className="text-3xl font-heading font-bold mb-3" data-testid="package-name">{result.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{socialPackageRates[result.name].description}</p>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-3"><dt>Package fee</dt><dd>{formatLkr(result.packageFee)}</dd></div>
          {result.extraReels > 0 && <div className="flex justify-between gap-3"><dt>Extra reels ({result.extraReels})</dt><dd>{formatLkr(result.extraReelCost)}</dd></div>}
          {input.ads && <div className="flex justify-between gap-3"><dt>Ads management</dt><dd>{formatLkr(result.adsManagementFee)}</dd></div>}
          <div className="flex justify-between gap-3 border-t border-border pt-3 font-bold"><dt>Agency fee per month</dt><dd>{formatLkr(result.agencyFee)}</dd></div>
          <div className="flex justify-between gap-3"><dt>Ad budget paid to Meta</dt><dd>{formatLkr(result.adBudget)}</dd></div>
        </dl>
        <div className="border-t border-border mt-5 pt-5"><p className="text-sm text-muted-foreground">Estimated total per month</p><p className="font-heading text-3xl font-bold mt-2" data-testid="estimate-total">{formatLkr(result.totalMonthly)}</p></div>
        <p className="text-xs text-muted-foreground leading-relaxed my-5">Estimate only. Ad budget is paid directly to Meta from your own ad account. Travel for shoots outside Colombo may be extra. Your final quote is confirmed after a free strategy call.</p>
        <Button asChild className="social-whatsapp h-auto min-h-12 whitespace-normal w-full border-0 py-3"><a href={href} target="_blank" rel="noopener noreferrer" onClick={track}><MessageCircle className="h-4 w-4 mr-2 shrink-0" />Send this estimate on WhatsApp</a></Button>
      </div>
    </div>
    <div className="social-mobile-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-4 pt-3 lg:hidden"><Button asChild className="social-whatsapp w-full min-h-11 h-auto whitespace-normal border-0"><a href={href} target="_blank" rel="noopener noreferrer" onClick={track}>Send my estimate on WhatsApp</a></Button></div>
  </section>;
}