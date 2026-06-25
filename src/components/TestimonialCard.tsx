import type { Testimonial } from "../data/testimonials";
import "./TestimonialCard.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/** Quote card used in the home-page testimonials row. */
export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="testimonial-card">
      <span className="testimonial-card__mark" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="testimonial-card__quote">{testimonial.quote}</blockquote>
      <figcaption className="testimonial-card__caption">
        <span className="testimonial-card__name">{testimonial.name}</span>
        <span className="testimonial-card__role">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
