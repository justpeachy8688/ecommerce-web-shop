import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import './App.css';
import { commerce } from './lib/commerce';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="entire-app">
      <Navbar />
      <Products products={products}/>
    </div>
  )
}

export default App
