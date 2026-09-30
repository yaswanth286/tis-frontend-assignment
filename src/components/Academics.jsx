import Reveal from "./Reveal";
import { stages, links } from "../data/content";

export default function Academics() {
  return (
    <section id="academics" className="section">
      <Reveal><h2>Academics</h2><p className="lead">A CBSE curriculum focused on academic excellence and holistic development.</p></Reveal>
      <div className="grid grid--4">
        {stages.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <article className="card card--hover">
              <img src={s.image} alt={s.title} loading="lazy" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a className="more" href={links.apply} target="_blank" rel="noreferrer">Learn more</a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
