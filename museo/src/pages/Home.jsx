import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Museo de Chicago</h1>
      <Link to="/items">Ver obras</Link>
    </div>
  )
}

export default Home