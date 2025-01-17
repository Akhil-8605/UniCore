import { useState } from 'react';
import { Menu, X, Download, FileText, GraduationCap, Calendar, Book, Award, Shield, FileCheck, FileSpreadsheet, LogOut } from 'lucide-react';
import './AcademicsPage.css';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import MSBTEAcademicCalendar from "../../Documents/MSBTE 2024-25 Academic Calander.pdf"
import CIAANNorms from "../../Documents/CIAANNorms.pdf"
import MandatoryDisclosure from "../../Documents/Mandatory Disclosure.pdf"
import Policy from "../../Documents/Policy.pdf"
export default function Academics() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openPdf = (url, title = 'Document Preview') => {
        const previewUrl = `/academic-preview?pdf=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(previewUrl, '_blank');
    };

    return (
        <div className="academics-page">
            {/* Floating Navigation */}
            <div className="academics-page-floating-nav">
                <button
                    className="academics-page-nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`academics-page-nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#msbte-calendar" onClick={() => setIsMenuOpen(false)}>
                        <Calendar className="academics-page-nav-icon" />
                        <span>MSBTE Calendar</span>
                    </a>
                    <a href="#institute-calendar" onClick={() => setIsMenuOpen(false)}>
                        <Calendar className="academics-page-nav-icon" />
                        <span>Institute Calendar</span>
                    </a>
                    <a href="#question-papers" onClick={() => setIsMenuOpen(false)}>
                        <FileText className="academics-page-nav-icon" />
                        <span>Question Papers</span>
                    </a>
                    <a href="#results" onClick={() => setIsMenuOpen(false)}>
                        <Award className="academics-page-nav-icon" />
                        <span>Results</span>
                    </a>
                    <a href="#ciaan" onClick={() => setIsMenuOpen(false)}>
                        <Shield className="academics-page-nav-icon" />
                        <span>CIAAN Norms</span>
                    </a>
                    <a href="#disclosure" onClick={() => setIsMenuOpen(false)}>
                        <FileCheck className="academics-page-nav-icon" />
                        <span>Mandatory Disclosure</span>
                    </a>
                    <a href="#policy" onClick={() => setIsMenuOpen(false)}>
                        <FileSpreadsheet className="academics-page-nav-icon" />
                        <span>Policy Manual</span>
                    </a>
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                        <LogOut className="academics-page-nav-icon"/> Back to Home
                    </a>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="academics-page-hero-section">
                <div className="academics-page-hero-content">
                    <div className="academics-page-hero-text">
                        <h1>Academic Excellence</h1>
                        <p>Nurturing minds through quality technical education</p>
                    </div>
                    <div className="admissions-page-hero-animation">
                        <div className="admissions-page-floating-shapes">
                            <div className="admissions-page-shape admissions-page-shape-1"></div>
                            <div className="admissions-page-shape admissions-page-shape-2"></div>
                            <div className="admissions-page-shape admissions-page-shape-3"></div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="academics-page-main-content">
                {/* MSBTE Calendar Section */}
                <section id="msbte-calendar" className="academics-page-section">
                    <h2>MSBTE Academic Calendar</h2>
                    <div className="academics-page-calendar-card">
                        <div className="academics-page-calendar-content">
                            <p>The Maharashtra State Board of Technical Education (MSBTE) academic calendar outlines important dates, examination schedules, and academic activities for the current academic year.</p>
                            <button
                                className="academics-page-download-button"
                                onClick={() => { window.open(MSBTEAcademicCalendar) }}
                            >
                                <Download className="academics-page-button-icon" />
                                View Calendar
                            </button>
                        </div>
                    </div>
                </section>

                {/* Institute Calendar Section */}
                <section id="institute-calendar" className="academics-page-section">
                    <h2>Institute Academic Calendar</h2>
                    <div className="academics-page-calendar-card">
                        <div className="academics-page-calendar-content">
                            <p>Our institute's academic calendar provides a comprehensive schedule of internal examinations, workshops, cultural events, and other important academic activities planned for the current academic year.</p>
                            <a href="/academic-calendar" className="academics-page-view-button">
                                View Detailed Calendar
                            </a>
                        </div>
                    </div>
                </section>

                {/* Question Papers Section */}
                <section id="question-papers" className="academics-page-section">
                    <h2>Question Papers</h2>
                    <div className="academics-page-document-card">
                        <div className="academics-page-document-content">
                            <h3>Previous Year Question Papers</h3>
                            <p>Access a comprehensive collection of previous year question papers for all departments and semesters. Our archive includes regular and backlog examination papers to help students prepare effectively.</p>
                            <Link to="/academics/question-papers" className="academics-page-view-button">
                                View Question Papers
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section id="results" className="academics-page-section">
                    <h2>Class Test Results</h2>
                    <div className="academics-page-document-card">
                        <div className="academics-page-document-content">
                            <h3>Internal Assessment Results</h3>
                            <p>View and download your class test results, track your performance, and access detailed score analysis for all subjects. Results are available for both Class Test 1 and Class Test 2.</p>
                            <Link to="/academics/class-test-results" className="academics-page-view-button">
                                View Results
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CIAAN Norms Section */}
                <section id="ciaan" className="academics-page-section">
                    <h2>CIAAN Norms</h2>
                    <div className="academics-page-document-card">
                        <div className="academics-page-document-content">
                            <h3>Compliance and Industry Academic Association Norms</h3>
                            <p>Essential guidelines and norms established for maintaining academic standards and industry collaboration in technical education.</p>
                            <button
                                className="academics-page-download-button"
                                onClick={() => window.open(CIAANNorms)}
                            >
                                <Download className="academics-page-button-icon" />
                                View Document
                            </button>
                        </div>
                    </div>
                </section>

                {/* Mandatory Disclosure Section */}
                <section id="disclosure" className="academics-page-section">
                    <h2>Mandatory Disclosure</h2>
                    <div className="academics-page-document-card">
                        <div className="academics-page-document-content">
                            <h3>Institute Mandatory Disclosure</h3>
                            <p>Transparent disclosure of essential information about the institute's infrastructure, faculty, and other mandatory requirements as per AICTE norms.</p>
                            <button
                                className="academics-page-download-button"
                                onClick={() => window.open(MandatoryDisclosure)}
                            >
                                <Download className="academics-page-button-icon" />
                                View Document
                            </button>
                        </div>
                    </div>
                </section>

                {/* Policy Manual Section */}
                <section id="policy" className="academics-page-section">
                    <h2>Policy Manual</h2>
                    <div className="academics-page-document-card">
                        <div className="academics-page-document-content">
                            <h3>Institute Policy Manual</h3>
                            <p>Comprehensive documentation of academic, administrative, and student-related policies governing the institute's operations.</p>
                            <button
                                className="academics-page-download-button"
                                onClick={() => window.open(Policy)}
                            >
                                <Download className="academics-page-button-icon" />
                                View Document
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
