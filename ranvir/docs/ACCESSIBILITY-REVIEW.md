# Focused desktop accessibility review

Reviewed September 16, 2026, against main at `b4437692`, using the Chromium-based in-app browser at 1280 × 720. This is a focused implementation review, not a WCAG conformance claim or a participant study.

## Changes retained

- Added a first keyboard stop, **Skip to profile**, visible only on focus. Enter moves focus into the biography without changing companion selection or URL history.
- Enabled text selection and gave selected text an opaque highlight.
- Lightened the OOC paragraph opening letters without changing typography or spacing.

All 178 existing elements inside the main container had identical bounding rectangles before and after these edits at the tested viewport. No artwork URLs, panel dimensions, or panel positions changed.

## Checks performed

- First Tab reveals the skip link; Enter focuses the biography with its visible outline.
- End scrolls the biography; Tab exits to character details. Existing keyboard movement can bring the skills panel into view without a focus trap.
- Section links activate and align the corresponding section. Keyboard activation of Blix updates its current-friend indicator.
- The OOC reading panel scrolls with End.
- The accessibility tree exposes the main content, section headings, named reading regions, and music button.
- Reduced-motion handling was reviewed in source; the system preference was not emulated in this pass.

## Reference color checks

Ratios below use solid CSS color pairs and the sRGB contrast formula. They do not measure every gradient, transparent layer, or artwork background.

| Text or indicator | Foreground / background | Ratio |
| --- | --- | --- |
| Navigation | `#eee3ed` / `#211b20` | 13.56:1 |
| Selection | `#ffffff` / `#51364e` | 10.57:1 |
| Reading-panel focus | `#efb58f` / `#261e18` | 9.11:1 |
| OOC opening letter, before | `#513c81` / `#261e18` | 1.81:1 |
| OOC opening letter, after | `#d7b7e8` / `#261e18` | 9.23:1 |

## Retained limitations

- Some decorative gradient headings remain low contrast. Broad recoloring was excluded to preserve the requested design.
- The fixed desktop composition can extend beyond shorter viewports. Responsive redesign and moving boxes or images were excluded by scope.
- Unrelated empty links remain as requested; this review does not certify every link as functional.
- External artwork did not render in this local session. Color results are reference checks, not a full rendered-art contrast audit.
- No assistive-technology session, full zoom/reflow audit, or broad cross-browser test was performed.

The focused pass is complete within the layout-preservation constraint. These limitations are documented rather than addressed through a redesign.
