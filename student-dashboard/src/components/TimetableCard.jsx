import { FiClock, FiMapPin } from "react-icons/fi";
import "../css/timetable.css";

const TimetableCard = ({ day, sessions, highlight }) => {
  return (
    <div className={`card timetable-day-card ${highlight ? "timetable-today" : ""}`}>
      <div className="timetable-day-header">
        <h4>{day}</h4>
        {highlight && <span className="badge badge-info">Today</span>}
      </div>
      <ul className="timetable-sessions">
        {sessions.map((session, idx) => (
          <li key={idx}>
            <div className="timetable-time">
              <FiClock />
              <span>{session.time}</span>
            </div>
            <div className="timetable-subject-info">
              <strong>{session.subject}</strong>
              <span className="timetable-room">
                <FiMapPin /> {session.room}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimetableCard;
