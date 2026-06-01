import { useState } from 'react'
import { Copy, Volume2 } from 'lucide-react'

const QUNUT_TEXT = [
  {
    id: 1,
    title: 'Qunut Al-Witr (Witr Prayer)',
    arabic: 'اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الخَيْرَ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ. اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ وَنَخْشَىٰ عَذَابَكَ، إِنَّ عَذَابَكَ بِالكُفَّارِ مُلْحَقٌ.',
    transliteration: 'Allahumma inna nasta\'inuka wa nastayghfiruk wa nu\'minu bika wa natawakkalu \'alayk wa nuthnee \'alayka al-khair, wa nashkuruka wa la nakfuruk wa nakhla\'u wa tatruk man yafjuruk. Allahumma iyyaka na\'budu wa laka nusalli wa nasjud, wa ilayka nas\'a wa nahfid, narju rahmataka wa nakhsha \'adhabbak, inna \'adhabbak bi al-kuffar mulhaq.',
    translation: 'O Allah! We beseech Your help and ask for Your forgiveness, and we believe in You and put our trust in You, and we ascribe to You all goodness. We thank You and are not ungrateful to You. We dissociate ourselves from and forsake those who disobey You. O Allah! You alone do we worship and to You do we pray and make prostration. For Your sake we strive. We hope for Your mercy and fear Your punishment. Indeed, Your punishment will certainly overtake the disbelievers.',
    occasion: 'Recited in Witr prayer (Qiyam Al-Layl)',
    benefits: 'Seeking Allah\'s help, forgiveness, guidance, and protection from disbelief'
  },
  {
    id: 2,
    title: 'Short Qunut for Witr',
    arabic: 'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ، وَعَافِنَا فِيمَنْ عَافَيْتَ، وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لَنَا فِيمَا أَعْطَيْتَ، وَقِنَا شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَىٰ عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ.',
    transliteration: 'Allahumma ahdina fiman hadayt, wa \'afina fiman \'afayt, wa tawalland fiman tawallayt, wa baarik lana fima \'atayt, wa qina sharra ma qadhadt, fa innaka taqdhi wa la yuqdhaa \'alayk, wa innaahu la yadhillu man walayt, wa la ya\'izzu man \'adayt, tabarakta rabbana wa ta\'alayt.',
    translation: 'O Allah! Guide us with those whom You have guided, grant us well-being with those whom You have granted well-being, take us as friends with those whom You have taken as friends, bless us in all that You have bestowed upon us, and save us from the evil You have decreed. For indeed, You decree and none can decree over You. And none is humiliated whom You have taken as a friend, and none is honored whom You have taken as an enemy. Blessed are You, O Lord, and Exalted.',
    occasion: 'Commonly recited in Witr prayer as an alternative',
    benefits: 'Comprehensive supplication seeking guidance, wellness, protection, and blessings'
  },
  {
    id: 3,
    title: 'Qunut Nazilah (During Calamity)',
    arabic: 'اللَّهُمَّ يَا ذَا الطَّوْلِ وَالنِّعَمِ، يَا ذَا الفَضْلِ وَالكَرَمِ، أَنْتَ إِلَهُنَا وَرَبُّنَا، نَنْزِعُ إِلَيْكَ بِالشِّكَايَة وَنَشْكُو إِلَيْكَ حَالَنَا وَضُرَّنَا...',
    transliteration: 'Allahumma ya dha at-tawl wa an-ni\'am, ya dha al-fadhl wa al-karam, anta ilahuna wa rabbuna, nanzu\'u ilayka bi ash-shakayah wa nashkoo ilayka halana wa dhurranna...',
    translation: 'O Allah! You have power and blessings, You have grace and generosity. You are our God and Lord. We turn to You in complaint and we complain to You about our situation and our suffering...',
    occasion: 'Recited during times of hardship and calamity',
    benefits: 'Seeking Allah\'s help during difficult times and expressing concerns to Him'
  }
]

export default function Qunut() {
  const [selectedQunut, setSelectedQunut] = useState(QUNUT_TEXT[0])
  const [copiedId, setCopiedId] = useState(null)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedId(selectedQunut.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="py-6 space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Volume2 className="text-islamic-600" />
          Qunut (Supplication in Prayer)
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Sacred supplications recited during prayer, particularly in Witr prayer</p>

        {/* Qunut Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {QUNUT_TEXT.map((qunut) => (
            <button
              key={qunut.id}
              onClick={() => setSelectedQunut(qunut)}
              className={`p-4 rounded-lg text-left transition-all border-2 ${
                selectedQunut.id === qunut.id
                  ? 'border-islamic-600 bg-islamic-50 dark:bg-islamic-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-islamic-600 bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <p className="font-semibold text-gray-800 dark:text-gray-200">{qunut.title}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{qunut.occasion}</p>
            </button>
          ))}
        </div>

        {/* Selected Qunut Display */}
        {selectedQunut && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border-l-4 border-islamic-600 space-y-6">
            {/* Title and Occasion */}
            <div>
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-2">{selectedQunut.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Occasion:</strong> {selectedQunut.occasion}
              </p>
            </div>

            {/* Arabic Text */}
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-right text-2xl md:text-3xl leading-loose text-gray-800 dark:text-gray-100 font-semibold">
                {selectedQunut.arabic}
              </p>
              <button
                onClick={() => copyToClipboard(selectedQunut.arabic)}
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-islamic-600 hover:bg-islamic-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <Copy size={16} />
                {copiedId === selectedQunut.id ? 'Copied!' : 'Copy Arabic'}
              </button>
            </div>

            {/* Transliteration */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Transliteration</h4>
              <p className="text-gray-800 dark:text-gray-200 italic leading-relaxed text-sm">
                {selectedQunut.transliteration}
              </p>
            </div>

            {/* Translation */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">English Translation</h4>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {selectedQunut.translation}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-blue-100/50 dark:bg-blue-900/30 border-l-4 border-blue-600 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">💡 Benefits & Purpose</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                {selectedQunut.benefits}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Information */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-600 rounded-lg p-6 space-y-3">
        <h3 className="font-semibold text-indigo-900 dark:text-indigo-300">📚 Understanding Qunut</h3>
        <div className="text-sm text-indigo-800 dark:text-indigo-200 space-y-2">
          <p>
            <strong>What is Qunut?</strong> Qunut is a supplication that is recited in prayer, particularly in the Witr prayer. It is made after the ruku (bowing) in the last rak'ah.
          </p>
          <p>
            <strong>When is it recited?</strong> Qunut is traditionally recited in Witr prayer, especially during the night prayer. It can also be recited during times of calamity (Qunut Nazilah).
          </p>
          <p>
            <strong>How to perform:</strong> After completing the ruku, stand upright and raise your hands to chest level, then recite the Qunut supplication with focus and devotion.
          </p>
        </div>
      </div>
    </div>
  )
}
