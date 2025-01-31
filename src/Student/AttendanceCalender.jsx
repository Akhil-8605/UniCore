import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Attendance.css";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export default function CalendarView({ attendanceData }) {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)); // Start at January 1, 2025
    const today = new Date(); // Current date

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div>
            {/* Header */}
            <div className="attendance-page-calendar-header">
                <button className="attendance-page-calendar-nav-button" onClick={prevMonth}>
                    <ChevronLeft style={{ width: "16px", height: "16px" }} />
                </button>
                <h2 className="attendance-page-calendar-month-year">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <button className="attendance-page-calendar-nav-button" onClick={nextMonth}>
                    <ChevronRight style={{ width: "16px", height: "16px" }} />
                </button>
            </div>

            {/* Days Grid */}
            <div className="attendance-page-calendar-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="attendance-page-calendar-day-label">
                        {day}
                    </div>
                ))}
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const dateString = date.toISOString().split("T")[0];

                    // Adjust absence logic: Subtract one day to make the absence appear one day earlier
                    const adjustedDate = new Date(date);
                    adjustedDate.setDate(date.getDate() + 1); // Corrected to subtract one day
                    const adjustedDateString = adjustedDate.toISOString().split("T")[0];

                    const isPresent = attendanceData[adjustedDateString]; // Check attendance one day earlier
                    const isAbsent = !isPresent; // If attendance is false
                    const isFuture = date > today; // If the date is after today
                    const isPast = date < new Date(2025, 0, 1); // If the date is before January 1, 2025

                    // Fix for current day bug: Ensure that today's date is not marked absent by default
                    const isToday = 
                    date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth() &&
                    date.getDate() === today.getDate(); // Check if it's today

                    let dayClass = "attendance-page-calendar-day";

                    // Mark the days before January 1, 2025, as past
                    if (isPast) {
                        dayClass += " attendance-page-calendar-day-past";
                    } else if (isFuture) {
                        dayClass += " attendance-page-calendar-day-future";
                    } else if (isPresent) {
                        dayClass += " attendance-page-calendar-day-present";
                    } else if (isAbsent && !isToday) { // Only mark absent if it's not today
                        dayClass += " attendance-page-calendar-day-absent";
                    }

                    // Add a special class for today
                    if (isToday) {
                        dayClass += " attendance-page-calendar-day-today";
                    }

                    return (
                        <div key={day} className={dayClass}>
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
