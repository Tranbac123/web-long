# LAYOUT SPEC — Alex Chen Portfolio

This file translates the **Figma JSON** (`docs/figma/full-file.json`, extracted per-node)
into implementation guidance. Values marked `Figma` are read directly from node JSON
(frame is **1728px wide**). `estimated` = visually inferred. `unknown` = not available.

> All large measurements are given as Figma px @1728 frame. For responsive desktop
> (min 1025, optimize 1440) convert big type to a `vw` clamp: `value/1728*100 vw`,
> capped at the Figma px. Example: 150px → `clamp(72px, 8.68vw, 150px)`.

---

## 1. Sources

| # | Source | Status |
|---|---|---|
| 1 | `docs/DESIGN_CONTRACT.md` | ✅ content/routes/asset truth |
| 2 | `docs/figma/full-file.json` + extracted node JSON | ✅ measurement truth |
| 3 | `docs/design-reference/*.png` | ✅ visual cross-check |
| 4 | `src/` | context only |

Extraction: `scripts/extract-figma-page-nodes.mjs` (reads `full-file.json`, writes
`home-node.json`, `about-node.json`, `work-node.json`, `project-detail-node.json`,
`testimonials-node.json`). Analysis: `scripts/summarize-node.mjs`.
No `FIGMA_TOKEN`/`FIGMA_FILE_KEY` needed (full file present).

## 2. Canonical Figma Nodes

| Page | Node ID | Name | Size (Figma) |
|---|---|---|---|
| Home | `85:382` | Home Page | 1728 × 11109 |
| About | `77:169` | About Page | 1728 × 11170 |
| Work | `151:2` | Works Page | 1728 × 1117 |
| Project Detail | `158:52` | Project Detail Page | 1728 × 9414 |
| Testimonials state 1 | `85:524` | (in Home) | 1728 × 1171 |
| Testimonials state 2/3 | `77:344` / `77:363` | — | — |

Ignored: `130:51` (Vector), and old/duplicate frames `21:57`, `38:2`, `85:383`, `77:170`, `161:267`.

## 3. Global Layout

| Property | Value | Source |
|---|---|---|
| Frame width | 1728px (optimize 1440, min 1025) | Figma / contract |
| Side gutter | 24px content, 32px for nav/hero/work titles | Figma (text x=23–32) |
| Header (navbar) | y=54, height 38, full-width minus 32 gutter, `SPACE_BETWEEN`; brand `Alex Chen` Inter 32/500; navlinks gap 49 | Figma |
| Header behavior | overlay white text on Home/About hero; black on Work/Detail | contract §4 |
| Hero height | 1117px (≈ one viewport) on all pages | Figma |
| Section width | full-bleed frames; content inset 24px | Figma |
| Background | white `#ffffff` everywhere incl. footer | Figma (Contact fill r1g1b1) |
| Text | black `#050505` | contract |

## 4. Global Typography

Font: **`"Inter", sans-serif`** only. Key Figma styles (px @1728):

