import { useState } from 'react';
import { CalendarDays, Play, UserRound, ShieldCheck, Star, ArrowUpRight } from 'lucide-react';
import { siStripe, siPaypal, siWise, siSlack, siTrello, siFigma, siCanva, siAdobe } from 'simple-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { partnerMedia, partnerPackages, partnerRates, partnerMoney, partnerProfit, type PartnerCurrency } from '@/data/white-label-partners';

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

export function PartnerTeam() {
  return <section className="wl-36" id="team"><div className="wl-9">People behind your creatives</div><h2 className="wl-25">Meet the team</h2><div className="wl-founder"><div className="wl-video-frame">{partnerMedia.founderVideoUrl ? <iframe src={partnerMedia.founderVideoUrl} title="Meet our founder · 60 seconds" loading="lazy" allow="fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" /> : <div className="wl-media-placeholder"><Play size={44} /><strong>Meet our founder · 60 seconds</strong><span>Founder video coming soon</span></div>}</div><div><h3 className="wl-38">A creative team behind your agency</h3><p className="wl-64">Fluent English communication. A dedicated account manager. Designers and editors who work under your brand.</p><Button asChild variant="link" className="wl-work-enquire"><a href="#sample">Meet your creative partner<ArrowUpRight size={18} /></a></Button></div></div><div className="wl-team-grid">{partnerMedia.team.map((person, index) => <article className="wl-team-member" key={index}>{person.photo ? <img src={person.photo} alt={person.name} loading="lazy" /> : <div className="wl-team-photo"><UserRound size={48} /><span>Team photo coming soon</span></div>}<h3>{person.name || 'Name to be added'}</h3><p>{person.role}</p></article>)}</div></section>;
}

export function PartnerBooking() {
  return <section className="wl-booking" id="partner-call"><div className="wl-section-inner"><div className="wl-9">Let’s talk partnership</div><h2 className="wl-25">Book a 15-min partner call</h2>{partnerMedia.calendlyUrl ? <iframe className="wl-calendly" src={`${partnerMedia.calendlyUrl}?embed_type=Inline&hide_gdpr_banner=1`} title="Book a 15-minute partner call on Calendly" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : <div className="wl-booking-placeholder"><CalendarDays size={36} /><div><strong>Partner-call calendar coming soon</strong><p>Send your agency brief to connect with our team.</p></div><Button asChild className="wl-button"><a className="wl-13" href="#sample">Send agency brief<ArrowUpRight size={18} /></a></Button></div>}</div></section>;
}