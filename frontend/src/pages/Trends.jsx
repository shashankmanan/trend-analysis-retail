import React, { useEffect } from 'react'
import "../styles/Trends.css"
import Button from '@mui/material/Button';
import ProductBox from '../components/ProductBox';
import SearchBar from '../components/SearchBar';
import { retailTags } from '../assets/trending';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Trends() {
    let trends = retailTags
    useEffect(
      () => {
        handleClick()
      } , []
    )

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const action = (
      <React.Fragment>
        <Button color="primary" size="small" onClick={handleClose}>
          Enter Manually
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  return (
    <div className='maindiv'>
    <SearchBar />

    <h1>Popular Trending Terms in Gachibowli,Hyderabad</h1>

    <div class="trending-terms">
      <ul>
        {trends.map(i => <a href={`/#/trends/${i.slug}`} ><ProductBox name={i.name}/></a>)}
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Location detected: Gachibowli,Hyderabad"
        action={action}
      />
      </ul>
    </div>
    </div>
  )
}
