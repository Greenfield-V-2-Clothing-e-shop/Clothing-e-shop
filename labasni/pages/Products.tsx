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
import Backdrop from '@mui/material/Backdrop';
import Link from '@mui/material/Link';
import OneProduct from './oneCards';

export default function Products(){
const [open, setOpen] = React.useState(false);
const [data,setData]=useState([])
const [post,setpost]=useState([])
  function getData(){
    axios.get("http://localhost:5000/api/clothes").then(res =>{
      setData(res.data)
    }).catch(err=> console.log(err))
  }
  useEffect(()=>getData(),[])
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);

  };

  return (
    <Grid
  container 
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  display= "flex"
  justify="center"
>
    {data.map((e,i)=>{
    
    return (
      <OneProduct e={e} key={i}/>
 
     )
  })}</Grid>)
  
}