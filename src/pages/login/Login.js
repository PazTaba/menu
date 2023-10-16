
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Login.css';
import { setUserInfo } from "../../components/reducers/userInfoReducers";
import { useNavigate } from "react-router";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:    3002/login', {
                name,
                password,
            });
            console.log(response.data)
            if (response.data.user.name === name) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                localStorage.setItem('name', name);
                dispatch(setUserInfo(response.data));

                navigate("/menu");
            } else {
                alert('שם משתמש או סיסמה שגויים, בבקשה נסה שוב או הרשם');
            }
        } catch (error) {
            alert('שגיאה בהתחברות, אנא נסה שוב');
            console.error(error);
        }
    };

    return (
        <div className="main-container">
            <div className="login">
                <h1 className="header">התחברות</h1>
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
                        <input type="submit" value="התחבר" className="button-submit"/>
                    </div>
                    <br/>
                    <p>או</p>
                    <br/>
                    <NavLink to="/signup" className="goToSignUp">
                        הרשם
                    </NavLink>
                </form>
            </div>
        </div>
    );
}

export default Login;

