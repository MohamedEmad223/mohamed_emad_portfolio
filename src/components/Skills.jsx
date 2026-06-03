import { Code2, Database, Layers, Wrench } from "lucide-react";
import { P } from "../theme.js";
import { skillGroups } from "../data/content.js";
import { Section, STitle } from "./ui.jsx";

/* Maps a skill group's `icon` key to its lucide icon. */
function SkillIcon({ type }) {
  if (type === "code") return <Code2 size={20} />;
  if (type === "db") return <Database size={20} />;
  if (type === "arch") return <Layers size={20} />;
  return <Wrench size={20} />;
}

/* Grouped skill chips. */
export function Skills({ L }) {
  return (
    <Section id="skills">
      <STitle>{L.skillsTitle}</STitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
        {skillGroups.map((g, i) => (
          <div key={i} style={{
            background: P.card, borderRadius: 16, padding: 24,
            border: `1px solid ${P.border}`, transition: "border-color .3s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = P.accent}
            onMouseLeave={e => e.currentTarget.style.borderColor = P.border}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, color: P.accent }}>
              <SkillIcon type={g.icon} />
              <h3 style={{ fontSize: 15, fontWeight: 700, color: P.text }}>{g.title}</h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.items.map((s, j) => (
                <span key={j} style={{
                  background: P.accentSoft, color: P.accent, padding: "6px 14px",
                  borderRadius: 8, fontSize: 13, fontWeight: 500, border: `1px solid ${P.border}`,
                }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
