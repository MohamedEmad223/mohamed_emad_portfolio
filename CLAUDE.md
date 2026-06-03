# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the repo

There is no test setup in this project.

## Architecture

This is a single-page personal portfolio built with React 19 + Vite. The entire UI lives in one file: [src/App.jsx](src/App.jsx). [src/main.jsx](src/main.jsx) just mounts the default `Portfolio` export into `#root`.

Key things to understand before editing:

- **Content is data, not markup.** All page content (experiences, projects, store apps, skills, socials, contact info) lives in plain arrays/objects near the top of `App.jsx`. To change what the site says, edit these structures rather than the JSX — the JSX just `.map()`s over them. The main content store is the `t` object (see i18n below); `skillGroups` and `socials` are separate module-level constants.

- **Bilingual (Arabic / English), RTL-aware.** The `t` object holds parallel `ar` and `en` content trees with identical shapes. `lang` state toggles between them; `L = t[lang]` is the active tree. Layout direction flips via `L.dir` (`rtl`/`ltr`), and many style values branch on `isAr` (e.g. `[isAr ? "right" : "left"]: ...`). When adding content, add it to **both** `ar` and `en` and keep array lengths aligned — index-based lookups depend on it.

- **Index-coupled arrays.** Several constants are positionally matched by array index: `sectionIds` ↔ `L.nav` (nav buttons), `projColors` ↔ `L.projects`, `storePlatforms` ↔ `L.storeApps`. Adding an item to one means adding to its counterpart at the same index.

- **Styling is all inline.** There is no CSS framework and the `.css` files are mostly unused. Colors come from the `P` palette object; reuse it instead of hardcoding hex values. Global rules that can't be inlined (font `@import`, `@keyframes`, `::-webkit-scrollbar`, the `@media(max-width:768px)` mobile-nav toggle) are injected via a `<style>` tag inside the component. Responsive behavior keys off the `desk-nav` / `mob-btn` classes in that block.

- **Icons** come from `lucide-react`, imported individually at the top. Note that `lucide-react` v1 **removed all brand icons** — GitHub and the social logos (`Github`, `Linkedin`, `Facebook`, `Instagram`, `XIcon`) are therefore defined as custom inline-SVG components in the file (paths from simple-icons), as are `GooglePlayBadge` and `AppStoreBadge`. Do not try to import brand logos from lucide; add a custom SVG following that pattern.

- **Scroll behavior** is manual: a single scroll listener in the main `useEffect` drives the active-nav highlight (scrollspy) and the scroll-to-top button; the `useInView` hook does IntersectionObserver-based fade-in for each `Section`.

## Known issue

Many `href="#"` values (CV download, project links, social links, store badges) are placeholders awaiting real URLs.
