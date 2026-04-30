import PropTypes from 'prop-types'

export default function CardDetalles({ title, artistTitle, dateDisplay }) {
  return (
    <div className="detalle-info">
      <h2>{title}</h2>

      <div className="detalle-meta">
        {artistTitle && (
          <div className="detalle-field">
            <span className="detalle-label">Autor</span>
            <span className="detalle-value">{artistTitle}</span>
          </div>
        )}
        {dateDisplay && (
          <div className="detalle-field">
            <span className="detalle-label">Fecha</span>
            <span className="detalle-value">{dateDisplay}</span>
          </div>
        )}
      </div>
    </div>
  )
}

CardDetalles.propTypes = {
  title: PropTypes.string.isRequired,
  artistTitle: PropTypes.string,
  dateDisplay: PropTypes.string,
}
