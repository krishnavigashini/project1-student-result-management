// StudentList.js
import React, { useState } from 'react';
import "./Attendance.css"

const StudentList = () => {
  const [name, setName] = useState('');
  const [students, setStudents] = useState([]);
  const [attendanceDates, setAttendanceDates] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '') {
      setStudents([...students, name]);
      setAttendanceData((prevAttendanceData) => ({
        ...prevAttendanceData,
        [name]: {
          attendance: {},
          percentage: 0,
        },
      }));
      setName('');
    }
  };

  const handleAttendanceChange = (studentName, date) => {
    setAttendanceData((prevAttendanceData) => ({
      ...prevAttendanceData,
      [studentName]: {
        ...prevAttendanceData[studentName],
        attendance: {
          ...prevAttendanceData[studentName].attendance,
          [date]: !prevAttendanceData[studentName].attendance[date],
        },
      },
    }));
  };

  const handlePercentageChange = (studentName, percentage) => {
    setAttendanceData((prevAttendanceData) => ({
      ...prevAttendanceData,
      [studentName]: {
        ...prevAttendanceData[studentName],
        percentage: parseFloat(percentage),
      },
    }));
  };

  const handlePostAttendance = async () => {
    try {
      const response = await fetch('https://api.example.com/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData),
      });

      if (!response.ok) {
        throw new Error('Failed to post attendance data');
      }

      // Reset the attendance data after successful post
      setAttendanceData({});
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className='atten'>
    <center>
      <h2 style={{textAlign:"center"}}>Student List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter student name"
        />
        <button type="submit">Add Student</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {attendanceDates.map((date) => (
              <th key={date}>{date}</th>
            ))}
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student}>
              <td>{student}</td>
              {attendanceDates.map((date) => (
                <td key={date}>
                  <input
                    type="checkbox"
                    checked={attendanceData[student]?.attendance[date] || false}
                    onChange={() => handleAttendanceChange(student, date)}
                  />
                </td>
              ))}
              <td>
                <input
                  type="number"
                  value={attendanceData[student]?.percentage || ''}
                  onChange={(e) => handlePercentageChange(student, e.target.value)}
                  step="0.01"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePostAttendance}>Submit Attendance</button>
      </center>
    </div>
  );
};

export default StudentList;
