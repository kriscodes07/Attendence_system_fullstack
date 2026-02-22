import { useEffect, useState } from "react";
import StudentCard from "./components/StudentCard.jsx";

function App() {

  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {

    fetch("http://localhost:8080/students")
      .then(res => res.json())
      .then(data => setStudents(data));

  }, []);

  const updateAttendance = (roll, status) => {

    setAttendance(prev => ({
      ...prev,
      [roll]: status
    }));

  };

  const presentCount = Object.values(attendance).filter(s => s === "present").length;

  const absentCount = Object.values(attendance).filter(s => s === "absent").length;

  const sortAbsent = () => {

    const sorted = [...students].sort((a, b) => {

      if (attendance[a.rollno] === "absent") return -1;
      if (attendance[b.rollno] === "absent") return 1;

      return 0;

    });

    setStudents(sorted);
  };

  return (
    <div className="app">

      <h1>Student Attendance</h1>

      <div className="stats">

        <h3>Present : {presentCount}</h3>
        <h3>Absent : {absentCount}</h3>

      </div>

      <button onClick={sortAbsent} className="sort-btn">
        Sort Absentees
      </button>

      <div className="card-container">

        {students.map(student => (
          <StudentCard
            key={student.rollno}
            student={student}
            updateAttendance={updateAttendance}
          />
        ))}

      </div>

    </div>
  );
}

export default App;