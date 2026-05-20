import React from 'react';
import './Home.css';

function Home() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="home-container">
            <section className="hero">
                <h1>Hello, I'm <span>David Gazit</span></h1>
                <h2>Practical Software Engineering Student | Full Stack Developer</h2>
                <p>I build web applications, interactive projects, and hardware-integrated solutions.</p>
                <p>Discover my projects and technical skills.</p>
                <div className="hero-buttons">
                    <button onClick={() => scrollToSection('projects')} className="btn-primary">
                        My Projects
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="btn-outline">
                        Contact Me
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;