import React from 'react';
import { useLanguage } from '../LanguageContext';
import './MyProjects.css';

function MyProjects() {
    const { t } = useLanguage();

    const projects = [
        {
            id: 1,
            title: t('proj1_title'),
            description: t('proj1_desc'),
            technologies: ["React", "CSS", "Vite", "AWS"],
            githubUrl: "https://github.com/DavidGT0/my_website",
            liveUrl: null
        },
        {
            id: 2,
            title: t('proj2_title'),
            description: t('proj2_desc'),
            technologies: ["JavaScript", "HTML", "CSS", "Arduino", "C++"],
            githubUrl: "https://github.com/DavidGT0/pac_man_game",
            liveUrl: "https://davidgt0.github.io/pac_man_game"
        },
        {
            id: 3,
            title: t('proj3_title'),
            description: t('proj3_desc'),
            technologies: ["C++", "Arduino"],
            githubUrl: "https://github.com/DavidGT0/simon_says",
            liveUrl: null
        },
        {
            id: 4,
            title: t('proj4_title'),
            description: t('proj4_desc'),
            technologies: ["JavaScript", "Node.js", "SQL"],
            githubUrl: "https://github.com/DavidGT0/todo_list",
            liveUrl: null
        },
        {
            id: 5,
            title: t('proj5_title'),
            description: t('proj5_desc'),
            technologies: ["JavaScript", "HTML"],
            githubUrl: "https://github.com/DavidGT0/memory_game",
            liveUrl: "https://davidgt0.github.io/memory_game"
        },
        {
            id: 6,
            title: t('proj6_title'),
            description: t('proj6_desc'),
            technologies: ["React", "CSS", "Vite"],
            githubUrl: "https://github.com/DavidGT0/my-math-app",
            liveUrl: "https://davidgt0.github.io/my-math-app"
        },
        {
            id: 7,
            title: t('proj7_title'),
            description: t('proj7_desc'),
            technologies: ["Arduino", "C++", "ESP8266", "WiFi"],
            githubUrl: "https://github.com/DavidGT0/escape_room_iot",
            liveUrl: null
        },
        {
            id: 8,
            title: t('proj8_title'),
            description: t('proj8_desc'),
            technologies: ["ESP32", "Node.js", "MongoDB", "React", "C++", "Vite"],
            githubUrl: "https://github.com/DavidGT0/Temperature_sensor",
            liveUrl: "https://temperature-sensor-kappa.vercel.app"
        }
    ];

    return (
        <div className="projects-container">
            <h1>{t('projectsTitle')}</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="card-top">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="card-bottom">
                            <div className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="card-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                                    {t('viewGithub')}
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo-link">
                                        {t('liveDemo')}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;