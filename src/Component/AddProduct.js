import { Button, Container, Grid, Input, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const upload=()=>{
    let formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    console.log('img', img)
    formData.append('file', img);

    axios.post('http://localhost:4000/api/products',formData, {
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    } )
    .then(res=>{})
    .catch(err=>console.log(err))
  }
  console.log('out img', img)
  return (
    <Container>
      <Grid container spacing={3} sx={{}}>
      

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop:'12vh'
          }}
        >
        <h1 style={{backgroundColor:'#1976d2',color:'white',padding:'1% 13%'}}>Add New Products</h1>
        </Grid>
        <Grid item xs={3}>
      
          
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Product Name"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Price"
            fullWidth
            variant="standard"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
            {/* <TextField
            label="Img URL"
            fullWidth
            variant="standard"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          /> */}

         <div style={{marginTop:'3%'}}>
         <Input
            accept="image/*"
            fullWidth
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            variant="contained"
            color="secondary"
            onChange={e=>setImg(e.target.files[0])}
          />
          <label htmlFor="raised-button-file" style={{backgroundColor:'#1976d2',padding:'3%', }}>
            <Button
              variant="raised"
              component="span"
            sx={{color:'white'}}
          
              //   className={classes.button}
              // onClick={upload}
            >
              Upload Image
            </Button>
          </label>
         </div>
        
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="info" type="submit"
           onClick={upload}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}