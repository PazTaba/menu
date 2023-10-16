import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


import './SignUp.css';

function SignUp() {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/signup', {
                name,
                password,
            });

            if (response.data === 'not exist') {
                alert('ההרשמה הצליחה');
            } else {
                alert('שם משתמש כבר קיים, בבקשה נסה שם אחר.');
            }
        } catch (error) {
            alert('שגיאה בהרשמה, אנא נסה שוב.');
            console.error(error);
        }
    };

    return (
        <div className="sign-up">
            <h1 className="header">הרשמה</h1>
            <form onSubmit={submit}>
                <div className="input-container">
                    <input
                        className="input-password"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="שם משתמש"
                    />
                    <input
                        className="input-password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="סיסמה"
                    />
                </div>
                <div className="submit">
                    <button className="button-submit" type="submit">
                        הרשם
                    </button>
                </div>
            </form>

            <br />

            <p>או</p>
            <br />
            <NavLink to="/login" className="goToLogin">
                התחבר
            </NavLink>
        </div>
    );
}

export default SignUp;