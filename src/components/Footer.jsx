import { contact, importantLinks, logo, navItems, social } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Tulas International School" height="44" loading="lazy" />
        <p>CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand.</p>
      </div>
      <div><h3>Quick links</h3>{navItems.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}</div>
      <div><h3>Important links</h3>{importantLinks.map((n) => <a key={n.href} href={n.href} target="_blank" rel="noreferrer">{n.label}</a>)}</div>
      <div><h3>Contact</h3><a href={`tel:${contact.helpline}`}>{contact.helpline}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      <div className="footer__social">{social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div>
      <p className="footer__copy">Copyright © 2026 Tulas International School, Dehradun. All rights reserved.</p>
    </footer>
  );
}
