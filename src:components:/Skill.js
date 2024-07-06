// skill.js

import React from 'react';
import SkillItem from './skillitem'; // Import SkillItem component
import './skill.css'; // Import CSS specific to this component

const Skill = () => {
    // Define skill data
    const skills = [
        { name: 'JavaScript', level: 'Beginner' },
        { name: 'React', level: 'Beginner' },
        { name: 'D3.js', level: 'Beginner' },
        { name: 'Python', level: 'Beginner' }
    ];

    return (
        <div className="skill">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <SkillItem
                        key={index}
                        name={skill.name}
                        level={skill.level}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Skill;
