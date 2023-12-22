import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState();

  const upload = () => {
    axios
      .post("http://localhost:4000/api/users", { name, email, dob, password })
      .then((res) => {
        // console.log("res.data", res.data);
        alert('New User Registered');
      })
      .catch((err) => console.log(err));
  };
  console.log("email", email);

  return (
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
        <h1 style={{backgroundColor:'#1976d2',color:'white',padding:'1% 13%'}}>Sign Up</h1>
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
          label="User Name"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

    
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={["DatePicker"]} fullWidth>
              <DatePicker
                label="Date Of Birth"
                onChange={(e) => setDob(e)}
              />
            </DemoContainer>
          </LocalizationProvider>
     

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
          Register
        </Button>
      </Grid>
      <Grid item   xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        If already account? <Link to={'/log_in'}>Log In</Link>
        </Grid>
    </Grid>
  );
}
