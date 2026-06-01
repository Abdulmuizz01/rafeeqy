import { useState, useEffect } from 'react'
import { Clock, MapPin, Loader } from 'lucide-react'
import axios from 'axios'

const MAJOR_CITIES = [
  { name: 'Mecca, Saudi Arabia', latitude: 21.4225, longitude: 39.8262, method: 4 },
  { name: 'Medina, Saudi Arabia', latitude: 24.5247, longitude: 39.5692, method: 4 },
  { name: 'Cairo, Egypt', latitude: 30.0444, longitude: 31.2357, method: 5 },
  { name: 'Lagos, Nigeria', latitude: 6.5244, longitude: 3.3792, method: 5 },
  { name: 'Dubai, UAE', latitude: 25.2048, longitude: 55.2708, method: 3 },
  { name: 'London, UK', latitude: 51.5074, longitude: -0.1278, method: 2 },
  { name: 'New York, USA', latitude: 40.7128, longitude: -74.0060, method: 2 },
  { name: 'Toronto, Canada', latitude: 43.6629, longitude: -79.3957, method: 2 },
  { name: 'Sydney, Australia', latitude: -33.8688, longitude: 151.2093, method: 2 },
  { name: 'Istanbul, Turkey', latitude: 41.0082, longitude: 28.9784, method: 4 },
  { name: 'Jakarta, Indonesia', latitude: -6.2088, longitude: 106.8456, method: 4 },
]

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedCity, setSelectedCity] = useState(MAJOR_CITIES[0])
  const [customLocation, setCustomLocation] = useState('')
  const [useCustom, setUseCustom] = useState(false)
  const [latitude, setLatitude] = useState(MAJOR_CITIES[0].latitude)
  const [longitude, setLongitude] = useState(MAJOR_CITIES[0].longitude)

  const fetchPrayerTimes = async (lat, lon) => {
    setLoading(true)
    setError(null)
    try {
      const today = new Date().toISOString().split('T')[0]
      const response = await axios.get(
        `https://api.aladhan.com/v1/timings/${today}?latitude=${lat}&longitude=${lon}&method=4`
      )
      setPrayerTimes(response.data.data.timings)
    } catch (err) {
      setError('Failed to fetch prayer times. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrayerTimes(latitude, longitude)
  }, [])

  const handleCityChange = (city) => {
    setSelectedCity(city)
    setLatitude(city.latitude)
    setLongitude(city.longitude)
    setUseCustom(false)
    fetchPrayerTimes(city.latitude, city.longitude)
  }

  const handleCustomLocation = (e) => {
    e.preventDefault()
    const [lat, lon] = customLocation.split(',').map(str => parseFloat(str.trim()))
    if (!isNaN(lat) && !isNaN(lon)) {
      setLatitude(lat)
      setLongitude(lon)
      setUseCustom(true)
      fetchPrayerTimes(lat, lon)
    }
  }

  const handleAutoDetect = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLatitude(latitude)
          setLongitude(longitude)
          setUseCustom(true)
          fetchPrayerTimes(latitude, longitude)
        },
        () => setError('Unable to get your location. Please enter coordinates manually.')
      )
    }
  }

  const getPrayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']
  const getPrayerEmojis = {
    Fajr: '🌅',
    Sunrise: '🌄',
    Dhuhr: '☀️',
    Asr: '🌤️',
    Maghrib: '🌆',
    Isha: '🌙',
  }

  return (
    <div className="space-y-6 py-6">
      {/* Location Selection */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border-l-4 border-islamic-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MapPin size={24} className="text-islamic-600" />
          Select Location
        </h2>

        <div className="space-y-4">
          {/* City Selector Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-2">Select City</label>
            <select
              value={useCustom ? 'custom' : selectedCity.name}
              onChange={(e) => {
                const selected = MAJOR_CITIES.find(c => c.name === e.target.value)
                if (selected) handleCityChange(selected)
              }}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-islamic-600 transition-all"
            >
              {MAJOR_CITIES.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Auto-detect */}
          <button
            onClick={handleAutoDetect}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors"
          >
            📍 Auto-Detect My Location
          </button>

          {/* Custom Coordinates */}
          <form onSubmit={handleCustomLocation} className="space-y-2">
            <label className="block text-sm font-semibold">Or Enter Coordinates</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Latitude, Longitude (e.g., 40.7128, -74.0060)"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-islamic-600"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-islamic-600 hover:bg-islamic-700 text-white rounded-lg font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {useCustom && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
            📍 Custom location: {latitude.toFixed(4)}, {longitude.toFixed(4)}
          </p>
        )}
      </div>

      {/* Prayer Times Display */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader className="animate-spin text-islamic-600" size={32} />
          <span className="ml-3 text-lg font-semibold">Loading prayer times...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {prayerTimes && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getPrayerOrder.map((prayer) => (
            prayerTimes[prayer] && (
              <div
                key={prayer}
                className="bg-gradient-to-br from-islamic-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md p-6 border-l-4 border-islamic-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-islamic-700 dark:text-blue-300">
                      {getPrayerEmojis[prayer]} {prayer}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {prayerTimes[prayer]}
                    </p>
                  </div>
                  <Clock className="text-islamic-600" size={28} />
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Nawafil Info */}
      <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-blue-300">✨ Nawafil (Optional Prayers)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Tahajjud (Night Prayer)</p>
            <p className="text-gray-700 dark:text-gray-400">The most virtuous optional prayer, performed after Isha and before Fajr, especially in the last third of the night</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Duha Prayer</p>
            <p className="text-gray-700 dark:text-gray-400">2-8 rak'ah performed after sunrise, from mid-morning onwards</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Sunnah Prayers</p>
            <p className="text-gray-700 dark:text-gray-400">Confirmed Sunnah: 2 before Fajr, 2 before and 2 after Dhuhr, 2 after Maghrib, 2 after Isha</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Witr Prayer</p>
            <p className="text-gray-700 dark:text-gray-400">A strongly recommended odd-numbered prayer performed after Isha, typically 1, 3, or 5 rak'ah</p>
          </div>
        </div>
      </div>
    </div>
  )
}