| Role | Size / weight / line-height / letter-spacing | Source |
|---|---|---|
| Display (hero title, section titles, `WORKS`, `Next project`, `Turning ideas…`) | **150 / 500 / 135 (0.9) / -10.5 (-0.07em)** | Figma |
| Footer CTA (`LET'S MAKE` …) | **250 / 500 / 225 (0.9) / -25 (-0.10em)** | Figma |
| `AC` (about) | **720 / 800 / 720 / -80 (-0.11em)** | Figma |
| Project card title (Things I've built) | 44 / 500 / 53 / -2.2 | Figma |
| Quote (testimonial) | 60 / 500 / 72 (1.2) / -3 (-0.05em) | Figma |
| About statement | 45 / 500 / 58 / -2.25 | Figma |
| About "How I Work" description | 42 / 600 / 50 / -2.1 | Figma |
| Section label / counter / author / role / service title | 32 / 500–600 / 38 / -1.6 | Figma |
| Work card label | 28 / 500 (Aether 600) / 34 / -1.4 | Figma |
| Body / meta / "Scroll Down" / service desc | 24 / 400–600 / 29 / -1.2 | Figma |
| Eyebrow (`(About Me)`, service index `01`) | 18–20 / 600 / 22–24 / -0.9 | Figma |

Muted text = same ink at `opacity: 0.65` (no grays).

## 5. Global Image Rules

`object-fit: cover` + `aspect-ratio`; square corners; no shadow/radius; photography is the
only color. Placeholder bg = white. Asset map (contract §6) is authoritative — see report §6.

---

## 6. Home Page (`85:382`, 1728×11109)

Section order + y-offset (Figma): Hero(0) → About/Intro(1117) → works/Things I've built(2537) → Services(5990) → Testimonials(7497) → break/banner(8668) → Contact/footer(9785).

### 6.1 Hero (y0, 1728×1117)
- Title frame 797×270 @23,237 → `CREATIVE` / `DEVELOPER`, each Inter 150/500, lh135.
- "Hi There" label 24/500 @23,605; supporting paragraph 24/500 @286,605 (w429).
- "Based in Tokyo, Japan" 24/400 @286,740. `Scroll Down` 24/500 @23,1043 (bottom-left).
- Background image full-bleed (darkened). *Content per contract overrides Figma's placeholder copy.*

### 6.2 Intro (y1117)
- Title `Turning ideas into` / `immersive experiences.` 150/500 @24,1237.
- `(About me)` label 18/600; intro image (Frame 7) 632×652 @418,1579 (~1:1); paragraph; `→ Let's work together` link.

### 6.3 Things I've built (`works`, y2537, 1728×3440) — ASYMMETRIC
Title `Things I've built.` 150/500 @24,2625. Cards (x,y rel page; w×h; image / label):

| Project | Asset | x,y | Card w×h | Image w×h | Aspect |
|---|---|---|---|---|---|
| Luminary Studio | daisy-2 | 24,2896 | 766×986 | 766×778 | ~1:1 (0.985) |
| Orbital Finance | daisy-3 | 940,2896 | 370×518 | 370×310 | ~1.19 (landscape) |
| Plant Shop | daisy-4 | 1334,2896 | 370×518 | 370×310 | ~1.19 |
| Aether – AI Studio | daisy-5 | 942,4091 | 768×986 | 768×778 | ~1:1 |
| Polaris Protocol | daisy-6 | 942,5288 | 370×538 | 370×310 | ~1.19 |
| Terra | daisy-7 | 1336,5288 | 370×538 | 370×310 | ~1.19 |

- Luminary = large left; Orbital+Plant small top-right (gap 24); Aether = large lower-right (starts below Luminary); Polaris+Terra small below Aether. NOT an equal grid.
- Card label frame 160 tall: title 44/500 + gap 39 + category. Card vertical gap (image→label) 48 (top) / 68 (bottom row).
- `→ Let's work together` link row @25,5937.

### 6.4 How I can help you (Services, y5990, 1728×1509)
Title `How I can help you.` 150/500 @23,6274. Rows (Frame31/32/33) 1681×224, horizontal, y=6547/6891/7235 (row gap 120). Row columns: index `01` 20/600 @x23 · title 32/600 @x238 · description 24/600 @x745 (w395) · **thumbnail 371×224 @x1333** (daisy-1, landscape ~1.66).

### 6.5 Testimonials (`85:524`, y7497, 1728×1171)
- `Testimonials` label 32/600 @22,7701. Counter Frame 118×38 @249,7701: `01`(32/600) `/`(32/600) `03` , gap 14.
- Arrows: two 80×80 squares @1521 & @1622, y7701 (pad 24, gap ~21) — **bordered squares** (shown in Figma).
- Dark block 325×400 @22,7855 (solid black).
- Quote 60/500 lh72 ls-3 @490,7853 (w970). Author block @490,8245: name 32/600 + role 32/500 (gap 12).
- Authors (Figma node = contract): Jamie Lin / Federico Alvarez / Simone Torres.

### 6.6 Footer (banner + Contact, y8668 / 9785) — WHITE, not dark
- Banner `break` = daisy-8 full-bleed 1728×1117 @y8668.
- Contact frame **white fill** (`r1g1b1`); CTA black: `LET'S MAKE` / `SOMETHING` / `TOGETHER` each 250/500, lh225, ls-25 (3 lines), x≈18–385.
- `smile_face` 225×225 @1189,10507 (on the TOGETHER line, right) — **black icon, no invert**.
- Credit `Design & code by …` 28/700. Contact Footer 1670×203 @24,10869: left group (Frame38, 819w, 3 columns gap113) + right column (Frame39, 362w). Columns: Location / Socials / Available / Contact (content per contract §12).

---

## 7. About Page (`77:169`, 1728×11170)

Order: Hero(0) → About/Statement(1117) → Skills(2751) → Services=How I Work(3646) → works/Things(5093) → break(8729) → Contact(9846).

### 7.1 Hero
- Title `ALEX` / `CHEN` 393×270 @23,773 (lower-left), Inter 150/500. `Scroll Down` 24/500 @1579,1043 (**bottom-right**). Image daisy-9 full-bleed.

### 7.2 Statement (y1117, h1634)
- `(About Me)` 18/600 @25,1333. Statement text **45/500 lh58 ls-2.25** @25,1321 (w910).
- Black `Ellipse 1` **300×300** @330,1929 (decorative dot).
- Right block (Frame46) 474×308 @1075,1855: `What drives me:` + 4 lines. Note 32/500 @1075,2261 (w392). `→ Let's work together` @1075,2475.

### 7.3 Skills + AC (`Skills`, y2751, h895)
- Frame52 1568×720 @80,2751 horizontal gap63: **skills 2×2 grid** (Frame51 438×626; four groups 165×209, col-gap ~108, row-gap ~208, each VERTICAL gap16) + **`AC` 720/800** lh720 ls-80 @581 (w1067).

### 7.4 How I Work (Services, y3646, h1437)
- Title `How I Work` 150/500 @23,3750. Rows 1678×200, y=4014/4358/4711: title 32/600 @x24 · description **42/600 lh50** @x649 (w640) · index `(0n)` 24/600 @x1656 (right).

### 7.5 Projects
- Reuses the **Things I've built** composition (identical frames, y5093). See §6.3.

### 7.6 Footer
- Identical white footer — see §6.6.

---

## 8. Work Page (`151:2`, 1728×1117) — single viewport, horizontal

### 8.1 Project Index
All five cards **top-aligned at y≈234**, uniform **24px** horizontal gaps, heights vary:

| Project | Asset | x,y | Card w×h | Image w×h | Aspect | Label |
|---|---|---|---|---|---|---|
| Luminary Studio | daisy-2 | 32,234 | 365×540 | 365×458 | ~4:5 portrait | 28/500 |
| Orbital Finance | daisy-3 | 421,234 | 324×282 | 324×200 | ~8:5 landscape (short) | 28/500 |
| Plant Shop | daisy-4 | 769,234 | 324×282 | 324×200 | ~8:5 landscape (short) | 28/500 |
| Aether – AI Studio | daisy-5 | 1117,234 | 365×540 | 365×458 | ~4:5 portrait | 28/**600** (bold) |
| Polaris Protocol | daisy-6 | 1506,239 | 365×540 | 365×458 | ~4:5 portrait | 28/500 |

- Card = image + label below (vertical gap 48). Orbital/Plant are short landscape thumbs sitting at the top (whitespace below). Right edge (~1871) slightly exceeds frame → minor right overflow is expected/acceptable.

### 8.2 WORKS Display Title
- `WORKS` 150/500 lh135 ls-10.5 @32,925 (**bottom-left**), frame 508×135.

### 8.3 Work Together Link
- `→ Let's work together` (arrow 32×32 + text 32/600) @1383,1020 (**bottom-right**).

---

## 9. Project Detail Page (`158:52`, 1728×9414)

### 9.1 Intro (Hero y0, 1117)
- Title `LUMINARY` / `STUDIO` 710×270 @32,289 (150/500, uppercase).
- `2024` 24/500 @32,665 (under title, left). `Scroll Down` 24/500 @1565,679 (right).
- Meta columns (24/500): Role line `Web Design, Motion, Branding` @642,680 + paragraph @642,757 (w313); Tools line `Figma · GSAP · Next.js · Three.js` @1113,680 + paragraph @1113,757 (w313). *Use contract metadata for content (Role/Description/Tools/Scroll).*

### 9.2 Gallery
Exact order + **real aspect ratios**:

| # | Asset | Block | Size (Figma) | Aspect |
|---|---|---|---|---|
| 1 | daisy-8 | full-width landscape (`img1`) | 1680×1117 | 1.5 : 1 |
| 2 | daisy-3 | 2-col left (`img2`, Frame60) | 800×1117 | ~0.72 : 1 (portrait) |
| 3 | daisy-4 | 2-col right (`img3`) | 800×1117 | ~0.72 : 1 |
| 4 | daisy-8 | full-width landscape (`img4`) | 1680×1117 | 1.5 : 1 |
| 5 | daisy-3 | 2-col left (`img5`, Frame61) | 800×1117 | ~0.72 : 1 |
| 6 | daisy-4 | 2-col right (`img6`) | 800×1117 | ~0.72 : 1 |

- 2-column gap **72px** (`SPACE_BETWEEN`). Full images full content width (1680 ≈ 24px gutters).

### 9.3 Next Project
- Title `Next project` 150/500 @504,6023 (centered). Thumbnail (Frame12) 370×310 @702,6282 (daisy-6). `Polaris Protocol` 44/500 @702,6660. Link → `/work/polaris-protocol`.

### 9.4 Footer
- Identical white footer — see §6.6.

---

## 10. Testimonials Interaction

Layout per §6.5. Behavior (contract §8.5):
- One at a time; 3 testimonials; counter `0n / 03` (pad 2).
- `←` prev, `→` next; wraps (01↔03). No autoplay, no animation, no library.
- Arrow `<button>`s keyboard-focusable + `aria-label`.
- States `85:524`/`77:344`/`77:363` differ only by index/quote/author.

## 11. Missing / estimated measurements

| Area | Status |
|---|---|
| Exact paddings on auto-layout frames | `unknown` (Figma reported `?` for several pad values) |
| Footer column inner text sizes | `estimated` (structure known: 819w left group of 3, 362w right) |
| Skills grid exact gaps | `estimated` (~108 col / ~208 row from positions) |
| Color of dark block / footer banner overlays | from fills where present; otherwise `estimated` |
| Responsive scaling of 1728 px → 1440/1025 | implemented via `vw` clamps (derived, not in Figma) |

## 12. Implementation Priorities

1. **Footer → white** (black text/smile, 3-line CTA) — Figma fill is white, current build was dark.
2. **Work page → top-aligned row** (gap 24, varied heights) — current build mis-staggered.
3. **Display type scale → 150px/500** (sections + hero + WORKS + Next project); `AC` 720/800.
4. **Things I've built** aspects: large ~1:1, small landscape ~1.19; title 44px.
5. **Project Detail gallery** aspects: full 1.5:1, 2-col 0.72:1 (portrait), gap 72.
6. **Testimonials** sizing (block 325×400, quote 60px, labels 32px).
7. **About** hero Scroll Down bottom-right; 300px dot; How-I-Work desc 42px.

Preserve the locked system: Inter only · white bg · black text · photography only color ·
no dividers/rounded cards/shadows/gradients/colored buttons · real HTML text.
