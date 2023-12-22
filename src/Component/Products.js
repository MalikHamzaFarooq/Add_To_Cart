import React, { useEffect, useState } from "react";
// import { AppContext } from '../App'
import ImgMediaCard from "./ImgMediaCard";
import { Grid } from "@mui/material";
import axios from "axios";

export default function Products() {
  // const {ProductsData}=useContext(AppContext);
  const [products, setProducts ] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);
console.log('products', products)
  return (
    <>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {products?.map((item, index) => {
          return (
            <Grid item>
              {" "}
              <ImgMediaCard key={index} item={item} />
            </Grid>
          );
        })}
        
      </Grid>
    </>
  );
}
