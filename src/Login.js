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

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


function Login() {
  const [action, setAction] = React.useState("Login");
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
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneNumberRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  // console.log(name);
  // console.log(email);
  // console.log(password);
  // console.log(phoneNumber);
  // console.log(confirmPassword);


  const initialValues = { name: "", email: "", password: "", phoneNumber: "" };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});

  const handleEmail = (e) => {
    setEmail(e.target.value)
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
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
    }
    else {
      setPasswordError(false);
      // <span style={{color:"red"}}> Please enter a valid email address</span>
    }
  }

  // const handleConfirmPassword=(e)=>{
  //   setConfirmPassword=e.target.value
  //   if (!passwordRegex.test(password)) {
  //     setConfirmPasswordError(true);
  //   }
  //   else {
  //     setConfirmPasswordError(false);
  //   }
  // }


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

    <form onSubmit={handleSubmit}  >
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box Box p={4} sx={{
          width: '500px',
          height: '800px',
          '@media (max-width: 768px)': {
            width: '90%',
            height: '500px',
          },
          '@media (max-width: 480px)': {
            width: '100%',
            height: '400px',
          },
        }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='container'>
            <Grid className={action === "Login" ? "submit gray" : "submit"} item xs={6}>
              <Button
                onClick={() => { setAction("Sign Up") }}

                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  // bgcolor: 'primary.main', // Set the background color using the primary color
                  // color: 'white', // Set the text color to white
                  // '&:hover': {
                  //   bgcolor: 'primary.dark', // Change the background color on hover
                  // },
                }}
              >
                Sign Up
              </Button>

            </Grid>
            <Grid className={action === "Sign Up" ? "submit gray" : "submit"} item xs={6}>
              <Button
                onClick={() => { setAction("Login") }}
                fullWidth
                variant="contained"

                sx={{
                  mt: 3,
                  mb: 2,
                  // bgcolor: 'primary.main', 
                  // color: 'white', 
                  // '&:hover': {
                  //   bgcolor: 'primary.dark', 
                  // },
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid>
            <Box className='Header' fontStyle={0} >
              <Container maxWidth="sm" className="Header">
                <Typography variant='h4' underline="always" gutterBottom>
                  {action}
                </Typography>
              </Container>
            </Box>

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
                  {/* {setNameError?
                 <span style={{color:'red'}}> Name should be more than 3 letters</span>:
                 ""
                } */}
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
                  /></>
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
                fullWidth
                onChange={handleEmail}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {emailError ? null : <span style={{ color: 'red' }} >Please enter a valid email address</span>}
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
              {action === "Login" ? <div></div> : <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
              // autoComplete="current-password"
              />}
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
            {alertBox ? <Stack>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
            </Stack> : <Stack>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
              </Alert>
            </Stack>}


            <Box className='Btns' mt={2}>

              {action === "Sign Up" ? <Box></Box> : <Box> <span>Forgot Password? Click here</span> </Box>}

              {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid className={action === "Login" ? "submit gray" : "submit"} item xs={6}>
                <button onClick={() => { setAction("Sign Up") }} type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </button>
              </Grid>
              <Grid className={action === "Sign Up" ? "submit gray" : "submit"} item xs={6}>
                <button onClick={() => { setAction("Login") }} type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Login
                </button>
              </Grid>
            </Grid> */}
            </Box>
          </Grid>

        </Box>
      </Grid>
    </form>

  )
};

export default Login;
