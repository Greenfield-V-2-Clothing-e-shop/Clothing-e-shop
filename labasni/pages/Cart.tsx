import { Autocomplete } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '@mui/material/Button';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Cart() {


  return (
   <div>
      <div className="py-2">
      <Button>
        <Link href="/Products">back to products</Link>
        </Button>
      </div>
      <Card sx={{ maxWidth: 250 }}>
  <CardMedia
    component="img"
    height="190"
    image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/417c644b-dbb4-4130-842e-ae6d2fffd30f/chaussure-de-football-a-crampons-pour-terrain-sec-gripknit-phantom-gx-elite-fg-C0D3tn.png"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Nike Gripknit Phantom GX Elite FG
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Price : $259.99
    </Typography>
  </CardContent>
  <CardActions>
  </CardActions>
</Card>
<div className="card p-5">
          <Button variant="contained" endIcon={<BeenhereIcon />}>
        <Link href="/Product" >buy</Link>
        </Button>
          </div>
</div>
  )
}
{/* <div className="md:col-span-2">
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/417c644b-dbb4-4130-842e-ae6d2fffd30f/chaussure-de-football-a-crampons-pour-terrain-sec-gripknit-phantom-gx-elite-fg-C0D3tn.png"
            width={Autocomplete}
            height={500}/>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">Nike Gripknit Phantom GX Elite FG</h1>
            </li>
            <li>Brand: nike</li>
            <li>price: 259.99</li>
            <li>Color: pink</li>
            <li>size: 41,42,43,44</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
          <Button variant="contained" endIcon={<BeenhereIcon />}>
        <Link href="/Product" >buy</Link>
        </Button>
          </div>
        </div>
      </div> */}