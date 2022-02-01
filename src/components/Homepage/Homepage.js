import React from 'react';
import Login from '../Login/Login'

export default function Homepage() {
    return (

    <div className="content">
      <h1>Eat Green Seattle</h1>
      <p>Support small, local farmers and regenerative agriculture.</p>
      <img className='radish' alt='radish with leaves' src='https://images.pexels.com/photos/4117702/pexels-photo-4117702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
      <Login />
    </ div>
    )
}