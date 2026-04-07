import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const featuredMenus = [
  { name: '鶏の唐揚げ定食', price: '¥850', img: 'https://placehold.co/400x300?text=唐揚げ定食' },
  { name: '牛丼（並）', price: '¥680', img: 'https://placehold.co/400x300?text=牛丼' },
  { name: '野菜炒め定食', price: '¥780', img: 'https://placehold.co/400x300?text=野菜炒め定食' },
  { name: 'サーモン丼', price: '¥920', img: 'https://placehold.co/400x300?text=サーモン丼' },
]

const stores = [
  {
    name: 'こまち食堂 渋谷店',
    address: '東京都渋谷区道玄坂1-2-3 こまちビル1F',
    hours: '11:00〜22:00（LO 21:30）',
  },
  {
    name: 'こまち食堂 新宿店',
    address: '東京都新宿区西新宿4-5-6 こまちタワー2F',
    hours: '10:30〜22:00（LO 21:30）',
  },
]

export default function Home() {
  const [showSpecial, setShowSpecial] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowSpecial(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative bg-amber-50">
        <img
          src="https://placehold.co/1200x480?text=こまち食堂"
          alt="こまち食堂 ヒーロー"
          className="w-full object-cover h-64 md:h-96"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow">こまち食堂</h1>
          <p className="text-lg md:text-2xl font-medium drop-shadow">
            毎日食べたい、ちゃんとしたごはん。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
            >
              メニューを見る
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-amber-50 text-amber-800 px-6 py-2.5 rounded-full font-semibold transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* 本日のおすすめ（JS遅延描画） */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-amber-800 mb-4 text-center">本日のおすすめ</h2>
        {showSpecial && (
          <div className="bg-amber-50 rounded-xl p-6 text-center shadow">
            <p className="text-lg font-semibold text-gray-800">本日のおすすめ：季節の天ぷら定食</p>
            <p className="text-amber-700 font-bold text-xl mt-2">¥980</p>
            <p className="text-gray-500 text-sm mt-2">旬の野菜を使った天ぷら盛り合わせ。数量限定です。</p>
            <Link
              to="/menu/lunch"
              className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              ランチメニューを見る
            </Link>
          </div>
        )}
      </section>

      {/* Featured menus */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">おすすめメニュー</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredMenus.map((item) => (
            <div key={item.name} className="rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow bg-white">
              <img src={item.img} alt={item.name} className="w-full h-36 object-cover" />
              <div className="p-3">
                <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                <p className="text-amber-700 font-bold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            メニューを見る
          </Link>
        </div>
      </section>

      {/* Store info */}
      <section className="bg-amber-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">店舗情報</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {stores.map((store) => (
              <div key={store.name} className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{store.name}</h3>
                <p className="text-gray-600 text-sm mb-1">📍 {store.address}</p>
                <p className="text-gray-600 text-sm">🕐 {store.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
