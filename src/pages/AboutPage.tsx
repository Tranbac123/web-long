import { Link } from "react-router-dom";
import ProjectShowcase from "../components/ProjectShowcase";
import { site } from "../data/siteContent";
import heroField from "../assets/placeholders/daisy-9.jpg";
import "./AboutPage.css";

const drivers = [
  "Clean typography",
  "Thoughtful micro-interactions",
  "Performance without compromise",
  "Interfaces that feel as good as they look",
];

const skillGroups = [
  ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
  ["TypeScript", "Next.js", "Webflow", "Framer", "GSAP"],
  ["WebGL", "Three.js", "JavaScript", "Vercel", "Netlify"],
  ["HTML", "CSS", "JavaScript", "React", "Lottie"],
];

const process = [
  {
    title: "Detail-obsessed",
    description:
      "From landing pages to full web applications — built with clean code, smooth animations, and pixel-perfect attention to detail.",
    num: "(01)",
  },
  {
    title: "Motion with purpose",
    description:
      "I bring interfaces to life with purposeful, fluid motion that enhances the user experience.",
    num: "(02)",
  },
  {
    title: "Honest collaboration",
    description:
      "I treat every project like it's my own. Clear communication, no surprises.",
    num: "(03)",
  },
];

export default function AboutPage() {
  return (
    <div className="about">
      {/* 1. Hero ----------------------------------------------------- */}
      <section className="about-hero">
        <img className="about-hero__bg" src={heroField} alt="" aria-hidden="true" />
        <div className="container about-hero__inner">
          <h1 className="about-hero__title">
            ALEX
            <br />
            CHEN
          </h1>
          <span className="about-hero__scroll">Scroll Down</span>
        </div>
      </section>

      {/* 2. Statement ----------------------------------------------- */}
      <section className="section container about-statement">
        <p className="eyebrow about-statement__label">Statement</p>
        <div className="about-statement__main">
          <p className="about-statement__text">
            I build digital experiences where design meets code — interactive,
            intentional, and human-first. I collaborate with brands that have a
            story to tell, turning ideas into fluid, responsive experiences.
          </p>
          <span className="about-statement__dot" aria-hidden="true" />
        </div>
        <aside className="about-drivers">
          <p className="about-drivers__title">What drives me:</p>
          <ul>
            {drivers.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="about-drivers__note">
            When I&rsquo;m not coding, I&rsquo;m probably sketching, collecting
            vinyl, or chasing good light.
          </p>
          <Link to={site.ctaLink.to} className="arrow-link about-drivers__cta">
            → {site.ctaLink.label}
          </Link>
        </aside>
      </section>

      {/* 3. Skills + huge AC ---------------------------------------- */}
      <section className="section about-skills-section">
        <div className="container about-skills">
          <div className="about-skills__cols">
            {skillGroups.map((group, i) => (
              <ul key={i} className="about-skills__group">
                {group.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ))}
          </div>
          <span className="about-skills__mono" aria-hidden="true">
            AC
          </span>
        </div>
      </section>

      {/* 4. How I work ---------------------------------------------- */}
      <section className="section container about-process">
        <h2 className="about-process__heading">How I Work</h2>
        <ul className="about-process__list">
          {process.map((p) => (
            <li key={p.title} className="about-process__row">
              <h3 className="about-process__title">{p.title}</h3>
              <p className="about-process__desc">{p.description}</p>
              <span className="about-process__num">{p.num}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Things I've built --------------------------------------- */}
      <section className="section container">
        <h2 className="about-built-title">Things I&rsquo;ve built.</h2>
        <ProjectShowcase />
      </section>

      {/* 6. Footer banner + CTA rendered by Layout/Footer ----------- */}
    </div>
  );
}
