import React from 'react'
import Nabvar from './Components/Navbar/Nabvar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import SingleProduct from './Components/SingleProducts/SingleProduct';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nabvar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
