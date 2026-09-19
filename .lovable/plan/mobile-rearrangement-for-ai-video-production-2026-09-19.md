# Mobile rearrangement for AI Video Production

## Goal
Make the AI Video Production page easier to scan and act on from a phone without changing its content, prices, or video.

## Changes
- Move the promotional video above the proof figures on mobile so visitors see it much earlier.
- Keep the desktop two-column presentation, while giving mobile a clear order: headline, message and actions, video, then key figures.
- Change the four proof figures to a compact 2×2 mobile grid instead of a tall single column.
- Make the main actions equal-width and easy to tap on small screens.
- Reduce oversized mobile spacing and heading sizes while preserving the current visual style.
- Show work samples in a compact two-column mobile gallery; keep service and package cards as readable single-column lists.
- Improve the comparison table’s mobile scrolling and keep cards, labels, and package prices within the screen.

## Verification
- Check the page at common phone and desktop widths.
- Confirm the autoplay video, package jump, WhatsApp links, video samples, and pricing remain functional.
- Check for horizontal overflow, overlapping text, and preview errors.

## Technical details
- Restructure only the hero wrappers needed for responsive ordering.
- Add page-scoped mobile CSS inside the existing AI video page.
- Do not change routes, SEO copy, pricing data, or backend behavior.
