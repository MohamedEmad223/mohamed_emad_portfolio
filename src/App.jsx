import { useState, useEffect } from "react";
import { P } from "./theme.js";
import { WHATSAPP_NUMBER } from "./config.js";
import { t, sectionIds } from "./data/content.js";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { StoreApps } from "./components/StoreApps.jsx";
import { Skills } from "./components/Skills.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

/* Global styles that can't be inlined (font import, keyframes, scrollbar, and
 * the mobile-nav media query). The `.desk-nav` / `.mob-btn` classes toggle here. */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  ::-webkit-scrollbar{width:6px}
  ::-webkit-scrollbar-track{background:${P.bg}}
  ::-webkit-scrollbar-thumb{background:${P.accent};border-radius:3px}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
  @keyframes pulse{0%,100%{opacity:.4}50%{opacity:1}}
  @keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:768px){.desk-nav{display:none!important}.mob-btn{display:flex!important}}
`;

export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const [activeNav, setActiveNav] = useState("hero");
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const L = t[lang];
  const isAr = lang === "ar";

  const onFormChange = (e) => setFormData(d => ({ ...d, [e.target.name]: e.target.value }));

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const text = L.form.msg(formData.name, formData.email, formData.phone);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  // Scrollspy for the active nav link + visibility of the scroll-to-top button.
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const s = document.getElementById(sectionIds[i]);
        if (s && s.getBoundingClientRect().top <= 120) { setActiveNav(sectionIds[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const toggleLang = () => setLang(l => l === "ar" ? "en" : "ar");

  return (
    <div style={{ background: P.bg, color: P.text, minHeight: "100vh", fontFamily: "'Tajawal', 'Segoe UI', sans-serif", direction: L.dir }}>
      <style>{GLOBAL_CSS}</style>

      <Nav
        L={L}
        isAr={isAr}
        activeNav={activeNav}
        onNav={go}
        onToggleLang={toggleLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Hero L={L} isAr={isAr} onContact={() => go("contact")} />
        <About L={L} />
        <Experience L={L} isAr={isAr} />
        <Projects L={L} isAr={isAr} />
        <StoreApps L={L} />
        <Skills L={L} />
        <Contact L={L} formData={formData} onFormChange={onFormChange} onSubmit={sendWhatsApp} />
      </div>

      <Footer L={L} />
      <ScrollToTop show={showTop} isAr={isAr} />
    </div>
  );
}
