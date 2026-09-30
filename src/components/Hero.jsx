import { motion } from "framer-motion";
import { heroImage, links } from "../data/content";

const words = "Where every student finds their strength".split(" ");

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__text">
        <p className="hero__kicker">CBSE co-ed boarding and day school · Dehradun · Class 4 to 12</p>
        <h1 aria-label="Tulas International School: where every student finds their strength">
          {words.map((w, i) => (
            <span className="mask" key={w}>
              <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.2, 0.7, 0.2, 1] }}>{w}&nbsp;</motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
          Tulas International School combines a CBSE curriculum with 16+ sports and a 22-acre campus, preparing students to be global leaders.
        </motion.p>
        <motion.div className="hero__cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
          <a className="btn btn--primary" href={links.apply} target="_blank" rel="noreferrer">Apply Now</a>
          <a className="btn btn--ghost" href="#campus">Discover Our Campus</a>
        </motion.div>
      </div>
      <motion.img className="hero__img" src={heroImage} alt="Students at Tulas International School" initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }} />
    </section>
  );
}
