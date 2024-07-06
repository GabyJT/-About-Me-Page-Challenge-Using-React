// experienceitem.js

import React from 'react';
import './experienceitem.css'; // Import the CSS file for the experience item

// ExperienceItem Component
const ExperienceItem = ({ title, company, duration, description }) => {
    return (
        <li className="experience-item">
            <h3>{title}</h3>
            <p className="company">{company}</p>
            <p className="duration">{duration}</p>
            <p className="description">{description}</p>
        </li>
    );
}

export default ExperienceItem;