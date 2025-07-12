import { useState, useEffect } from 'react'
import SongCard from './SongCard'
import { searchSongs } from '../lib/deezer'

/**
 * @typedef {Object} Song
 * @property {number} id - The unique identifier of the song.
 * @property {string} title - The title of the song.
 * @property {Object} artist - The artist of the song.
 * @property {string} artist.name - The name of the artist.
 * @property {Object} album - The album of the song.
 * @property {string} album.cover_medium - The URL of the album cover image.
 */

/**
 * SearchPage component displays a list of popular songs.
 * It fetches popular songs from the Deezer API on component mount
 * and renders them using the SongCard component.
 *
 * @returns {JSX.Element} The SearchPage component.
 */

export default function SearchPage() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchPopular = async () => {
      const popularSongs = await searchSongs('')
      setSongs(popularSongs)
    }
    fetchPopular()
  }, [])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Canciones Populares</h2>

      {songs.length === 0 ? (
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
          <p className="text-lg">No hay canciones populares para mostrar</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  )
}
