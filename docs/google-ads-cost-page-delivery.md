# Page 1 delivery check — Google Ads Cost

- New route: `/google-ads-cost-sri-lanka` (preview only; not published).
- New files: `src/pages/GoogleAdsCost.tsx`, `src/content/google-ads-cost-sri-lanka.md`, `src/lib/newSeoMarkdown.ts`, `src/styles/new-seo-pages.css`, `src/test/new-seo-markdown.test.ts`.
- Existing page modules, links, URLs, metadata, header, footer, shared components, sitemap entries and robots rules were not changed. `src/App.tsx` has only the new lazy import and exact new route; project guidance/task files were updated.
- Preview HTTP status: 200; no noindex found.
- Raw HTML in preview now contains the full new page content, one H1, page-specific title/description/canonical, Open Graph/Twitter tags, all 11 body links and Service + FAQPage + BreadcrumbList schema. HTTP 200, index/follow. Published delivery remains unverified until publishing.
- Approved new-page-only mechanism: `scripts/new-page-prerender.ts` generates per-route HTML from the explicit allowlist in `src/data/new-seo-pages.ts`, using `scripts/new-page-html.ts`. The plugin was added to `vite.config.ts`; only the new URL was added to the existing Netlify rewrite list. Existing entries and the root `index.html` were not changed. Generation is capped at 11 pages. Initial article HTML is replaced with the interactive React page after scripts load.
- Existing-page safeguard: tests confirm the generator returns the original HTML byte-for-byte for `/social-media-advertising-sri-lanka` and `/`. The existing service page still returns 200 and its client-rendered content remains unchanged; its prior lack of full raw article text was not altered.
- Seven focused tests passed; browser checks passed with no page errors. Build signal: build OK. Build-time static output still needs deployment verification; no manual project build or publish was performed.
- Browser verification: one H1, correct title/canonical, Service + FAQPage + BreadcrumbList, 11 content sections, seven FAQs, 24 placeholder occurrences; desktop/mobile render, FAQ opens, CTA points to WhatsApp, no horizontal overflow or page errors.
- Reused unchanged InquiryForm and portfolio/PaybackCard. Guarantee card describes social-media-package publicity, not a Google Ads refund or performance guarantee.

## Visible unique placeholders
- [ADD REAL LKR RANGE]
- [ADD REAL PRICE]
- [ADD REAL CPC RANGE]
- [ADD REAL LKR AMOUNT]
- [ADD REAL RANGE]
- [CONFIRM: fixed fee only, or percentage of ad spend above a certain level?]
- [CONFIRM: current Google Ads billing currency and payment options available to Sri Lankan advertisers.]

## Supplied body internal links (exact anchors)
- landing page design → `/landing-page-design-sri-lanka`
- SEO packages Sri Lanka → `/blog/seo-packages-sri-lanka`
- advertising cost in Sri Lanka → `/blog/advertising-cost-sri-lanka-2026`
- free Google Ads audit → `/google-ads-audit-sri-lanka`
- Google Ads specialist → `/google-ads-specialist-sri-lanka`
- Google Ads Sri Lanka → `/google-ads-sri-lanka`
- how to set up Google Ads → `/blog/how-to-set-up-google-ads-sri-lanka`
- Facebook ads cost in Sri Lanka → `/facebook-ads-cost-sri-lanka`
- Facebook marketing in Sri Lanka → `/facebook-ads-sri-lanka`
- social media advertising in Sri Lanka → `/social-media-advertising-sri-lanka`
- Talk to our team → `/contact`

New-page links also include the unchanged shared site navigation/footer/portfolio links, the Home/Services breadcrumb and H2 jump links. Links to later new pages are retained exactly as supplied and do not resolve yet.
