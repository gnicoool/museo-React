import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const FEATURED_IDS = [27992, 28560, 14598, 16487, 111628]

export default function Home() {
  const [obras, setObras] = useState([])

  useEffect(() => {
    Promise.all(
      FEATURED_IDS.map(id =>
        fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,image_id`)
          .then(r => r.json())
          .then(d => d.data)
      )
    ).then(setObras).catch(console.error)
  }, [])

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <p className="home-eyebrow">Art Institute of Chicago</p>
        <h1 className="home-title">Bienvenido al<br />Museo de Chicago</h1>
        <p className="home-sub">
          Tienes muchas obras por descubrir en la coleccion del Museo de Arte
        </p>
        <Link to="/items" className="btn-primary home-cta">
          Ver todas las obras
        </Link>
      </section>

      {/* Galería de destacadas */}
      <section className="home-gallery">
        <h2 className="home-gallery-title">Obras destacadas</h2>
        <div className="home-gallery-grid">
          {obras.map(obra => (
            obra?.image_id && (
              <Link
                key={obra.id}
                to={`/items/${obra.id}`}
                className="home-gallery-card"
              >
                <img
                  src={`https://www.artic.edu/iiif/2/${obra.image_id}/full/400,/0/default.jpg`}
                  alt={obra.title}
                />
                <div className="home-gallery-overlay">
                  <p className="home-gallery-obra-title">{obra.title}</p>
                  {obra.artist_title && (
                    <p className="home-gallery-artist">{obra.artist_title}</p>
                  )}
                </div>
              </Link>
            )
          ))}
        </div>
      </section>
    </div>
  )
}