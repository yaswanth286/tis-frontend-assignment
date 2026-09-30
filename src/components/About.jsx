import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "./Reveal";
import { stats } from "../data/content";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.2, onUpdate: (v) => { ref.current.textContent = Math.round(v) + suffix; } });
    return () => controls.stop();
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2>Learning as an adventure</h2>
        <p className="lead">Established in 2012 under the aegis of Rishabh Educational Trust, TIS gives students seamless opportunities to grow. We bring out the best in every student, in academics, music, art or drama.</p>
      </Reveal>
      <div className="grid grid--4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="card stat">
            <strong><Counter value={s.value} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
