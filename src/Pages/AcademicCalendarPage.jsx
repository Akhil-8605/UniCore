import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameDay, isSameMonth, parseISO, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths } from 'date-fns';
import './AcademicCalendarPage.css';
import MainHeader from "../Components/MainHeader"

const eventTypes = {
    lecture: { label: 'Lecture', color: '#3498db' },
    exam: { label: 'Exam', color: '#e74c3c' },
    holiday: { label: 'Holiday', color: '#2ecc71' },
    deadline: { label: 'Deadline', color: '#f39c12' },
    event: { label: 'Event', color: '#9b59b6' }
};

const initialEvents = [
    {
        id: '1',
        title: 'Final Exams Week',
        date: '2025-01-16',
        type: 'exam',
        description: 'Final examination period for all courses'
    },
    {
        id: '2',
        title: 'Winter Break',
        date: '2025-01-20',
        endDate: '2025-01-28',
        type: 'holiday',
        description: 'Winter break for all students and faculty'
    },
    {
        id: '3',
        title: 'Project Submission',
        date: '2025-01-12',
        type: 'deadline',
        description: 'Final project submission deadline for CS401'
    },
    {
        id: '4',
        title: 'Guest Lecture: AI Ethics',
        date: '2025-01-10',
        endDate: '2025-01-10',
        type: 'lecture',
        description: 'Special guest lecture on AI Ethics and Future Implications'
    },
    {
        id: '5',
        title: 'Science Fair',
        date: '2025-01-25',
        type: 'event',
        description: 'Annual University Science Fair'
    },
    {
        id: '6',
        title: 'Workshop: Web Development',
        date: '2025-01-18',
        type: 'event',
        description: 'A workshop on web development with industry experts'
    },
    {
        id: '7',
        title: 'Midterm Exam',
        date: '2025-01-10',
        type: 'exam',
        description: 'Midterm exam for the Software Engineering course'
    },
    {
        id: '8',
        title: 'Deadline for Assignments',
        date: '2025-01-15',
        type: 'deadline',
        description: 'Last date to submit assignments for CS101'
    }
];

