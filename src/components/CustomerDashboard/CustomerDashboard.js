import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserContext } from '../../UserContext';
import './CustomerDashboard.css'
import axios from 'axios';
import { Link } from 'react-router-dom'

// const baseURL = 'http://localhost:5000/get-profile'
const baseURL = 'http://localhost:5000/get-profile'

//     return (
//         <div className='dashboard-wrapper'>
//             <h1>Customer Dashboard</h1>
//             <h3>
//                 My CSA
//             </h3>
//             {/* {currentUser.csa_id != null ?
//              <h3>You are a part of csa id ${currentUser.csa_id}</h3>
//             : <h3>Let's join a CSA!</h3>} */}
//             {/* if(currentUser.csa_id) {
//                 <h2> You are part of this CSA</h2>
//             } else {
//                 <h2> Sign up for a CSA! </h2>
//             } */}
            

//             {/* <p>User: {user}</p> */}
//             {currentUser? 
//             <div>
//                 <p>Welcome, {currentUser.first_name}</p>
//                 {/* <p>{currentUser.first_name} {currentUser.last_name}</p> */}
//                 <p>Account created: {currentUser.created_at}</p>
//                 {currentUser.farm_id != null ?
//              <h3>You are a part of csa id ${currentUser.farm_id}</h3>
//             :   
            // <>
            //     <h3>You haven't joined a CSA!</h3>            
            //     <Link 
            //     style={{ display: "block", margin: '1rem 0'}}
            //     to='/browse'
            //     >
            //     Browse CSAs 
            //     </Link>
            //     </>}
            // </div>
//         : null}

//             <div className="csa-details">
//                 <h2>My CSA</h2>
//             </div>

//             {userData?
//             <h2>My Phone Number is {userData.phone}</h2>
//             : <h2>No phone number for you</h2>
//             }
            
//         </div>
//     )
// }
//

// RENDERING SHOULD NOT BE CONDITIONAL BECAUSE THIS WILL BE A PROTECTED ROUTE

export default function CustomerDashboard() {
    const [userData, setUserData] = useState();
    // const [isLoading, setLoading] = useState(true);
    // const {user, setUser} = useContext(UserContext);
    const { currentUser, isLoading } = useAuth()
    // console.log(currentUser)
    // axios
    //   .get(baseURL)
    //   .then(reponse )

    // const getUserProfile = (userEmail) => {
    //     axios
    //         .post(baseURL, {email: userEmail})
    //         .then((response) => {
    //             const user = response.data;
    //             console.log(user)
    //             setUserData(user)
    //             setLoading(false)

    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    // }

    useEffect(() => {
        // getUserProfile(currentUser.email);
        // console.log(currentUser)
        console.log(`are we loading? ${isLoading}`)
        console.log(currentUser)
    }, [isLoading, currentUser]);

    if (isLoading){
        return (
            <div>
                <h1>My Customer Dashboard</h1>
                <h4>Loading...</h4>
            </div>
        )
    } 
    if (!isLoading){
        return (
            <div>
                <h1> My Customer Dashboard </h1>
                <h3>My phone: {currentUser.phone}</h3>
                
                {!currentUser.farm?
                    <>
                        <h3>You haven't joined a CSA!</h3>            
                        <Link 
                        style={{ display: "block", margin: '1rem 0'}}
                        to='/browse'
                        >
                        Browse CSAs 
                        </Link>
                    </>
                    : <h2>My CSA ID: {currentUser.farm}</h2>
                }
            </div>
        )
    }
}


