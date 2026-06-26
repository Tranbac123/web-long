import { Link } from "react-router-dom";
import ProjectShowcase from "../components/ProjectShowcase";
import MediaImage from "../components/MediaImage";
import { site } from "../data/siteContent";
import { about } from "../data/aboutContent";
import heroField from "../assets/placeholders/daisy-9.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="page about">
      {/* Hero — full-bleed band */}
      <section className="about-hero">
        <MediaImage
          className="about-hero__bg"
          src={heroField}
          alt=""
          decorative
          loading="eager"
        />
        <div className="container about-hero__inner">
          <h1 className="about-hero__title">
            {about.hero.titleLines[0]}
            <br />
            {about.hero.titleLines[1]}
          </h1>
          <span className="about-hero__scroll">{about.hero.scroll}</span>
        </div>
      </section>

      {/* Statement */}
      <section className="about-statement section">
        <div className="container about-statement__grid">
          <p className="about-statement__label">{about.statement.label}</p>
          <p className="about-statement__text">{about.statement.text}</p>
          <span className="about-statement__dot" aria-hidden="true" />
          <aside className="about-drivers">
            <p className="about-drivers__title">{about.drivers.title}</p>
            <ul>
              {about.drivers.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="about-drivers__note">{about.drivers.note}</p>
            <Link
              to={site.ctaLink.to}
              className="arrow-link about-drivers__cta"
            >
              → {site.ctaLink.label}
            </Link>
          </aside>
        </div>
      </section>

      {/* Skills + huge AC */}
      <section className="about-skills-section section">
        <div className="container about-skills">
          <div className="about-skills__cols">
            {about.skillGroups.map((group, i) => (
              <ul key={i} className="about-skills__group">
                {group.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ))}
          </div>
          <span className="about-skills__mono" aria-hidden="true">
            AC
          </span>
        </div>
      </section>

      {/* How I Work */}
      <section className="about-process section">
        <div className="container">
          <h2 className="about-process__heading">{about.processTitle}</h2>
          <ul className="about-process__list">
            {about.process.map((row) => (
              <li key={row.title} className="about-process__row">
                <h3 className="about-process__title">{row.title}</h3>
                <p className="about-process__desc">{row.description}</p>
                <span className="about-process__num">{row.num}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Things I've built */}
      <section className="about-built section">
        <div className="container">
          <h2 className="about-built-title">{about.builtTitle}</h2>
          <ProjectShowcase />
        </div>
      </section>
    </div>
  );
}
