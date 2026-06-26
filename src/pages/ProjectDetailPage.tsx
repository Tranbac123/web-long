import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug, getNextProject } from "../data/projects";
import MediaImage from "../components/MediaImage";
import "./ProjectDetailPage.css";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Figma only defines the Luminary Studio detail page. Any other slug
  // redirects back to /work rather than rendering invented content.
  if (slug !== "luminary-studio") {
    return <Navigate to="/work" replace />;
  }
  const project = getProjectBySlug("luminary-studio")!;

  const next = getNextProject(project.slug);
  const titleLines = project.title.split(" ");

  return (
    <div className="page project-detail">
      {/* Intro — hero-like band (not a standard rhythm .section) */}
      <header className="detail-intro">
        <div className="container detail-intro__inner">
          <h1 className="detail-intro__title">
            {titleLines.map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </h1>

          {/* Metadata row: year · role+desc · tools+approach · scroll */}
          <div className="detail-intro__foot">
            <span className="detail-intro__year">{project.detailYear}</span>
            <div className="detail-meta__col">
              <span className="detail-meta__head">{project.role}</span>
              <p className="detail-meta__desc">{project.description}</p>
            </div>
            <div className="detail-meta__col">
              <span className="detail-meta__head">{project.tools}</span>
              <p className="detail-meta__desc">{project.approach}</p>
            </div>
            <span className="detail-intro__scroll">Scroll Down</span>
          </div>
        </div>
      </header>

      {/* Gallery ------------------------------------------------- */}
      <section className="detail-gallery section" aria-label="Project gallery">
        <div className="container detail-gallery__grid">
          {project.gallery.map((block, i) => (
            <figure
              key={i}
              className={`detail-gallery__item detail-gallery__item--${block.span}`}
            >
              <MediaImage src={block.src} alt={block.alt} />
            </figure>
          ))}
        </div>
      </section>

      {/* Next project (no detail page exists for it → back to /work) */}
      <section className="detail-next section">
        <div className="container detail-next__inner">
          <Link
            to="/work"
            className="detail-next__link"
            aria-label="Back to all work"
          >
            <span className="detail-next__label">Next project</span>
            <span className="detail-next__thumb">
              <MediaImage src={next.cover.src} alt={next.cover.alt} />
            </span>
            <span className="detail-next__title">{next.title}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
