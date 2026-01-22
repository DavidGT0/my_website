import React from 'react';
import './MyProjects.css';

function MyProjects() {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and React Router.",
            technologies: ["React", "CSS", "Vite"]
        },
        {
            id: 2,
            title: "Pac Man Game",
            description: "interactive JavaScript-based game controlled by a wireless ESP32 remote.",
            technologies: ["JavaScript", "HTML", "CSS", "Arduino", "C++"]
        },
        {
            id: 3,
            title: "Simon Says",
            description: "An embedded Simon Says memory game developed in C++ on Arduino, demonstrating low-level hardware control, real-time input handling, and state-based game logic.",
            technologies: ["C++", "Arduino"]
        },
        {
            id: 4,
            title: "To Do List",
            description: "A full-stack To Do list application built using JavaScript and Node.js, The project implements RESTful APIs, CRUD operations, and database-baked persistence using phpMyAdmin.",
            technologies: ["JavaScript", "Node.js", "SQL"]
        }
    ];
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;