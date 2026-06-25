# DESIGN CONTRACT — Alex Chen Portfolio Website

This document is the design and implementation contract for the static desktop portfolio website.

Claude Code must treat this file as the source of truth for:

- routes
- page count
- page section order
- text content
- image asset mapping
- layout intent
- styling rules
- validation requirements

The visual reference screenshots are stored in:

```txt
docs/design-reference/home-reference.png
docs/design-reference/about-reference.png
docs/design-reference/work-reference.png
docs/design-reference/project-detail-reference.png
```

These screenshots are design references only.

Do not render full-page screenshots as website UI.

---

## 1. Project Goal

Build a static desktop portfolio/studio website for:

```txt
Alex Chen
```

The website must match the provided page reference screenshots as closely as possible.

The design style is:

- minimal black-and-white editorial portfolio
- large bold typography
- tight line height
- strong whitespace
- simple navigation
- asymmetric project layouts
- image-led composition
- no rounded cards
- no shadows
- no generic SaaS layout
- no random external images
- real HTML text, not text baked into images

Desktop only for now.

Minimum supported viewport width:

```txt
1025px
```

Optimize primarily for desktop widths around:

```txt
1440px
```

---

## 2. Required Pages

The website has exactly 4 implemented pages:

```txt
1. Home
2. About
3. Work
4. Project Detail
```

Important:

The top navigation should only show:

```txt
Home
About
Work
```

Project Detail does not need to appear in the top nav, but it must exist and be reachable from project cards and direct URL.

---

## 3. Required Routes

Implement these routes:

```txt
/                         -> Home page
/about                    -> About page
/work                     -> Work page
/work/:slug               -> Project Detail page
/work/luminary-studio     -> Luminary Studio Project Detail page
/project-detail           -> redirect to /work/luminary-studio
```

Optional redirects:

```txt
/works                    -> redirect to /work
/works/:slug              -> redirect to /work/:slug
```

Use `/work` as the main route because the current project uses singular `Work`.

The Work page may visually display the large word:

```txt
WORKS
```

This matches the design reference.

---

## 4. Navigation

Header logo/name:

```txt
Alex Chen
```

Navigation links:

```txt
Home  -> /
About -> /about
Work  -> /work
```

Header behavior:

- On Home hero: overlay on dark hero image, text should be white/readable.
- On About hero: overlay on image, text should be readable.
- On Work and Project Detail pages: black text on white background.
- No heavy background box.
- No oversized nav.
- No decorative underline unless it matches the reference.

---

## 5. Production Assets

Use the files exactly as they currently exist in the project:

```txt
src/assets/placeholders/home-hero-bg.jpg
src/assets/placeholders/daisy-1.jpg
src/assets/placeholders/daisy-2.jpg
src/assets/placeholders/daisy-3.png
src/assets/placeholders/daisy-4.png
src/assets/placeholders/daisy-5.png
src/assets/placeholders/daisy-6.png
src/assets/placeholders/daisy-7.jpg
src/assets/placeholders/daisy-8.png
src/assets/placeholders/daisy-9.jpg
src/assets/placeholders/smile_face.svg
```

Do not rename these files.

Do not move these files.

Do not use external image URLs.

Do not import old missing assets such as:

```txt
flower-01.svg
flower-02.svg
flower-03.svg
flower-04.svg
flower-05.svg
flower-06.svg
portrait.svg
```

---

## 6. Asset Mapping

Use this exact mapping:

| Asset              | Usage                                                                       |
| ------------------ | --------------------------------------------------------------------------- |
| `home-hero-bg.jpg` | Home hero dark background                                                   |
| `daisy-1.jpg`      | Home intro small image; Home service row thumbnails                         |
| `daisy-2.jpg`      | Luminary Studio project cover                                               |
| `daisy-3.png`      | Orbital Finance project cover; Project Detail two-column gallery left image |
| `daisy-4.png`      | Plant Shop project cover; Project Detail two-column gallery right image     |
| `daisy-5.png`      | Aether - AI Studio project cover                                            |
| `daisy-6.png`      | Polaris Protocol project cover; Next project thumbnail                      |
| `daisy-7.jpg`      | Terra project cover                                                         |
| `daisy-8.png`      | Footer banner image; Project Detail large landscape gallery image           |
| `daisy-9.jpg`      | About page hero image                                                       |
| `smile_face.svg`   | Footer CTA smile icon                                                       |

---

## 7. Required Project Data

Project data must be centralized in:

```txt
src/data/projects.ts
```

Do not duplicate project arrays inside pages.

