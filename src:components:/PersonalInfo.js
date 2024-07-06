// personalinfo.js

import React from 'react';
import './personalinfo.css'; // Import CSS specific to this component

const PersonalInfo = () => {
    return (
        <div className="personal-info">
            <h1>Gabriela Terrazas</h1>
            <p>
                Business Analytics and Information Systems major at the University of South Florida.
                I live in Plant City, FL and am currently working as a Substitute Teacher (3 years).
                Previously, I worked as a receptionist at Belle La Vie Salon and Spa for 2 years.
                I graduated with my Associates from Hillsborough Community College in 2019 and from Plant City High School in 2016.
            </p>
            <p>Email: <a href="mailto:gterrazas1@usf.edu">gterrazas1@usf.edu</a></p>
        </div>
    );
}

export default PersonalInfo;
