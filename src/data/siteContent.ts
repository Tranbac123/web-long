/** Centralized site-wide copy and identity. */
export const site = {
  name: "Alex Chen",
  email: "transparencymental@gmail.com",
  ctaLink: { label: "Let’s work together", to: "/about" },
  footer: {
    cta: "LET’S MAKE SOMETHING TOGETHER",
    location: "Tokyo, Japan",
    socials: ["Instagram", "Behance", "LinkedIn", "Twitter"],
    available:
      "Currently available for freelance projects and full-time collaboration. Open to work worldwide.",
    contactPitch:
      "Want a portfolio that moves, breathes, and turns users into believers?",
  },
} as const;
