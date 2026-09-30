import Reveal from "./Reveal";
import { links } from "../data/content";

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="cta">
      <Reveal>
        <h2>Begin your journey at Tulas International School</h2>
        <p>Admissions are open for Class IV to XII.</p>
        <div className="hero__cta">
          <a className="btn btn--light" href={links.apply} target="_blank" rel="noreferrer">Apply Now</a>
          <a className="btn btn--outline" href="#contact">Enquire Now</a>
          <a className="btn btn--outline" href={links.tour} target="_blank" rel="noreferrer">Take the virtual tour</a>
        </div>
      </Reveal>
    </section>
  );
}
