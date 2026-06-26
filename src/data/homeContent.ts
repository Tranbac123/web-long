/**
 * Home page copy — centralized so HomePage.tsx renders data, not inline text.
 * Text values are the exact Figma Home node (85:382) strings; do not rewrite.
 */
export const home = {
  hero: {
    titleLines: ["CREATIVE", "DEVELOPER"],
    hi: "Hi There",
    copy: "I build immersive experiences for brands with direction and momentum. I am Alex Chen.",
    location: "Based in Tokyo, Japan",
    scroll: "Scroll Down",
  },
  intro: {
    titleLines: ["Turning ideas into", "immersive experiences."],
    label: "About Me",
    paragraphs: [
      "A creative developer with 5 years of experience building high-performance websites and digital products. I work at the intersection of design and code, where aesthetics meet functionality.",
      "My focus is on motion, interaction, and the details that make a product feel alive.",
    ],
    imageAlt: "Field of daisies in soft natural light",
  },
  showcaseTitle: "Things I’ve built.",
  servicesTitle: "How I can help you.",
} as const;
