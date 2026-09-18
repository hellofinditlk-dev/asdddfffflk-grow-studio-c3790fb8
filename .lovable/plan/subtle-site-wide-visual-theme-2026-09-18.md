# Subtle site-wide visual theme

## Goal
Carry a restrained version of the new homepage hero style across public pages while preserving all existing content, page structure, SEO, and calls to action.

## Changes
- Add reusable editorial theme styles using the existing purple, soft blue, lime, and orange design tokens.
- Apply a faint grid texture and soft lavender tint to selected light sections, not every section.
- Give shared cards a slightly sharper 8px shape, understated offset shadow, and small lift on interaction.
- Add subtle marker-style accents to selected section headings and eyebrow labels.
- Apply the treatment through shared service, social media, industry, design-service, portfolio, blog, and general public-page wrappers.
- Keep dark sections dark, preserve existing orange and WhatsApp buttons, and exclude admin pages.
- Respect reduced-motion settings and verify desktop and mobile views.

## Technical details
- Add a route-aware public-site theme wrapper in the main application shell.
- Define the visual treatment centrally in the global stylesheet so individual page content remains untouched.
- Use semantic design tokens only; no new page-specific hardcoded colors.
