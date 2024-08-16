import React from 'react'
import { Button } from '@mui/material'

export default function Card({supplierId,name,desc,inStock,isProduct}) {

  return (
    <div class="col-md-4 seller-card">
    <div class="card">
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="rating">Desc : {desc}</p>
                {isProduct ? <>{inStock? <Button color="success">In Stock</Button> : <a href={`/#/products/${supplierId}`}><Button color="error">Order</Button> </a>} <a href={`/#/products/${supplierId}`}><Button>Suppliers</Button></a></>: <></>}
    </div>
    </div>
    </div>
  )
}
