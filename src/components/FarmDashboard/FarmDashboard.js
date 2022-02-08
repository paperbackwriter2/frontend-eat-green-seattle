import React, { useContext } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserContext } from '../../UserContext';
import './FarmDashboard.css'
import axios from 'axios';

// const baseURL = 'http://localhost:5000/get-profile'
// const baseURL = 'http://localhost:5000/get-profile'

// RENDERING SHOULD NOT BE CONDITIONAL BECAUSE THIS WILL BE A PROTECTED ROUTE

export default function CustomerDashboard() {
    // const {user, setUser} = useContext(UserContext);
    const { currentUser } = useAuth()
    console.log(currentUser)
    // axios
    //   .get(baseURL)
    //   .then()
    return (
        <div className='dashboard-wrapper'>
            <h1>Customer Dashboard</h1>
            <h3>
                My CSA
            </h3>
            {/* <p>User: {user}</p> */}
            {currentUser? 
            <div>
                <p>Welcome, {currentUser.first_name}</p>
                <p>{currentUser.first_name} {currentUser.last_name}</p>
                <p>Account created: {currentUser.created_at}</p>
            </div>
        : null}

            <div className="csa-details">
                <h2>My CSA</h2>
            </div>
            
        </div>
    )
}