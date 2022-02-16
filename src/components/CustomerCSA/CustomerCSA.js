import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext';
import CircularProgress from '@mui/material/CircularProgress'
import { TextField } from '@mui/material'

const url = 'http://localhost:5000/get-farm'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
//         My CSA
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Contact my farm</Button>
//     </CardActions>
//   </React.Fragment>
// );

export default function OutlinedCard() {
    const [farmData, setFarmData] = useState();
    const [compLoading, setCompLoading] = useState(true);

    const {currentUser, setCurrentUser, isLoading} = useAuth()

    const getProfile = ( farm_id)  => {
        axios 
        .post(url, {id: farm_id})
        .then((response) => {
          const farm = response.data;
          setFarmData(farm)
          setCompLoading(false)
          console.log(currentUser)
        })
        .catch((err) => {
          console.log(err.message)
        })
      }

    useEffect(() => {
        console.log('hellloooooo there')
        if(currentUser.farm){
            getProfile(currentUser.farm)
            // setCompLoading(false)
        }
        // console.loe
    }, [isLoading]);

    // const card = (
    // <React.Fragment>
    //     <CardContent>
    //     <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
    //         My CSA 
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //         be{bull}nev{bull}o{bull}lent
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //         adjective
    //     </Typography>
    //     <Typography variant="body2">
    //         well meaning and kindly.
    //         <br />
    //         {'"a benevolent smile"'}
    //     </Typography>
    //     </CardContent>
    //     <CardActions>
    //     <Button size="small">Contact my farm</Button>
    //     </CardActions>
    // </React.Fragment>
    // );

    if (!isLoading && !compLoading){
        console.log(farmData)
        return (
            <Container sx={{ mt: 16, minWidth: 275 }}>
              <Card variant="outlined" sx={{ }}>
                <React.Fragment>
                    <CardContent sx={{ p: 3 }}>
                        <Typography sx={{ fontSize: 30, align:'center' }} color="text.secondary" gutterBottom>
                            My CSA 
                        </Typography>
                        <Typography variant="h5" component="div">
                            {farmData.farm_name}
                        </Typography>
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">Address:</Typography> */}
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {farmData.address_1}                             
                            <br />
                            {farmData.city}, {farmData.state} {farmData.zipcode}
                            <br />
                            Phone: {farmData.phone}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Farm owner(s): {farmData.first_name} {farmData.last_name} 
                        </Typography>
                        <Typography variant="body2">
                            {farmData.farm_bio}
                            <br />
                            {/* {'"a benevolent smile"'} */}
                        </Typography>
                        <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
                            Season Begins: May 2
                            <br />
                            Season Ends: October 15
                            <br />
                            Next Pick Up: May 2
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Next expected produce: squash, rainbox chard, carrots, beets
                        </Typography>
                        <Typography sx={{ mb: .5 }} color="text.secondary">
                            Question or concern? Contact your farm below: 
                        </Typography>
                        <TextField multiline minWidth={300} minRows={5} id="filled-basic" label="Your Message" variant="filled" />
                    </CardContent>
                    <CardActions>
                        <Button sx={{p:2.5}} size="small">Contact my farm</Button>
                    </CardActions>
                </React.Fragment>
              </Card>
            </Container>
          );
    } else {
        return (
            <Container sx={{mt:20}}>
                <Typography><CircularProgress /></Typography>
            </Container>
        )
    }

  
}