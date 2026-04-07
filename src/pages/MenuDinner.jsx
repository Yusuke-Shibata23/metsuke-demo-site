const items = [
  { name: '黒毛和牛ステーキ定食', price: '¥1,980', img: 'https://placehold.co/300x200?text=ステーキ定食' },
  { name: '海鮮丼（特上）', price: '¥1,480', img: 'https://placehold.co/300x200?text=海鮮丼' },
  { name: '鶏の照り焼き定食', price: '¥980', img: 'https://placehold.co/300x200?text=照り焼き定食' },
  { name: 'ディナー天ぷら盛り合わせ', price: '¥1,200', img: 'https://placehold.co/300x200?text=天ぷら盛り合わせ' },
]

export default function MenuDinner() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-800 mb-2">ディナーメニュー</h1>
      <p className="text-gray-500 mb-8">17:00〜22:00 のディナータイムメニューです。</p>
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
