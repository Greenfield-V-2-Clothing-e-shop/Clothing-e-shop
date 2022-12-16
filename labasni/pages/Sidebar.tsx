// @ts-nocheck
import * as React from 'react';
import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import {useRouter} from "next/router"
import Link from "next/link"
import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios'



type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [datas,setDatas]=useState([])
  const [color,getColor]=useState('')
  const [brand, getBrand]=useState('')
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  console.log(color,brand)

const gettingData=()=>{
  axios.get('http://localhost:5000/api/clothes').then(res=> setDatas(res.data))
}
useEffect(()=>gettingData(),[])

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);

  };

  const handleClick = (e:any, path:any) => { //hédhi béch témchi lél page search
    if (path === "/Products") {
      console.log("I clicked on the Page");
    }
  }

  function valuetext(value: number) { //hédhi mta3 él price slide
    return `${value}°C`;
  }
  

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      
    >
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search here" variant="outlined" />
    </Box>

      <List>
        
          <ListItem disablePadding>
          <FormGroup>
          <h3>Colors</h3>
      <FormControlLabel control={<Checkbox />} label="Red" onChange={()=> getColor('red')}/>
      <FormControlLabel control={<Checkbox />} label="Blue" onChange={()=> getColor('blue')}/>
      <FormControlLabel control={<Checkbox />} label="black" onChange={()=> getColor('black')} />
      <FormControlLabel control={<Checkbox />} label="pink" onChange={()=> getColor('pink')}/>
      <FormControlLabel control={<Checkbox />} label="yellow" onChange={()=> getColor('yellow')}/>
      <FormControlLabel control={<Checkbox />} label="white" onChange={()=> getColor('white')}/>
    </FormGroup>
          </ListItem>
          <ListItem disablePadding>
          <FormGroup>
          <h3>Brand</h3>
      <FormControlLabel control={<Checkbox />} label="UnderArmour" onChange={()=>getBrand('underarmour')}/>
      <FormControlLabel control={<Checkbox />} label="Nike" onChange={()=>getBrand('Nike')}/>
      <FormControlLabel control={<Checkbox />} label="Puma" onChange={()=>getBrand('puma')}/>
      <FormControlLabel control={<Checkbox />} label="NBA" onChange={()=>getBrand('nba')}/>
      <FormControlLabel control={<Checkbox />} label="MLBS" onChange={()=>getBrand('mlb')}/>
      <FormControlLabel control={<Checkbox />} label="Football" onChange={()=>getBrand('foot')}/>
    </FormGroup>
          </ListItem>
          <ListItem disablePadding>
          <FormGroup>
          {/* <h3>Price</h3>
          <Slider sx={{width:200}}
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      /> */}
    </FormGroup>
          </ListItem>
      </List>
      <Button variant="contained" color="success">
      <Link href="/Products" onClick={handleToggle}>
      Submit Search
      </Link>{" "}
</Button>
<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >{open? datas.filter(e=> e.brand.includes(brand) && e.color.includes(color)).map(e=>{
        console.log(e.brand)
        return (
          
<div>
        <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="190"
        image={e.imageUrl}
        alt="green iguana"
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
    </div>
        )
      })
        
    :null}
      </Backdrop>
      <Divider />
    </Box>
  );
  

  return (
    <div>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>🔍</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}