/** Centralized site-wide copy and identity. Text values match Figma exactly. */
export const site = {
  name: "Alex Chen",
  email: "toannguyenvan145@gmail.com",
  ctaLink: { label: "Let’s work together", to: "/about" },
  footer: {
    cta: "LET’S MAKE SOMETHING TOGETHER",
    credit: "Design & code by Douglus Nguyen",
    location: "Tokyo, Japan",
    socials: ["hello@alexchen.dev", "Dribbble", "LinkedIn", "Twitter"],
    available:
      "Currently available for freelance projects and full-time opportunities. Open to work worldwide.",
    contactPitch:
      "Want a portfolio that moves, breathes, and leaves an impression? Let's build yours",
  },
} as const;
