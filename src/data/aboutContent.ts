/**
 * About page copy — centralized so AboutPage.tsx renders data, not inline arrays.
 * Text values are the exact Figma About node (77:169) strings; do not rewrite.
 */
export const about = {
  hero: {
    titleLines: ["ALEX", "CHEN"],
    scroll: "Scroll Down",
  },
  statement: {
    label: "(About Me)",
    text: "I build digital experiences where design meets code — interactive, intentional, and human-first. I collaborate with brands that have a story to tell, turning ideas into fluid, responsive experiences.",
  },
  drivers: {
    title: "What drives me:",
    items: [
      "Clean typography",
      "Thoughtful micro-interactions",
      "Performance without compromise",
      "Interfaces that feel as good as they look",
    ],
    note: "When I’m not coding, I’m probably sketching, collecting vinyl, or chasing good light.",
  },
  skillGroups: [
    ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    ["TypeScript", "Next.js", "Webflow", "Framer", "GSAP"],
    ["WebGL", "Three.js", "Animations", "Vercel", "Netlify"],
    ["HTML", "CSS", "JavaScript", "React", "Lottie"],
  ],
  processTitle: "How I Work",
  process: [
    {
      title: "Detail-obsessed",
      description:
        "From landing pages to full web applications — built with clean code, smooth animations, and pixel-perfect attention to detail.",
      num: "(01)",
    },
    {
      title: "Motion with purpose",
      description:
        "I bring interfaces to life with purposeful, fluid motion that enhances the user experience.",
      num: "(02)",
    },
    {
      title: "Honest collaboration",
      description:
        "I treat every project like it's my own. Clear communication, no surprises.",
      num: "(03)",
    },
  ],
  builtTitle: "Things I’ve built.",
} as const;
