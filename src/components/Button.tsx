import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "text";
  /** Render a right-pointing arrow after the label. */
  arrow?: boolean;
}

/**
 * Link-styled button. The whole UI is navigation-driven (static site),
 * so a Button is always an internal <Link>.
 */
export default function Button({
  to,
  children,
  variant = "solid",
  arrow = false,
}: ButtonProps) {
  return (
    <Link to={to} className={`btn btn--${variant}`}>
      <span>{children}</span>
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </Link>
  );
}
