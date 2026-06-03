import { GraduationCap } from "lucide-react";
import { P } from "../theme.js";
import { Section, STitle } from "./ui.jsx";

/* Short bio plus an education line. */
export function About({ L }) {
  return (
    <Section id="about">
      <STitle>{L.aboutTitle}</STitle>
      <div style={{
        background: P.card, borderRadius: 16, padding: "36px 32px",
        border: `1px solid ${P.border}`, lineHeight: 1.9, fontSize: 16, color: P.muted,
        maxWidth: 780, margin: "0 auto", textAlign: "center",
      }}>
        <p>{L.aboutText}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 20, color: P.accent }}>
          <GraduationCap size={18} />
          <span style={{ fontSize: 14 }}>{L.edu}</span>
        </div>
      </div>
    </Section>
  );
}
