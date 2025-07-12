/**
 * @typedef {Object} Song
 * @property {number} id - The unique identifier of the song.
 * @property {string} title - The title of the song.
 * @property {string} preview - The URL of the song's audio preview.
 * @property {Object} artist - The artist of the song.
 * @property {string} artist.name - The name of the artist.
 * @property {Object} album - The album of the song.
 * @property {string} album.cover_medium - The URL of the album cover image (medium size).
 */

/**
 * SongCard component displays a single song's information.
 * It shows the album cover, song title, artist name, and an audio preview player.
 * The component is designed to be responsive.
 *
 * @param {Object} props - The properties object.
 * @param {Song} props.song - The song object to display.
 * @returns {JSX.Element} The SongCard component.
 */
export default function SongCard({ song }) {
  return (
    <div className="border p-4 rounded-md hover:bg-gray-100 transition">
      {' '}
      {/*It looks good on both desktop and mobile, without using a fixed size.*/}
      <img
        src={song.album.cover_medium}
        alt={song.title}
        className="w-full rounded"
      />{' '}
      {/* This causes the image to scale correctly to the width of the container, ideal for mobile. */}
      <h3 className="mt-2 font-semibold">{song.title}</h3>
      <p className="text-sm text-gray-600">{song.artist.name}</p>
      <audio controls src={song.preview} className="mt-2 w-full" />{' '}
      {/* The player fits well to the width of the container.*/}
    </div>
  )
}
