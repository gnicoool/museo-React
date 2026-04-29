import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getArtworks } from '../museoAPI'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import '../museo.css'

function Items() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getArtworks()
      .then(setItems)
      .catch(() => setError('No se pudo cargar las obras.'))
      .finally(() => setLoading(false))
  }, [])

  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  const goToRandom = () => {
    if (items.length === 0) return
    const random = items[Math.floor(Math.random() * items.length)]
    navigate(`/items/${random.id}`)
  }

  if (loading) return <p className="status-msg">Cargando obras...</p>
  if (error) return <p className="status-msg error">{error}</p>

  return (
    <div className="items-page">
      <div className="items-header">
        <Link to="/" className="btn-back"> Volver a home </Link>
        <h2>Colección</h2>
        <div className="items-controls">
          <input
            type="text"
            placeholder="Buscar ... "
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="search-input"
          />
          <button className="btn-secondary" onClick={goToRandom}>
            Ver obra aleatoria  
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="status-msg">No se encontraron resultados.</p>
      ) : (
        <div className="items-grid">
          {filtered.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Items
