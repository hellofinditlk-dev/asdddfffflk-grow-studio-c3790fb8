# Lead Generation Campaigns Service Page

## Goal
Create a premium multichannel commercial service page at `/lead-generation-campaigns-sri-lanka` that sits above the existing channel-specific lead-generation pages and connects campaign acquisition to lead qualification and follow-up.

## Scope
- Build a dedicated service page with the supplied SEO title, description, canonical URL, H1, hero messaging, CTAs, Colombo contact details, and the exact non-guarantee positioning.
- Preserve the distinction from `/social-media-lead-generation-sri-lanka`: the new page covers Facebook, Instagram, Google, TikTok, LinkedIn, WhatsApp, landing pages, retargeting, qualification, reporting, and sales handoff as one multichannel service.
- Create a highly visual first screen with an audience-to-sales-opportunity funnel, followed by platform cards, a seven-step process, qualification and reporting visuals, industry cards, comparisons, a complete-funnel diagram, visible FAQs, and a final WhatsApp-focused contact section.
- Use the existing Cypher Digital editorial styling, purple brand color, orange actions, site fonts, semantic tokens, compact card styling, and mobile-first behavior.
- Use only factual supplied wording. Do not promise lead volume, conversion rate, cost per lead, or guaranteed outcomes.

## Content and internal links
- Include all 19 requested sections with proper H2/H3 hierarchy and one H1.
- Add contextual links throughout—not a link dump—to:
  - Social Media Lead Generation
  - Social Media Advertising
  - Google Ads
  - LinkedIn Marketing
  - Social Media Strategy
  - Social Media Campaigns
  - Lead Follow-Up Services, with the strongest handoff link in the dedicated generation-and-follow-up section
  - Homepage through a natural “Cypher Digital” reference
- Add a reciprocal contextual link from the Lead Follow-Up Services page so readers can move from lead generation to follow-up and back.
- Add the new umbrella service to the footer services list without changing the protected main social-media URL or top navigation structure.

## SEO and site integration
- Add `Organization`, `Service`, `BreadcrumbList`, and visible-FAQ-backed `FAQPage` structured data.
- Add crawlable breadcrumbs, dynamic page metadata, canonical, Open Graph, and Twitter metadata through the existing SEO setup.
- Register the lazy-loaded route, static-host route handling, sitemap entry, and edge-rendered metadata/H1.
- Add the page to the internal-link cluster as the preferred umbrella destination for general lead-generation articles, while preserving social-specific links for social-only articles.

## Technical details
- Create a focused page component using the project’s existing Button, breadcrumb, SEO, and link patterns.
- Keep all colors and shadows token-based; use the existing orange CTA token and branded typography.
- Use semantic HTML, accessible labels, visible focus states, responsive tables/diagrams, and reduced-motion-safe presentation.
- Keep phone and WhatsApp actions on the standard Cypher Digital number `+94 70 177 2626`.

## Verification
- Confirm the page builds without errors.
- Check the new URL at desktop and mobile widths for one H1, readable diagrams, working CTAs, visible FAQs, no horizontal overflow, correct metadata, schema, and all required internal links.
- Confirm the existing social lead-generation and lead-follow-up pages remain available and distinct.
