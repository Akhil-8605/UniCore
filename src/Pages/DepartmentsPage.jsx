import { React, useState } from "react";
import computerEnggImage from "../Images/computer engg.png";
import entcengg from "../Images/entc engg.png"
import mechanicalengg from "../Images/mechanical engg.png"
import "./DepartmentsPage.css";
import { Menu, X, Download, FileText, GraduationCap, Calendar, Book, Award, Shield, FileCheck, FileSpreadsheet, LogOut, Computer, HardDrive, CircuitBoard, Code, Monitor, Radio, Wrench, MessageCircle } from 'lucide-react';
import Footer from "../Components/Footer";

const departments = [
    {
        name: "Computer Science",
        image: computerEnggImage,
        description:
            "Our Computer Science department offers cutting-edge programs in software development, artificial intelligence, and cybersecurity. Students engage in hands-on projects and internships with leading tech companies.",
        features: ["Advanced AI Lab", "Cybersecurity Center", "Software Engineering Studio"],
    },
    {
        name: "Electronics and Telecommunications",
        image: entcengg,
        description:
            "The Electronics and Telecommunications department focuses on the latest advancements in wireless communications, signal processing, and embedded systems. Our state-of-the-art labs provide students with practical experience in designing and implementing modern communication systems.",
        features: ["5G Research Lab", "IoT Innovation Center", "Analog and Digital Circuits Lab"],
    },
    {
        name: "Mechanical Engineering",
        image: mechanicalengg,
        description:
            "Our Mechanical Engineering department offers a comprehensive curriculum covering thermodynamics, robotics, and advanced manufacturing. Students work on real-world projects and have access to cutting-edge facilities for prototyping and testing.",
        features: ["Robotics and Automation Lab", "Additive Manufacturing Center", "Fluid Dynamics Simulation Lab"],
    },
];

const statistics = [
    { number: "3,000+", label: "Students Enrolled" },
    { number: "200+", label: "Faculty Members" },
    { number: "95%", label: "Graduate Employment Rate" },
    { number: "50+", label: "Research Labs" },
];

const testimonials = [
    {
        text: "The Computer Science program here is outstanding. I've gained invaluable skills that have prepared me for a successful career in tech.",
        author: "Akhilesh Adam, CS Graduate",
    },
    {
        text: "As an Electronics student, I've had access to cutting-edge equipment and brilliant professors. It's been an incredible learning experience.",
        author: "Balaji Kokkul, E&T Student",
    },
    {
        text: "The Mechanical Engineering department's focus on practical, hands-on learning has given me confidence in my abilities as an engineer.",
        author: "Mahesh Bairy, ME Graduate",
    },
];

function DepartmentsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="departments-page">

            <div className="academics-page-floating-nav">
                <button
                    className="academics-page-nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`academics-page-nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#Computer Science" onClick={() => setIsMenuOpen(false)}>
                        <Monitor className="academics-page-nav-icon" /> Computer Engineering
                    </a>
                    <a href="#Electronics and Telecommunications" onClick={() => setIsMenuOpen(false)}>
                        <Radio className="academics-page-nav-icon" /> ENTC Engineering
                    </a>
                    <a href="#Mechanical Engineering" onClick={() => setIsMenuOpen(false)}>
                        <Wrench className="academics-page-nav-icon" /> Mechanical Engineering
                    </a>
                    <a href="#feedback" onClick={() => setIsMenuOpen(false)}>
                        <MessageCircle className="academics-page-nav-icon" /> Students Feedback
                    </a>
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                        <LogOut className="academics-page-nav-icon" /> Back to Home
                    </a>
                </nav>
            </div>

            <section className="academics-page-hero-section">
                <div className="academics-page-hero-content">
                    <div className="academics-page-hero-text">
                        <h1>Our Departments</h1>
                        <p>Explore a wide range of disciplines and specialized fields,<br /> empowering students to excel academically and professionally.</p>
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

            <main className="departments-page-main-content">
                <div className="departments-page-container">
                    {departments.map((dept, index) => (
                        <section key={dept.name} className={`departments-page-department-section fade-in-up delay-${index + 1}`} id={dept.name}>
                            <div className="departments-page-department-content">
                                <div className="departments-page-department-info">
                                    <h2 className="departments-page-department-title">{dept.name}</h2>
                                    <p className="departments-page-department-description">{dept.description}</p>
                                    <h3>Key Features:</h3>
                                    <ul className="departments-page-feature-list">
                                        {dept.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="departments-page-department-image">
                                    <img src={dept.image || "/placeholder.svg"} alt={dept.name} width={600} height={400} />
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <section className="departments-page-testimonials-section" id="feedback">
                    <div className="departments-page-container">
                        <h2 className="departments-page-testimonials-title">What Our Students Say</h2>
                        <div className="departments-page-testimonial-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="departments-page-testimonial-item fade-in-up">
                                    <p className="departments-page-testimonial-text">{testimonial.text}</p>
                                    <p className="departments-page-testimonial-author">{testimonial.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default DepartmentsPage;
