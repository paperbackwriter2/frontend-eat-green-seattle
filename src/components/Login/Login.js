import React, { useState, useContext} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { UserContext } from '../../UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

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
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='E-mail'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                />
                <div>
                    <button type='submit'>Sign in</button>
                </div>
                {/* <h5>New User? <a href='/create-account'>Create an account</a></h5> */}
                <h5>New User? <Link to='/create-account'>Create an account</Link></h5>
            </form>
        </div>
    );
};