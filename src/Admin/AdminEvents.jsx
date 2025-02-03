import { useState } from "react";
import { Plus, Search, Pencil, Trash2, Calendar, Bell, GraduationCap, MapPin, Clock, ChevronRight, Sparkles } from "lucide-react";

import "./AdminEvents.css";
import AdminPortalLayout from "./AdminPortalLayout";
const EventsAdmin = () => {
    const [events, setEvents] = useState([
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
    ]);

    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        category: "",
        description: "",
        location: "",
        isHighlight: false,
    });

    const filteredEvents = events.filter((event) => {
        return (
            (event.title.toLowerCase().includes(search.toLowerCase()) ||
                event.description.toLowerCase().includes(search.toLowerCase())) &&
            (categoryFilter === "all" || event.category === categoryFilter)
        );
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            setEvents(
                events.map((event) =>
                    event.id === selectedEvent.id ? { ...formData, id: event.id } : event
                )
            );
        } else {
            setEvents([...events, { ...formData, id: `evt-${Date.now()}` }]);
        }
        closeForm();
    };

    const handleDelete = () => {
        setEvents(events.filter((event) => event.id !== selectedEvent.id));
        setIsDeleteOpen(false);
        setSelectedEvent(null);
    };

    const openForm = (event = null) => {
        setIsEdit(!!event);
        setSelectedEvent(event);
        setFormData(
            event || {
                title: "",
                date: "",
                time: "",
                category: "",
                description: "",
                location: "",
                isHighlight: false,
            }
        );
        setIsModalOpen(true);
    };

    const closeForm = () => {
        setIsModalOpen(false);
        setIsEdit(false);
        setFormData({
            title: "",
            date: "",
            time: "",
            category: "",
            description: "",
            location: "",
            isHighlight: false,
        });
    };


    const [isPreviewVisible, setPreviewVisible] = useState(false);

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


    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <AdminPortalLayout />
            <div className="admin-container">
                <div className="admin-header">
                    <h1>Events Management</h1>
                    <button className="add-button" onClick={() => openForm()}>
                        <Plus className="button-icon" />
                        Add Event
                    </button>
                </div>

                <div className="filters">
                    <div className="search-container">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="category-select">
                        <option value="all">All Categories</option>
                        <option value="event">Event</option>
                        <option value="registration">Registration</option>
                        <option value="announcement">Announcement</option>
                        <option value="exam">Exam</option>
                    </select>
                </div>

                <div className="table-container">
                    <table className="events-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEvents.map((event) => (
                                <tr key={event.id}>
                                    <td>{event.title}</td>
                                    <td>
                                        <span className={`category-badge ${event.category}`}>{event.category}</span>
                                    </td>
                                    <td>{event.date}</td>
                                    <td>{event.time}</td>
                                    <td>{event.location || "-"}</td>
                                    <td>{event.isHighlight && <span className="highlight-badge">Highlighted</span>}</td>
                                    <td className="actions">
                                        <button className="icon-button" onClick={() => openForm(event)}>
                                            <Pencil className="button-icon" />
                                        </button>
                                        <button className="icon-button delete" onClick={() => { setSelectedEvent(event); setIsDeleteOpen(true); }}>
                                            <Trash2 className="button-icon" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="preview-button-container">
                    <button className={`preview-button ${isPreviewVisible ? 'active' : ''}`} onClick={() => {
                        setPreviewVisible(!isPreviewVisible);
                    }}>Preview</button>
                </div>
                {isPreviewVisible && (
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
                )}

                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2>{isEdit ? "Edit Event" : "Add New Event"}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input name="title" value={formData.title} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label>Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange} required>
                                        <option value="">Select category</option>
                                        <option value="event">Event</option>
                                        <option value="registration">Registration</option>
                                        <option value="announcement">Announcement</option>
                                        <option value="exam">Exam</option>
                                    </select>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                                    </div>

                                    <div className="form-group">
                                        <label>Time</label>
                                        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label>Location (Optional)</label>
                                    <input name="location" value={formData.location} onChange={handleChange} />
                                </div>

                                <div className="form-group checkbox">
                                    <input type="checkbox" name="isHighlight" checked={formData.isHighlight} onChange={handleChange} />
                                    <label>Highlight this event</label>
                                </div>

                                <div className="modal-actions">
                                    <button type="button" className="cancel-button" onClick={closeForm}>Cancel</button>
                                    <button type="submit" className="submit-button">{isEdit ? "Update Event" : "Add Event"}</button>
                                </div>
                            </form>
                        </div>
                    </div>

                )}

                {isDeleteOpen && (
                    <div className="modal-overlay">
                        <div className="modal delete-modal">
                            <h2>Delete Event</h2>
                            <p>Are you sure you want to delete "{selectedEvent?.title}"?</p>
                            <div className="modal-actions">
                                <button className="cancel-button" onClick={() => setIsDeleteOpen(false)}>Cancel</button>
                                <button className="delete-button" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsAdmin;
