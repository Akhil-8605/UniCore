import { useState, useEffect } from 'react'
import { Calendar, Bell, GraduationCap, MapPin, Clock, ChevronRight, Sparkles } from 'lucide-react'
import './UpcomingEventsSection.css'

export default function EventsSection() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredEvents, setFilteredEvents] = useState([]);

    const events = [
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
        {
            id: '011',
            title: 'All students come to smart class',
            date: '2025-01-07',
            time: '02:49 PM',
            category: 'announcement',
            description: 'All students come to smart class for PHP lecture.',
            location: 'CO Smart Class',
        },
        {
            id: 'evt-005',
            title: 'Class Test 1',
            date: '2025-01-15',
            time: '11:00 PM',
            category: 'exam',
            description: 'All students are informed that class test 1 for S25 is sheduled on 15/01/2025 , 10:30 PM onwards.',
            isHighlight: 'true'
        },
        {
            id: 'evt-006',
            title: 'Class Test 2',
            date: '2025-03-15',
            time: '11:00 PM',
            category: 'exam',
            description: 'All students are informed that class test 2 for S25 is sheduled on 15/03/2025 , 10:30 PM onwards.',
            isHighlight: 'true'
        },
        {
            id: 'evt-1',
            title: '2025 Registration for Diploma Students',
            date: '2025-08-15',
            time: '09:00 AM',
            category: 'registration',
            description: 'Registration opens for Fall 2024 semester. Early registration benefits available.',
        },
    ];

    useEffect(() => {
        setFilteredEvents(
            activeCategory === 'all'
                ? events
                : events.filter(event => event.category === activeCategory)
        );
    }, [activeCategory]);

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

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000); // Update the time every second

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, []);

    return (
        <section className="events-section" id='events'>
            <div className="events-section-events-container">
                <div className="events-section-events-header">
                    <div className="events-section-header-content">
                        <h2>Upcoming Events</h2>
                        <p className="events-section-header-subtitle">Stay updated with the latest university activities</p>
                    </div>
                    <div className="events-section-live-time">
                        <Clock className="events-section-time-icon" />
                        {currentTime}
                    </div>
                </div>

                <div className="events-section-category-filters">
                    <button
                        className={`events-section-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        <Sparkles className="events-section-filter-icon" />
                        All Events
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'registration' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('registration')}
                    >
                        <Calendar className="events-section-filter-icon" />
                        Registration
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'exam' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('exam')}
                    >
                        <GraduationCap className="events-section-filter-icon" />
                        Exams
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'event' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('event')}
                    >
                        <Calendar className="events-section-filter-icon" />
                        Events
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'announcement' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('announcement')}
                    >
                        <Bell className="events-section-filter-icon" />
                        Announcements
                    </button>
                </div>

                <div className="events-section-events-grid">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className={`events-section-event-card ${event.isHighlight ? 'highlight' : ''}`}
                        >
                            <div className="events-section-event-header">
                                {getCategoryIcon(event.category)}
                                <span className="events-section-event-category">{event.category}</span>
                                {isUpcoming(event.date) && (
                                    <span className="events-section-upcoming-badge">
                                        <Sparkles className="events-section-badge-icon" />
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
        </section>
    );
}
