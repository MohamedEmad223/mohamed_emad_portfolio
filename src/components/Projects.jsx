import { ExternalLink, ShoppingBag, HeartPulse, Wallet, Brain, Globe, Dumbbell, Play } from "lucide-react";
import { P } from "../theme.js";
import { projColors } from "../data/content.js";
import { Github } from "./icons.jsx";
import { Section, STitle } from "./ui.jsx";
import cottonVideo from "../assets/videos/cotton_cloud.mp4";
import spaceVideo from "../assets/videos/space.mp4";
import nourishVideo from "../assets/videos/Nourish.mp4";
import hackVideo from "../assets/videos/hack_talk.mp4";

/* `projTypes[i].icon` -> lucide icon for the "what I build" chips. */
const TYPE_ICONS = { shop: ShoppingBag, health: HeartPulse, fin: Wallet, ai: Brain, info: Globe, wellness: Dumbbell };

/* Demo video per project, index-coupled with L.projects; null = no preview. */
const projVideos = [null, null, cottonVideo, spaceVideo, nourishVideo, hackVideo];

/* Projects section: the domains I work in, then the project cards with hover-to-play previews. */
export function Projects({ L, isAr }) {
  return (
    <Section id="projects">
      <STitle>{L.projTitle}</STitle>

      {/* Project types I work with */}
      <p style={{ textAlign: "center", color: P.muted, marginTop: -32, marginBottom: 24, fontSize: 15 }}>{L.projTypesTitle}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 48 }}>
        {L.projTypes.map((tp, i) => {
          const Icon = TYPE_ICONS[tp.icon];
          return (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 8, background: P.card,
              border: `1px solid ${P.border}`, borderRadius: 999, padding: "10px 18px",
            }}>
              <Icon size={16} color={P.accent} />
              <span style={{ fontSize: 14, fontWeight: 600, color: P.text }}>{tp.name}</span>
            </div>
          );
        })}
      </div>

      {/* Project cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {L.projects.map((p, i) => {
          const video = projVideos[i];
          return (
            <div key={i} style={{
              background: P.card, borderRadius: 16, padding: 28,
              border: `1px solid ${P.border}`, position: "relative", overflow: "hidden",
              transition: "transform .3s, box-shadow .3s", cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
                const v = e.currentTarget.querySelector("video");
                if (v) v.play().catch(() => {});
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
                const v = e.currentTarget.querySelector("video");
                if (v) { v.pause(); v.currentTime = 0; }
              }}
            >
              <div style={{ position: "absolute", top: 0, [isAr ? "right" : "left"]: 0, width: 80, height: 80, borderRadius: isAr ? "0 16px 0 80px" : "16px 0 80px 0", background: projColors[i], opacity: 0.08 }} />

              {video && (
                <div style={{
                  position: "relative", borderRadius: 12, overflow: "hidden", marginBottom: 18,
                  height: 240, background: "#000", border: `1px solid ${P.border}`,
                }}>
                  <video
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 8, [isAr ? "left" : "right"]: 8,
                    display: "flex", alignItems: "center", gap: 5, padding: "4px 10px",
                    borderRadius: 999, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
                    fontSize: 11, fontWeight: 600, color: "#fff",
                  }}>
                    <Play size={11} fill="#fff" /> {L.viewProj}
                  </div>
                </div>
              )}

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
          );
        })}
      </div>
    </Section>
  );
}
