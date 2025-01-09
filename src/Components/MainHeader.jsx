import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import logo from '../Images/unicore logo.png';
import logoWhite from '../Images/unicore logo white.png';
import { Link } from 'react-router-dom';

const Header = ({ setWhenAppears, setWhenDisappears }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header-section-navbar scrolled main-header ${isMenuOpen ? 'active' : ''}`} style={{color: '#007bff'}}>
            <div className="header-section-navbar-container">
                {/* Logo Section */}
                <div className="logo">
                    <img src={`${true ? logo : logoWhite}`} alt="University Logo" />
                </div>

                {/* Navigation Items */}
                <nav className={`header-section-nav ${isMenuOpen ? 'header-section-nav-open' : ''}`}>
                    <ul className="header-section-nav-items">
                        <li><a href="/">Home</a></li>
                        <li><a href="#departments">Departments</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="/#events">Events</a></li>
                        <li><a href="#student-portal">Student Portal</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="#about-us">About us</a></li>
                        <Link to={'/login'}><button className={`header-section-login-btn ${false ? '' : 'active'}`}>Log In</button></Link>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="header-section-menu-toggle" onClick={toggleMenu}>
                    <span className="header-section-bar"></span>
                    <span className="header-section-bar"></span>
                    <span className="header-section-bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;