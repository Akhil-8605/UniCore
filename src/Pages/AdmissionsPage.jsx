import { useState, useEffect } from 'react';
import {GraduationCap, FileText, BookOpen, Gavel, DollarSign, CheckCircle, Award, Home, Menu, X ,StepForward, LogOut, ClipboardCheck, IndianRupee, Scale} from 'lucide-react';
import MainHeader from "../Components/MainHeader"
import './AdmissionsPage.css';
import Mech from '../Images/mechanical engg.png'
import Co from "../Images/computer engg.png"
import Ej from "../Images/entc engg.png"

import BrochurePDF from "../Documents/BrochurePDF.pdf"
import FeesStructureImg from "../Documents/FeeStructureIMG.jpg"
import Footer from '../Components/Footer';

// Data for courses
const courses = [
    {
        id: "co",
        name: "Computer Engineering",
        intake: 60,
        duration: "3 Years",
        degree: "Diploma",
        description:
            "The Computer Engineering diploma focuses on practical software development, hardware maintenance, and network administration. Students gain hands-on experience with modern computing technologies.",
        highlights: [
            "Programming Lab",
            "Hardware Workshop",
            "Networking Lab",
            "Web Development Projects",
            "Industry Certifications",
        ],
        careers: [
            "Junior Software Developer",
            "Network Technician",
            "IT Support Specialist",
            "Web Developer",
            "System Administrator",
        ],
        image: Co,
    },
    {
        id: "entc",
        name: "Electronics & Telecommunication",
        intake: 60,
        duration: "3 Years",
        degree: "Diploma",
        description:
            "This program provides practical training in electronics and telecommunications. Students work with industry-standard equipment and gain hands-on experience in circuit design and communication systems.",
        highlights: [
            "Electronics Workshop",
            "PCB Design Lab",
            "Communication Lab",
            "IoT Projects",
            "Industry Training",
        ],
        careers: [
            "Electronics Technician",
            "Service Engineer",
            "Technical Support",
            "IoT Developer",
            "Telecom Technician",
        ],
        image: Ej,
    },
    {
        id: "me",
        name: "Mechanical Engineering",
        intake: 90,
        duration: "3 Years",
        degree: "Diploma",
        description:
            "Our Mechanical Engineering diploma program provides hands-on training in mechanical systems, manufacturing, and maintenance. Students learn through practical experience in modern workshops and laboratories.",
        highlights: [
            "Modern Workshop Training",
            "CNC Machine Operations",
            "Industrial Automation Lab",
            "Industry Partnerships",
            "Practical Projects",
        ],
        careers: [
            "Manufacturing Supervisor",
            "Maintenance Technician",
            "Production Engineer",
            "Quality Control Inspector",
            "Service Engineer",
        ],
        image: Mech,
    },
];

// Data for scholarships
const scholarships = [
    {
        id: 1,
        name: "Govt. of India Scholarship",
        department: "District Social Welfair Office",
        eligibility: "SC/ST",
        familyIncome: "No limit",
        amount: "Full Tuition / Development Fees",
    },
    {
        id: 2,
        name: "State Govt. Maharashtra",
        department: "District Social Welfair Office",
        eligibility: "VJ/NT/SBC/OBC",
        familyIncome: "Below ₹8Lacs per annum",
        amount: "Full Tuition Fees",
    },
    {
        id: 3,
        name: "State Govt. Maharashtra",
        department: "Directory of Technical Education, Mumbai",
        eligibility: "EBC",
        familyIncome: "Below ₹8Lacs per annum",
        amount: "50% Full Tuition Fees",
    },
    {
        id: 4,
        name: "State Govt. Maharashtra",
        department: "Minority Communities, Mumbai",
        eligibility: "Muslim, Christian, Jain, Buddist, Sikh & Parshi",
        familyIncome: "Below ₹8Lacs per annum",
        amount: "₹50,000 /-"
    }, {
        id: 5,
        name: "Open Merit Scholarship",
        department: "MSBTE, Mumbai",
        eligibility: "Above 70% marks",
        familyIncome: "Below ₹5Lacs per annum",
        amount: "₹7,000 /-",
    },
];

