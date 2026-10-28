export type SocialPackage = "Basic" | "Silver" | "Gold" | "Platinum";
export interface SocialCostInputs {
  tiktok: boolean;
  fullTiktok: boolean;
  linkedin: boolean;
  posts: 12 | 15 | 20 | 21;
  shoot: boolean;
  reels: number;
  ads: boolean;
  budget: number;
}
export const socialPackageRates = {
  Basic: { fee: 85000, reels: 3, description: "12 posts · 3 stock-footage reels · Facebook, Instagram and TikTok cross-posting" },
  Silver: { fee: 100000, reels: 3, description: "15 posts · 3 reels from a 4-hour location shoot · Facebook, Instagram and TikTok cross-posting · 1 email campaign" },
  Gold: { fee: 150000, reels: 3, description: "20 posts · Location-shot reels (3 assumed for this estimate; confirm count) · LinkedIn and TikTok cross-posting · 2 email campaigns" },
  Platinum: { fee: 250000, reels: 8, description: "Unlimited posts · 8 reels from an 8-hour shoot · Facebook, Instagram, LinkedIn and TikTok managed · 4 email campaigns" },
} as const;
export const defaultSocialCostInputs: SocialCostInputs = { tiktok: false, fullTiktok: false, linkedin: false, posts: 12, shoot: false, reels: 3, ads: true, budget: 50000 };
export const formatLkr = (amount: number) => `LKR ${amount.toLocaleString("en-US")}`;
export function calculateSocialCost(input: SocialCostInputs) {
  let name: SocialPackage = "Basic";
  if (input.posts === 15 || input.shoot) name = "Silver";
  if (input.posts === 20 || input.linkedin) name = "Gold";
  if (input.posts === 21 || (input.tiktok && input.fullTiktok)) name = "Platinum";
  const reels = Math.max(0, Math.min(12, Math.round(input.reels)));
  let extraReels = Math.max(0, reels - socialPackageRates[name].reels);
  if (name !== "Platinum" && socialPackageRates[name].fee + extraReels * 30000 >= 250000) {
    name = "Platinum";
    extraReels = Math.max(0, reels - socialPackageRates[name].reels);
  }
  const packageFee = socialPackageRates[name].fee;
  const extraReelCost = extraReels * 30000;
  const adsManagementFee = input.ads ? 25000 : 0;
  const adBudget = input.ads ? Math.max(0, Math.min(300000, Math.round(input.budget / 10000) * 10000)) : 0;
  const agencyFee = packageFee + extraReelCost + adsManagementFee;
  return { name, packageFee, extraReels, extraReelCost, adsManagementFee, adBudget, agencyFee, totalMonthly: agencyFee + adBudget };
}
export function socialEstimateMessage(input: SocialCostInputs) {
  const result = calculateSocialCost(input);
  const platforms = ["Facebook", "Instagram", ...(input.tiktok ? [input.fullTiktok ? "TikTok (full strategy)" : "TikTok (cross-posting)"] : []), ...(input.linkedin ? ["LinkedIn"] : [])];
  return `Hi Cypher Digital, I used your cost calculator. Package: ${result.name}. Platforms requested: ${platforms.join(", ")}. Posts: ${input.posts === 21 ? "More than 20" : input.posts}/month. Reels: ${input.reels}/month. Shoot requested: ${input.shoot ? "yes" : "no"}. Package baseline: ${formatLkr(result.packageFee)}. Extra reels: ${result.extraReels} (${formatLkr(result.extraReelCost)}). Ads management estimate: ${formatLkr(result.adsManagementFee)}. Agency fee estimate: ${formatLkr(result.agencyFee)}. Ad budget paid to Meta: ${formatLkr(result.adBudget)}. Estimated total: ${formatLkr(result.totalMonthly)}/month. Please confirm reel format/count, included campaign management, travel, taxes and payment terms in my final quote. Can we talk?`;
}