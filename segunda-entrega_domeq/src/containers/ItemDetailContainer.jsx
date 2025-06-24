import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

export default function ItemDetailContainer({ onAdd }) {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then(resultado => resultado.ok ? resultado.json() : Promise.reject(resultado.status))
      .then(setProduct)
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle…</p>;
  if (error) return <p>Error al cargar detalle</p>;

  return <ItemDetail product={product} onAdd={onAdd} />;
}
