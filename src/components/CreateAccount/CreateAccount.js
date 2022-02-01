import React from 'react';
import { auth } from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateAccount() {
    const [formData, setFormData] = React.useState(
        {
            firstName: '', 
            lastName: '', 
            email: '', 
            password: '',
            accountType: ''
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
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

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
