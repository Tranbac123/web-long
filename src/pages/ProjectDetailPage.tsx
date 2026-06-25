import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug, getNextProject } from "../data/projects";
import "./ProjectDetailPage.css";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // Unknown slug -> fall back to the Luminary Studio detail page.
  if (!project) {
    return <Navigate to="/work/luminary-studio" replace />;
  }

  const next = getNextProject(project.slug);
  const titleLines = project.title.split(" ");

  return (
    <article className="detail">
      {/* Intro ------------------------------------------------------ */}
      <header className="detail-intro container">
        <div className="detail-intro__left">
          <h1 className="detail-intro__title">
            {titleLines.map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </h1>
          <span className="detail-intro__year">{project.year}</span>
        </div>

        <dl className="detail-meta">
          <div className="detail-meta__item">
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div className="detail-meta__item">
            <dt>Description</dt>
            <dd>{project.description}</dd>
          </div>
          <div className="detail-meta__item">
            <dt>Tools</dt>
            <dd>{project.tools}</dd>
          </div>
          <div className="detail-meta__item">
            <dt>Scroll</dt>
            <dd>Scroll Down</dd>
          </div>
        </dl>
      </header>

      {/* Gallery ---------------------------------------------------- */}
      <section className="detail-gallery container" aria-label="Project gallery">
        {project.gallery.map((block, i) => (
          <figure
            key={i}
            className={`detail-gallery__item detail-gallery__item--${block.span}`}
          >
            <img src={block.src} alt={block.alt} loading="lazy" />
          </figure>
        ))}
      </section>

      {/* Next project ----------------------------------------------- */}
      <section className="detail-next">
        <Link to={`/work/${next.slug}`} className="detail-next__link">
          <span className="eyebrow detail-next__label">Next project</span>
          <span className="detail-next__thumb">
            <img src={next.cover.src} alt={next.cover.alt} />
          </span>
          <span className="detail-next__title">{next.title}</span>
        </Link>
      </section>
    </article>
  );
}
