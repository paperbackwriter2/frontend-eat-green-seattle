import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export default function CustomerDashboard() {
    const {user, setUser} = useContext(UserContext);
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