import React from 'react';
import { useLanguage } from '../LanguageContext';
import profilePic from '../pics/profilePic.png';
import './AboutMe.css';

function AboutMe() {
    const { t } = useLanguage();

    return (
        <div className="about-container">
            <h1>{t('about1')}<span>{t('about2')}</span></h1>
            <p className="about-subtitle">{t('aboutSubtitle')}</p>
            <div className="about-layout">
                <div className="about-text">
                    <section className="bio">
                        <p>{t('bio1')}</p>
                        <p>{t('bio2')}</p>
                        <p>{t('bio3')}</p>
                    </section>
                </div>
                <div className="profile-section">
                    <div className="profile-image-wrapper">
                        <img src={profilePic} alt="David" className="profile-image" />
                    </div>
                </div>
            </div>

            <section className="skills">
                <h2>{t('skills1')}<span>{t('skills2')}</span></h2>
                <ul>
                    <li>HTML & CSS</li>
                    <li>React & JavaScript</li>
                    <li>Node.js</li>
                    <li>C & C# & C++</li>
                    <li>SQL</li>
                    <li>Arduino & IoT</li>
                    <li>PHP</li>
                    <li>Web Security</li>
                    <li>QA Automation</li>
                    <li>OOP</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutMe;