'use client';

import { useState } from 'react';
import { ArrowLeft, Download, Search, Filter, ChevronDown, BarChart2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ClassTestResultsPage.css';

const departments = [
    {
        id: "computer",
        name: "Computer Engineering",
        results: {
            "sem1": {
                ct1: [
                    {
                        subject: "English",
                        subjectCode: "22101",
                        classAverage: 16.5,
                        highestMarks: 19,
                        date: "2023-12-15",
                        pdfUrl: "/pdfs/computer/sem1/ct1/english.pdf",
                        teacher: "Prof. Sarah Johnson",
                        teacherFeedback: {
                            suggestions: [
                                "Focus more on technical writing",
                                "Practice professional communication",
                                "Work on presentation skills"
                            ]
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "22102",
                        classAverage: 15.8,
                        highestMarks: 18,
                        date: "2023-12-16",
                        pdfUrl: "/pdfs/computer/sem1/ct1/basic-mathematics.pdf",
                        teacher: "Prof. Michael Smith",
                        teacherFeedback: {
                            suggestions: [
                                "More practice in trigonometry",
                                "Focus on speed and accuracy",
                                "Attempt complex problems"
                            ]
                        }
                    }
                ],
                ct2: [
                    {
                        subject: "English",
                        subjectCode: "22101",
                        classAverage: 17.2,
                        highestMarks: 20,
                        date: "2024-02-15",
                        pdfUrl: "/pdfs/computer/sem1/ct2/english.pdf",
                        teacher: "Prof. Sarah Johnson",
                        teacherFeedback: {
                            suggestions: []
                        }
                    },
                    {
                        subject: "Basic Mathematics",
                        subjectCode: "22102",
                        classAverage: 16.8,
                        highestMarks: 19,
                        date: "2024-02-16",
                        pdfUrl: "/pdfs/computer/sem1/ct2/basic-mathematics.pdf",
                        teacher: "Prof. Michael Smith",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing complex problems"
                            ]
                        }
                    }
                ]
            },
            "sem2": {
                ct1: [
                    {
                        subject: "Programming in C",
                        subjectCode: "22226",
                        classAverage: 15.5,
                        highestMarks: 18,
                        date: "2023-12-18",
                        pdfUrl: "/pdfs/computer/sem2/ct1/programming-in-c.pdf",
                        teacher: "Prof. Alan Turing",
                        teacherFeedback: {
                            suggestions: [
                                "Practice more with pointers",
                                "Work on complex programs",
                                "Focus on code optimization"
                            ]
                        }
                    }
                ],
                ct2: [
                    {
                        subject: "Programming in C",
                        subjectCode: "22226",
                        classAverage: 16.8,
                        highestMarks: 19,
                        date: "2024-02-18",
                        pdfUrl: "/pdfs/computer/sem2/ct2/programming-in-c.pdf",
                        teacher: "Prof. Alan Turing",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing different programming problems."
                            ]
                        }
                    }
                ]
            }
        }
    },
    {
        id: "electronics",
        name: "Electronics Engineering",
        results: {
            "sem1": {
                ct1: [
                    {
                        subject: "Basic Electronics",
                        subjectCode: "22131",
                        classAverage: 15.9,
                        highestMarks: 18,
                        date: "2023-12-15",
                        pdfUrl: "/pdfs/electronics/sem1/ct1/basic-electronics.pdf",
                        teacher: "Prof. Emily Watson",
                        teacherFeedback: {
                            suggestions: [
                                "Need more practice with circuit analysis."
                            ]
                        }
                    }
                ],
                ct2: [
                    {
                        subject: "Basic Electronics",
                        subjectCode: "22131",
                        classAverage: 16.7,
                        highestMarks: 19,
                        date: "2024-02-15",
                        pdfUrl: "/pdfs/electronics/sem1/ct2/basic-electronics.pdf",
                        teacher: "Prof. Emily Watson",
                        teacherFeedback: {
                            suggestions: [
                                "Keep practicing problem-solving."
                            ]
                        }
                    }
                ]
            }
        }
    }
]



