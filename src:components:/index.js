// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the global CSS file
import App from './App'; // Import the main App component

// Render the App component into the root element
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // The root element where the React app will be mounted
);
