import { describe, expect, it } from "vitest";
import { calculateSocialCost, defaultSocialCostInputs as defaults, socialEstimateMessage } from "@/lib/socialCostCalculator";

describe("supplied social media calculator rules", () => {
  it("starts with Basic 85000, management 25000 and budget 50000", () => {
    expect(calculateSocialCost(defaults)).toMatchObject({ name: "Basic", packageFee: 85000, adsManagementFee: 25000, adBudget: 50000, agencyFee: 110000, totalMonthly: 160000 });
  });
  it("recommends Silver at 15 posts", () => { expect(calculateSocialCost({ ...defaults, posts: 15 })).toMatchObject({ name: "Silver", packageFee: 100000 }); });
  it("recommends Silver for a location shoot", () => { expect(calculateSocialCost({ ...defaults, shoot: true }).name).toBe("Silver"); });
  it("recommends Gold at 20 posts", () => { expect(calculateSocialCost({ ...defaults, posts: 20 })).toMatchObject({ name: "Gold", packageFee: 150000 }); });
  it("LinkedIn overrides the Silver trigger", () => { expect(calculateSocialCost({ ...defaults, shoot: true, linkedin: true }).name).toBe("Gold"); });
  it("recommends Platinum above 20 posts", () => { expect(calculateSocialCost({ ...defaults, posts: 21 })).toMatchObject({ name: "Platinum", packageFee: 250000 }); });
  it("full TikTok strategy overrides Gold", () => { expect(calculateSocialCost({ ...defaults, linkedin: true, tiktok: true, fullTiktok: true }).name).toBe("Platinum"); });
  it("cross-posting TikTok leaves Basic unchanged", () => { expect(calculateSocialCost({ ...defaults, tiktok: true }).name).toBe("Basic"); });
  it("does not trigger full TikTok when TikTok is unchecked", () => { expect(calculateSocialCost({ ...defaults, fullTiktok: true }).name).toBe("Basic"); });
  it("includes three reels in Basic, Silver and Gold", () => { for (const posts of [12, 15, 20] as const) expect(calculateSocialCost({ ...defaults, posts, reels: 3 }).extraReelCost).toBe(0); });
  it("charges 30000 per extra reel", () => { expect(calculateSocialCost({ ...defaults, reels: 4 })).toMatchObject({ extraReels: 1, extraReelCost: 30000 }); });
  it("upgrades at exactly 250000 then recalculates using eight included reels", () => { expect(calculateSocialCost({ ...defaults, posts: 15, reels: 8 })).toMatchObject({ name: "Platinum", extraReels: 0, extraReelCost: 0 }); });
  it("keeps Silver below the 250000 threshold", () => { expect(calculateSocialCost({ ...defaults, posts: 15, reels: 7 })).toMatchObject({ name: "Silver", extraReelCost: 120000 }); });
  it("includes eight reels in Platinum", () => { expect(calculateSocialCost({ ...defaults, posts: 21, reels: 8 }).extraReelCost).toBe(0); });
  it("charges four extra reels at the 12 reel maximum", () => { expect(calculateSocialCost({ ...defaults, reels: 12 })).toMatchObject({ name: "Platinum", extraReels: 4, extraReelCost: 120000 }); });
  it("clears both advertising costs when ads are off", () => { expect(calculateSocialCost({ ...defaults, ads: false, budget: 300000 })).toMatchObject({ adsManagementFee: 0, adBudget: 0, totalMonthly: 85000 }); });
  it("caps ad budget at 300000", () => { expect(calculateSocialCost({ ...defaults, budget: 500000 }).adBudget).toBe(300000); });
  it("uses 10000 budget steps", () => { expect(calculateSocialCost({ ...defaults, budget: 54000 }).adBudget).toBe(50000); });
  it("allows zero reels without lowering package fees", () => { expect(calculateSocialCost({ ...defaults, reels: 0 })).toMatchObject({ packageFee: 85000, extraReelCost: 0 }); });
  it("sends the selected inputs and actual estimated total", () => { expect(socialEstimateMessage({ ...defaults, posts: 15, shoot: true })).toContain("Estimated total: LKR 175,000/month"); });
});