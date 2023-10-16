import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import ChooseTable from './pages/choose_table/ChooseTable';
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/sign_up/SignUp';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/table" element={<ChooseTable />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
