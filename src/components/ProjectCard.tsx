import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  /** Tall portrait cover (grid) vs. wide cover (feature row). */
  ratio?: "portrait" | "wide";
}

/** Image-led card linking to a project detail page. */
export default function ProjectCard({ project, ratio = "portrait" }: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`project-card project-card--${ratio}`}
    >
      <div className="project-card__media">
        <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
      </div>
      <div className="project-card__meta">
        <h3 className="project-card__title">
          <span className="project-card__index">{project.index}</span>
          {project.title}
        </h3>
        <span className="project-card__category">{project.category}</span>
      </div>
      <p className="project-card__summary">{project.summary}</p>
    </Link>
  );
}
