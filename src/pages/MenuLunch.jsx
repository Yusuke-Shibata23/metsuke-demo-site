const items = [
  { name: '季節の天ぷら定食', price: '¥980', img: 'https://placehold.co/300x200?text=天ぷら定食' },
  { name: 'ランチ焼き魚定食', price: '¥850', img: 'https://placehold.co/300x200?text=焼き魚定食' },
  { name: '日替わり定食', price: '¥780', img: 'https://placehold.co/300x200?text=日替わり定食' },
  { name: 'ランチ牛丼セット', price: '¥720', img: 'https://placehold.co/300x200?text=牛丼セット' },
]

export default function MenuLunch() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-800 mb-2">ランチメニュー</h1>
      <p className="text-gray-500 mb-8">11:00〜15:00 限定のランチメニューです。</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.name} className="rounded-lg overflow-hidden shadow bg-white hover:shadow-md transition-shadow">
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-3">
              <p className="font-semibold text-sm text-gray-800">{item.name}</p>
              <p className="text-amber-700 font-bold mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
