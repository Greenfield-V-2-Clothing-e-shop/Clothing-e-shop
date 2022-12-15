import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SearchedProduct() {
  return (<Card sx={{ maxWidth: 250 }}>
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
)
}