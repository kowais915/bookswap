import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from 'next/image'
import {useState} from 'react';

//  * importing styles


// * using the mui file upload component


// * using dashboard styles here for this component

import styles from '../../styles/Dashboard.module.css'

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function UpdateProfile() {
const [file, setFile ] = useState(null);

const handleUpload = (event)=>{
  
   console.log(file)
   setFile(file);

}


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

       
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>

                  {/* //* user image */}
              <Grid item xs={12}>
                <Typography align="center">
                    <Image
                        src="/user.jpeg"
                        alt="user"
                        width={150}
                        height={150}
                        className={styles.image}

                    
                    ></Image>
                </Typography>
              </Grid>



              {/* //* upload image button */}
              <Grid item xs={12}>
                <Typography align="center">
                  <Button 
                    variant="outlined"
                    component="label"
                   
                    
                  >
                    Upload

                   
                    <input 

                      onChange={(e)=>setFile(e.target.files[0])}
                      onClick={(e)=>{

                      

                        handleUpload()
                      }}
                     type="file" 
                     hidden
                    />
                  </Button>

                  {/* // * display the file here */}

                  <span>this is the file</span>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="bio"
                  label="Bio"
                  name="bio"
                  autoComplete="bio"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="bio"
                  label="Phone Number"
                  name="bio"
                  autoComplete="bio"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="interests"
                  label="Interests"
                  name="interests"
                  autoComplete="interests"
                />
              </Grid>
            </Grid>

            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
