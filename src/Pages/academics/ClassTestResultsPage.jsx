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
                        teacher: "Mr. Jhadhav",
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
                        teacher: "Mrs. Dixit",
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
                        teacher: "Mr. Jhadhav",
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
                        teacher: "Mrs. Dixit",
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
                        teacher: "Mr. Rashinkar",
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
                        teacher: "Mr. Rashinkar",
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
                        teacher: " ",
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
                        teacher: " ",
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
        window.open(url, '_blank');
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
            <header className="results-page-page-header">
                <div className="results-page-header-content">
                    <Link to="/academics" className="results-page-back-button">
                        <ArrowLeft className="results-page-button-icon" />
                    </Link>
                    <h1>Class Test Results</h1>
                </div>
            </header>

            <main className="results-page-main-content">
                {/* Search and Filters */}
                <div className="results-page-search-filters-section">
                    <div className="results-page-search-box">
                        <Search className="results-page-search-icon" />
                        <input
                            type="text"
                            placeholder="Search by subject name or code..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="results-page-filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                            <Filter className="results-page-button-icon" />
                            Filters
                            <ChevronDown className={`results-page-button-icon ${showFilters ? 'rotate' : ''}`} />
                        </button>
                    </div>

                    {showFilters && (
                        <div className="results-page-filters-panel">
                            <div className="results-page-filter-controls">
                                {/* Performance Chart Toggle Button */}
                                {selectedDepartment && selectedSemester && selectedTest && filteredResults?.length > 0 && (
                                        <div className="results-page-chart-toggle-section">
                                            <button className={`results-page-toggle-button ${showChart ? 'active': ''}`} onClick={() => setShowChart(!showChart)}>
                                                {showChart ? 'Hide Comparison' : 'View Comparison'}
                                            </button>
                                        </div>
                                    )}
                                    
                                <select
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    className="results-page-filter-select"
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
                                    className="results-page-filter-select"
                                    disabled={!selectedDepartment}
                                >
                                    <option value="">Select Semester</option>
                                    {semesters.map((sem) => (
                                        <option key={sem} value={sem}>
                                            Semester {sem.replace('sem', '')}
                                        </option>
                                    ))}
                                </select>

                                <div className="results-page-test-toggle">
                                    <button
                                        className={`results-page-toggle-button ${selectedTest === 'ct1' ? 'active' : ''}`}
                                        onClick={() => setSelectedTest('ct1')}
                                    >
                                        Class Test 1
                                    </button>
                                    <button
                                        className={`results-page-toggle-button ${selectedTest === 'ct2' ? 'active' : ''}`}
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
                    <div className="results-page-performance-chart-section">
                        <h2>
                            <BarChart2 className="results-page-section-icon" />
                            Subject Performance Comparison
                        </h2>
                        <div className="results-page-chart-container">
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
                <div className="results-page-results-grid">
                    {filteredResults?.map((result) => (
                        <div key={result.subjectCode} className="results-page-result-card">
                            <div className="results-page-result-header">
                                <h3>{result.subject}</h3>
                                <span className="results-page-subject-code">{result.subjectCode}</span>
                            </div>
                            <div className="results-page-result-stats">
                                <div className="results-page-stat-item">
                                    <span className="results-page-stat-label">Class Average</span>
                                    <span className="results-page-stat-value">{result.classAverage}</span>
                                </div>
                                <div className="results-page-stat-item">
                                    <span className="results-page-stat-label">Highest Marks</span>
                                    <span className="results-page-stat-value">{result.highestMarks}</span>
                                </div>
                            </div>
                            <div className="results-page-teacher-section">
                                <div className="results-page-teacher-info">
                                    <GraduationCap className="results-page-teacher-icon" />
                                    <span>{result.teacher}</span>
                                </div>
                                <div className="results-page-feedback-section">
                                    <h4>Teacher's Feedback</h4>
                                    <div className="results-page-feedback-content">
                                        <div className="results-page-feedback-category">
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
                                className="results-page-download-button"
                                onClick={() =>
                                    openPdf(result.pdfUrl, `${result.subject} - ${selectedTest.toUpperCase()} Result`)
                                }
                            >
                                <Download className="results-page-button-icon" />
                                Download Result
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {selectedDepartment && (!filteredResults || filteredResults.length === 0) && (
                    <div className="results-page-empty-state">
                        <h2>No results found</h2>
                        <p>Try adjusting your filters or search query</p>
                    </div>
                )}
            </main>
        </div>
    );
}
