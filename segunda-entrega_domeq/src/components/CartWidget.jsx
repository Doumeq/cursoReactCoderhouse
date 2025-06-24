import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

export default function CartWidget({ totalItems }) {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      {totalItems > 0 && (
        <span className="badge">{totalItems}</span>
      )}
    </div>
  );
}
