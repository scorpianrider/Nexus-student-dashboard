import { useEffect, useState } from "react";
import TimetableCard from "../components/TimetableCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getTimetable } from "../services/api";
import "../css/timetable.css";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Timetable = ({ student }) => {
  const [data, setData] = useState(null);
  const today = dayNames[new Date().getDay()];

  useEffect(() => {
    getTimetable(student.id).then(setData);
  }, [student.id]);

  if (!data) return <LoadingSpinner label="Loading timetable..." />;

  return (
    <div>
      <div className="page-header">
        <h1>Weekly Timetable</h1>
        <p>Your class schedule, Monday through Friday.</p>
      </div>

      <div className="timetable-grid">
        {weekdays.map((day) => (
          <TimetableCard
            key={day}
            day={day}
            sessions={data[day] || []}
            highlight={day === today}
          />
        ))}
      </div>
    </div>
  );
};

export default Timetable;
