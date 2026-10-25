# Batch 2 continued delivery

Articles 13–21 are added and checked in preview. Not published.

## Checks
- All nine initial HTML responses return 200 with complete source Markdown, unique title/description/canonical, one H1, Article + FAQPage + BreadcrumbList and no noindex.
- 41 targeted tests passed. Blog listing → article 13 → FAQ → Google Ads CTA passed. Every new article image, FAQ and phone width passed without runtime errors.
- Existing page modules, shared controls, header, footer, robots and original raw HTML response remain unchanged. Existing redirect lines remain unchanged. Ten new sitemap entries were appended after all articles were created.
- Existing social-media-advertising page was unchanged; it already lacked full body content before scripts run.

## Newspaper article: fifteen placeholders
All fifteen tokens were replaced by cited publisher guidance, transparent quote requests and rate-card date caveats. This does NOT mean fifteen current prices were verified. Current 2026 title-specific rates are still unavailable; no old rate has been advertised as a current figure.
Official publisher pages identified: Lake House main-papers, supplement, advertise-with-us and deadline-for-submission-of-advertising-materials; Wijeya rate-card; Virakesari contact. Direct sandbox fetches of Lake House pages returned HTTP 403; research findings were based on official-page searchable information. Current dated publisher quotes remain required.

## New source files
- src/components/BatchTwoArticlePage.tsx (new-article-only renderer)
- src/pages/BatchTwoArticle13.tsx and src/content/ads-support-sri-lanka.md
- src/pages/BatchTwoArticle14.tsx and src/content/meta-ads-payment-sri-lanka.md
- src/pages/BatchTwoArticle15.tsx and src/content/facebook-boost-price-sri-lanka.md
- src/pages/BatchTwoArticle16.tsx and src/content/web-design-price-sri-lanka.md
- src/pages/BatchTwoArticle17.tsx and src/content/student-lead-generation-sri-lanka.md
- src/pages/BatchTwoArticle18.tsx and src/content/hire-social-media-manager-sri-lanka.md
- src/pages/BatchTwoArticle19.tsx and src/content/youtube-seo-sri-lanka.md
- src/pages/BatchTwoArticle20.tsx and src/content/sri-lanka-tv-channels-advertising-guide.md
- src/pages/BatchTwoArticle21.tsx and src/content/social-media-statistics-sri-lanka-2026.md

## Per-article verification and remaining placeholders

### Article 13: /blog/ads-support-sri-lanka
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 6
- [CONFIRM]
- [CONFIRM]
- [CONFIRM]
- [CONFIRM]
- [CONFIRM which options apply]
- [CONFIRM current availability and minimum budgets.]
Internal links:
- Google payment methods → https://support.google.com/google-ads/answer/2375433?hl=en-GB
- Google billing options → https://support.google.com/google-ads/answer/1704418?hl=en
- Google location targeting → https://support.google.com/google-ads/answer/1722043?hl=en
- Meta payment options → https://www.facebook.com/business/help/212763688755026
- TikTok account-creation country list → https://ads.tiktok.com/help/article/available-countries-and-regions-for-ad-account-creation-in-bc
- payment-method guidance → https://support.google.com/google-ads/answer/2375433?hl=en-GB
- Google Ads Sri Lanka → /google-ads-sri-lanka
- Google Ads cost → /google-ads-cost-sri-lanka
- YouTube ads → /youtube-ads-sri-lanka
- Meta ads payment in Sri Lanka → /blog/meta-ads-payment-sri-lanka
- Facebook advertising in Sri Lanka → /facebook-ads-sri-lanka
- Instagram ads → /instagram-ads-sri-lanka
- budget guidance → https://www.linkedin.com/help/lms/answer/a422101
- LinkedIn marketing → /linkedin-marketing-sri-lanka
- self-serve Business Center account-creation list → https://ads.tiktok.com/help/article/available-countries-and-regions-for-ad-account-creation-in-bc
- TikTok ads → /tiktok-ads-sri-lanka
- TikTok marketing → /tiktok-marketing-sri-lanka
- social media advertising in Sri Lanka → /social-media-advertising-sri-lanka
- Talk to our ads team → /google-ads-sri-lanka (end CTA)

