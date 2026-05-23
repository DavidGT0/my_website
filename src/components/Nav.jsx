import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext'; // ודא שהנתיב לקובץ ה-Context נכון
import './Nav.css';

function Nav() {
    const [activeSection, setActiveSection] = useState('home');
    const { t, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-logo">
                    {t('logo')}
                </a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                            className={activeSection === 'home' ? "nav-links active" : "nav-links"}
                        >
                            {t('navHome')}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                            className={activeSection === 'projects' ? "nav-links active" : "nav-links"}
                        >
                            {t('navProjects')}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                            className={activeSection === 'about' ? "nav-links active" : "nav-links"}
                        >
                            {t('navAbout')}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                            className={activeSection === 'contact' ? "nav-links active" : "nav-links"}
                        >
                            {t('navContact')}
                        </a>
                    </li>
                    <li className="nav-item">
                        <button onClick={toggleLanguage} className="lang-toggle-btn">
                            {t('toggleLanguage')}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;