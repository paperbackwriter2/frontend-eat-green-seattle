import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'

// function handleSubmit(e) {
//     e.preventDefault()
//     signup(emailRef.current.value, passwordRef.current.value)
// }

export default function CreateAccount() {

    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const firstNameRef = useRef()

    // const { signup } = useAuth()


    return(
        <div className='login-wrapper'>
            <h1>Create a new account</h1>
            <button>I want to join a CSA</button>
            <button>I'm a farmer</button>
            <form>
                <label>
                    <p>First name</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Last name</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Email address</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Password</p>
                    <input type='text' />
                </label>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div> 
    );
};



{/* <>
<Card>
    <Card.Body>
       <h2 className='text-center mb-4'>Create Account</h2>
       <Form>
           <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required />
           </Form.Group>
           <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required />
           </Form.Group>
           <Form.Group id='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='firstName' ref={firstNameRef} required />
           </Form.Group>
           <Button className='w-100' type='submit'>Create My Account</Button>
       </Form>
    </Card.Body>
</Card>
<div className="w-100 text-center mt-2">
    Already have an account? Log In
</div>
</> */}