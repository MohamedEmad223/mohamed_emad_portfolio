import { MapPin, Download, ChevronDown } from "lucide-react";
import { P } from "../theme.js";
import profileImg from "../assets/profile.jpeg";

/* Landing section: avatar, name, tagline, and primary CTAs. */
export function Hero({ L, isAr, onContact }) {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", textAlign: "center", paddingTop: 80 }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)", animation: "float 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "10%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)", animation: "float 8s ease-in-out infinite 1s" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          width: 176, height: 176, borderRadius: "50%", margin: "0 auto 28px",
          padding: 4, background: P.grad, boxShadow: `0 0 60px ${P.accentGlow}`,
          animation: "float 6s ease-in-out infinite",
        }}>
          <img
            src={profileImg}
            alt={L.heroTitle}
            onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
            style={{
              width: "100%", height: "100%", borderRadius: "50%", display: "block",
              objectFit: "cover", objectPosition: "center 20%",
              border: `4px solid ${P.bg}`, background: P.surface,
            }}
          />
          {/* Fallback initial shown if the photo fails to load */}
          <div style={{
            display: "none", width: "100%", height: "100%", borderRadius: "50%",
            background: P.surface, alignItems: "center", justifyContent: "center",
            fontSize: 60, fontWeight: 900, color: P.accent, border: `4px solid ${P.bg}`,
          }}>{isAr ? "م" : "M"}</div>
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, marginBottom: 8 }}>{L.heroTitle}</h1>
        <p style={{ fontSize: "clamp(1rem, 3vw, 1.35rem)", fontWeight: 300, background: P.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 12 }}>{L.heroSub}</p>
        <p style={{ color: P.muted, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><MapPin size={15} /> {L.heroLoc}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
          <a href="#contact" onClick={e => { e.preventDefault(); onContact(); }} style={{
            background: P.grad, color: P.bg, padding: "12px 28px", borderRadius: 10,
            fontWeight: 700, fontSize: 15, textDecoration: "none", fontFamily: "inherit",
            boxShadow: `0 4px 24px ${P.accentGlow}`,
          }}>{L.ctaContact}</a>
          <a href="#" style={{
            border: `1.5px solid ${P.accent}`, color: P.accent, padding: "12px 28px",
            borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: "none", fontFamily: "inherit",
            display: "flex", alignItems: "center", gap: 8,
          }}><Download size={16} /> {L.ctaCV}</a>
        </div>
        <div style={{ marginTop: 60, animation: "pulse 2s infinite", color: P.muted }}><ChevronDown size={28} /></div>
      </div>
    </section>
  );
}
