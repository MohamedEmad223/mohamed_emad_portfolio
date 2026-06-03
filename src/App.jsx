import { useState, useEffect, useRef } from "react";
import {
  Mail, Phone, MapPin, Download, ExternalLink,
  MessageCircle, ChevronDown, Code2, Database,
  Layers, Wrench, GraduationCap, Briefcase, Smartphone, ArrowUp, Globe
} from "lucide-react";
import profileImg from "./assets/profile.jpeg";
/* ─── PALETTE ─── */
const P = {
  bg: "#0a0e17", surface: "#111827", card: "#1a2235", cardHover: "#1f2a42",
  accent: "#38bdf8", accentGlow: "rgba(56,189,248,0.15)", accentSoft: "rgba(56,189,248,0.08)",
  text: "#e2e8f0", muted: "#94a3b8", border: "rgba(56,189,248,0.12)",
  grad: "linear-gradient(135deg, #0ea5e9, #38bdf8, #7dd3fc)",
};

/* ─── i18n ─── */
const t = {
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "نبذة عني", "الخبرات", "المشاريع", "المتاجر", "المهارات", "تواصل"],
    heroTitle: "محمد عماد",
    heroSub: "مطور Flutter",
    heroLoc: "المنصورة، مصر",
    ctaContact: "تواصل معي",
    ctaCV: "تحميل السيرة الذاتية",
    aboutTitle: "نبذة عني",
    aboutText: "أنا مطور Flutter شغوف عندي أساس قوي في تطوير تطبيقات الموبايل. عندي خبرة عملية في بناء تطبيقات سهلة الاستخدام وبسعى دايماً إني أطور من مهاراتي وأساهم في مشاريع مبتكرة. ملتزم بالتعلم المستمر والنمو المهني، وبحاول دايماً أقدم حلول عالية الجودة.",
    edu: "بكالوريوس علوم الحاسب — جامعة المنصورة (2020–2024)",
    expTitle: "الخبرة العملية",
    experiences: [
      { title: "Flutter Developer", company: "ICS For Digital Solution", date: "يناير 2026 – الحالي", loc: "عن بعد", desc: "تطبيقات E-commerce ومشاريع لمستشفيات وصيدليات" },
      { title: "Flutter Developer", company: "Teqnit Almalomat", date: "أغسطس 2025 – ديسمبر 2025", loc: "المنصورة", desc: "تطبيقين عن السياحة" },
      { title: "Mentorship", company: "Omar Ahmed — Senior Flutter Engineer", date: "سبتمبر 2025 – ديسمبر 2025", loc: "عن بعد", desc: "10 أسابيع تدريب مكثف على Flutter المتقدم وهندسة البرمجيات" },
      { title: "تدريب", company: "تطبيق Lothgha", date: "أغسطس 2024 – سبتمبر 2024", loc: "عن بعد", desc: "تطبيق تابلت للأطفال — مطابقة الأشكال والظلال" },
      { title: "Hackathon", company: "تطبيق Athar — Na3ml", date: "أغسطس 2023 – سبتمبر 2023", loc: "عن بعد", desc: "تطبيق تطوعي لمساعدة المحتاجين" },
      { title: "Flutter Developer", company: "ITI المنصورة", date: "يناير 2023 – فبراير 2023", loc: "عن بعد", desc: "تدريب Flutter" },
      { title: "Flutter Developer", company: "CCIC المنصورة", date: "يونيو 2023 – أكتوبر 2023", loc: "عن بعد", desc: "تدريب Flutter" },
    ],
    projTitle: "المشاريع",
    projects: [
      { name: "HealCare", desc: "تطبيق دكتور ومريض فيه حجز مواعيد، شات لحظي، دفع، إشعارات، تقييمات، رفع ملفات طبية، وإدارة جدول الدكتور" },
      { name: "FinTech", desc: "تطبيق تتبع أسعار العملات الرقمية مع بصمة وتعرف على الوجه، رسوم بيانية يومية، دفع بـ Stripe" },
      { name: "Cotton Cloud", desc: "واجهة E-commerce فيها عرض منتجات، بحث، فلترة، ثيمات، ترجمة، مفضلة، إشعارات، أكواد خصم، سلة شراء" },
      { name: "SpaceX", desc: "تطبيق معلومات عن شركة SpaceX: المؤسس، الإطلاقات، فيديوهات، و WebView" },
      { name: "Nourish Me", desc: "تطبيق صحة ولياقة فيه استبيان صحي، خطط أكل مخصصة، وتمارين رياضية" },
      { name: "HackTalk", desc: "مشروع التخرج — تطبيق لعلاج رهاب التحدث باستخدام AI و Unity" },
    ],
    storeTitle: "تطبيقاتي على المتاجر",
    storeSub: "تطبيقات حقيقية منشورة على Google Play و App Store",
    storeApps: [
      { name: "التطبيق الأول", desc: "وصف قصير للتطبيق المنشور على المتاجر" },
      { name: "التطبيق الثاني", desc: "وصف قصير للتطبيق المنشور على المتاجر" },
      { name: "التطبيق الثالث", desc: "وصف قصير للتطبيق المنشور على المتاجر" },
    ],
    skillsTitle: "المهارات",
    contactTitle: "تواصل معي",
    contactLabels: ["الإيميل", "الموبايل", "الموقع"],
    contactVals: ["Mohamedelbakrawy70@gmail.com", "+201065363857", "المنصورة، مصر"],
    form: {
      heading: "ابعتلي رسالة",
      name: "الاسم",
      email: "الإيميل",
      phone: "رقم الموبايل",
      send: "إرسال عبر واتساب",
      msg: (n, e, p) => `مرحباً محمد، أنا ${n}.\nالإيميل: ${e}\nالموبايل: ${p}`,
    },
    viewProj: "عرض المشروع",
    footerName: "محمد عماد",
    copy: "© 2026 Mohamed Emad. All rights reserved.",
  },
  en: {
    dir: "ltr",
    nav: ["Home", "About", "Experience", "Projects", "Store", "Skills", "Contact"],
    heroTitle: "Mohamed Emad",
    heroSub: "Flutter Developer",
    heroLoc: "Mansoura, Egypt",
    ctaContact: "Contact Me",
    ctaCV: "Download CV",
    aboutTitle: "About Me",
    aboutText: "I am a passionate Flutter developer with a solid foundation in mobile app development. I have hands-on experience building user-friendly applications and I'm always eager to enhance my skills and contribute to innovative projects. Committed to continuous learning and professional growth, I strive to deliver high-quality solutions.",
    edu: "B.Sc. in Computer Science — Mansoura University (2020–2024)",
    expTitle: "Work Experience",
    experiences: [
      { title: "Flutter Developer", company: "ICS For Digital Solution", date: "Jan 2026 – Present", loc: "Remote", desc: "E-commerce apps and projects for hospitals and pharmacies" },
      { title: "Flutter Developer", company: "Teqnit Almalomat", date: "Aug 2025 – Dec 2025", loc: "Mansoura", desc: "Two tourism information applications" },
      { title: "Mentorship", company: "Omar Ahmed — Senior Flutter Engineer", date: "Sep 2025 – Dec 2025", loc: "Remote", desc: "10-week intensive mentorship on advanced Flutter and software engineering" },
      { title: "Internship", company: "Lothgha App", date: "Aug 2024 – Sep 2024", loc: "Remote", desc: "Children's tablet app — Shape and Shadow Matching" },
      { title: "Hackathon", company: "Athar App — Na3ml", date: "Aug 2023 – Sep 2023", loc: "Remote", desc: "Volunteer app for helping underprivileged communities" },
      { title: "Flutter Developer", company: "ITI Mansoura", date: "Jan 2023 – Feb 2023", loc: "Remote", desc: "Flutter training program" },
      { title: "Flutter Developer", company: "CCIC Mansoura", date: "Jun 2023 – Oct 2023", loc: "Remote", desc: "Flutter training program" },
    ],
    projTitle: "Projects",
    projects: [
      { name: "HealCare", desc: "Doctor-patient app with appointment booking, real-time chat, payments, notifications, ratings, medical file uploads, and doctor schedule management" },
      { name: "FinTech", desc: "Crypto price tracker with biometric auth, daily price graphs, Stripe payment, profile & theme customization" },
      { name: "Cotton Cloud", desc: "E-commerce UI with product listing, search, filtering, theming, localization, favorites, notifications, promo codes, and cart" },
      { name: "SpaceX", desc: "Info app about SpaceX: founder, launches, videos, and WebView integration" },
      { name: "Nourish Me", desc: "Health & wellness app with health questionnaire, personalized diet/meal plans, and workout routines" },
      { name: "HackTalk", desc: "Graduation project — App for treating glossophobia using AI and Unity" },
    ],
    storeTitle: "My Apps on Stores",
    storeSub: "Real published apps on Google Play & App Store",
    storeApps: [
      { name: "App One", desc: "Short description of the published app" },
      { name: "App Two", desc: "Short description of the published app" },
      { name: "App Three", desc: "Short description of the published app" },
    ],
    skillsTitle: "Skills",
    contactTitle: "Contact Me",
    contactLabels: ["Email", "Phone", "Location"],
    contactVals: ["Mohamedelbakrawy70@gmail.com", "+201065363857", "Mansoura, Egypt"],
    form: {
      heading: "Send me a message",
      name: "Name",
      email: "Email",
      phone: "Phone number",
      send: "Send via WhatsApp",
      msg: (n, e, p) => `Hi Mohamed, I'm ${n}.\nEmail: ${e}\nPhone: ${p}`,
    },
    viewProj: "View Project",
    footerName: "Mohamed Emad",
    copy: "© 2026 Mohamed Emad. All rights reserved.",
  },
};

