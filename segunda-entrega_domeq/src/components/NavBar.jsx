import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import CartWidget from './CartWidget';
import './NavBar.css';

const labels = {
  electronics: 'Electrónicos',
  jewelery: 'Joyería',
  "men's clothing": 'Ropa de hombre',
  "women's clothing": 'Ropa de mujer'
};

export default function NavBar({ totalItems }) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(resultado => resultado.json())
      .then(setCats)
      .catch(console.error);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="TralaShop" className="logo" />
          <span className="title">TralaShop</span>
        </Link>
      </div>

      <div className="navbar-center">
        <NavLink to="/" end>Todos</NavLink>
        {cats.map(cat => (
          <NavLink key={cat} to={`/category/${cat}`}>
            {labels[cat]}
          </NavLink>
        ))}
      </div>

      <div className="navbar-right">
        <CartWidget totalItems={totalItems} />
      </div>
    </nav>
  );
}
