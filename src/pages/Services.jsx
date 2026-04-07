import { useState } from 'react'

const menuCategories = [
  {
    category: '定食',
    items: [
      { name: '鶏の唐揚げ定食', price: '¥850', img: 'https://placehold.co/300x200?text=唐揚げ定食' },
      { name: '焼き魚定食', price: '¥900', img: 'https://placehold.co/300x200?text=焼き魚定食' },
      { name: '野菜炒め定食', price: '¥780', img: 'https://placehold.co/300x200?text=野菜炒め定食' },
    ],
  },
  {
    category: '丼もの',
    items: [
      { name: '牛丼（並）', price: '¥680', img: 'https://placehold.co/300x200?text=牛丼' },
      { name: 'サーモン丼', price: '¥920', img: 'https://placehold.co/300x200?text=サーモン丼' },
      { name: '親子丼', price: '¥780', img: 'https://placehold.co/300x200?text=親子丼' },
    ],
  },
  {
    category: 'セットドリンク',
    items: [
      { name: 'アイスコーヒー', price: '¥150', img: 'https://placehold.co/300x200?text=コーヒー' },
      { name: '緑茶（ホット／アイス）', price: '¥100', img: 'https://placehold.co/300x200?text=緑茶' },
      { name: 'オレンジジュース', price: '¥180', img: 'https://placehold.co/300x200?text=OJ' },
    ],
  },
]

const faqs = [
  {
    question: 'アレルギー情報について',
    answer: 'アレルギー情報の詳細はお店スタッフまでお問い合わせください。',
  },
  {
    question: 'テイクアウトはできますか？',
    answer: 'はい、全メニューテイクアウト対応しております。店頭にてお申し付けください。',
  },
  {
    question: 'カロリー表示はありますか？',
    answer: '店内メニュー表および公式サイトにカロリー情報を掲載しております。',
  },
]

// display:none ベースの既存アコーディオン
function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-amber-200 last:border-0">
      <button
        role="button"
        className="w-full text-left py-4 px-2 font-medium text-gray-800 flex justify-between items-center hover:text-amber-700 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {question}
        <span className="text-amber-600 text-lg">{open ? '▲' : '▼'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        <p className="px-2 text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  )
}

const faqsAnimated = [
  {
    question: '予約はできますか？',
    answer: 'お電話またはお問い合わせフォームよりご予約いただけます。お席の確保のため、前日までにご連絡いただけますと幸いです。',
  },
  {
    question: '駐車場はありますか？',
    answer: '渋谷店・新宿店ともに専用駐車場はございません。近隣のコインパーキングをご利用ください。',
  },
  {
    question: 'お子様連れでも入れますか？',
    answer: 'はい、ぜひどうぞ。お子様用のお椅子もご用意しております。お気軽にスタッフへお申し付けください。',
  },
  {
    question: 'クレジットカードは使えますか？',
    answer: 'Visa、Mastercard、JCB、American Expressがご利用いただけます。電子マネー（交通系IC）にも対応しております。',
  },
]

// max-height CSS transition ベースのアコーディオン（display:none を使わない）
function AnimatedAccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-amber-200 last:border-0">
      <button
        role="button"
        className="w-full text-left py-4 px-2 font-medium text-gray-800 flex justify-between items-center hover:text-amber-700 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {question}
        <span className="text-amber-600 text-lg">{open ? '▲' : '▼'}</span>
      </button>
      <div
        style={{
          maxHeight: open ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 300ms ease',
        }}
      >
        <p className="px-2 pb-4 text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-800 mb-2 text-center">メニュー一覧</h1>
      <p className="text-center text-gray-500 mb-10">こまち食堂のメニュー</p>

      {menuCategories.map((cat) => (
        <section key={cat.category} className="mb-12">
          <h2 className="text-xl font-bold text-amber-700 border-l-4 border-amber-500 pl-3 mb-5">
            {cat.category}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow bg-white"
              >
                <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                  <p className="text-amber-700 font-bold mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 既存FAQ（Tailwind max-height切り替え版） */}
      <section className="bg-amber-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-amber-800 mb-4">よくあるご質問</h2>
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      {/* 追加FAQ（max-height CSS transition版） */}
      <section className="bg-white border border-amber-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-amber-800 mb-1">ご来店のご案内</h2>
        <p className="text-gray-500 text-sm mb-4">ご来店前にご確認ください。</p>
        {faqsAnimated.map((faq) => (
          <AnimatedAccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </div>
  )
}
