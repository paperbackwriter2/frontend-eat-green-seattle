import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserContext } from '../../UserContext';
import './CustomerDashboard.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { Typography, Container, Button, Card, Box, ButtonGroup } from '@mui/material'
import CustomerCsa from '../CustomerCSA/CustomerCSA'

// const baseURL = 'http://localhost:5000/get-profile'
const baseURL = 'http://localhost:5000/get-profile'
const url = 'http://localhost:5000/get-farm'

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
    // const [userData, setUserData] = useState();
    const [farmData, setFarmData] = useState();
    // const [isLoading, setLoading] = useState(true);
    // const {user, setUser} = useContext(UserContext);
    const { currentUser, isLoading } = useAuth()
    const navigate = useNavigate();
    // console.log(currentUser)
    // axios
    //   .get(baseURL)
    //   .then(reponse )

    // const getFarmProfile = (farm_id)  => {
    //     // console.log(currentUser)
    //     // console.log(user.id)
    //     // console.log(currentUser)
    //     // console.log('getting farm info')
    //     // console.log(`farm_id inside react ${farm_id}`)
    //     axios 
    //     .post(url, {id: farm_id})
    //     // .get(url)
    //     .then((response) => {
    //       const farm = response.data;
    //     //   console.log(`this is the farm: ${response.data}`)
    //     //   console.log(farm.farm_name)
    //       setFarmData(farm)
    //     //   setLoading(false)
    //     //   setLoading(false)
    //     //   console.log(`this is farmList ${farmList}`)
    //       console.log(currentUser)
    //     })
    //     .catch((err) => {
    //       console.log(err.message)
    //     })
    //     // return response
    //     // console.log(response)
    //   }

    useEffect(() => {
        // getUserProfile(currentUser.email);
        // console.log(currentUser)
        console.log(`are we loading? ${isLoading}`)
        // console.log(currentUser)
        // if (!isLoading){
        //     console.log('We have finally loaded')
        //     getFarmProfile(currentUser.farm)
        // }
    }, [isLoading, currentUser]);

    if (isLoading){
        return (
            <Container sx={{ mt: 20 }}>
                {/* <h1>My Customer Dashboard</h1> */}
                <Typography variant='h3'> My Customer Dashboard </Typography>
                <h4>Loading...</h4>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </Container>
        )
    } 
    if (!isLoading){
        return (
            <Container sx={{ mt: 12, justifyContent: 'center' }}>
                <Card sx={{ p: 5, maxWidth: 400, minHeight: 500}}>
                    <Typography variant='h3' align='center'> My Customer Dashboard </Typography>
                    <Typography variant='h5' align='center' sx={{mt: 2 }}>Welcome, {currentUser.first_name}</Typography>
                    {/* <h3>My phone: {currentUser.phone}</h3> */}
                    {/* <h3>Farm Name: {farmData.farm_name}</h3> */}
                    
                    {!currentUser.farm?
                        <>
                            <h3>You haven't joined a CSA!</h3>            
                            <Button margin={4} variant='contained' onClick={()=>{navigate('/browse')}}>Browse Available CSAs</Button>
                        </>
                        :<> 
                        {/* <h2>Manage my CSA: {currentUser.farm}</h2> */}
                            {/* <Link 
                            style={{ display: "block", margin: '1rem 0'}}
                            to='my-csa'
                            >
                            Manage my CSA 
                            </Link> */}
                            {/* <Button onClick={()=>{navigate('/my-csa')}}>Manage my CSA</Button>
                            <Button>Edit user information</Button>
                            <Button>Billing </Button>
                            <Button>Delete account</Button> */}

                            <Box>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="text"
                                margin-top={8}
                                fullWidth="true"
                            >
                                <Button onClick={()=>{navigate('/my-csa')}}>Manage my CSA</Button>
                                <Button>Edit user information</Button>
                                <Button>Billing </Button>
                                <Button>Contact Eat Green Seattle </Button>
                                <Button>Delete account</Button>
                            </ButtonGroup>
                            </Box>
                        </>
                    }
                    
                </Card>
            </Container>
        )
    }
}


