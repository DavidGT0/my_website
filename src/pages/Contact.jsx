import React from 'react';
import { useLanguage } from '../LanguageContext';
import './Contact.css';

function Contact() {
    const { t } = useLanguage();

    return (
        <div className="contact-container">
            <h1>{t('contact1')}<span>{t('contact2')}</span></h1>
            <p>{t('contactDesc')}</p>

            <div className="contact-info">
                <div className="contact-item">
                    <span style={{fontSize: '2rem'}}>🔗</span>
                    <div className="contact-item-body">
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/davidgazit/" className="email-button" target="_blank" rel="noopener noreferrer">
                            {t('linkedInProfile')}
                        </a>
                    </div>
                </div>
                <div className="contact-item">
                    <span style={{fontSize: '2rem'}}>📧</span>
                    <div className="contact-item-body">
                        <h3>Email</h3>
                        <a href="mailto:gazit.david@gmail.com" className="email-button">
                            gazit.david@gmail.com
                        </a>
                    </div>
                </div>
                <div className="contact-item">
                    <span style={{fontSize: '2rem'}}>📱</span>
                    <div className="contact-item-body">
                        <h3>Phone</h3>
                        <a href="tel:+972545547730" className="email-button">
                            054-5547730
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;