import React from 'react'
import "../styles/TrendBasedProducts.css"
import SearchBar from '../components/SearchBar'
import { useParams } from 'react-router-dom'
import {products} from '../assets/Products.js'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../components/Card'

export default function TrendBasedProduct() {
  const { trendname } = useParams();
const [relevantProducts, setRelevantProducts] = useState([]);

useEffect(() => {
  
  let releProducts = products.filter((i) => i.trend === trendname); 
  setRelevantProducts(releProducts); 
}, [trendname]); 

  return (
    <div class="maindiv">
    <SearchBar />

    <h1>Products For {trendname}<span id="term"></span></h1>

    <div class="product-gallery container">
        <div class="row" id="product-list">
           {relevantProducts.map( (i) => <Card name={i.name} inStock = {i.inStock} desc={i.desc} supplierId = {i.supplierId} isProduct={true} />)}
        </div>
      </div>
      </div>
  )
}
