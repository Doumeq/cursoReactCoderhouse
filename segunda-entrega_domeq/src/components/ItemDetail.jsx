import React from 'react';
import Counter from './Counter';
import './ItemDetail.css';

export default function ItemDetail({ product, onAdd }) {
  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="desc">{product.description}</p>
        <Counter
          stock={product.rating?.count || 10}
          initial={1}
          onAdd={prod => onAdd(prod)}   
        />
      </div>
    </div>
  );
}
