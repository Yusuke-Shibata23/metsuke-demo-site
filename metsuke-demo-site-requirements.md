# Metsuke デモサイト 実装要件

## 設定

**架空の飲食チェーン「こまち食堂」**
- 全国展開の定食・丼チェーン（架空）
- キャッチコピー例：「毎日食べたい、ちゃんとしたごはん。」
- ターゲット：ランチ・夕食のサラリーマン・ファミリー層

---

## 技術スタック

- **純粋なHTML/CSS/JS**（フレームワーク不使用）
- TailwindCDN または プレーンCSS（どちらでも可）
- 画像はすべて `https://placehold.co/幅x高さ` のプレースホルダ
- アイコンは絵文字またはSVGインライン（外部CDN可）
- GitHub Pages用静的ファイル一式として出力

---

## ディレクトリ構成

```
metsuke-demo-site/
├── index.html          # トップページ
├── services.html       # メニュー紹介ページ（サービス紹介相当）
├── contact.html        # お問い合わせページ
├── error-demo.html     # 意図的JSエラーページ
├── .nojekyll           # GitHub Pages用（Jekyll無効化）
└── css/
    └── style.css       # 共通スタイル（必要な場合）
```

---

## 全ページ共通要件

### HTML構造（必須）
```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```
この4タグは**全ページ**に含めること。Metsukeの `elements_exist` チェックで使用する。

### ナビゲーション（必須）
- PC幅：横並びリンク
- モバイル幅（768px以下）：ハンバーガーメニューに切り替え
- ハンバーガーボタンのARIA要件（必須）：
  ```html
  <button role="button" aria-label="メニュー">...</button>
  ```
- クリックでナビゲーションリンク一覧が表示/非表示
- ナビに含めるリンク：トップ・メニュー・お問い合わせ

### フッター（必須）
- 「© 2025 こまち食堂」などのコピーライトテキスト
- 「こまち食堂」というテキストが含まれること

---

## ページ別要件

### index.html（トップページ）

**含めるテキスト（Metsukeの `elements_exist` > texts で確認）**
- 「こまち食堂」
- 「毎日食べたい、ちゃんとしたごはん。」
- 「メニューを見る」（services.htmlへのリンク）
- 「お問い合わせ」（contact.htmlへのリンク）

**コンテンツ**
- ヒーローセクション（画像プレースホルダ + キャッチコピー）
- おすすめメニュー3〜4品（画像プレースホルダ + 料理名 + 価格）
- 「メニューを見る」ボタン → services.html へ同タブ遷移
- 店舗情報セクション（架空の住所・営業時間でOK）

---

### services.html（メニュー紹介）

**含めるテキスト**
- 「メニュー一覧」または「こまち食堂のメニュー」
- 各カテゴリ名（例：「定食」「丼もの」「セットドリンク」）

**アコーディオン（必須・Metsukeの `element_toggle` チェック用）**

よくある質問（FAQ）セクションを設け、アコーディオン形式で実装すること。

```html
<!-- ARIA要件（必須） -->
<button role="button">アレルギー情報について</button>
<!-- クリックで回答テキストが表示/非表示 -->
```

最低3問用意すること。例：
- 「アレルギー情報について」
- 「テイクアウトはできますか？」
- 「カロリー表示はありますか？」

各ボタンには `role="button"` とテキストラベルを付与（IDやクラスでの特定は不要）。

---

### contact.html（お問い合わせ）

**含めるテキスト**
- 「お問い合わせ」
- 「送信する」

**フォーム（将来のfillチェック用・動作不要）**
```html
<label for="name">お名前</label>
<input type="text" id="name" name="name">

<label for="email">メールアドレス</label>
<input type="email" id="email" name="email">

<label for="message">お問い合わせ内容</label>
<textarea id="message" name="message"></textarea>

<button type="submit">送信する</button>
```
- 各inputは必ず `<label>` で関連付けること
- submitしても何も起きなくてOK（静的ページ）

---

### error-demo.html（エラーデモページ）

**目的**：Metsukeの `console_errors` チェックが検知できることをデモするページ

**意図的なJSエラーの仕込み（必須）**
```html
<script>
  // 存在しないDOM要素を操作して意図的にエラーを発生させる
  document.getElementById('nonexistent').classList.add('active');
</script>
```

**ページコンテンツ**
- 「このページはデモ用のエラーを含んでいます」という説明テキスト
- トップへ戻るリンク

---

## ARIA・セレクタ設計（最重要）

MetsukeはID・クラス名・CSSセレクタを**一切使わない**設計。
以下の方法だけで要素を特定する：

| 特定方法 | 使用箇所 |
|----------|----------|
| `getByRole('button', { name: 'メニュー' })` | ハンバーガーボタン |
| `getByRole('button', { name: 'アレルギー情報について' })` | アコーディオン |
| `getByText('メニューを見る')` | CTAボタン・リンク |
| タグ名（header/footer/nav/main） | 構造確認 |

**NG例（やってはいけないこと）**
```html
<!-- IDやクラスでの特定を前提とした実装はしない -->
<button id="hamburger-btn">  ← IDがあっても良いが、それに依存しない
<button class="nav-toggle">  ← クラスがあっても良いが、それに依存しない
```

**OK例（こうする）**
```html
<button role="button" aria-label="メニュー">☰</button>
<button role="button">アレルギー情報について</button>
```

---

## 動作確認用 scenarios.json（参考）

実装完了後、Metsukeで以下のシナリオが通ることを確認する想定：

```json
{
  "scenarios": [
    {
      "name": "トップページ表示確認",
      "path": "/",
      "checks": ["http_status", "console_errors", "elements_exist"],
      "elements": {
        "tags": ["header", "footer", "nav", "main"],
        "texts": ["こまち食堂", "毎日食べたい、ちゃんとしたごはん。", "メニューを見る"]
      }
    },
    {
      "name": "ハンバーガーメニュー開閉",
      "path": "/",
      "checks": ["element_toggle"],
      "toggles": [
        {
          "description": "メニューを開く",
          "trigger": { "role": "button", "name": "メニュー" },
          "expect": { "text": "メニューを見る", "visible": true }
        },
        {
          "description": "メニューを閉じる",
          "trigger": { "role": "button", "name": "メニュー" },
          "expect": { "text": "メニューを見る", "visible": false }
        }
      ]
    },
    {
      "name": "メニューページ・アコーディオン確認",
      "path": "/services.html",
      "checks": ["http_status", "console_errors", "elements_exist", "element_toggle"],
      "elements": {
        "tags": ["header", "footer", "nav", "main"],
        "texts": ["メニュー一覧", "アレルギー情報について"]
      },
      "toggles": [
        {
          "description": "FAQ開く",
          "trigger": { "role": "button", "name": "アレルギー情報について" },
          "expect": { "text": "アレルギー情報の詳細はお店スタッフまでお問い合わせください。", "visible": true }
        }
      ]
    },
    {
      "name": "エラーデモページ（コンソールエラー検知）",
      "path": "/error-demo.html",
      "checks": ["http_status", "console_errors"],
      "elements": { "tags": [], "texts": [] }
    }
  ]
}
```

---

## 注意事項

- 外部API依存なし（完全静的）
- 広告・アナリティクスコード不要
- `.nojekyll` ファイルを必ずルートに置くこと
- `services.html` など拡張子付きパスでリンクすること（GitHub Pagesの挙動に合わせる）
