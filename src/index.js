import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import OneSignalReact from 'react-onesignal'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);


