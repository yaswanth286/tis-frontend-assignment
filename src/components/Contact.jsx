import { useState } from "react";
import Reveal from "./Reveal";
import { contact } from "../data/content";

const fields = [
  { name: "name", label: "Name", type: "text", test: (v) => v.trim().length > 1, msg: "Enter your full name." },
  { name: "email", label: "Email", type: "email", test: (v) => /^\S+@\S+\.\S+$/.test(v), msg: "Enter a valid email address." },
  { name: "phone", label: "Phone", type: "tel", test: (v) => /^\d{10}$/.test(v), msg: "Enter a 10-digit phone number." },
  { name: "message", label: "Message", type: "textarea", test: (v) => v.trim().length > 9, msg: "Write at least 10 characters." },
];

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const found = Object.fromEntries(fields.filter((f) => !f.test(data.get(f.name) || "")).map((f) => [f.name, f.msg]));
    setErrors(found);
    setSent(Object.keys(found).length === 0);
    if (!Object.keys(found).length) e.target.reset();
  };

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <h2>Contact us</h2>
        <address>
          <p>{contact.address}</p>
          <p>Admissions helpline: <a href={`tel:${contact.helpline}`}>{contact.helpline}</a></p>
          <p>Landline: {contact.landlines.map((l) => <a key={l} href={`tel:${l}`}>{l} </a>)}</p>
          <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </address>
        <iframe title="TIS location on Google Maps" src={contact.mapEmbed} loading="lazy" />
      </Reveal>
      <Reveal delay={0.1}>
        <form onSubmit={onSubmit} noValidate>
          {fields.map((f) => (
            <label key={f.name}>{f.label}
              {f.type === "textarea" ? <textarea name={f.name} rows="4" /> : <input name={f.name} type={f.type} />}
              {errors[f.name] && <span className="err" role="alert">{errors[f.name]}</span>}
            </label>
          ))}
          <button className="btn btn--primary" type="submit">Send enquiry</button>
          {sent && <p role="status">Thanks. Your enquiry is ready to send (demo form, no backend).</p>}
        </form>
      </Reveal>
    </section>
  );
}
