import React from 'react'
import Products from '../styles/Products.css'
import SearchBar from '../components/SearchBar'
import { useState, useEffect } from 'react'
import { Products_arr } from '../assets/Products'
import CardLayout from '../components/CardLayout'
import { suppliers } from '../assets/Suppliers'
import { useParams } from 'react-router-dom'

export default function Supplier() {
    const [suppliersArr, setSuppliersArr] = useState([]);
    const { supplierId } = useParams();
  
    useEffect(() => {
        let temp = suppliers.filter((i) => i.id === parseInt(supplierId));
        console.log(supplierId)
        console.log(temp); 
        console.log(suppliers)
        setSuppliersArr(temp);
      }, [supplierId]);
  return (
    <div class="mainContainer">
    <h1>Suppliers</h1>
    <SearchBar color="green"/> 
    <CardLayout arr = {suppliersArr} isProduct={false}/>
    </div>
  )
}

