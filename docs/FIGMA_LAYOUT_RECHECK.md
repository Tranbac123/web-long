# FIGMA LAYOUT RECHECK — key dimensions (node JSON, frame 1728)

Numbers are Figma px @1728. Implementation scales with `vw` clamps (px/1728·100 vw, capped at px).

## Global
- Gutter 24px (content band 1680). Navbar y54 h38 → header ~92px. Hero band 1117 (≈100vh).
- Type: display 150/500 lh135(0.9) ls-10.5(-0.07em); CTA 250/500 lh225 ls-25(-0.10em); AC 720/800 ls-80(-0.11em); body/meta 24/500–600 lh29 ls-1.2(-0.05em); labels 24/500; section labels/service title/testimonial 32/600.

## Home
- Hero: title @23,237 (~21% down); Hi There @23,605 + paragraph @286,605 (label col ~240, copy ~430w); Scroll Down @23,1043.
- Things (works frame @0,2537, 1728×3440): Luminary 766×986 img 766×778 @24,2896; Orbital 370×518 img 370×310 @940,2896; Plant 370×518 @1334,2896; Aether 768×986 img 768×778 @942,4091; Polaris 370×538 @942,5288; Terra 370×538 @1336,5288. Label: title 44/500 + row(category left 24/600, year right 24/600).
- Services rows 1681×224, gap 120; cols: index@23, title@238, desc@745(w395), thumb 371×224 @1333 (image cover).
- Testimonials: block 325×400 @22,7855; quote @490 w970 60/500; author @492,748.
- Footer: banner (break) 1728×1117 full-bleed; CTA 3 lines 250/500 ("SOMETHING" indent x385); smile 225×225 @1189; credit @40,10300; columns @x24/278/605/1332, label 24/500 + content 24/600.

## About
- Hero ALEX/CHEN @23,773/908; Scroll Down @1579,1043 (right).
- Statement: (About Me) 18/600 @25,1333; statement 45/500 @25,1321 (w910, first line indented); dot Ellipse 300×300 @330,1929; right block @1075 (What drives me 32/600 + list 32/500 + note 32/500 + link @1109,2476).
- Skills (Frame52 @80,2751 1568×720): cols 2×2 (165×209 each, col gap ~108, row gap ~208), text 32/600; AC @581 1067×720 800wt.
- How I Work rows 1678×200: title@x24 32/600, desc@x649 w640 42/600, index@x1656 24/600.

## Work (single 1728×1117)
- Cards top-aligned @y234, gap 24: Luminary 365×540 (img 365×458), Orbital 324×282 (img 324×200), Plant 324×282, Aether 365×540 (label bold), Polaris 365×540 @x32/421/769/1117/1506.
- WORKS @32,925 150/500; link @1383,1020.

## Project Detail (1728×9414)
- Intro title @32,289; meta row bottom (~y665–960): year@32, disciplines@642 + para@642,757(w313), tools@1113 + para@1113,757(w313), Scroll@1565.
- Gallery: img1 full 1680×1117 @24,1117; Frame60 2-col img2/img3 800×1117 gap72 @2282; img4 full @3447; Frame61 2-col @4612. (object-fit cover)
- Next: title 150/500 @504,6023; thumb 370×310 @702,6282; Polaris Protocol 44/500.

## Image rule
All image wrappers `overflow:hidden`; img `width/height:100%; object-fit:cover`. Full-bleed banner/gallery must not be capped by a narrow container.
