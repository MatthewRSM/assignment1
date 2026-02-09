import React, { useMemo, useState, useEffect } from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

export default function App(){
  // TODO: start with [] and consider hydrating from storage once storage helpers are implemented
  const [items, setItems] = useState([])

  // Hydrating from storage
  useEffect(() => {
    const getProducts = localStorage.getItem('a1_products');
    if (getProducts) setItems(JSON.parse(getProducts));
  }, [items])

  // Optional: toggle between views; start on 'list'
  const [view, setView] = useState('list') // 'list' | 'form'

  // TODO: compute total from items
  const total = useMemo(() => {
    let sum = 0
    for (const item of items) {
      sum += item.price * item.stock
    }
    return sum.toFixed(2)
  }, [items])
  
  function handleCreate(data){
    // TODO: validate (in the form), persist to storage, then update state
    // Example flow (do not copy/paste): create id, add to storage, reload items
    // setItems(...)
    // setView('list')
    const newProduct = { ...data, id: Date.now() }
    const updatedProducts = [...items, newProduct]
    localStorage.setItem('a1_products', JSON.stringify(updatedProducts))
    setItems(updatedProducts)
  }

  function handleDelete(id){
    // TODO: remove from storage, then update state
    const updatedProducts = items.filter(item => item.id !== id)
    localStorage.setItem('a1_products', JSON.stringify(updatedProducts))
    setItems(updatedProducts)
  }

  return (
    <div className="container py-3">
      <header className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3 m-0">My Web Shop</h1>
        <div className="btn-group">
          <button className={`btn btn-sm btn-${view==='list'?'primary':'outline-primary'}`} onClick={() => setView('list')}>
            Product List ({total})
          </button>
          <button className={`btn btn-sm btn-${view==='form'?'primary':'outline-primary'}`} onClick={() => setView('form')}>
            Add Product
          </button>
        </div>
      </header>

      {view === 'form' ? (
        <ProductForm onSubmit={handleCreate} />
      ) : (
        <ProductList items={items} onDelete={handleDelete} />
      )}
    </div>
  )
}