There must be exactly 6 projects, in this order:

```txt
1. Luminary Studio
2. Orbital Finance
3. Plant Shop
4. Aether - AI Studio
5. Polaris Protocol
6. Terra
```

Project data contract:

```ts
export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  description: string;
  galleryImages?: string[];
};
```

Project definitions:

```txt
Luminary Studio
slug: luminary-studio
cover: daisy-2.jpg
category: Branding, Web Design, System
year: 2024

Orbital Finance
slug: orbital-finance
cover: daisy-3.png
category: UI Design
year: 2025

Plant Shop
slug: plant-shop
cover: daisy-4.png
category: UI Design
year: 2026

Aether - AI Studio
slug: aether-ai-studio
cover: daisy-5.png
category: AI Direction, 3D, Creative Coding
year: 2024

Polaris Protocol
slug: polaris-protocol
cover: daisy-6.png
category: 3D Strategy
year: 2025

Terra
slug: terra
cover: daisy-7.jpg
category: Sustainability
year: 2026
```

Helper functions may exist:

```ts
getProjectBySlug(slug: string)
getNextProject(slug: string)
```

---

## 8. Home Page Contract

File:

```txt
src/pages/HomePage.tsx
```

Reference screenshot:

```txt
docs/design-reference/home-reference.png
```

Required section order:

```txt
1. Hero
2. Intro
3. Things I’ve built
4. How I can help you
5. Testimonials
6. Footer banner + CTA footer
```

### 8.1 Home Hero

Use asset:

```txt
src/assets/placeholders/home-hero-bg.jpg
```

Required visible text:

```txt
CREATIVE
DEVELOPER
```

Layout requirements:

- full-width dark image hero
- header overlays hero
- large white title on the left
- small supporting copy near center-left
- small bottom-left text: `Scroll Down`
- hero must look like the reference, not a blurry nav-only banner

Suggested supporting copy:

```txt
I build immersive web experiences where interaction, motion, and structure meet meaningful design.
```

### 8.2 Home Intro

Title:

```txt
Turning ideas into immersive experiences.
```

Use image:

```txt
daisy-1.jpg
```

Small label:

```txt
About me
```

Paragraph:

```txt
I build interactive web spaces that connect feeling with function — crafted with attention to motion, structure, and human-first detail.
```

Link:

```txt
→ Let’s work together
```

### 8.3 Home Projects

Title:

```txt
Things I’ve built.
```

Use project data from:

```txt
src/data/projects.ts
```

Project/image mapping:

```txt
Luminary Studio       -> daisy-2.jpg
Orbital Finance       -> daisy-3.png
Plant Shop            -> daisy-4.png
Aether - AI Studio    -> daisy-5.png
Polaris Protocol      -> daisy-6.png
Terra                 -> daisy-7.jpg
```

Layout requirements:

- asymmetric layout
- Luminary Studio large card on the left
- Orbital Finance and Plant Shop small cards top/right
- Aether - AI Studio larger card lower/right
- Polaris Protocol and Terra smaller cards below Aether
- preserve large whitespace
- do not use a generic equal grid

### 8.4 Home Services

Title:

```txt
How I can help you.
```

Rows:

```txt
01 Creative Development
02 Motion & Interaction
03 Design To Code
```

Each row must include:

- index
- title
- short description
- thumbnail on right using `daisy-1.jpg`

Service descriptions:

```txt
Creative Development:
Transforming designs into fluid, responsive, and high-performing web experiences with clean code and pixel-perfect attention to detail.

Motion & Interaction:
GSAP-powered effects, CSS animations, and micro-interactions to make interfaces feel expressive without slowing them down.

Design To Code:
Design systems and UI translated into production-ready, scalable interfaces while preserving the design intent.
```

### 8.5 Home Testimonials

Label:

```txt
Testimonials
```

Counter:

```txt
01 / 03
```

Quote:

```txt
"Alex didn't just build a website - he built our brand's voice. Clean, intentional, and a pleasure to work with."
```

Author:

```txt
Jamie Lin
Creative Director, Luminary Studio
```

Layout requirements:

- dark rectangle on the left
- quote block on the right
- small author details below
- static arrow buttons are acceptable
- no need for real carousel logic

### 8.6 Home Footer

Use shared Footer component.

---

## 9. About Page Contract

File:

```txt
src/pages/AboutPage.tsx
```

Reference screenshot:

```txt
docs/design-reference/about-reference.png
```

Required section order:

```txt
1. Hero image with ALEX CHEN
2. Statement/bio
3. Skills + huge AC typography
4. How I Work
5. Things I’ve built
6. Footer banner + CTA footer
```

