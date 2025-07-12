/**
 * SearchPage Component
 *
 * This component renders a music search and discovery page with two tabs:
 * - "Popular": Displays a list of popular songs by default using the Deezer API.
 * - "Search": Allows users to search for songs or artists.
 *
 * State:
 * - `activeTab` (string): Controls the current tab (either 'popular' or 'search').
 * - `query` (string): Stores the user’s input for the search query.
 * - `songs` (array): Holds the list of songs returned by the Deezer API.
 *
 * Side Effects:
 * - On mount or when `activeTab` changes, it fetches popular songs if the active tab is 'popular'.
 *
 * Functions:
 * - `handleSearch`: Fetches songs based on the `query` value and sets them in state.
 *
 * UI Elements:
 * - Tab buttons to toggle between "Popular" and "Search" views.
 * - Search input field and button.
 * - Message display when no songs are found.
 * - Song grid using the `SongCard` component.
 *
 * Dependencies:
 * - React hooks (`useState`, `useEffect`)
 * - `SongCard` component for displaying individual songs.
 * - `searchSongs` helper from `../lib/deezer` for fetching song data.
 *
 */

import { useState, useEffect } from 'react'
import SongCard from './SongCard'
import { searchSongs } from '../lib/deezer'

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState('popular')
  const [query, setQuery] = useState('')
  const [songs, setSongs] = useState([])

  useEffect(() => {
    if (activeTab === 'popular') {
      const fetchPopular = async () => {
        const popularSongs = await searchSongs('')
        setSongs(popularSongs)
      }
      fetchPopular()
    } else {
      setSongs([])
    }
  }, [activeTab])

  const handleSearch = async () => {
    if (!query) return
    const results = await searchSongs(query)
    setSongs(results)
    setActiveTab('search')
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Canciones</h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6 relative">
        {['popular', 'search'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative py-2 px-6 font-semibold transition-colors duration-300
              ${activeTab === tab ? 'text-black' : 'text-gray-500 hover:text-black'}
            `}
          >
            {tab === 'popular' ? 'Populares' : 'Buscar'}
            {activeTab === tab && (
              <span
                className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-t-md"
                style={{ animation: 'slideIn 0.3s forwards' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Animación CSS */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

      {/* Contenido según pestaña */}
      {activeTab === 'search' && (
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Escribe una canción o artista..."
            className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            onClick={handleSearch}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            Buscar
          </button>
        </div>
      )}

      {/* Mensaje si no hay canciones */}
      {songs.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="text-lg">
            {activeTab === 'popular'
              ? 'No hay canciones populares para mostrar'
              : 'Empieza buscando una canción o artista'}
          </p>
        </div>
      )}

      {/* Grid de canciones */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity duration-500 ${
          songs.length === 0 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}
