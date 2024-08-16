import React from 'react'
import Button from '@mui/material/Button';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

export default function SearchBar({color}) {
  return (
    <div class="search-bar">
    <input class="form-control me-2" type="search" placeholder={ color === "green" ? "Search Product" : "Search location"  } aria-label="Search" />
    {
      color === "green" ? <Button variant="contained" color="success">Search</Button> :     <Button variant="contained" endIcon={<EditLocationAltIcon fontSize='large'/>}>
      Search
    </Button>
    }
</div>
  )
}
