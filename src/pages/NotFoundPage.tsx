import Button from "../components/Button";

export default function NotFoundPage() {
  return (
    <section className="section container" style={{ paddingBlock: "8rem" }}>
      <p className="eyebrow">Error 404</p>
      <h1 style={{ fontSize: "var(--fs-h1)", margin: "1.5rem 0 2rem" }}>
        Page not found
      </h1>
      <p className="lead muted" style={{ maxWidth: "40ch", marginBottom: "2.5rem" }}>
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Button to="/" variant="outline" arrow>
        Back home
      </Button>
    </section>
  );
}
