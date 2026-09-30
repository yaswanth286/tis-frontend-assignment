import Reveal from "./Reveal";
import { reasons } from "../data/content";

export default function WhyTIS() {
  return (
    <section className="section section--tint">
      <Reveal><h2>Why choose TIS</h2><p className="lead">Recognised among India's co-educational boarding schools.</p></Reveal>
      <div className="grid grid--4">
        {reasons.map((r, i) => (
          <Reveal key={r.text} delay={i * 0.1} className="card rank">
            <strong>{r.rank}</strong>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
