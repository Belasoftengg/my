import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = { email, password };

        axios.post('http://localhost:8081/login', values)
            .then(res => {
                if (res.data === 'success') {
                    navigate('/crud'); // Redirect to the home page upon successful login
                } else {
                    alert('Invalid email or password. Please try again.');
                }
            })
            .catch(err => {
                console.error(err);
                alert('An error occurred. Please try again.');
            });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="Label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="Control"
                    required
                    placeholder='enter ur email'
                />
                <label htmlFor="password" className="Label">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="Control"
                    required
                    placeholder='enter ur password'
                />
                <button type="submit" className="Button">Login</button>
                <Link className="bk" to="/signup">Create Account</Link>
            </form>
        </div>
    );
};

export default Login;