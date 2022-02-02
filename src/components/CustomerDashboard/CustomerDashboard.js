import React, { useContext } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserContext } from '../../UserContext';

export default function CustomerDashboard() {
    // const {user, setUser} = useContext(UserContext);
    const { user } = useAuth()
    return (
        <div>
            <h1>Customer Dashboard</h1>
            <h3>
                My CSA
            </h3>
            <p>User: {user}</p>
        </div>
    )
}