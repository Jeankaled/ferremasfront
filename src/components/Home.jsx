// src/components/Home.jsx
import React, { useState } from 'react';
 import '../styleInicio.css';     
 import { fetchProductos } from '../Services/api';
import ListaProductos from './ListaProductos';
import { useEffect } from 'react';


export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [productos, setProductos] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)


   useEffect(() => {
    fetchProductos()
      .then(res => setProductos(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])


  if (loading) return <p>Cargando productos…</p>
  if (error)   return <p>Error al cargar productos: {error}</p>



  function addToCart(productName) {
    setCartCount(count => count + 1);
    console.log(`Producto agregado: ${productName}`);
  }

  return (
    <>
      {/* Quiénes Somos */}
      <section id="quienes-somos" className="quienes-somos">
        <div className="container">
          <h2>¿Quiénes somos?</h2>
          <p>
            En Ferremás, ofrecemos una amplia gama de productos de ferretería y construcción de alta calidad, con entrega a domicilio y precios competitivos.
            Nuestra misión es ser el aliado perfecto para tus proyectos, brindándote soluciones rápidas y efectivas. ¡Confía en nosotros para todo lo que necesitas!
          </p>
        </div>
      </section>

      {/* Productos por Categoría */}
      <section id="productos" className="productos-categoria">
        <h1>Catálogo de Productos</h1>
        <ListaProductos productos={productos} />
      </section>

      {/* Productos con Descuento */}
      <section id="ofertas" className="productos-descuento">
        <h2>Productos con Descuento</h2>
        <div className="productos">
          <div className="producto">
            <img
              src="https://airolite.cl/cdn/shop/files/ht-2018_3-4-ae798dd8-bd66-4cd0-8e4e-6b217e7a75c6_1024x1024.jpg?v=1713885359"
              alt="Termoventilador"
            />
            <p className="producto-nombre">Termoventilador 2000W MT2025-16 Blanco</p>
            <p className="producto-precio">
              <del>$18,000</del> $14,990
            </p>
            <button
              className="agregar-btn"
              onClick={() => addToCart('Termoventilador 2000W MT2025-16 Blanco')}
            >
              Agregar al carrito
            </button>
          </div>

          <div className="producto">
            <img
              src="https://media.falabella.com/sodimacCL/900281_01/w=800,h=800,fit=pad"
              alt="Martillo Carpintero"
            />
            <p className="producto-nombre">Martillo Carpintero 16 Oz</p>
            <p className="producto-precio">
              <del>$20,000</del> $15,651
            </p>
            <button
              className="agregar-btn"
              onClick={() => addToCart('Martillo Carpintero 16 Oz')}
            >
              Agregar al carrito
            </button>
          </div>

          <div className="producto">
            <img
              src="https://www.apro.cl/cdn/shop/files/167094-1600-auto.jpg?v=1748545974"
              alt="Casco de Seguridad"
            />
            <p className="producto-nombre">Casco de Seguridad 3M</p>
            <p className="producto-precio">
              <del>$18,000</del> $14,500
            </p>
            <button
              className="agregar-btn"
              onClick={() => addToCart('Casco de Seguridad 3M')}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer id="contacto" className="site-footer">
        <div className="container">
          <p>Carrito: <span id="cart-count">{cartCount}</span> items</p>
          <p>© 2025 Ferremás – Todos los derechos reservados</p>
          <p>
            Contacto: contacto@ferremas.com | Teléfono: +56 2 1234 5678
          </p>
          <p>
            ¿Por qué comprar en Ferremás? Ofrecemos productos de calidad a precios competitivos y con entrega a domicilio.
          </p>
        </div>
      </footer>
    </>
  );
}
