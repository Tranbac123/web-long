import { Link } from "react-router-dom";
import ProjectShowcase from "../components/ProjectShowcase";
import TestimonialCard from "../components/TestimonialCard";
import MediaImage from "../components/MediaImage";
import { services } from "../data/services";
import { introThumb } from "../data/projects";
import { site } from "../data/siteContent";
import { home } from "../data/homeContent";
import heroBg from "../assets/placeholders/home-hero-bg.jpg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="page home">
      {/* Hero — full-bleed band (no .section rhythm) */}
      <section className="home-hero">
        <MediaImage
          className="home-hero__bg"
          src={heroBg}
          alt=""
          decorative
          loading="eager"
        />
        <div className="container home-hero__inner">
          <h1 className="home-hero__title">
            {home.hero.titleLines[0]}
            <br />
            {home.hero.titleLines[1]}
          </h1>
          <div className="home-hero__mid">
            <span className="home-hero__hi">{home.hero.hi}</span>
            <div className="home-hero__copy">
              <p>{home.hero.copy}</p>
              <p className="home-hero__loc">{home.hero.location}</p>
            </div>
          </div>
          <span className="home-hero__scroll">{home.hero.scroll}</span>
        </div>
      </section>

      {/* Intro */}
      <section className="home-intro section">
        <div className="container">
          <h2 className="home-intro__title">
            {home.intro.titleLines[0]}
            <br />
            {home.intro.titleLines[1]}
          </h2>
          <div className="home-intro__block">
            <div className="home-intro__media">
              <MediaImage src={introThumb} alt={home.intro.imageAlt} />
            </div>
            <div className="home-intro__meta">
              <p className="home-intro__label">{home.intro.label}</p>
              <div className="home-intro__right">
                {home.intro.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <Link
                  to={site.ctaLink.to}
                  className="arrow-link home-intro__cta"
                >
                  → {site.ctaLink.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things I've built */}
      <section className="home-showcase section">
        <div className="container">
          <h2 className="home-section-title">{home.showcaseTitle}</h2>
          <ProjectShowcase />
        </div>
      </section>

      {/* How I can help you */}
      <section className="home-services section">
        <div className="container">
          <h2 className="home-section-title">{home.servicesTitle}</h2>
          <ul className="home-services__list">
            {services.map((service) => (
              <li key={service.id} className="home-service">
                <span className="home-service__index">{service.index}</span>
                <h3 className="home-service__title">{service.title}</h3>
                <p className="home-service__desc">{service.description}</p>
                <div className="home-service__thumb">
                  <MediaImage src={introThumb} alt="" decorative />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials — self-contained section component */}
      <TestimonialCard />
    </div>
  );
}
