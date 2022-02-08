import React from 'react';
import axios from 'axios';
import { auth } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './CreateFarm.css'
import { Link, useNavigate } from 'react-router-dom'

const baseURL = 'http://localhost:5000/new-farm'


export default function CreateAccount() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = React.useState(
        {
            farmName: '',
            firstName: '', 
            lastName: '', 
            email: '', 
            password: '',
            address_1: '',
            address_2: '',
            city: '',
            // HOW CAN I MAKE THIS A STATE DROPDOWN
            state: '',
            zipcode: '',
            phone: '',
            farm_bio: '',
            organic: '',
            firebase_id: '',
        }
    )

    // console.log(formData)

    function handleChangeEvent(e) {
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(formData)
        // send POST request to create account 
        const email = formData.email;
        const password = formData.password;

        console.log(`organic: ${formData.organic}`)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // console.log(`this si what I get ${user.uid}`)
                formData.firebase_id = user.uid;
                // console.log(formData);
                axios
                .post(baseURL, formData)
                .then((response) => {
                    console.log(response.data)
                })
                navigate('/farm-dashboard')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        
            // axios
            //     .post(baseURL, formData)
            //     .then((response) => {
            //         console.log(response.data)
            //     })

    }


    return(
        <div className='register-wrapper'>
            <h1>Create a new account</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Farm name' 
                    name='farmName'
                    onChange={handleChangeEvent}
                    value={formData.farmName}
                />
                <br />
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
                <input
                    type='text'
                    placeholder='Address line 1'
                    name='address_1'
                    onChange={handleChangeEvent}
                    value={formData.address_1}
                />
                <br />
                <input
                    type='text'
                    placeholder='Address line 2'
                    name='address_2'
                    onChange={handleChangeEvent}
                    value={formData.address_2}
                />
                <br />
                <input
                    type='text'
                    placeholder='City'
                    name='city'
                    onChange={handleChangeEvent}
                    value={formData.city}
                />
                <br />
                <input
                    type='text'
                    placeholder='State'
                    name='state'
                    onChange={handleChangeEvent}
                    value={formData.state}
                />
                <br />
                <input
                    type='text'
                    placeholder='Zipcode'
                    name='zipcode'
                    onChange={handleChangeEvent}
                    value={formData.zipcode}
                />
                <br />
                <input
                    type='text'
                    placeholder='Phone'
                    name='phone'
                    onChange={handleChangeEvent}
                    value={formData.phone}
                />
                <br />
                <input
                    type='text'
                    placeholder='Tell us about your farm.'
                    name='farm_bio'
                    onChange={handleChangeEvent}
                    value={formData.farm_bio}
                />
                <br />
                <label htmlFor='organic'>Is your farm certified organic?:</label>
                <select
                    id='organic'
                    value={formData.organic}
                    onChange={handleChangeEvent}
                    name='organic'
                >
                    <option >--Select option--</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <div>
                    <button type='submit'>Submit</button>
                </div>
  

            </form>
        </div> 
    );
};
