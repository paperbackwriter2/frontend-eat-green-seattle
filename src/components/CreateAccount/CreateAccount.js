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

    const [formData, setFormData] = React.useState(
        {
            firstName: '', 
            lastName: '', 
            email: '', 
            password: '',
            isFarmer: false,
            accountType: ''
        }
    )

    // console.log(formData)

    function handleChangeEvent(e) {
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: (type === 'checkbox' ? checked : value)
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        return console.log(formData)
        // return console.log(`My form: ${formData}`)
        // send POST request to API to create account in db
    }


    return(
        <div className='login-wrapper'>
            <h1>Create a new account</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='First name' 
                    name='firstName'
                    onChange={handleChangeEvent}
                    value={formData.firstName}
                />
                <br />
                <input 
                    type='text'
                    placeholder='Last name' 
                    name='lastName'
                    onChange={handleChangeEvent}
                    value={formData.lastName}
                />
                <br />
                <input 
                    type='text'
                    placeholder='E-mail'
                    name='email'
                    onChange={handleChangeEvent}
                    value={formData.email}
                />
                <br />
                <input
                    type='text'
                    placeholder='Password'
                    name='password'
                    onChange={handleChangeEvent}
                    value={formData.password}
                />
                <br />
                <br />
                <label htmlFor='accountType'>Select account type:</label>
                <select
                    id='accountType'
                    value={formData.accountType}
                    onChange={handleChangeEvent}
                    name='accountType'
                >
                    <option value='Farmer'>Farmer</option>
                    <option value='Consumer'>Consumer</option>
                </select>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div> 
    );
};

{/* <input
type='checkbox'
id='isFarmer'
checked={formData.isFarmer}
onChange={handleChangeEvent}
name='isFarmer'
/>
<label htmlFor='isFarmer'>Are you a farmer/producer?</label> */}