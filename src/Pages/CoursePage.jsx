import React, { useState } from 'react';
import { Download } from 'lucide-react';
import './CoursePage.css';
import { useParams } from 'react-router-dom';
import dummyPerson from '../Images/PersonDummy.png'

import coEven from '../Documents/co-even-time-table.pdf'
import coOdd from '../Documents/co-odd-time-table.pdf'
import meEven from '../Documents/me-even-time-table.pdf'
import ejEven from '../Documents/ej-even-time-table.pdf'
import ejOdd from '../Documents/ej-odd-time-table.pdf'

const courseData = {
    computer: {
        title: 'Computer Engineering',
        description: "The department of Computer Engineering is concerned with the theory, design, development and application of computer system.Continuous improvement in quality, developing confidence for self and lifelong learning are the highest priorities adhered during the duration of the course in the department.The faculty members are well experienced in teaching and they regularly attend conferences, seminars, faculty development programs, industry organized workshops etc., to develop leading- edge in -depth knowledge of computer science disciplines and encourage project based learning.",
        image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1200',
        vision: 'To prepare competent computer engineers with recent technology to serve the industry & society',
        mission: [
            `Mission 1: To impart the knowledge and hands on experience on recent technologies.`,
            `Mission 2: To imbibe professional skills and ethical responsibilities in students.`,
            `Mission 3: To prepare students to be continuous learners in a connected world.`,
            `Program Educational Objectives ( PEOs)<br/><br/>

PEO1: Provide socially responsible, environment friendly solutions to Computer engineering<br/>

related broad-based problems adapting professional ethics.<br/>

PEO2: Adapt state-of-the-art Computer engineering broad-based technologies to work in multi-disciplinary work environment.<br/>

PEO3: Solve broad-based problems individually and as a team member communicating effectively<br/>

in the world of work.<br/><br/>

 

Programme Outcomes (POs)<br/><br/>

PO1: Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems. <br/>

PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.<br/>

PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.<br/>

PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements. <br/>

PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.<br/>

PO6: Project Management:  Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities<br/>

PO7: Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes. <br/><br/>

Program Specific Outcomes (PSOs)<br/>

PSO1: Computer Software and Hardware Usage: Use state-of-the-art technologies for operation

and application of computer software and hardware.<br/>

PSO2: Computer Engineering Maintenance: Maintain computer engineering related software

and hardware systems.`
        ],
        faculty: [
            { name: 'Mr. Kawale S. M. (HOD)', position: 'M.E (CSE), Lecturer Exp.14 Yrs.' },
            { name: 'Mr. Rashinkar V. V.', position: 'B.E (IT) Lecturer Exp.11 Yrs.' },
            { name: 'Mr. Gada B. N.', position: 'B.E (IT) Lecturer Exp. 10 Yrs.' },
            { name: 'Mrs. Asade A. A.', position: 'B.E (CSE) Lecturer Exp. 2 Yrs.' }
        ],
        labs: [
            { name: 'Programming Lab', image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=400' },
            { name: 'Networking Lab', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400' },
        ],
        timetablePdfEven: coEven,
        timetablePdfOdd: coOdd,
    },
    mechanical: {
        title: 'Mechanical Engineering',
        image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200',
        description: "The Mechanical Engineering deals with design and production of machines, tools, and plays an important role in automobile sector, railways and aerospace systems. The Mechanical Engineering department has a team of highly qualified and experienced faculty putting efforts for creating smart technocrat to accept the challenges in globalization market.The department has well equipped laboratories of advanced machines such as VMC and CNC machining center to fulfill the need of recent development in industry.",
        vision: 'To prepare competent mechanical engineers by enhancing the technical knowledge and skill to cater the industry & society',
        mission: [
            `Mission 1: To offer the quality technical education through teaching learning process & industry interaction.`,
            `Mission 2: To inculcate ethical values and professional skills in student by providing training & workshop.`,
            `Mission 3: To furnish the opportunity to infuse the lifelong learning through co - curriculum & extra - curriculum activities.`,
            `
            Program Educational Objectives (PEOs)<br/><br/>

PEO1: Provide socially responsible, environment friendly solutions to Mechanical Engineering related broad-based problems adapting professional ethics.<br/>

PEO2: Adapt state-of-the-art Mechanical engineering broad based technologies to work in multi-disciplinary work environments.<br/>

PEO3: Solve broad-based problems individually and as team member communicating effectively in the world of work.<br/><br/>

Program outcomes (POs)<br/><br/>

PO1: Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems. <br/>

PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods<br/>

PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.<br/>

PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements. <br/>

PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.<br/>

PO6: Project Management:  Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.<br/>

PO7: Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes. <br/><br/>

Program Specific Outcomes (PSOs)<br/><br/>

PSO1: Modern Software usage: Use latest mechanical related software for simple design, drafting, manufacturing, maintenance and documentation of mechanical components and processes.<br/>

PSO2: Maintenance and selection of machines, equipment, instruments: Maintain and select appropriate machine, equipment and instrument in field of Mechanical Engineering.<br/>

PSO3: Manage Mechanical Process: Manage the mechanical processing selection and scheduling right type of machinery, equipment, substrates, quality control techniques, operational parameters and software for a particular mechanical process or job for economy of operations.<br/>
            `
        ],
        faculty: [
            { name: 'Mr. Bagale M G (HOD)', position: 'B.E (Mech), Lecturer Exp. 25 Yrs' },
            { name: 'Mr. Tirthkar R N', position: 'B.E (Mech), Lecturer Exp. 22 Yrs' },
            { name: 'Mr. Shinde D V', position: 'M.E Design, Lecturer Exp. 21 Yrs' },
            { name: 'Mr. Thalange S S', position: 'M.E Design , Lecturer Exp. 19 Yrs' },
        ],
        labs: [
            { name: 'CAD/CAM Lab', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=400' },
            { name: 'Manufacturing Lab', image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=400' },
        ],
        timetablePdfEven: meEven,
        timetablePdfOdd: meEven,
    },
    electronics: {
        title: 'Electronics And Telecommunication Engineering',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200',
        description: "The department of Electronics & Telecommunication Engineering strive to achieve excellence in education so as to enable students to establish themselves as world-class technicians and practicing engineer.The department has good infrastructure and with fully developed lab to empower them with the proficiency and knowledge required to excel in the dynamic field of Electronics and Technology to pursue higher education. It also imparts technical knowledge and skill to students towards continuous improvement in education and placement and prepares the student to meet the challenges in the technical advancement to serve the community.",
        vision: 'To Prepare proficient engineers with  technological advancement in electronics and Tele-communication engineering to meet industries and social need',
        mission: [
            `Mission 1 : To offer modern educational aids, laboratories along with industry interaction.`,
            `Mission 2 : To enable student to strengthen their soft skills through co-curricular and extra-curricular activities.`,
            `Mission 3 : To encourage lifelong learning for better career opportunities.`,
            `
            Program Educational Objectives ( PEOs)<br/><br/>

PEO1: Provide socially responsible, environment friendly solutions to Electronics and Telecommunication engineering related broad-based problems adapting professional ethics.<br/>

PEO2: Adapt state-of-the-art Electronics and Telecommunication engineering broad-based technologies to work in multi-disciplinary work environments.<br/>

PEO3: Solve broad-based problems individually and as a team member communicating effectively in the world of work.<br/><br/>

 

Programme Outcomes (POs)<br/><br/>

 

PO1: Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and Engineering fundamentals and engineering specialization to solve the engineering problems.<br/>

PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard Methods. <br/>

PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist  With the Design of systems components or processes to meet specified needs<br/>

PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements. <br/>

PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in Context of society, sustainability, environment and ethical practices.<br/>

PO6: Project Management:  Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.<br/>

PO7: Life-long learning: Ability to analyse individual needs and engage in updating in the context of  technological changes. <br/><br/>

 

Program Specific Outcomes (PSOs)<br/><br/>

 

PSO1: Electronics and Tele-communication System: Maintain various types of Electronics & Tele-communication System.<br/>

PSO2: EDA Tools Usage: Use EDA tools to develop simple Electronics and Tele-communication engineering related circuits.<br/>
            `
        ],
        faculty: [
            { name: 'Mr. Choudhari A V (HOD)', position: 'M.Tech ES, Lecturer Exp. 17 Yrs.'},
            { name: 'Mr. Nimbalkar G C', position: 'M.E (EE) Lecturer Exp. 25Yrs.'},
            { name: 'Mr. Patki A D', position: 'B.E, M.E (E&TC), Lecturer Exp. 21 Yrs'},
            { name: 'Mrs.Konade S B', position: 'BE(CSE) Lecturer Exp:- 4 Yrs'},
        ],
        labs: [
            { name: 'Electronics Lab', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400' },
            { name: 'Communication Lab', image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=400' },
        ],
        timetablePdfEven: ejEven,
        timetablePdfOdd: ejOdd,
    }
};

const CoursePage = () => {
    const { courseId } = useParams(); // Get courseId from URL
    const [activeSection, setActiveSection] = useState('vision');
    const course = courseData[courseId];

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-page">
            <div className="course-page-course-container">
                <div className="course-page-course-header">
                    <h1 className="course-page-course-title">{course.title}</h1>
                    <img src={course.image} alt={course.title} className="course-page-course-image" />
                    <p>{course.description}</p>
                </div>

                <div className="course-page-course-nav">
                    <button
                        className={`course-page-nav-item ${activeSection === 'vision' ? 'active' : ''}`}
                        onClick={() => setActiveSection('vision')}
                    >
                        Vision / Mission
                    </button>
                    <button
                        className={`course-page-nav-item ${activeSection === 'faculty' ? 'active' : ''}`}
                        onClick={() => setActiveSection('faculty')}
                    >
                        Faculty
                    </button>
                    <button
                        className={`course-page-nav-item ${activeSection === 'labs' ? 'active' : ''}`}
                        onClick={() => setActiveSection('labs')}
                    >
                        Laboratories
                    </button>
                    <button
                        className={`course-page-nav-item ${activeSection === 'timetable' ? 'active' : ''}`}
                        onClick={() => setActiveSection('timetable')}
                    >
                        Time Table
                    </button>
                </div>

                <div className="course-page-section-content">
                    {activeSection === 'vision' && (
                        <div className="course-page-vision-mission">
                            <h2 className="course-page-section-title">Vision & Mission</h2>
                            <h3>Vision</h3>
                            <p>{course.vision}</p>
                            <h3>Mission</h3>
                            <ul className="course-page-objectives-list">
                                {course.mission.map((item, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeSection === 'faculty' && (
                        <div>
                            <h2 className="course-page-section-title">Our Faculty</h2>
                            <div className="course-page-faculty-grid">
                                {course.faculty.map((faculty, index) => (
                                    <div key={index} className="course-page-faculty-card">
                                        <img src={dummyPerson} alt={faculty.name} className="course-page-faculty-image" />
                                        <div className="course-page-faculty-info">
                                            <h3 className="course-page-faculty-name">{faculty.name}</h3>
                                            <p className="course-page-faculty-position">{faculty.position}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'labs' && (
                        <div>
                            <h2 className="course-page-section-title">Our Laboratories</h2>
                            <div className="course-page-lab-grid">
                                {course.labs.map((lab, index) => (
                                    <div key={index} className="course-page-lab-card">
                                        <img src={lab.image} alt={lab.name} className="course-page-lab-image" />
                                        <div className="course-page-lab-info">
                                            <h3 className="course-page-lab-name">{lab.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'timetable' && (
                        <div className="course-page-timetable-section">
                            <h2 className="course-page-section-title">Time Table</h2>
                            <a onClick={() => { window.open(course.timetablePdfEven) }} className="course-page-download-button" style={{ marginRight: '1rem' }} download>
                                <Download size={20} />
                                Even Semester Time Table 2024-25
                            </a>
                            <a onClick={() => { window.open(course.timetablePdfOdd) }} className="course-page-download-button" download>
                                <Download size={20} />
                                Odd Semester Time Table 2024-25
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;