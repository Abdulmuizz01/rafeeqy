import { useState } from 'react'
import { Copy, Heart } from 'lucide-react'

const SHORT_DUAS = [
  {
    id: 1,
    title: 'Morning Supplication',
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ وَخَيْرَ مَا فِيهِ، وَأَعُوذُ بِكَ مِنْ شَرِّ هَذَا الْيَوْمِ وَشَرِّ مَا فِيهِ.',
    transliteration: 'Asbahna wa asbaha al-mulk lillahi rabb al-\'alamin, Allahumma inni as\'aluk khayra hadha al-yawm wa khayra ma fih, wa a\'udhu bika min sharri hadha al-yawm wa sharri ma fih.',
    translation: 'We have reached the morning and to Allah belongs all praise. O Allah! I ask You for the good of this day and the good that is in it, and I seek refuge in You from the evil of this day and the evil that is in it.',
    occasion: 'Recite every morning',
    reward: 'Protection and blessings for the entire day',
    category: 'Daily Prayers'
  },
  {
    id: 2,
    title: 'Evening Supplication',
    arabic: 'أَمْسَيْنَا وَأَمْسَىٰ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَة وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ هَذِهِ اللَّيْلَة وَشَرِّ مَا فِيهَا.',
    transliteration: 'Amsayna wa amsa al-mulk lillahi rabb al-\'alamin, Allahumma inni as\'aluk khayra hadhi al-laylah wa khayra ma fih, wa a\'udhu bika min sharri hadhi al-laylah wa sharri ma fih.',
    translation: 'We have reached the evening and to Allah belongs all praise. O Allah! I ask You for the good of this night and the good that is in it, and I seek refuge in You from the evil of this night and the evil that is in it.',
    occasion: 'Recite every evening',
    reward: 'Evening protection and peaceful night',
    category: 'Daily Prayers'
  },
  {
    id: 3,
    title: 'Dua Before Sleep',
    arabic: 'اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا',
    transliteration: 'Allahumma biesmek amootu wa ahya',
    translation: 'O Allah! In Your name I die and I live.',
    occasion: 'Before going to sleep',
    reward: 'Peaceful sleep and protection during sleep',
    category: 'Sleep'
  },
  {
    id: 4,
    title: 'Dua Upon Waking',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: 'Alhamdulillah alladi ahyana ba\'da ma amatan wa ilayhi an-nushoor',
    translation: 'All praise is due to Allah who gave us life after death and to Him is the return.',
    occasion: 'Upon waking up',
    reward: 'Gratitude and preparation for the day',
    category: 'Sleep'
  },
  {
    id: 5,
    title: 'Dua for Guidance',
    arabic: 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    transliteration: 'Rabbana ighfir lana dhunubana wa israfana fi amrina wa thabit aqdamana wa ansurna ala al-qawm al-kafireen',
    translation: 'Our Lord! Forgive us our sins and the excesses in our affairs, make our steps firm, and help us against the disbelieving people.',
    occasion: 'For seeking forgiveness and guidance',
    reward: 'Forgiveness, steadfastness, and victory',
    category: 'Seeking Help'
  },
  {
    id: 6,
    title: 'Dua for Patience',
    arabic: 'يَا اللَّهُ يَا رَحْمَانُ يَا رَحِيمُ، أَنْتَ أَنْتَ',
    transliteration: 'Ya Allahumma ya Rahman ya Rahim, anta anta',
    translation: 'O Allah! O Most Merciful, O Most Compassionate, You are You.',
    occasion: 'During difficulty or sadness',
    reward: 'Comfort, patience, and relief from hardship',
    category: 'Difficult Times'
  },
  {
    id: 7,
    title: 'Dua for Forgiveness',
    arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfiru Allah al-azim alladi la ilaha illa huwa al-hayy al-qayyum wa atubu ilayh',
    translation: 'I seek forgiveness from Allah the Great, besides whom there is no deity except Him, the Ever-Living, the Sustainer of existence, and I repent unto Him.',
    occasion: 'Seeking forgiveness for sins',
    reward: 'Acceptance of repentance and forgiveness',
    category: 'Repentance'
  },
  {
    id: 8,
    title: 'Dua for Good Character',
    arabic: 'اللَّهُمَّ حَسِّنْ خُلُقِي وَحَسِّنْ أَخْلَاقِي',
    transliteration: 'Allahumma hassin khluqi wa hassin akhlaqy',
    translation: 'O Allah! Make my character good and make the character of those around me good.',
    occasion: 'For self-improvement',
    reward: 'Beautiful character and good relationships',
    category: 'Personal Development'
  },
  {
    id: 9,
    title: 'Dua for Health',
    arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي',
    transliteration: 'Allahumma aafi ni fi badani, Allahumma aafi ni fi sammi, Allahumma aafi ni fi basari',
    translation: 'O Allah! Grant me wellness in my body. O Allah! Grant me wellness in my hearing. O Allah! Grant me wellness in my sight.',
    occasion: 'Seeking physical health',
    reward: 'Health and wellness of body and senses',
    category: 'Health'
  },
  {
    id: 10,
    title: 'Dua for Knowledge',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',
    transliteration: 'Allahumma inni as\'aluk ilman nafi\'an wa rizqan tayyiban wa \'amalan mutaqabbalan',
    translation: 'O Allah! I ask You for beneficial knowledge, good provision, and accepted deeds.',
    occasion: 'For knowledge and learning',
    reward: 'Beneficial knowledge and accepted works',
    category: 'Education'
  },
  {
    id: 11,
    title: 'Dua for Family',
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    transliteration: 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yunin wa \'jalna lil-muttaqin imam',
    translation: 'Our Lord! Grant us from our spouses and children the comfort of our eyes, and make us leaders for the righteous.',
    occasion: 'For family and children',
    reward: 'Righteous family and blessed household',
    category: 'Family'
  },
  {
    id: 12,
    title: 'Dua for Provision',
    arabic: 'يَا ذَا الطَّوْلِ لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    transliteration: 'Ya dha al-tawl la ilaha illa anta subhanaka inni kuntu min al-dhalimin',
    translation: 'O You of great power, there is no deity except You. Glorified are You. Indeed, I have been of the wrongdoers.',
    occasion: 'During financial difficulty',
    reward: 'Relief from hardship and provision',
    category: 'Needs & Provision'
  }
]

