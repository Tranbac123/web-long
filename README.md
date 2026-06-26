# Alex Chen — Portfolio

A static, desktop-first portfolio site (Home, About, Work, Project Detail) built
to match a Figma design. Minimal black-and-white editorial style: one font
(Inter), large display typography, photography as the only colour.

## Tech stack

- **React 18** + **TypeScript**
- **Vite 7**
- **React Router 6**
- Plain CSS with design tokens (`src/styles/tokens.css`) — no UI framework

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/work` | Work (project index) |
| `/work/luminary-studio` | Project Detail (Luminary — the only project with a Figma detail design) |
| `/project-detail` | redirects to `/work/luminary-studio` |
| `/works`, `/works/:slug` | redirect to `/work`, `/work/:slug` |
| anything else | 404 |

Only **Luminary Studio** has a real detail page; other project cards are
intentionally non-interactive (no invented content), and unknown `/work/:slug`
routes redirect to `/work`.

## Getting started

```bash
npm install
npm run dev        # local dev server (Vite)
npm run build      # type-check (tsc -b) + production build to /dist
npm run preview    # serve the production build
npm run typecheck  # type-check only
```

## Project structure

```txt
src/
  components/   Header, Footer, Layout, ProjectShowcase, TestimonialCard, MediaImage, Button
  pages/        HomePage, AboutPage, WorkPage, ProjectDetailPage, NotFoundPage
  data/         projects, services, testimonials, siteContent, homeContent, aboutContent
  styles/       tokens.css (design tokens), global.css (base + .page/.section/.container)
docs/           Figma source (figma/*.json), reference screenshots, layout/text audits
```

### DOM/CSS convention

`.page` (page root) → `section.section` (semantic block, fluid vertical rhythm)
→ `.container` (inner content-width wrapper). Framed images use the `<MediaImage>`
primitive (`object-fit: cover`). Layout text/measurements come from `docs/figma/*.json`.

## Design source notes

- Figma node JSON in `docs/figma/` is the source of truth for text and measurements.
- Reference screenshots in `docs/design-reference/` are for visual comparison only
  (never rendered as UI).
- Type sizes are Figma px at the 1728 design width expressed as `vw` clamps so the
  layout scales down to the 1025px minimum.

## Known limitations

- **Desktop only** — minimum supported width is **1025px**; no mobile/tablet layout.
- Images in `src/assets/placeholders/` are **placeholders** — replace with the real
  exported photography (keep the same filenames to preserve the asset mapping).
- No backend/CMS; all content is static in `src/data/`.
- ESLint/Prettier are recommended but not yet wired (see install commands in the
  delivery notes).
