import React from 'react'
import "../styles/Products.css"
import { Button } from '@mui/material'
import SearchBar from '../components/SearchBar'
import { useState, useEffect } from 'react'
import { products } from '../assets/Products'
import CardLayout from '../components/CardLayout'
import Card from '../components/Card'

export default function Products() {
  return (
    <div class="mainContainer">
    <h1>Search For Products</h1>
    <SearchBar color="green"/> 
    <div class="product-gallery container">
        <div class="row" id="product-list">
           {products.map( (i) => <Card name={i.name} desc={i.desc} supplierId = {i.supplierId} inStock = {i.inStock} isProduct={true} />)}
        </div>
      </div>
    </div>
  )
}

