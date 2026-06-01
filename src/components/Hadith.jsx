import { useState } from 'react'
import { Search } from 'lucide-react'

const HADITH_COLLECTION = [
  {
    number: 1,
    arabic: 'عن أمير المؤمنين أبي حفص عمر بن الخطاب رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: \"إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى...\"',
    transliteration: 'Inna al-a\'maal bi al-niyyah, wa innama li kulli imri\'in ma nawa...',
    translation: 'Actions are judged by intentions. For every person is what they intended.',
    theme: 'Intention (Niyyah)',
    significance: 'Foundation of Islamic jurisprudence and personal conduct'
  },
  {
    number: 2,
    arabic: 'عن عائشة رضي الله عنها أن النبي صلى الله عليه وسلم قال: \"الحلال بين والحرام بين، وبينهما أمور مشبهات لا يعلمها كثير من الناس...\"',
    transliteration: 'Al-halal bayyun wa al-haram bayyun, wa baynahumaa umoor mushabbahaat la ya\'lamuha kathiir min an-nas...',
    translation: 'The lawful is clear and the unlawful is clear, and between the two are doubtful things that many people do not know.',
    theme: 'Lawful and Unlawful',
    significance: 'Guidance on distinguishing between permissible and forbidden acts'
  },
  {
    number: 3,
    arabic: 'عن أبي قتادة الحارث بن ربعي رضي الله عنه أن النبي صلى الله عليه وسلم قال: \"بعثت بالحنيفية السمحة\". وقال أيضا: \"إن هذا الدين يسر، ولن يشاد الدين أحد إلا غلبه، فسددوا وقاربوا\"',
    transliteration: 'Bu\'itht bi al-hanifiyyah as-samhah. Wa qala aydan: Inna hadha ad-deen yusr, wa lan yoshad ad-deen ahad illa ghalabah, fa saddidu wa qarību',
    translation: 'I was sent with the easy and flexible Abrahamic faith. Indeed, this religion is ease. No one burdens themselves with this religion except that it overwhelms them. So be moderate and take a middle course.',
    theme: 'Ease in Religion',
    significance: 'Islam is designed to be easy and practical for all people; balance and moderation are key'
  },
  {
    number: 4,
    arabic: 'عن أبي محمد عبد الله بن عمرو بن العاص رضي الله عنهما قال: قال رسول الله صلى الله عليه وسلم: \"خير الناس أنفعهم للناس\"',
    transliteration: 'Khayru an-nas anfauhum li an-nas',
    translation: 'The best of people are those who are most beneficial to others.',
    theme: 'Service to Others',
    significance: 'Excellence is measured by one\'s benefit to humanity'
  },
  {
    number: 5,
    arabic: 'عن جابر بن عبد الله الأنصاري رضي الله عنهما أنه كان مع النبي صلى الله عليه وسلم في سفر فانقطع به الدابة، فجاء النبي صلى الله عليه وسلم وهو جالس تحت شجرة فقال: \"يا جابر، بم تجلس؟\" قال: بسوء حالي وانقطاع دابتي، قال: \"ألا أعلمك كلمات تقولها؟\" قلت: بلى يا رسول الله، قال: \"قل: اللهم إني أستودعك نفسي وديني وأهلي ومالي وولدي وخواتيم عملي وأول شيء أخرجه روحي\"',
    transliteration: 'Ya Jaber bi am tajlis? Qul: Allahumma inni astawa\'dika nafsi wa dini wa ahli wa mali wa waladi wa khawatim \'amali',
    translation: 'The Prophet asked Jaber why he was sitting alone. Jaber replied about his hardship. The Prophet taught him a dua for trusting and committing affairs to Allah.',
    theme: 'Purification (Tahara)',
    significance: 'Trusting in Allah and supplication brings solace during hardship'
  },
  {
    number: 6,
    arabic: 'عن أبي عبد الرحمن عبد الله بن عمر بن الخطاب رضي الله عنهما قال: سمعت رسول الله صلى الله عليه وسلم يقول: \"كل المسلم على المسلم حرام؛ دمه وماله وعرضه\"',
    transliteration: 'Kull al-muslim \'ala al-muslim haram; damuh wa maaluhu wa \'araduh',
    translation: 'The Muslim\'s blood, wealth, and honor are inviolable to another Muslim.',
    theme: 'Rights of Muslims',
    significance: 'Foundation of brotherhood and respect in Islamic community'
  },
  {
    number: 7,
    arabic: 'عن أبي هريرة عبد الرحمن بن صخر رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه\"',
    transliteration: 'La yu\'minu ahadukum hatta yuhibba li akhih ma yuhibbu li nafsih',
    translation: 'None of you truly believes until he loves for his brother what he loves for himself.',
    theme: 'Brotherhood and Love',
    significance: 'The pillar of sincere faith and Muslim unity'
  },
  {
    number: 8,
    arabic: 'عن أبي موسى عبد الله بن قيس الأشعري رضي الله عنه عن رسول الله صلى الله عليه وسلم قال: \"الكلمة الطيبة صدقة\"',
    transliteration: 'Al-kalima at-tayyiba sadaqah',
    translation: 'A good word is charity.',
    theme: 'Good Speech',
    significance: 'Even kind words are acts of charity and worship'
  },
  {
    number: 9,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من غشنا فليس منا\"',
    transliteration: 'Man ghashana fa laysa minna',
    translation: 'Whoever deceives us is not of us.',
    theme: 'Honesty in Business',
    significance: 'Deception has no place in Islamic dealings'
  },
  {
    number: 10,
    arabic: 'عن أبي هريرة رضي الله عنه أن النبي صلى الله عليه وسلم قال: \"حق الوالد على الولد أن يحسن إليهما\"',
    transliteration: 'Haqq al-walid \'ala al-walad an yuhsin ilaihima',
    translation: 'It is the right of parents upon children to be kind to them.',
    theme: 'Filial Piety',
    significance: 'Kindness to parents is a fundamental Islamic duty'
  },
  {
    number: 11,
    arabic: 'عن أبي ذر غفار رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"لا تحقرن من المعروف شيئا\"',
    transliteration: 'La tahqiranna min al-ma\'ruf shay\'a',
    translation: 'Do not consider any good deed insignificant.',
    theme: 'Importance of Small Deeds',
    significance: 'Every act of kindness, no matter how small, matters'
  },
  {
    number: 12,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"رأيت امرأة تعذب في قطة ربطتها، فلا هي أطعمتها ولا أرسلتها تأكل من خشاش الأرض\"',
    transliteration: 'Ra\'ayt imra\'ah tu\'aththab fi qittah rabattatha, fa la hiya at\'amtaha wa la arsalatha ta\'kul min khashash al-ardh',
    translation: 'I saw a woman being punished for a cat she had confined. She neither fed it nor let it eat from the creatures of the earth.',
    theme: 'Mercy to Animals',
    significance: 'Compassion to all creatures is rewarded by Allah; cruelty brings divine punishment'
  },
  {
    number: 13,
    arabic: 'عن أنس بن مالك رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من أصبح آمنا في سربه معافى في جسده عنده قوت يومه فقد حيزت له الدنيا\"',
    transliteration: 'Man asbaha amnan fi saribihi mu\'afan fi jasadih \'indahu quwwat yawmih fa qad huzat lahu ad-dunya',
    translation: 'Whoever wakes up safe, healthy, and with provision for the day has all the world\'s good.',
    theme: 'Gratitude for Blessings',
    significance: 'Recognition of three fundamental blessings'
  },
  {
    number: 14,
    arabic: 'عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: \"من كان يؤمن بالله واليوم الآخر فليكرم ضيفه\"',
    transliteration: 'Man kana yu\'minu bi Allah wa al-yawm al-akhir fa liyukrim dayfah',
    translation: 'Whoever believes in Allah and the Last Day should honor the guest.',
    theme: 'Hospitality',
    significance: 'Hospitality is an expression of faith'
  },
  {
    number: 15,
    arabic: 'عن عائشة رضي الله عنها قالت: قال رسول الله صلى الله عليه وسلم: \"إن الله رفيق يحب الرفق\"',
    transliteration: 'Inna Allah rafiq yuhibb ar-rifq',
    translation: 'Verily, Allah is gentle and loves gentleness.',
    theme: 'Gentleness',
    significance: 'Gentleness achieves what harshness cannot'
  },
  {
    number: 16,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"في كل يوم الشمس تطلع تكفل فيه بعدل بين اثنين\"',
    transliteration: 'Fi kulli yawm ash-shams tatla\' takaffal fihi bi\'adl bayna ithnayn',
    translation: 'Every day the sun rises, one should strive for justice between two people.',
    theme: 'Justice',
    significance: 'Daily pursuit of justice is a continuous obligation'
  },
  {
    number: 17,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"المؤمن مرآة المؤمن\"',
    transliteration: 'Al-mu\'min mir\'ah al-mu\'min',
    translation: 'A believer is like a mirror to another believer.',
    theme: 'Brotherhood',
    significance: 'Believers should reflect good counsel to one another'
  },
  {
    number: 18,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت\"',
    transliteration: 'Man kana yu\'minu bi Allah wa al-yawm al-akhir fa liyaqul khayran aw lyasmut',
    translation: 'Whoever believes in Allah and the Last Day should say something good or remain silent.',
    theme: 'Guarding the Tongue',
    significance: 'Speech should be beneficial or withheld'
  },
  {
    number: 19,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"الرحم الرحيم إذا وصلت فلا تنقطع\"',
    transliteration: 'Ar-rahim ar-rahim idha waslat fa la tanqata\'',
    translation: 'The merciful one maintains ties of kinship when connected.',
    theme: 'Kinship Relations',
    significance: 'Blood relations should never be severed'
  },
  {
    number: 20,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من أحسن إلى خلق الله أحب الله إليه\"',
    transliteration: 'Man ahsan ila khalq Allah ahab Allah ilayh',
    translation: 'Whoever is kind to Allah\'s creation, Allah loves him.',
    theme: 'Kindness',
    significance: 'Kindness to creation is a path to Allah\'s love'
  },
  {
    number: 21,
    arabic: 'عن أبي هريرة رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: \"الصوم جنة، فإذا كان أحدكم صائما فلا يرفث، ولا يسخب، فإن سابه أحد أو قاتله فليقل: إني صائم\"',
    transliteration: 'As-sawm junnah, fa idha kana ahadukum sa\'iman fa la yarfath wa la yasakhu, fa in sabahu ahad aw qatalahu fa liyaqul: Inni sa\'im',
    translation: 'Fasting is a shield. When one of you is fasting, he should not be obscene or loud. If someone curses or fights him, let him say: "I am fasting."',
    theme: 'Fasting',
    significance: 'Fasting provides spiritual protection and requires restraint and dignity'
  },
  {
    number: 22,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"لا تباغضوا ولا تدابروا ولا تنافسوا\"',
    transliteration: 'La tabaghdu wa la tadabiru wa la tanafisu',
    translation: 'Do not have hatred for one another, turn your backs on each other, or compete unjustly.',
    theme: 'Islamic Brotherhood',
    significance: 'Harmony is essential in Muslim community'
  },
  {
    number: 23,
    arabic: 'عن أنس رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"لا يؤمن أحدكم حتى يحب لنفسه ما يحب لأخيه\"',
    transliteration: 'La yu\'minu ahadukum hatta yuhibba li nafsih ma yuhibbu li akhih',
    translation: 'None of you truly believes until he loves for himself what he loves for his brother.',
    theme: 'Sincere Faith',
    significance: 'Compassion and empathy are signs of true belief'
  },
  {
    number: 24,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من ستر مسلما ستره الله يوم القيامة\"',
    transliteration: 'Man satara musliman satarahu Allah yawm al-qiyamah',
    translation: 'Whoever covers the faults of a Muslim, Allah will cover his faults on the Day of Judgment.',
    theme: 'Concealing Faults',
    significance: 'Mercy includes not exposing others\' shortcomings'
  },
  {
    number: 25,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"الحياء من الإيمان\"',
    transliteration: 'Al-haya min al-iman',
    translation: 'Modesty is from faith.',
    theme: 'Modesty',
    significance: 'Shame from wrongdoing is a sign of belief'
  },
  {
    number: 26,
    arabic: 'عن أبي موسى الأشعري رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"إن الله تعالى نهى عن قيل وقال، وإضاعة المال، وكثرة السؤال\"',
    transliteration: 'Inna Allah ta\'ala naha \'an qil wa qal, wa ida\'at al-mal, wa kethrat as-su\'al',
    translation: 'Allah forbids excessive talking, wasting money, and too much questioning.',
    theme: 'Lawful Wealth',
    significance: 'Avoiding waste and excessive curiosity are signs of wisdom and piety'
  },
  {
    number: 27,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من قام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه\"',
    transliteration: 'Man qama ramadan imanan wa ihitisaban ghufira lahu ma taqaddama min dhnubih',
    translation: 'Whoever prays during Ramadan with faith, expecting its reward, his previous sins are forgiven.',
    theme: 'Ramadan',
    significance: 'The blessed month offers immense spiritual rewards'
  },
  {
    number: 28,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه\"',
    transliteration: 'Man qama laylat al-qadr imanan wa ihitisaban ghufira lahu ma taqaddama min dhnubih',
    translation: 'Whoever prays on the Night of Power with faith, his previous sins are forgiven.',
    theme: 'Night of Power',
    significance: 'Laylat al-Qadr is the holiest night of the year'
  },
  {
    number: 29,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"تعس عبد الدينار والدرهم والقطيفة والخميصة\"',
    transliteration: 'Ta\'asa \'abd ad-dinar wa ad-dirham wa al-qatifah wa al-khamisah',
    translation: 'Woe to the slave of dinar and dirham and velvet garments.',
    theme: 'Warning Against Materialism',
    significance: 'Detachment from worldly possessions is spiritual freedom'
  },
  {
    number: 30,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من استطاع منكم أن يكفي أخاه فليفعل\"',
    transliteration: 'Man istata\'a minkum an yakfi akhah fa liyaf\'al',
    translation: 'Whoever among you is able to help his brother should do so.',
    theme: 'Helping Others',
    significance: 'Providing for others\' needs is a noble deed'
  },
  {
    number: 31,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"الذنوب التي لا يغفرها الله الشرك\"',
    transliteration: 'Ad-dhunub allati la yughfiruh Allah ash-shirk',
    translation: 'The sins that Allah does not forgive is associating partners with Him.',
    theme: 'Shirk - Association with Allah',
    significance: 'Polytheism is the only unforgivable sin if dying upon it'
  },
  {
    number: 32,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من علم دينا يبتغي به وجه الله علمه الله\"',
    transliteration: 'Man \'alima din yabtaghi bih wajh Allah \'alamahu Allah',
    translation: 'Whoever learns religion seeking the face of Allah, Allah teaches him.',
    theme: 'Learning with Sincere Intention',
    significance: 'Sincere intention in seeking knowledge brings divine support'
  },
  {
    number: 33,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"الكيس من دان نفسه وعمل لما بعد الموت\"',
    transliteration: 'Al-kays man dana nafsahu wa \'amila lima ba\'ad al-mawt',
    translation: 'The wise one is he who reckons with himself and works for what comes after death.',
    theme: 'Self-Accountability',
    significance: 'Reflection on death brings spiritual growth'
  },
  {
    number: 34,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"الغيبة أشد من الزنا\"',
    transliteration: 'Al-ghibah ashadd min az-zina',
    translation: 'Backbiting is worse than fornication.',
    theme: 'Avoiding Backbiting',
    significance: 'Speaking ill of others is a grave sin'
  },
  {
    number: 35,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"إن الله تعالى يحب العبد القوي الغني الكريم\"',
    transliteration: 'Inna Allah ta\'ala yuhibb al-\'abd al-qawi al-ghani al-karim',
    translation: 'Allah loves the strong, wealthy, and noble servant.',
    theme: 'Strength and Virtue',
    significance: 'Combining strength with piety is beloved to Allah'
  },
  {
    number: 36,
    arabic: 'عن أبي هريرة رضي الله عنه أن النبي صلى الله عليه وسلم قال: \"من قال حين يصبح وحين يمسي: سبحان الله وبحمده مائة مرة، لم يأتِ أحد يوم القيامة بأفضل مما جاء به إلا أحد قال مثل ما قال أو زاد\"',
    transliteration: 'Man qala hina yasbah wa hina yamassi: Subhan\'Allah wa bihamdih mi\'at marrah, lam ya\'ti ahad yawm al-qiyamah bi afdal mimma ja\'a bih illa ahad qala mithla ma qala aw zada',
    translation: 'Whoever says "Subhan\'Allah wa bihamdih" (Glory and praise be to Allah) 100 times morning and evening will come on the Day of Judgment with none better except one who said likewise or more.',
    theme: 'Morning and Evening Remembrance',
    significance: 'Daily dhikr with proper intention brings incomparable rewards on the Day of Judgment'
  },
  {
    number: 37,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"الريح من روح الله، تأتي بالرحمة وتأتي بالعذاب، فإذا رأيتموها فلا تسبوها، واسألوا الله خيرها واستعيذوا بالله من شرها\"',
    transliteration: 'Ar-rih min ruh Allah, ta\'ti bi ar-rahmah wa ta\'ti bi al-\'adhab, fa idha ra\'aytumua-ha fa la tasbuuha, was\'alu Allah khayraha wa ista\'idhu bi Allah min sharriha',
    translation: 'The wind is from the Spirit of Allah. It brings mercy and brings punishment. When you see it, do not curse it. Ask Allah for its good and seek refuge from its harm.',
    theme: 'Divine Signs',
    significance: 'Creation reflects Allah\'s power and wisdom; we should respond with gratitude and caution'
  },
  {
    number: 38,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"إنما بعثت بخلق القرآن وأخلاق يسيرة\"',
    transliteration: 'Innama bu\'itht bi khulq al-quran wa akhlaq yassir',
    translation: 'I was sent to perfect good character.',
    theme: 'Good Character',
    significance: 'Character is fundamental to Islamic teaching'
  },
  {
    number: 39,
    arabic: 'عن عائشة رضي الله عنها قالت: قال رسول الله صلى الله عليه وسلم: \"إن الله رفيق يحب الرفق على الجاهل والحليم، ويعطي على الرفق لا يعطي على الخرق\"',
    transliteration: 'Inna Allah rafiq yuhibb ar-rifq ala al-jahil wa al-halim, wa yu\'ti ala ar-rifq la yu\'ti ala al-kharq',
    translation: 'Indeed, Allah is gentle and loves gentleness with the ignorant and clement. He gives for gentleness what He does not give for harshness.',
    theme: 'The Afterlife',
    significance: 'Gentleness and patience in dealing with others pleases Allah and brings reward'
  },
  {
    number: 40,
    arabic: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: \"من عمل بما علم ورثه الله علما لم يعلم\"',
    transliteration: 'Man \'amila bima \'alima warathuhu Allah \'ilman lam ya\'lam',
    translation: 'Whoever acts on the knowledge he has, Allah will grant him knowledge he did not know.',
    theme: 'Action Leads to Knowledge',
    significance: 'Implementing knowledge opens doors to wisdom'
  }
]

