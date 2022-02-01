import React, { useState } from 'react';

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
            </form>
        </div>
    );
};