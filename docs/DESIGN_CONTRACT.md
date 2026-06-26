# DESIGN CONTRACT — Alex Chen Portfolio Website

This document is the source of truth for the Alex Chen static portfolio website.

Claude Code must read this file before making any implementation or styling changes.

The goal is to reproduce the provided design references as closely as possible using real React components, HTML text, CSS, and local assets.

Do not invent a new design.

---

## 1. Design Reference Files

Use these files as visual references only:

```txt
docs/design-reference/home-reference.png
docs/design-reference/about-reference.png
docs/design-reference/work-reference.png
docs/design-reference/project-detail-reference.png
```

Rules:

- Do not render these screenshots as website UI.
- Do not use them as `<img>` tags.
- Do not use them as backgrounds.
- Do not bake text into images.
- Use them only to understand layout, spacing, typography scale, image placement, and section order.

---

## 2. Website Identity

The website is for:

```txt
Alex Chen
```

Remove and replace any old identity such as:

```txt
Marlowe Vance
STUDIO
old project names
old placeholder copy
```

Header logo/name:

```txt
Alex Chen
```

---

## 3. Required Pages

The website must implement exactly 4 pages:

```txt
1. Home
2. About
3. Work
4. Project Detail
```

The top navigation should show only:

```txt
Home
About
Work
```

Project Detail does not need to appear in the top navigation, but it must exist and be reachable from project cards and direct URL.

---

## 4. Required Routes

Use these routes:

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

Use `/work` as the main route.

The Work page can visually display the large word:

```txt
WORKS
```

This is part of the design.

---

## 5. Navigation Contract

Header links:

```txt
Alex Chen -> /
Home      -> /
About     -> /about
Work      -> /work
```

Header behavior:

- Home: header overlays the dark hero image and must be readable.
- About: header overlays the hero image and must be readable.
- Work: header uses black text on white background.
- Project Detail: header uses black text on white background.
- No heavy header background.
- No pill nav.
- No decorative nav boxes.
- No colorful active states.

---

## 6. Design System Lockdown

This design uses a very strict visual system.

Claude Code must not add decorative UI styling.

The website should rely on:

```txt
typography
whitespace
image composition
alignment
scale
```

Not on:

```txt
extra colors
multiple fonts
dividers
borders
shadows
rounded cards
generic buttons
```

---

## 7. Font System

The website must use exactly one font family:

```css
font-family: "Inter", sans-serif;
```

Rules:

- Use Inter for all text.
- Do not use any other font family.
- Do not use serif fonts.
- Do not use monospace fonts.
- Do not use `system-ui`.
- Do not use Helvetica.
- Do not use Arial.
- Do not use Georgia.
- Do not use Playfair.
- Do not use custom display fonts.
- Large display headings must also use Inter.
- Footer CTA must use Inter.
- Navigation must use Inter.
- Project metadata must use Inter.

All typography variation must come from:

```txt
font-size
font-weight
line-height
letter-spacing
text-transform
spacing
```

Not from changing font family.

Required token:

```css
:root {
  --font-main: "Inter", sans-serif;
}
```

Required global body style:

```css
body {
  font-family: var(--font-main);
}
```

Allowed font declarations:

```css
font-family: "Inter", sans-serif;
font-family: var(--font-main);
```

Everything else must be removed.

---

## 8. Color System

The website UI uses only black and white.

