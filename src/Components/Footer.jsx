import React from 'react';
import './Footer.css';
import logoWhite from '../Images/unicore logo white.png'

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-section-footer-content">
                <div className="footer-section-footer-main">
                    <div className="footer-section-footer-brand">
                        <div className="footer-section-logo-container">
                            <div className="footer-section-logo-animation"><img src={logoWhite} alt="" /></div>
                        </div>
                        <p className="footer-section-brand-description">
                            Revolutionizing education management with cutting-edge technology and intuitive design.
                        </p>
                        <div className="footer-section-social-links">
                            <a href="https://www.instagram.com/itz__your__akil/" className="footer-section-social-link">
                                <svg className="footer-section-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2.16c3.2 0 3.59 0 4.86.07 1.17.07 2.2.48 3.05 1.34.85.85 1.27 1.88 1.34 3.05.07 1.27.07 1.66.07 4.86s0 3.59-.07 4.86c-.07 1.17-.48 2.2-1.34 3.05-.85.85-1.88 1.27-3.05 1.34-1.27.07-1.66.07-4.86.07s-3.59 0-4.86-.07c-1.17-.07-2.2-.48-3.05-1.34-.85-.85-1.27-1.88-1.34-3.05-.07-1.27-.07-1.66-.07-4.86s0-3.59.07-4.86c.07-1.17.48-2.2 1.34-3.05.85-.85 1.88-1.27 3.05-1.34 1.27-.07 1.66-.07 4.86-.07zM12 5.44c-3.61 0-6.56 2.95-6.56 6.56s2.95 6.56 6.56 6.56 6.56-2.95 6.56-6.56-2.95-6.56-6.56-6.56zm0 10.62c-2.25 0-4.06-1.81-4.06-4.06s1.81-4.06 4.06-4.06 4.06 1.81 4.06 4.06-1.81 4.06-4.06 4.06zm4.9-8.8c-.6 0-1.09-.49-1.09-1.09s.49-1.09 1.09-1.09 1.09.49 1.09 1.09-.49 1.09-1.09 1.09z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/Akhil-8605-Adam/" className="footer-section-social-link">
                                <svg className="footer-section-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://github.com/Akhil-8605" className="footer-section-social-link">
                                <svg className="footer-section-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section-footer-links">
                        <div className="footer-section-links-column">
                            <h3>Academics</h3>
                            <ul>
                                <li><a href="/programs" className="footer-section-hover-effect">Programs</a></li>
                                <li><a href="/admissions" className="footer-section-hover-effect">Admissions</a></li>
                                <li><a href="/departments" className="footer-section-hover-effect">Departments</a></li>
                                <li><a href="/academic-calendar" className="footer-section-hover-effect">Academic Calendar</a></li>
                            </ul>
                        </div>

                        <div className="footer-section-links-column">
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="/library" className="footer-section-hover-effect">Library</a></li>
                                <li><a href="/research" className="footer-section-hover-effect">Research</a></li>
                                <li><a href="/student-portal" className="footer-section-hover-effect">Student Portal</a></li>
                                <li><a href="/helpdesk" className="footer-section-hover-effect">Helpdesk</a></li>
                            </ul>
                        </div>

                        <div className="footer-section-links-column">
                            <h3>About UniCore</h3>
                            <ul>
                                <li><a href="/about" className="footer-section-hover-effect">About Us</a></li>
                                <li><a href="/careers" className="footer-section-hover-effect">Careers</a></li>
                                <li><a href="/#partners" className="footer-section-hover-effect">Our Partners</a></li>
                                <li><a href="/contact" className="footer-section-hover-effect">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="footer-section-footer-bottom">

                    <div className="footer-section-credits-section">
                        <div className="footer-section-created-by">
                            <h4>Created By</h4>
                            <div className="footer-section-creator-card">
                                <div className="footer-section-creator-avatar">
                                    <span>AA</span>
                                    <div className="footer-section-avatar-glow"></div>
                                </div>
                                <div className="footer-section-creator-info">
                                    <h5>Akhilesh Adam</h5>
                                    <span>Software Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer-section-group-members">
                            <h4>Group Members</h4>
                            <div className="footer-section-members-grid">
                                <div className="footer-section-member-card">
                                    <span className="footer-section-member-id">202</span>
                                    <span className="footer-section-member-name">Akhilesh Adam</span>
                                </div>
                                <div className="footer-section-member-card">
                                    <span className="footer-section-member-id">209</span>
                                    <span className="footer-section-member-name">Santosh Mateti</span>
                                </div>
                                <div className="footer-section-member-card">
                                    <span className="footer-section-member-id">228</span>
                                    <span className="footer-section-member-name">Sanju Kanki</span>
                                </div>
                                <div className="footer-section-member-card">
                                    <span className="footer-section-member-id">251</span>
                                    <span className="footer-section-member-name">Onkar Saka</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer-section-footer-info">
                            <p>&copy; {new Date().getFullYear()} UniCore. All rights reserved.</p>
                        </div>

                        {console.log(window.scrollY)}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;