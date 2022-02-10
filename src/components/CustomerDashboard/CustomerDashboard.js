import React, { useContext } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserContext } from '../../UserContext';
import './CustomerDashboard.css'
import axios from 'axios';
import { Link } from 'react-router-dom'

// const baseURL = 'http://localhost:5000/get-profile'
const baseURL = 'http://localhost:5000/get-profile'

// RENDERING SHOULD NOT BE CONDITIONAL BECAUSE THIS WILL BE A PROTECTED ROUTE

export default function CustomerDashboard() {
    // const {user, setUser} = useContext(UserContext);
    const { currentUser } = useAuth()
    console.log(currentUser)
    // axios
    //   .get(baseURL)
    //   .then(reponse )
    return (
        <div className='dashboard-wrapper'>
            <h1>Customer Dashboard</h1>
            <h3>
                My CSA
            </h3>
            {/* {currentUser.csa_id != null ?
             <h3>You are a part of csa id ${currentUser.csa_id}</h3>
            : <h3>Let's join a CSA!</h3>} */}
            {/* if(currentUser.csa_id) {
                <h2> You are part of this CSA</h2>
            } else {
                <h2> Sign up for a CSA! </h2>
            } */}
            

            {/* <p>User: {user}</p> */}
            {currentUser? 
            <div>
                <p>Welcome, {currentUser.first_name}</p>
                {/* <p>{currentUser.first_name} {currentUser.last_name}</p> */}
                <p>Account created: {currentUser.created_at}</p>
                {currentUser.csa_id != null ?
             <h3>You are a part of csa id ${currentUser.csa_id}</h3>
            :   
            <>
                <h3>You haven't joined a CSA!</h3>            
                <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/browse'
                >
                Browse CSAs 
                </Link>
                </>}
            </div>
        : null}

            <div className="csa-details">
                <h2>My CSA</h2>
            </div>
            
        </div>
    )
}