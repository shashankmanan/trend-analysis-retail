import React from 'react'
import "../styles/Products.css"
import { Button } from '@mui/material'
import SearchBar from '../components/SearchBar'
import { useState, useEffect } from 'react'
import { products } from '../assets/Products'
import CardLayout from '../components/CardLayout'
import Card from '../components/Card'
import EditLocationAlt from '@mui/icons-material/EditLocationAlt'

export default function Products() {
  const [prod,setProd] = useState(products)
  const changeHandler = (e) => {
    console.log(e.target.value)
    let temp = products.filter((i) => i.name === parseInt(e.target.value));
    setProd(temp)
  }
 
  return (
    <div class="mainContainer">
    <h1>Search For Products</h1>
    <div class="search-bar">
    <input class="form-control me-2" onChange={(e) => changeHandler(e)}type="search" placeholder={ "Search Product" } aria-label="Search" />
    <Button variant="contained" color="success">Search</Button> 
    </div>
    <div class="product-gallery container">
        <div class="row" id="product-list">
           {prod.map( (i) => <Card name={i.name} desc={i.desc} supplierId = {i.supplierId} inStock = {i.inStock} isProduct={true} />)}
        </div>
      </div>
    </div>
  )
}

