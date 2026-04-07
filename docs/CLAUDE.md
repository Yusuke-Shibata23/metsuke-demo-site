# CLAUDE.md — Project Constitution

## Project Overview

**Site name**: こまち食堂 (Komachi Shokudo)  
**Purpose**: Demo site for Metsuke (automated web testing tool) — intentionally grows in complexity over time.  
**Repo**: `Yusuke-Shibata23/metsuke-demo-site`  
**Live URL**: `https://yusuke-shibata23.github.io/metsuke-demo-site/`

---

## Tech Stack (Finalized — Do Not Change Without Explicit Approval)

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 (via PostCSS, not CDN) |
| Routing | React Router v6 — HashRouter (`/#/path`) |
| Deployment | GitHub Actions → GitHub Pages (`dist/`) |
| Images | `https://placehold.co/WxH?text=Label` |
| Icons | Emoji or inline SVG only |

---

## Directory Structure

```
metsuke-demo-site/
├── .github/workflows/deploy.yml   # CI/CD: push to main → build → Pages
├── public/.nojekyll               # Disable Jekyll on GitHub Pages
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Nav + hamburger menu
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx               # / — トップページ
│   │   ├── Services.jsx           # /services — メニュー + FAQ accordion
│   │   ├── Contact.jsx            # /contact — お問い合わせフォーム
│   │   └── ErrorDemo.jsx          # /error-demo — intentional JS error
│   ├── App.jsx                    # Router + layout shell
│   ├── main.jsx
│   └── index.css                  # Tailwind directives only
├── docs/
│   ├── CLAUDE.md                  # This file
│   ├── handover.md                # Session handover — updated every session
│   └── REQUIREMENTS.md            # Living requirements doc
├── index.html
├── vite.config.js                 # base: '/metsuke-demo-site/'
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Routing

Routes use `HashRouter` for GitHub Pages compatibility.

| URL hash | Page |
|----------|------|
| `/#/` | Home |
| `/#/services` | Services / Menu |
| `/#/contact` | Contact |
| `/#/error-demo` | Error Demo |

---

## ARIA & Selector Rules (Critical — Metsuke Compatibility)

Metsuke identifies elements by role/text only — never by ID or class.

| Element | Required attribute |
|---------|--------------------|
| Hamburger button | `role="button" aria-label="メニュー"` |
| FAQ accordion buttons | `role="button"` + visible text label |
| All interactive buttons | Meaningful visible text |

**Never rely on IDs or class names for element identification in tests.**

---

## Required Structural Tags (All Pages)

Every page rendered by React must result in the DOM containing:

```
<header> <nav> <main> <footer>
```

These are checked by Metsuke's `elements_exist` check.

---

## Deployment Rules

- **Trigger**: Push to `main` branch only
- **Build output**: `dist/` directory
- **No linting pipeline**
- **No testing pipeline**
- `vite.config.js` base must remain `/metsuke-demo-site/`

---

## Prohibited Actions

- Do not switch from HashRouter to BrowserRouter without handling the 404 redirect on GitHub Pages
- Do not add external UI libraries without user approval
- Do not remove intentional JS error from `ErrorDemo.jsx`
- Do not change `base` in `vite.config.js` without updating the GitHub repo name
- Do not write docs in Japanese (docs are English; chat is Japanese)
