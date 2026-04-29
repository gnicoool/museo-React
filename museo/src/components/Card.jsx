import { Link } from 'react-router-dom'
import './Card.css'

function Card({ item }) {
  const imageUrl = item.image_id
    ? `https://www.artic.edu/iiif/2/${item.image_id}/full/400,/0/default.jpg`
    : null

  return (
    <div className="card">
      <div className="card-img-wrapper">
        {imageUrl
          ? <img src={imageUrl} alt={item.title} />
          : <span className="card-no-image">Sin imagen</span>
        }
      </div>
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <Link to={`/items/${item.id}`} className="card-link">Ver detalles</Link>
      </div>
    </div>
  )
}

export default Card
