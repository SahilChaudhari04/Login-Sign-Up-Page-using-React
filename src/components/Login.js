
import * as React from 'react';
// import SignUp from './SignUp';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Link, Stack } from "@mui/material";
import { purple } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'


export default function SignInSide() {
  const [action, setAction] = React.useState("Login");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [emailError, setEmailError] = React.useState(false)
  const [password, setPassword] = React.useState();
  const [passwordError, setPasswordError] = React.useState(false);
  const [error, setError] = React.useState(false);

  const textFieldStyles = {
    borderRadius: '10px', // Adjust the radius as needed
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    }
    else {
      setEmailError(false);
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%])[A-Za-z\d@#$%]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(true);
    }
    else {
      setPasswordError(false);
    }
  }
  const customTheme = (outerTheme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#E0E3E7',
              '--TextField-brandBorderHoverColor': '#B2BAC2',
              '--TextField-brandBorderFocusedColor': '#6F7E8C',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&:before, &:after': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&:before': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
    });
  const outerTheme = useTheme();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "black"

  }));

  const handleSubmit = () => {
    if (email === window.localStorage.getItem("Email") && password === window.localStorage.getItem("Password")) {
      setLoggedIn(true);
    }
    else {
      setLoggedIn(false);
      setError(true);
    }
  }
  const navigate = useNavigate();
  // const handleSignUp=()=>{
  // //   history.push('/signup');
  // // }
  
    return (

      <Grid container component="main"  maxWidth={"100vw"}
        sx={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: "10vh", height:"80vh" }}>
        <CssBaseline />
        <Grid
          item xs={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maxBlockSize: ""
          }}
        />
        <Card container sx={{ width: "100%", maxWidth: "30vw" }}>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: '100px' }}>
              <Grid item xs={12} sm={8} square >
                <Box>

                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='container'>
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h4" gutterBottom sx={{ ml:"45px" }}>
                        Welcome Back !!
                      </Typography>
                      <Typography variant="h8" gutterBottom sx={{ ml:"80px" }}>
                        Please enter your details
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid className='input' mt={2} ml={1.5}>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <TextField
                        label="Email"
                        variant="standard"
                        margin="normal"
                        required
                        sx={textFieldStyles}
                        fullWidth
                        onChange={handleEmail}
                        id="email"
                        name="email"

                        autoFocus />
                      {emailError ? <span style={{ color: 'red' }} >Please enter a valid email address</span> : null}

                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        onChange={handlePassword}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </ThemeProvider>
                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        control={<Checkbox size='small' value="remember" color="primary" />}
                        sx={{ textAlign: 'left', margin: "0px", padding: "0px" }}
                      />
                      <Box sx={{ fontSize: "15px", mt: "15.5px" }} width={"200px"}>Remeber me</Box>
                      <Box sx={{ fontSize: "15px", flexGrow: 1, mt: "8px" }}>
                        <Link sx={{ color: "black", }}>
                          Forgot password?
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid className='Buttons' mt={2}>
                    <Stack spacing={2} direction="row">
                      <ColorButton
                        type="submit"
                        // onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3, mb: 2, '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.88)'
                          },
                          borderRadius: "20px"
                        }}
                      >
                        Log In
                      </ColorButton>

                    </Stack>
                  </Grid>
                  <Grid className='Sign Up' mt={10} container alignItems="centre">
                    <Grid item>
                      <Typography variant="caption">
                        Don't have an account?
                      </Typography>
                    </Grid>
                    <Grid >
                      <Button onClick={() => navigate('/SignUp')}>
                        <Typography variant="caption">
                          Sign Up
                        </Typography>
                      </Button>

                    </Grid>

                  </Grid>


                </Box>
              </Grid>

            </form>
             {/* {error === true ?
              Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              }) :

              null} */}

            {loggedIn === true ?
              <Alert severity="success">
                <AlertTitle>
                  Successfully Logged In

                </AlertTitle>
              </Alert> :

              null}
          </CardContent>
        </Card>
      </Grid>


    )
  

}