### 9.1 About Hero

Use asset:

```txt
src/assets/placeholders/daisy-9.jpg
```

Visible title:

```txt
ALEX
CHEN
```

Layout requirements:

- full-width hero image
- header overlays image
- large title at bottom-left
- title must be readable
- crop image with `object-fit: cover`

### 9.2 About Statement

Left label:

```txt
Statement
```

Main text:

```txt
I build digital experiences where design meets code — interactive, intentional, and human-first. I collaborate with brands that have a story to tell, turning ideas into fluid, responsive experiences.
```

Right block title:

```txt
What drives me:
```

Right block lines:

```txt
Clean typography
Thoughtful micro-interactions
Performance without compromise
Interfaces that feel as good as they look
```

Additional note:

```txt
When I'm not coding, I'm probably sketching, collecting vinyl, or chasing good light.
```

Link:

```txt
→ Let’s work together
```

### 9.3 Skills + AC Block

Show skill columns:

```txt
Figma
Adobe XD
Illustrator
Photoshop

TypeScript
Next.js
Webflow
Framer
GSAP

WebGL
Three.js
JavaScript
Vercel
Netlify

HTML
CSS
JavaScript
React
Lottie
```

Show huge typography:

```txt
AC
```

Layout requirements:

- skills appear in small text columns
- `AC` must be extremely large and bold
- keep the sparse editorial feel from the reference

### 9.4 How I Work

Title:

```txt
How I Work
```

Rows:

```txt
Detail-obsessed
From landing pages to full web applications — built with clean code, smooth animations, and pixel-perfect attention to detail.
(01)

Motion with purpose
I bring interfaces to life with purposeful, fluid motion that enhances the user experience.
(02)

Honest collaboration
I treat every project like it's my own. Clear communication, no surprises.
(03)
```

Layout requirements:

- sparse rows
- no cards
- no background boxes
- small row index on right

### 9.5 About Projects

Reuse the same project data from:

```txt
src/data/projects.ts
```

Use a similar asymmetric “Things I’ve built” layout from Home.

### 9.6 About Footer

Use shared Footer component.

---

## 10. Work Page Contract

File:

```txt
src/pages/WorkPage.tsx
```

Reference screenshot:

```txt
docs/design-reference/work-reference.png
```

Route:

```txt
/work
```

Large visual title:

```txt
WORKS
```

Required layout:

- white background
- header at top
- horizontal editorial project index
- large whitespace
- huge `WORKS` text bottom-left
- `→ Let’s work together` bottom-right

Project order:

```txt
Luminary Studio
Orbital Finance
Plant Shop
Aether - AI Studio
Polaris Protocol
```

Image mapping:

```txt
Luminary Studio       -> daisy-2.jpg
Orbital Finance       -> daisy-3.png
Plant Shop            -> daisy-4.png
Aether - AI Studio    -> daisy-5.png
Polaris Protocol      -> daisy-6.png
```

Layout requirements:

- do not create a normal 3-column grid
- Luminary Studio: large square image on the left
- Orbital Finance: medium horizontal image
- Plant Shop: medium horizontal image
- Aether - AI Studio: tall/large image
- Polaris Protocol: tall image at far right
- horizontal overflow is acceptable on desktop if needed to preserve the design

---

## 11. Project Detail Page Contract

File:

```txt
src/pages/ProjectDetailPage.tsx
```

Reference screenshot:

```txt
docs/design-reference/project-detail-reference.png
```

Main required route:

```txt
/work/luminary-studio
```

This route must work.

Use `useParams()` to read the slug and find the project from:

```txt
src/data/projects.ts
```

If slug is unknown:

- redirect to `/work/luminary-studio`, or
- render a simple not-found state

### 11.1 Project Intro

Large title:

```txt
LUMINARY
STUDIO
```

Year:

```txt
2024
```

Metadata columns:

```txt
Role:
Visual Design, Motion, Branding

Description:
A visual identity and web experience built around light, motion, and refined editorial composition.

Tools:
Figma, GSAP, React, Three.js

Scroll:
Scroll Down
```

Layout requirements:

- large title at top-left
- small metadata columns aligned across the top section
- lots of whitespace
- no heavy card styling

### 11.2 Gallery

Use this exact image order:

```txt
Large full-width landscape:
daisy-8.png

Two-column row:
daisy-3.png
daisy-4.png

Large full-width landscape:
daisy-8.png

Two-column row:
daisy-3.png
daisy-4.png
```

Layout requirements:

