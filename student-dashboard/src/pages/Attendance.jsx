import { useEffect, useState } from "react";
import AttendanceCard from "../components/AttendanceCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getAttendance } from "../services/api";
import "../css/attendance.css";

const Attendance = ({ student }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAttendance(student.id).then(setData);
  }, [student.id]);

  if (!data) return <LoadingSpinner label="Loading attendance..." />;

  const totalAttended = data.subjects.reduce((sum, s) => sum + s.attended, 0);
  const totalClasses = data.subjects.reduce((sum, s) => sum + s.total, 0);
  const overallPct = Math.round((totalAttended / totalClasses) * 100);

  return (
    <div>
      <div className="page-header">
        <h1>Attendance</h1>
        <p>Subject-wise attendance for the current semester.</p>
      </div>

      <div className="card attendance-summary">
        <div className="attendance-ring-wrap">
          <svg viewBox="0 0 96 96" width="96" height="96">
            <circle cx="48" cy="48" r="42" fill="none" stroke="#e5e9f0" strokeWidth="10" />
            <circle
              cx="48"
              cy="48"
              r="42"
              fill="none"
              stroke="#2563eb"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={2 * Math.PI * 42 * (1 - overallPct / 100)}
              transform="rotate(-90 48 48)"
            />
          </svg>
          <div className="attendance-ring-value">{overallPct}%</div>
        </div>
        <div className="attendance-summary-text">
          <h3>Overall Attendance</h3>
          <p>
            {totalAttended} of {totalClasses} classes attended across {data.subjects.length}{" "}
            subjects. {overallPct >= 75 ? "You're in good standing." : "Attendance is below the 75% requirement."}
          </p>
        </div>
      </div>

      <div className="attendance-list">
        {data.subjects.map((s) => (
          <AttendanceCard key={s.subject} subject={s.subject} attended={s.attended} total={s.total} />
        ))}
      </div>
    </div>
  );
};

export default Attendance;
