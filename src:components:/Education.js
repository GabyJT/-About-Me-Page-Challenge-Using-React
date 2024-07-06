// education.js

import React from 'react';
import './education.css'; // Import the CSS file for styling

// Education Component
const Education = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <ul>
                <li>
                    <h3>University of South Florida</h3>
                    <p>Business Analytics and Information Systems Major</p>
                    <p>Tampa, FL</p>
                </li>
                <li>
                    <h3>Hillsborough Community College</h3>
                    <p>Associates Degree in Business Administartion, Minor in International Business</p>
                    <p>Graduated: 2019</p>
                </li>
                <li>
                    <h3>Plant City High School</h3>
                    <p>High School Diploma</p>
                    <p>Graduated: 2016</p>
                </li>
            </ul>
        </section>
    );
}

export default Education;