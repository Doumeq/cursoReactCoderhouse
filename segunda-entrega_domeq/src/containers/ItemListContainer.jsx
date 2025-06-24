import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

export default function ItemListContainer() {
  const { catId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const url = catId
      ? `https://fakestoreapi.com/products/category/${catId}`
      : 'https://fakestoreapi.com/products';

    fetch(url)
      .then(resultado => resultado.ok ? resultado.json() : Promise.reject(resultado.status))
      .then(setProducts)
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [catId]);

  if (loading) return <p>Cargando…</p>;
  if (error) return <p>Error al cargar productos</p>;

  return <ItemList items={products} />;
}
