import React from 'react'
import { Products, Navbar } from './components';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="entire-app">
      <Navbar />
      <Products />
    </div>
  )
}

export default App
