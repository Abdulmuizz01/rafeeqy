import { useState } from 'react'
import { BookOpen, Volume2 } from 'lucide-react'

const QURAN_VERSES = [
  {
    id: 1,
    surah: 'Al-Fatiha (The Opening)',
    number: '1:1-7',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾',
    transliteration: 'Bismillaah ir-Rahman ir-Raheem. Alhamdulillaah Rabb il-Aalameen. Ar-Rahman ir-Raheem. Maaliki yawm id-Deen. Iyyaka na\'abudu wa iyyaka nasta\'een. Ihdina s-siraat al-Mustaqeem. Siraat al-ladheen an\'amta \'alayhim ghayri l-maghdoobi \'alayhim wa laa d-daleen.',
    translation: 'In the name of Allah, the Most Gracious, the Most Merciful. All praise and thanks be to Allah, the Lord of all that exists. The Most Gracious, the Most Merciful. The Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us to the Straight Path. The path of those upon whom You have bestowed favor, not of those who have earned Your anger, nor of those who go astray.',
    lesson: 'Al-Fatiha teaches us to begin all our actions and endeavors in the name of Allah. It emphasizes complete reliance on Allah, seeking guidance for the straight path, and acknowledging His sovereignty and mercy. Recitation of this chapter is integral to Islamic worship.',
    color: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30'
  },
  {
    id: 2,
    surah: 'Al-Ikhlas (The Sincerity)',
    number: '112:1-4',
    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾',
    transliteration: 'Qul huwallahu ahad. Allahu s-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.',
    translation: 'Say: He is Allah, the One. Allah is the Self-Sufficient Master. He neither fathers nor is fathered. And there is none coequal or comparable unto Him.',
    lesson: 'This short but powerful surah emphasizes the absolute Oneness of Allah (Tawheed) and rejects any concept of polytheism. It affirms that Allah is unique, self-sufficient, and without equal. The Prophet (ﷺ) said reciting this surah equals a third of the Quran.',
    color: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30'
  },
  {
    id: 3,
    surah: 'An-Noor (The Light) - Verse 35',
    number: '24:35',
    arabic: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ الْمِصْبَاحُ فِي زُجَاجَةٍ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ يُوقَدُ مِن شَجَرَةٍ مُّبَارَكَةٍ زَيْتُونَةٍ لَّا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ نُّورٌ عَلَىٰ نُورٍ يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ',
    transliteration: 'Allahu nuru s-samawati wa l-ardh; mathalu nurihi kamishkatin fiha misbah; al-misbahu fi zujajah; az-zujajatu ka\'annaha kawkabun duriyyun yuqadu min shajarati mubarakatin zaytunatin la sharqiyyatin wa la gharbiyyatin yakadu zaytuh yadhee\'u wa law lam tamsashu nar; nuru \'ala nur; yahdee Allahu li nurihi man yasha\'u...',
    translation: 'Allah is the Light of the heavens and the earth. The example of His light is like a niche in which is a lamp; the lamp is within glass; the glass as if it were a pearly [star] lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allah guides to His light whom He wills...',
    lesson: 'This verse uses the metaphor of light to describe the illumination that Allah provides through faith and guidance. It teaches that true light is from Allah and that knowledge and faith are interconnected. The verse emphasizes how Allah guides those who seek Him.',
    color: 'from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30'
  },
  {
    id: 4,
    surah: 'Al-\'Alaq (The Clot) - First Revelation',
    number: '96:1-5',
    arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ﴿١﴾ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ﴿٢﴾ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ﴿٣﴾ الَّذِي عَلَّمَ بِالْقَلَمِ ﴿٤﴾ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ ﴿٥﴾',
    transliteration: 'Iqra\' bismi rabbika allazi khalaq. Khalaq al-insana min \'alaq. Iqra\' wa rabbuka al-akram. Allazi \'allama bil-qalam. \'Allama al-insana ma lam ya\'lam.',
    translation: 'Read in the name of your Lord who created. Created man from a clot. Read, and your Lord is the most generous. Who taught by the pen. Taught man that which he knew not.',
    lesson: 'These are the first verses revealed to Prophet Muhammad (ﷺ). They emphasize the importance of seeking knowledge, the creation of mankind, and Allah\'s supreme generosity in providing guidance through learning. Education and reading are foundational to Islamic tradition.',
    color: 'from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30'
  },
  {
    id: 5,
    surah: 'Ayat Al-Kursi (The Throne Verse)',
    number: '2:255',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۗ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: 'Allahu la ilaha illa huwa al-Hayyu al-Qayyum; la ta\'khuzuhu sinatun wa la nawm; lahu ma fi as-samawati wa ma fi al-ard; man dha allazi yashfa\'u \'indahu illa bi-idhnihi; ya\'lamu ma bayna aydihim wa ma khalfahum; wa la yuhitun bi-shay\'in min \'ilmihi illa bima sha\'; wasi\'a kursiyyuhu as-samawati wa al-ard; wa la ya\'uruhu hifzuhuma; wa huwa al-\'Aliyyu al-\'Azim.',
    translation: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
    lesson: 'Ayat Al-Kursi is considered the greatest verse in the Quran. It establishes Allah\'s eternal vigilance, His absolute knowledge, and His dominion over all creation. The Prophet (ﷺ) encouraged recitation of this verse for protection. It affirms Allah\'s transcendence and omniscience.',
    color: 'from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30'
  },
  {
    id: 6,
    surah: 'As-Sabr (Patience)',
    number: '2:153',
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
    transliteration: 'Ya ayyuha allazina amanu istaAAeenu bi-assabri wa-assalah; inna Allaha maAAa as-sabireen.',
    translation: 'O you who believe! Seek help in patience and prayer. Indeed, Allah is with the patient.',
    lesson: 'This verse teaches us that patience (Sabr) combined with prayer (Salah) is the key to overcoming difficulties. It emphasizes that Allah\'s support is granted to those who demonstrate patience and rely on prayer. Patience is considered one of the greatest virtues in Islam.',
    color: 'from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30'
  }
]

