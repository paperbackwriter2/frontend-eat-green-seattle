import React from 'react';
import axios from 'axios';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './CreateAccount.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const baseURL = 'http://localhost:5000/create-account'

export default function CreateAccount() {
    let navigate = useNavigate();
    const { currentUser, setCurrentUser } = useAuth()
    const [formData, setFormData] = React.useState(
        {
            email: '',
            firstName: '', 
            lastName: '', 
            password: '',
            firebase_id: '',
            zipcode: '',
            phone: '',
            is_farm: false,
            csa_id: null,
            farm_id: null
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
                    console.log('user created successfully')
                    console.log(response.data)
                    const userProfile = response.data
                    console.log('this is where I should be settingCurrentUser')
                    // setCurrentUser({
                    //     email: userProfile.email,
                    //     uid: userProfile.firebase_id,
                    //     first_name: userProfile.first_name,
                    //     last_name: userProfile.last_name,
                    //     created_at: userProfile.created_at
                    //     })
                })
                
                navigate('/')

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
            <h5>Are you a farmer/grower? <Link to='/create-farm'>Create my farm account</Link></h5>
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
                    placeholder='E-mail Address'
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
                    placeholder='Zipcode'
                    name='zipcode'
                    onChange={handleChangeEvent}
                    value={formData.zipcode}
                />
                <br />
                <input
                    type='text'
                    placeholder='Phone Number'
                    name='phone'
                    onChange={handleChangeEvent}
                    value={formData.phone}
                />
                <br />
                <label htmlFor='is_farm'>Select account type:</label>
                <select
                    id='is_farm'
                    value={formData.is_farm}
                    onChange={handleChangeEvent}
                    name='is_farm'
                >
                    <option >--Select--</option>
                    <option value={false}>Customer</option>
                    <option value={true}>Farmer</option>
                </select>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div> 
    );
};
