import { React, useState } from "react";
import "./Exams.css";
import { Clock, BookOpen, User, Search, X, Calendar, MapPin, FileText, AlertCircle } from "lucide-react";
import StudentPortalLayout from "./StudentPortalLayout";
import { useAuth } from '../Authentication/AuthProvider'; // Assuming you have a useAuth hook

export default function ExamPortalPage() {
    const exams = [
        {
            id: 1,
            name: "Mobile Application Development (MAD)",
            code: "22617",
            date: "2025-06-10",
            time: "10:00 AM",
            duration: "3 hours",
            status: "Upcoming",
            venue: "Lab 1, Technology Center",
            instructions: [
                "Bring your student ID card",
                "Laptops will be provided",
                "No internet access during the exam",
            ],
        },
        {
            id: 2,
            name: "Emerging Trends in IT (ETI)",
            code: "22618",
            date: "2025-06-12",
            time: "2:00 PM",
            duration: "2 hours",
            status: "Upcoming",
            venue: "Hall C, Main Building",
            instructions: [
                "Bring your student ID card",
                "No electronic devices allowed",
                "Use blue or black pen only",
            ],
        },
        {
            id: 3,
            name: "Python Programming (PWP)",
            code: "22619",
            date: "2025-06-15",
            time: "9:00 AM",
            duration: "3 hours",
            status: "Upcoming",
            venue: "Lab 2, Technology Center",
            instructions: [
                "Bring your student ID card",
                "Laptops will be provided",
                "No sharing of code during the exam",
            ],
        },
        {
            id: 4,
            name: "Entrepreneurship Development (EDE)",
            code: "22620",
            date: "2025-06-18",
            time: "11:00 AM",
            duration: "3 hours",
            status: "Upcoming",
            venue: "Hall A, Main Building",
            instructions: [
                "Bring your student ID card",
                "No books or notes allowed",
                "Use blue or black pen only",
            ],
        },
        {
            id: 5,
            name: "Web-Based Programming (WBP)",
            code: "22621",
            date: "2025-06-20",
            time: "1:00 PM",
            duration: "3 hours",
            status: "Upcoming",
            venue: "Lab 3, Technology Center",
            instructions: [
                "Bring your student ID card",
                "Laptops will be provided",
                "No sharing of code during the exam",
            ],
        },
    ];

    const [selectedExam, setSelectedExam] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showAllExams, setShowAllExams] = useState(false); // State to toggle between showing limited and full exams

    // Helper function to normalize and match date strings
    const matchesDate = (date, search) => {
        const dateParts = date.split("-");
        const searchParts = search.split(/[-/ ]/); // Split search by "-", "/", or spaces

        return searchParts.every((part) => dateParts.some((datePart) => datePart.includes(part)));
    };

    // Filter exams based on the search term
    const filteredExams = exams.filter((exam) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            exam.name.toLowerCase().includes(searchLower) ||
            exam.code.toLowerCase().includes(searchLower) ||
            matchesDate(exam.date, searchLower)
        );
    });

    // Determine the exams to display based on the showAllExams state
    const displayedExams = showAllExams ? filteredExams : filteredExams.slice(0, 3);


    const { user } = useAuth();

    return (
        <div className="exam-portal-container">
            <StudentPortalLayout />
            <main className="exam-portal-main">
                <header className="exam-portal-header">
                    <div className="exam-portal-header-center">
                        <div className="exam-portal-search-bar">
                            <Search className="exam-portal-search-icon" />
                            <input
                                type="text"
                                placeholder="Search exams by subject, code, or date..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                            />
                        </div>
                    </div>
                    <div className="exam-portal-header-right">
                        <button className="exam-portal-icon-button exam-portal-user-profile" aria-label="User profile">
                            <User />
                            <span>{user.displayName}</span>
                        </button>
                    </div>
                </header>

                <div className="exam-portal-content">
                    <h1 className="exam-portal-page-title">MSBTE Diploma Exams</h1>

                    <div className="exam-portal-exam-list">
                        <div className="exam-portal-exam-list-header">
                            <h2>Upcoming Exams</h2>
                            <button
                                className="exam-portal-view-all-button"
                                onClick={() => setShowAllExams(!showAllExams)} // Toggle between showing all or limited exams
                            >
                                {showAllExams ? "Show Less" : "View All"}
                            </button>
                        </div>
                        <div className="exam-portal-exam-grid">
                            {displayedExams.map((exam) => (
                                <div key={exam.id} className="exam-portal-exam-card">
                                    <div className="exam-portal-exam-card-header">
                                        <BookOpen className="exam-portal-subject-icon" />
                                        <div className="exam-portal-exam-status">{exam.status}</div>
                                    </div>
                                    <h3>{exam.name}</h3>
                                    <p className="exam-portal-exam-code">{exam.code}</p>
                                    <div className="exam-portal-exam-details">
                                        <p>
                                            <Calendar className="exam-portal-icon" /> {exam.date}
                                        </p>
                                        <p>
                                            <Clock className="exam-portal-icon" /> {exam.time} ({exam.duration})
                                        </p>
                                    </div>
                                    <button className="exam-portal-exam-action-button" onClick={() => setSelectedExam(exam)}>
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                        {filteredExams.length === 0 && (
                            <p className="exam-portal-no-results">No exams found matching the search criteria.</p>
                        )}
                        <div className="exam-portal-exam-notice">
                            <AlertCircle className="exam-portal-notice-icon" />
                            <p>Make sure to check your exam schedule regularly for any updates or changes.</p>
                        </div>
                        {selectedExam && <ExamDetailsModal exam={selectedExam} onClose={() => setSelectedExam(null)} />}
                    </div>
                </div>
            </main>
        </div>
    );
}

const ExamDetailsModal = ({ exam, onClose }) => {
    return (
        <div className="exam-portal-modal-overlay">
            <div className="exam-portal-modal-content">
                <button className="exam-portal-modal-close" onClick={onClose}>
                    <X size={24} />
                </button>
                <h2 className="exam-portal-modal-title">{exam.name}</h2>
                <p className="exam-portal-exam-code">{exam.code}</p>
                <div className="exam-portal-exam-info">
                    <div className="exam-portal-info-item">
                        <Calendar className="exam-portal-info-icon" />
                        <span>{exam.date}</span>
                    </div>
                    <div className="exam-portal-info-item">
                        <Clock className="exam-portal-info-icon" />
                        <span>
                            {exam.time} ({exam.duration})
                        </span>
                    </div>
                    {exam.venue && (
                        <div className="exam-portal-info-item">
                            <MapPin className="exam-portal-info-icon" />
                            <span>{exam.venue}</span>
                        </div>
                    )}
                </div>
                <div className="exam-portal-exam-status-large">{exam.status}</div>
                {exam.instructions && (
                    <div className="exam-portal-exam-instructions">
                        <h3>
                            <FileText className="exam-portal-section-icon" />
                            Exam Instructions
                        </h3>
                        <ul>
                            {exam.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="exam-portal-exam-notice">
                    <AlertCircle className="exam-portal-notice-icon" />
                    <p>Please arrive at least 30 minutes before the exam start time.</p>
                </div>
            </div>
        </div>
    );
};