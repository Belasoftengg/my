import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './SignUp.css';
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill out all fields.');
        } else if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
        } else {
            const values = { name, email, password };
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='enter ur Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder='enter ur Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="enter ur Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                <Link to="/">Login</Link>
            </form>
        </div>
    );
};

export default SignUp;