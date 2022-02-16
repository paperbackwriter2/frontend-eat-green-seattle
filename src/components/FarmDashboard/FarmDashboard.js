import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserContext } from '../../UserContext';
import './FarmDashboard.css'
import axios from 'axios';

const URL = 'http://localhost:5000/get-farm-email'
// const baseURL = 'http://localhost:5000/get-profile'
// const baseURL = 'http://localhost:5000/get-profile'

// RENDERING SHOULD NOT BE CONDITIONAL BECAUSE THIS WILL BE A PROTECTED ROUTE

export default function FarmDashboard() {

    const [isLoading, setLoading] = useState(true);
    const [farmData, setFarmData] = useState(null);
    // const {user, setUser} = useContext(UserContext);
    const { currentUser } = useAuth()
    console.log(currentUser)
    const user = currentUser.email
    console.log(user)
    // axios
    //   .get(baseURL)
    //   .then()

    const getProfile = (farm_email)  => {
        // console.log(currentUser)
        // console.log(user.id)
        // console.log(currentUser)
        // console.log('getting farm info')
        // console.log(`farm_id inside react ${farm_id}`)
        axios 
        .post(URL, {email: farm_email})
        // .get(url)
        .then((response) => {
          const farm = response.data;
        //   console.log(`this is the farm: ${response.data}`)
        //   console.log(farm.farm_name)
          setFarmData(farm)
          setLoading(false)
        //   setLoading(false)
        //   console.log(`this is farmList ${farmList}`)
          console.log(currentUser)
        })
        .catch((err) => {
          console.log(err.message)
        })
        // return response
        // console.log(response)
      }

    useEffect(() => {
        // getProfile(farm_id, currentUser);
        console.log(currentUser)
        console.log(currentUser.email)
    }, []);

    return (
        <div className='dashboard-wrapper'>
            <h1>Farm Dashboard</h1>
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