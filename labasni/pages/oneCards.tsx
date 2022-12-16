//@ts-nocheck
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Grid } from '@mui/material';
import { useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Link from '@mui/material/Link';

export default function OneProduct({e}){
const [open, setOpen] = React.useState(false);

const handleToggle = () => {
    setOpen(!open);

  };
  const handleClose = () => {
    setOpen(false);
  };
  return (  <Grid xs={2.5} >
        
         <Card sx={{ maxWidth: 250 } }
         
         >
      <CardMedia
        component="img"
        height="250"
        image={e.imageUrl}
        alt="Product"    
      />
      <Typography gutterBottom variant="h5" component="div" onClick={handleToggle} >
        {e.name}
       </Typography>
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          Price : ${e.price}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          Color: {e.color}
        </Typography>
      </CardContent>
      <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
    onClick={handleClose}
  >
    {open?<div>
          <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="190"
          image={e.imageUrl}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {e.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : ${e.price}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      </div>:null
      }
  </Backdrop>
      <CardActions>
        <Button size="small">💖</Button>
        <Button size="small"><Link href="/Cart">Buy</Link></Button>
      </CardActions>
    </Card>
    
    </Grid>
   
       )
   
  
}