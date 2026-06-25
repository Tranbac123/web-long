import { site } from "../data/siteContent";
import banner from "../assets/placeholders/daisy-8.png";
import smile from "../assets/placeholders/smile_face.svg";
import "./Footer.css";

/**
 * Shared site footer: full-width image banner, large CTA with a smile
 * icon, and four small info columns. Used on Home, About and Project Detail.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ---- Banner image ---- */}
      <div className="footer__banner">
        <img src={banner} alt="Sunset field of daisies" />
      </div>

      {/* ---- CTA + columns (dark) ---- */}
      <div className="footer__panel">
        <div className="container">
          <h2 className="footer__cta">
            {site.footer.cta}
            <img className="footer__smile" src={smile} alt="" aria-hidden="true" />
          </h2>

          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__col-title">Location</span>
              <p>{site.footer.location}</p>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">Socials</span>
              <ul>
                {site.footer.socials.map((s) => (
                  <li key={s}>
                    <a href="#" rel="noreferrer">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">Available</span>
              <p>{site.footer.available}</p>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">Contact</span>
              <p>{site.footer.contactPitch}</p>
              <a className="footer__email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="footer__link" href="#">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer__bottom">
            <span>{site.name}</span>
            <span>© {year} — All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
