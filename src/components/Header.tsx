import { NavLink, Link, useLocation } from "react-router-dom";
import { site } from "../data/siteContent";
import "./Header.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/work", label: "Works", end: false },
];

/** Pages whose hero is a dark full-bleed image — header overlays in white. */
const OVERLAY_ROUTES = ["/", "/about"];

export default function Header() {
  const { pathname } = useLocation();
  const overlay = OVERLAY_ROUTES.includes(pathname);

  return (
    <header className={`header${overlay ? " header--overlay" : ""}`}>
      <div className="container header__inner">
        <Link
          to="/"
          className="header__brand"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? "header__link is-active" : "header__link"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