export default function Hadith() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [expandedHadith, setExpandedHadith] = useState(null)

  const themes = [...new Set(HADITH_COLLECTION.map(h => h.theme))]

  const filteredHadith = HADITH_COLLECTION.filter(hadith => {
    const matchesSearch = hadith.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hadith.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hadith.number.toString().includes(searchTerm)
    const matchesTheme = !selectedTheme || hadith.theme === selectedTheme
    return matchesSearch && matchesTheme
  })

  return (
    <div className="py-6 space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">📚 The Forty Hadith Nawawi</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">A comprehensive collection of 40 essential hadiths in Islamic jurisprudence</p>

        {/* Search and Filter */}
        <div className="space-y-4 mb-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search hadith by theme or number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-islamic-600"
            />
          </div>

          {/* Theme Filter */}
          <div>
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Filter by Theme</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTheme(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTheme === null
                    ? 'bg-islamic-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-islamic-200 dark:hover:bg-islamic-800'
                }`}
              >
                All Themes
              </button>
              {themes.map(theme => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTheme === theme
                      ? 'bg-islamic-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-islamic-200 dark:hover:bg-islamic-800'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hadith List */}
        <div className="space-y-3">
          {filteredHadith.map((hadith) => (
            <div
              key={hadith.number}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedHadith(expandedHadith === hadith.number ? null : hadith.number)}
                className="w-full p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-islamic-600">#{hadith.number}</span>
                    <span className="px-3 py-1 bg-islamic-100 dark:bg-islamic-900/30 text-islamic-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {hadith.theme}
                    </span>
                  </div>
                  <span className={`transition-transform ${expandedHadith === hadith.number ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium line-clamp-2">
                  {hadith.translation}
                </p>
              </button>

              {/* Expanded Content */}
              {expandedHadith === hadith.number && (
                <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 space-y-4">
                  {/* Arabic */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Arabic Text</h4>
                    <p className="text-right text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                      {hadith.arabic}
                    </p>
                  </div>

                  {/* Transliteration */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Transliteration</h4>
                    <p className="text-gray-700 dark:text-gray-400 italic text-sm">
                      {hadith.transliteration}
                    </p>
                  </div>

                  {/* Translation */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase">Translation</h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      {hadith.translation}
                    </p>
                  </div>

                  {/* Significance */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                    <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">💡 Significance</h4>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      {hadith.significance}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredHadith.length === 0 && (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">
            <p>No hadiths found matching your search.</p>
          </div>
        )}
      </div>

      {/* Information Box */}
      <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-600 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">📖 About Hadith Nawawi</h3>
        <p className="text-sm text-green-800 dark:text-green-200 mb-3">
          The Forty Hadith Nawawi is a collection of forty ahadith compiled by Imam Nawawi in the 13th century. These hadiths form the foundation of Islamic jurisprudence and cover essential aspects of Islamic teachings including belief, practice, ethics, and conduct.
        </p>
        <p className="text-sm text-green-800 dark:text-green-200">
          <strong>Scholar Name:</strong> Abū Zakariyyā Yahyā ibn Sharaf an-Nawawī (631-676 AH)
        </p>
      </div>
    </div>
  )
}
