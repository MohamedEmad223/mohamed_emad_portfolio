import { Smartphone } from "lucide-react";
import { P } from "../theme.js";
import { storePlatforms } from "../data/content.js";
import { GooglePlayBadge, AppStoreBadge } from "./icons.jsx";
import { Section, STitle } from "./ui.jsx";

/* Published apps; `storePlatforms[i]` decides which store badges show. */
export function StoreApps({ L }) {
  return (
    <Section id="store-apps">
      <STitle>{L.storeTitle}</STitle>
      <p style={{ textAlign: "center", color: P.muted, marginTop: -32, marginBottom: 40, fontSize: 15 }}>{L.storeSub}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
        {L.storeApps.map((app, i) => (
          <div key={i} style={{
            background: `linear-gradient(135deg, ${P.card}, ${P.cardHover})`,
            borderRadius: 20, padding: 28, border: `1px solid ${P.border}`,
            textAlign: "center", transition: "transform .3s, box-shadow .3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${P.accentGlow}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{
              width: 72, height: 72, borderRadius: 16, margin: "0 auto 16px",
              background: P.accentSoft, display: "flex", alignItems: "center", justifyContent: "center",
              border: `1px solid ${P.border}`,
            }}><Smartphone size={32} color={P.accent} /></div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{app.name}</h3>
            <p style={{ fontSize: 14, color: P.muted, marginBottom: 20, lineHeight: 1.7 }}>{app.desc}</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {storePlatforms[i].includes("google") && <a href="#" style={{ textDecoration: "none" }}><GooglePlayBadge /></a>}
              {storePlatforms[i].includes("apple") && <a href="#" style={{ textDecoration: "none" }}><AppStoreBadge /></a>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
