import { Link } from "react-router-dom";
import { projects, type Project } from "../data/projects";
import { site } from "../data/siteContent";
import MediaImage from "../components/MediaImage";
import "./WorkPage.css";

function ItemBody({ project }: { project: Project }) {
  return (
    <>
      <div className="work-item__media">
        <MediaImage src={project.cover.src} alt={project.cover.alt} />
      </div>
      <div className="work-item__meta">
        <span className="work-item__title">{project.title}</span>
      </div>
    </>
  );
}

/** Only Luminary (real Figma detail page) is a link; the rest are static. */
function WorkItem({ project }: { project: Project }) {
  const base = `work-item work-item--${project.slug}`;
  if (project.hasDetailPage) {
    return (
      <Link
        to={`/work/${project.slug}`}
        className={base}
        aria-label={`${project.title} — view project`}
      >
        <ItemBody project={project} />
      </Link>
    );
  }
  return (
    <article className={`${base} work-item--static`}>
      <ItemBody project={project} />
    </article>
  );
}

export default function WorkPage() {
  // The editorial index shows the first five projects (reference layout).
  const indexed = projects.slice(0, 5);

  return (
    <div className="page work">
      {/* Horizontal editorial index — single-viewport composition, not a
          standard rhythm .section. */}
      <section className="work-rail" aria-label="Project index">
        <div className="work-rail__track">
          {indexed.map((project) => (
            <WorkItem key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Huge WORKS + CTA */}
      <section className="work-end">
        <div className="work-end__inner">
          <h1 className="work-end__title">WORKS</h1>
          <Link to={site.ctaLink.to} className="arrow-link work-end__cta">
            → {site.ctaLink.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
