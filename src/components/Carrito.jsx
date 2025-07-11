// src/components/Carrito.jsx
import React, { useState, useEffect } from 'react'
import {
  getCart,
  removeFromCart,
  checkout
} from '../Services/cart'

export default function Carrito() {
  const [cart,    setCart]    = useState({ items: [], total: 0 })
  const [error,  setError]   = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = () => {
    setLoading(true)
    getCart()
      .then(res => {
        setCart({
          items: res.data.items  || [],
          total: res.data.total  || 0
        })
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  const handleRemove = (productoId) => {
    removeFromCart(productoId)
      .then(fetchCart)
      .catch(err => setError(err.message))
  }

  const handleCheckout = () => {
    checkout().catch(err => setError(err.message))
  }

  if (loading) return <p>Cargando carrito…</p>
  if (error)   return <div className="error">Error: {error}</div>

  return (
    <div className="carrito-page">
      <h2>Mi Carrito</h2>

      {cart.items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.items.map(item => (
            <li key={item.id}>
              <strong>{item.producto.nombre_producto}</strong> x {item.cantidad} = ${item.subtotal}
              <button onClick={() => handleRemove(item.producto.id)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${cart.total}</h3>
      <button onClick={handleCheckout}>
        Pagar con WebPay
      </button>
    </div>
  )
}
