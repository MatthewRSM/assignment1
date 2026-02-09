import React from 'react'

export default function ProductItem({ product, onDelete }){
  // TODO: render a Bootstrap card with product details and a Delete button
  return (
    <div className="border rounded p-3">
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Stock: {product.stock}</p>
      <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  )
}
