# Social Media Marketing SEO Architecture — Cypher Digital

Last updated: 2026-09-18

## Protected asset

`/social-media-management-sri-lanka` — unchanged URL, no redirect, no duplicate.
All new pages support it. No page created at `/social-media-marketing-sri-lanka`.

## Architecture table

| URL | Primary keyword | Secondary keywords | Intent | Type | Status | Action | Words | Parent | Internal links out | Canonical | Schema | CTA | Backlink risk | Migration risk |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| /social-media-management-sri-lanka | social media marketing Sri Lanka | social media management Sri Lanka, social media agency Sri Lanka, social media marketing services Sri Lanka | Broad commercial pillar | Pillar | Existing | UPDATE (content + cluster links only) | 4,000+ | Home | advertising, campaigns, packages, Facebook Ads, Instagram, TikTok, LinkedIn, reels, our work | self | Service, FAQPage, Breadcrumb | WhatsApp + packages + form | High (direct backlinks) — protected | None (URL untouched) |
| /social-media-advertising-sri-lanka | social media advertising Sri Lanka | paid social Sri Lanka, social media ads Sri Lanka, social media advertising agency Sri Lanka | Paid social buyer | Commercial support | New | CREATE | ~2,700 | Pillar | pillar, campaigns, packages, Facebook Ads, Instagram, TikTok, LinkedIn, reels | self | Service, BreadcrumbList | Free strategy, WhatsApp, call, form | None | None |
| /social-media-campaigns-sri-lanka | social media campaigns Sri Lanka | social media campaign agency Sri Lanka, campaign planning Sri Lanka | Campaign planning/execution | Commercial support | New | CREATE | ~2,600 | Pillar | pillar, advertising, packages, platform pages, reels, event marketing | self | Service, BreadcrumbList | Free strategy, WhatsApp, call, form | None | None |
| /social-media-marketing-packages-sri-lanka | social media marketing packages Sri Lanka | social media packages Sri Lanka, social media marketing cost/pricing Sri Lanka | Pricing/comparison | Commercial support | New | CREATE | ~2,500 | Pillar | pillar, advertising, campaigns, Facebook Ads, reels, AI video, blog cost posts | self | Service, BreadcrumbList | Package-specific WhatsApp, form | None | None |
| /facebook-ads-sri-lanka | Facebook Ads Sri Lanka | Facebook advertising Sri Lanka | Paid Facebook | Platform | Existing | NO CHANGE | — | Pillar | pillar, advertising | self | Service, FAQPage | Existing | Medium | None |
| /instagram-marketing-sri-lanka | Instagram marketing Sri Lanka | Instagram Ads Sri Lanka | Platform | Platform | Existing | NO CHANGE | — | Pillar | pillar | self | Service | Existing | Low | None |
| /tiktok-marketing-sri-lanka | TikTok marketing Sri Lanka | TikTok Ads Sri Lanka | Platform | Platform | Existing | NO CHANGE | — | Pillar | pillar | self | Service | Existing | Low | None |
| /linkedin-marketing-sri-lanka | LinkedIn marketing Sri Lanka | LinkedIn Ads Sri Lanka | Platform B2B | Platform | Existing | NO CHANGE | — | Pillar | pillar | self | Service | Existing | Low | None |
| /reel-creation-sri-lanka | reel creation Sri Lanka | Instagram Reels Sri Lanka | Production | Support | Existing | NO CHANGE | — | Pillar | pillar, packages | self | Service | Existing | Low | None |

## Deferred (not created)

| URL | Reason held |
|---|---|
| /social-media-marketing-agency-sri-lanka | Blog post `/blog/social-media-marketing-agency-sri-lanka` already ranks for this intent. Build only if SERP data shows a commercial page is needed that the pillar does not already satisfy. |
| /social-media-marketing-companies-sri-lanka | Overlaps heavily with the agency intent and with `/blog/top-rated-social-media-management-companies-sri-lanka`. Needs a genuinely different comparison angle before creation. |
| /facebook-marketing-sri-lanka, /facebook-page-management-sri-lanka | Facebook Ads page currently also targets "Facebook marketing Sri Lanka" in its title and meta. Splitting requires re-focusing the existing page first to avoid cannibalisation. |
| Industry social pages (hotel, restaurant, real estate, education, healthcare, ecommerce) | Existing industry pages already cover these verticals. New social-specific pages only where genuinely unique material exists. |
| /social-media-marketing-case-studies and /case-studies/* | Blocked pending verified client results. No fabricated metrics. |
| Calculators (ROI, budget, cost) | Phase 6. |

## Existing blog cluster classification

- KEEP + link to packages page: `/blog/social-media-marketing-packages`, `/blog/social-media-marketing-packages-sri-lanka`, `/blog/social-media-packages-sri-lanka`, `/blog/social-media-management-cost-sri-lanka`
- KEEP + link to advertising page: `/blog/organic-social-media-vs-paid-ads-sri-lanka`, `/blog/complete-guide-facebook-ads-businesses-sri-lanka`, `/blog/get-more-customers-facebook-ads-sri-lanka`
- KEEP + link to campaigns page: `/blog/social-media-campaign-ideas-sri-lanka`, `/blog/how-to-run-social-media-campaign-sri-lanka`, `/blog/facebook-campaign-strategy-guide-sri-lankan-brands`
- KEEP as-is (agency intent): `/blog/social-media-marketing-agency-sri-lanka`, `/blog/best-social-media-agencies-sri-lanka-small-businesses`, `/blog/top-rated-social-media-management-companies-sri-lanka`, `/blog/signs-you-need-social-media-agency-sri-lanka`
- No redirects, no deletions, no merges executed in this phase.

## Technical state

- Routes registered in `src/App.tsx` (lazy-loaded, crawlable HTML links from navbar and footer).
- Server-side title, description and H1 injection added in `netlify/edge-functions/inject-meta.ts` for all three new URLs.
- `public/_redirects` 200 rules added so the live domain does not return 404.
- `public/sitemap.xml` entries added for the three new canonical URLs only.
- Self-referencing canonicals via `SEOHead`; BreadcrumbList and Service schema per page; no fabricated ratings, reviews or results.
- `public/robots.txt` already allows all crawlers; no change required.

## Monitoring after publish

Record before/after for `/social-media-management-sri-lanka`: clicks, impressions, CTR, average position, top queries. Submit the updated sitemap and request indexing for the three new URLs. Do not stack further major changes on the pillar until two to four weeks of data are available.
