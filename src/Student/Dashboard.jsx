"use client"

import {
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  Award,
  FileText,
  Book,
  TrendingUp,
  AlertCircle,
  BookMarked,
  ArrowUpRight,
  Users,
  GraduationCap,
  ArrowRight,
  Sparkle,
  MapPin,
  Bell,
  LayoutDashboard,
  Library,
  User
} from "lucide-react"
import { Link } from "react-router-dom"
import "./Dashboard.css"
import StudentPortalLayout from "./StudentPortalLayout"

import { useAuth } from '../Authentication/AuthProvider'; // Assuming you have a useAuth hook

export default function DashboardPage() {

  const upcomingEvents = [
    {
      id: 'evt-003',
      title: 'Campus Placement 2025',
      date: '2025-01-8',
      time: '10:30 AM',
      category: 'event',
      description: 'All students are informed that Campus Placements is schedule for 08/01/2025 so prepare for interview.',
      location: 'Campus',
      isHighlight: true
    },
    {
      id: 'evt-001',
      title: '6th Sem Stationary',
      date: '2025-01-1',
      time: '09:00 AM',
      category: 'registration',
      description: 'Plase get your 6th sem stationary from stationary center and ensure your collage fees is complete.',
    },
    {
      id: 'evt-002',
      title: 'Roll NO. 202 Come to Project Lab',
      date: '2025-01-2',
      time: '08:00 AM',
      category: 'announcement',
      description: 'Final examination period begins for Spring 2024 semester.',
      location: 'Multiple Venues'
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const isUpcoming = (dateString) => {
    const eventDate = new Date(dateString);
    return eventDate > new Date();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'exam':
        return <GraduationCap className="events-section-category-icon" />;
      case 'registration':
        return <Calendar className="events-section-category-icon" />;
      case 'announcement':
        return <Bell className="events-section-category-icon" />;
      default:
        return <Calendar className="events-section-category-icon" />;
    }
  };

  const recentBooks = [
    {
      title: "Let Us C",
      author: "Yashavant P. Kanetkar",
      cover: "/placeholder.svg?height=120&width=90",
      progress: 60,
    },
    {
      title: "Data Structures using C",
      author: "Yashavant P. Kanetkar",
      cover: "/placeholder.svg?height=120&width=90",
      progress: 60,
    },
    {
      title: "OS Concepts",
      author: "Abraham Silberschatz",
      cover: "/placeholder.svg?height=120&width=90",
      progress: 30,
    },
    {
      title: "Programming with Java",
      author: "E. Balagurusamy",
      cover: "/placeholder.svg?height=120&width=90",
      progress: 65,
    },
  ]

  const pendingAssignments = [
    {
      subject: "Mobile Application Development (MAD)",
      title: "MAD Assingment 1",
      dueDate: "2025-02-05",
      details: "Write code for Design an Android app with basic UI.",
    },
    {
      subject: "(WBP) PHP",
      title: "PHP Assignment 2",
      dueDate: "2025-02-02",
      details: "Write all programs as per in assignment.",
    },
    {
      subject: "Digital Electronics",
      title: "Logic Gates & Boolean Algebra",
      dueDate: "2025-02-07",
      details: "Solve Boolean expressions and design basic logic circuits.",
    },
  ]

  const upcomingExams = [
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
  ]

  const { user } = useAuth();

  return (
    <div style={{ display: 'flex' }}>
      <StudentPortalLayout />
      <div style={{ width: '90%' }}>
        <div className="content-header">
          {/* <h1 className="page-title">Dashboard</h1> */}
          <div className="welcome-message">
            <div>
              <h2>Welcome back, {user.displayName}</h2>
              <p>Here's what's happening with your academic progress</p>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">


          <div className="card assignments-section">
            <div className="card-header">
              <h2 className="card-title">Pending Assignments</h2>
              <Link to="/student-portal/assignments" className="see-all">
                See All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="assignments-list">
              {pendingAssignments.map((assignment, index) => (
                <div key={index} className="assignment-item">
                  <div className="assignment-info">
                    <h3>{assignment.title}</h3>
                    <p>{assignment.subject}</p>
                    <span className="due-date">Due date: {assignment.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card exams-section">
            <div className="card-header">
              <h2 className="card-title">Upcoming Exams</h2>
              <Link to="/student-portal/exams" className="see-all">
                See All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="exams-list">
              {upcomingExams.map((exam, index) => (
                <div key={index} className="assignment-item">
                  <div className="assignment-info">
                    <h3>{exam.name}</h3>
                    <p style={{ display: 'flex', gap: '5px' }}>
                      <span>{exam.code}</span>
                      <span>•</span>
                      <span>{exam.time}</span>
                    </p>
                    <span className="due-date">{exam.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card upcoming-events">
            <div className="card-header">
              <h2 className="card-title">Upcoming Events</h2>
              <Calendar className="card-icon" />
            </div>
            <div className="events-section-events-grid">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`events-section-event-card ${event.isHighlight ? 'highlight' : ''}`}
                >
                  <div className="events-section-event-header">
                    {getCategoryIcon(event.category)}
                    <span className="events-section-event-category">{event.category}</span>
                    {isUpcoming(event.date) && (
                      <span className="events-section-upcoming-badge">
                        <Sparkle className="events-section-badge-icon" />
                        Upcoming
                      </span>
                    )}
                  </div>

                  <h3 className="events-section-event-title">{event.title}</h3>

                  <p className="events-section-event-description">{event.description}</p>

                  <div className="events-section-event-details">
                    <div className="events-section-detail-item">
                      <Calendar className="events-section-detail-icon" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="events-section-detail-item">
                      <Clock className="events-section-detail-icon" />
                      <span>{event.time}</span>
                    </div>
                    {event.location && (
                      <div className="events-section-detail-item">
                        <MapPin className="events-section-detail-icon" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="card books-section">
            <div className="card-header">
              <h2 className="card-title">Currently Reading</h2>
              <a href="/student-portal/library" className="see-all">
                See All <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="books-grid">
              {recentBooks.map((book, index) => (
                <div key={index} className="book-card">
                  <div className="library-page-book-cover-placeholder">
                    <BookOpen size={32} />
                  </div>
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <div className="book-progress">
                      <div className="progress-bar">
                        <div className="progress-value" style={{ width: `${book.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card quick-actions">
            <div className="card-header">
              <h2 className="card-title">Quick Actions</h2>
              <TrendingUp className="card-icon" />
            </div>
            <div className="actions-grid">
              {[
                { name: "Schedule", href: "/student-portal/schedule", icon: Calendar, description: "Manage your academic schedule" },
                { name: "Assignments", href: "/student-portal/assignments", icon: FileText, description: "Submit and track your assignments" },
                { name: "Library", href: "/student-portal/library", icon: Library, description: "Access library resources" },
                { name: "Attendance", href: "/student-portal/attendance", icon: Clock, description: "Track your attendance" },
                { name: "Certificates", href: "/student-portal/certificates", icon: Award, description: "View your certificates" },
                { name: "Profile", href: "/student-portal/profile", icon: User, description: "Edit and view your profile" },
              ].map((item, index) => (
                <a key={index} href={item.href} className="quick-access-quick-link-card">
                  <div className="quick-access-quick-link-icon">
                    <item.icon className="action-icon" />
                  </div>
                  <div className="quick-access-quick-link-content">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <ChevronRight className="quick-access-arrow-icon" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

