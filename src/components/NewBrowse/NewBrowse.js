import React, { useEffect, useState } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { spacing } from '@mui/system';
import axios from 'axios'


const url = 'http://localhost:5000/get-all-farms'

// const cards = [
//     {
//         farm_name:'Happy Farm',
//         city: 'Duvall'
//     },
//     {
//         farm_name:'Windy Farm',
//         city: 'Monroe'
//     },
//     {
//         farm_name:'Family Ranch',
//         city: 'Woodinville'
//     }
//     ]


const NewBrowse = () => {
    // const classes = useStyles();
    const [farmList, setFarmList] = useState([{farm_name: 'loading Farms'}])
    // const [isLoading, setLoading] = useState(true);

    const getFarms = ()  => {
        // console.log('getting farm info')
        const farms = axios 
        .get(url)
        .then((response) => {
          const farms = response.data;
          console.log(`this is farms: ${farms}`)
          console.log(farms[0])
          setFarmList(farms)
        //   setLoading(false)
        //   console.log(`this is farmList ${farmList}`)
        })
        .catch((err) => {
          console.log(err)
        })
        // return response
        // console.log(response)
      }
    
    //   getFarms()
    useEffect(() => {
        getFarms();
    }, []);
  return (
    <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                {/* <PhotoCamera /> */}
                <Typography variant='h6'>
                    Browse
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div >
                <Container maxWidth='sm' sx={{mt: '100px'}}>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Find Local Farms
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Hello everyone. This is where you can search for different farms.
                        Support your local farmers and producers!
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    Learn More
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth='md' sx={{ my: '50px'}}>
                <Grid container spacing={4} >
                    {farmList.map((card) => (
                        <Grid item>
                        <Card>
                            <CardMedia
                            component='img'
                            // sx={{
                            //     pt: '56.25%'
                            // }}
                            height='140'
                            image='https://source.unsplash.com/random'
                            title='Image Title'
                            />
                            <CardContent>
                                <Typography variant='h5' gutterBottom>
                                    {card.farm_name}
                                </Typography>
                                <Typography>
                                    Location: {card.city}, WA
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>Learn more</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                    
                </Grid>
            </Container>

        </main>
    </>
  )
}

export default NewBrowse;