const sectionIds = ["hero", "about", "experience", "projects", "store-apps", "skills", "contact"];
const projColors = ["#38bdf8", "#a78bfa", "#34d399", "#f472b6", "#fbbf24", "#fb923c"];
const storePlatforms = [["google", "apple"], ["google"], ["google", "apple"]];

const skillGroups = [
  { icon: "code", title: "Mobile Development", items: ["Dart", "OOP", "Flutter", "APIs", "State Management"] },
  { icon: "db", title: "Local Database", items: ["Hive", "Sqflite", "Shared Preferences", "Flutter Secure Storage"] },
  { icon: "arch", title: "Architecture", items: ["MVVM", "MVC", "Clean Architecture", "SOLID", "Design Patterns"] },
  { icon: "other", title: "Other", items: ["Git & GitHub", "Animations", "Notifications", "CI/CD", "Agile"] },
];

/* lucide v1 dropped brand icons, so these logos are inline SVGs (paths from simple-icons) */
const XIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Github = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const Facebook = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Instagram = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const GooglePlayBadge = () => (
  <svg viewBox="0 0 135 40" width={120} height={36}>
    <rect width="135" height="40" rx="5" fill="#000" />
    <text x="67" y="12" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif">GET IT ON</text>
    <text x="67" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Google Play</text>
    <path d="M20 8l12 12-12 12V8z" fill="#38bdf8" opacity="0.8" />
  </svg>
);

