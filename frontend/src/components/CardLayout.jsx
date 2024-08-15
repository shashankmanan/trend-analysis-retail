import React from 'react'
import Card from './Card'
import "../styles/CardLayout.css"
import SupplierCard from './SupplierCard'

export default function CardLayout({arr,isProduct}) {
  console.log(arr)
  return (
    <div class="product-gallery container">
        <div class="row" id="product-list">
          { 
          
            isProduct?
            arr.map( i => <Card id = {i.supplierId} name={i.name} desc = {i.desc} isProduct={isProduct}/>) :
            arr.map( i => <SupplierCard name={i.name} desc = {i.desc} environmentalRating={i.environmentalRating}/>)
          }
        </div>
    </div>
  )
}
