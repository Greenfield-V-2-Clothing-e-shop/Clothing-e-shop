import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Products(){
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="250"
    image="https://underarmour.scene7.com/is/image/Underarmour/PS1345317-001_HF?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Mens UA Meridian Short Sleeve
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Price : $60
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Favorite</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
    </div>
  )
}