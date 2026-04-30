import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-centered">
      <h1 className="page-centered-title">404 - Página no encontrada</h1>
      <p className="home-sub">
        La página que estás buscando no existe.
      </p>
      <Link to="/" className="btn-primary home-cta">
        Volver al inicio
      </Link>
    </div>
  )
}