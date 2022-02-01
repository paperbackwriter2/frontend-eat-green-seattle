import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function Login() {
    const [formData, setFormData] = useState( 
        {
            email: '',
            password: ''
        }
    )

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData.email, formData.password)
        signInWithEmailAndPassword(auth, formData.email, formData.password)
           .then((userCredential) => {
               // Signed in
               const user = userCredential.user;
               console.log(user)
               console.log('You are logged in!')
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
                    type='text'
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                />
                <div>
                    <button type='submit'>Sign in</button>
                </div>
                <h5>New User? <a href='/create-account'>Create an account</a></h5>
            </form>
        </div>
    );
};