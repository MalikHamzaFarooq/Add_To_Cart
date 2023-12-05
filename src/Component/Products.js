import React, { useContext } from 'react'
import { AppContext } from '../App'
import ImgMediaCard from './ImgMediaCard';
import { Grid } from '@mui/material';

export default function Products() {
    const {ProductsData}=useContext(AppContext);

  return (
    <>
 <Grid container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    {ProductsData.map((item,index)=>{
        return(

            <Grid item> <ImgMediaCard key={index} item={item} /></Grid>
        )
    })}
</Grid>
    </>
  )
}
