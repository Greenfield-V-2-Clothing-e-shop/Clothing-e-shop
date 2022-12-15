//@ts-nocheck
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import axios,{AxiosResponse} from "axios"
import {useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

interface Products{
  brand: String,
  color:String,
  favorites:Boolean,
  imageUrl: String,
  name:String,
  price:Number,
  _id:String
  }

const Dashboard=()=>{

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
      axios.get<Products[]>('http://localhost:5000/api/clothes')
      .then((response: AxiosResponse) => {
          console.log(products);
          setProducts( response.data );
      });
  }, []);


  return (
    
    <div>
      <div>

      </div>
      {products.map(e=>{
    return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={e.imageUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {e.brand}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {e.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {e._id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${e.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )})}</div>)
}

export default Dashboard