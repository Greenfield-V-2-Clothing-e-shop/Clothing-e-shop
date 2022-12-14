import * as React from 'react';
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



type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = (e, path) => { //hédhi béch témchi lél page search
    if (path === "/SearchedProduct") {
      console.log("I clicked on the About Page");
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
            <h3>Sizes</h3>
      <FormControlLabel control={<Checkbox />} label="S" />
      <FormControlLabel control={<Checkbox />} label="M" />
      <FormControlLabel control={<Checkbox />} label="L" />
    </FormGroup>
          </ListItem>
          <ListItem disablePadding>
          <FormGroup>
          <h3>Colors</h3>
      <FormControlLabel control={<Checkbox />} label="Red" />
      <FormControlLabel control={<Checkbox />} label="Blue" />
      <FormControlLabel control={<Checkbox />} label="Green" />
    </FormGroup>
          </ListItem>
          <ListItem disablePadding>
          <FormGroup>
          <h3>Brand</h3>
      <FormControlLabel control={<Checkbox />} label="UnderArmour" />
      <FormControlLabel control={<Checkbox />} label="Nike" />
      <FormControlLabel control={<Checkbox />} label="Puma" />
      <FormControlLabel control={<Checkbox />} label="MBA" />
      <FormControlLabel control={<Checkbox />} label="MLBS" />
      <FormControlLabel control={<Checkbox />} label="Football" />
    </FormGroup>
          </ListItem>
          <ListItem disablePadding>
          <FormGroup>
          <h3>Price</h3>
          <Slider sx={{width:200}}
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </FormGroup>
          </ListItem>
      </List>
      <Button variant="contained" color="success">
      <Link href="/SearchedProduct" onClick={(e) => handleClick(e, "/SearchedProduct")}>
      Submit Search
      </Link>{" "}
</Button>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}