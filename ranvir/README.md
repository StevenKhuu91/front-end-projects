# Ranvir Character Profile

A desktop character-profile website built for an online roleplaying community, combining creative writing, visual design, and front-end development.

**[View the live project](https://stevenkhuu91.github.io/front-end-projects/ranvir/)** · [Read the case study](CASE-STUDY.md) · [View the HTML](index.html) · [Back to all projects](../README.md)

> **Designed for desktop viewing.** This project explores an expressive, fixed composition with horizontal sections. Phone layouts are outside its intended scope.

![Ranvir profile on desktop, with layered character artwork, purple and orange accents, and a persistent section menu](docs/images/desktop-profile.png)

*Profile section captured from the live site at a 1280 × 720 browser viewport.*

## Purpose and my contribution

I created Liam Ranvir for an online roleplaying community and built this website to present his personality, relationships, and story through an interactive visual experience.

My contributions are the original character, narrative, visual layout, and HTML, CSS, and JavaScript implementation. The artwork is adapted from a Korean comic and belongs to its respective creators and publishers. This is a personal, noncommercial project; I do not claim ownership of the original images.

## Design decisions

- **Layered artwork and expressive typography** establish the character's atmosphere before readers begin the biography.
- **Horizontal sections** separate the profile, skills and spells, journal and friends, and inventory and out-of-character notes.
- **Purple, orange, and dark surfaces** connect the page's visual treatment with the character imagery.
- **Persistent navigation and clearer controls** make the desktop composition easier to explore while preserving its original arrangement.

## Recent improvements

- Split the original page into separate HTML, CSS, and JavaScript files.
- Added section navigation with a current-section indicator and keyboard focus styles.
- Added a keyboard-operable music button with loading cancellation and error feedback.
- Respected reduced-motion preferences for section transitions.
- Improved text spacing in skills and out-of-character panels.
- Removed placeholder friends, made Eris the initial selection, and highlighted the selected friend.
- Proofread the narrative and clarified the project's purpose and authorship.

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
- The page intentionally retains its original rendering mode because several legacy unitless CSS offsets depend on that behavior. Modernizing those declarations remains future maintenance work.

## Desktop controls

Use the section menu to jump between Profile, Skills & spells, Journal & friends, and Inventory & OOC. The highlighted link follows the current section, including when scrolling. Tab through the menu and press Enter to activate a link.

The music button supports keyboard playback and pause, cancellation while loading, and feedback if the external audio cannot load. Section transitions respect the system reduced-motion preference. The original desktop composition and external artwork sources are retained.
