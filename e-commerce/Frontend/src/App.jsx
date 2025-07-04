import { useState } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Product from './pages/Product';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder'; 
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';



function App() {

  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/Place-order' element={<PlaceOrder />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </>
  )
}

export default App