export default function ShortDua() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedDua, setSelectedDua] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  const categories = [...new Set(SHORT_DUAS.map(d => d.category))]

  const filteredDuas = SHORT_DUAS.filter(dua => {
    const matchesSearch = dua.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dua.translation.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || dua.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedId(text)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="py-6 space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Heart className="text-red-500" size={28} fill="currentColor" />
          Short Duas for Daily Life
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Essential Islamic prayers and supplications for various occasions</p>

        {/* Search and Filter */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Search duas by title or translation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-islamic-600"
          />

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filter by Category</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-islamic-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-islamic-200 dark:hover:bg-islamic-800'
                }`}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-islamic-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-islamic-200 dark:hover:bg-islamic-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Duas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {filteredDuas.map(dua => (
            <button
              key={dua.id}
              onClick={() => setSelectedDua(selectedDua?.id === dua.id ? null : dua)}
              className={`p-4 rounded-lg text-left border-2 transition-all ${
                selectedDua?.id === dua.id
                  ? 'border-islamic-600 bg-islamic-50 dark:bg-islamic-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-islamic-600 bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-lg font-semibold text-islamic-600 dark:text-blue-400">{dua.id}.</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                  {dua.category}
                </span>
              </div>
              <p className="font-bold text-gray-800 dark:text-gray-200">{dua.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-2">{dua.translation}</p>
            </button>
          ))}
        </div>

        {filteredDuas.length === 0 && (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">
            <p>No duas found matching your search.</p>
          </div>
        )}

        {/* Selected Dua Detail */}
        {selectedDua && (
          <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border-l-4 border-red-500 space-y-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-300 mb-1">{selectedDua.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Category:</strong> {selectedDua.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedDua(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Arabic */}
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-6">
              <p className="text-right text-xl md:text-2xl leading-loose text-gray-800 dark:text-gray-100 font-semibold">
                {selectedDua.arabic}
              </p>
              <button
                onClick={() => copyToClipboard(selectedDua.arabic)}
                className="mt-3 flex items-center gap-2 px-3 py-2 bg-islamic-600 hover:bg-islamic-700 text-white rounded text-sm font-medium transition-colors"
              >
                <Copy size={14} />
                {copiedId === selectedDua.arabic ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Transliteration */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Transliteration</h4>
              <p className="text-gray-800 dark:text-gray-200 italic text-sm">
                {selectedDua.transliteration}
              </p>
            </div>

            {/* Translation */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Translation</h4>
              <p className="text-gray-800 dark:text-gray-200">
                {selectedDua.translation}
              </p>
            </div>

            {/* When and Reward */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-pink-200 dark:border-gray-600">
              <div className="bg-blue-100/50 dark:bg-blue-900/30 rounded p-3">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 text-sm mb-1">⏰ Occasion</h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm">{selectedDua.occasion}</p>
              </div>
              <div className="bg-green-100/50 dark:bg-green-900/30 rounded p-3">
                <h4 className="font-semibold text-green-900 dark:text-green-300 text-sm mb-1">✨ Reward</h4>
                <p className="text-green-800 dark:text-green-200 text-sm">{selectedDua.reward}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-600 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-3">💡 Tips for Making Dua</h3>
        <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-2">
          <li>• <strong>Cleanliness:</strong> Perform Wudu before making dua</li>
          <li>• <strong>Sincerity:</strong> Make dua with a sincere heart and full conviction</li>
          <li>• <strong>Timing:</strong> The best times are: after prayer, in the last third of the night, on Fridays</li>
          <li>• <strong>Patience:</strong> Don't lose hope; keep making dua and trust in Allah's wisdom</li>
          <li>• <strong>Consistency:</strong> Make dua regularly for the same need</li>
          <li>• <strong>Raise hands:</strong> Raise your hands while making dua as a sign of humility</li>
        </ul>
      </div>
    </div>
  )
}
