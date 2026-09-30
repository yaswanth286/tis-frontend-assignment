import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const step = (d) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <section className="section section--tint">
      <h2>From the parents</h2>
      <div className="quote" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption><img src={t.image} alt={t.name} loading="lazy" /><span><b>{t.name}</b><br />{t.role}</span></figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="quote__ctrl">
          <button className="icon-btn" onClick={() => step(-1)} aria-label="Previous testimonial">‹</button>
          <button className="icon-btn" onClick={() => step(1)} aria-label="Next testimonial">›</button>
        </div>
      </div>
    </section>
  );
}
