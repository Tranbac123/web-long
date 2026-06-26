export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
}

/** "How I can help you" rows on the home page. */
export const services: Service[] = [
  {
    id: "s1",
    index: "01",
    title: "Creative Development",
    description:
      "From landing pages to full web applications - built with clean code, smooth animations, and pixel-perfect attention to detail.",
  },
  {
    id: "s2",
    index: "02",
    title: "Motion & Interaction",
    description:
      "GSAP, Framer Motion, CSS animations — I bring interfaces to life with purposeful, fluid motion that enhances the user experience.",
  },
  {
    id: "s3",
    index: "03",
    title: "Design to Code",
    description:
      "Got a Figma file? I'll turn it into a production-ready website that looks exactly like the design — down to the pixel.",
  },
];
