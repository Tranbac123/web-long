import { site } from "../data/siteContent";
import banner from "../assets/placeholders/daisy-8.png";
import smile from "../assets/placeholders/smile_face.svg";
import "./Footer.css";

/**
 * Shared site footer (Figma Contact frame): full-bleed banner, large CTA with
 * smile, credit line, and four info columns. White background, black ink.
 * Used on Home, About and Project Detail.
 */
export default function Footer() {
  return (
    <footer className="footer">
      {/* ---- Banner image (full-bleed) ---- */}
      <div className="footer__banner">
        <img src={banner} alt="Sunset field of daisies" />
      </div>

      {/* ---- CTA + columns (white background, black ink — per Figma) ---- */}
      <div className="footer__panel">
        <div className="container">
          <p className="footer__credit">{site.footer.credit}</p>

          <h2 className="footer__cta">
            <span>LET&rsquo;S MAKE</span>
            <span className="footer__cta-mid">SOMETHING</span>
            <span className="footer__cta-last">
              TOGETHER
              <img className="footer__smile" src={smile} alt="" aria-hidden="true" />
            </span>
          </h2>

          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__col-title">(Location)</span>
              <p>{site.footer.location}</p>
            </div>

            <div className="footer__col">
              <span className="footer__col-title">(Socials)</span>
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
              <span className="footer__col-title">(Available)</span>
              <p>{site.footer.available}</p>
            </div>

            {/* Contact column has no parenthetical label in Figma */}
            <div className="footer__col">
              <p>{site.footer.contactPitch}</p>
              <a className="footer__email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="footer__link" href="#">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
