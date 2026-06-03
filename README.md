# Mohamed Emad — Portfolio

A personal portfolio website for **Mohamed Emad**, a Flutter Developer based in Mansoura, Egypt. Built as a single-page React application with a dark, modern UI and full **bilingual (English / Arabic)** support, including right-to-left layout for Arabic.

## ✨ Features

- **Bilingual & RTL-aware** — one click toggles the entire site between English and Arabic; layout direction flips automatically.
- **Single-page sections** — Hero, About, Work Experience timeline, Projects, Published Store Apps, Skills, and Contact.
- **Scroll-aware navigation** — the active section is highlighted as you scroll, with smooth-scroll anchors and a scroll-to-top button.
- **Animated UI** — section fade-ins on scroll (IntersectionObserver), floating background accents, and hover effects throughout.
- **Live social links** — LinkedIn, GitHub, Facebook, X, Instagram, and WhatsApp.
- **WhatsApp contact form** — visitors enter their name, email, and phone; submitting opens a pre-filled WhatsApp chat with the entered details.
- **Responsive** — adapts from desktop down to mobile, with a collapsible mobile menu.

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (dev server + build)
- [lucide-react](https://lucide.dev/) for icons (brand logos are custom inline SVGs)
- Inline-style design system (no CSS framework)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (18+ recommended)

### Installation

```bash
git clone https://github.com/MohamedEmad223/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build     # output to dist/
npm run preview   # preview the production build locally
```

### Linting

```bash
npm run lint
```

## 🧩 Project Structure

```
my-portfolio/
├── public/            # static assets (favicons, icons)
├── src/
│   ├── App.jsx        # entire UI: content data, i18n, components, layout
│   ├── main.jsx       # React entry point
│   └── assets/        # images
├── index.html
└── vite.config.js
```

The whole site lives in [`src/App.jsx`](src/App.jsx). Content (experiences, projects, skills, contact info) is stored as **data structures** at the top of the file inside a bilingual `t` object — to update the site's content, edit those arrays rather than the JSX.

## 📬 Contact

- **Email:** Mohamedelbakrawy70@gmail.com
- **LinkedIn:** [mohamed-emad22](https://www.linkedin.com/in/mohamed-emad22/)
- **GitHub:** [MohamedEmad223](https://github.com/MohamedEmad223)
- **WhatsApp:** [+20 106 536 3857](https://wa.me/201065363857)

---

© 2026 Mohamed Emad. All rights reserved.
