// app.js

import React from 'react';
import PersonalInfo from './personalinfo';
import Skills from './skill';
import Experience from './experience';
import Education from './education';
import './app.css'; // Import the main CSS file for the application

// Main App Component
const App = () => {
    return (
        <div className="app">
            <header>
                <h1>About Me</h1>
            </header>
            <main>
                <PersonalInfo />
                <Skills />
                <Experience />
                <Education />
            </main>
            <footer>
                <p>&copy; 2024 Gabriela Terrazas</p>
            </footer>
        </div>
    );
}

export default App;