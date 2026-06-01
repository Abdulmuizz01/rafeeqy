import { Heart } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-islamic-600 to-islamic-700 dark:from-gray-800 dark:to-gray-900 text-white py-8 shadow-lg" role="banner">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h1 className="text-4xl font-bold">🕌 Rafeeqy</h1>
        </div>
        <p className="text-blue-100 text-lg"> Alhamdulillah - All Praises and Adorations are Due to Almighty Allah</p>
        <p className="text-sm text-blue-100 mt-2" aria-label="Website features">Prayer Times • Quran • Hadith • Islamic Knowledge</p>
      </div>
    </header>
  )
}
