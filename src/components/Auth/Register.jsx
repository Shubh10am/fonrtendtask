import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare data for the POST request
        const data = {
            name: name,
            email: email,
            password: password
        };

        try {
            // Make a POST request to localhost:5000
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            // Assuming the response contains some indication of successful registration,
            // you might want to handle it here

            // Optionally, you could also log in the user after successful registration
            // Example: login(email, password);
        } catch (error) {
            console.error('Error registering:', error.message);
            // Handle error, such as displaying an error message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
