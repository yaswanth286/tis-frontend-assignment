import Reveal from "./Reveal";
import { facilities } from "../data/content";

export default function Facilities() {
  return (
    <section id="campus" className="section">
      <Reveal><h2>Campus and facilities</h2></Reveal>
      <div className="bento">
        {facilities.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08} className={f.featured ? "bento__big" : ""}>
            <a className="tile" href={f.href || "#campus"} {...(f.href && { target: "_blank", rel: "noreferrer" })}>
              <img src={f.image} alt={f.title} loading="lazy" />
              <div><h3>{f.title}</h3><p>{f.text}</p></div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
