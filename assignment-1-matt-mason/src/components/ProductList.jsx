import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ items, onDelete }){
  // TODO: if items is empty, show "No products available."
  if (items.length === 0) {
    return (
      <div>
        <h2 className="h5 mb-3">Products</h2>
        <div className="alert alert-info">No products available.</div>
      </div>
    )
  }
  // TODO: otherwise, map items to <ProductItem />
  return (
    <div>
      <h2 className="h5 mb-3">Products</h2>
      <div className="row row-cols-2 row-cols-md-3 g-3">
        {items.map((product) => (
          <div className="col" key={product.id}>
            <ProductItem product={product} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  )
}