export default function AcademicCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [view, setView] = useState('month');
    const [filteredTypes, setFilteredTypes] = useState([]);
    const [events] = useState(initialEvents);

    // Date functions for month view
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const startDayOfWeek = monthStart.getDay(); // Get the starting day of the week (0 for Sunday, 1 for Monday, etc.)

    // Add blank spaces for the days before the start of the month
    const blanks = Array(startDayOfWeek).fill(null); // Create an array with the number of blanks before the 1st of the month

    // Date functions for week view
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 0 });
    const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

    // Date functions for day view
    const daysInDay = [currentDate];

    const filteredEvents = events.filter(event =>
        filteredTypes.length === 0 || filteredTypes.includes(event.type)
    );

    const getEventsForDate = (date) => {
        return filteredEvents.filter(event => {
            const eventDate = parseISO(event.date);
            const eventEndDate = event.endDate ? parseISO(event.endDate) : eventDate;
            return date >= eventDate && date <= eventEndDate;
        });
    };

    // Month view navigation
    const handlePreviousMonth = () => {
        setCurrentDate(prev => subMonths(prev, 1)); // Go to the previous month
    };

    const handleNextMonth = () => {
        setCurrentDate(prev => addMonths(prev, 1)); // Go to the next month
    };

    // Week view navigation
    const handlePreviousWeek = () => {
        setCurrentDate(prev => subWeeks(prev, 1)); // Go to the previous week
    };

    const handleNextWeek = () => {
        setCurrentDate(prev => addWeeks(prev, 1)); // Go to the next week
    };

    // Day view navigation
    const handlePreviousDay = () => {
        setCurrentDate(prev => subDays(prev, 1)); // Go to the previous day
    };

    const handleNextDay = () => {
        setCurrentDate(prev => addDays(prev, 1)); // Go to the next day
    };

    const toggleEventType = (type) => {
        setFilteredTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const handleEventClick = (event, e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up
        setSelectedEvent(event);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const eventsForDay = getEventsForDate(date);
        if (eventsForDay.length > 0) {
            setSelectedEvent(eventsForDay[0]);
        } else {
            setSelectedEvent(null);
        }
    };

    return (
        <>
            <MainHeader />
            <div className="academic-calendar-container" style={{paddingTop: '100px'}}>
                <div className="academic-calendar-header">
                    <div className="academic-calendar-title">
                        <h1>Academic Calendar</h1>
                        <p>{format(currentDate, 'MMMM yyyy')}</p>
                    </div>

                    <div className="academic-calendar-controls">
                        <select
                            value={view}
                            onChange={(e) => setView(e.target.value)}
                            className="academic-calendar-view-select"
                        >
                            <option value="month">Month View</option>
                            <option value="week">Week View</option>
                            {/* <option value="day">Day View</option> */}
                        </select>

                        <div className="academic-calendar-navigation">
                            <button
                                onClick={view === 'month' ? handlePreviousMonth : view === 'week' ? handlePreviousWeek : handlePreviousDay}
                                className="academic-calendar-nav-button"
                            >
                                &lt;
                            </button>
                            <button onClick={() => setCurrentDate(new Date())} className="academic-calendar-nav-button">
                                Today
                            </button>
                            <button
                                onClick={view === 'month' ? handleNextMonth : view === 'week' ? handleNextWeek : handleNextDay}
                                className="academic-calendar-nav-button"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="academic-calendar-filters">
                    <div className="academic-calendar-filter-header">
                        <span>Filter Events</span>
                    </div>
                    <div className="academic-calendar-filter-badges">
                        {Object.entries(eventTypes).map(([type, { label, color }]) => (
                            <button
                                key={type}
                                className={`academic-calendar-filter-badge ${filteredTypes.includes(type) ? 'active' : ''}`}
                                onClick={() => toggleEventType(type)}
                                style={{ backgroundColor: color }}
                            >
                                <span className="academic-calendar-badge-dot"></span>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="academic-calendar-grid">
                    <div className="academic-calendar-days">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="academic-calendar-day-header">
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="academic-calendar-dates">
                        {view === 'month' && (
                            <>
                                {/* Render the blanks first */}
                                {blanks.map((_, index) => (
                                    <div key={index} className="academic-calendar-date blank-date"></div>
                                ))}
                                {/* Render the actual days */}
                                {daysInMonth.map((date) => {
                                    const dayEvents = getEventsForDate(date);
                                    const isSelected = selectedDate && isSameDay(date, selectedDate);
                                    const isToday = isSameDay(date, new Date());

                                    return (
                                        <div
                                            key={date.toString()}
                                            className={`academic-calendar-date ${!isSameMonth(date, currentDate) ? 'other-month' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                                            onClick={() => handleDateClick(date)}
                                        >
                                            <span className="academic-calendar-date-number">{format(date, 'd')}</span>
                                            {dayEvents.length > 0 && (
                                                <div className="academic-calendar-event-indicators">
                                                    {dayEvents.map(event => (
                                                        <button
                                                            key={event.id}
                                                            className="academic-calendar-event-indicator"
                                                            style={{ backgroundColor: eventTypes[event.type].color }}
                                                            onClick={(e) => handleEventClick(event, e)}
                                                        >
                                                            {event.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </>
                        )}

                        {view === 'week' && (
                            <>
                                {/* Render the actual days of the week */}
                                {daysInWeek.map((date) => {
                                    const dayEvents = getEventsForDate(date);
                                    const isSelected = selectedDate && isSameDay(date, selectedDate);
                                    const isToday = isSameDay(date, new Date());

                                    return (
                                        <div
                                            key={date.toString()}
                                            className={`academic-calendar-date ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                                            onClick={() => handleDateClick(date)}
                                        >
                                            <span className="academic-calendar-date-number">{format(date, 'd')}</span>
                                            {dayEvents.length > 0 && (
                                                <div className="academic-calendar-event-indicators">
                                                    {dayEvents.map(event => (
                                                        <button
                                                            key={event.id}
                                                            className="academic-calendar-event-indicator"
                                                            style={{ backgroundColor: eventTypes[event.type].color }}
                                                            onClick={(e) => handleEventClick(event, e)}
                                                        >
                                                            {event.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </>
                        )}

                        {view === 'day' && (
                            <>
                                {/* Render the single day */}
                                {daysInDay.map((date) => {
                                    const dayEvents = getEventsForDate(date);
                                    const isSelected = selectedDate && isSameDay(date, selectedDate);
                                    const isToday = isSameDay(date, new Date());

                                    return (
                                        <div
                                            key={date.toString()}
                                            className={`academic-calendar-date ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                                            onClick={() => handleDateClick(date)}
                                        >
                                            <span className="academic-calendar-date-number">{format(date, 'd')}</span>
                                            {dayEvents.length > 0 && (
                                                <div className="academic-calendar-event-indicators">
                                                    {dayEvents.map(event => (
                                                        <button
                                                            key={event.id}
                                                            className="academic-calendar-event-indicator"
                                                            style={{ backgroundColor: eventTypes[event.type].color }}
                                                            onClick={(e) => handleEventClick(event, e)}
                                                        >
                                                            {event.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>

                {selectedEvent && (
                    <div className="academic-calendar-event-modal-overlay" onClick={() => setSelectedEvent(null)}>
                        <div className="academic-calendar-event-modal" onClick={(e) => e.stopPropagation()}>
                            <button className="academic-calendar-close-button" onClick={() => setSelectedEvent(null)}>
                                ×
                            </button>
                            <div className="academic-calendar-event-content">
                                <div className="academic-calendar-event-header">
                                    <span className="academic-calendar-event-type-badge" style={{ backgroundColor: eventTypes[selectedEvent.type].color }}>
                                        {eventTypes[selectedEvent.type].label}
                                    </span>
                                    <h2>{selectedEvent.title}</h2>
                                </div>

                                <div className="academic-calendar-event-details">
                                    <div className="academic-calendar-event-date">
                                        <span>
                                            {format(parseISO(selectedEvent.date), 'MMM d, yyyy')}
                                            {selectedEvent.endDate && ` - ${format(parseISO(selectedEvent.endDate), 'MMM d, yyyy')}`}
                                        </span>
                                    </div>

                                    <div className="academic-calendar-event-description">
                                        <p>{selectedEvent.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
