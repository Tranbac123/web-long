# Studio — Selling Template (static desktop site)

A clean, production-ready **static desktop** portfolio/studio website built from the
brief and visual direction. Minimal black-and-white editorial aesthetic: large
typography, thin navigation, big image-led sections, and a large CTA footer
(“LET’S MAKE SOMETHING TOGETHER”).

> **Desktop only.** Minimum supported width is **1025px**. No mobile/tablet
> layouts are implemented (per the brief).

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5**
- **React Router 6**
- **Plain CSS** with co-located component stylesheets + shared design tokens
  (`src/styles/tokens.css`). No Tailwind, no CSS framework.

## Run locally

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check (tsc -b) + production build to /dist
npm run preview  # serve the production build locally
```

## Pages / routes

| Route               | Page              | Notes                                            |
| ------------------- | ----------------- | ------------------------------------------------ |
| `/`                 | Home              | Hero, intro, selected work grid, services, testimonials |
| `/about`            | About             | Name/portrait hero, bio, metrics, “How I work”, preview |
| `/work`             | Work              | Compact project index (rows) + project grid      |
| `/work/:slug`       | Project Detail    | Header + meta, cover, body, gallery, next project |
| `/project-detail`   | Project Detail    | Alias from the brief → shows the first project    |
| `*`                 | 404               | Not-found fallback                               |

The large CTA **footer** and the thin **header nav** appear on every page via
`Layout.tsx`.

## Project structure

```txt
src/
  assets/placeholders/   # local grayscale SVG placeholders (floral/nature/portrait)
  components/            # reusable: Header, Footer, Layout, Button, ProjectCard,
                         #           SectionHeader, TestimonialCard (+ co-located .css)
  data/                  # projects.ts, testimonials.ts, services.ts (content is data-driven)
  pages/                 # HomePage, AboutPage, WorkPage, ProjectDetailPage, NotFoundPage
  styles/                # tokens.css (design tokens), global.css (base + layout primitives)
  App.tsx                # routes
  main.tsx               # entry + BrowserRouter
```

## Design tokens

All shared values live in [`src/styles/tokens.css`](src/styles/tokens.css):
colors, font families/sizes/line-heights/tracking, spacing scale, container
widths, border radius, the one soft shadow, and motion timing. Components and
pages reference these via CSS variables — change them in one place to restyle.

## Missing Figma assets & assumptions

The Figma file could **not** be accessed programmatically (it requires
authentication; the fetch returned only the word “Figma”), and no screenshot
file was attached to the working session. Everything below was therefore built
from the written **visual direction** in the brief, choosing the simplest
faithful interpretation.

**Replace these placeholders with the real exported Figma assets:**

- `src/assets/placeholders/flower-01…06.svg` — stand-ins for the floral/nature
  **photography** in hero, work grids, and project galleries.
- `src/assets/placeholders/portrait.svg` — stand-in for the About hero portrait.
- `public/favicon.svg` — simple generated mark.

**Content assumptions (all placeholder copy — replace with real content):**

- Studio name **“STUDIO®”** and person name **“Marlowe Vance.”**
- Contact email `hello@studio.example` and social links (Instagram/Behance/LinkedIn)
  point to generic destinations.
- 4 sample projects, 3 testimonials, 4 services, and About metrics/principles are
  invented placeholder data in `src/data/`.
- Exact type scale, spacing, and grid ratios are reasonable editorial defaults,
  not pixel-measured from Figma.
- Font: **system Helvetica/Arial grotesque stack** (no webfont) to avoid pulling
  external resources. Swap in the real Figma typeface in `tokens.css` if needed.

## Implementation notes

- Semantic HTML throughout (`header`, `nav`, `main`, `article`, `section`,
  `figure`/`figcaption`, `blockquote`, `dl`).
- All meaningful images have descriptive `alt` text; decorative images use
  empty `alt`/`aria-hidden`.
- Skip-to-content link + visible focus styles for keyboard accessibility.
- Route changes scroll back to top (`Layout.tsx`).
- Animation is limited to subtle hover transitions (image zoom, arrow nudge) —
  no scroll/entrance animations, matching the restrained brief.

## Known limitations

- **Desktop only** — layout is not built or tested below 1025px; `body` enforces a
  `min-width: 1025px`. Below that a horizontal scrollbar appears (by design).
- Static site: no backend, CMS, forms, or data fetching.
- “Form” in the brief is treated as the **Home** page (no separate form screen
  exists in the visual direction).
- Placeholder SVG art is abstract/grayscale, not real photography.

## Validation results

- `npm run build` → **passes** (`tsc -b` strict mode with `noUnusedLocals` /
  `noUnusedParameters`, then Vite production build, 66 modules).
- All routes (`/`, `/about`, `/work`, `/work/:slug`, `/project-detail`) return
  **200** and serve the app shell under `npm run preview`.
- No type errors; no build warnings.
```
