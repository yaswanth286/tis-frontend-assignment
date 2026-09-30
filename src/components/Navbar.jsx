import { useState } from "react";
import { navItems, logo, links } from "../data/content";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#home" className="nav__logo"><img src={logo} alt="Tulas International School" height="44" /></a>
      <button className="nav__burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav className={`nav__menu ${open ? "is-open" : ""}`} aria-label="Main">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav__link" onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <button className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? "☾" : "☀"}
        </button>
        <a className="btn btn--primary" href={links.apply} target="_blank" rel="noreferrer">Apply Now</a>
      </nav>
    </header>
  );
}
