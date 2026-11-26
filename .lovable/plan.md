# Separate "Event Planning Sri Lanka" page: recommendation and plan

## Is it a good idea?
Yes, but only if the new page meets a different need than the existing event management page. If both pages are service pages saying the same thing, Google has to choose between them and may rank neither (this is called keyword cannibalisation).

- Semrush estimates about 320 monthly searches for "event planning Sri Lanka" and about 20 for "event management Sri Lanka".
- People searching "event planning" often want to know how to plan an event: steps, timelines, budgets, venues and permits. People searching "event management" usually want to hire a company.
- So the new page should be a **practical event planning guide for Sri Lanka**. It sends readers who are ready to book to `/event-management-sri-lanka`, which stays the main service page.

No page ranks first by guarantee. The aim is two useful pages that support each other.

## What the new page would contain (`/event-planning-sri-lanka`)
- One H1: "Event Planning in Sri Lanka: A Complete Step-by-Step Guide"
- At least 2,000 useful words with a Sri Lanka focus:
  - Planning timeline (for example 12 weeks, 6 weeks, 1 week, event day)
  - Budget breakdown by category. This explains cost factors only and does not invent prices.
  - Choosing a venue in Colombo and other cities, including seasons and monsoon timing
  - Permits, police approval and sound rules. Wording will stay general unless you confirm the details.
  - Vendors: AV, catering, décor, photography and staffing
  - Guides by event type: corporate, product launch, seminar and private events
  - A downloadable-style checklist section
  - When to hire an event management company, with a strong link to the service page
- Your real event photos from the existing gallery, reused with their captions
- FAQs that differ from the 12 on the service page
- WhatsApp CTA (076 031 7477) and an enquiry form
- Search details: its own title and description, canonical, breadcrumbs, Article, FAQ and Breadcrumb schema
- Content crawlers can read without running scripts, the same way as the event management page

## Linking
- The new page links to `/event-management-sri-lanka` 3 to 4 times, using wording such as "event management in Sri Lanka" and "hire an event management company".
- The event management page gets one small added link to the guide in its planning-guide section, with wording such as "full event planning guide for Sri Lanka". Nothing else on that page changes.
- The new page is added to the footer under Blog, to the sitemap and to llms.txt.
- Optional: a few existing event blog posts link to the new guide.

## Adjusting the event management page title (needs your approval)
The current title targets both keywords. To avoid the two pages competing, it could move to "Event Management Company in Sri Lanka | Cypher Digital" and leave "event planning" to the guide. I will only change it if you approve.

## What stays unchanged
All other pages, layouts, prices and phone numbers. No invented clients, reviews or figures.

## Technical details
- New lazy route plus its own page file and scoped styles. The page renderer is reused without changes.
- Prerendering through its own Vite generator and Netlify 200 rewrites for both URL forms. The edge function skips this one route.
- Tests: the raw HTML contains the guide and schema, and other routes stay byte-identical.
