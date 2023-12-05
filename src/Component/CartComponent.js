import React from "react";
import ImgMediaCard from "./ImgMediaCard";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";

function CartComponent() {
  const { cartDAta } = useContext(AppContext);

  // console.log(".............", cartDAta);
  return (
    <>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {cartDAta.map((item, index) => {
          return (
            <Grid item>
              {" "}
              <ImgMediaCard key={index} item={item} />{" "}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default CartComponent;
