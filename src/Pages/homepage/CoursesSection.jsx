import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CoursesSection.css';

const courses = [
    {
        id: 'computer',
        name: 'Computer Engg.',
        image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1200',
        description: 'The department of Computer Engineering is concerned with the theory, design, development and application of computer system.',
    },
    {
        id: 'mechanical',
        name: 'Mechanical Engg.',
        image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200',
        description: 'The Mechanical Engineering deals with design and production of machines, tools, and plays an important role in automobile sector, railways and aerospace systems.',
    },
    {
        id: 'electronics',
        name: 'Electronics And Telecomm. Engg.',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200',
        description: 'The department of Electronics & Telecommunication Engineering strive to achieve excellence in education so as to enable students to establish themselves as.',
    }
];

const CoursesSection = () => {
    return (
        <section className="courses-section">
            <div className="courses-section-courses-container">
                <h2 className="courses-section-courses-title">Our Courses</h2>
                <div className="courses-section-courses-grid">
                    {courses.map((course) => (
                        <a
                            key={course.id}
                            href={`/courses/${course.id}`}
                            className="courses-section-course-card"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/courses/${course.id}`;
                            }}
                        >
                            <img
                                src={course.image}
                                alt={course.name}
                                className="courses-section-course-image"
                            />
                            <div className="courses-section-course-content">
                                <h3 className="courses-section-course-name">{course.name}</h3>
                                <p className="courses-section-course-description">{course.description}</p>
                                <span className="courses-section-read-more">
                                    Read more <ArrowRight size={16} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;