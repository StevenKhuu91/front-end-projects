# Ranvir technical notes

[Project overview](../README.md) � [Case study](../CASE-STUDY.md)

Paths in this document are relative to the `ranvir/` directory.

## Project structure

```text
ranvir/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── audio/
│   └── fonts/
└── README.md
```

The image and audio directories currently contain `.gitkeep` placeholders because the original repository did not contain local image or audio files. The fonts directory contains the locally hosted SPQR font and its redistribution notice.

## Technologies

- HTML
- CSS layouts, transforms, gradients, filters, transitions, and scroll snapping
- Vanilla JavaScript for section navigation and audio playback
- Google Fonts plus externally hosted custom fonts

## Running locally

Open `index.html` in a browser. For the most consistent browser behavior, serve the repository with a simple local static server and open the `/ranvir/` path.

The page requires an internet connection for its externally hosted fonts, images, audio, and linked profile pages.

## External asset dependencies

No remote media was copied into the repository during the initial structural cleanup. SPQR was later supplied locally with a notice explicitly allowing free redistribution for noncommercial use, so that font and its notice are now stored in `assets/fonts`. Other remote assets remain external unless their redistribution rights can be confirmed.

- Google Fonts stylesheet: Abril Fatface, Gelasio, Merriweather, and Spectral from `fonts.googleapis.com`
- Custom fonts: `iNked God.ttf` and `CollectionNewStyle.otf` from `dl.dropboxusercontent.com`
- Local font: `spqr.ttf` from Iconian Fonts, accompanied by its original `spqr.txt` redistribution notice
- Images and cursor artwork: remotely hosted files from `i.imgur.com`
- Music: `l9knsx.mp3` from `files.catbox.moe`
- External profile links: `roleplay.chat`

The media URLs remain in `css/styles.css` and `index.html`; friend artwork URLs now live in CSS rather than inline styles. Before redistributing or localizing any of these files, confirm that you own them or have permission from their respective creators and hosts. Once permission is established, place approved files in the matching `assets/` subdirectory and update paths relative to the referencing file:

- HTML to an image: `assets/images/example.png`
- CSS to an image: `../assets/images/example.png`
- CSS to a font: `../assets/fonts/example.woff2`
- HTML to audio: `assets/audio/example.mp3`

## Notes

- `index.html` now links to `css/styles.css` and loads `js/script.js` with `defer` so the existing script runs after the page markup is available.
- The `masterpiece` font family now loads SPQR from `assets/fonts/spqr.ttf`; Inked God and Collection New Style remain external because their supplied or published terms do not clearly allow redistribution in this repository.
- The unitless journal offset now has an explicit pixel unit. The original rendering mode remains: a standards-mode trial shifted the skills subtitle and was reverted to preserve the layout. 

## Desktop controls

Use the section menu to jump between Profile, Skills & spells, Journal & friends, and Inventory & OOC. The highlighted link follows the current section, including when scrolling. Tab through the menu and press Enter to activate a link.

The music button supports keyboard playback and pause, cancellation while loading, and feedback if the external audio cannot load. Section transitions respect the system reduced-motion preference. The original desktop composition and external artwork sources are retained.

## Document structure and keyboard reading

The page has one main landmark, a page heading, and a heading for each of its four sections. Content headings use separate visual classes so their appearance does not depend on their heading level. Block content uses div wrappers instead of spans.

Tab to a reading panel to focus it; use the arrow keys, Page Up/Page Down, or Home/End to scroll its content, then Tab to leave. A warm outline identifies the focused panel. The original rendering mode is retained to preserve the existing line-box behavior.

## Modernization validation

The retained changes were compared with the pre-modernization version in the embedded Chromium browser at 1280 x 720. All 187 body elements matched in position and dimensions after fonts settled; sampled computed colors, backgrounds, typography, spacing, transforms, and display values also matched.

At 1366 x 768, checks covered all four section destinations, keyboard reading-panel scrolling, Blix selection, and music playback/pause. Page copy and the combined HTML/CSS external URL set were preserved. Local Markdown links and whitespace checks passed.

External artwork did not render in the localhost preview, so image-level comparison remains limited. No broad cross-browser or screen-reader certification is implied.
