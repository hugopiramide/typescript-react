import { useState, useEffect, useRef } from 'react'
import { Search, XCircleFill } from 'react-bootstrap-icons'
import { products } from '../../products/data'
import { Link } from 'react-router-dom'

const ProductSearch = () => {

  const [query, setQuery] = useState<string>("")
  const [itsOpen, setItsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null) 

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const manejarClickFuera = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setItsOpen(false)
      }
    }

    document.addEventListener('mousedown', manejarClickFuera)

    return () => {
      document.removeEventListener('mousedown', manejarClickFuera)
    }
  }, [])

  const handleClear = () => {
    setQuery("")
  }

  return (
    <div className="container mt-4" ref={containerRef} style={{ maxWidth: '500px' }}>
      <div className="position-relative mb-4">
        <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
          <Search className="text-muted" size={18} />
        </span>
        <input
          type="text"
          className="form-control border-0 bg-light rounded-pill ps-5 py-2"
          placeholder="Search Products..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setItsOpen(true)
          }}
        />
        {query.length > 0 && (
          <button
            onClick={handleClear}
            className="btn btn-link position-absolute end-0 translate-middle-y pe-3 text-muted border-0 shadow-none"
            style={{ textDecoration: 'none', top: 19 }}
          >
            <XCircleFill size={16}/>
          </button>
        )}
      </div>

      { query.length > 0 && itsOpen && (
        <ul className="list-group position-absolute shadow-lg mt-2" style={{ zIndex: 1050, maxHeight: '300px', overflowY: 'auto' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                onClick={handleClear}
                to={`/articles/${product.id}`} 
                className='text-decoration-none'
                >
              <li key={product.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <small style={{ marginRight: 20}}>{product.name}</small>
                <span className="badge bg-light text-dark border rounded-pill">{product.category}</span>
              </li>
              </Link>
            ))
          ) : (
            <li className="list-group-item text-muted small">No results</li>
          )}
        </ul>
      ) }
    </div>
  )
}

export default ProductSearch