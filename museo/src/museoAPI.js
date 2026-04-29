const BASE_URL = 'https://api.artic.edu/api/v1/artworks'

export const getArtworks = async () => {
  const res = await fetch(`${BASE_URL}?limit=12`)
  const data = await res.json()
  return data.data
}

export const getArtworkById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  const data = await res.json()
  return data.data
}