import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NavBar from './components/NavBar'
import Trends from "./pages/Trends"
import TrendBasedProduct from "./pages/TrendBasedProduct"

export default function App() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/trends/:trendid" element = {<TrendBasedProduct />}/>
            <Route path="/trends" element = {<Trends />}/>
            
        </Routes>
    </div>
  )
}
