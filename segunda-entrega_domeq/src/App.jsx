import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';

const ItemListContainer = lazy(() => import('./containers/ItemListContainer'));
const ItemDetailContainer = lazy(() => import('./containers/ItemDetailContainer'));

function App() {
  const [totalItems, setTotalItems] = useState(0);
  const handleAddToCart = (prod) => {
    setTotalItems(prev => prev + prod);
  };

  return (
    <BrowserRouter>
      <NavBar totalItems={totalItems} />
      <div className="app-container">
        <Suspense fallback={<p>Cargando vista…</p>}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer onAdd={handleAddToCart} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer onAdd={handleAddToCart} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Documentacion tecnic
//uso de lazy https://react.dev/reference/react/lazy
//uso de suspense https://react.dev/reference/react/Suspense
