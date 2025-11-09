import React from 'react';
import Card from './components/Card';
import product from './product.json';

const App = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center min-h-screen">
      {product.map((i) => (
        <Card
          key={i.id}
          title={i.product_name}
          image={i.product_img}
          price={i.price}
        />
      ))}
    </div>
  );
};

export default App;
