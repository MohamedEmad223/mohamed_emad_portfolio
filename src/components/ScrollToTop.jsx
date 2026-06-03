import { ArrowUp } from "lucide-react";
import { P } from "../theme.js";

/* Floating button that scrolls back to the top; only shown when `show` is true. */
export function ScrollToTop({ show, isAr }) {
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
      position: "fixed", bottom: 28, [isAr ? "left" : "right"]: 28, width: 44, height: 44, borderRadius: 12,
      background: P.accent, color: P.bg, border: "none", cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: `0 4px 20px ${P.accentGlow}`, zIndex: 99, transition: "transform .2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = ""}
    ><ArrowUp size={20} /></button>
  );
}
