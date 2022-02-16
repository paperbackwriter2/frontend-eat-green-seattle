import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { maxWidth } from '@mui/system';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const url = 'http://localhost:5000/get-farm'
const subscribeURL = 'http://localhost:5000/subscribe'

const FarmProfile = () => {
    const {currentUser, setCurrentUser} = useAuth()
    console.log(currentUser)
    const [farmData, setFarmData] = useState();
    const [isLoading, setLoading] = useState(true);

    // const {currentUser, setCurrentUser} = useAuth()
    // console.log(currentUser)
    // console.log(`I'm in FarmProfile ${currentUser}`)
    // console.log(currentUser)

    let navigate = useNavigate();

    let { farm_id } = useParams();
    // console.log(`farm_id outisde function: ${farm_id}`)

    const subscribeToCsa = (user_id, farmID) => {
        // console.log(currentUser)
        console.log(`user ${currentUser.id}`)
        console.log(`farm ${farm_id}`)
        axios 
        .post(subscribeURL, {user: currentUser.id, farm: farm_id})
        // .get(url)
        .then((response) => {
          const farm = response.data;
          console.log(farm)
        //   console.log(`this is the farm: ${response.data}`)
        //   console.log(farm.farm_name)
        //   setFarmData(farm)
        //   setLoading(false)
        //   setLoading(false)
        //   console.log(`this is farmList ${farmList}`)
        //   console.log(currentUser)
          window.location.reload(false);
        //   navigate('/customer-dashboard')
        })
            
        //   navigate('/customer-dashboard')
        .catch((err) => {
          console.log(err.message)
        })
        navigate('/customer-dashboard')
        // return farm
        // console.log(`this is farm: ${farm}`)
    }

    const getProfile = ( farm_id)  => {
        // console.log(currentUser)
        // console.log(user.id)
        // console.log(currentUser)
        // console.log('getting farm info')
        // console.log(`farm_id inside react ${farm_id}`)
        axios 
        .post(url, {id: farm_id})
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
        getProfile(farm_id, currentUser);
        // console.log(currentUser)
    }, []);

    // useEffect(() => {
    //     async function getProfile( farm_id ) {
    //         // console.log('getting farm info')
    //         // console.log(`farm_id inside react ${farm_id}`)
    //         axios 
    //         .post(url, {id: farm_id})
    //         // .get(url)
    //         .then((response) => {
    //           const farm = response.data;
    //           console.log(`this is the farm: ${response.data}`)
    //           console.log(farm.farm_name)
    //           setFarmData(farm)
    //         //   setLoading(false)
    //         //   console.log(`this is farmList ${farmList}`)
    //         })
    //         .catch((err) => {
    //           console.log(err.message)
    //         })
    //         // return response
    //         // console.log(response)
    //       }
    //     getProfile(farm_id)
    // }, []);

    // return (
    //     <div>
    //         {/* <h1>{farmData.farm_name}</h1> */}
    //         <h3>Farm ID: {farm_id} </h3>
    //         {/* <h1>{farmData.farm_name}</h1> */}
    //     </div>
        

    // )
    if (isLoading) {
        return (
            <div style={{ justifyContent:'center', textAlign:'center'}}>
                <h2>Loading farm profile</h2>
                <Box sx={{align:'center', display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }

    return (
        <Container sx={{mt: 20, justifyContent:'center', textAlign:'center', }}>
            {/* <Button variant='contained' style={{marginBottom:'50px'}}>Join this CSA</Button> */}
            {/* <h4>{farm_id}</h4> */}
            <img mb='100px' style={{maxWidth:'40%', justifyContent:'center', marginBottom:'20px'}} alt='sunny farm' src='https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            {/* <h1>{farmData.farm_name}</h1> */}
            <Container maxWidth='m' align='center' style={{justifyContent:'center'}}>
                <Typography gutterBottom gutterTop variant='h2'>{farmData.farm_name}</Typography>
                <Typography variant='h5'>Location: {farmData.city}, {farmData.state}</Typography>
                <Typography gutterBottom variant='h6'>Phone: {farmData.phone}</Typography>
                <Typography maxWidth='50%' variant='body1' >About Us: {farmData.farm_bio}</Typography>
                <Typography gutterTop gutterBottom variant='h6' >Available shares: {farmData.max_shares}</Typography>
                <Button onClick={()=>subscribeToCsa()}variant='contained' style={{marginBottom:'50px'}}>Join this CSA</Button>
            </Container>
            
            {/* <h3>Phone: {farmData.phone}</h3>
            <h4>Location: {farmData.city}, {farmData.state}</h4>
            <h4>About Us {farmData.farm_bio}</h4>
            <h4>Available shares: {farmData.max_shares}</h4> */}
            {/* <Link href='http://localhost:3000/browse' marginBottom='30px' gutterBottom style={{marginBottom:'20px'}}>
                Return to browsing all CSAs
            </Link> */}
            <Button mb='200px' onClick={()=>navigate('/browse')}>Return to browsing</Button>
        </Container>
    )
}

export default FarmProfile