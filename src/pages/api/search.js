/**
 * API Route Handler for Song Search using Deezer API
 *
 * This handler responds to GET requests and performs two behaviors based on the query parameter `q`:
 *
 * - If `q` is **not provided**, it fetches a list of popular songs from Deezer (`/chart` endpoint).
 * - If `q` **is provided**, it performs a search on the Deezer API (`/search?q=`) using the given query.
 *
 * Responses:
 * - `200 OK`: Returns an array of song objects from Deezer.
 * - `500 Internal Server Error`: Returns an error message if something goes wrong.
 *
 * @async
 * @function
 * @param {import('next').NextApiRequest} req - The incoming API request object, expected to contain a `q` query string parameter.
 * @param {import('next').NextApiResponse} res - The outgoing API response object.
 * @returns {Promise<void>} Sends a JSON response containing either a list of songs or an error message.
 */

export default async function handler(req, res) {
  const { q } = req.query

  try {
    if (!q) {
      // Si no hay query, devuelve canciones populares
      const response = await fetch('https://api.deezer.com/chart')
      const data = await response.json()
      return res.status(200).json(data.tracks.data) // canciones populares
    }

    // Si hay query, busca canciones
    const response = await fetch(
      `https://api.deezer.com/search?q=${encodeURIComponent(q)}`,
    )
    const data = await response.json()
    res.status(200).json(data.data)
  } catch (error) {
    console.error('Error al buscar canciones en Deezer:', error)
    res.status(500).json({ error: 'Error al buscar canciones' })
  }
}
