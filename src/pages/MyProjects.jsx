import React from 'react';
import './MyProjects.css';

function MyProjects() {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and React Router.",
            technologies: ["React", "CSS", "Vite"],
            githubUrl: "https://github.com/DavidGT0/my_website",
            liveUrl: null
        },
        {
            id: 2,
            title: "Pac Man Game",
            description: "interactive JavaScript-based game controlled by a wireless ESP32 remote.",
            technologies: ["JavaScript", "HTML", "CSS", "Arduino", "C++"],
            githubUrl: "https://github.com/DavidGT0/pac_man_game",
            liveUrl: "https://davidgt0.github.io/pac_man_game"
        },
        {
            id: 3,
            title: "Simon Says",
            description: "An embedded Simon Says memory game developed in C++ on Arduino, demonstrating low-level hardware control, real-time input handling, and state-based game logic.",
            technologies: ["C++", "Arduino"],
            githubUrl: "https://github.com/DavidGT0/simon_says",
            liveUrl: null
        },
        {
            id: 4,
            title: "To Do List",
            description: "A full-stack To Do List application built using JavaScript and Node.js, The project implements RESTful APIs, CRUD operations, and database-baked persistence using phpMyAdmin.",
            technologies: ["JavaScript", "Node.js", "SQL"],
            githubUrl: "https://github.com/DavidGT0/todo_list",
            liveUrl: null
        },
        {
            id: 5,
            title: "Memory Game",
            description: "A simple memory game built using JavaScript and HTML.",
            technologies: ["JavaScript", "HTML"],
            githubUrl: "https://github.com/DavidGT0/memory_game",
            liveUrl: "https://davidgt0.github.io/memory_game"
        },
        {
            id: 6,
            title: "my-math-app",
            description: "Fun and responsive math game for kids – practice addition, subtraction, multiplication, and division.",
            technologies: ["React", "CSS", "Vite"],
            githubUrl: "https://github.com/DavidGT0/my-math-app",
            liveUrl: "https://davidgt0.github.io/my-math-app"
        },
        {
          id: 7,
          title: "escape_room_iot",
          description: "A dual-ESP8266 IoT Escape Room system featuring synchronized sensory puzzles, real-time WiFi communication, and a central locking mechanism.",
          technologies: ["Arduino", "C++", "ESP8266", "WiFi"],
          githubUrl: "https://github.com/DavidGT0/escape_room_iot",
          liveUrl: null  
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
                        <div className="card-links">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                               className="github-link">View on GitHub
                            </a>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                   className="live-demo-link">Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;