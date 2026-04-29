import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArtworkById } from '../museoAPI'

function ItemDetalle() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getArtworkById(id).then(setItem)
  }, [id])

  if (!item) return <p>Cargando...</p>

  const imageUrl = item.image_id
    ? `https://www.artic.edu/iiif/2/${item.image_id}/full/400,/0/default.jpg`
    : ''

  return (
    <div>
      <h2>{item.title}</h2>

      {imageUrl && <img src={imageUrl} alt={item.title} />}

      <p><strong>Autor:</strong> {item.artist_title}</p>
      <p><strong>Fecha:</strong> {item.date_display}</p>
    </div>
  )
}

export default ItemDetalle