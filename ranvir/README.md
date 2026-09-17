# Ranvir Character Profile

A desktop character-profile website created for an online roleplaying community, combining original character writing, visual design, and front-end development.

> **Designed for desktop viewing.** The fixed composition and horizontal sections are intentional; phone layouts are outside this project's scope.

![Ranvir profile with layered character artwork and persistent navigation](docs/images/desktop-profile.png)

**[Live demo](https://stevenkhuu91.github.io/front-end-projects/ranvir/)** · **[Case study](CASE-STUDY.md)** · **[Source code](index.html)**

## Key features

- Four horizontal sections with persistent navigation and a current-section indicator.
- Keyboard-operable music controls, loading cancellation, and error feedback.
- Focusable reading panels, visible keyboard focus, and reduced-motion support.
- Companion cards with an initial selection and a selected-friend indicator.
- Separate HTML, CSS, and JavaScript, with shared CSS colors and organized presentation styles.

## Technologies

HTML, CSS, and vanilla JavaScript. No framework, package installation, or build step is required.

## Running locally

Open the repository in VS Code and serve it with a local static server, such as Live Server. Open `/ranvir/` in a desktop browser. Alternatively, with Python installed, run this from the repository root:

```sh
python -m http.server 8000
```

Then visit [localhost:8000/ranvir/](http://localhost:8000/ranvir/). An internet connection is needed for external artwork, music, and some fonts.

Use the top menu to switch sections. Tab to a reading panel and use the arrow keys or Page Up/Page Down to scroll; Tab again to leave it.

## My contribution and credits

I created Liam Ranvir, his narrative, the visual layout, and the website implementation. The artwork is adapted from a Korean comic and belongs to its respective creators and publishers. This is a personal, noncommercial project; I do not claim ownership of the illustrations or music.

The [case study](CASE-STUDY.md) explains the design decisions, revisions, validation, and lessons learned. [Technical notes](docs/TECHNICAL-NOTES.md) cover project structure, external asset sources and notices, controls, and remaining legacy constraints.
