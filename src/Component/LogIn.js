import * as React from "react";
import { Button, Grid,TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function LogIn() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState();

  const upload = () => {
    axios
      .post("http://localhost:4000/api/login", { email,password })
      .then((res) => {
        console.log('res', res)
        const { message, token } = res.data;

        console.log(message); // Handle the message as needed
        
        // Store the token in localStorage or cookies
        localStorage.setItem('token', token);
  
        alert('User Logged In');
      })
      .catch((err) => console.log('Login failed', err.res.data));
  };
  console.log("email", email);

  return (
    <Grid container spacing={3} sx={{mt:'3%'}}>
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
        <h1 style={{backgroundColor:'#1976d2',color:'white',padding:'1% 11%'}}>Log In Page</h1>
        </Grid>
      <Grid item xs={4}></Grid>

      <Grid
        item
        xs={4}
        sx={{
          textAlign: "center",
        }}
      >
       
        <TextField
          label="Email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

    

        <TextField
          label="Password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" color="info" type="submit" onClick={upload}>
          Log In
        </Button>
        If don't have account? please <Link to={'/sign_up'}>Sign Up</Link>
      </Grid>
    </Grid>
  );
}
