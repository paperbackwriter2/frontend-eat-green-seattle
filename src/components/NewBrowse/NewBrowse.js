import React, { useEffect, useState } from 'react';
import { 
    Typography, 
    AppBar, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    CssBaseline, 
    Grid, Toolbar, 
    Container 
} from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { spacing } from '@mui/system';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; 
import Link from '@mui/material/Link';

const url = 'http://localhost:5000/get-all-farms'


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Eat Green Seattle
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const NewBrowse = () => {
    // const classes = useStyles();
    const navigate = useNavigate();
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
                        Find small, local farms committed to the best for their communities and their planet.
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button onClick={()=> navigate('/about')}variant='contained' color='primary'>
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
                        <Grid item sx={{ width: '100%'}}>
                        <Card >
                            <CardMedia
                            component='img'
                            // sx={{
                            //     pt: '56.25%'
                            // }}
                            height='200'
                            // image='https://source.unsplash.com/random'
                            image='https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                            title='Image Title'
                            />
                            <CardContent >
                                <Typography variant='h5' gutterBottom>
                                    {card.farm_name}
                                </Typography>
                                <Typography>
                                    Location: {card.city}, WA
                                </Typography>
                                <Typography>
                                    {card.farm_bio}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    size='small' 
                                    color='primary'
                                    onClick={()=>{navigate(`/profile/${card._id}`)}}
                                >
                                    Learn more
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                    
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Container>

        </main>
    </>
  )
}

export default NewBrowse;

