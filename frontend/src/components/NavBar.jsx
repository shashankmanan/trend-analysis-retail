import React from 'react'
import logoNav from "../assets/logo-nav.png"

export default function NavBar() {
  return (
    <div>
        <header style={{textAlign:'center'}}>
            <img src={logoNav} alt="" style={{height:"50px"}}/>
        </header>
    <nav class="navbar navbar-expand-lg bg-body-primary ">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" style={{fontSize:"large"}} aria-current="page" href="/">Home</a>
            </li>  
            <li class="nav-item">
                <a class="nav-link active" style={{fontSize:"large"}} aria-current="page" href="/#/trends"> Trending Terms</a>
                </li>   
            <li class="nav-item">
                <a class="nav-link active" style={{fontSize:"large"}} aria-current="page" href="/#/products"> Search For Products</a>
                </li>     
                      
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}
