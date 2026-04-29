import { Link } from 'react-router-dom'
import './Card.css'

function Card({ item }) {
  const imageUrl = item.image_id
    ? `https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`
    : ''

  return (
    <div className="card">
      <h3>{item.title}</h3>
      {imageUrl && <img src={imageUrl} alt={item.title} />}
      <Link to={`/items/${item.id}`}>Ver detalles</Link>
    </div>
  )
}

export default Card