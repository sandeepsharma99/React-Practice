import React from 'react'
import Card from "./components/Card"
import products from "./product.json";

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', padding: '20px' }}>
      {products.map((product) => (
        <Card
          key={product.id}
          product_name={product.product_name}
          description={product.description}
          price={product.price}
          image={product.product_img}
          category={product.category}
        />
      ))}
    </div>


  )
}

export default App
