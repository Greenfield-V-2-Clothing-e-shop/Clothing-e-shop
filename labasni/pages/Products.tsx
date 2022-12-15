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
import {useEffect, useState} from 'react'


export default function Products(){
const [data,setData]=useState([])
  function getData(){
    axios.get("http://localhost:5000/api/clothes").then(res =>{
      setData(res.data)
    }).catch(err=> console.log(err))
  }
  useEffect(()=>getData(),[])

  return (
    <Grid
  container 
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  display= "flex"
  justify="center"
>
    {data.map(e=>{
    return (
      <Grid xs={2.5}>
       <Card sx={{ maxWidth: 250 }}
       >
    <CardMedia
      component="img"
      height="190"
      image={e.imageUrl}
      alt="Product"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {e.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price : ${e.price}
      </Typography>
      <Typography variant="body3" color="text.secondary">
        Color: {e.color}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">💖</Button>
      <Button size="small">Buy</Button>
    </CardActions>
  </Card>
  </Grid>
     )
  })}</Grid>)
  
}