import { useState } from 'react';
import { BookOpen, Calendar, FileText, GraduationCap, Users, Library, Mail, Clock, ChevronRight, BarChart2, BookMarked, UserCheck, icons } from 'lucide-react';
import './QuickAccessSection.css';

const stats = [
    { label: 'Active Students', value: '12,450', icon: Users, trend: '+5%' },
    { label: 'Faculty Members', value: '840', icon: GraduationCap, trend: '+2%' },
    { label: 'Courses Offered', value: '1,200', icon: BookOpen, trend: '+8%' },
    { label: 'Research Papers', value: '3,280', icon: FileText, trend: '+12%' }
];

const quickLinks = [
    {
        title: 'Student Portal',
        icon: UserCheck,
        description: 'View grades, attendance, and academic progress',
        link: '/student-portal'
    },
    {
        title: 'Academics',
        icon: BookOpen,
        description: 'Explore academic programs, and resources for your studies',
        link: '/academics'
    },
    {
        title: 'Library Resources',
        icon: Library,
        description: 'Access digital library and research materials',
        link: '/library'
    },

    {
        title: 'Academic Calendar',
        icon: Calendar,
        description: 'Important dates and academic schedule',
        link: '/academic-calendar'
    },
    {
        title: 'Class Schedule',
        icon: Clock,
        description: 'View and manage your daily class schedule',
        link: '#'
    },
    {
        title: 'Email Services',
        icon: Mail,
        description: 'Access university email and communications',
        link: '#'
    },
];

function QuickAccess() {
    const [hoveredStat, setHoveredStat] = useState(null);

    return (
        <section className="quick-access">
            <div className="quick-access-container">
                <div className="quick-access-dashboard-header">
                    <div className="quick-access-header-content">
                        <h2>Quick Access Dashboard</h2>
                        <p>Access essential tools and track university metrics</p>
                    </div>
                    {/* <div className="header-actions">
                        <button className="customize-btn">
                            Customize Dashboard
                            <BarChart2 className="customize-icon" />
                        </button>
                    </div> */}
                </div>

                <div className="quick-access-stats-grid">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="quick-access-stat-card"
                                onMouseEnter={() => setHoveredStat(index)}
                                onMouseLeave={() => setHoveredStat(null)}
                            >
                                <div className="quick-access-stat-icon-wrapper">
                                    <Icon className={`quick-access-stat-icon ${hoveredStat === index ? 'animate' : ''}`} />
                                </div>
                                <div className="quick-access-stat-content">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                    <span className="quick-access-stat-trend">{stat.trend}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="quick-access-quick-links-section">
                    <h3 className="quick-access-section-title">Quick Links</h3>
                    <div className="quick-access-quick-links-grid">
                        {quickLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a key={index} href={link.link} className="quick-access-quick-link-card">
                                    <div className="quick-access-quick-link-icon">
                                        <Icon />
                                    </div>
                                    <div className="quick-access-quick-link-content">
                                        <h4>{link.title}</h4>
                                        <p>{link.description}</p>
                                    </div>
                                    <ChevronRight className="quick-access-arrow-icon" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuickAccess;
