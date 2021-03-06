import React, { useContext } from 'react';
import Login from '../Login/Login';
import './FarmerHomepage.css';
import { UserContext } from '../../UserContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Homepage() {
    const {user, setUser} = useAuth();
    // const user = 'bob'
    return (

    <div className="centered">
    <h2>Farmer Log In</h2> 
      <h1>Eat Green Seattle</h1>
      <p>Support small, local farmers and regenerative agriculture.</p>
      <img className='radish' alt='radish with leaves' src='https://images.pexels.com/photos/4117702/pexels-photo-4117702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
      {!user
      ? <Login />
      : <button>Log out</button>
      }
      
    </ div>
    )
}