- first large full-width landscape image
- then two equal columns
- then large full-width landscape image
- then two equal columns
- use `object-fit: cover`
- use aspect ratios to match the reference

### 11.3 Next Project

Centered section title:

```txt
Next project
```

Thumbnail:

```txt
daisy-6.png
```

Text:

```txt
Polaris Protocol
```

Link:

```txt
/work/polaris-protocol
```

### 11.4 Project Detail Footer

Use shared Footer component.

---

## 12. Shared Footer Contract

File:

```txt
src/components/Footer.tsx
```

Use on:

```txt
Home
About
Project Detail
```

Footer section order:

```txt
1. Large banner image
2. Huge CTA text
3. Small footer columns
```

Banner image:

```txt
src/assets/placeholders/daisy-8.png
```

CTA text:

```txt
LET’S MAKE SOMETHING TOGETHER
```

Smile icon:

```txt
src/assets/placeholders/smile_face.svg
```

Do not use text smile if SVG exists.

Footer columns:

```txt
Location:
Tokyo, Japan

Socials:
Instagram
Behance
LinkedIn
Twitter

Available:
Currently available for freelance projects and full-time collaboration. Open to work worldwide.

Contact:
Want a portfolio that moves, breathes, and turns users into believers?
transparencymental@gmail.com
LinkedIn
```

Layout requirements:

- huge black CTA typography
- tight line-height
- smile SVG placed after CTA text
- small metadata columns below
- lots of whitespace
- no boxed footer style

---

## 13. Styling Rules

Use plain CSS.

Allowed style files:

```txt
src/styles/tokens.css
src/styles/global.css
src/pages/*.css
src/components/*.css
```

Required CSS behavior:

```css
body {
  min-width: 1025px;
}
```

Images:

```css
img {
  display: block;
  max-width: 100%;
}

.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

General rules:

- desktop-first only
- black text on white background except image hero sections
- large display headings
- tight line-height
- strong whitespace
- no rounded cards
- no shadows
- no generic equal grids where reference is asymmetric
- use `object-fit: cover`
- use `aspect-ratio`
- avoid inline styles
- use semantic HTML

Recommended display typography direction:

```css
.display-title {
  font-size: clamp(80px, 12vw, 190px);
  line-height: 0.85;
  letter-spacing: -0.06em;
  font-weight: 700;
}
```

---

## 14. Components to Prefer

Use or create reusable components where useful:

```txt
Header
Footer
ProjectCard
ProjectGrid
ServiceRow
TestimonialCard
Layout
```

Do not over-engineer.

This is a static website.

No backend.

No database.

No CMS.

---

## 15. Implementation Priorities

Fix in this order:

```txt
1. Routing and page existence
2. Broken asset imports
3. Project data
4. Header branding/navigation
5. Home layout
6. About layout
7. Work layout
8. Project Detail layout
9. Footer
10. CSS polish
11. Build validation
```

The priority is matching the supplied references, not preserving the previous wrong implementation.

---

## 16. Validation Checklist

Run:

```bash
npm run build
```

If these scripts exist, also run:

```bash
npm run typecheck
npm run lint
```

Do not claim typecheck/lint passed if the scripts do not exist.

Manually verify these URLs:

```txt
/
 /about
/work
/work/luminary-studio
/project-detail
```

Check:

- Home page exists
- About page exists
- Work page exists
- Project Detail page exists
- Header links work
- Project cards link to `/work/:slug`
- `/work/luminary-studio` works
- `/project-detail` redirects to `/work/luminary-studio`
- no old missing assets are imported
- no external images are used
- no full-page screenshots are rendered as UI
- footer uses `smile_face.svg`
- all images have meaningful alt text
- desktop layout works at 1025px and above

---

## 17. Non-Negotiables

Do not:

- use the reference screenshots as website images
- use random external images
- import missing `flower-*.svg` files
- import missing `portrait.svg`
- keep old identity like `Marlowe Vance`
- keep old project names
- make the Work page a generic 3-column grid
- remove the Project Detail page
- hide Project Detail behind a broken route
- claim validation passed without running build

---

## 18. Final Implementation Report Format

After changes, report:

```md
# Fix Implementation Report

## 1. Summary

## 2. Pages implemented

| Page | Route | Status |
| ---- | ----- | ------ |

## 3. Main files changed

| File | What changed | Why |
| ---- | ------------ | --- |

## 4. Asset mapping used

| Section | Asset |
| ------- | ----- |

## 5. Validation results

| Command | Result |
| ------- | ------ |

## 6. Remaining issues / limitations
```
