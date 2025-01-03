import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section footer-left">
                <div className="logo">
                    <div className="circle"></div>
                    <span>UNIVERSITY</span>
                </div>
                <p>Follow us</p>
                <div className="social-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="footer-section footer-middle">
                <div className="links-group">
                    <h4>Academics</h4>
                    <a href="#">Programs</a>
                    <a href="#">Admissions</a>
                    <a href="#">Scholarships</a>
                    <a href="#">Research</a>
                    <a href="#">Library</a>
                </div>
                <div className="links-group">
                    <h4>About</h4>
                    <a href="#">Our History</a>
                    <a href="#">Leadership</a>
                    <a href="#">Accreditation</a>
                    <a href="#">Campus Tour</a>
                </div>
            </div>

            <div className="footer-section footer-right">
                <div className="links-group">
                    <h4>Resources</h4>
                    <a href="#">Student Portal</a>
                    <a href="#">Faculty Portal</a>
                    <a href="#">Alumni Portal</a>
                    <a href="#">Support</a>
                </div>
                <div className="cta">
                    <h4>Join Us</h4>
                    <p>Your academic journey begins here</p>
                    <button className="cta-button">APPLY NOW</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
