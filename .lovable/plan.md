# Supporting blog articles for the two event pages

## Search data (Semrush, Sri Lanka)
| Search term | Searches/month | Difficulty |
|---|---|---|
| event planner sri lanka | ~320 | Low (16) |
| event management companies in sri lanka | ~260 | Low (13) |
| event venues in colombo | ~110 | Low (0) |
| event budget / event checklist / product launch ideas | ~20 each | Low |

## The four articles

1. **Event Venues in Colombo: How to Choose the Right Venue for Your Event** (`/blog/event-venues-colombo-guide`)
   - Covers types of venues (hotel ballrooms, conference halls, outdoor and garden venues, universities), capacity, parking, AV, monsoon backup, and questions to ask a venue.
   - Names only well-known public venue types, with no prices or rankings. Uses your Taj Samudra and University of Kelaniya photos as real examples.
   - Links: "event planning Sri Lanka" to the guide, "event management company in Sri Lanka" to the hub.

2. **Event Budget Planning in Sri Lanka: What to Include and Where Costs Go** (`/blog/event-budget-planning-sri-lanka`)
   - Covers budget categories (venue, catering, AV, decor, staffing, promotion, contingency), how to ask for quotes and how to compare them.
   - No invented prices; costs are explained as "ask for a written quote".
   - Links: guide ("step-by-step event planning guide"), hub ("get a custom event quote").

3. **Event Planner vs Event Management Company in Sri Lanka: Which Do You Need?** (`/blog/event-planner-vs-event-management-company-sri-lanka`)
   - Targets "event planner sri lanka". Explains the difference, when to hire each, what to ask, and red flags.
   - Links: hub ("event management Sri Lanka", "event management companies in Sri Lanka"), guide ("event planning Sri Lanka").

4. **Product Launch Event Ideas for Sri Lankan Brands** (`/blog/product-launch-event-ideas-sri-lanka`)
   - Covers launch formats, venue staging, media and influencer invitations, and how to promote the event online. Uses the FoodCycler launch photos as a real example.
   - Links: Product Launch Events page, hub, Event Marketing page.

Also, instead of writing a fifth article, refresh the existing post **"Corporate Event Management Sri Lanka: How to Choose the Right Agency"**. Add one link to the hub with the anchor "event management companies in Sri Lanka". Its text and title stay the same.

## Links back from the main pages
- **Event Planning guide:** a "Related reading" block links to articles 1 to 3. One in-text link to the venues article goes in the venue step, and one to the budget article goes in the budget step.
- **Event Management hub:** a "Helpful guides" block links to all four articles.
- Each article ends with a WhatsApp CTA (076 031 7477), the enquiry form and an FAQ.

## Standards for each article
- At least 2,000 words, practical and specific to Sri Lanka, one H1, breadcrumbs, Article + FAQ schema, unique title and description.
- No made-up prices, client names, results or reviews. Facts not supplied by you are left out.
- Delivered one article at a time for your approval, following your earlier article rule. Nothing goes live until you publish.

## Technical notes
- Register each article in the blog dataset and lazy router, then add it to the sitemap, llms.txt and the capped HTML allowlist. Use dedicated wrappers, not existing templates.
- Add the related-reading blocks only to the two event route renderers.
- Add a test that checks each article links to both main pages and that the guide and hub link back to the articles.
