import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { P } from "../theme.js";
import { Section, STitle } from "./ui.jsx";

/* Contact cards plus a form that opens a prefilled WhatsApp message. */
export function Contact({ L, formData, onFormChange, onSubmit }) {
  const fields = [
    { name: "name", label: L.form.name, type: "text" },
    { name: "email", label: L.form.email, type: "email" },
    { name: "phone", label: L.form.phone, type: "tel" },
  ];

  return (
    <Section id="contact">
      <STitle>{L.contactTitle}</STitle>
      <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
        {[Mail, Phone, MapPin].map((Icon, i) => (
          <a key={i} href={i === 0 ? `mailto:${L.contactVals[0]}` : i === 1 ? `tel:${L.contactVals[1]}` : "#"} style={{
            background: P.card, borderRadius: 16, padding: "24px 32px",
            border: `1px solid ${P.border}`, textDecoration: "none", color: "inherit",
            display: "flex", alignItems: "center", gap: 14, width: 300, maxWidth: "100%",
            boxSizing: "border-box", transition: "border-color .3s, transform .3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = P.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = P.border; e.currentTarget.style.transform = ""; }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 12, background: P.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", color: P.accent }}>
              <Icon size={20} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, color: P.muted }}>{L.contactLabels[i]}</div>
              <div style={{ fontSize: 14, fontWeight: 600, direction: "ltr", wordBreak: "break-word" }}>{L.contactVals[i]}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Contact form — submits to WhatsApp via the parent's handler */}
      <form onSubmit={onSubmit} style={{
        background: P.card, borderRadius: 16, padding: "32px 28px",
        border: `1px solid ${P.border}`, maxWidth: 520, margin: "40px auto 0",
        display: "flex", flexDirection: "column", gap: 16,
      }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: P.text, textAlign: "center", marginBottom: 4 }}>{L.form.heading}</h3>
        {fields.map((f) => (
          <input
            key={f.name}
            name={f.name}
            type={f.type}
            required
            value={formData[f.name]}
            onChange={onFormChange}
            placeholder={f.label}
            style={{
              background: P.surface, border: `1px solid ${P.border}`, borderRadius: 10,
              padding: "12px 16px", color: P.text, fontSize: 15, fontFamily: "inherit",
              outline: "none", width: "100%", transition: "border-color .25s",
            }}
            onFocus={e => e.currentTarget.style.borderColor = P.accent}
            onBlur={e => e.currentTarget.style.borderColor = P.border}
          />
        ))}
        <button type="submit" style={{
          background: P.grad, color: P.bg, border: "none", borderRadius: 10,
          padding: "13px 28px", fontWeight: 700, fontSize: 15, fontFamily: "inherit",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          boxShadow: `0 4px 24px ${P.accentGlow}`, marginTop: 4,
        }}>
          <MessageCircle size={18} /> {L.form.send}
        </button>
      </form>
    </Section>
  );
}
