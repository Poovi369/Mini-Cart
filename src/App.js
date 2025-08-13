import React from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'
import Header from './components/Header'
import{CartProvider} from './context/CartContext'
import Footer from './components/Footer';

function AppContent(){
  const location = useLocation();
  return(
    <>
      <Header/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element = {<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      {location.pathname === '/' && <Footer/>}
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <Router>
      <AppContent/>
      </Router>
    </CartProvider>
  )
}

export default App