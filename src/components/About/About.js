import React from 'react';
import './About.css'
import { Typography, Container } from '@mui/material'
import Link from '@mui/material/Link';

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

export default function About() {
    return (
        <Container sx={{ mt: 20}}>
            <Typography variant='h2'>What is a CSA?</Typography>
            <Typography variant='p'>
                Community Supported Agriculture allows individuals to enjoy 
                weekly or biweekly shares of produce while supporting small farms in their communities.
            </Typography>
            <br />
            <Typography variant='p'>
                Join us on our journey to revitalizing our food systems!
            </Typography>
            <Copyright />
        </Container>
    )
}