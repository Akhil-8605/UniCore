import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  ChevronFirst,
  ChevronLast,
  Home,
  LayoutDashboard,
  Library,
  FileText,
  Settings,
  User,
  Clock,
  Award,
  LogOut,
  ChevronLeft,
  Thermometer,
  AlignJustify,
  Book,
} from "lucide-react";
import unicoreLogo from "../Images/unicore logo.png"
import "./StudentPortalLayout.css";

export default function StudentPortalLayout({ children }) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation(); // Use location to get the current path

  const navigation = {
    main: [
      { name: "Dashboard", href: "/student-portal", icon: LayoutDashboard },
      { name: "Schedule", href: "/student-portal/schedule", icon: Calendar },
      { name: "Assignments", href: "/student-portal/assignments", icon: FileText },
    ],
    academic: [
      { name: "Library", href: "/student-portal/library", icon: Library },
      { name: "Attendance", href: "/student-portal/attendance", icon: Clock },
      { name: "Exam Portal", href: "/student-portal/exams", icon: BookOpen },
      { name: "Certificates", href: "/student-portal/certificates", icon: Award },
    ],
    personal: [
      { name: "Profile", href: "/student-portal/profile", icon: User },
      { name: "Back to Home", href: "/", icon: LogOut },
    ],
  };

  return (
    <div className="portal-sidebar-container">
      <aside className={`portal-sidebar-sidebar ${!expanded ? "collapsed" : ""}`}>
        <div className="portal-sidebar-sidebar-header">
          <div className="portal-sidebar-logo-container">
            {/* <Home className="portal-sidebar-logo-icon" />*/}
            <a className="portal-sidebar-logo-text" href="/" style={{textDecoration: 'none',cursor: 'pointer'}}>UniCore</a>
            {/* <img src={unicoreLogo} alt="" className="portal-sidebar-logo-img" /> */}
          </div>
          <button
            className="portal-sidebar-toggle-btn"
            onClick={() => setExpanded((prev) => !prev)}
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? <ChevronLeft /> : <AlignJustify />}
          </button>
        </div>

        <nav className="portal-sidebar-nav-container">
          <div className="portal-sidebar-nav-section">
            <h2 className="portal-sidebar-nav-section-title">Main</h2>
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`portal-sidebar-nav-link ${location.pathname === item.href ? "active" : ""}`}
              >
                <item.icon className="portal-sidebar-nav-icon" />
                <span className="portal-sidebar-nav-text">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="portal-sidebar-nav-section">
            <h2 className="portal-sidebar-nav-section-title">Academic</h2>
            {navigation.academic.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`portal-sidebar-nav-link ${location.pathname === item.href ? "active" : ""}`}
              >
                <item.icon className="portal-sidebar-nav-icon" />
                <span className="portal-sidebar-nav-text">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="portal-sidebar-nav-section">
            <h2 className="portal-sidebar-nav-section-title">Personal</h2>
            {navigation.personal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`portal-sidebar-nav-link ${location.pathname === item.href ? "active" : ""}`}
              >
                <item.icon className="portal-sidebar-nav-icon" />
                <span className="portal-sidebar-nav-text">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      <main className={`portal-sidebar-main-content ${!expanded ? "expanded" : ""}`}>{children}</main>
    </div>
  );
}
