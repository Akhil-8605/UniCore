import React, { useState } from 'react';
import TimeTable2I from '../Documents/TimeTable6I.png';
import TimeTable4I from '../Documents/TimeTable6I.png';
import TimeTable6I from '../Documents/TimeTable6I.png';
import StudentPortalLayout from './StudentPortalLayout';
import "./Certificates.css"
function Schedules() {
    const [selectedTimetable, setSelectedTimetable] = useState('6I');

    // Map timetable options to corresponding image files
    const timetables = {
        '2I': TimeTable2I,
        '4I': TimeTable4I,
        '6I': TimeTable6I,
    };

    const handleTimetableChange = (event) => {
        setSelectedTimetable(event.target.value);
    };

    return (
        <div className="certificates-page-certificates-container">
            <StudentPortalLayout />
            <main className="certificates-page-certificates-main">
                <div className="certificates-page-certificates-content">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>Class Schedules</h1>
                        <select
                            id="timetable-select"
                            value={selectedTimetable}
                            onChange={handleTimetableChange}
                            style={{
                                margin: '16px 0',
                                fontSize: '16px',
                                borderRadius: '4px',
                                width: '100px',
                                height: '40px'
                            }}
                        >
                            <option value="2I">CO2I</option>
                            <option value="4I">CO4I</option>
                            <option value="6I">CO6I</option>
                        </select>
                    </div>
                    <div style={{ width: '80%', margin: '0 auto', paddingTop: '2rem' }}>
                        <img
                            src={timetables[selectedTimetable]}
                            alt={`Timetable ${selectedTimetable}`}
                            style={{ width: '100%', height: '100%', borderRadius: '19px' }}
                        />
                    </div>
                </div>
            </main >
        </div >
    );
}

export default Schedules;