### Article 14: /blog/meta-ads-payment-sri-lanka
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 7
- [CONFIRM]
- [CONFIRM which billing types are available for Sri Lanka]
- [CONFIRM availability for Sri Lankan accounts]
- [CONFIRM current availability of local billing in Sri Lanka]
- [CONFIRM whether Meta currently has authorised sales partners or local billing partners operating in Sri Lanka, and name them only if confirmed on Meta's official pages.]
- [CONFIRM: whether Cypher Digital can manage ad billing on behalf of clients, and on what terms.]
- [CONFIRM: whether Meta currently supports LKR as an ad account currency and local payment methods in Sri Lanka.]
Internal links:
- Facebook marketing in Sri Lanka → /facebook-ads-sri-lanka
- Facebook ads cost in Sri Lanka → /facebook-ads-cost-sri-lanka
- Instagram ads → /instagram-ads-sri-lanka
- social media advertising in Sri Lanka → /social-media-advertising-sri-lanka
- ads support in Sri Lanka → /blog/ads-support-sri-lanka
- Get help with Facebook ads → /facebook-ads-sri-lanka (end CTA)

### Article 15: /blog/facebook-boost-price-sri-lanka
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 8
- [ADD REAL LKR AMOUNT]
- [ADD REAL LKR AMOUNT]
- [ADD REAL LKR AMOUNT]
- [ADD REAL RANGE]
- [ADD REAL RANGE]
- [ADD REAL RANGE]
- [CONFIRM current minimum daily budget in LKR or USD.]
- [ADD REAL LKR AMOUNT]
Internal links:
- Facebook ads cost in Sri Lanka → /facebook-ads-cost-sri-lanka
- social media marketing packages Sri Lanka → /blog/social-media-marketing-packages
- Facebook marketing in Sri Lanka → /facebook-ads-sri-lanka
- Instagram ads → /instagram-ads-sri-lanka
- Meta ads payment in Sri Lanka → /blog/meta-ads-payment-sri-lanka
- Get a Facebook ads plan → /facebook-ads-sri-lanka (end CTA)

### Article 16: /blog/web-design-price-sri-lanka
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 30
- [ADD REAL RANGE]
- [ADD TIMEFRAME]
- [ADD REAL RANGE]
- [ADD TIMEFRAME]
- [ADD REAL RANGE]
- [ADD TIMEFRAME]
- [ADD REAL RANGE]
- [ADD TIMEFRAME]
- [ADD REAL RANGE]
- [ADD TIMEFRAME]
- [ADD REAL RANGES based on Cypher Digital's pricing and current market rates.]
- [ADD CURRENT PRICE]
- [ADD CURRENT PRICE]
- [ADD CURRENT PRICE]
- [ADD CURRENT PRICE]
- [CONFIRM typical fees]
- [ADD]
- [ADD]
- [ADD]
- [ADD]
- [ADD]
- [ADD]
- [ADD]
- [ADD REAL PRICE]
- [ADD REAL PRICE]
- [ADD REAL PRICE]
- [ADD REAL PRICE]
- [ADD REAL RANGE]
- [ADD TIMEFRAME]
- [ADD TIMEFRAME]
Internal links:
- SEO packages Sri Lanka → /blog/seo-packages-sri-lanka
- web design Sri Lanka → /web-design-sri-lanka
- Google Ads Sri Lanka → /google-ads-sri-lanka
- web design guide → /blog/web-design-sri-lanka
- Get a free website quote → /web-design-sri-lanka (end CTA)

### Article 17: /blog/student-lead-generation-sri-lanka
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 2
- [CONFIRM current exam result timelines]
- [ADD REAL RANGE]
Internal links:
- Google Ads Sri Lanka → /google-ads-sri-lanka
- social media advertising in Sri Lanka → /social-media-advertising-sri-lanka
- lead follow-up services → /lead-follow-up-services-sri-lanka
- how to qualify leads → /blog/how-to-qualify-leads
- education marketing agency in Sri Lanka → /education-marketing-agency-sri-lanka
- lead generation campaigns → /lead-generation-campaigns-sri-lanka
- digital marketing for schools and tuition classes → /blog/digital-marketing-schools-tuition-classes-sri-lanka
- Get an intake campaign plan → /education-marketing-agency-sri-lanka (end CTA)

### Article 18: /blog/hire-social-media-manager-sri-lanka
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 9
- [ADD REAL LKR RANGE]
- [ADD REAL LKR RANGE]
- [ADD REAL PRICE]
- [ADD REAL RANGE]
- [ADD REAL RANGE]
- [ADD REAL RANGE]
- [ADD REAL LKR RANGE]
- [ADD REAL PRICE]
- [CONFIRM languages offered.]
Internal links:
- digital marketing salary in Sri Lanka → /blog/digital-marketing-salary-sri-lanka-2026
- freelancer vs agency → /blog/freelancer-vs-digital-marketing-agency-sri-lanka
- social media marketing packages Sri Lanka → /blog/social-media-marketing-packages
- social media marketing company in Sri Lanka → /social-media-management-sri-lanka
- social media content creation → /social-media-content-creation-sri-lanka
- social media consultant → /social-media-consultant-sri-lanka
- outsourcing social media management → /blog/outsource-social-media-management-sri-lanka
- Talk to our social media team → /social-media-management-sri-lanka (end CTA)

### Article 19: /blog/youtube-seo-sri-lanka
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 1
- [CONFIRM: YouTube channel management offered as a service.]
Internal links:
- graphic design → /graphic-design-sri-lanka
- video production in Sri Lanka → /video-production-sri-lanka
- Reel creation → /reel-creation-sri-lanka
- YouTube ads → /youtube-ads-sri-lanka
- SEO services → /seo-services-sri-lanka
- Grow your YouTube reach → /youtube-ads-sri-lanka (end CTA)

### Article 20: /blog/sri-lanka-tv-channels-advertising-guide
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 3
- [CONFIRM: check current channel line-up, ownership and language before publishing. Do NOT add viewership rankings or audience share figures unless taken from a current, named research source – add [ADD AUDIENCE DATA + SOURCE]
- [CONFIRM typical prime-time hours by channel.]
- [ADD AUDIENCE DATA + SOURCE if available.]
Internal links:
- TV advertising rates → /blog/tv-advertising-rates-sri-lanka
- video production in Sri Lanka → /video-production-sri-lanka
- TV advertising in Sri Lanka → /tv-advertising-sri-lanka
- media buying agency → /media-buying-agencies-sri-lanka
- YouTube ads → /youtube-ads-sri-lanka
- radio advertising in Sri Lanka → /radio-advertising-sri-lanka
- advertising cost in Sri Lanka → /blog/advertising-cost-sri-lanka-2026
- Plan my TV campaign → /tv-advertising-sri-lanka (end CTA)

### Article 21: /blog/social-media-statistics-sri-lanka-2026
Initial HTML and browser checks: passed.
Remaining placeholder occurrences: 41
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT if available]
- [ADD SOURCE + DATE]
- [CONFIRM this summary matches the figures added above.]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT]
- [ADD SOURCE + DATE]
- [ADD STAT + SOURCE + DATE]
- [ADD ANSWER based on the sourced figures above.]
- [ADD ANSWER based on the sourced figures above.]
Internal links:
- best time to post on social media in Sri Lanka → /blog/best-time-to-post-social-media-sri-lanka
- Reel creation → /reel-creation-sri-lanka
- WhatsApp marketing → /whatsapp-marketing-sri-lanka
- Sinhala vs English social media → /blog/sinhala-vs-english-social-media-sri-lanka
- influencer marketing → /influencer-marketing-sri-lanka
- social media advertising in Sri Lanka → /social-media-advertising-sri-lanka
- social media marketing trends in Sri Lanka → /blog/social-media-marketing-trends-sri-lanka-2026
- social media marketing Sri Lanka → /social-media-management-sri-lanka
- social media marketing packages Sri Lanka → /blog/social-media-marketing-packages
- Get my social media plan → /social-media-management-sri-lanka (end CTA)

## Remaining evidence gaps
Current newspaper rate cards; account-specific platform billing/eligibility; Cypher pricing, salaries, package scope, languages, channel-management commitments; local campaign benchmarks; current sourced statistical tables. These remain unresolved rather than fabricated.
