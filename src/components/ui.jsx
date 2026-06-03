import { P } from "../theme.js";
import { useInView } from "../hooks/useInView.js";

/* A page section that fades/slides in when scrolled into view. */
export function Section({ id, children }) {
  const [ref, inView] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1)",
        padding: "80px 0",
      }}
    >
      {children}
    </section>
  );
}

/* Centered section heading with an accent underline. */
export function STitle({ children }) {
  return (
    <h2 style={{
      fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, color: P.text,
      marginBottom: 48, textAlign: "center", fontFamily: "inherit",
    }}>
      {children}
      <span style={{ display: "block", width: 60, height: 3, background: P.grad, borderRadius: 2, margin: "12px auto 0" }} />
    </h2>
  );
}
