import React from 'react';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './components/store/store'; // שנה את הייבוא ל-default import
import { createRoot } from 'react-dom/client'; // שימוש ב-"react-dom/client" במקום "react-dom"
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
