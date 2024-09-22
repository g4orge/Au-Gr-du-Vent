import React, { useState } from 'react';

const AttendancePage = () => {
    const [students, setStudents] = useState([
        { name: 'John Doe', present: false },
        { name: 'Jane Smith', present: false },
        { name: 'Alice Johnson', present: false },
    ]);

    const toggleAttendance = (index) => {
        const newStudents = [...students];
        newStudents[index].present = !newStudents[index].present;
        setStudents(newStudents);
    };

    return (
        <div>
            <h1>Attendance Tracker</h1>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.name} - {student.present ? 'Present' : 'Absent'}
                        <button onClick={() => toggleAttendance(index)}>
                            Mark {student.present ? 'Absent' : 'Present'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttendancePage;