# Ranvir Character Profile

Ranvir is a character-profile website that combines my interests in creative writing, character design, and front-end development. I built the page to represent Liam Ranvir through an interactive visual experience rather than a conventional written biography. Layered artwork, expressive typography, horizontal navigation, and character-specific sections help communicate his personality and story. (Please be aware that this project was made for desktop viewability. Responsive web design was not a particular concern in the project; this was mostly just a test of my abilities to see how well I could design an aesthetic layout.)

The character, narrative, and website implementation are my original work. The visual artwork is adapted from a Korean comic and is included solely as part of this personal, noncommercial demonstration. I do not claim ownership of the original images, and all artwork rights remain with their respective creators and publishers.

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

The exact URLs remain in `css/styles.css` and `index.html`, preserving the original behavior. Before redistributing or localizing any of these files, confirm that you own them or have permission from their respective creators and hosts. Once permission is established, place approved files in the matching `assets/` subdirectory and update paths relative to the referencing file:

- HTML to an image: `assets/images/example.png`
- CSS to an image: `../assets/images/example.png`
- CSS to a font: `../assets/fonts/example.woff2`
- HTML to audio: `assets/audio/example.mp3`

## Notes

- `index.html` now links to `css/styles.css` and loads `js/script.js` with `defer` so the existing script runs after the page markup is available.
- The `masterpiece` font family now loads SPQR from `assets/fonts/spqr.ttf`; Inked God and Collection New Style remain external because their supplied or published terms do not clearly allow redistribution in this repository.
- The original `background-image: url('/')` declaration is retained as-is because there was no local source asset to substitute and changing it could alter the original design behavior.
- The page intentionally retains its original rendering mode because several legacy unitless CSS offsets depend on that behavior. Modernizing those declarations is outside this structure-only change.

## Desktop controls

Use the section menu to jump between Profile, Skills & spells, Journal & friends, and Inventory & OOC. The highlighted link follows the current section, including when scrolling. Tab through the menu and press Enter to activate a link.

The music button supports keyboard playback and pause, cancellation while loading, and feedback if the external audio cannot load. Section transitions respect the system reduced-motion preference. The original desktop composition and external artwork sources are retained.
