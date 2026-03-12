import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <section className="hero">
                <h1>Hello, I'm <span>David Gazit</span></h1>
                <h2>Practical Software Engineering Student | Full Stack Developer</h2>
                <p>I build web applications, interactive projects, and hardware-integrated solutions.</p>
                <p>Discover my projects and technical skills.</p>
                <div className="hero-buttons">
                    <Link to="/projects" className="btn-primary">My Projects</Link>
                    <Link to="/contact" className="btn-outline">Contact Me</Link>
                </div>
            </section>
        </div>
    );
}

export default Home;