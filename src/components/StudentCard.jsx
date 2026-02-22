import { useState } from "react";

function StudentCard({ student, updateAttendance }) {

  const [status, setStatus] = useState("none");

  const handleClick = () => {

    let newStatus;

    if (status === "none") newStatus = "absent";
    else if (status === "absent") newStatus = "present";
    else newStatus = "none";

    setStatus(newStatus);
    updateAttendance(student.rollno, newStatus);
  };

  return (
    <div className={`card ${status}`} onClick={handleClick}>

      <h3>{student.name}</h3>
      <p>Roll No: {student.rollno}</p>
      <p>Section: {student.section}</p>
      <p>Branch: {student.branch}</p>

    </div>
  );
}

export default StudentCard;