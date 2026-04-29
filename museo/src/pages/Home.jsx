import { Link } from 'react-router-dom'
import '../museo.css'

function Home() {
  return (
    <div className="home">
      <h1>Museo de Chicago</h1>
      <Link to="/items" className="btn-primary">Ver colección</Link>
    </div>
  )
}

export default Home
