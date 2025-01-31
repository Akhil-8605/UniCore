import { User, Mail, Phone, MapPin, BookOpen, Award, Clock, Edit, LogOut } from "lucide-react"
import StudentPortalLayout from "./StudentPortalLayout"
import "./Profile.css"
import Akhil from "../Images/PersonDummy.png"
import { Link } from "react-router-dom"

function ProfilePage() {
    const profile = {
        name: "Akhilesh A. Adam",
        role: "Computer Engineering Student",
        avatar: Akhil,
        studentId: "2205230055",
        email: "akhileshadam186@gmail.com",
        phone: "+91 8605050804",
        address: "323 Datta nager , Solapur - 413005",
        program: "Bachelor of Science in Computer Science",
        semester: "4th Semester",
        joinDate: "September 2022",
        stats: {
            courses: 69,
            certificates: 4,
            attendance: "99.9%",
        },
        academicInfo: {
            major: "Coding",
            minor: "Mathematics",
            advisor: "Mrs. Asade",
            status: "Full-time",
            // gpa: "7.0/10",
            // credits: "65/120",
            expectedGraduation: "June 2025",
            department: "Computer Engineering",
        },
        contactInfo: {
            email: "akhileshadam186@gmail.com",
            phone: "+91 8605050804",
            address: "323 Datta nager , Solapur - 413005",
            emergency: {
                name: "Ambadas Adam",
                relation: "Father",
                phone: "+91 9067068848",
            },
        },
    }

    return (
        <div className="profile-page-profile-container">
            <StudentPortalLayout />
            <div className="profile-page-profile-content">
                {/* <div className="page-header">
                    <h1 className="page-title">Student Profile</h1>
                    <button className="btn btn-outline">
                        <LogOut className="btn-icon" />
                        Logout
                    </button>
                </div> */}

                <div className="profile-page-profile-header">
                    <img src={profile.avatar || "/placeholder.svg"} alt={profile.name} className="profile-page-profile-avatar" />
                    <div className="profile-page-profile-info">
                        <h2 className="profile-page-profile-name">{profile.name}</h2>
                        <p className="profile-page-profile-role">{profile.role}</p>
                        <div className="profile-page-profile-stats">
                            {Object.entries(profile.stats).map(([key, value]) => (
                                <div key={key} className="profile-page-profile-stat">
                                    {key === "courses" && <BookOpen className="profile-page-profile-stat-icon" />}
                                    {key === "certificates" && <Award className="profile-page-profile-stat-icon" />}
                                    {key === "attendance" && <Clock className="profile-page-profile-stat-icon" />}
                                    <div>
                                        <span className="profile-page-profile-stat-value">{value}</span>
                                        <span className="profile-page-profile-stat-label"> {key}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <button className="profile-page-btn profile-page-btn-primary">
                            <Edit className="profile-page-btn-icon" />
                            Edit Profile
                        </button> */}
                    </div>
                </div>

                <div className="profile-page-section">
                    <h3 className="profile-page-section-title">
                        <BookOpen className="profile-page-profile-stat-icon" />
                        Academic Information
                    </h3>
                    <div className="profile-page-grid">
                        {Object.entries(profile.academicInfo).map(([key, value]) => (
                            <div key={key} className="profile-page-profile-field">
                                <div className="profile-page-profile-field-label">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                                <div className="profile-page-profile-field-value">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="profile-page-section">
                    <h3 className="profile-page-section-title">
                        <User className="profile-page-profile-stat-icon" />
                        Contact Information
                    </h3>
                    <div className="profile-page-grid">
                        <div className="profile-page-profile-field">
                            <div className="profile-page-profile-field-label">Email</div>
                            <div className="profile-page-profile-field-value profile-page-contact-info">
                                <Mail className="profile-page-contact-icon" />
                                {profile.contactInfo.email}
                            </div>
                        </div>
                        <div className="profile-page-profile-field">
                            <div className="profile-page-profile-field-label">Phone</div>
                            <div className="profile-page-profile-field-value profile-page-contact-info">
                                <Phone className="profile-page-contact-icon" />
                                {profile.contactInfo.phone}
                            </div>
                        </div>
                        <div className="profile-page-profile-field">
                            <div className="profile-page-profile-field-label">Address</div>
                            <div className="profile-page-profile-field-value contact-info">
                                <MapPin className="profile-page-contact-icon" />
                                {profile.contactInfo.address}
                            </div>
                        </div>
                        <div className="profile-page-profile-field">
                            <div className="profile-page-profile-field-label">Emergency Contact</div>
                            <div className="profile-page-profile-field-value">
                                <div>{profile.contactInfo.emergency.name}</div>
                                <div className="profile-page-profile-stat-label">
                                    {profile.contactInfo.emergency.relation} • {profile.contactInfo.emergency.phone}
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href={'/'}>
                        <button className="profile-page-btn profile-page-btn-outline" style={{ marginTop: '2rem' }}>
                            <LogOut className="profile-page-btn-icon" />
                            Logout
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

