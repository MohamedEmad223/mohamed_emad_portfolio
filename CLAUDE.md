# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the repo

There is no test setup in this project.

## Architecture

This is a single-page personal portfolio built with React 19 + Vite. [src/main.jsx](src/main.jsx) mounts the default `Portfolio` export from [src/App.jsx](src/App.jsx) into `#root`. `App.jsx` owns the shared state (language, active nav, form, scroll) and composes one component per page section.

File layout under `src/`:

- [theme.js](src/theme.js) — the `P` color palette.
- [config.js](src/config.js) — standalone values like `WHATSAPP_NUMBER`.
- [data/content.js](src/data/content.js) — the `t` i18n object plus the index-coupled constants (`sectionIds`, `projColors`, `storePlatforms`, `skillGroups`).
- [data/socials.js](src/data/socials.js) — the `socials` array (binds icon components to links).
- [hooks/useInView.js](src/hooks/useInView.js) — IntersectionObserver fade-in hook.
- [components/](src/components/) — `ui.jsx` (shared `Section` + `STitle`), `icons.jsx` (brand SVGs + store badges), and one file per section: `Nav`, `Hero`, `About`, `Experience`, `Projects`, `StoreApps`, `Skills`, `Contact`, `Footer`, `ScrollToTop`.

Key things to understand before editing:

- **Content is data, not markup.** All page content (experiences, projects, store apps, skills, socials, contact info) lives in plain arrays/objects in `data/`. To change what the site says, edit those structures rather than the JSX — the section components just `.map()` over them. The main content store is the `t` object (see i18n below).

- **Bilingual (Arabic / English), RTL-aware.** The `t` object holds parallel `ar` and `en` content trees with identical shapes. `App.jsx`'s `lang` state toggles between them; `L = t[lang]` is the active tree, passed down to every section as a prop along with `isAr`. Layout direction flips via `L.dir` (`rtl`/`ltr`), and many style values branch on `isAr` (e.g. `[isAr ? "right" : "left"]: ...`). When adding content, add it to **both** `ar` and `en` and keep array lengths aligned — index-based lookups depend on it.

- **Index-coupled arrays.** Several constants in `data/content.js` are positionally matched by array index: `sectionIds` ↔ `L.nav` (nav buttons), `projColors` ↔ `L.projects`, `storePlatforms` ↔ `L.storeApps`. Adding an item to one means adding to its counterpart at the same index.

- **Styling is all inline.** There is no CSS framework and the `.css` files are mostly unused. Colors come from the `P` palette in `theme.js`; reuse it instead of hardcoding hex values. Global rules that can't be inlined (font `@import`, `@keyframes`, `::-webkit-scrollbar`, the `@media(max-width:768px)` mobile-nav toggle) live in the `GLOBAL_CSS` string injected via a `<style>` tag in `App.jsx`. Responsive behavior keys off the `desk-nav` / `mob-btn` classes in that block.

- **Icons** come from `lucide-react`, imported individually per component. Note that `lucide-react` v1 **removed all brand icons** — GitHub and the social logos (`Github`, `Linkedin`, `Facebook`, `Instagram`, `XIcon`) are therefore defined as custom inline-SVG components in `components/icons.jsx` (paths from simple-icons), as are `GooglePlayBadge` and `AppStoreBadge`. Do not try to import brand logos from lucide; add a custom SVG to that file following the same pattern.

- **Scroll behavior** is manual: a single scroll listener in `App.jsx`'s `useEffect` drives the active-nav highlight (scrollspy) and the scroll-to-top button; the `useInView` hook does IntersectionObserver-based fade-in for each `Section`.

## Known issue

Many `href="#"` values (CV download, project links, social links, store badges) are placeholders awaiting real URLs.
