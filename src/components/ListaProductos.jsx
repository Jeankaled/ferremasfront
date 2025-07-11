// src/components/ListaProductos.jsx
import React, { useEffect, useState } from 'react';
import { fetchProductos } from '../Services/api';
import { addToCart } from '../Services/cart';

export default function ListaProductos({ producto,filtro }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);
  const [msg,      setMsg     ] = useState('');

  useEffect(() => {
    fetchProductos()
      .then(resp => setProductos(resp.data))
      .catch(err  => setError(err.message))
      .finally(  () => setLoading(false));
  }, []);

   const handleAddToCart = async (id) => {
    try {
      await addToCart(id, 1); 
      setMsg("Producto agregado al carrito 👌");
      setTimeout(() => setMsg(''), 2000);        
    } catch (e) {
      console.error('Error al añadir:', e.response?.data);
      setError('No se pudo agregar: ' + e.message);
    }
  };

  if (loading) return <p>Cargando catálogo…</p>;
  if (error)   return <p>Error al cargar productos: {error}</p>;

  // Filtrado
  const listaFiltrada = filtro
    ? productos.filter(producto =>
        producto.nombre_producto
          .toLowerCase()
          .includes(filtro.toLowerCase())
      )
    : productos;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {msg && <div className='alert-success'>{msg}</div>}
      {error && <div className='alert-error'>{error}</div>}

      {listaFiltrada.map(producto => {
        // Construye la URL absoluta de la imagen:
        const imagenUrl = producto.imagen
          ? (producto.imagen.startsWith('http')
              ? producto.imagen
              : `http://localhost:8000${producto.imagen_url}`)
          : null;

        return (
          <div className='lista-productos'>
            
            <ol key={producto.id} style={{ marginBottom: '2rem' }}>
              {imagenUrl && (
                <img
                  src={imagenUrl}
                  alt={producto.nombre_producto}
                  style={{
                    width: '150px',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}
                />
              )}
              <strong>{producto.nombre_producto}</strong><br/>
              Código: {producto.codigo_producto}<br/>
              Marca: {producto.marca_producto}<br/>
              Descripción: {producto.descripcion_producto}

              <button
               onClick={() =>{
                handleAddToCart(producto.id);
              } } 
              >
                agregar al carrito
              </button>


            </ol>
          </div>
        );
      })}
    </ul>
  );
}
