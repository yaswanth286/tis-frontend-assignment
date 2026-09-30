import Reveal from "./Reveal";
import { gallery, sports } from "../data/content";

export default function Activities() {
  return (
    <section className="section">
      <Reveal><h2>Life at TIS</h2><p className="lead">16+ sports curated to bring joy and discipline to your life.</p></Reveal>
      <ul className="scroller" aria-label="Student life gallery">
        {gallery.map((g) => (<li key={g.src}><img src={g.src} alt={g.alt} loading="lazy" /></li>))}
      </ul>
      <ul className="chips">{sports.map((s) => <li key={s}>{s}</li>)}</ul>
    </section>
  );
}
