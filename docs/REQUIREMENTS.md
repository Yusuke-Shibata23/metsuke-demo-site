# REQUIREMENTS.md

## Site Identity

- **Name**: こまち食堂
- **Concept**: National casual dining chain — teishoku (set meals) and donburi (rice bowls)
- **Tagline**: 「毎日食べたい、ちゃんとしたごはん。」
- **Target audience**: Office workers and families for lunch/dinner

---

## Global Requirements (All Pages)

### DOM Structure
Every page must render `<header>`, `<nav>`, `<main>`, `<footer>` tags.

### Navigation
- Desktop (≥768px): horizontal link row in header
- Mobile (<768px): hamburger button toggles nav visibility
- Hamburger: `role="button" aria-label="メニュー"`
- Nav links: Top / Menu / Contact

### Footer
- Must contain the text「こまち食堂」
- Must contain copyright notice: `© 2025 こまち食堂`

---

## Pages

### Home (`/#/`)

**Required texts (Metsuke `elements_exist`)**
- 「こまち食堂」
- 「毎日食べたい、ちゃんとしたごはん。」
- 「メニューを見る」(links to `/#/services`)
- 「お問い合わせ」(links to `/#/contact`)

**Sections**
1. Hero — placeholder image + tagline + CTA buttons
2. Featured menus — 4 items with image, name, price
3. Store info — 2 fictional locations with address and hours

---

### Services (`/#/services`)

**Required texts**
- 「メニュー一覧」
- 「こまち食堂のメニュー」
- Category names:「定食」「丼もの」「セットドリンク」

**Sections**
1. Menu grid — 3 categories × 3 items (image, name, price)
2. FAQ accordion — minimum 3 items, using `role="button"`:
   - 「アレルギー情報について」→ answer: 「アレルギー情報の詳細はお店スタッフまでお問い合わせください。」
   - 「テイクアウトはできますか？」
   - 「カロリー表示はありますか？」

---

### Contact (`/#/contact`)

**Required texts**
- 「お問い合わせ」
- 「送信する」

**Form fields** (submit does nothing — static page)
```
<label for="name">   + <input type="text"  id="name">
<label for="email">  + <input type="email" id="email">
<label for="message">+ <textarea           id="message">
<button type="submit">送信する</button>
```

---

### Error Demo (`/#/error-demo`)

**Purpose**: Demonstrate Metsuke `console_errors` detection.

**Intentional error**:
```js
document.getElementById('nonexistent').classList.add('active')
// → TypeError: Cannot read properties of null
```

**Required content**
- 「このページはデモ用のエラーを含んでいます」
- Link back to top

---

## Metsuke Scenario Coverage

| Scenario | Path | Checks |
|----------|------|--------|
| トップページ表示確認 | `/#/` | http_status, console_errors, elements_exist |
| ハンバーガーメニュー開閉 | `/#/` | element_toggle |
| メニューページ・アコーディオン確認 | `/#/services` | http_status, console_errors, elements_exist, element_toggle |
| エラーデモページ | `/#/error-demo` | http_status, console_errors |
