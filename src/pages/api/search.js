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
