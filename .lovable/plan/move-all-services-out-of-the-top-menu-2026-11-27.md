# Move all services out of the top menu

## Top menu after the change
- Logo (Home), Industries dropdown, Our Work, Call button, Get Started button.
- Removed: the Social Media dropdown with its 14 items, Google Ads, Graphic Design, AI Visibility, AI Video and All Services. This applies on both desktop and mobile.

## Footer
- Every removed service is already listed in the footer's Services column, and so are the nine new pages. Nothing needs to be added.

## Not changed
- The pages and their addresses, the related-services links, and the footer layout stay the same.

## Technical details
- In `Navbar.tsx`, remove the `socialItems` and `navLinks` menus and their mobile versions, plus the now-unused state.
- Update the navigation rule in project memory, which currently says "Home + 7 core services".
- Check desktop and phone layouts in the preview. Not published.
