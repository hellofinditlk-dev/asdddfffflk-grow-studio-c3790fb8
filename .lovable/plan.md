# Meta titles and descriptions for the event pages

## Approach
- Each page targets one main search so the pages don't compete with each other. The hub targets "event management Sri Lanka", the guide targets "event planning Sri Lanka", and each service page targets its own type of event.
- Titles put the main keyword first and stay under about 60 characters, so Google doesn't cut them off.
- Descriptions are about 140 to 160 characters. Each one answers "what do I get", gives one real fact (14 real event photos, a written proposal within 24 to 48 hours, WhatsApp 076 031 7477) and ends with an action.
- No ranking promises, prices or other claims that can't be backed up. Phrases like "unforgettable" and "maximize ROI" are removed.

## Recommended copy

| Page | Title | Description |
|---|---|---|
| Event Management Sri Lanka (hub) | Event Management Company in Sri Lanka \| Cypher Digital | Event management in Sri Lanka for corporate events, launches, ceremonies and activations. Venue, suppliers and on-site coordination. Get a proposal in 24–48 hours. |
| Event Planning Sri Lanka (guide) | Event Planning Sri Lanka: Step-by-Step Guide & Checklist | How to plan an event in Sri Lanka: timeline, budget, venues, monsoon timing, approvals, suppliers and a free checklist. Real examples from our events. |
| Corporate Event Management | Corporate Event Management Sri Lanka \| Conferences & Seminars | Corporate event management in Sri Lanka for conferences, seminars, inaugurations and staff events. One team for venue, AV, suppliers and guests. Request a proposal. |
| Product Launch Events | Product Launch Events Sri Lanka \| Launch Planning & Staging | Plan a product launch in Sri Lanka with venue, staging, media invitations and on-day coordination, plus event promotion. Share your brief on WhatsApp. |
| Event Marketing | Event Marketing Sri Lanka \| Promote Events & Fill Seats | Event marketing in Sri Lanka: social media campaigns, ads, registrations and reminders to drive attendance. Combine it with event management. Get a plan. |
| Wedding Planning | Wedding Planning Sri Lanka \| Wedding Coordination Services | Wedding planning in Sri Lanka: venue shortlisting, decor, suppliers and day-of coordination for your celebration. Tell us your date for a custom proposal. |

The "| Cypher Digital" brand is dropped from long titles where it would be cut off. Google still shows the brand name in search results.

## Pending decision
- The hub title change was asked earlier and not answered. Approving this plan approves "Event Management Company in Sri Lanka | Cypher Digital" for the hub.

## Technical notes
- Update the `SEOHead` props on each page, the hub's `EVENT_TITLE`/`EVENT_DESCRIPTION` and the guide's `PLANNING_TITLE`/`PLANNING_DESCRIPTION`. The prerendered HTML picks them up automatically.
- Update the matching entries in `netlify/edge-functions/inject-meta.ts`, so what crawlers read matches the page.
- Update the og/twitter titles that are generated from these values. Headings (H1) and body copy stay the same.
- Update the existing prerender tests for the new titles, then verify each page title in the browser.
