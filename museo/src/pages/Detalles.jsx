import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArtworkById } from '../museoAPI'

function ItemDetalle() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getArtworkById(id)
      .then(setItem)
      .catch(() => setError('No se pudo cargar la obra.'))
  }, [id])

  if (error) return <p className="status-msg error">{error}</p>
  if (!item) return <p className="status-msg">Cargando...</p>

  const imageUrl = item.image_id
    ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
    : null

  return (
  <div className="detalle-page">
    <Link to="/items" className="btn-back"> Volver al listado</Link>
    <div className="detalle-content">
        {imageUrl && (
            <div className="detalle-img-wrapper">
                <img src={imageUrl} alt={item.title} />
            </div>
        )}
        
        <div className="detalle-info">
            <h2>{item.title}</h2>

            <div className="detalle-meta">
                {item.artist_title && (
                <div className="detalle-field">
                    <span className="detalle-label">Autor</span>
                    <span className="detalle-value">{item.artist_title}</span>
                </div>
                )}
                {item.date_display && (
                <div className="detalle-field">
                    <span className="detalle-label">Fecha</span>
                    <span className="detalle-value">{item.date_display}</span>
                </div>
                )}
            </div>
        </div>
    </div>
</div>
  )
}

export default ItemDetalle
