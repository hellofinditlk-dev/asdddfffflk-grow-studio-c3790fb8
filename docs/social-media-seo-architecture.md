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

## Phase 1 — Core commercial pages (added 2026-09-18)

Audit first: all 216 existing routes and 46 social/Facebook articles were checked.
None of the five URLs below existed in equivalent form, so each is a genuine gap, not a duplicate.

| URL | Primary keyword | Intent | Type | Status | Words | Parent | Internal links out | Canonical | Schema | CTA | Cannibalisation risk |
|---|---|---|---|---|---|---|---|---|---|---|---|
| /social-media-strategy-sri-lanka | social media strategy Sri Lanka | Commercial, planning buyer | Commercial support | New | ~2,450 | Pillar | pillar, advertising, campaigns, packages, content creation, lead gen, audit, platform pages | self | Service, BreadcrumbList | Free strategy, WhatsApp, call, form | None — no existing strategy page or equivalent article |
| /social-media-content-creation-sri-lanka | social media content creation Sri Lanka | Production buyer | Commercial support | New | ~2,190 | Pillar | pillar, design, reel creation, AI video, advertising, packages, campaigns, strategy | self | Service, BreadcrumbList | Free strategy, WhatsApp, call, form | Low — /social-media-design-sri-lanka covers design only, linked not duplicated |
| /social-media-lead-generation-sri-lanka | social media lead generation Sri Lanka | Lead-gen buyer | Commercial support | New | ~2,270 | Pillar | pillar, advertising, Facebook Ads, campaigns, strategy, audit, LinkedIn, packages | self | Service, BreadcrumbList | Free strategy, WhatsApp, call, form | Low — /blog/lead-generation-strategies-sri-lanka-2026 is informational and broader |
| /social-media-audit-sri-lanka | social media audit Sri Lanka | Lead-gen / audit request | Commercial support | New | ~2,050 | Pillar | pillar, strategy, consultant, advertising, lead gen, content creation, Facebook Ads, packages | self | Service, BreadcrumbList | Request an audit, WhatsApp, call, form | None |
| /social-media-consultant-sri-lanka | social media consultant Sri Lanka | Advisory buyer | Commercial support | New | ~2,060 | Pillar | pillar, audit, strategy, advertising, lead gen, content creation, platform pages, packages | self | Service, BreadcrumbList | Free consultation, WhatsApp, call, form | Low — agency-intent articles kept, consultant vs agency comparison is distinct |

Technical state for all five: lazy routes in `src/App.tsx`, 200 rules in `public/_redirects`, `public/sitemap.xml` entries (priority 0.9),
title/description/H1 in `netlify/edge-functions/inject-meta.ts`, Navbar Social Media dropdown, Footer services column,
and cards in the pillar's "Go Deeper" grid (no orphan pages). No fabricated prices, results, clients, ratings or reviews.
No changes to `/social-media-management-sri-lanka` beyond adding five internal links.

### Not created in this phase (deliberate)
- No cost/pricing article — existing `/blog/social-media-management-cost-sri-lanka` and the packages page already own that intent.
- Facebook cluster (Phase 2), measurement articles (Phase 3) and industry social pages (Phase 4) remain pending, in that order.

## Phase 2 — Facebook authority cluster (added 2026-09-18)

Audit decision: six requested topics resolved to three new commercial pages and three strengthened existing URLs. No redirects or duplicate intent pages were added.

| Topic owner | Search intent | Action | Parent / authority flow | Cannibalisation control |
|---|---|---|---|---|
| `/blog/facebook-campaign-strategy-guide-sri-lankan-brands` | Facebook marketing strategy, informational | UPDATE existing article | Links to protected pillar and Facebook Ads hub | Kept established URL; no new strategy URL |
| `/facebook-ads-cost-sri-lanka` | Facebook advertising cost, commercial | CREATE | Child of Facebook Ads hub; links to packages and lead generation | Separates platform spend, LKR 25,000 management and creative |
| `/social-media-lead-generation-sri-lanka` | Facebook and WhatsApp lead generation, commercial | STRENGTHEN existing page | Supports protected pillar and Facebook Ads hub | No competing `/facebook-lead-generation-sri-lanka` |
| `/facebook-retargeting-sri-lanka` | Facebook retargeting service, commercial | CREATE | Child of Facebook Ads hub; receives link from broad remarketing article | Broad `/blog/remarketing-retargeting-ads-sri-lanka` remains educational across platforms |
| `/facebook-ad-design-sri-lanka` | Facebook ad creative/design, commercial | STRENGTHEN existing page | Links conceptually to Facebook Ads and campaign articles | No competing creative URL |
| `/facebook-page-management-sri-lanka` | Facebook Page management service, commercial | CREATE | Supports protected pillar; receives link from existing page-management article | Informational blog remains separate and unchanged in URL |

All Phase 2 paths are linked from `/social-media-management-sri-lanka` and `/facebook-ads-sri-lanka`. The protected pillar address remains unchanged. The three new commercial paths have self-referencing canonicals, Service and BreadcrumbList schema, FAQs visible on-page, lead forms, WhatsApp/call CTAs, sitemap entries, 200 routing rules and server-rendered metadata.
