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
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios'

const baseURL = 'http://localhost:5000/new-farm'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Eat Green Seattle
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    // const { currentUser } = useAuth();

    const [formData, setFormData] = React.useState({
        farmName: '',
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '',
        address_1: '',
        address_2: '',
        city: '',
        // HOW CAN I MAKE THIS A STATE DROPDOWN
        state: '',
        zipcode: '',
        phone: '',
        farm_bio: '',
        organic: '',
        firebase_id: '',
        customer_id: [],
        max_shares: 0,
        // user_id: currentUser.id,
        // email: currentUser.email
    }
    );

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     // eslint-disable-next-line no-console
    //     console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //     });
    // };

    function createCSA(formData) {
        axios
            .post(baseURL, formData)
            .then((response) => {
                console.log(response.data)
            })
            // navigate('/farm-dashboard')
    };

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        // send POST request to create account 
        const email = formData.email;
        const password = formData.password;

        console.log(`organic: ${formData.organic}`)
        // createCSA(formData);
        console.log(formData)
    }

    function handleChangeEvent(e) {
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


  return (
    <ThemeProvider theme={theme}>
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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChangeEvent}
                  value={formData.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChangeEvent}
                  value={formData.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="farmName"
                    required
                    fullWidth
                    id="farmName"
                    label="Farm Name"
                    autoFocus
                    onChange={handleChangeEvent}
                    value={formData.farmName}
                    />
                </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChangeEvent}
                  value={formData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address_1"
                  label="Address Line 1"
                  id="address_1"
                  onChange={handleChangeEvent}
                  value={formData.address_1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address_2"
                  label="Address Line 2"
                  id="address_2"
                  onChange={handleChangeEvent}
                  value={formData.address_2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  id="city"
                  onChange={handleChangeEvent}
                  value={formData.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                //   fullWidth
                  name="state"
                  label="State"
                  id="state"
                  onChange={handleChangeEvent}
                  value={formData.state}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="zipcode"
                  label="Zipcode"
                  id="zipcode"
                  onChange={handleChangeEvent}
                  value={formData.zipcode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  id="phone"
                  onChange={handleChangeEvent}
                  value={formData.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="farm_bio"
                  label="Tell us about your farm!"
                  id="farm_bio"
                  multiline
                  minRows={4}
                  onChange={handleChangeEvent}
                  value={formData.farm_bio}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="max_shares"
                  label="How many shares will be available?"
                  id="max_shares"
                  type="number"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  onChange={handleChangeEvent}
                  value={formData.max_shares}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="My farm is certified organic."
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}