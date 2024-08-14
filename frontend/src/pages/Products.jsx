import React from 'react'
import "../styles/Products.css"
import { Button } from '@mui/material'


export default function Products() {
  return (
    <div class="mainContainer">
    <h1>Search For Products</h1>
    <div class="search-bar">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <Button variant="contained" color="success">Search</Button>
    </div>
    </div>
  )
}
