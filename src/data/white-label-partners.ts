export type PartnerCurrency = 'USD' | 'GBP' | 'EUR' | 'AUD';
// Display estimates, not live FX quotes. All billing remains USD.
export const partnerRates: Record<PartnerCurrency, number> = { USD: 1, GBP: 0.75, EUR: 0.87, AUD: 1.53 };
export const partnerPackages = [
  { id: 'posts12', name: 'Posts 12', price: 179 },
  { id: 'posts20', name: 'Posts 20', price: 289 },
  { id: 'posts30', name: 'Posts 30', price: 419 },
  { id: 'reels4', name: 'Reels 4', price: 159 },
  { id: 'reels8', name: 'Reels 8', price: 299 },
  { id: 'reels12', name: 'Reels 12', price: 449 },
  { id: 'ads10', name: 'Creatives 10', price: 379 },
  { id: 'ads25', name: 'Creatives 25', price: 899 },
  { id: 'ads50', name: 'Creatives 50', price: 1649 },
  { id: 'unlimited', name: 'Unlimited · one active request', price: 800 },
  { id: 'unlimited2', name: 'Unlimited · two active requests', price: 1199 },
];
export function partnerMoney(usd: number, currency: PartnerCurrency, decimals = 0) {
  return new Intl.NumberFormat('en', { style: 'currency', currency, currencyDisplay: 'code', maximumFractionDigits: decimals }).format(usd * partnerRates[currency]);
}
export function partnerProfit(resale: number, costUsd: number, currency: PartnerCurrency) {
  const monthly = resale - costUsd * partnerRates[currency];
  return { monthly, yearly: monthly * 12 };
}
// Owner-provided URLs only; leave empty until real media and booking details are supplied.
export const partnerMedia = {
  founderVideoUrl: '',
  calendlyUrl: '',
  team: [
    { name: '', role: 'Founder', photo: '' },
    { name: '', role: 'Dedicated account manager', photo: '' },
    { name: '', role: 'Creative designer', photo: '' },
    { name: '', role: 'Motion & video editor', photo: '' },
  ],
};