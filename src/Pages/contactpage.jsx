import React from 'react';
import './contactpage.css';

const ContactUs = () => {
    return (
        <div className="contact-page-container">
            <div className="contact-page-title">
                <h1>Contact Us</h1>
                <p>We would love to hear from you. Reach out to us anytime!</p>
            </div>
            <div className="contact-page-form">
                <input type="text" placeholder="Your Name" className="input-field" />
                <input type="email" placeholder="Your Email" className="input-field" />
                <textarea placeholder="Your Message" className="input-field textarea"></textarea>
                <button className="submit-button">Send Message</button>
            </div>
            <div className="contact-page-animation">
                <div className="contact-page-circle"></div>
                <div className="contact-page-square"></div>
            </div>
        </div>
    );
};

export default ContactUs;
