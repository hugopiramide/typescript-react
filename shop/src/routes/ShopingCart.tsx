import React, { useEffect, useState } from 'react'
import { type ProductResponse } from '../types/types'
import{ CartService } from '../services/ShopingCartService'

interface CartItem extends ProductResponse {
  quantity: number
}

const ShopingCart: React.FC<{ userId: number }> = ({ userId }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    CartService.getCart(userId)
      .then(data => {
        setCart(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [userId])

  const handleQuantityChange = async (productId: number, newQty: number) => {
    try {
      await CartService.updateItem(userId, productId, newQty)
      setCart(cart.map(item => 
        item.id === productId ? { ...item, quantity: newQty } : item
      ))
    } catch (error) {
      alert("No se pudo actualizar la cantidad" + error)
    }
  }

  const handleRemove = async (productId: number) => {
    try {
      await CartService.removeItem(userId, productId)
      setCart(cart.filter(item => item.id !== productId))
    } catch (error) {
      alert("Error al eliminar el producto: " + error)
    }
  }

  if (loading) return <div className="container mt-5">Cargando tu bolsa de Nike...</div>

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h3 className="fw-bold mb-4">Bolsa</h3>
          {cart.map(item => (
            <div key={item.id} className="row mb-4 border-bottom pb-3">
              <div className="col-3">
                <img src={item.imageUrl} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-9">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold mb-0">{item.name}</p>
                  <p className="fw-bold">${(item.basePrice * item.quantity).toFixed(2)}</p>
                </div>
                <p className="text-muted small">{item.category.name }</p>
                <div className="d-flex align-items-center gap-3">
                  <select 
                    className="form-select form-select-sm w-auto border-0 bg-light"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                  <button 
                    className="btn btn-sm text-muted p-0 border-0"
                    onClick={() => handleRemove(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <div className="card border-0 p-3 bg-light">
            <h4 className="fw-bold">Resumen</h4>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <span className="fw-bold h5">
                ${cart.reduce((acc, item) => acc + (item.basePrice * item.quantity), 0).toFixed(2)}
              </span>
            </div>
            <button className="btn btn-dark w-100 rounded-pill mt-4 py-3 fw-bold">
              Pagar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopingCart