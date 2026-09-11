# Ranvir Character Profile

Ranvir is a single-page, horizontally scrolling character profile for Liam Ranvir. It presents character statistics, skills and spells, journal entries, relationships, inventory, out-of-character notes, and an optional music player.

This directory is organized as a small standalone front-end project. The cleanup separates structure, presentation, and behavior without intentionally changing the original design or copy.

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

The asset directories currently contain `.gitkeep` placeholders because the original repository did not contain local image, audio, or font files.

## Technologies

- HTML
- CSS layouts, transforms, gradients, filters, transitions, and scroll snapping
- Vanilla JavaScript for cursor-following tooltips and audio playback
- Google Fonts plus externally hosted custom fonts

## Running locally

Open `index.html` in a browser. For the most consistent browser behavior, serve the repository with a simple local static server and open the `/ranvir/` path.

The page requires an internet connection for its externally hosted fonts, images, audio, and linked profile pages.

## External asset dependencies

No remote media was copied into this repository during the structural cleanup. The original file did not include locally available assets or licensing information that clearly authorized redistribution.

- Google Fonts stylesheet: Abril Fatface, Gelasio, Merriweather, and Spectral from `fonts.googleapis.com`
- Custom fonts: `iNked God.ttf`, `CollectionNewStyle.otf`, and `spqr.ttf` from `dl.dropboxusercontent.com`
- Images and cursor artwork: remotely hosted files from `i.imgur.com`
- Music: `l9knsx.mp3` from `files.catbox.moe`
- External profile links: `roleplay.chat`

The exact URLs remain in `css/styles.css` and `index.html`, preserving the original behavior. Before redistributing or localizing any of these files, confirm that you own them or have permission from their respective creators and hosts. Once permission is established, place approved files in the matching `assets/` subdirectory and update paths relative to the referencing file:

- HTML to an image: `assets/images/example.png`
- CSS to an image: `../assets/images/example.png`
- CSS to a font: `../assets/fonts/example.woff2`
- HTML to audio: `assets/audio/example.mp3`

## Notes

- `index.html` now links to `css/styles.css` and loads `js/script.js` with `defer` so the existing script runs after the page markup is available.
- The original `background-image: url('/')` declaration is retained as-is because there was no local source asset to substitute and changing it could alter the original design behavior.
- The page intentionally retains its original rendering mode because several legacy unitless CSS offsets depend on that behavior. Modernizing those declarations is outside this structure-only change.
