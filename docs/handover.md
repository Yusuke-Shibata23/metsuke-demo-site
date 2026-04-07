# handover.md — Session Handover

_Updated: 2026-04-07_

---

## Current Status

**B-1〜B-4 implemented and deployed.** Site is live and CI/CD is working.

### What works
- Full React + Vite + Tailwind project scaffold
- All pages: Home, Services, Contact, ErrorDemo, MenuLunch, MenuDinner, MenuDrinks
- Shared Header (with hamburger menu + hover dropdown) and Footer
- GitHub Actions deploy workflow (push to main → GitHub Pages) ✅ confirmed working
- All Metsuke ARIA requirements in place

### Recent changes (2026-04-07)
- **B-1**: Header dropdown nav for "メニュー紹介" (hover on PC, flat on mobile), aria-expanded via JS state
- **B-2**: `Services.jsx` — new "ご来店のご案内" accordion using `max-height: 0→500px` CSS transition (inline style, no display:none). Existing Tailwind-based accordion retained.
- **B-3**: `Home.jsx` — "本日のおすすめ" section rendered via `useEffect + setTimeout(1500)`, absent from DOM until 1.5s after mount
- **B-4**: `Footer.jsx` expanded with 3 link sections (10+ nav links total)
- New pages: `MenuLunch.jsx`, `MenuDinner.jsx`, `MenuDrinks.jsx`
- `App.jsx` updated with routes `/menu/lunch`, `/menu/dinner`, `/menu/drinks`

---

## Routes

| URL hash | Page |
|----------|------|
| `/#/` | Home |
| `/#/services` | Services / Menu |
| `/#/contact` | Contact |
| `/#/error-demo` | Error Demo |
| `/#/menu/lunch` | ランチメニュー |
| `/#/menu/dinner` | ディナーメニュー |
| `/#/menu/drinks` | ドリンクメニュー |

---

## CI/CD Notes

- `npm ci` → `npm install` (no package-lock.json in repo)
- GitHub Actions: `actions/checkout@v4`, `actions/setup-node@v4`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`
- Node.js 20 deprecation warning exists but does not affect builds (deadline: Sept 2026)

---

## Next Steps

- None defined. Awaiting next instructions.

---

## Known Issues / Open Questions

- No `package-lock.json` in repo (intentional for now — demo site, no prod users)
- Node.js 20 deprecation warning in Actions (non-blocking until Sept 2026)
