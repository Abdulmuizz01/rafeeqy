import { useState } from 'react'
import { Search } from 'lucide-react'

const NAMES_OF_ALLAH = [
  { number: 1, arabic: 'الرحمن', transliteration: 'Ar-Rahman', english: 'The Most Merciful', benefit: 'Compassion and mercy in all affairs' },
  { number: 2, arabic: 'الرحيم', transliteration: 'Ar-Rahim', english: 'The Most Kind', benefit: 'Gentle and tender care' },
  { number: 3, arabic: 'الملك', transliteration: 'Al-Malik', english: 'The King', benefit: 'Sovereignty and true authority' },
  { number: 4, arabic: 'القدوس', transliteration: 'Al-Quddus', english: 'The Most Holy', benefit: 'Purity and sanctity' },
  { number: 5, arabic: 'السلام', transliteration: 'As-Salam', english: 'The Source of Peace', benefit: 'Inner peace and security' },
  { number: 6, arabic: 'المؤمن', transliteration: 'Al-Mu\'min', english: 'The Guardian of Faith', benefit: 'Belief and conviction' },
  { number: 7, arabic: 'العزيز', transliteration: 'Al-Aziz', english: 'The Mighty', benefit: 'Strength and honor' },
  { number: 8, arabic: 'الجبار', transliteration: 'Al-Jabbar', english: 'The Compeller', benefit: 'Correction and reform' },
  { number: 9, arabic: 'المتكبر', transliteration: 'Al-Mutakabbir', english: 'The Majestic', benefit: 'Overwhelming greatness' },
  { number: 10, arabic: 'الخالق', transliteration: 'Al-Khaliq', english: 'The Creator', benefit: 'Innovation and creation' },
  { number: 11, arabic: 'البارئ', transliteration: 'Al-Bari', english: 'The Inventor', benefit: 'Fashioning with purpose' },
  { number: 12, arabic: 'المصور', transliteration: 'Al-Musawwir', english: 'The Fashioner', benefit: 'Beauty in all forms' },
  { number: 13, arabic: 'الغفار', transliteration: 'Al-Ghaffar', english: 'The Forgiving', benefit: 'Forgiveness of sins' },
  { number: 14, arabic: 'القهار', transliteration: 'Al-Qahhar', english: 'The Subduer', benefit: 'Victory over challenges' },
  { number: 15, arabic: 'الوهاب', transliteration: 'Al-Wahhab', english: 'The Bestower', benefit: 'Generosity and giving' },
  { number: 16, arabic: 'الرزاق', transliteration: 'Ar-Razzaq', english: 'The Provider', benefit: 'Provision and sustenance' },
  { number: 17, arabic: 'الفتاح', transliteration: 'Al-Fattah', english: 'The Judge', benefit: 'Opening doors of success' },
  { number: 18, arabic: 'العليم', transliteration: 'Al-Alim', english: 'The All-Knowing', benefit: 'Knowledge and wisdom' },
  { number: 19, arabic: 'القابض', transliteration: 'Al-Qabid', english: 'The Constrictor', benefit: 'Control and contraction' },
  { number: 20, arabic: 'الباسط', transliteration: 'Al-Basit', english: 'The Expander', benefit: 'Expansion and abundance' },
  { number: 21, arabic: 'الخافض', transliteration: 'Al-Khafid', english: 'The Reducer', benefit: 'Humility and lowering' },
  { number: 22, arabic: 'الرافع', transliteration: 'Ar-Rafi', english: 'The Exalter', benefit: 'Elevation and honor' },
  { number: 23, arabic: 'المعز', transliteration: 'Al-Muizz', english: 'The Bestower of Honor', benefit: 'Giving honor' },
  { number: 24, arabic: 'المذل', transliteration: 'Al-Mudill', english: 'The Humiliator', benefit: 'Humiliation of the unjust' },
  { number: 25, arabic: 'السميع', transliteration: 'As-Sami', english: 'The All-Hearing', benefit: 'Listening to all prayers' },
  { number: 26, arabic: 'البصير', transliteration: 'Al-Basir', english: 'The All-Seeing', benefit: 'Perfect sight and vision' },
  { number: 27, arabic: 'الحكم', transliteration: 'Al-Hakam', english: 'The Arbiter', benefit: 'Just judgment and decision' },
  { number: 28, arabic: 'العدل', transliteration: 'Al-Adl', english: 'The Just', benefit: 'Justice in all matters' },
  { number: 29, arabic: 'اللطيف', transliteration: 'Al-Latif', english: 'The Subtle', benefit: 'Gentle subtlety' },
  { number: 30, arabic: 'الخبير', transliteration: 'Al-Khabir', english: 'The All-Aware', benefit: 'Complete knowledge' },
  { number: 31, arabic: 'الحليم', transliteration: 'Al-Halim', english: 'The Forbearing', benefit: 'Patience and clemency' },
  { number: 32, arabic: 'العظيم', transliteration: 'Al-Azim', english: 'The Tremendous', benefit: 'Greatness beyond measure' },
  { number: 33, arabic: 'الغفور', transliteration: 'Al-Ghafur', english: 'The Forgiving', benefit: 'Pardoning all sins' },
  { number: 34, arabic: 'الشكور', transliteration: 'Ash-Shakur', english: 'The Appreciative', benefit: 'Rewarding gratitude' },
  { number: 35, arabic: 'العلي', transliteration: 'Al-Ali', english: 'The Most High', benefit: 'Elevation and supremacy' },
  { number: 36, arabic: 'الكبير', transliteration: 'Al-Kabir', english: 'The Great', benefit: 'Magnificence and greatness' },
  { number: 37, arabic: 'الحفيظ', transliteration: 'Al-Hafiz', english: 'The Preserver', benefit: 'Protection and preservation' },
  { number: 38, arabic: 'المقيت', transliteration: 'Al-Muqit', english: 'The Nourisher', benefit: 'Strength and sustenance' },
  { number: 39, arabic: 'الحسيب', transliteration: 'Al-Hasib', english: 'The Reckoner', benefit: 'Accountability and sufficiency' },
  { number: 40, arabic: 'الجليل', transliteration: 'Al-Jalil', english: 'The Majestic', benefit: 'Magnificent majesty' },
  { number: 41, arabic: 'الكريم', transliteration: 'Al-Karim', english: 'The Generous', benefit: 'Nobility and generosity' },
  { number: 42, arabic: 'الرقيب', transliteration: 'Ar-Raqib', english: 'The Watchful', benefit: 'Vigilant oversight' },
  { number: 43, arabic: 'المجيب', transliteration: 'Al-Mujib', english: 'The Responder', benefit: 'Answering prayers' },
  { number: 44, arabic: 'الواسع', transliteration: 'Al-Wasi', english: 'The All-Encompassing', benefit: 'Vastness and abundance' },
  { number: 45, arabic: 'الحكيم', transliteration: 'Al-Hakim', english: 'The All-Wise', benefit: 'Infinite wisdom' },
  { number: 46, arabic: 'الودود', transliteration: 'Al-Wadud', english: 'The Loving', benefit: 'Affection and love' },
  { number: 47, arabic: 'المجيد', transliteration: 'Al-Majid', english: 'The Glorious', benefit: 'Glory and splendor' },
  { number: 48, arabic: 'الباعث', transliteration: 'Al-Baith', english: 'The Resurrector', benefit: 'Awakening and raising' },
  { number: 49, arabic: 'الشهيد', transliteration: 'Ash-Shahid', english: 'The Witness', benefit: 'Testimony and witness' },
  { number: 50, arabic: 'الحق', transliteration: 'Al-Haq', english: 'The Truth', benefit: 'Truth and reality' },
  { number: 51, arabic: 'الوكيل', transliteration: 'Al-Wakil', english: 'The Trustee', benefit: 'Trust and reliance' },
  { number: 52, arabic: 'القوي', transliteration: 'Al-Qawi', english: 'The Strong', benefit: 'Strength and power' },
  { number: 53, arabic: 'المتين', transliteration: 'Al-Matin', english: 'The Firm', benefit: 'Firmness and solidity' },
  { number: 54, arabic: 'الولي', transliteration: 'Al-Wali', english: 'The Protector', benefit: 'Protection and guardianship' },
  { number: 55, arabic: 'الحميد', transliteration: 'Al-Hamid', english: 'The Praised', benefit: 'Praise and commendation' },
  { number: 56, arabic: 'المحصي', transliteration: 'Al-Muhsi', english: 'The Counter', benefit: 'Counting and recording' },
  { number: 57, arabic: 'المبدئ', transliteration: 'Al-Mubdi', english: 'The Originator', benefit: 'Creation from nothing' },
  { number: 58, arabic: 'المعيد', transliteration: 'Al-Mueed', english: 'The Restorer', benefit: 'Restoration and renewal' },
  { number: 59, arabic: 'المحيي', transliteration: 'Al-Muhyi', english: 'The Giver of Life', benefit: 'Life and vivification' },
  { number: 60, arabic: 'المميت', transliteration: 'Al-Mumit', english: 'The Giver of Death', benefit: 'Death and ending' },
  { number: 61, arabic: 'الحي', transliteration: 'Al-Hayy', english: 'The Living', benefit: 'Eternal life' },
  { number: 62, arabic: 'القيوم', transliteration: 'Al-Qayyum', english: 'The Self-Sustaining', benefit: 'Self-sustenance' },
  { number: 63, arabic: 'الواجد', transliteration: 'Al-Wajid', english: 'The Finder', benefit: 'Finding and discovery' },
  { number: 64, arabic: 'الماجد', transliteration: 'Al-Majid', english: 'The Glorious', benefit: 'Nobility and honor' },
  { number: 65, arabic: 'الواحد', transliteration: 'Al-Wahid', english: 'The Unique', benefit: 'Oneness and uniqueness' },
  { number: 66, arabic: 'الاحد', transliteration: 'Al-Ahad', english: 'The One', benefit: 'Unity and singularity' },
  { number: 67, arabic: 'الصمد', transliteration: 'As-Samad', english: 'The Eternal', benefit: 'Dependence upon Allah' },
  { number: 68, arabic: 'القادر', transliteration: 'Al-Qadir', english: 'The All-Powerful', benefit: 'Capability and power' },
  { number: 69, arabic: 'المقتدر', transliteration: 'Al-Muqtadir', english: 'The Powerful', benefit: 'Mighty power' },
  { number: 70, arabic: 'المقدم', transliteration: 'Al-Muqaddim', english: 'The Expediter', benefit: 'Advancement and promotion' },
  { number: 71, arabic: 'المؤخر', transliteration: 'Al-Mu\'akhkhir', english: 'The Delayer', benefit: 'Delay and postponement' },
  { number: 72, arabic: 'الأول', transliteration: 'Al-Awwal', english: 'The First', benefit: 'Before all things' },
  { number: 73, arabic: 'الآخر', transliteration: 'Al-Akhir', english: 'The Last', benefit: 'After all things' },
  { number: 74, arabic: 'الظاهر', transliteration: 'Az-Zahir', english: 'The Manifest', benefit: 'External manifestation' },
  { number: 75, arabic: 'الباطن', transliteration: 'Al-Batin', english: 'The Hidden', benefit: 'Inner knowledge' },
  { number: 76, arabic: 'الولي', transliteration: 'Al-Wali', english: 'The Governor', benefit: 'Guardianship and alliance' },
  { number: 77, arabic: 'المتعالي', transliteration: 'Al-Mutaali', english: 'The Most Exalted', benefit: 'Supreme exaltation' },
  { number: 78, arabic: 'البر', transliteration: 'Al-Barr', english: 'The Source of Goodness', benefit: 'Righteousness and virtue' },
  { number: 79, arabic: 'التواب', transliteration: 'At-Tawwab', english: 'The Ever-Returning', benefit: 'Acceptance of repentance' },
  { number: 80, arabic: 'المنتقم', transliteration: 'Al-Muntaqim', english: 'The Avenger', benefit: 'Punishment of oppressors' },
  { number: 81, arabic: 'العفو', transliteration: 'Al-Afu', english: 'The Pardoner', benefit: 'Pardoning and overlooking' },
  { number: 82, arabic: 'الرؤوف', transliteration: 'Ar-Rauf', english: 'The Compassionate', benefit: 'Compassionate concern' },
  { number: 83, arabic: 'مالك الملك', transliteration: 'Malik-ul-Mulk', english: 'The Master of the Kingdom', benefit: 'Sovereignty over all' },
  { number: 84, arabic: 'ذو الجلال والإكرام', transliteration: 'Dhul-Jalal wa-l-Ikram', english: 'The Lord of Majesty and Honor', benefit: 'Divine honor and glory' },
  { number: 85, arabic: 'المقسط', transliteration: 'Al-Muqsit', english: 'The Equitable', benefit: 'Fair division and justice' },
  { number: 86, arabic: 'الجامع', transliteration: 'Al-Jami', english: 'The Gatherer', benefit: 'Unity and gathering' },
  { number: 87, arabic: 'الغني', transliteration: 'Al-Ghani', english: 'The Rich', benefit: 'Self-sufficiency' },
  { number: 88, arabic: 'المغني', transliteration: 'Al-Mughni', english: 'The Enricher', benefit: 'Giving richness' },
  { number: 89, arabic: 'المانع', transliteration: 'Al-Mani', english: 'The Withholder', benefit: 'Protection from harm' },
  { number: 90, arabic: 'الضار', transliteration: 'Ad-Darr', english: 'The Distresser', benefit: 'Causer of harm for wisdom' },
  { number: 91, arabic: 'النافع', transliteration: 'An-Nafi', english: 'The Benefiter', benefit: 'Bestower of benefit' },
  { number: 92, arabic: 'النور', transliteration: 'An-Nur', english: 'The Light', benefit: 'Illumination and guidance' },
  { number: 93, arabic: 'الهادي', transliteration: 'Al-Hadi', english: 'The Guide', benefit: 'Guidance and direction' },
  { number: 94, arabic: 'البديع', transliteration: 'Al-Badi', english: 'The Originator', benefit: 'Unique creation' },
  { number: 95, arabic: 'الباقي', transliteration: 'Al-Baqi', english: 'The Eternal', benefit: 'Permanence and eternity' },
  { number: 96, arabic: 'الوارث', transliteration: 'Al-Warith', english: 'The Inheritor', benefit: 'Inheritance of all' },
  { number: 97, arabic: 'الرشيد', transliteration: 'Ar-Rashid', english: 'The Guide to the Right Path', benefit: 'Righteous guidance' },
  { number: 98, arabic: 'الصبور', transliteration: 'As-Sabur', english: 'The Patient', benefit: 'Patience and endurance' },
  { number: 99, arabic: 'التواب', transliteration: 'Al-Tawwab', english: 'The Ever-Returning to Mercy', benefit: 'Eternal acceptance of repentance' },
]

