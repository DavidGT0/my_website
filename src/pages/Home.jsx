import React from 'react';
import { useLanguage } from '../LanguageContext';
import './Home.css';

function Home() {
    const { t } = useLanguage();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="home-container">
            <section className="hero">
                <h1>{t('hello')}<span>{t('name')}</span></h1>
                <h2>{t('homeSubtitle')}</h2>
                <p>{t('homeDesc1')}</p>
                <p>{t('homeDesc2')}</p>
                <div className="hero-buttons">
                    <button onClick={() => scrollToSection('projects')} className="btn-primary">
                        {t('btnProjects')}
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="btn-outline">
                        {t('btnContact')}
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;