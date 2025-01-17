'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Download, Search, Filter, ChevronDown, BarChart2, Book, History } from 'lucide-react'
import {Link} from 'react-router-dom'
import EnglishW22 from "../../Documents/BrochurePDF.pdf"
import './QuestionPapersPage.css'

const departments = [
  {
    id: "computer",
    name: "Computer Engineering",
    subjects: {
      "sem1": [
        {
          id: "eng",
          name: "English",
          code: "22101",
          papers: [
            { 
              id: "eng-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: EnglishW22,
              downloadCount: 156,
              lastDownloaded: "2024-01-12",
              fileSize: "2.4 MB"
            },
            { 
              id: "eng-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "/sample.pdf",
              downloadCount: 234,
              lastDownloaded: "2024-01-10",
              fileSize: "2.1 MB"
            },
            { 
              id: "eng-s22",
              title: "Summer 2022",
              year: "2022",
              type: "Regular",
              url: "/sample.pdf",
              downloadCount: 567,
              lastDownloaded: "2024-01-05",
              fileSize: "2.3 MB"
            }
          ]
        },
        {
          id: "math",
          name: "Basic Mathematics",
          code: "22102",
          papers: [
            { 
              id: "math-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "/sample.pdf",
              downloadCount: 189,
              lastDownloaded: "2024-01-11",
              fileSize: "3.1 MB"
            },
            { 
              id: "math-w23",
              title: "Winter 2023",
              year: "2023",
              type: "Regular",
              url: "/sample.pdf",
              downloadCount: 245,
              lastDownloaded: "2024-01-09",
              fileSize: "2.8 MB"
            }
          ]
        }
      ],
      "sem2": [
        {
          id: "programming",
          name: "Programming in C",
          code: "22226",
          papers: [
            { 
              id: "prog-s23",
              title: "Summer 2023",
              year: "2023",
              type: "Regular",
              url: "/sample.pdf",
              downloadCount: 178,
              lastDownloaded: "2024-01-12",
              fileSize: "2.7 MB"
            }
          ]
        }
      ]
    }
  }
]

export default function QuestionPapers() {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [downloadHistory, setDownloadHistory] = useState([])
  const [sortBy, setSortBy] = useState('date')
  const [viewMode, setViewMode] = useState('grid')

  const semesters = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6"]
  const years = ["2023", "2022", "2021", "2020"]

  // useEffect(() => {
  //   // Load download history from localStorage
  //   const history = localStorage.getItem('downloadHistory')
  //   if (history) {
  //     setDownloadHistory(JSON.parse(history))
  //   }
  // }, [])

  const openPdf = (paper) => {
    const previewUrl = `/academic-preview?pdf=${encodeURIComponent(paper.url)}&title=${encodeURIComponent(paper.title)}`
    window.open(previewUrl, '_blank')
    
    // Update download history
    const updatedHistory = [paper, ...downloadHistory.filter(p => p.id !== paper.id)].slice(0, 10)
    setDownloadHistory(updatedHistory)
    localStorage.setItem('downloadHistory', JSON.stringify(updatedHistory))
  }

  const filteredSubjects = selectedDepartment && selectedSemester
    ? departments
        .find(d => d.id === selectedDepartment)
        ?.subjects[selectedSemester]
        ?.filter(subject => 
          subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          subject.code.includes(searchQuery)
        )
    : []

  const getFilteredPapers = (papers) => {
    return papers
      .filter(paper => !selectedYear || paper.year === selectedYear)
      .sort((a, b) => {
        if (sortBy === 'downloads') {
          return b.downloadCount - a.downloadCount
        }
        return new Date(b.lastDownloaded || '').getTime() - new Date(a.lastDownloaded || '').getTime()
      })
  }

  return (
    <div className="question-papers-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <Link to="/academics" className="back-button">
            <ArrowLeft className="button-icon" />
            Back to Academics
          </Link>
          <h1>Question Papers Archive</h1>
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
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="button-icon" />
              Filters
              <ChevronDown className={`button-icon ${showFilters ? 'rotate' : ''}`} />
            </button>
          </div>

          {showFilters && (
            <div className="filters-panel">
              <div className="filter-controls">
                <select 
                  value={selectedDepartment} 
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="filter-select"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>

                <select 
                  value={selectedSemester} 
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="filter-select"
                  disabled={!selectedDepartment}
                >
                  <option value="">Select Semester</option>
                  {semesters.map(sem => (
                    <option key={sem} value={sem}>Semester {sem.replace('sem', '')}</option>
                  ))}
                </select>

                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="date">Sort by Date</option>
                  <option value="downloads">Sort by Downloads</option>
                </select>
              </div>

              <div className="view-toggle">
                <button 
                  className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <BarChart2 className="button-icon" />
                  Grid View
                </button>
                <button 
                  className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <Book className="button-icon" />
                  List View
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Download History */}
        {downloadHistory.length > 0 && (
          <div className="history-section">
            <h2>
              <History className="section-icon" />
              Recent Downloads
            </h2>
            <div className="history-list">
              {downloadHistory.map((paper) => (
                <div key={paper.id} className="history-item">
                  <div className="history-info">
                    <h3>{paper.title}</h3>
                    <span className="history-meta">
                      Downloaded on {new Date(paper.lastDownloaded || '').toLocaleDateString()}
                    </span>
                  </div>
                  <button 
                    className="download-button small"
                    onClick={() => openPdf(paper)}
                  >
                    <Download className="button-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Papers Content */}
        <div className={`papers-content ${viewMode}`}>
          {filteredSubjects.map(subject => (
            <div key={subject.id} className="subject-card">
              <div className="subject-header">
                <h3>{subject.name}</h3>
                <span className="subject-code">{subject.code}</span>
              </div>
              <div className="papers-list">
                {getFilteredPapers(subject.papers).map((paper) => (
                  <div key={paper.id} className="paper-item">
                    <div className="paper-info">
                      <h4>{paper.title}</h4>
                      <div className="paper-meta">
                        <span className="paper-type">{paper.type}</span>
                        <span className="paper-year">{paper.year}</span>
                        <span className="paper-downloads">
                          {paper.downloadCount} downloads
                        </span>
                        <span className="paper-size">{paper.fileSize}</span>
                      </div>
                    </div>
                    <button 
                      className="download-button"
                      onClick={() => openPdf(paper)}
                    >
                      <Download className="button-icon" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {selectedDepartment && selectedSemester && filteredSubjects.length === 0 && (
          <div className="empty-state">
            <Book className="empty-icon" />
            <h2>No papers found</h2>
            <p>Try adjusting your filters or search query</p>
          </div>
        )}
      </main>
    </div>
  )
}
