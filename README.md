# Islamic Prayer Times Website 🕌

A comprehensive, beautiful Islamic prayer time website built with React and Vite. Features include real-time prayer times, Quranic verses, 99 Names of Allah, Forty Hadith Nawawi, Qunut, and short duas.

## ✨ Features

### 1. **Prayer Times** 🕐
- Displays 5 daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha)
- Nawafil prayer information (Optional prayers)
- Auto-detect location via GPS/IP
- Manual location entry via coordinates
- Pre-selected major cities worldwide
- Real-time integration with Aladhan API

### 2. **Quranic Verses** 📖
- Selected beautiful surahs and verses
- Arabic text with proper formatting
- Transliteration for pronunciation
- English translations
- Spiritual lessons derived from each verse
- Easy navigation between verses

### 3. **99 Names of Allah** ✨
- All 99 divine attributes (Asmaul Husna)
- Arabic names with transliteration
- English meanings
- Benefits and applications of each name
- Search and filter functionality
- Beautiful card-based interface

### 4. **Forty Hadith Nawawi** 📚
- Complete collection of 40 essential hadiths
- Arabic text with transliteration
- English translations
- Significance and applications
- Filter by theme
- Search functionality

### 5. **Qunut** 🤲
- Traditional Witr prayer supplications
- Multiple Qunut variations
- Arabic, transliteration, and translation
- Information about when and how to recite
- Copy-to-clipboard functionality

### 6. **Short Duas** 💫
- 12+ essential daily supplications
- Categorized by purpose (Morning, Evening, Health, Forgiveness, etc.)
- Arabic text, transliteration, and translation
- Benefits and best times to recite each dua
- Searchable and filterable interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
```bash
cd "Code"
```

2. **Install dependencies:**
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The website will automatically open in your default browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Code/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Main header
│   │   ├── PrayerTimes.jsx      # Prayer times with location selection
│   │   ├── QuranVerses.jsx      # Quranic verses collection
│   │   ├── NamesOfAllah.jsx     # 99 Names of Allah
│   │   ├── Hadith.jsx           # 40 Hadith Nawawi
│   │   ├── Qunut.jsx            # Qunut supplications
│   │   └── ShortDua.jsx         # Short duas
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind CSS imports
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Dependencies and scripts
└── .gitignore                   # Git ignore file
```

## 🎨 Features Overview

### Dark Mode
- Toggle between light and dark themes
- Preference saved in localStorage
- Respects system preference on first visit

### Responsive Design
- Mobile-first approach
- Fully responsive on all devices
- Optimized for phones, tablets, and desktops

### User-Friendly Interface
- Intuitive navigation
- Beautiful gradient colors
- Smooth transitions and animations
- Accessibility-focused

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **Axios** - HTTP client for API calls
- **Aladhan API** - Prayer times calculation

## 📡 API Integration

### Prayer Times
The application uses the **Aladhan API** to fetch accurate prayer times:
- Endpoint: `https://api.aladhan.com/v1/timings/`
- Method: `method=4` (Umm Al-Qura University, Saudi Arabia)
- Supports custom latitude/longitude coordinates
- No authentication required

## 🎯 Usage Tips

### For Prayer Times
1. Select a city from the list or use "Auto-Detect My Location"
2. Or enter custom coordinates (Latitude, Longitude)
3. Prayer times update automatically
4. View information about Nawafil prayers below

### For Quranic Verses
1. Click on any verse to see detailed information
2. Read Arabic text, transliteration, and translation
3. Expand the lesson section for spiritual insights

### For 99 Names
1. Search by English name, transliteration, or Arabic
2. Click on a name to see detailed benefits
3. Learn about Allah's attributes and their applications

### For Hadith
1. Use search or filter by theme
2. Click to expand and read full hadith details
3. Understand the significance of each teaching

### For Duas
1. Filter by category
2. Click on a dua to see full details
3. Copy Arabic text for personal use
4. Learn when and how to recite each dua

## 📱 Mobile Optimization

The website is fully optimized for mobile devices:
- Touch-friendly buttons and links
- Optimized layout for small screens
- Fast loading times
- Offline support for cached content

## 🤝 Contributing

Feel free to contribute to this project! Some ideas:
- Add more Quranic verses
- Include additional duas
- Add support for more languages
- Enhance prayer time features
- Improve UI/UX design

## 📄 License

This project is open source and available for educational and personal use. Please respect Islamic teachings and use the content respectfully.

## 🙏 Acknowledgments

- **Aladhan API** - For providing accurate prayer times
- **Imam Nawawi** - For compiling the 40 Hadith
- **Islamic Scholars** - For preserving and teaching Islamic knowledge
- **Community** - For support and feedback

## 📞 Support

If you encounter any issues or have suggestions:
1. Check the documentation
2. Review the code comments
3. Test with different browsers
4. Try clearing cache and restarting the dev server

## 🌙 Islamic Reminders

> "The best among you are those who learn the Quran and teach it." - Prophet Muhammad (ﷺ)

May this website help you and others in your Islamic journey. Remember to:
- Recite the Quran daily
- Learn Islamic knowledge
- Make regular duas
- Help others in the community
- Always seek Allah's guidance

---

**Subhan'Allah - Glory be to Allah** ✨
