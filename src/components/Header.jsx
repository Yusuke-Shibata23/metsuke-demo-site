import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'トップ', to: '/' },
  { label: 'メニュー', to: '/services' },
  { label: 'お問い合わせ', to: '/contact' },
]

const menuIntroLinks = [
  { label: 'ランチメニュー', to: '/menu/lunch' },
  { label: 'ディナーメニュー', to: '/menu/dinner' },
  { label: 'ドリンクメニュー', to: '/menu/drinks' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-amber-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide hover:opacity-90">
          こまち食堂
        </Link>

        {/* PC nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center" aria-label="グローバルナビゲーション">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-amber-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown: メニュー紹介 */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="hover:text-amber-200 transition-colors cursor-pointer"
            >
              メニュー紹介
            </button>
            <div className="hidden group-hover:block absolute top-full left-0 mt-1 bg-amber-800 rounded shadow-lg py-1 min-w-max z-50">
              {menuIntroLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-2 text-white hover:bg-amber-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Hamburger button */}
        <button
          role="button"
          aria-label="メニュー"
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-300"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`md:hidden bg-amber-800 overflow-hidden transition-all duration-200 ${
          menuOpen ? 'max-h-72' : 'max-h-0'
        }`}
        aria-label="モバイルナビゲーション"
      >
        <ul className="flex flex-col px-4 py-2 gap-3 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block py-1 hover:text-amber-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* メニュー紹介サブリンク（フラット表示） */}
          {menuIntroLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block py-1 pl-4 text-amber-200 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                └ {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
