import { Link } from 'react-router-dom'

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li className="breadcrumb-item" key={item.label}>
              <span className="breadcrumb-separator">/</span>

              {isLast || !item.to ? (
                <span className="breadcrumb-current">{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}