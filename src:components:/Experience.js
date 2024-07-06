// experience.js

import React from 'react';
import ExperienceItem from './experienceitem';
import './experience.css'; // Import the CSS file for the experience section

// Sample experience data
const experiences = [
    {
        title: 'Substitute Teacher',
        company: 'Kelly Education',
        duration: '3 years',
        description: 'Responsible for managing classroom activities and providing instruction in the absence of the regular teacher.'
    },
    {
        title: 'Receptionist',
        company: 'Belle La Vie Salon and Spa',
        duration: '2 years',
        description: 'Handled front desk operations, answered phone calls, and assisted with administrative tasks.'
    }
];

// Experience Component
const Experience = () => {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        title={exp.title}
                        company={exp.company}
                        duration={exp.duration}
                        description={exp.description}
                    />
                ))}
            </ul>
        </section>
    );
}

export default Experience;