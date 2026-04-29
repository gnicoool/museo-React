import { useEffect, useState } from 'react'
import { getArtworks } from '../museoAPI'
import Card from '../components/Card'

function Items() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getArtworks().then(setItems)
  }, [])

  return (
    <div>
      <h2>Listado de obras</h2>

      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Items