import React from 'react';
import { LogoHtml } from './logos/Logos';

const ProjectItem = ({ skills, name, color, link}) => (
    <div className={`project-item project-item--${color}`}>
        <img className="project-item__image" src={`/images/${name}-picture.png`} alt={`A screenshot of ${name}`} />
        <div className="project-item__overlay">
            <h3 className="project-item__title">{name}</h3>
            <h4>A single page React app to help you manage your expenses!</h4>
            <ul>
                {skills.map((Logo, key) => (
                    <li key={key}><Logo /></li>
                ))}
            </ul>
            <a href={link}></a>
        </div>
    </div>
);

export default ProjectItem;