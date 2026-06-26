import Button from "../components/Button";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="page not-found">
      <section className="not-found__main section">
        <div className="container">
          <p className="eyebrow">Error 404</p>
          <h1 className="not-found__title">Page not found</h1>
          <p className="lead muted not-found__text">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been
            moved.
          </p>
          <Button to="/" variant="outline" arrow>
            Back home
          </Button>
        </div>
      </section>
    </div>
  );
}
