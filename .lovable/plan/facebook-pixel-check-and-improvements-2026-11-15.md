# Facebook Pixel check and improvements

## What I found
- Pixel 3313756385458871 is installed and loads on the live site (cypherdigital.lk).
- It sends a PageView only when someone first opens the site.
- When visitors click to other pages, no new PageView is sent, so Facebook undercounts visits.
- No Lead or Contact events are sent when someone submits the WhatsApp contact form, calls, or sends a brief, so Facebook cannot optimise ads for leads.

## Proposed fixes
1. Send a PageView each time the visitor moves to another page (no double-count on the first page).
2. Send a "Lead" event after the WhatsApp contact form is saved, and after other inquiry forms succeed.
3. Send a "Contact" event on call button clicks.
4. Skip all tracking on admin pages.
5. Check in the browser that each event fires once.

## Technical details
- Route listener in App using `useLocation`, skipping the initial render and `/admin`.
- Small `src/lib/metaPixel.ts` helper (`trackPixel`) guarded for missing `window.fbq`; called from WhatsappContactDialog success, form success handlers and trackCallClick.
- Unit test for the helper (admin skip, no-fbq safety).
