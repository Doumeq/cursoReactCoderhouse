import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`} className="detail-link">
        Ver detalle
      </Link>
    </div>
  );
}
