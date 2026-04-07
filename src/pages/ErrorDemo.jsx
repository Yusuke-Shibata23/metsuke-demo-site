import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ErrorDemo() {
  useEffect(() => {
    // Intentional JS error for Metsuke console_errors check demo
    document.getElementById('nonexistent').classList.add('active')
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">エラーデモページ</h1>
      <p className="text-gray-600 mb-8">
        このページはデモ用のエラーを含んでいます。<br />
        コンソールにJavaScriptエラーが記録されることをMetsukeで確認できます。
      </p>
      <Link
        to="/"
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
      >
        トップへ戻る
      </Link>
    </div>
  )
}
