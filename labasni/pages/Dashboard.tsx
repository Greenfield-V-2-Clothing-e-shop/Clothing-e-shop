//@ts-nocheck
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/router";
import Alert from '@mui/material/Alert';


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

interface Products {
  brand: String;
  color: String;
  favorites: Boolean;
  imageUrl: String;
  name: String;
  price: Number;
  _id: String;
}

const Dashboard = (event: any) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
 
  const router = useRouter();
  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   try {
  //     event.preventDefault();
  //     const addProduct = await axios.post("http://localhost:5000/api/clothes", {
  //       name,
  //       brand,
  //       price,
  //       image,
  //       size,
  //       color,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const addProduct = async (event: any) => {
    try {
      event.preventDefault();
      const user = await axios
        .post("http://localhost:5000/api/clothes", {
          name: name,
          brand: brand,
          price: price,
          imageUrl: image,
          size: size,
          color: color,
        })
       if (user) {
      router.push("/Dashboard")
    localStorage.setItem("token", user.data.token);
    localStorage.setItem("id", user.data.id);}
    } catch (error) {
      console.log(error);
    }
  };
  //  const deleteProduct =async (event:any)=>{
  //   axios.delete(`http://localhost:5000/api/clothes${_id}`);
  //  }

  useEffect(() => {
    axios
      .get<Products[]>("http://localhost:5000/api/clothes")
      .then((response: AxiosResponse) => {
        // console.log(products);
        setProducts(response.data);
      });
  }, []);
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={addProduct}
      >
        <div>
          <TextField
            value={name}
            type="name"
            required
            id="name"
            label="Name"
            defaultValue="Enter Your Product Name"
            onChange={(el) => setName(el.target.value)}
          />

          <TextField
            value={brand}
            type="brand"
            required
            id="brand"
            label="Brand"
            defaultValue="Enter Your Brand Name"
            onChange={(el) => {setBrand(el.target.value)
            console.log(brand)}}
          />

          <TextField
            value={image}
            required
            id="image"
            label="ImageUrl"
            defaultValue="Hello World"
            onChange={(el) => setImage(el.target.value)}
          />
          <TextField
            value={color}
            type="color"
            id="color"
            label="Color"
            defaultValue="Choose your color"
            helperText="Choose your color"
            onChange={(el) => {setColor(el.target.value)
            console.log(color)}}
          />
          <TextField
            value={size}
            id="size"
            label="Size"
            defaultValue="Choose your color"
            helperText="Choose The Size"
            onChange={(el) => setSize(el.target.value)}
          />

          <TextField
            value={price}
            required
            id="price"
            label="Price"
            defaultValue="$$"
            onChange={(el) => setPrice(el.target.value)}
          />
        </div>
        <Button type="submit" variant="contained">
          Add Product
        </Button>
      </Box>
      <div>
        {products.map((e) => {
          return (
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
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
                      <Button
                        sx={{ cursor: "pointer" }}
                        variant="body2"
                        onClick={() => {
                          axios.delete(
                            `http://localhost:5000/api/clothes/${e._id}`
                          ).then((res)=> {console.log(res)
                          window.location.reload()})
                          
                        }}
                      >
                        Remove
                      </Button>
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
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;