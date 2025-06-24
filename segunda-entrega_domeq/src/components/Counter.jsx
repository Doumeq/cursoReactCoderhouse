import { useState } from 'react';

export default function Counter({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  return (
    <div className="counter">
      <button onClick={() => setCount(contador => Math.max(contador - 1, 1))}>–</button>
      <span>{count}</span>
      <button onClick={() => setCount(contador => Math.min(contador + 1, stock))}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}
