# Social Media Marketing — Search Visibility Build

## Guiding rule
The existing page at `/social-media-management-sri-lanka` stays exactly where it is. No new URL, no redirect, no duplicate copy of it. Everything new points support at it.

## What already exists (checked)
- Main social media page: `/social-media-management-sri-lanka` — keep the address, reposition the content around "social media marketing in Sri Lanka".
- Platform pages already live: Facebook Ads, Instagram, TikTok, LinkedIn.
- Around 40 social-media articles already published, including three that cover packages/pricing and one on agencies. These get improved and linked, not replaced.

## Decisions to avoid competing with ourselves
- No page at `/social-media-marketing-sri-lanka`.
- Packages: build one proper packages page at `/social-media-marketing-packages-sri-lanka`, using only the real current rates already on the site. The two existing package articles stay live and link to it as the main pricing page.
- Agency vs companies: build the agency page first. The separate "companies" comparison page only gets built if it can say something genuinely different; otherwise the agency page covers both.
- Industry social pages and case studies are held back until real project details are supplied, so nothing is invented.

## Phase 1 — Reposition the main page (this round)
Rewrite and extend `/social-media-management-sri-lanka` in place:
- Title, description and main heading centred on social media marketing in Sri Lanka.
- Full coverage: what social media marketing is, each service, each platform, how the work runs step by step, organic vs paid comparison, Sri Lanka specifics (Sinhala/Tamil/English, Colombo/Kandy/Galle/Negombo, Avurudu, tourism and school-intake seasons, WhatsApp enquiries), content strategy with a sample month, advertising funnel, campaigns, a short packages summary linking out, cost factors, how to choose an agency, 12–18 real FAQs.
- Existing pricing tables, portfolio proof, payback card and WhatsApp buttons all stay.
- Links out to the new pages plus Facebook Ads, Instagram, TikTok, LinkedIn, and the strongest existing articles.
- No invented clients, numbers, ratings or reviews. Anything unverified is left out.

## Phase 2 — Three supporting pages (this round)
1. `/social-media-advertising-sri-lanka` — paid social: Facebook, Instagram, TikTok, LinkedIn ads, targeting, creative, funnel stages, budgets, the metrics that matter, reporting.
2. `/social-media-campaigns-sri-lanka` — campaign planning and running: objectives, launches, promotions, seasonal and event campaigns, planning steps, sample campaign frameworks for Sri Lankan businesses.
3. `/social-media-marketing-packages-sri-lanka` — the pricing home: current packages, what each includes, add-ons, fee vs ad budget explained plainly, how to choose, pricing FAQs.

Each gets its own heading structure, breadcrumbs, hero/mid/bottom calls to action, WhatsApp button, lead form (name, business, industry, phone, email, website, goal, monthly budget), and around 2,500 words of genuinely different content.

## Phase 3 onward (later rounds, on your go-ahead)
Facebook marketing hub and Facebook page management, agency page, industry social pages, case studies, calculators, and tidying overlapping articles.

## Technical work included
- Routes added, breadcrumb data, self-referencing canonicals via the existing SEO component.
- Server-side title/description/heading injection for the new pages so crawlers see real text.
- `_redirects` entries so the new pages return 200 on the live domain (the site 404s new paths otherwise).
- Sitemap entries for new pages only; no redirects, no duplicates. Robots file already allows everything.
- Navigation and footer links so nothing is orphaned; a Social Media grouping in the menu.
- Schema limited to Service and BreadcrumbList that match visible content.

## Deliverable
An architecture report file listing every URL in the cluster: primary keyword, intent, new or existing, keep/update, parent, internal links, canonical, schema, and risk notes.

## Not doing
No URL changes, no redirects of existing pages, no deletions, no duplicate-intent pages, no invented statistics, results, clients or reviews.
