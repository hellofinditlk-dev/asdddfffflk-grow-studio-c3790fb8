# Batch 2 — Article 12 delivery

Route: /blog/newspaper-advertising-rates-sri-lanka

## Verification
- Preview HTTP 200; one H1; correct title, description and canonical; complete supplied Markdown body, internal links and Article/FAQPage/BreadcrumbList schema in initial HTML; no noindex.
- Existing prerender plugin: scripts/new-page-prerender.ts; appended registration in src/data/new-seo-pages.ts. Owner-approved cap increased to 21 in scripts/new-page-html.ts.
- Existing social-media-advertising initial HTML byte-for-byte unchanged. Its full body was already absent before JavaScript; this limitation was not altered.
- Blog listing registration added; listing component unchanged. Existing page modules, header, footer, root HTML, sitemap and robots unchanged. No existing route or redirect entry edited.
- New source files: src/content/newspaper-advertising-rates-sri-lanka.md and src/pages/BatchTwoArticle12.tsx. Generated illustrative newspaper image: src/assets/newspaper-advertising-guide.jpg (not publisher evidence).
- Not published. Sitemap addition deferred until all ten articles are completed.
- All 21 targeted tests passed; blog listing → article → open FAQ → newspaper service CTA verified in browser with no runtime errors. Desktop and 390px phone layouts checked with no horizontal overflow. Existing global blog promotions still appear before the article header; shared promotion components were left unchanged.

## Initial placeholders (15 occurrences; subsequently replaced)
- [CONFIRM current tax treatment]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [CONFIRM: check each publisher's current rate card, colour surcharges and Sunday premiums before publishing this table.]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [CONFIRM typical deadlines]
- [ADD CURRENT RATE]
- [ADD CURRENT RATE]
- [CONFIRM typical deadlines]

## Internal article links
- newspaper advertising in Sri Lanka → /newspaper-advertising-sri-lanka
- media buying agency → /media-buying-agencies-sri-lanka
- social media advertising in Sri Lanka → /social-media-advertising-sri-lanka
- advertising cost in Sri Lanka → /blog/advertising-cost-sri-lanka-2026
- TV advertising rates → /blog/tv-advertising-rates-sri-lanka
- Get a newspaper ad quote → /newspaper-advertising-sri-lanka (end CTA)

## Continued delivery update
The owner approved articles 13–21 in the same continued run. All fifteen newspaper tokens were replaced with publisher guidance, current-quote requests and explicit caveats about the located 2023 Lake House rate card; no current 2026 numeric price was fabricated. The article now has zero placeholder tokens, but current title-specific rates still require dated publisher quotes. Ten new sitemap entries were subsequently appended after completing the batch. See batch-two-continued-delivery.md for verification, new source links and remaining evidence gaps.