export default function ModernAdmissions() {
    const [selectedCourse, setSelectedCourse] = useState("co");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isScrolling) {
                setIsScrolling(true);
                const sections = document.querySelectorAll("section[id]");

                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.scrollY >= sectionTop - sectionHeight / 3) {
                        setActiveSection(section.getAttribute("id") || "");
                    }
                });

                setTimeout(() => setIsScrolling(false), 100);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolling]);

    function downloadBrochure() {
        const brochureURL = BrochurePDF;
        window.open(brochureURL, '_blank');
    }


    function downloadFeeStructure() {
        const FeeStructureURL = FeesStructureImg;
        window.open(FeeStructureURL, '_blank');
    }


    return (
        <div className="admissions-page">
            {/* Floating Navigation Icon */}
            <div className="admissions-page-floating-nav">
                <button
                    className="admissions-page-nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`academics-page-nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#courses" onClick={() => setIsMenuOpen(false)}>
                        <GraduationCap className="academics-page-nav-icon"/> Our Diploma Programs
                    </a>
                    <a href="#procedure" onClick={() => setIsMenuOpen(false)}>
                        <ClipboardCheck className="academics-page-nav-icon"/> Admission Procedure
                    </a>
                    <a href="#brochure" onClick={() => setIsMenuOpen(false)}>
                        <FileText className="academics-page-nav-icon"/> Information Brochure
                    </a>
                    <a href="#guidelines" onClick={() => setIsMenuOpen(false)}>
                        <BookOpen className="academics-page-nav-icon"/> Student Guidelines
                    </a>
                    <a href="#rules" onClick={() => setIsMenuOpen(false)}>
                        <Scale className="academics-page-nav-icon"/> Institute Rules & Policies
                    </a>
                    <a href="#fees" onClick={() => setIsMenuOpen(false)}>
                        <IndianRupee className="academics-page-nav-icon"/> Fees Structure
                    </a>
                    <a href="#eligibility" onClick={() => setIsMenuOpen(false)}>
                        <CheckCircle className="academics-page-nav-icon"/> Admission Eligibility
                    </a>
                    <a href="#scholarship" onClick={() => setIsMenuOpen(false)}>
                        <Award className="academics-page-nav-icon"/> Scholarship
                    </a>
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                        <LogOut className="academics-page-nav-icon"/> Back to Home
                    </a>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="admissions-page-hero-section">
                <div className="admissions-page-hero-content">
                    <div className="admissions-page-hero-text">
                        <h1>Admissions...</h1>
                        <p>Begin your journey with our industry-focused diploma programs</p>
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

            <main className="admissions-page-main-content">
                {/* Courses Section */}
                <section id="courses" className="admissions-page-section">
                    <h2>Our Diploma Programs</h2>
                    <div className="admissions-page-courses-tabs">
                        {courses.map(course => (
                            <button
                                key={course.id}
                                className={`admissions-page-tab-button ${selectedCourse === course.id ? 'active' : ''}`}
                                onClick={() => setSelectedCourse(course.id)}
                            >
                                {course.name}
                            </button>
                        ))}
                    </div>
                    {courses.map(course => (
                        <div
                            key={course.id}
                            className={`admissions-page-course-content ${selectedCourse === course.id ? 'active' : ''}`}
                        >
                            <div className="admissions-page-course-card">
                                <div className="admissions-page-course-image">
                                    <img src={course.image} alt={course.name} />
                                    <div className="admissions-page-course-overlay">
                                        <span className="admissions-page-intake-badge">Intake: {course.intake} seats</span>
                                    </div>
                                </div>
                                <div className="admissions-page-course-info">
                                    <div className="admissions-page-course-header">
                                        <div>
                                            <h3>{course.name}</h3>
                                            <p>{course.degree} • {course.duration}</p>
                                            <p>Intake: {course.intake}</p>
                                        </div>
                                    </div>
                                    <p className="admissions-page-course-description">{course.description}</p>
                                    <div className="admissions-page-course-details">
                                        <div className="admissions-page-highlights">
                                            <h4>Program Highlights</h4>
                                            <ul>
                                                {course.highlights.map((highlight, index) => (
                                                    <li key={index}>{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="admissions-page-careers">
                                            <h4>Career Prospects</h4>
                                            <ul>
                                                {course.careers.map((career, index) => (
                                                    <li key={index}>{career}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Admission Procedure Section */}
                <section id="procedure" className="admissions-page-section">
                    <h2 className="admissions-page-section-title">Admission Procedure</h2>
                    <div className="admissions-page-procedure-steps">
                        <div className="admissions-page-step">
                            <div className="admissions-page-step-number">1</div>
                            <div className="admissions-page-step-content">
                                <h3></h3>
                                <p>The admissions for First Year Post SSC Diploma Engineering and Direct Second Year Diploma Engineering are carried out as per the norms and schedule framed by the DTE from time to time.</p>
                            </div>
                        </div>
                        <div className="admissions-page-step">
                            <div className="admissions-page-step-number">2</div>
                            <div className="admissions-page-step-content">
                                <h3></h3>
                                <p>The admission process will be carried out through CAP-Round as per the norms & standards of DTE & Govt. of Maharashtra.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Information Brochure Section */}
                <section id="brochure" className="admissions-page-section">
                    <h2 className="admissions-page-section-title">Information Brochure</h2>
                    <div className="admissions-page-download-card">
                        <div className="admissions-page-download-content">
                            <h3>Academic Year 2024-25 Brochure</h3>
                            <p>Complete information about courses, facilities, and campus life</p>
                        </div>
                        <button className="admissions-page-download-button" onClick={downloadBrochure}>
                            Download Brochure
                        </button>
                    </div>
                </section>

                {/* Student Guidelines Section */}
                <section id="guidelines" className="admissions-page-section">
                    <h2 className="admissions-page-section-title">Student Guidelines</h2>
                    <div className="admissions-page-guidelines-grid">
                        <div className="admissions-page-guideline-card">
                            <h3>Discipline and Conduct</h3>
                            <ul>
                                <li>Student must behave with discipline in the campus.</li>
                                <li>Indecent and rude behavior with any faculty will be viewed seriously.</li>
                                <li>Students should not hang around in corridors.</li>
                                <li>Any act on part of student causing damages to cleanliness of any part of campus will be charged with heavy fine.</li>
                            </ul>
                        </div>
                        <div className="admissions-page-guideline-card">
                            <h3>Attendance and Uniform</h3>
                            <ul>
                                <li>Students must regularly read notices.</li>
                                <li>Student must possess their identity card.</li>
                                <li>Uniform is compulsory for all the students.</li>
                                <li>As specified in MSBTE rule RG-4 (G), minimum 80% attendance for theory & practical is compulsory for each subject.</li>
                            </ul>
                        </div>
                        <div className="admissions-page-guideline-card">
                            <h3>Property Care and Term Work</h3>
                            <ul>
                                <li>Every student must complete term work which is prescribed as per the MSBTE Norms.</li>
                                <li>Students must take care of all their belongings like calculator, vehicles and instruments.</li>
                                <li>Student should handle all laboratory instruments & equipment’s with due care. Any loss/damages caused to institute property will be recovered.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Rules & Policies Section */}
                <section id="rules" className="admissions-page-section">
                    <h2 className="admissions-page-section-title">Institute Rules & Policies</h2>
                    <div className="admissions-page-rules-grid">
                        <div className="admissions-page-rule-card">
                            <ul>
                                <li>Students are expected to maintain strict discipline and behave in a dignified manner within and outside the classroom, workshop, library, laboratories, etc., and observe the rules prescribed from time to time. Students are also expected to show politeness in outfit and person. Any incidence reported or observed objectionable in conduct within or outside the Institute is liable for disciplinary action.</li>
                                <li>It is compulsory for every student to be regular in his/her attendance and should record minimum 80% attendance in the theory and practical of each subject, which is compulsory.</li>
                                <li>It is compulsory for every student to appear for Sessional Tests, Unit Tests, and Preliminary Examination conducted by the College. Students who do not appear for these examinations shall not be allowed to appear for the MSBTE Examination.</li>
                                <li>Students are liable to read the Notices put up on the Notice Boards of the college. The college shall not accept any responsibility for the loss of any advantage by the student due to his/her failure to read the Notice in time.</li>
                                <li>The Class Representative (CR) of all the classes for the Academic Year is nominated strictly on Merit Basis as per the rules of the Maharashtra State.</li>
                                <li>Ragging of any student in any form and nature within or outside the Institute and Hostel shall result in instant expulsion of guilty students from the Institute. In addition to this, any other action as per Anti-Ragging Law of Maharashtra State will also be applicable.</li>
                                <li>Candidates found admitted on false or incorrect information shall be expelled from the Institute and the fees will be forfeited.</li>
                                <li>Damage to the property of the Institute like tampering with fixtures, equipment, instruments, furniture, books, periodicals, wall paints, computers, and machinery inside the campus shall be viewed very seriously and might result in instant expulsion of the guilty student.</li>
                                <li>Smoking, Drug addiction, Narcotics, Consumption of Alcoholic Drinks, Chewing Tobacco, Spitting, Writing on Walls, and any other evil habits are strictly prohibited in the premises of the Institute and Hostel.</li>
                                <li>The Principal reserves the right to remove a student’s name from the roll call if he/she fails to pay the Institute’s dues like tuition fee, hostel dues, fines imposed to make good the damages/losses caused to the college property, etc., in time.</li>
                                <li>The Principal reserves the right to expel students who involve themselves in Anti-National activities from the Institute, without giving notice.</li>
                                <li>Before the commencement of the examination, he/she should pay all dues and complete the Journals, Term Work, and Drawing Sheets in the prescribed manner in the specified time.</li>
                                <li>In all matters pertaining to discipline, directives of the Principal shall be binding and final.</li>
                                <li>The Institute reserves the right to change, amend, add or cancel any of the rule(s) mentioned above without giving any reason or notice in advance.</li>
                                <li>A combined undertaking in respect of ragging (available on the college website) should be submitted on the day of admission to the administrative office.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Fees Structure Section */}
                <section id="fees" className="admissions-page-section">
                    <h2 className="admissions-page-section-title">Fees Structure</h2>
                    <div className="admissions-page-download-card">
                        <div className="admissions-page-download-content">
                            <h3>Fee Structure Document</h3>
                            <p>Comprehensive details about tuition fees, development fees, and other charges</p>
                        </div>
                        <button className="admissions-page-download-button" onClick={downloadFeeStructure}>
                            Download Fee Structure
                        </button>
                    </div>
                </section>

                {/* Admission Eligibility Section */}
                <section id="eligibility" className="admissions-page-section">
                    <h2 className="admissions-page-section-title">Admission Eligibility</h2>
                    <div className="admissions-page-eligibility-grid">
                        <div className="admissions-page-eligibility-card">
                            <h3>First Year of Post SSC</h3>
                            <ul>
                                <li>The Candidate should be an Indian National;</li>
                                <li>Passed 10th Std./SSC examination or its equivalent, with at least 35% aggregate marks Note: Other than Maharashtra State Candidates shall be eligible for Institute quota only.</li>
                            </ul>
                        </div>
                        <div className="admissions-page-eligibility-card">
                            <h3>Direct Second Year of Post SSC</h3>
                            <ul>
                                <li>The Candidate should be an Indian National;</li>
                                <li>
                                    Passed 10+2 examination with Physics/ Mathematics /Chemistry / Computer Science /Electronics /Information Technology/ Biology / Informatics Practices/ Biotechnology /Technical Vocational subject/ Agriculture/ Engineering Graphics / Business Studies/Entrepreneurship (Any of the three). OR 10th + (2 years ITI) shall be eligible for admission to Second Year Diploma Course(s) in ANY branch of Engineering and Technology.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Scholarship Section */}
                <section id="scholarship" className="admissions-page-section">
                    <h2>Scholarship Opportunities</h2>
                    <div className="admissions-page-scholarship-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Scholarship</th>
                                    <th>Department</th>
                                    <th>Eligibility</th>
                                    <th>Family Income</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scholarships.map(scholarship => (
                                    <tr key={scholarship.id}>
                                        <td>{scholarship.id}</td>
                                        <td>{scholarship.name}</td>
                                        <td>{scholarship.department}</td>
                                        <td>{scholarship.eligibility}</td>
                                        <td>{scholarship.familyIncome}</td>
                                        <td>{scholarship.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