export default function NamesOfAllah() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedName, setSelectedName] = useState(null)

  const filteredNames = NAMES_OF_ALLAH.filter(
    name =>
      name.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.arabic.includes(searchTerm)
  )

  return (
    <div className="py-6 space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">✨ The 99 Names of Allah (Asmaul Husna)</h2>
        
        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by English name, transliteration, or Arabic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-islamic-600"
          />
        </div>

        {/* Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredNames.map((name) => (
            <button
              key={name.number}
              onClick={() => setSelectedName(selectedName?.number === name.number ? null : name)}
              className={`p-4 rounded-lg text-left transition-all border-2 ${
                selectedName?.number === name.number
                  ? 'border-islamic-600 bg-islamic-50 dark:bg-islamic-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-islamic-600 bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl font-bold text-islamic-600 dark:text-blue-400">#{name.number}</span>
                <span className="text-2xl font-bold text-right">{name.arabic}</span>
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">{name.transliteration}</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">{name.english}</p>
            </button>
          ))}
        </div>

        {/* Selected Name Details */}
        {selectedName && (
          <div className="mt-8 bg-gradient-to-r from-islamic-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border-l-4 border-islamic-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Arabic Name</p>
                <p className="text-4xl font-bold mt-2 text-islamic-700 dark:text-blue-300">{selectedName.arabic}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Transliteration</p>
                <p className="text-3xl font-bold mt-2 text-gray-800 dark:text-gray-200">{selectedName.transliteration}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">English Meaning</p>
                <p className="text-2xl font-bold mt-2 text-gray-800 dark:text-gray-200">{selectedName.english}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Benefit & Application</p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">{selectedName.benefit}</p>
            </div>
          </div>
        )}

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          💡 Click on any name to see detailed information. The Prophet Muhammad (ﷺ) said: "Allah has 99 Names (Attributes); whoever learns them will enter Paradise."
        </p>
      </div>
    </div>
  )
}
