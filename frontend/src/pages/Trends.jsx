import React from 'react'
import "../styles/Trends.css"
import Button from '@mui/material/Button';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ProductBox from '../components/ProductBox';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { retailTags } from '../assets/trending';

export default function Trends() {
    let trends = retailTags

  return (
    <div className='maindiv'>
    <SearchBar />

    <h1>Popular Trending Terms in your area</h1>

    <div class="trending-terms">
      <ul>
        {trends.map(i => <a href={`/#/trends/${i.slug}`} ><ProductBox name={i.name}/></a>)}
      </ul>
    </div>
    </div>
  )
}
