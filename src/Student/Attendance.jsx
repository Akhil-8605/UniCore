import { useState } from "react";
import { ChevronRight } from "lucide-react";
import CalendarView from "./AttendanceCalender";
import "./Attendance.css";
import StudentPortalLayout from "./StudentPortalLayout";

// Attendance data for each student
const studentsWithAbsences = {
  "Akhil Adam": ["2025-01-08", "2025-01-05", "2025-01-10"],
  "Onkar Saka": ["2025-01-03", "2025-01-15"],
  "Balaji Kokkul": ["2025-01-07", "2025-01-20"],
  "Sanju Kanaki": [] // No absences
};

const students = Object.keys(studentsWithAbsences);

export default function AttendancePage() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  
  // Start at January 1, 2025, which is the first date the calendar will show
  const startDate = new Date(2025, 0, 1); // January 1, 2025
  const today = new Date(); // Current date
  
  // Determine how many days until today
  const daysUntilToday = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));
  
  const absences = studentsWithAbsences[selectedStudent];
  
  const calculateAttendance = () => {
    const totalDays = daysUntilToday;
    const presentDays = totalDays - absences.length;
    return {
      attendancePercentage: ((presentDays / totalDays) * 100).toFixed(1),
      totalDays,
      presentDays,
      absentDays: absences.length
    };
  };

  const stats = calculateAttendance();

  const generateAttendanceData = () => {
    const attendanceData = {};
    
    // Add attendance for each day up until today, starting from January 1, 2025
    for (let i = 0; i < stats.totalDays; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);
      const dateString = currentDay.toISOString().split("T")[0];
      attendanceData[dateString] = absences.includes(dateString) ? false : true;
    }
    
    // Mark all future dates as blank (null)
    for (let i = stats.totalDays; i < 365; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);
      const dateString = currentDay.toISOString().split("T")[0];
      attendanceData[dateString] = null;
    }

    return attendanceData;
  };

  const attendanceData = generateAttendanceData();

  return (
    <div style={{ display: "flex" }}>
      <StudentPortalLayout />
      <div style={{ padding: "24px", width: "100%" }}>
        {/* Page Header */}
        <div className="attendance-page-content-header">
          {/* <h1 className="page-title">Attendance</h1> */}
        </div>

        <div className="attendance-page-grid-container">
          {/* Attendance Overview */}
          <div className="attendance-page-card">
            <div className="attendance-page-card-header">
              <h2 className="attendance-page-card-title">Attendance Overview</h2>
            </div>
            <div className="attendance-page-attendance-overview">
              <div className="attendance-page-attendance-percentage">
                {stats.attendancePercentage}%
              </div>
              <p className="attendance-page-attendance-label">Overall Attendance</p>
              <select
                className="attendance-page-student-select"
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
              >
                {students.map((student) => (
                  <option key={student} value={student}>
                    {student}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Attendance Calendar */}
          <div className="attendance-page-card">
            <div className="attendance-page-card-header">
              <h2 className="attendance-page-card-title">Attendance Calendar</h2>
            </div>
            <div style={{ padding: "16px" }}>
              <CalendarView attendanceData={attendanceData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
