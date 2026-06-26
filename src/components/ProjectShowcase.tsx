import { Link } from "react-router-dom";
import { projects, type Project } from "../data/projects";
import "./ProjectShowcase.css";

function Card({ project, size }: { project: Project; size: "lg" | "sm" }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`showcase-card showcase-card--${size}`}
    >
      <div className="showcase-card__media">
        <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
      </div>
      <div className="showcase-card__meta">
        <span className="showcase-card__title">{project.title}</span>
        <span className="showcase-card__cat">{project.category}</span>
      </div>
    </Link>
  );
}

/**
 * "Things I've built" — asymmetric composition from Figma (Home node 85:382,
 * works frame). Large left card (Luminary) beside a right stack: small pair
 * (Orbital/Plant) top-aligned with whitespace below, large Aether, then small
 * pair (Polaris/Terra). Deliberately NOT an equal grid.
 */
export default function ProjectShowcase() {
  const [luminary, orbital, plant, aether, polaris, terra] = projects;

  return (
    <div className="showcase">
      <div className="showcase__left">
        <Card project={luminary} size="lg" />
      </div>

      <div className="showcase__top">
        <Card project={orbital} size="sm" />
        <Card project={plant} size="sm" />
      </div>

      <div className="showcase__aether">
        <Card project={aether} size="lg" />
      </div>

      <div className="showcase__bottom">
        <Card project={polaris} size="sm" />
        <Card project={terra} size="sm" />
      </div>
    </div>
  );
}
