import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import Header from './components/Header'
import PrayerTimes from './components/PrayerTimes'
import NamesOfAllah from './components/NamesOfAllah'
import QuranVerses from './components/QuranVerses'
import Hadith from './components/Hadith'
import Qunut from './components/Qunut'
import ShortDua from './components/ShortDua'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [activeTab, setActiveTab] = useState('prayer-times')

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const tabs = [
    { id: 'prayer-times', label: ' Prayer Times', arabic: 'أوقات الصلاة', component: PrayerTimes },
    { id: 'quran', label: ' Quran Verses', arabic: 'آيات من القرآن', component: QuranVerses },
    { id: 'names', label: ' 99 Names', arabic: 'الأسماء الحسنى', component: NamesOfAllah },
    { id: 'hadith', label: ' Hadith Nawawi', arabic: 'الأربعون النووية', component: Hadith },
    { id: 'qunut', label: ' Qunut', arabic: 'دعاء القنوت', component: Qunut },
    { id: 'dua', label: ' Short Duas', arabic: 'أدعية قصيرة', component: ShortDua },
  ]

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Header />
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-2 focus:ring-islamic-600 focus:outline-none transition-colors"
          aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
          title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-500" aria-hidden="true" />
          ) : (
            <Moon size={20} className="text-gray-700" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 bg-islamic-600 dark:bg-gray-800 shadow-lg z-40 overflow-x-auto" aria-label="Main navigation">
        <div className="flex justify-center flex-wrap gap-2 p-3 max-w-7xl mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none group ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-900 text-islamic-600 dark:text-blue-400'
                  : 'text-white hover:bg-islamic-700 dark:hover:bg-gray-700'
              }`}
              title={tab.arabic}
            >
              <span className="group-hover:hidden">{tab.label}</span>
              <span className="hidden group-hover:inline text-lg" dir="rtl">{tab.arabic}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4" role="main">
        {ActiveComponent && (
          <div id={`panel-${activeTab}`} role="tabpanel">
            <ActiveComponent />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 mt-12 py-8 text-center text-gray-600 dark:text-gray-400" role="contentinfo">
        <p className="mb-2">🕌 Rafeeqy - Your Islamic Companion</p>
        <p className="text-sm">May Allah make our hearts steadfast upon Islam </p>
      </footer>
    </div>
  )
}

export default App
