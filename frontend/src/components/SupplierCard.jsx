import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SupplierCard({ name, desc, environmentalRating }) {
  const [color, setColor] = useState('white');
  const [quant,setQuant] = useState(0)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const quantHandler = (operation) => {
    console.log(operation)
    if(operation === '+')
        setQuant(quant + 1)
    else
      setQuant(quant == 0 ? 0 : quant - 1)
  }
  const clickHandler = () =>{
    alert("placed order")
  }
  useEffect(() => {
    switch (environmentalRating) {
      case 5:
        setColor('lightgreen');
        break;
      case 4:
        setColor('aqua');
        break;
      case 3:
        setColor('yellow');
        break;
      case 2:
        setColor('orange');
        break;
      case 1:
        setColor('red');
        break;
      default:
        setColor('white');
    }
  }, [environmentalRating]);

  return (
    <div className="col-md-4 seller-card">
      <div className="card">
        <div className="card-body" style={{ backgroundColor: color }}>
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">Environmental Rating: {environmentalRating}</h6>
          <ul>
            {desc.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
          
          <div style={{border:"1px solid black" , width:"150px"}}><Button onClick={() => quantHandler('+')}>+</Button>{quant}<Button onClick={() => quantHandler('-')}>-</Button></div>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Placed Order!  
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ordered from {name} <br />
            Quantity : {quant}
    </Typography>
  </Box>
</Modal>
        <Button onClick={handleOpen}>ORDER</Button>
        </div>
      </div>
    </div>
  );
}