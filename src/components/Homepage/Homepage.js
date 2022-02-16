import React, { useContext } from 'react';
import Login from '../Login/Login';
import './Homepage.css';
import { UserContext } from '../../UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { Typography, Container } from '@mui/material'
import Link from '@mui/material/Link';

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

export default function Homepage() {
    const {user, setUser} = useAuth();
    // const user = 'bob'
    return (

    <Container sx= {{ mt: 20}}className="centered">
      <Typography variant='h1'>Eat Green Seattle</Typography>
      <Typography>Support small, local farmers and regenerative agriculture.</Typography>
      <Typography>Change the world. One plate at a time.</Typography>
      <img className='radish' alt='radish with leaves' src='https://images.pexels.com/photos/4117702/pexels-photo-4117702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
      {!user
      ? <Login />
      : <button>Log out</button>
      }
      
    <Copyright />
    </ Container>
    )
}