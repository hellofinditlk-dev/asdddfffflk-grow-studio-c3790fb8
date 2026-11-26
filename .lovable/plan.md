# Four more supporting event articles (batch 2)

These come after the four already planned (venues, budget, planner vs company, product launch). Same standards: at least 2,000 words each, Sri Lanka specific, FAQ, CTA, no made-up prices or proof, one article at a time for your approval.

## Search data (Semrush, Sri Lanka)
| Search term | Searches/month | Difficulty |
|---|---|---|
| award ceremony | ~720 | Moderate (32) |
| graduation ceremony | ~210 | Low (0) |
| annual get together | ~110 | Low (0) |
| event decoration | ~110 | Low (0) |
| event management courses in sri lanka | ~390 | Low (12) |

Skipped: "event management courses" draws students, not clients, so it would bring traffic but few enquiries.

## The four articles

5. **How to Plan an Award Ceremony in Sri Lanka** (`/blog/award-ceremony-planning-sri-lanka`)
   - Covers categories and judging, the programme running order, stage and lighting, guest seating, media and photography, and the timeline.
   - Links: hub ("event management Sri Lanka"), Corporate Event Management, guide ("event planning Sri Lanka").

6. **Annual Get-Together Ideas for Sri Lankan Companies** (`/blog/annual-get-together-ideas-sri-lanka`)
   - Covers themes, venue types, activities, family days, budgeting by category, and timing around Avurudu, Poya days and December.
   - Links: guide (planning anchors), hub ("corporate event organisers in Sri Lanka"), Event Venues article.

7. **Planning a Graduation or Inauguration Ceremony in Sri Lanka** (`/blog/graduation-inauguration-ceremony-planning-sri-lanka`)
   - Covers protocol and the running order, guest of honour arrangements, stage, flags and lectern, seating, photography and the group photo.
   - Uses your real University of Kelaniya DBA and MHRM photos as evidence of work you have actually done.
   - Links: hub, guide, Corporate Event Management.

8. **Event Decoration Ideas in Sri Lanka: Stage, Backdrop and Venue Styling** (`/blog/event-decoration-ideas-sri-lanka`)
   - Covers backdrops and branding, florals, lighting, entrance and photo areas, and rules on what venues allow. Ideas are matched to corporate, launch and private events.
   - Uses the FoodCycler launch and fashion shoot photos.
   - Links: hub, Product Launch Events, Wedding Planning, guide.

## Interlinking pattern (all 8 articles)
```text
 Articles 1–8 ──> Event Planning guide ("event planning Sri Lanka")
             └──> Event Management hub ("event management Sri Lanka", varied anchors)
 Guide ──> "Related reading" block (planning-style articles: 1, 2, 3, 6)
 Hub   ──> "Helpful guides" block (hire-style articles: 4, 5, 7, 8)
 Articles also link to each other where useful (e.g. 6 -> 1 venues, 5 -> 8 decoration)
```
Anchor text varies between exact, partial and branded wording so the same phrase isn't repeated everywhere.

## Visibility in AI search
- Each article opens with a 2–3 sentence direct answer, then uses question-style H2s, short lists and an FAQ. AI tools quote this kind of structure most easily.
- Article, FAQ and breadcrumb schema on every article. Each is added to the sitemap and the AI-readable site summary (llms.txt).
- Pages are readable without JavaScript, using the same approach as the event planning guide.
- Real photos with descriptive captions build trust. Claims are only ones you've supplied.

## Order
Finish the first batch (budget, planner vs company, product launch), then 5 to 8, one at a time. After the first batch, add the related-reading blocks and the no-JavaScript versions for all the articles.

## Technical notes
- Add the articles to the existing `eventArticles` dataset and `EventArticle` page, then register the routes, blog list entries, sitemap, llms.txt and the WhatsApp event line.
- Extend the interlink test so every article links to both main pages.
