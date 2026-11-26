# Event interlinking plan: rank and convert for "event management" and "event planning" Sri Lanka

## The problem the data shows
- Google Search Console (28 Oct to 24 Nov): "event management sri lanka" shows the **Corporate Event Management** page at position about 19. The main **Event Management Sri Lanka** page appears only for the brand name. The two pages are competing for the same search.
- Semrush (Sri Lanka): "event planning sri lanka" gets about 320 searches a month and "event management sri lanka" about 20. Planning searchers are mostly still researching. Management searchers are ready to hire.

## Structure (hub and spokes)

```text
            Event Planning Sri Lanka (guide, research intent)
                    |  "hire an event management company"
                    v
   Event Management Sri Lanka  (MAIN HUB, hiring intent, enquiry form)
      ^        ^          ^          ^           ^
 Corporate  Product    Wedding    Event      Blog posts / other
 events     launches   planning   marketing  services (support links)
```

1. **The hub is the target for "event management Sri Lanka".** Every event page links to it with the exact or close anchor text "event management Sri Lanka" once, high up in the body.
2. **The child pages give that phrase up.** On Corporate Event Management, change the title, H1 and wording so it targets "corporate event management Sri Lanka" / "corporate event planners". It keeps one clear link up to the hub. This stops it from outranking the hub.
3. **The guide is the target for "event planning Sri Lanka".** Other pages link to it with "event planning Sri Lanka" / "event planning guide". The guide passes readers to the hub with 3 to 4 links that use hiring wording ("hire an event management company in Sri Lanka", "get an event quote").
4. **The hub links down to each child** (corporate, product launch, wedding, event marketing) and once to the guide. It does not reuse the guide's anchor text for itself.
5. **Vary the anchor text.** Use a mix of exact phrases, partial phrases ("event organisers in Sri Lanka"), and branded ones ("Cypher Digital's event team"). Avoid the same exact phrase dozens of times.
6. **Links that bring enquiries.** On every event page, put a WhatsApp button (076 031 7477) and a short-form link next to the in-text links. On the guide, add a "Planning an event? Get a free plan in 24 to 48 hours" box after step 3 and at the end.

## Build steps
1. Audit every existing link to the hub, guide and corporate page, and record the anchor text of each.
2. Retarget the Corporate Event Management page title, description and H1 to "corporate" wording. The body copy stays the same apart from small anchor edits.
3. Make anchor fixes so each page uses the intent shown above. Edit existing sentences, with no new thin pages.
4. Add the hub-to-child "event services" link block on the hub, using the existing card style.
5. Add the guide's enquiry boxes with the existing WhatsApp/contact tracking.
6. Recheck in Search Console 3 to 4 weeks after publishing.

## Pending decision
- The hub title change ("Event Management Company in Sri Lanka | Cypher Digital") is still unanswered. The plan assumes this title for the hub so the guide alone targets "event planning".

## Technical notes
- Add anchor/link updates only to the existing route renderers, as with earlier link work. Shared data strings and other metadata stay the same.
- Update `docs/event-page-incoming-links.md`. Prerendered HTML for the hub and guide is regenerated automatically.
- Add a test that the corporate page no longer uses "event management Sri Lanka" as its title/H1, and that the hub and guide link to each other.
- No ranking is guaranteed.
