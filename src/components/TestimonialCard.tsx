import { useState } from "react";
import { testimonials } from "../data/testimonials";
import "./TestimonialCard.css";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Home testimonials section (self-contained). Shows one testimonial at a time;
 * left/right arrows switch with wrap-around. All testimonials are stacked in a
 * single grid cell so the section height equals the tallest quote — switching
 * never shifts the content below (no layout jump). No autoplay / no library.
 */
export default function TestimonialCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  const goPrev = () =>
    setActiveIndex((index) => (index === 0 ? total - 1 : index - 1));
  const goNext = () =>
    setActiveIndex((index) => (index === total - 1 ? 0 : index + 1));

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__head">
          <div className="testimonials__label-group">
            <span className="testimonials__label">Testimonials</span>
            <span className="testimonials__counter">
              {pad(activeIndex + 1)}
              <span className="testimonials__counter-total">
                {" "}
                / {pad(total)}
              </span>
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

        <div className="testimonials__body">
          <div className="testimonials__block" aria-hidden="true" />
          <div className="testimonials__stack">
            {testimonials.map((testimonial, i) => (
              <figure
                key={testimonial.author}
                className={`testimonials__item${
                  i === activeIndex ? " is-active" : ""
                }`}
                aria-hidden={i !== activeIndex}
              >
                <blockquote className="testimonials__quote">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="testimonials__caption">
                  <span className="testimonials__author">
                    {testimonial.author}
                  </span>
                  <span className="testimonials__role">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
