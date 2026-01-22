import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Feel free to contact me! I'd love to hear from you.</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <h3>📧 Email</h3>
                    <a href="mailto:gazit.david@gmail.com" className="email-button">
                        gazit.david@gmail.com
                    </a>
                </div>
                
                <div className="contact-item">
                    <h3>📱 Phone</h3>
                    <a href="tel:+972545547730" className="email-button">
                        054-5547730
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;