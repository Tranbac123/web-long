# FIGMA TEXT AUDIT — exact visible text from node JSON

Extracted via `scripts/dump-text.mjs` from `docs/figma/*-node.json` (frame 1728).
**Figma text is authoritative** (wins over DESIGN_CONTRACT). Format: `text` — Inter size/weight.

## Global / nav (Home 85:382, About 77:169, Detail 158:52)
- Brand: `Alex Chen` — 32/500
- Nav: `Home` · `About` · **`Works`** — 24/500  ← current shows "Work" (WRONG)

## Home — Hero
- `CREATIVE` / `DEVELOPER` — 150/500
- `Hi There` — 24/500 @23,605
- `I build immersive experiences for brands with direction and momentum.\nI am Alex Chen.` — 24/500 @286,605
- `Scroll Down` — 24/500 (bottom-left)

## Home — Things I've built (titles 44/500, category 24/600, year 24/600, year right)
| Project | Category (exact) | Year |
|---|---|---|
| Luminary Studio | `Branding · Web Design · Motion` | `2026` |
| Orbital Finance | `UI Design` | `2026` |
| Plant Shop | `UI Design` | `2026` |
| Aether - AI Studio | `Art Direction · 3D · Creative Coding` | `2026` |
| Polaris Protocol | `UX Strategy` | `2026` |
| Terra | `Sustainability` | `2026` |
- Section title `Things I've built.` 150/500 · link `Let’s work together` 32/600
- ⚠ current data: commas not `·`; categories "System"/"3D Strategy" wrong; years 2024/2025/2026 wrong → **all 2026**

## Home — Services (index 20/600, title 32/600, desc 24/600)
- `Creative Development` — `From landing pages to full web applications - built with clean code, smooth animations, and pixel-perfect attention to detail.`
- `Motion & Interaction` — `GSAP, Framer Motion, CSS animations — I bring interfaces to life with purposeful, fluid motion that enhances the user experience.`
- `Design to Code` — `Got a Figma file? I'll turn it into a production-ready website that looks exactly like the design — down to the pixel.`
- Title `How I can help you.` 150/500 · (Figma indices all read "01"; keep 01/02/03)

## Home — Testimonials (label 32/600, counter 32/600, quote 60/500, author 32/600, role 32/500)
| State | Counter | Quote | Author | Role |
|---|---|---|---|---|
| 85:524 | 01 / 03 | "Alex didn't just build a website - he built our brand's voice. Clean, intentional, and a pleasure to work with." | `Jamie Lin` | `Creative Director, Luminary Studio` |
| 77:344 | 02 / 03 | "Finally a designer who understands both aesthetics and strategy. Our conversion rate doubled after the redesign." | `Sofia Marquez` | `Founder, Orbital Finance` |
| 77:363 | 03 / 03 | "Alex's attention to motion and micro-interactions made our plant shop feel alive online. Customers keep mentioning the experience." | `Tom Harper` | `Owner, Fauna Plant Shop` |
- ⚠ current data authors `Federico Alvarez`/`Simone Torres` WRONG → `Sofia Marquez`/`Tom Harper`

## Home / About / Detail — Footer (Contact)
- CTA `LET’S MAKE` / `SOMETHING` (indented x385) / `TOGETHER` — 250/500
- Credit `Design & code by Douglus Nguyen` — 28/600 (in CTA area, left)  ← current MISSING
- Columns (label 24/500, content 24/600):
  - `(Location)` → `Tokyo, Japan`
  - `(Socials)` → `hello@alexchen.dev` · `Dribbble` · `LinkedIn` · `Twitter`
  - `(Available)` → `Currently available for freelance projects and full-time opportunities. Open to work worldwide.`
  - (no label) → `Want a portfolio that moves, breathes, and leaves an impression? Let's build yours` · `toannguyenvan145@gmail.com` · `LinkedIn`
- ⚠ current: labels uppercase (no parens); socials Instagram/Behance; email transparencymental@gmail.com; credit missing → **fix all to Figma**

## About — Hero
- `ALEX` / `CHEN` 150/500 · `Scroll Down` 24/500 @1579,1043 (bottom-right)

## About — Statement
- Label `(About Me)` — **18/600** @25,1333  ← current shows "Statement" (WRONG)
- Statement `I build digital experiences where design meets code - interactive, intentional, and human-first. I collaborate with brands that have a story to tell, turning ideas into fluid, responsive experiences.` — 45/500
- `What drives me:` 32/600 then (32/500): `Clean typography` · `Thoughtful micro-interactions` · `Performance without compromise` · `Interfaces that feel as good as they look`
- `When I'm not coding, I'm probably sketching, collecting vinyl, or chasing good light.` 32/500
- `Let’s work together` 32/600
- ⚠ current driver/note font 24 → should be **32**

## About — Skills (32/600) — 4 groups
- `Figma` `Adobe XD` `Illustrator` `Photoshop`
- `TypeScript` `Next.js` `Webflow` `Framer` `GSAP`
- `WebGL` `Three.js` **`Animations`** `Vercel` `Netlify`  ← current "JavaScript" WRONG
- `HTML` `CSS` `Javascript` `React` `Lottie`
- `AC` 720/800 · ⚠ current skill font 24 → should be **32**

## About — How I Work (title 150/500, row title 32/600, desc 42/600, index 24/600)
- `Detail-obsessed` (01) — `From landing pages to full web applications - built with clean code, smooth animations, and pixel-perfect attention to detail.`
- `Motion with purpose` (02) — `I bring interfaces to life with purposeful, fluid motion that enhances the user experience.`
- `Honest collaboration` (03) — `I treat every project like it's my own. Clear communication, no surprises.`

## Work (151:2)
- `WORKS` 150/500 (bottom-left) · `Let’s work together` 32/600 (bottom-right)
- Card titles 28/500 (Aether 600): Luminary Studio, Orbital Finance, Plant Shop, Aether - AI Studio, Polaris Protocol

## Project Detail (158:52) — Intro metadata (all 24/500)
- Title `LUMINARY` / `STUDIO` 150/500
- `2024` (year) · `Scroll Down` (right)
- `Web Design, Motion, Branding` (disciplines) + `The brief was simple: make it feel alive. Luminary Studio needed a digital presence that matched the energy of their work — bold, confident, and impossible to ignore.`
- `Figma · GSAP · Next.js · Three.js` (tools) + `We stripped everything back. No clutter, no noise — just type, motion, and white space doing the heavy lifting. Every scroll triggers something. Every hover has intent.`
- Next project: `Next project` 150/500 · `Polaris Protocol` 44/500
