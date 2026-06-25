import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { site } from "../data/siteContent";
import "./WorkPage.css";

export default function WorkPage() {
  // The editorial index shows the first five projects (reference layout).
  const indexed = projects.slice(0, 5);

  return (
    <div className="work">
      <div className="work-head" />

      {/* Horizontal editorial index — not an equal grid. */}
      <section className="work-rail" aria-label="Project index">
        <div className="work-rail__track">
          {indexed.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`work-item work-item--${project.slug}`}
            >
              <div className="work-item__media">
                <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
              </div>
              <div className="work-item__meta">
                <span className="work-item__index">{project.index}</span>
                <span className="work-item__title">{project.title}</span>
                <span className="work-item__cat">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Huge WORKS + CTA */}
      <section className="container work-end">
        <h1 className="work-end__title">WORKS</h1>
        <Link to={site.ctaLink.to} className="arrow-link work-end__cta">
          → {site.ctaLink.label}
        </Link>
      </section>
    </div>
  );
}
