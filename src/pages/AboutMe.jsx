import React from 'react';
import profilePic from '../pics/profilePic.png';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-container">
            <h1>About <span>Me</span></h1>
            <p className="about-subtitle">Practical Software Engineering Student</p>
            <div className="about-layout">
                <div className="about-text">
                    <section className="bio">
                        <p>
                            I am a second-year Practical Software Engineering student with a strong passion for writing code
                            and building meaningful projects. I enjoy turning ideas into working software and
                            continuously improving my technical skills through hands-on development.
                        </p>
                        <p>
                            Throughout my studies, I have developed several substantial projects that I am very
                            proud of. These projects allowed me to gain practical experience in full stack
                            development, hardware programming, and problem-solving beyond theoretical learning.
                        </p>
                        <p>
                            Alongside my studies, I have a background in sales, which helped me develop strong
                            communication skills, responsibility, and a results-oriented mindset. Today, I am
                            actively pursuing a career transition into the software industry.
                        </p>
                    </section>
                </div>
                <div className="profile-section">
                    <div className="profile-image-wrapper">
                        <img src={profilePic} alt="David" className="profile-image" />
                    </div>
                </div>
            </div>

            <section className="skills">
                <h2>My <span>Skills</span></h2>
                <ul>
                    <li>HTML & CSS</li>
                    <li>React & JavaScript</li>
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