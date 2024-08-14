import React from 'react'
import "../styles/Trends.css"
import Button from '@mui/material/Button';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ProductBox from '../components/ProductBox';
import { useState } from 'react';

export default function Trends() {
    let [trends,setTrends] = useState([
      {"id": 1, "name": "AI"},
      {"id": 2, "name": "MachineLearning"},
      {"id": 3, "name": "Blockchain"},
      {"id": 4, "name": "Cryptocurrency"},
      {"id": 5, "name": "Web3"},
      {"id": 6, "name": "ClimateChange"},
      {"id": 7, "name": "SustainableFashion"},
      {"id": 8, "name": "Metaverse"},
      {"id": 9, "name": "QuantumComputing"}
  ]
  )
    const showProducts = () => {
        console.log("click")
    }
  return (
    <div className='maindiv'>
    <div class="search-bar">
        <input class="form-control me-2" type="search" placeholder="Search Location" aria-label="Search" />
        <Button variant="contained" endIcon={<EditLocationAltIcon fontSize='large'/>}>
        Search
      </Button>
    </div>

    <h1>Popular Trending Terms</h1>

    <div class="trending-terms">
      <ul>
        {trends.map(i => <a href={`/#/trends/${i.id}`}><ProductBox name={i.name}/></a>)}
      </ul>
    </div>
    </div>
  )
}
