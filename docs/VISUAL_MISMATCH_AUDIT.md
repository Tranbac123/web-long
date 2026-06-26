# VISUAL MISMATCH AUDIT — Alex Chen Portfolio

Method: cropped each **reference PNG** at the exact Figma section y-offsets (puppeteer `clip`)
and captured the **live site** at 1728px (element screenshots), then compared section by section.
Evidence lives in the session scratchpad (`audit/ref2-*.png` vs `audit/site-*.png`).

Severity: HIGH = wrong structure/composition/order. MEDIUM = spacing/scale/placement/colour
visibly off. LOW = minor/subjective.

---

## Home (node 85:382)

| Section | Expected (Figma) | Current impl | Problem | Severity | Planned fix |
|---|---|---|---|---|---|
| Hero | Title @ ~21% down; mid block = "Hi There" label + paragraph + "Based in Tokyo, Japan"; Scroll Down bottom-left | `HomePage.tsx` `.home-hero` | Title sits too high (~13%); supporting copy is a single block right under title; no "Hi There" / "Based in Tokyo, Japan" | MEDIUM | Re-rhythm hero: title top, copy block centered with Hi There + paragraph + location, Scroll Down bottom |
| Intro | 632px image + paragraph beside | `.home-intro` | Matches (prior fix, verified 632×652) | NONE | — |
| Things I've built | Card label = title + row(category left, **year** right) | `ProjectShowcase.tsx` `.showcase-card__meta` | Composition correct, but label shows category only — **year missing**, not a justified row | MEDIUM | Add year; make meta a justified category/year row |
| Services | index · title · desc · right thumb | `.home-services` | Matches | NONE | — |
| Testimonials | label + 01/03 + arrows; dark block 325×400; quote; author | `TestimonialCard` | Matches | NONE | — |
| Footer | CTA 3 lines, "SOMETHING" indented (Figma x385); black on white; smile | `Footer.tsx` | CTA all left-aligned — "SOMETHING" not indented; column labels uppercase vs Figma `(Location)` | MEDIUM (indent) / LOW (labels) | Indent middle CTA line; (optional) parens labels |

## About (node 77:169)

| Section | Expected (Figma) | Current impl | Problem | Severity | Planned fix |
|---|---|---|---|---|---|
| Hero | ALEX/CHEN bottom-left; Scroll Down bottom-right | `.about-hero` | Matches | NONE | — |
| Statement | "(About Me)" label + 45px statement; **black dot below statement (left)**; right block "What drives me" + list (**black**) + note + link | `.about-statement` | Drivers list is muted grey (should be solid black); **black dot absent here** (it's in skills section instead) | MEDIUM | Move dot into statement; make drivers list solid black |
| Skills + AC | Skill columns (2×2) aligned at top; giant AC (720/800) beside them | `.about-skills` | Dot sits at top of skills → pushes columns/AC down; AC not aligned with columns' top | MEDIUM | Remove dot from skills; align columns + AC at section top |
| How I Work | sparse rows: title · 42px desc · index right | `.about-process` | Matches (verify) | LOW | — |
| Projects | reuse Things composition | `ProjectShowcase` | Matches (+ year fix applies) | NONE | — |
| Footer | white CTA | `Footer` | Same as Home | (see Home) | — |

## Work (node 151:2)

| Section | Expected | Current impl | Problem | Severity |
|---|---|---|---|---|
| Project index | 5 cards top-aligned, 24px gaps, varied heights | `.work-rail` | Matches reference closely | NONE |
| WORKS title | huge bottom-left | `.work-end__title` | Matches | NONE |
| Work Together link | bottom-right | `.work-end__cta` | Matches | NONE |
| Viewport composition | single ~1117 viewport | `.work` | Matches (Polaris minor right overflow per spec) | NONE/LOW |

## Project Detail (node 158:52)

| Section | Expected (Figma) | Current impl | Problem | Severity | Planned fix |
|---|---|---|---|---|---|
| Intro | LUMINARY/STUDIO top-left; metadata in a **horizontal bottom row**: 2024 (left) · role+paragraph · tools+paragraph · Scroll Down (right) | `.detail-intro` `.detail-meta` | Metadata is a right-side 2×2 grid with `Role/Description/Tools/Scroll` dt labels — wrong placement/structure | MEDIUM | Restructure intro: title top-left; bottom meta row (year, role+desc, tools+desc, scroll) |
| Gallery | full 1680×1117 → 2-col 800×1117 → full → 2-col, gap 72, order daisy-8/3/4/8/3/4 | `.detail-gallery` | Matches | NONE | — |
| Next Project | centered, Polaris + daisy-6 | `.detail-next` | Matches | NONE | — |
| Footer | white CTA | `Footer` | Same as Home | (see Home) | — |

## Testimonials (nodes 85:524 / 77:344 / 77:363)

| Item | Expected | Current | Problem | Severity |
|---|---|---|---|---|
| States / Controls / Counter / Quote / Author | 1 visible, 01/03, prev/next wrap, dark block 325×400, quote 60px, bordered arrows | `TestimonialCard.tsx` | Matches reference | NONE |

---

## Fix plan (HIGH/MEDIUM only)

1. **Home hero** — reposition title (~21%), add `Hi There` + paragraph + `Based in Tokyo, Japan`, centered copy, Scroll Down bottom.
2. **Home showcase labels** — add year; justified category/year row.
3. **Home footer CTA** — indent the `SOMETHING` line.
4. **About statement** — move black dot into statement; drivers list solid black.
5. **About skills** — remove dot; align columns + AC at top.
6. **Project Detail intro** — metadata as a horizontal bottom row (year · role+desc · tools+desc · scroll).

Scaling note: large type uses Figma-px → `vw` clamps (`figmaPx/1728*100 vw`, capped at px); section
widths use the 1680px content band (1728 − 2×24 gutter).
