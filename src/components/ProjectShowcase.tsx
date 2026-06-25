import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectShowcase.css";

/**
 * Asymmetric "Things I've built" composition shared by Home and About.
 * Placement per project is driven by its slug (see ProjectShowcase.css),
 * not an equal-column grid.
 */
export default function ProjectShowcase() {
  return (
    <div className="showcase">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to={`/work/${project.slug}`}
          className={`showcase__item showcase__item--${project.slug}`}
        >
          <div className="showcase__media">
            <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
          </div>
          <div className="showcase__meta">
            <span className="showcase__title">
              <span className="showcase__index">{project.index}</span>
              {project.title}
            </span>
            <span className="showcase__cat">{project.category} — {project.year}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
