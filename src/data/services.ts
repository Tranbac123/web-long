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
      "Transforming designs into fluid, responsive, and high-performing web experiences with clean code and pixel-perfect attention to detail.",
  },
  {
    id: "s2",
    index: "02",
    title: "Motion & Interaction",
    description:
      "GSAP-powered effects, CSS animations, and micro-interactions to make interfaces feel expressive without slowing them down.",
  },
  {
    id: "s3",
    index: "03",
    title: "Design To Code",
    description:
      "Design systems and UI translated into production-ready, scalable interfaces while preserving the design intent.",
  },
];
