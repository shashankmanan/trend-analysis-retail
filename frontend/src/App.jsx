import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NavBar from './components/NavBar'
import Trends from "./pages/Trends"
import TrendBasedProduct from "./pages/TrendBasedProduct"
import Supplier from './pages/Supplier'

export default function App() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/trends/:trendname" element = {<TrendBasedProduct />}/>
            <Route path="/trends" element = {<Trends />}/>
            <Route path="/products/:supplierId" element={<Supplier />}/>
        </Routes>
    </div>
  )
}
