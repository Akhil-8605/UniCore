// Header.jsx
import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import logo from '../Images/unicore logo.png'; // Adjust the path as needed

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo Section */}
                <div className="logo">
                    <img src={logo} alt="University Logo" />
                </div>

                {/* Navigation Items */}
                <nav className="nav">
                    <ul className="nav-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#departments">Departments</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#student-portal">Student Portal</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#contact">About us</a></li>
                        <button className="login-btn">Log In</button>
                    </ul>
                </nav>
                {/* Mobile Menu Toggle */}
                <div className="menu-toggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </div>
        </header>
    );
};

export default Header;
