
import { useEffect, useState } from 'react';
import { fetchProductos } from '../Services/api';

export default function ListaProductos({filtro }) {
  const [productos, setProductos] = useState([]);
  const [error, setError]     = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductos()
      .then(resp => setProductos(resp.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando catálogo…</p>;
  if (error)   return <p>Error al cargar productos: {error}</p>;
  if (productos.length === 0) return <p>No hay productos disponibles.</p>;

  const listaFiltrada = filtro
    ? productos.filter(p =>
         p.nombre_producto .toLowerCase().includes(filtro.toLowerCase())
        )
    : productos;

    if (listaFiltrada.length === 0) {
        return <p>No hay productos que coincidan con el criterio de "{filtro}".</p>
    }
  return (
    <ul>
      {listaFiltrada.map(p => (
        <li key={p.id}>
          <strong>{p.nombre_producto}</strong><br/>
          Código: {p.codigo_producto}<br/>
          Marca: {p.marca_producto}<br/>
          Descripción: {p.descripcion_producto}
          
        </li>
      ))}
    </ul>
  );
}