export default function QuranVerses() {
  const [selectedVerse, setSelectedVerse] = useState(QURAN_VERSES[0])
  const [expandedLesson, setExpandedLesson] = useState(true)

  return (
    <div className="py-6 space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <BookOpen className="text-islamic-600" />
          Selected Quranic Verses
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Explore beautiful verses with their transliteration, translation, and spiritual lessons</p>

        {/* Verse Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {QURAN_VERSES.map((verse) => (
            <button
              key={verse.id}
              onClick={() => setSelectedVerse(verse)}
              className={`p-4 rounded-lg text-left transition-all border-2 ${
                selectedVerse.id === verse.id
                  ? `border-islamic-600 bg-gradient-to-br ${verse.color}`
                  : 'border-gray-200 dark:border-gray-700 hover:border-islamic-600 bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <p className="font-semibold text-gray-800 dark:text-gray-200">{verse.surah}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{verse.number}</p>
            </button>
          ))}
        </div>

        {/* Selected Verse Display */}
        {selectedVerse && (
          <div className={`bg-gradient-to-br ${selectedVerse.color} rounded-lg p-8 border-l-4 border-islamic-600`}>
            {/* Verse Number and Surah */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                {selectedVerse.surah}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Surah {selectedVerse.number}</p>
            </div>

            {/* Arabic Text */}
            <div className="mb-6 bg-white/50 dark:bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-3xl md:text-4xl leading-loose text-right text-gray-800 dark:text-gray-100 font-semibold">
                {selectedVerse.arabic}
              </p>
            </div>

            {/* Transliteration */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Transliteration</h4>
              <p className="text-gray-800 dark:text-gray-200 italic leading-relaxed text-sm md:text-base">
                {selectedVerse.transliteration}
              </p>
            </div>

            {/* Translation */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Translation</h4>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm md:text-base">
                {selectedVerse.translation}
              </p>
            </div>

            {/* Lesson */}
            <div className="border-t border-gray-400 dark:border-gray-600 pt-6">
              <button
                onClick={() => setExpandedLesson(!expandedLesson)}
                className="w-full flex items-center justify-between p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase">💡 Spiritual Lesson</h4>
                <span className={`transition-transform ${expandedLesson ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {expandedLesson && (
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mt-3 text-sm md:text-base">
                  {selectedVerse.lesson}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Information Box */}
      <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
          <Volume2 size={20} /> Tips for Recitation
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <li>• <strong>Wudu:</strong> It is recommended to perform Wudu (ritual ablution) before reciting the Quran</li>
          <li>• <strong>Tajweed:</strong> Learn proper pronunciation and rules of recitation (Tajweed)</li>
          <li>• <strong>Reflection:</strong> Take time to reflect on the meanings and apply the teachings to your life</li>
          <li>• <strong>Consistency:</strong> Establish a daily habit of Quran recitation, even if for a short duration</li>
          <li>• <strong>Understanding:</strong> Seek to understand the context and historical background of the verses</li>
        </ul>
      </div>
    </div>
  )
}
