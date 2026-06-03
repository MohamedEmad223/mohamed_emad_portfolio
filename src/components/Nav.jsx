import { Globe } from "lucide-react";
import { P } from "../theme.js";
import { sectionIds } from "../data/content.js";

/* Fixed top navigation: desktop links, language toggle, and mobile menu. */
export function Nav({ L, isAr, activeNav, onNav, onToggleLang, menuOpen, setMenuOpen }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,14,23,0.85)", backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${P.border}`,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontSize: 20, fontWeight: 800, background: P.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ME<span style={{ WebkitTextFillColor: P.muted, fontSize: 14, fontWeight: 400 }}>.dev</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div className="desk-nav" style={{ display: "flex", gap: 4 }}>
            {L.nav.map((label, i) => (
              <button key={i} onClick={() => onNav(sectionIds[i])} style={{
                background: activeNav === sectionIds[i] ? P.accentSoft : "transparent",
                border: "none", color: activeNav === sectionIds[i] ? P.accent : P.muted,
                padding: "8px 14px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontFamily: "inherit",
                fontWeight: activeNav === sectionIds[i] ? 600 : 400, transition: "all .25s",
              }}>{label}</button>
            ))}
          </div>
          {/* Language toggle */}
          <button onClick={onToggleLang} style={{
            background: P.accentSoft, border: `1px solid ${P.border}`, color: P.accent,
            padding: "6px 12px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontFamily: "inherit",
            fontWeight: 600, marginInlineStart: 8, display: "flex", alignItems: "center", gap: 6, transition: "all .25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = P.accent; e.currentTarget.style.color = P.bg; }}
            onMouseLeave={e => { e.currentTarget.style.background = P.accentSoft; e.currentTarget.style.color = P.accent; }}
          >
            <Globe size={14} />
            {isAr ? "EN" : "عربي"}
          </button>
          <button className="mob-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: "none", background: "none", border: "none", color: P.text, cursor: "pointer",
            fontSize: 24, alignItems: "center", justifyContent: "center", marginInlineStart: 8,
          }}>☰</button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: P.surface, padding: 16, animation: "slideDown .3s ease", borderTop: `1px solid ${P.border}` }}>
          {L.nav.map((label, i) => (
            <button key={i} onClick={() => onNav(sectionIds[i])} style={{
              display: "block", width: "100%", textAlign: isAr ? "right" : "left", background: "none", border: "none",
              color: activeNav === sectionIds[i] ? P.accent : P.muted, padding: "12px 8px",
              fontSize: 16, fontFamily: "inherit", cursor: "pointer",
            }}>{label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
