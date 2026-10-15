import { useState } from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import { siStripe, siPaypal, siWise, siSlack, siTrello, siFigma, siCanva, siAdobe } from 'simple-icons';
import { Input } from '@/components/ui/input';
import { partnerPackages, partnerRates, partnerMoney, partnerProfit, type PartnerCurrency } from '@/data/white-label-partners';

export function PartnerCurrencyPicker({ currency, onChange }: { currency: PartnerCurrency; onChange: (value: PartnerCurrency) => void }) {
  return <div className="wl-currency"><label htmlFor="partner-currency">Display currency</label><select id="partner-currency" value={currency} onChange={e => onChange(e.target.value as PartnerCurrency)}>{Object.keys(partnerRates).map(code => <option key={code}>{code}</option>)}</select><p>GBP, EUR & AUD are indicative estimates, not live rates. Invoiced in USD.</p></div>;
}

export function PartnerGuarantee() {
  return <div className="wl-guarantee"><ShieldCheck size={28} /><div><strong>Redo or refund</strong><span>Guarantee terms awaiting confirmation</span></div></div>;
}

export function PartnerProfitCalculator({ currency }: { currency: PartnerCurrency }) {
  const [packageId, setPackageId] = useState('posts20');
  // Keep resale in USD internally so changing currency preserves the same amount.
  const [resaleUsd, setResaleUsd] = useState<number | null>(600);
  const pack = partnerPackages.find(item => item.id === packageId) ?? partnerPackages[0];
  const valid = resaleUsd !== null && Number.isFinite(resaleUsd) && resaleUsd >= 0 && resaleUsd <= 1000000;
  const profit = partnerProfit((resaleUsd ?? 0) * partnerRates[currency], pack.price, currency);
  const format = (value: number) => new Intl.NumberFormat('en', { style: 'currency', currency, currencyDisplay: 'code', maximumFractionDigits: 2 }).format(value);
  return <section className="wl-calculator" id="profit"><div className="wl-section-inner"><div className="wl-9">Your margin, your business</div><h2 className="wl-25">Profit calculator</h2><div className="wl-calculator-layout"><div className="wl-calculator-inputs"><label htmlFor="profit-package">Your monthly package<select id="profit-package" value={packageId} onChange={e => setPackageId(e.target.value)}>{partnerPackages.map(item => <option key={item.id} value={item.id}>{item.name} — {partnerMoney(item.price, currency)}/month</option>)}</select></label><label htmlFor="resale-price">Your monthly resale price ({currency})<Input id="resale-price" type="number" min="0" max={1000000 * partnerRates[currency]} step="0.01" value={resaleUsd === null ? '' : Number((resaleUsd * partnerRates[currency]).toFixed(2))} onChange={e => setResaleUsd(e.target.value === '' ? null : Number(e.target.value) / partnerRates[currency])} /></label><p>Package cost: <strong>{partnerMoney(pack.price, currency, 2)}/month</strong></p></div><div className="wl-profit-results" aria-live="polite"><div><span>Monthly gross profit / client</span><output>{valid ? format(profit.monthly) : '—'}</output></div><div><span>Yearly gross profit / client</span><output>{valid ? format(profit.yearly) : '—'}</output></div></div></div><p className="wl-calculator-note">Resale price minus package cost, before tax, payment fees and your operating costs. Yearly assumes 12 months. Subscription profit assumes the whole subscription is allocated to one client; this is an estimate, not a guarantee.</p>{!valid && <p role="alert">Enter a resale price between 0 and {format(1000000 * partnerRates[currency])}.</p>}</div></section>;
}

export function PartnerTrustRow() {
  const payments = [siStripe, siPaypal, siWise];
  const tools = [siSlack, siTrello, siFigma, siCanva, siAdobe];
  const logos = (items: typeof payments) => items.map(icon => <span className="wl-brand-mark" key={icon.title}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>{icon.title}</span>);
  return <section className="wl-trust-row" aria-label="Partner platforms"><div className="wl-section-inner"><div className="wl-trust-group"><span className="wl-9">Payment options · to confirm</span><div className="wl-brand-list">{logos(payments)}</div></div><div className="wl-trust-group"><span className="wl-9">Your workflow</span><div className="wl-brand-list">{logos(tools)}</div></div><div className="wl-review-placeholder"><Star size={22} /><strong>Reviews coming soon</strong><span>Rating & review source to be added</span></div></div></section>;
}
