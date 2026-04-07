import { Link } from 'react-router-dom'

const footerSections = [
  {
    heading: 'メニュー',
    links: [
      { label: 'メニュー一覧', to: '/services' },
      { label: 'ランチメニュー', to: '/menu/lunch' },
      { label: 'ディナーメニュー', to: '/menu/dinner' },
      { label: 'ドリンクメニュー', to: '/menu/drinks' },
    ],
  },
  {
    heading: 'ご利用案内',
    links: [
      { label: '営業時間', to: '/' },
      { label: 'アクセス', to: '/' },
      { label: 'お問い合わせ', to: '/contact' },
    ],
  },
  {
    heading: '会社情報',
    links: [
      { label: 'プライバシーポリシー', to: '/' },
      { label: '採用情報', to: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 text-sm py-10 mt-auto">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-base text-white mb-2">こまち食堂</p>
            <p className="text-amber-300 text-xs leading-relaxed">
              毎日食べたい、<br />ちゃんとしたごはん。
            </p>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <p className="font-semibold text-white mb-2">{section.heading}</p>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-amber-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-amber-800 pt-4 text-center text-amber-400 text-xs">
          © 2025 こまち食堂 All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
