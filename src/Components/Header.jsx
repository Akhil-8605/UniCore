import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import logo from '../Images/unicore logo.png';
import logoWhite from '../Images/unicore logo white.png';
import { Link } from 'react-router-dom';

const Header = ({ setWhenAppears, setWhenDisappears }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = localStorage.getItem('user');
    useEffect(() => {
        // Check if the user is logged in on component mount

        setIsLoggedIn(!!user);

        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > setWhenAppears) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.scrollY > setWhenDisappears) {
                setIsScrolled(false)
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setWhenAppears, setWhenDisappears]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        // Clear only the login-related data
        localStorage.removeItem('user'); // Example key for user info
        localStorage.removeItem('authToken'); // Example key for auth token
        setIsLoggedIn(false);
        window.location.href = '/'; // Redirect to login page
    };

    return (
        <header className={`header-section-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'active' : ''}`}>
            <div className="header-section-navbar-container">
                {/* Logo Section */}
                <div className="logo">
                    <img src={`${isScrolled ? logo : logoWhite}`} alt="University Logo" />
                </div>

                {/* Navigation Items */}
                <nav className={`header-section-nav ${isMenuOpen ? 'header-section-nav-open' : ''}`}>
                    <ul className="header-section-nav-items">
                        <li><a href="/">Home</a></li>
                        <li><a href="/departments">Departments</a></li>
                        <li><a href="/admissions">Admissions</a></li>
                        <li><a href="#events">Events</a></li>
                        {!isLoggedIn ? '' :
                            (<>
                                {JSON.parse(user).role == "admin" ?
                                    <li><a href="/admin">Admin Panel</a></li>
                                    :
                                    <li><a href="/student-portal">Student Portal</a></li>
                                }
                            </>
                            )
                        }
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about-us">About us</a></li>
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className={`header-section-logout-btn ${isScrolled ? '' : 'active'}`}
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link to={'/login'}>
                                <button
                                    className={`header-section-login-btn ${isScrolled ? '' : 'active'}`}
                                >
                                    Log In
                                </button>
                            </Link>
                        )}
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
