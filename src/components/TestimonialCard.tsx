import { useState } from "react";
import { testimonials } from "../data/testimonials";
import "./TestimonialCard.css";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Home testimonials section.
 * Shows one testimonial at a time; left/right arrows switch between them
 * with wrap-around. No autoplay, no animation, no carousel library.
 */
export default function TestimonialCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[activeIndex];

  const goPrev = () =>
    setActiveIndex((index) => (index === 0 ? total - 1 : index - 1));
  const goNext = () =>
    setActiveIndex((index) => (index === total - 1 ? 0 : index + 1));

  return (
    <section className="testimonials">
      <div className="testimonials__head">
        <div className="testimonials__label-group">
          <span className="testimonials__label">Testimonials</span>
          <span className="testimonials__counter">
            {pad(activeIndex + 1)}
            <span className="testimonials__counter-total"> / {pad(total)}</span>
          </span>
        </div>

        <div className="testimonials__controls">
          <button
            type="button"
            className="testimonials__arrow"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            className="testimonials__arrow"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      <figure className="testimonials__body">
        <div className="testimonials__block" aria-hidden="true" />
        <div className="testimonials__content">
          <blockquote className="testimonials__quote">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <figcaption className="testimonials__caption">
            <span className="testimonials__author">{active.author}</span>
            <span className="testimonials__role">{active.role}</span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
