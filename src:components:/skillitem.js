// skillitem.js

import React from 'react';
import './skillitem.css'; // Import CSS specific to this component

const SkillItem = ({ name, level }) => {
    return (
        <li className="skill-item">
            <span className="skill-name">{name}</span> - <span className="skill-level">{level}</span>
        </li>
    );
}

export default SkillItem;