Required tokens:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #050505;
  --color-muted: #050505;
}
```

Rules:

- UI background: white.
- UI text: black.
- Links: black.
- Buttons/CTA text: black.
- Footer text: black.
- Muted text should still use black with opacity.
- Photography is the only source of color.

Allowed muted text:

```css
color: var(--color-text);
opacity: 0.65;
```

Not allowed:

```css
color: #777;
color: #999;
color: #666;
color: blue;
color: brown;
color: beige;
background: #f8f8f8;
background: #fafafa;
background: linear-gradient(...);
```

No accent colors.

No colored buttons.

No colored links.

No gray UI backgrounds unless the reference explicitly shows them.

---

## 9. Divider, Border, Radius, and Shadow Rules

The reference design is sparse and uses whitespace instead of decorative UI lines.

Forbidden unless clearly visible in the reference:

```txt
decorative dividers
card borders
section borders
button borders
pill buttons
rounded cards
rounded images
box shadows
drop shadows
gradient backgrounds
```

Default rules:

```css
border: none;
border-radius: 0;
box-shadow: none;
filter: none;
```

If a divider is not clearly required by the reference, remove it.

If a card border is not clearly required by the reference, remove it.

If a button looks like a SaaS button, simplify it into a text link.

---

## 10. Button and Link Rules

Links should be minimal and editorial.

Allowed link style:

```css
color: var(--color-text);
text-decoration: none;
```

Allowed hover style:

```css
opacity: 0.65;
```

Not allowed:

```txt
pill buttons
filled buttons
colored buttons
heavy bordered buttons
shadow buttons
gradient buttons
rounded CTA pills
```

Use text links such as:

```txt
→ Let’s work together
```

---

## 11. Production Assets

Use the files exactly as they currently exist:

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

Do not import old missing assets:

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

## 12. Asset Mapping

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

## 13. Project Data Contract

Project data must be centralized in:

```txt
src/data/projects.ts
```

Do not duplicate project arrays inside page files.

There must be exactly 6 projects, in this order:

```txt
1. Luminary Studio
2. Orbital Finance
3. Plant Shop
4. Aether - AI Studio
5. Polaris Protocol
6. Terra
```

Required project type:

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

## 14. Home Page Contract

File:

```txt
src/pages/HomePage.tsx
```

Reference:

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

### 14.1 Home Hero

Use:

```txt
src/assets/placeholders/home-hero-bg.jpg
```

Visible title:

```txt
CREATIVE
DEVELOPER
```

Supporting copy:

```txt
I build immersive web experiences where interaction, motion, and structure meet meaningful design.
```

Small bottom-left text:

```txt
Scroll Down
```

Layout requirements:

- Full-width dark image hero.
- Header overlays hero.
- Large white title on the left.
- Supporting copy near center-left.
- Strong whitespace.
- No colored overlay unless needed for text readability.
- No decorative divider.

### 14.2 Home Intro

Title:

```txt
Turning ideas into immersive experiences.
```

Image:

```txt
daisy-1.jpg
```

Label:

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

Layout requirements:

- Large editorial title.
- Small image below/near title as in reference.
- Sparse text placement.
- White background.
- Black text only.

### 14.3 Home Projects

Title:

```txt
Things I’ve built.
```

Use project data from:

```txt
src/data/projects.ts
```

Project image mapping:

```txt
Luminary Studio       -> daisy-2.jpg
Orbital Finance       -> daisy-3.png
Plant Shop            -> daisy-4.png
Aether - AI Studio    -> daisy-5.png
Polaris Protocol      -> daisy-6.png
Terra                 -> daisy-7.jpg
```

Layout requirements:

- Asymmetric project layout.
- Luminary Studio large card on the left.
- Orbital Finance and Plant Shop smaller cards top/right.
- Aether - AI Studio larger card lower/right.
- Polaris Protocol and Terra smaller cards below Aether.
- Preserve whitespace.
- Do not use a generic equal grid.

### 14.4 Home Services

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

Descriptions:

```txt
Creative Development:
Transforming designs into fluid, responsive, and high-performing web experiences with clean code and pixel-perfect attention to detail.

Motion & Interaction:
GSAP-powered effects, CSS animations, and micro-interactions to make interfaces feel expressive without slowing them down.

Design To Code:
Design systems and UI translated into production-ready, scalable interfaces while preserving the design intent.
```

Each row must include:

```txt
index
title
description
right-side thumbnail using daisy-1.jpg
```

Avoid decorative row dividers unless clearly required by the reference.

### 14.5 Home Testimonials

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

- Static testimonial block.
- Dark rectangle on the left.
- Quote on the right.
- Small author details below.
- Static arrows acceptable.
- No carousel logic required.
- No card shadow.
- No rounded card.

### 14.6 Home Footer

Use shared Footer component.

---

## 15. About Page Contract

File:

```txt
src/pages/AboutPage.tsx
```

Reference:

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

### 15.1 About Hero

Use:

```txt
src/assets/placeholders/daisy-9.jpg
```

Visible title:

```txt
ALEX
CHEN
```

Layout requirements:

- Full-width image hero.
- Header overlays image.
- Large title at bottom-left.
- Title must be readable.
- Use `object-fit: cover`.

### 15.2 About Statement

Label:

```txt
Statement
```

Main text:

```txt
I build digital experiences where design meets code — interactive, intentional, and human-first. I collaborate with brands that have a story to tell, turning ideas into fluid, responsive experiences.
```

Right block:

```txt
What drives me:
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

### 15.3 Skills + AC Block

Skills:

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

Huge typography:

```txt
AC
```

Layout requirements:

- Skills appear in small text columns.
- `AC` must be extremely large and bold.
- Keep sparse editorial layout.
- Do not add colored skill tags.
- Do not add pill badges.
- Do not add card backgrounds.

### 15.4 How I Work

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

- Sparse rows.
- No cards.
- No background boxes.
- No unnecessary divider lines.
- Small row index on the right.

### 15.5 About Projects

Reuse project data from:

```txt
src/data/projects.ts
```

Use a similar asymmetric “Things I’ve built” layout from Home.

### 15.6 About Footer

Use shared Footer component.

---

## 16. Work Page Contract

File:

```txt
src/pages/WorkPage.tsx
```

Reference:

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

- White background.
- Header at top.
- Horizontal editorial project index.
- Large whitespace.
- Huge `WORKS` text bottom-left.
- `→ Let’s work together` bottom-right.

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

