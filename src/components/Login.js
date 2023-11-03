// import React from 'react'
import "./Login.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import { useRadioGroup } from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, Stack } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


function Login() {
  const [action, setAction] = React.useState("Login");
  const [actionSet, setActionSet] = React.useState("Login");
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [emailError, setEmailError] = React.useState(false)
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [phoneNumberError, setPhoneNumberError] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [alertBox, setAlertBox] = React.useState(false);


  // console.log(name);
  // console.log(email);
  // console.log(password);
  // console.log(phoneNumber);
  // console.log(confirmPassword);
  const textFieldStyles = {
    borderRadius: '10px', // Adjust the radius as needed
  };



  const initialValues = { name: "", email: "", password: "", phoneNumber: "" };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});

  const handleEmail = (e) => {
    setEmail(e.target.value)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
      setEmailError(true);
    }
    else {
      setEmailError(false);
      // <span style={{color:"red"}}> Please enter a valid email address</span>
    }
  }
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
    const phoneNumberRegex = /^[0-9]{9}$/;;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError(true);
    }
    else {
      setPhoneNumberError(false);
      // <span style={{color:"red"}}> Please enter a valid email address</span>
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
      // <span style={{color:"red"}}> Please enter a valid email address</span>
    }
  }

  const handleConfirmPassword=(e)=>{
    setConfirmPassword=e.target.value;
    if (password===confirmPassword) {
      setConfirmPasswordError(true);
    }
    else {
      setConfirmPasswordError(false);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(emailError, passwordError)) {

      setAlertBox(true);
    }
    else {
      setAlertBox(false);
    }
  }
  const validate = (emailError, passwordError) => {
    if (emailError) {
      return false;
    }
    else {
      if (passwordError) {
        return false;
      }
      else {
        return true;
      }
    }
  }


  const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    value: PropTypes.any,
  };

  return (

    <form onSubmit={handleSubmit} style={{ display: "flex", marginTop: '100px' }}>
      <Grid item xs={12} sm={8} md={5}
        style={{ backgroundColor: "linear-gradient(#2A002B,#42006C)" }}>
        <Box Box p={4} sx={{
          marginTop: '10px',
          width: '500px',
          // maxHeight: "100%",
          // height: '800px',
          '@media (max-width: 768px)': {
            width: '90%',
            // height: '500px',
          },
          '@media (max-width: 480px)': {
            width: '100%',
            // height: '400px',
          },
        }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='container'>
            <Box style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
              <Typography variant="h4" gutterBottom sx={{margin:'auto'}}>
                Welcome Back !!
              </Typography>
              <Typography variant="h8" gutterBottom sx={{margin:'auto'}}>
                Please enter your details
              </Typography>
            </Box>
          

            {/* <Box>
              <Typography variant="h4" gutterBottom style={{ fontWeight: 100 }}>
                Welcome to the entrance Login in to continue
              </Typography>
            </Box> */}
            {/* <Grid className={action === "Login" ? "submit gray" : "submit"} item xs={6}>
              {/* <Button
                onClick={() => { setAction("Sign Up");  }}

                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'primary.main', // Set the background color using the primary color
                  color: 'white', // Set the text color to white
                  '&:hover': {
                    bgcolor: 'primary.dark', // Change the background color on hover
                  },
                }}
              >
                Sign Up
              </Button> */}

            {/* </Grid> */}
            <br/>
            <Grid className={action === "Sign Up" ? "submit gray" : "submit"} item xs={6}>
              {actionSet === "Login" ?
                <Box
                  sx={{
                    typography: 'body1',
                    ml: 2
                  }}
                  onClick={() => { setAction("Sign Up"); setActionSet("Sign Up"); }}
                >
                  <Typography>
                    Don't have an account
                  </Typography>
                  <Link >
                    Sign Up

                  </Link>
                </Box>
                //   <Button
                //   onClick={() => { setAction("Sign Up"); setActionSet("Sign Up"); }}
                //   fullWidth
                //   variant="contained"
                //   style={{display:"flex",alignContent:'center',justifyContent:"center"}}

                //   sx={{
                //     mt: 3,
                //     mb: 2,
                //     bgcolor: 'primary.main', 
                //     color: 'white', 
                //     '&:hover': {
                //       bgcolor: 'primary.dark', 
                //     },
                //   }}
                // >
                //   Sign Up
                // </Button>
                :
                <Button
                  onClick={() => { setAction("Login"); setActionSet("Login") }}
                  fullWidth
                  variant="contained"
                  style={{ display: "flex", alignContent: 'center', justifyContent: "center" }}
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  Login
                </Button>
              }
              {/* <Button
                onClick={() => { setAction("Login") }}
                fullWidth
                variant="contained"

                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  '&:hover': {
                    bgcolor: 'primary.dark', 
                  },
                }}
              >
                Login
              </Button> */}
            </Grid>
          </Grid>
          <Grid>
            {/* <Box className='Header' fontStyle={0} >
              <Container maxWidth="sm" className="Header">
                <Typography variant='h4' underline="always" gutterBottom>
                  {action}
                </Typography>
              </Container>
            </Box> */}

            <Box className='inputs' margin={1.5}>
              {action === "Login" ? <div></div> : <>
                <><TextField
                  onChange={(e) => { setName(e.target.value); }}

                  // helperText="Please enter your name"
                  margin="normal"
                  required
                  input
                  fullWidth
                  // value={name}
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus />
                  <TextField
                    // helperText="Please enter your Phone Number"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handlePhoneNumber}
                    id="phonenumber"
                    label="Phone Number"
                    name="phonenumber"
                    autoComplete="phonenumber"
                  />
                  {phoneNumberError ?
                    <span style={{ color: 'red' }}> Phone Number must contain 10 numbers </span> : null
                  }</>
                <Grid>
                  <Typography style={{ textAlign: 'left' }} variant="subtitle1" gutterBottom>
                    Gender
                  </Typography>
                  <RadioGroup name="use-radio-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <MyFormControlLabel value="Male" label="Male" control={<Radio />} />
                    <MyFormControlLabel value="Female" label="Female" control={<Radio />} />
                  </RadioGroup>
                </Grid></>
              }
              <TextField
                margin="normal"
                required
                sx={textFieldStyles}
                fullWidth
                onChange={handleEmail}
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                autoFocus
              />
              {emailError ? <span style={{ color: 'red' }} >Please enter a valid email address</span> : null}
              <TextField
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
              {passwordError ? <span style={{ color: 'red' }} >Password must be atleast 8 characters</span> : null}
              {action === "Login" ? <div></div> : <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => { setConfirmPassword(e.target.value); }}
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
              // autoComplete="current-password"
              />}
              {confirmPasswordError ? <span style={{ color: 'red' }} >COnfirm Password does not matches the Password</span> : null }
            </Box>

            {action === "Login" ?
              <><FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me" />
                <Grid></Grid>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  // fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button></> : <Button
                  type="submit"
                  onClick={handleSubmit}
                  // fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                Sign In
              </Button>}
            <Box className='Btns' mt={2}>
              {action === "Sign Up" ? <Box></Box> : <Box> <span>Forgot Password? Click here</span> </Box>}
            </Box>
          </Grid>
        </Box>
      </Grid>
    </form>

  )
};

export default Login;
