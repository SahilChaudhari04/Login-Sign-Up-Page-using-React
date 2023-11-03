import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { useRadioGroup } from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { purple } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

export default function SignUp() {
  const [action, setAction] = React.useState();
  const [SignUp,setSignUp] =React.useState(false)
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);

  const textFieldStyles = {
    borderRadius: '10px',
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
    const phoneNumberRegex = /^[0-9]{8,11}$/;;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError(true);
    }
    else {
      setPhoneNumberError(false);
      // <span style={{color:"red"}}> Please enter a valid email address</span>
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%])[A-Za-z\d@#$%]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // const handleConfirmPassword=(e)=>{
  //   setConfirmPassword=e.target.value;
  //   // if (password===confirmPassword) {
  //   //   setConfirmPasswordError(true);
  //   // }
  //   // else {
  //   //   setConfirmPasswordError(false);
  //   // }
  // }

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

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "black"

  }));

  const handleSubmit=(e)=>{
    
    if(emailError && passwordError && phoneNumberError ){
      setSignUp(false)
      e.preventdefault();
    }
    else{
      setSignUp(true)
    window.localStorage.setItem("Name",name);
    window.localStorage.setItem("Phone",phoneNumber);
    window.localStorage.setItem("Email",email);
    window.localStorage.setItem("Password",password);
    }       
  }
  const navigate = useNavigate();
   
  return (
    <Grid
      container
      sx={{  alignContent: "centre", justifyContent: "centre", paddingLeft:"23vh", paddingTop:"2vh", paddingBottom:"2vh" }}
      minHeight="100vh"
      component="main"
      // maxHeight={"100vh"}
      maxWidth={"100vw"}
    >
      <CssBaseline />
      <Grid
        item
        xs={6}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxBlockSize: '',
        }}
      />
      <Card container style={{ width: "35vw" }}>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: '10px',
            }}
          >
            <Grid item xs={12} sm={8} square>
              <Box>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  className='container'
                >
                  <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ margin: 'auto',marginLeft:"38px" }}
                    >
                      Create Your Account
                    </Typography>
                    <Typography
                      variant="h8"
                      gutterBottom
                      sx={{ margin: 'auto' }}
                    >
                      Please enter your details
                    </Typography>
                  </Box>
                </Grid>
                <Grid className='input' mt={2} ml={1.5}>
                  <TextField
                    label="Name"
                    variant="standard"
                    margin="normal"
                    onChange={(e) => { setName(e.target.value); }}
                    required
                    fullWidth
                    id="name"
                    name="name"
                    autoFocus
                  />
                  <TextField
                    label="Phone Number"
                    variant="standard"
                    margin="normal"
                    onChange={handlePhoneNumber}
                    required
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                  />
                  {phoneNumberError ?
                    <span style={{ color: 'red' }}> Phone Number must contain 10 numbers </span> : null
                  }
                  <Grid>
                    <Typography style={{ textAlign: 'left',mt:"10px" }} variant="subtitle1" gutterBottom>
                      Gender
                    </Typography>
                    <RadioGroup name="use-radio-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                      <MyFormControlLabel value="Male" label="Male" control={<Radio />} />
                      <MyFormControlLabel value="Female" label="Female" control={<Radio />} />
                    </RadioGroup>
                  </Grid>
                  <TextField
                    label="Email"
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleEmail}
                    id="email"
                    name="email"

                  />
                  {emailError && (
                    <span style={{ color: 'red' }}>
                      Please enter a valid email address
                    </span>
                  )}
                  <TextField
                    label="Password"
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    onChange={handlePassword}
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  {passwordError && (
                    <span style={{ color: 'red' }}>
                      Password must be at least 8 characters and contain at least
                      1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special
                      character.
                    </span>
                  )}
                  <TextField
                    label="Confirm Password"
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    // onChange={handleConfirmPassword}
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                  />
                  {/* {confirmPassword !== password && (
                    <span style={{ color: 'red' }}>
                      Confirm Password does not match Password
                    </span>
                  )} */}
                </Grid>
                <Grid className='Buttons' mt={2}>
                  <Stack spacing={2} direction="row">
                    <ColorButton
                      type="submit"
                      fullWidth
                      // onClick={handleSubmit}
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.88)',
                        },
                        borderRadius: '20px',
                      }}
                    >
                      Sign Up
                    </ColorButton>
                  </Stack>
                </Grid>
                <Grid className='Sign Up' mt={10} container alignItems="centre">
                  <Grid item>
                    <Typography variant="caption">
                      Already have an account?
                    </Typography>
                  </Grid>
                  <Grid >
                    <Button onClick={() => navigate('/Login')}>
                      <Typography variant="caption">
                        Login
                      </Typography>
                    </Button>

                  </Grid>

                </Grid>
              </Box>
            </Grid>
          </form>
        </CardContent>
      </Card >
    </Grid >
  );
}
