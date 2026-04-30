import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Layout() {
  const { theme, toggle: toggleTheme } = useTheme()

  return (
    <div className="app">
      <header className="header">
        <span className="header-logo">Museo de Arte Chicago</span>
        <nav className="header-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `header-link ${isActive ? 'activa' : ''}`}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/items"
            className={({ isActive }) => `header-link ${isActive ? 'activa' : ''}`}
          >
            Colección
          </NavLink>
        </nav>
        <button
          className="header-toggle"
          onClick={toggleTheme}
          title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout