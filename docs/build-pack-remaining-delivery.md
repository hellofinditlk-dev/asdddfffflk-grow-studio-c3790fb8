# Remaining build-pack pages

Eight new pages created; existing Product Photography and All Services copy remain unchanged. No publishing, menu/footer additions or optional sentences on existing pages.

## New routes
- `/advertising-agency-sri-lanka`
- `/digital-marketing-consultant-sri-lanka`
- `/photoshoot-sri-lanka`
- `/corporate-photography-colombo`
- `/web-development-sri-lanka`
- `/ecommerce-website-sri-lanka`
- `/outdoor-advertising-sri-lanka`
- `/email-marketing-sri-lanka`

## Owner-only details omitted from visible copy and schema
No invented figures or promises. Supply these to complete the relevant sections:
- `/advertising-agency-sri-lanka`: [Add 4–6 real client logos with permission.]
- `/advertising-agency-sri-lanka`: Do you book TV, radio and newspaper media directly? — We plan and book media across Sri Lankan TV channels, radio stations, newspapers and outdoor sites for you. [Note: edit to match how you book media.]
- `/digital-marketing-consultant-sri-lanka`: **Team coaching** Workshops for your in-house marketing team on content, ads and reporting. [Note: remove if you don't offer this.]
- `/digital-marketing-consultant-sri-lanka`: - A follow-up review call [Note: adjust to your offer]
- `/digital-marketing-consultant-sri-lanka`: How long does a consultation take? — Usually [X days] from the discovery call to the final plan, depending on how many channels we review.
- `/photoshoot-sri-lanka`: Optional drone footage omitted pending confirmation
- `/photoshoot-sri-lanka`: - Drone shots for hotels, real estate and events [Note: remove if you don't offer drone]
- `/photoshoot-sri-lanka`: 5. **Delivery.** High-resolution files plus ready-to-post versions in [X working days].
- `/photoshoot-sri-lanka`: [Gallery: 9–12 real shoot images and 3 reels, grouped by industry, linking to [our work](/our-work)]
- `/photoshoot-sri-lanka`: Who owns the photos and videos? — [State your usage-rights policy.]
- `/corporate-photography-colombo`: We set up a mobile studio in a meeting room in [30–45 minutes]. Staff come in by scheduled time slot, get photographed and go back to work. We cover Colombo and the suburbs, and travel island-wide for larger shoots.
- `/corporate-photography-colombo`: [Add 4–6 real client logos with permission.]
- `/corporate-photography-colombo`: 5. **Delivery.** High-resolution files plus web and LinkedIn sizes in [X working days].
- `/corporate-photography-colombo`: [Gallery: 6–9 real images (headshots, team, product, event), linking to [our work](/our-work)]
- `/corporate-photography-colombo`: How many headshots can you shoot in a day? — Usually [40–80] people, depending on outfit changes and poses.
- `/corporate-photography-colombo`: How long does delivery take? — [X working days] for most shoots, with rush delivery for events.
- `/corporate-photography-colombo`: Who owns the photos? — [State your usage-rights policy.]
- `/web-development-sri-lanka`: **CMS websites** Sites you can update yourself, built on [the CMS you use, e.g. WordPress or a headless CMS].
- `/web-development-sri-lanka`: **Web apps and booking systems** Booking, quotation, membership and enquiry systems tailored to how your business works. [Note: keep only what you build.]
- `/web-development-sri-lanka`: **Speed, security and maintenance** Performance tuning, SSL, backups and updates after launch. [Note: edit to match your maintenance offer.]
- `/web-development-sri-lanka`: - **You own your site,** with domain, hosting and code in your name [Note: confirm]
- `/web-development-sri-lanka`: [Gallery: 3–6 real website screenshots with one-line results, linking to [our work](/our-work)]
- `/web-development-sri-lanka`: How long does a website take to build? — Usually [X–Y weeks], depending on the number of pages and features.
- `/ecommerce-website-sri-lanka`: **Store design and build** Mobile-first product, category, cart and checkout pages designed to convert, built on [platform you use, e.g. Shopify, WooCommerce or custom].
- `/ecommerce-website-sri-lanka`: **Local payments** Card payments and local gateways [e.g. PayHere – list the ones you integrate], plus cash on delivery and bank transfer options.
- `/ecommerce-website-sri-lanka`: - **Starter store.** Up to [X] products, essential pages and local payments.
- `/ecommerce-website-sri-lanka`: [Gallery: 3–4 real store screenshots with one-line results, linking to [our work](/our-work)]
- `/ecommerce-website-sri-lanka`: How long does an ecommerce website take? — Usually [X–Y weeks], depending on the number of products and features.
- `/outdoor-advertising-sri-lanka`: **Transit advertising** Bus, three-wheeler and vehicle branding that moves through your target areas. [Note: keep only the formats you book.]
- `/outdoor-advertising-sri-lanka`: How long does it take to get a billboard up? — Usually [X–Y days] after booking and artwork approval, depending on site availability.
- `/email-marketing-sri-lanka`: **Platform setup** Setup and management on [platforms you use, e.g. Mailchimp, Brevo or Klaviyo], with your website and store connected.

## Missing destinations
These are plain text until their pages exist:

## Files
Created: `src/data/buildPackPages.ts`, `src/lib/buildPackInquiry.ts`, `src/lib/buildPackMarkdown.ts`, `src/components/BuildPackInquiryForm.tsx`, `src/components/BuildPackPageLayout.tsx`, `scripts/build-pack-html.ts`, `scripts/build-pack-prerender.ts`, `src/test/build-pack-inquiry.test.ts`, this report, and eight new page wrappers:
- `src/pages/AdvertisingAgencySriLanka.tsx`
- `src/pages/DigitalMarketingConsultantSriLanka.tsx`
- `src/pages/PhotoshootSriLanka.tsx`
- `src/pages/CorporatePhotographyColombo.tsx`
- `src/pages/WebDevelopmentSriLanka.tsx`
- `src/pages/EcommerceWebsiteSriLanka.tsx`
- `src/pages/OutdoorAdvertisingSriLanka.tsx`
- `src/pages/EmailMarketingSriLanka.tsx`

Changed only registration/configuration and task records: `src/App.tsx`, `vite.config.ts`, `public/sitemap.xml`, `public/_redirects` (new-route 200 rewrites only), `netlify/edge-functions/inject-meta.ts` (new routes bypass generic replacement), `AGENTS.md`, `roadmap.md`.

Existing page titles, meta descriptions, canonicals, URLs, text, images, shared controls and styles remain unchanged. The supplied brief is short; it has not been padded to 2,500 words or expanded with unsupported claims.
