import React, { useContext, useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
    ListItemIcon,
    Box,
    CssBaseline,
} from '@mui/material';
// import ChevronLeftIcon from '@mui/icons/Ch'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

// const theme = createTheme();

// theme.spacing(2)

const theme = createTheme({
    palette: {
      primary: {
        // teal-ish color
        main: '#2399c4'
      },
      secondary: {
        // green
        main: '#11cb5f',
      },
      white: {
          main: '#000000',
      }
    },
  });

// const ColorButton = styled(Button)(({ theme }) => ({
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   }));

const Navbar = () => {

  const {currentUser, setCurrentUser} = useAuth()
  

  let navigate = useNavigate();
  console.log(currentUser)
  console.log(currentUser.is_farm)
  
  async function logOut(e) {
    try {
      await signOut(auth)
      navigate('/')
      setCurrentUser({first_name: null})
    } catch(error) {
      console.log(error)
    }
}

    return (
        <ThemeProvider theme={theme}>
          <div>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    {/* <Button variant='contained' color='primary' >Custom CSS</Button> */}
                    <AgricultureIcon />
                    <Typography
                        variant='h5'
                        component='p'
                    >
                        
                        Eat Green Seattle
                    </Typography>                    
                    <div style={{ marginRight: "2rem" }}>

                        {!currentUser.is_farm && currentUser.zipcode?
                            <Button
                            variant='component'
                            component={Link}
                            to="/customer-dashboard"
                            color='white'
                            >
                            {/* <HomeIcon /> */}
                            My Dashboard
                            </Button>
                            : null}

                        {currentUser.is_farm?
                            <>
                                <Button
                                variant='component'
                                component={Link}
                                to='farm-dashboard'
                                color='white'
                                >
                                    My Dashboard
                                </Button>

                                <Button
                                variant='component'
                                component={Link}
                                to='/create-csa'
                                color='white'
                                >
                                    Register a CSA
                                </Button>
                                <Button
                                variant='component'
                                component={Link}
                                to='/resources'
                                color='white'
                                >
                                    Farmer Resources
                                </Button>
                            </>
                                : null}

                        <Button
                            variant='component'
                            component={Link}
                            to="/browse"
                            color='white'
                        >
                            {/* <HomeIcon /> */}
                            Browse CSAs
                        </Button>
                        
                        <Button
                            variant='component'
                            component={Link}
                            to="/about"
                            color='white'
                        >
                            {/* <PersonIcon /> */}
                            About Us
                        </Button>

                        
                        {currentUser.email
                        ? <Button variant='contained' color='primary' onClick={logOut}>Log out</Button>
                        : <Button
                            variant='component'
                            component={Link}
                            to='/'
                            color='white'
                            >
                                Sign in
                            </Button>
                        }

                        {/* <Button variant='contained' color='primary' >Custom CSS</Button> */}

                        <IconButton
                            // color="textPrimary"
                            // className={classes.menuButton}
                            // edge="start"
                            // aria-label="menu"
                            // onClick={handleMenu}
                            sx={{ mr: '10px'}}
                        >
                            {/* <AgricultureIcon /> */}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
        </ThemeProvider>
    )
}

export default Navbar;







