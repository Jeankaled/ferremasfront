// src/components/Home.jsx
import React, { useState } from 'react';
import '../styleInicio.css';         // ajusta la ruta si lo pones en otro sitio

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

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
        <h2>Productos por Categoría</h2>
        <div className="productos">
          <div className="producto">
            <img
              src="https://ferrobal.cl/wp-content/uploads/2023/10/clavo-4-1kg.png"
              alt="Clavo Corriente"
            />
            <p className="producto-nombre">Clavo Corriente 4", bolsa 1kg</p>
            <p className="producto-precio">$1,890</p>
            <button
              className="agregar-btn"
              onClick={() => addToCart('Clavo Corriente 4", bolsa 1kg')}
            >
              Agregar al carrito
            </button>
          </div>

          <div className="producto">
            <img
              src="https://rgm.vtexassets.com/arquivos/ids/156235-800-auto?v=638554617786370000&width=800&height=auto&aspect=true"
              alt="Martillo Carpintero"
            />
            <p className="producto-nombre">Martillo Carpintero 16 Oz Uyustools</p>
            <p className="producto-precio">$8,490</p>
            <button
              className="agregar-btn"
              onClick={() => addToCart('Martillo Carpintero 16 Oz Uyustools')}
            >
              Agregar al carrito
            </button>
          </div>

          <div className="producto">
            <img
              src="https://construmartcl.vtexassets.com/arquivos/ids/230441-800-auto?v=638811980566570000&width=800&height=auto&aspect=true"
              alt="Destornillador"
            />
            <p className="producto-nombre">Destornillador Punta Paleta 5 x 75 mm</p>
            <p className="producto-precio">$3,407</p>
            <button
              className="agregar-btn"
              onClick={() => addToCart('Destornillador Punta Paleta 5 x 75 mm')}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
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
