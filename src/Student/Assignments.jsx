import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import StudentPortalLayout from "./StudentPortalLayout";
import "./Assignments.css";

export default function AssignmentsPage() {
  const allAssignments = {
    Computer: [
      {
        subject: "Mobile Application Development (MAD)",
        title: "MAD Assingment 1",
        dueDate: "2025-02-05",
        details: "Write code for Design an Android app with basic UI.",
      },
      {
        subject: "(WBP) PHP",
        title: "PHP Assignment 2",
        dueDate: "2025-02-02",
        details: "Write all programs as per in assignment.",
      },
    ],
    Electronics: [
      {
        subject: "Digital Electronics",
        title: "Logic Gates & Boolean Algebra",
        dueDate: "2025-02-07",
        details: "Solve Boolean expressions and design basic logic circuits.",
      },
      {
        subject: "Microcontrollers",
        title: "8051 Architecture",
        dueDate: "2025-01-25",
        details: "Draw the architecture and explain key components of 8051.",
      },
    ],
    Mechanical: [
      {
        subject: "Thermodynamics",
        title: "Laws of Thermodynamics",
        dueDate: "2025-02-10",
        details: "Derive and explain all four laws with practical examples.",
      },
      {
        subject: "Strength of Materials",
        title: "Stress-Strain Analysis",
        dueDate: "2025-01-29",
        details: "Solve numerical problems on stress-strain relations.",
      },
    ],
  };


  const [selectedDepartment, setSelectedDepartment] = useState("Computer");

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Filter assignments to show only upcoming ones
  const upcomingAssignments = allAssignments[selectedDepartment].filter(
    (assignment) => assignment.dueDate >= today
  );

  return (
    <div className="assignments-page-container">
      <StudentPortalLayout />
      <div className="assignments-page-content">
        <div className="assignments-page-content-header">
          <h1 className="assignments-page-page-title">Upcoming Assignments</h1>
          <select
            className="assignments-page-department-select"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="Computer">Computer</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
          </select>
        </div>

        <div className="assignments-page-list">
          {upcomingAssignments.length > 0 ? (
            upcomingAssignments.map((assignment, index) => (
              <div key={index} className="assignments-page-card">
                <div className="assignments-page-header">
                  <div>
                    <h3 className="assignments-page-title">{assignment.title}</h3>
                    <p className="assignments-page-subject">{assignment.subject}</p>
                  </div>
                  <span className="assignments-page-due">Due: {assignment.dueDate}</span>
                </div>
                <p className="assignments-page-details">{assignment.details}</p>
              </div>
            ))
          ) : (
            <div className="assignments-page-card" style={{ textAlign: 'center', marginTop: '1rem' }}>
              <p className="assignments-page-no-assignments">No assignments right now.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
