import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Search from './pages/Search'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
    </div>
  )
}