- Do not create a normal 3-column grid.
- Luminary Studio: large square image on the left.
- Orbital Finance: medium horizontal image.
- Plant Shop: medium horizontal image.
- Aether - AI Studio: tall/large image.
- Polaris Protocol: tall image at far right.
- Horizontal overflow is acceptable on desktop if needed.
- No card borders.
- No shadows.
- No rounded cards.

---

## 17. Project Detail Page Contract

File:

```txt
src/pages/ProjectDetailPage.tsx
```

Reference:

```txt
docs/design-reference/project-detail-reference.png
```

Main route:

```txt
/work/luminary-studio
```

This route must work.

Use `useParams()` to read the slug and find the project from:

```txt
src/data/projects.ts
```

If slug is unknown:

```txt
redirect to /work/luminary-studio
```

or render a simple not-found state.

### 17.1 Project Intro

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

- Large title top-left.
- Small metadata columns across the top section.
- Lots of whitespace.
- No card styling.
- No decorative divider.

### 17.2 Gallery

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

- First large full-width landscape image.
- Then two equal columns.
- Then large full-width landscape image.
- Then two equal columns.
- Use `object-fit: cover`.
- Use `aspect-ratio`.
- Match the reference image proportions.

### 17.3 Next Project

Title:

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

Layout requirements:

- Centered section.
- Minimal typography.
- No card border.
- No shadow.
- No rounded image.

### 17.4 Project Detail Footer

Use shared Footer component.

---

## 18. Shared Footer Contract

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

- Huge black CTA typography.
- Tight line-height.
- Smile SVG placed after CTA text.
- Small metadata columns below.
- Lots of whitespace.
- No boxed footer style.
- No gray footer background.
- No colored footer links.

---

## 19. CSS Requirements

Use plain CSS.

Allowed style files:

```txt
src/styles/tokens.css
src/styles/global.css
src/pages/*.css
src/components/*.css
```

Required global behavior:

```css
body {
  min-width: 1025px;
  margin: 0;
  font-family: var(--font-main);
  color: var(--color-text);
  background: var(--color-bg);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
}
```

Images:

```css
.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Display typography direction:

```css
.display-title {
  font-family: var(--font-main);
  font-size: clamp(80px, 12vw, 190px);
  line-height: 0.85;
  letter-spacing: -0.06em;
  font-weight: 700;
}
```

---

## 20. Recommended Components

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

## 21. Implementation Priorities

Fix in this order:

```txt
1. Routes and page existence
2. Broken asset imports
3. Project data
4. Header branding/navigation
5. Design system lockdown
6. Home layout
7. About layout
8. Work layout
9. Project Detail layout
10. Footer
11. CSS polish
12. Build validation
```

The priority is matching the supplied references, not preserving the previous wrong implementation.

---

## 22. Validation Checklist

Run:

```bash
npm run build
```

If these scripts exist, also run:

```bash
npm run typecheck
npm run lint
```

Do not claim typecheck or lint passed if the scripts do not exist.

Manually verify these URLs:

```txt
/
 /about
/work
/work/luminary-studio
/project-detail
```

Check:

```txt
Home page exists
About page exists
Work page exists
Project Detail page exists
Header links work
Project cards link to /work/:slug
/work/luminary-studio works
/project-detail redirects to /work/luminary-studio
No old missing assets are imported
No external images are used
No full-page screenshots are rendered as UI
Footer uses smile_face.svg
All text uses Inter only
UI colors are black and white only
No unnecessary dividers
No rounded cards
No card shadows
Desktop layout works at 1025px and above
```

---

## 23. Code Search Validation

Before final report, search for violations:

```bash
rg "font-family|font:" src
rg "color:|background:|background-color:|linear-gradient|rgb\\(|rgba\\(|#[0-9a-fA-F]{3,8}" src
rg "border|border-top|border-bottom|border-left|border-right" src
rg "box-shadow|drop-shadow|filter:" src
rg "border-radius" src
```

For each remaining match, verify it is intentional.

Remaining allowed examples:

```css
font-family: var(--font-main);
font-family: "Inter", sans-serif;
color: var(--color-text);
background: var(--color-bg);
opacity: 0.65;
border: none;
border-radius: 0;
box-shadow: none;
```

---

## 24. Non-Negotiables

Do not:

```txt
Use more than one font
Use any font except Inter
Use extra UI colors
Use random external images
Use reference screenshots as UI
Import missing flower SVGs
Import missing portrait SVG
Keep old identity like Marlowe Vance
Keep old project names
Make Work page a generic 3-column grid
Remove Project Detail page
Hide Project Detail behind a broken route
Add decorative dividers everywhere
Add rounded cards
Add shadows
Add colored buttons
Claim validation passed without running build
```

---

## 25. Final Implementation Report Format

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

## 5. Design system validation

| Rule | Status |
| ---- | ------ |

## 6. Validation results

| Command | Result |
| ------- | ------ |

## 7. Remaining issues / limitations
```
