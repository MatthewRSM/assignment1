import React, { useState } from 'react'

export default function ProductForm({ onSubmit }){
  
  // TODO: Use useState to manage a model with fields:
  // { name: '', price: '', stock: '', description: '' }
  const [model, setModel] = useState({ 
    name: '', 
    price: '', 
    stock: '', 
    description: '' 
  })

  const [errors, setErrors] = useState({})

  
  // TODO: Create a validate() that sets an errors object and returns boolean:
  function validate() {
    const myErrors = {}
    
    // All fields required
    if (!model.name.trim()) myErrors.name = 'Name is required.';
    if (!model.description.trim()) myErrors.description = 'Description is required.';

    // price: number with up to 2 decimals, >= 0
    if (!model.price.trim()) myErrors.price = 'Price is required.';
    if (Number(model.price) < 0) myErrors.price = 'Price must be non-negative.';
    else if (!model.price.match(/^\d+(\.\d{1,2})?$/)) myErrors.price = 'Price must be a number with up to 2 decimals.';

    // stock: non-negative integer
    if (!model.stock.trim()) myErrors.stock = 'Stock is required.';
    else if (Number(model.stock) < 0) myErrors.stock = 'Stock must be non-negative.';
    else if (!Number.isInteger(Number(model.stock))) myErrors.stock = 'Stock must be an integer.';
    
    setErrors(myErrors)
    return Object.keys(myErrors).length === 0;
  }

  
  // TODO: On submit: console.log the model; if valid, call onSubmit(normalizedData)
  function handleSubmit(e){
    
    e.preventDefault()
    
    if (!validate()) return

    console.log('Submitting model:', model)
    
    // onSubmit({ name: ..., price: Number(...), stock: Number(...), description: ... })
    onSubmit({
      name: model.name,
      price: Number(model.price),
      stock: Number(model.stock),
      description: model.description
    })
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        {/* TODO: Controlled input (value, onChange) and inline error */}
         <input className="form-control" value={model.name} onChange={(e) => setModel({...model, name: e.target.value})} />
         {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        {/* TODO */}
        <input className="form-control" value={model.price} onChange={(e) => setModel({...model, price: e.target.value})} />
        {errors.price && <div className="text-danger">{errors.price}</div>}
        <div className="form-text">Format: 12.34</div>
      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>
        {/* TODO */}
        <input className="form-control" value={model.stock} onChange={(e) => setModel({...model, stock: e.target.value})} />
        {errors.stock && <div className="text-danger">{errors.stock}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        {/* TODO */}
        <textarea className="form-control" rows="3" value={model.description} onChange={(e) => setModel({...model, description: e.target.value})}></textarea>
        {errors.description && <div className="text-danger">{errors.description}</div>} 
      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save Product</button>
      </div>
    </form>
  )
}
