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
    LayoutDashboardIcon,
    Users,
} from "lucide-react";
import "../Student/StudentPortalLayout.css";

export default function AdminPortalLayout({ children }) {
    const [expanded, setExpanded] = useState(true);
    const location = useLocation(); // Use location to get the current path

    const navigation = {
        main: [
            { name: "Admin Dashboard", href: "/admin-dashboard", icon: LayoutDashboardIcon },
            { name: "Library", href: "/admin-library", icon: Library },
            { name: "Events", href: "/admin-events", icon: Calendar },
            { name: "Attendance", href: "/student-portal/attendance", icon: Clock },
            { name: "Assignments", href: "/student-portal/assignments", icon: FileText },
            { name: "Students", href: "/student-portal/attendance", icon: Users },
            { name: "Back to Home", href: "/", icon: LogOut },
        ],
    };

    return (
        <div className="portal-sidebar-container">
            <aside className={`portal-sidebar-sidebar ${!expanded ? "collapsed" : ""}`}>
                <div className="portal-sidebar-sidebar-header">
                    <div className="portal-sidebar-logo-container">
                        <User className="portal-sidebar-logo-icon" />
                        <span className="portal-sidebar-logo-text" style={{ margin: 'auto 0' }}>Admin</span>
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
                        {/* <h2 className="portal-sidebar-nav-section-title">Main</h2> */}
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
                </nav>
            </aside>

            <main className={`portal-sidebar-main-content ${!expanded ? "expanded" : ""}`}>{children}</main>
        </div>
    );
}
