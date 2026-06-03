import { Briefcase, MapPin } from "lucide-react";
import { P } from "../theme.js";
import { Section, STitle } from "./ui.jsx";

/* Vertical timeline of work experience; the first entry is highlighted. */
export function Experience({ L, isAr }) {
  return (
    <Section id="experience">
      <STitle>{L.expTitle}</STitle>
      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
        <div style={{ position: "absolute", [isAr ? "right" : "left"]: 19, top: 0, bottom: 0, width: 2, background: P.border }} />
        {L.experiences.map((exp, i) => (
          <div key={i} style={{ display: "flex", gap: 24, marginBottom: 36, position: "relative" }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
              background: i === 0 ? P.grad : P.card,
              border: `2px solid ${P.accent}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
            }}><Briefcase size={16} color={i === 0 ? P.bg : P.accent} /></div>
            <div style={{
              flex: 1, background: P.card, borderRadius: 14, padding: "20px 24px",
              border: `1px solid ${P.border}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: P.text }}>{exp.title}</h3>
                  <p style={{ fontSize: 14, color: P.accent, fontWeight: 500 }}>{exp.company}</p>
                </div>
                <span style={{ fontSize: 12, color: P.muted, background: P.accentSoft, padding: "4px 10px", borderRadius: 6 }}>{exp.date}</span>
              </div>
              <p style={{ fontSize: 14, color: P.muted, marginTop: 8 }}>{exp.desc}</p>
              <span style={{ fontSize: 12, color: P.muted, display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}><MapPin size={11} /> {exp.loc}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
