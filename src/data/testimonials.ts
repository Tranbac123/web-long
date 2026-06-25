export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

/** Home-page testimonial (single, static — matches reference). */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Alex didn't just build a website - he built our brand's voice. Clean, intentional, and a pleasure to work with.",
    name: "Jamie Lin",
    role: "Creative Director, Luminary Studio",
  },
];
