import { Link } from "react-router-dom";
import ProjectShowcase from "../components/ProjectShowcase";
import TestimonialCard from "../components/TestimonialCard";
import { services } from "../data/services";
import { introThumb } from "../data/projects";
import { site } from "../data/siteContent";
import heroBg from "../assets/placeholders/home-hero-bg.jpg";
import "./HomePage.css";

export default function HomePage() {
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
          <div className="home-hero__mid">
            <span className="home-hero__hi">Hi There</span>
            <div className="home-hero__copy">
              <p>
                I build immersive experiences for brands with direction and
                momentum. I am Alex Chen.
              </p>
              <p className="home-hero__loc">Based in Tokyo, Japan</p>
            </div>
          </div>
          <span className="home-hero__scroll">Scroll Down</span>
        </div>
      </section>

      {/* 2. Intro (Figma Home node 85:460) ------------------------- */}
      <section className="section container home-intro">
        <h2 className="home-intro__title">
          Turning ideas into
          <br />
          immersive experiences.
        </h2>
        <div className="home-intro__block">
          <img
            className="home-intro__img"
            src={introThumb}
            alt="Field of daisies in soft natural light"
          />
          <div className="home-intro__meta">
            <p className="home-intro__label">About Me</p>
            <div className="home-intro__right">
              <p>
                A creative developer with 5 years of experience building
                high-performance websites and digital products. I work at the
                intersection of design and code, where aesthetics meet
                functionality.
              </p>
              <p>
                My focus is on motion, interaction, and the details that make a
                product feel alive.
              </p>
              <Link to={site.ctaLink.to} className="arrow-link home-intro__cta">
                → {site.ctaLink.label}
              </Link>
            </div>
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

      {/* 5. Testimonials (switchable) ------------------------------- */}
      <div className="section container">
        <TestimonialCard />
      </div>

      {/* 6. Footer banner + CTA rendered by Layout/Footer ----------- */}
    </div>
  );
}
