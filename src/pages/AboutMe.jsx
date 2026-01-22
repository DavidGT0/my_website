import React from 'react';
import profilePic from '../pics/profile.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="profile-section">
                <img
                    src={profilePic} 
                    alt="David"
                    className="profile-image"               
                />
            </div>
            <section className="bio">
                <p>
                    I'm a passionate full stack developer.
                </p>
            </section>
            
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML & CSS</li>
                    <li>React & JavaScript</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>C & C# & C++</li>
                    <li>SQL</li>
                    <li>Arduino</li>
                    <li>PHP</li>
                    <li>Web Security</li>
                    <li>QA Automation</li>
                    <li>IoT</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutMe;