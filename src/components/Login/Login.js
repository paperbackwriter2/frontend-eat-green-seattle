import React, { useState, useContext} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { UserContext } from '../../UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material';
import './Login.css'

export default function Login() {

    let navigate = useNavigate();

    const {user, setUser} = useAuth();

    const [formData, setFormData] = useState( 
        {
            email: '',
            password: ''
        }
    )

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(formData.email, formData.password)
        signInWithEmailAndPassword(auth, formData.email, formData.password)
           .then((userCredential) => {
               // Signed in
               const user = userCredential.user;
            //    console.log(user)
            //    console.log(user.uid)
            //    console.log('You are logged in!')
            //    setUser(user.email)
                navigate('customer-dashboard')
           })
           .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
           })
    }

    function handleChange(e) {
        const {name, value} = e.target 
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return(
        <div className='login-wrapper'>
            <Typography variant='h6'>Log In</Typography>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='E-mail'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='input'
                />
                <br />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                    className='input'
                />
                <div>
                    <button className='btn' type='submit'>Sign in</button>
                    {/* <Button variant='contained'>Sign in</Button> */}
                </div>
                {/* <h5>New User? <a href='/create-account'>Create an account</a></h5> */}
                <h5>New User? <Link to='/create-account'>Create an account</Link></h5>
            </form>
        </div>
    );
};