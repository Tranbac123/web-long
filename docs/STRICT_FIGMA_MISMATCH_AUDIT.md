# STRICT FIGMA MISMATCH AUDIT (Figma wins over contract)

| Page | Section | Figma expected | Current implementation | Severity | Required fix |
|---|---|---|---|---|---|
| Global | Nav | `Works` | `Work` | HIGH | Header label → "Works" (route stays /work) |
| Home | Things — years | all `2026` | 2024 / 2025 / 2026 | HIGH | `projects.ts` year → "2026" all |
| Home | Things — category | `·` separators; "UX Strategy", "Art Direction · 3D · Creative Coding", "Branding · Web Design · Motion" | commas; "3D Strategy", "...System" | HIGH | Update categories to exact Figma |
| Home | Testimonials authors | `Sofia Marquez` (Founder, Orbital Finance), `Tom Harper` (Owner, Fauna Plant Shop) | Federico Alvarez, Simone Torres | HIGH | `testimonials.ts` authors/roles → Figma |
| Home | Services | titles "Design to Code"; Figma descriptions | "Design To Code"; different copy | MEDIUM | `services.ts` titles + descriptions → Figma |
| Footer | Column labels | `(Location)` `(Socials)` `(Available)` (parens, 24/500, not uppercase) | `LOCATION`/`SOCIALS`/`AVAILABLE` uppercase eyebrow | HIGH | Parens labels, 24/500 non-uppercase |
| Footer | Socials | `hello@alexchen.dev`,`Dribbble`,`LinkedIn`,`Twitter` | Instagram,Behance,LinkedIn,Twitter | HIGH | siteContent socials → Figma |
| Footer | Email | `toannguyenvan145@gmail.com` | transparencymental@gmail.com | HIGH | siteContent email → Figma |
| Footer | Available text | "Currently available for freelance projects and full-time opportunities. Open to work worldwide." | "...freelance projects and full-time collaboration..." | MEDIUM | text → Figma |
| Footer | Contact pitch | "Want a portfolio that moves, breathes, and leaves an impression? Let's build yours" | "Want a portfolio that moves, breathes, and turns users into believers?" | MEDIUM | text → Figma |
| Footer | Credit | `Design & code by Douglus Nguyen` (28/600) | missing | MEDIUM | add credit line |
| Footer | Content font | 24/600 content, 24/500 labels | fs-small (14px) | MEDIUM | bump footer text to 24 |
| About | Statement label | `(About Me)` 18/600 (not uppercase) | `Statement` uppercase eyebrow | HIGH | label text + style → Figma |
| About | Drivers list / note | 32/500, solid black | 24px | MEDIUM | font → 32 |
| About | Skills item | `Animations` (col3 #3) | `JavaScript` | HIGH | data → "Animations" |
| About | Skills font | 32/600 | fs-24 | MEDIUM | font → 32 |
| Detail | Metadata | disciplines "Web Design, Motion, Branding"; tools "Figma · GSAP · Next.js · Three.js"; 2 brief paragraphs; year 2024 | role "Visual Design, Motion, Branding"; tools "Figma, GSAP, React, Three.js"; description+summary | MEDIUM | data → exact Figma text |
| Images | full-bleed / cover | banner + gallery full-bleed, object-fit cover | mostly OK (verify no container cap / right dark strip) | MEDIUM | verify after fixes |

## User-observed issues mapped
- "years wrong" → all 2026 (rows above).
- "parentheses removed" → footer `(Location)` etc + About `(About Me)`.
- "footer text/labels not matching" → socials/email/available/credit/labels.
- "creatively changed content" → categories, services copy, testimonial authors, detail metadata.
- "font sizes wrong" → footer 24, About skills/drivers 32, label 18.
- "images not filling" → verify banner/gallery/showcase cover (mostly already cover).

No LOW-only items deferred; all HIGH/MEDIUM scheduled for this pass.
