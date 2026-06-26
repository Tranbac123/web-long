export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/** Home-page testimonials (static; switched via left/right arrows). */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Alex didn't just build a website - he built our brand's voice. Clean, intentional, and a pleasure to work with.",
    author: "Jamie Lin",
    role: "Creative Director, Luminary Studio",
  },
  {
    quote:
      "Finally a designer who understands both aesthetics and strategy. Our conversion rate doubled after the redesign.",
    author: "Sofia Marquez",
    role: "Founder, Orbital Finance",
  },
  {
    quote:
      "Alex's attention to motion and micro-interactions made our plant shop feel alive online. Customers keep mentioning the experience.",
    author: "Tom Harper",
    role: "Owner, Fauna Plant Shop",
  },
];