export default function ClassTestResults() {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedTest, setSelectedTest] = useState('ct1');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const semesters = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6'];

    const openPdf = (url, title = 'Document Preview') => {
        const previewUrl = `/academic-preview?pdf=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(previewUrl, '_blank');
    };

    const filteredResults =
        selectedDepartment && selectedTest && selectedSemester
            ? departments
                .find((d) => d.id === selectedDepartment)
                ?.results[selectedSemester][selectedTest]
                .filter(
                    (result) =>
                        result.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.subjectCode.includes(searchQuery)
                )
            : [];

    const getSubjectPerformanceData = (departmentId, semester, test) => {
        const department = departments.find((d) => d.id === departmentId);
        if (!department || !department.results[semester] || !department.results[semester][test]) {
            return [];
        }
        return department.results[semester][test]
            .map((result) => ({
                subject: result.subject,
                average: result.classAverage,
            }))
            .sort((a, b) => b.average - a.average);
    };
    const [showChart, setShowChart] = useState(false);

    return (
        <div className="class-test-results-page">
            {/* Header */}
            <header className="page-header">
                <div className="header-content">
                    <Link to="/academics" className="back-button">
                        <ArrowLeft className="button-icon" />
                        Back to Academics
                    </Link>
                    <h1>Class Test Results</h1>
                </div>
            </header>

            <main className="main-content">
                {/* Search and Filters */}
                <div className="search-filters-section">
                    <div className="search-box">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search by subject name or code..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                            <Filter className="button-icon" />
                            Filters
                            <ChevronDown className={`button-icon ${showFilters ? 'rotate' : ''}`} />
                        </button>
                    </div>

                    {showFilters && (
                        <div className="filters-panel">
                            <div className="filter-controls">
                                {/* Performance Chart Toggle Button */}
                                {selectedDepartment && selectedSemester && selectedTest && filteredResults?.length > 0 && (
                                        <div className="chart-toggle-section">
                                            <button className={`toggle-button ${showChart ? 'active': ''}`} onClick={() => setShowChart(!showChart)}>
                                                {showChart ? 'Hide Comparison' : 'View Comparison'}
                                            </button>
                                        </div>
                                    )}
                                    
                                <select
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    className="filter-select"
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                        <option key={dept.id} value={dept.id}>
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    value={selectedSemester}
                                    onChange={(e) => setSelectedSemester(e.target.value)}
                                    className="filter-select"
                                    disabled={!selectedDepartment}
                                >
                                    <option value="">Select Semester</option>
                                    {semesters.map((sem) => (
                                        <option key={sem} value={sem}>
                                            Semester {sem.replace('sem', '')}
                                        </option>
                                    ))}
                                </select>

                                <div className="test-toggle">
                                    <button
                                        className={`toggle-button ${selectedTest === 'ct1' ? 'active' : ''}`}
                                        onClick={() => setSelectedTest('ct1')}
                                    >
                                        Class Test 1
                                    </button>
                                    <button
                                        className={`toggle-button ${selectedTest === 'ct2' ? 'active' : ''}`}
                                        onClick={() => setSelectedTest('ct2')}
                                    >
                                        Class Test 2
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {/* Performance Chart */}
                {showChart && selectedDepartment && selectedSemester && selectedTest && filteredResults?.length > 0 && (
                    <div className="performance-chart-section">
                        <h2>
                            <BarChart2 className="section-icon" />
                            Subject Performance Comparison
                        </h2>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={getSubjectPerformanceData(selectedDepartment, selectedSemester, selectedTest)}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="subject" />
                                    <YAxis domain={[0, 20]} />
                                    <Tooltip
                                        formatter={(value) => [`${value} marks`, 'Class Average']}
                                        labelStyle={{ color: '#2c3e50' }}
                                        contentStyle={{
                                            background: '#ffffff',
                                            border: '1px solid #e9ecef',
                                            borderRadius: '8px',
                                            padding: '8px',
                                        }}
                                    />
                                    <Bar dataKey="average" fill="#007bff" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}

                {/* Results Grid */}
                <div className="results-grid">
                    {filteredResults?.map((result) => (
                        <div key={result.subjectCode} className="result-card">
                            <div className="result-header">
                                <h3>{result.subject}</h3>
                                <span className="subject-code">{result.subjectCode}</span>
                            </div>
                            <div className="result-stats">
                                <div className="stat-item">
                                    <span className="stat-label">Class Average</span>
                                    <span className="stat-value">{result.classAverage}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Highest Marks</span>
                                    <span className="stat-value">{result.highestMarks}</span>
                                </div>
                            </div>
                            <div className="teacher-section">
                                <div className="teacher-info">
                                    <GraduationCap className="teacher-icon" />
                                    <span>{result.teacher}</span>
                                </div>
                                <div className="feedback-section">
                                    <h4>Teacher's Feedback</h4>
                                    <div className="feedback-content">
                                        <div className="feedback-category">
                                            <h5>Suggestions for Improvement</h5>
                                            <ul>
                                                {result.teacherFeedback.suggestions.map((suggestion, index) => (
                                                    <li key={index}>{suggestion}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="download-button"
                                onClick={() =>
                                    openPdf(result.pdfUrl, `${result.subject} - ${selectedTest.toUpperCase()} Result`)
                                }
                            >
                                <Download className="button-icon" />
                                Download Result
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {selectedDepartment && (!filteredResults || filteredResults.length === 0) && (
                    <div className="empty-state">
                        <h2>No results found</h2>
                        <p>Try adjusting your filters or search query</p>
                    </div>
                )}
            </main>
        </div>
    );
}
