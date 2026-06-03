import { ExternalLink } from "lucide-react";
import { P } from "../theme.js";
import { projColors } from "../data/content.js";
import { Github } from "./icons.jsx";
import { Section, STitle } from "./ui.jsx";

/* Grid of project cards; each card's accent color comes from `projColors[i]`. */
export function Projects({ L, isAr }) {
  return (
    <Section id="projects">
      <STitle>{L.projTitle}</STitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {L.projects.map((p, i) => (
          <div key={i} style={{
            background: P.card, borderRadius: 16, padding: 28,
            border: `1px solid ${P.border}`, position: "relative", overflow: "hidden",
            transition: "transform .3s, box-shadow .3s", cursor: "default",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ position: "absolute", top: 0, [isAr ? "right" : "left"]: 0, width: 80, height: 80, borderRadius: isAr ? "0 16px 0 80px" : "16px 0 80px 0", background: projColors[i], opacity: 0.08 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: projColors[i] }} />
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>{p.name}</h3>
            </div>
            <p style={{ fontSize: 14, color: P.muted, lineHeight: 1.8 }}>{p.desc}</p>
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <a href="#" style={{ fontSize: 13, color: projColors[i], display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}>
                <ExternalLink size={13} /> {L.viewProj}
              </a>
              <a href="#" style={{ fontSize: 13, color: P.muted, display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}>
                <Github size={13} /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
