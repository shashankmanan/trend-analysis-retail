import React from 'react'
import "../styles/TrendBasedProducts.css"

export default function TrendBasedProduct({name}) {
  return (
    <div class="maindiv">
    <div class="search-bar">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    <h1>Products For <span id="term"></span></h1>

    <div class="product-gallery container">
        <div class="row" id="product-list">
        </div>
      </div>
      </div>
  )
}
