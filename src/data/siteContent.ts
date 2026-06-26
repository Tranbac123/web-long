/** Centralized site-wide copy and identity. Text values match Figma exactly. */
export const site = {
  name: "Alex Chen",
  email: "toannguyenvan145@gmail.com",
  ctaLink: { label: "Let’s work together", to: "/about" },
  footer: {
    cta: "LET’S MAKE SOMETHING TOGETHER",
    credit: "Design & code by Douglus Nguyen",
    location: "Tokyo, Japan",
    socials: [
      { label: "hello@alexchen.dev", href: "mailto:hello@alexchen.dev" },
      { label: "Dribbble", href: "https://dribbble.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Twitter", href: "https://twitter.com/" },
    ],
    available:
      "Currently available for freelance projects and full-time opportunities. Open to work worldwide.",
    contactPitch:
      "Want a portfolio that moves, breathes, and leaves an impression? Let's build yours",
    contactLink: { label: "LinkedIn", href: "https://www.linkedin.com/" },
  },
} as const;
