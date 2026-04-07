const items = [
  { name: 'アイスコーヒー', price: '¥150', img: 'https://placehold.co/300x200?text=アイスコーヒー' },
  { name: 'ホットコーヒー', price: '¥150', img: 'https://placehold.co/300x200?text=ホットコーヒー' },
  { name: '緑茶（ホット／アイス）', price: '¥100', img: 'https://placehold.co/300x200?text=緑茶' },
  { name: 'オレンジジュース', price: '¥180', img: 'https://placehold.co/300x200?text=OJ' },
  { name: 'ウーロン茶', price: '¥100', img: 'https://placehold.co/300x200?text=ウーロン茶' },
  { name: '牛乳', price: '¥120', img: 'https://placehold.co/300x200?text=牛乳' },
]

export default function MenuDrinks() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-800 mb-2">ドリンクメニュー</h1>
      <p className="text-gray-500 mb-8">食事とご一緒にどうぞ。セット注文で¥50引き。</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
