/**
 * Searches for songs using the application's API.
 * If a query is provided, it searches for songs matching the query.
 * If no query is provided, it fetches a list of popular songs.
 *
 * @async
 * @param {string} [query=''] - The search query string. If empty, popular songs are returned.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of song objects.
 * Returns an empty array if an error occurs.
 */
export async function searchSongs(query) {
  try {
    const url = query
      ? `/api/search?q=${encodeURIComponent(query)}`
      : `/api/search`
    const res = await fetch(url)
    if (!res.ok) throw new Error('Error en la búsqueda')
    const songs = await res.json()
    return songs
  } catch (error) {
    console.error('Error en searchSongs:', error)
    return []
  }
}