const AppStoreBadge = () => (
  <svg viewBox="0 0 135 40" width={120} height={36}>
    <rect width="135" height="40" rx="5" fill="#000" />
    <text x="67" y="12" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif">Download on the</text>
    <text x="67" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">App Store</text>
    <path d="M22 12a8 8 0 0 1 0 16" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
  </svg>
);

const WHATSAPP_NUMBER = "201065363857";

const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-emad22/" },
  { Icon: Github, label: "GitHub", href: "https://github.com/MohamedEmad223" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Bakrow10" },
  { Icon: null, label: "X", href: "https://x.com/B_akrow10" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mohamedemadx22?igsh=eXRteTVjNnR3NHR3" },
  { Icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
];

/* ─── HOOKS ─── */
function useInView(th = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: th });
    obs.observe(el);
    return () => obs.disconnect();
  }, [th]);
  return [ref, v];
}

/* ─── COMPONENTS ─── */
function Section({ id, children }) {
  const [ref, v] = useInView();
  return (
    <section id={id} ref={ref} style={{
      opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(40px)",
      transition: "opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1)",
      padding: "80px 0",
    }}>{children}</section>
  );
}

function STitle({ children }) {
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

function SkillIcon({ type }) {
  if (type === "code") return <Code2 size={20} />;
  if (type === "db") return <Database size={20} />;
  if (type === "arch") return <Layers size={20} />;
  return <Wrench size={20} />;
}

function SocialIcon({ s }) {
  if (s.Icon) return <s.Icon size={20} />;
  return <XIcon />;
}

/* ─── MAIN ─── */
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
      <style>{`
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
      `}</style>

      {/* NAV */}
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
                <button key={i} onClick={() => go(sectionIds[i])} style={{
                  background: activeNav === sectionIds[i] ? P.accentSoft : "transparent",
                  border: "none", color: activeNav === sectionIds[i] ? P.accent : P.muted,
                  padding: "8px 14px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontFamily: "inherit",
                  fontWeight: activeNav === sectionIds[i] ? 600 : 400, transition: "all .25s",
                }}>{label}</button>
              ))}
            </div>
            {/* Lang toggle */}
            <button onClick={toggleLang} style={{
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
              <button key={i} onClick={() => go(sectionIds[i])} style={{
                display: "block", width: "100%", textAlign: isAr ? "right" : "left", background: "none", border: "none",
                color: activeNav === sectionIds[i] ? P.accent : P.muted, padding: "12px 8px",
                fontSize: 16, fontFamily: "inherit", cursor: "pointer",
              }}>{label}</button>
            ))}
          </div>
        )}
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* HERO */}
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
              <a href="#contact" onClick={e => { e.preventDefault(); go("contact"); }} style={{
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

        {/* ABOUT */}
        <Section id="about">
          <STitle>{L.aboutTitle}</STitle>
          <div style={{
            background: P.card, borderRadius: 16, padding: "36px 32px",
            border: `1px solid ${P.border}`, lineHeight: 1.9, fontSize: 16, color: P.muted,
            maxWidth: 780, margin: "0 auto", textAlign: "center",
          }}>
            <p>{L.aboutText}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 20, color: P.accent }}>
              <GraduationCap size={18} />
              <span style={{ fontSize: 14 }}>{L.edu}</span>
            </div>
          </div>
        </Section>

        {/* EXPERIENCE */}
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

        {/* PROJECTS */}
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

        {/* STORE APPS */}
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

        {/* SKILLS */}
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

        {/* CONTACT */}
        <Section id="contact">
          <STitle>{L.contactTitle}</STitle>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {[Mail, Phone, MapPin].map((Icon, i) => (
              <a key={i} href={i === 0 ? `mailto:${L.contactVals[0]}` : i === 1 ? `tel:${L.contactVals[1]}` : "#"} style={{
                background: P.card, borderRadius: 16, padding: "24px 32px",
                border: `1px solid ${P.border}`, textDecoration: "none", color: "inherit",
                display: "flex", alignItems: "center", gap: 14, minWidth: 260, transition: "border-color .3s, transform .3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = P.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = P.border; e.currentTarget.style.transform = ""; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: P.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", color: P.accent }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: P.muted }}>{L.contactLabels[i]}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, direction: "ltr" }}>{L.contactVals[i]}</div>
                </div>
              </a>
            ))}
          </div>

          {/* CONTACT FORM */}
          <form onSubmit={sendWhatsApp} style={{
            background: P.card, borderRadius: 16, padding: "32px 28px",
            border: `1px solid ${P.border}`, maxWidth: 520, margin: "40px auto 0",
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: P.text, textAlign: "center", marginBottom: 4 }}>{L.form.heading}</h3>
            {[
              { name: "name", label: L.form.name, type: "text" },
              { name: "email", label: L.form.email, type: "email" },
              { name: "phone", label: L.form.phone, type: "tel" },
            ].map((f) => (
              <input
                key={f.name}
                name={f.name}
                type={f.type}
                required
                value={formData[f.name]}
                onChange={onFormChange}
                placeholder={f.label}
                style={{
                  background: P.surface, border: `1px solid ${P.border}`, borderRadius: 10,
                  padding: "12px 16px", color: P.text, fontSize: 15, fontFamily: "inherit",
                  outline: "none", width: "100%", transition: "border-color .25s",
                }}
                onFocus={e => e.currentTarget.style.borderColor = P.accent}
                onBlur={e => e.currentTarget.style.borderColor = P.border}
              />
            ))}
            <button type="submit" style={{
              background: P.grad, color: P.bg, border: "none", borderRadius: 10,
              padding: "13px 28px", fontWeight: 700, fontSize: 15, fontFamily: "inherit",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: `0 4px 24px ${P.accentGlow}`, marginTop: 4,
            }}>
              <MessageCircle size={18} /> {L.form.send}
            </button>
          </form>
        </Section>
      </div>

      {/* FOOTER */}
      <footer style={{ background: P.surface, borderTop: `1px solid ${P.border}`, padding: "48px 24px 28px", marginTop: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 22, fontWeight: 800, background: P.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{L.footerName}</span>
          <p style={{ color: P.muted, fontSize: 14, marginTop: 4 }}>Flutter Developer</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
                width: 42, height: 42, borderRadius: 12, background: P.card,
                border: `1px solid ${P.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                color: P.muted, textDecoration: "none", transition: "all .25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = P.accent; e.currentTarget.style.color = P.bg; e.currentTarget.style.borderColor = P.accent; }}
              onMouseLeave={e => { e.currentTarget.style.background = P.card; e.currentTarget.style.color = P.muted; e.currentTarget.style.borderColor = P.border; }}
              ><SocialIcon s={s} /></a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
            <a href="mailto:Mohamedelbakrawy70@gmail.com" style={{ color: P.muted, fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              <Mail size={13} /> Mohamedelbakrawy70@gmail.com
            </a>
            <span style={{ color: P.muted, fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}>
              <Phone size={13} /> +201065363857
            </span>
          </div>
          <div style={{ height: 1, background: P.border, margin: "24px auto", maxWidth: 400 }} />
          <p style={{ color: P.muted, fontSize: 12 }}>{L.copy}</p>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
          position: "fixed", bottom: 28, [isAr ? "left" : "right"]: 28, width: 44, height: 44, borderRadius: 12,
          background: P.accent, color: P.bg, border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 4px 20px ${P.accentGlow}`, zIndex: 99, transition: "transform .2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = ""}
        ><ArrowUp size={20} /></button>
      )}
    </div>
  );
}