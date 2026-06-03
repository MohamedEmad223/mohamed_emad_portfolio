import { Mail, Phone } from "lucide-react";
import { P } from "../theme.js";
import { socials } from "../data/socials.js";

/* Footer: name, social links, contact details, and copyright. */
export function Footer({ L }) {
  return (
    <footer style={{ background: P.surface, borderTop: `1px solid ${P.border}`, padding: "48px 24px 28px", marginTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <span style={{ fontSize: 22, fontWeight: 800, background: P.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{L.footerName}</span>
        <p style={{ color: P.muted, fontSize: 14, marginTop: 4 }}>Flutter Developer</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
              width: 42, height: 42, borderRadius: 12, background: P.card,
              border: `1px solid ${P.border}`, display: "flex", alignItems: "center", justifyContent: "center",
              color: P.muted, textDecoration: "none", transition: "all .25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = P.accent; e.currentTarget.style.color = P.bg; e.currentTarget.style.borderColor = P.accent; }}
              onMouseLeave={e => { e.currentTarget.style.background = P.card; e.currentTarget.style.color = P.muted; e.currentTarget.style.borderColor = P.border; }}
            ><s.Icon size={20} /></a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
          <a href="mailto:Mohamedelbakrawy70@gmail.com" style={{ color: P.muted, fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
            <Mail size={13} /> Mohamedelbakrawy70@gmail.com
          </a>
          <span style={{ color: P.muted, fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}>
            <Phone size={13} /> +201065363857
          </span>
        </div>
        <div style={{ height: 1, background: P.border, margin: "24px auto", maxWidth: 400 }} />
        <p style={{ color: P.muted, fontSize: 12 }}>{L.copy}</p>
      </div>
    </footer>
  );
}
