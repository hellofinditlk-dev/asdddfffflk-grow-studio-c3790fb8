# Link the eight new pages from service pages and navigation

New pages: Advertising Agency, Digital Marketing Consultant, Photoshoot, Corporate Photography Colombo, Web Development, Ecommerce Website, Outdoor Advertising, Email Marketing (plus the All Services page).

## 1. Navigation
- Top menu: keep the existing items. Add one "All Services" item pointing to `/digital-marketing-services-sri-lanka`, which already links to every new page. This respects the rule that the menu stays short.
- Footer: add the eight pages under the existing services columns, using short labels.

## 2. Links from related existing service pages
Add one small "Related services" box near the end of each page, above the final call to action. Existing copy, headings, images and metadata stay unchanged.

| Existing page | Links to |
|---|---|
| Advertising in Sri Lanka (pillar) | Advertising Agency, Outdoor Advertising |
| Newspaper, TV and Radio Advertising | Advertising Agency, Outdoor Advertising |
| Google Ads, Facebook Ads | Advertising Agency, Digital Marketing Consultant |
| Social Media Consultant | Digital Marketing Consultant |
| SEO Services | Web Development, Ecommerce Website |
| Product Photography | Photoshoot, Corporate Photography Colombo |
| Content Creation | Photoshoot, Corporate Photography Colombo |
| Lead Follow-up Services, Email marketing blog guide | Email Marketing |
| Graphic Design | Web Development, Photoshoot |

Also link the new pages to each other where it makes sense (for example Web Development and Ecommerce Website, Photoshoot and Corporate Photography).

## Technical details
- Add one reusable `RelatedNewServices` component that takes a list of links and is placed through each page's existing end-of-page slot. No shared layout changes.
- Add the footer links and one navbar item in `Footer.tsx` and `Navbar.tsx`.
- Add a test confirming every linked address exists as a route.
- Check each page on phone and desktop. Not published.
