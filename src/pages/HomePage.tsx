import { Link } from "react-router-dom";
import ProjectShowcase from "../components/ProjectShowcase";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { introThumb } from "../data/projects";
import { site } from "../data/siteContent";
import heroBg from "../assets/placeholders/home-hero-bg.jpg";
import "./HomePage.css";

export default function HomePage() {
  const testimonial = testimonials[0];

  return (
    <div className="home">
      {/* 1. Hero ------------------------------------------------------ */}
      <section className="home-hero">
        <img className="home-hero__bg" src={heroBg} alt="" aria-hidden="true" />
        <div className="container home-hero__inner">
          <h1 className="home-hero__title">
            CREATIVE
            <br />
            DEVELOPER
          </h1>
          <p className="home-hero__note">
            I build immersive web experiences where interaction, motion, and
            structure meet meaningful design.
          </p>
          <span className="home-hero__scroll">Scroll Down</span>
        </div>
      </section>

      {/* 2. Intro ---------------------------------------------------- */}
      <section className="section container home-intro">
        <h2 className="home-intro__title">
          Turning ideas into immersive experiences.
        </h2>
        <div className="home-intro__body">
          <img
            className="home-intro__img"
            src={introThumb}
            alt="Close-up of a daisy in soft natural light"
          />
          <div className="home-intro__text">
            <p className="eyebrow">About me</p>
            <p className="home-intro__copy">
              I build interactive web spaces that connect feeling with function —
              crafted with attention to motion, structure, and human-first detail.
            </p>
            <Link to={site.ctaLink.to} className="arrow-link">
              → {site.ctaLink.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Things I've built --------------------------------------- */}
      <section className="section container">
        <h2 className="home-section-title">Things I&rsquo;ve built.</h2>
        <ProjectShowcase />
      </section>

      {/* 4. How I can help you -------------------------------------- */}
      <section className="section container home-services">
        <h2 className="home-section-title">How I can help you.</h2>
        <ul className="home-services__list">
          {services.map((service) => (
            <li key={service.id} className="home-service">
              <span className="home-service__index">{service.index}</span>
              <h3 className="home-service__title">{service.title}</h3>
              <p className="home-service__desc">{service.description}</p>
              <div className="home-service__thumb">
                <img src={introThumb} alt="" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Testimonials -------------------------------------------- */}
      <section className="section container home-testimonials">
        <div className="home-testimonials__head">
          <p className="eyebrow">Testimonials</p>
          <span className="home-testimonials__counter">01 / 03</span>
        </div>
        <figure className="home-testimonial">
          <div className="home-testimonial__block" aria-hidden="true" />
          <div className="home-testimonial__body">
            <blockquote className="home-testimonial__quote">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="home-testimonial__caption">
              <span className="home-testimonial__name">{testimonial.name}</span>
              <span className="home-testimonial__role">{testimonial.role}</span>
            </figcaption>
            <div className="home-testimonial__arrows" aria-hidden="true">
              <button type="button" className="home-testimonial__arrow" aria-label="Previous testimonial">
                ←
              </button>
              <button type="button" className="home-testimonial__arrow" aria-label="Next testimonial">
                →
              </button>
            </div>
          </div>
        </figure>
      </section>

      {/* 6. Footer banner + CTA rendered by Layout/Footer ----------- */}
    </div>
  );
}
