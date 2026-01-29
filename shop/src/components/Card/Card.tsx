import './Card.css'
import { type Product } from '../../types/types';
import { Link } from 'react-router-dom';

const Card: React.FC<Product> = ({ id, name, category, price, imageURL }) => {
    
    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
    }
    return (
        //Nota: <Link /> no recarga la página, mantiene estado y es más rápido. Todo a comparativa de <a />.
        <Link to={`/articles/${id}`} className="text-decoration-none card border-0 h-100 text-start" style={{ cursor: 'pointer' }}>
            <div className="rounded-3 d-flex align-items-center">
                <img
                    src={imageURL}
                    className="img-fluid" 
                    alt={name}
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
            </div>

            <div className="card-body px-0 pt-3">
                <h6 className="card-title fw-bold mb-1" style={{ fontSize: '1.05rem' }}>
                    {name}
                </h6>
                <p className="card-text text-muted small mb-2">
                    {category}
                </p>
                <p className="card-text fw-bold fs-6">
                {formatPrice(price)}
                </p>
            </div>
        </Link>
    )
}

export default Card