import { useState } from 'react';
import { Menu, X, Download, FileText, GraduationCap, Calendar, Book, Award, Shield, FileCheck, FileSpreadsheet } from 'lucide-react';
import './AcademicsPage.css';
import { Link } from 'react-router-dom';

export default function Academics() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openPdf = (url, title = 'Document Preview') => {
        const previewUrl = `/academic-preview?pdf=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(previewUrl, '_blank');
    };

    return (
        <div className="academics-page">
            {/* Floating Navigation */}
            <div className="floating-nav">
                <button
                    className="nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#msbte-calendar" onClick={() => setIsMenuOpen(false)}>
                        <Calendar className="nav-icon" />
                        <span>MSBTE Calendar</span>
                    </a>
                    <a href="#institute-calendar" onClick={() => setIsMenuOpen(false)}>
                        <Calendar className="nav-icon" />
                        <span>Institute Calendar</span>
                    </a>
                    <a href="#question-papers" onClick={() => setIsMenuOpen(false)}>
                        <FileText className="nav-icon" />
                        <span>Question Papers</span>
                    </a>
                    <a href="#results" onClick={() => setIsMenuOpen(false)}>
                        <Award className="nav-icon" />
                        <span>Results</span>
                    </a>
                    <a href="#ciaan" onClick={() => setIsMenuOpen(false)}>
                        <Shield className="nav-icon" />
                        <span>CIAAN Norms</span>
                    </a>
                    <a href="#disclosure" onClick={() => setIsMenuOpen(false)}>
                        <FileCheck className="nav-icon" />
                        <span>Mandatory Disclosure</span>
                    </a>
                    <a href="#policy" onClick={() => setIsMenuOpen(false)}>
                        <FileSpreadsheet className="nav-icon" />
                        <span>Policy Manual</span>
                    </a>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Academic Excellence</h1>
                        <p>Nurturing minds through quality technical education</p>
                    </div>
                    <div className="hero-animation">
                        <div className="floating-shapes">
                            <div className="shape shape-1"></div>
                            <div className="shape shape-2"></div>
                            <div className="shape shape-3"></div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="main-content">
                {/* MSBTE Calendar Section */}
                <section id="msbte-calendar" className="section">
                    <h2>MSBTE Academic Calendar</h2>
                    <div className="calendar-card">
                        <div className="calendar-content">
                            <p>The Maharashtra State Board of Technical Education (MSBTE) academic calendar outlines important dates, examination schedules, and academic activities for the current academic year.</p>
                            <button
                                className="download-button"
                                onClick={() => openPdf('/path-to-msbte-calendar.pdf', 'MSBTE Academic Calendar')}
                            >
                                <Download className="button-icon" />
                                View Calendar
                            </button>
                        </div>
                    </div>
                </section>

                {/* Institute Calendar Section */}
                <section id="institute-calendar" className="section">
                    <h2>Institute Academic Calendar</h2>
                    <div className="calendar-card">
                        <div className="calendar-content">
                            <p>Our institute's academic calendar provides a comprehensive schedule of internal examinations, workshops, cultural events, and other important academic activities planned for the current academic year.</p>
                            <a href="/academic-calendar" className="view-button">
                                View Detailed Calendar
                            </a>
                        </div>
                    </div>
                </section>

                {/* Question Papers Section */}
                <section id="question-papers" className="section">
                    <h2>Question Papers</h2>
                    <div className="document-card">
                        <div className="document-content">
                            <h3>Previous Year Question Papers</h3>
                            <p>Access a comprehensive collection of previous year question papers for all departments and semesters. Our archive includes regular and backlog examination papers to help students prepare effectively.</p>
                            <Link to="/academics/question-papers" className="view-button">
                                View Question Papers
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section id="results" className="section">
                    <h2>Class Test Results</h2>
                    <div className="document-card">
                        <div className="document-content">
                            <h3>Internal Assessment Results</h3>
                            <p>View and download your class test results, track your performance, and access detailed score analysis for all subjects. Results are available for both Class Test 1 and Class Test 2.</p>
                            <Link to="/academics/class-test-results" className="view-button">
                                View Results
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CIAAN Norms Section */}
                <section id="ciaan" className="section">
                    <h2>CIAAN Norms</h2>
                    <div className="document-card">
                        <div className="document-content">
                            <h3>Compliance and Industry Academic Association Norms</h3>
                            <p>Essential guidelines and norms established for maintaining academic standards and industry collaboration in technical education.</p>
                            <button
                                className="download-button"
                                onClick={() => openPdf('/path-to-ciaan-norms.pdf', 'CIAAN Norms Document')}
                            >
                                <Download className="button-icon" />
                                Download Document
                            </button>
                        </div>
                    </div>
                </section>

                {/* Mandatory Disclosure Section */}
                <section id="disclosure" className="section">
                    <h2>Mandatory Disclosure</h2>
                    <div className="document-card">
                        <div className="document-content">
                            <h3>Institute Mandatory Disclosure</h3>
                            <p>Transparent disclosure of essential information about the institute's infrastructure, faculty, and other mandatory requirements as per AICTE norms.</p>
                            <button
                                className="download-button"
                                onClick={() => openPdf('/path-to-mandatory-disclosure.pdf', 'Mandatory Disclosure Document')}
                            >
                                <Download className="button-icon" />
                                Download Document
                            </button>
                        </div>
                    </div>
                </section>

                {/* Policy Manual Section */}
                <section id="policy" className="section">
                    <h2>Policy Manual</h2>
                    <div className="document-card">
                        <div className="document-content">
                            <h3>Institute Policy Manual</h3>
                            <p>Comprehensive documentation of academic, administrative, and student-related policies governing the institute's operations.</p>
                            <button
                                className="download-button"
                                onClick={() => openPdf('/path-to-policy-manual.pdf', 'Institute Policy Manual')}
                            >
                                <Download className="button-icon" />
                                Download Document
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
