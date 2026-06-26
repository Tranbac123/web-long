import "./MediaImage.css";

interface MediaImageProps {
  src: string;
  /** Descriptive alt text. Ignored when `decorative` is set. */
  alt: string;
  /** Extra class for the image (wrapper controls the frame/aspect). */
  className?: string;
  loading?: "lazy" | "eager";
  /** Purely decorative image: renders empty alt + aria-hidden. */
  decorative?: boolean;
}

/**
 * Single image primitive used for every framed image (cards, thumbnails,
 * gallery, banner). The parent wrapper owns the frame/aspect-ratio; the image
 * always fills it with `object-fit: cover`. Avoids repeating cover CSS.
 */
export default function MediaImage({
  src,
  alt,
  className,
  loading = "lazy",
  decorative = false,
}: MediaImageProps) {
  return (
    <img
      src={src}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      loading={loading}
      className={className ? `media-image ${className}` : "media-image"}
    />
  );
}
