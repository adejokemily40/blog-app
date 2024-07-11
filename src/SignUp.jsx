import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {authActions} from './store';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [input, setInput] = React.useState({
    name:"",
    email:"",
    password:""
  })
  const [isSignup, setIsSignup] = React.useState(false)

  // handling form change
  const handleChange = (e) =>  {
    
     setInput((prevState) => ({
        ...prevState, 
        [e.target.name]: e.target.value
     }))
}

const sendCredentials = async (type = "login")  => {
  
try{
 const res = await axios.post(`http://localhost:8000/register/${type}`, {
  name: input.name,
  email: input.email,
  password: input.password
 });
    const data = await res.data
    return data 
}catch (error)  {
  console.log('error')
} 

}

// handling submit event
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input); 
    if (isSignup) {
    sendCredentials("signup")
    .then(() =>  dispath(authActions.login()))
    .then((data) => console.log(data) )
    } else {
      sendCredentials()
      .then(() => dispath(authActions.login()))
      .then(() => console.log(data) )
    }
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "sign up" : "sign in"}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {isSignup && (
                <TextField
                  name="name"
                  value={input.name}
                  required
                  fullWidth
                  id="firstName" 
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                />
                )}{" "}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={input.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={input.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button onClick={() => setIsSignup(!isSignup)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change to {isSignup ?"login":"Signup" }
            </Button>

           
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
