import "../css/attendance.css";

const getTone = (pct) => {
  if (pct >= 85) return "success";
  if (pct >= 75) return "warning";
  return "danger";
};

const AttendanceCard = ({ subject, attended, total }) => {
  const pct = Math.round((attended / total) * 100);
  const tone = getTone(pct);

  return (
    <div className="card attendance-row">
      <div className="attendance-row-top">
        <span className="attendance-subject">{subject}</span>
        <span className={`badge badge-${tone}`}>{pct}%</span>
      </div>
      <div className="progress-track">
        <div
          className={`progress-fill progress-${tone}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="attendance-row-bottom">
        <span>
          {attended} / {total} classes attended
        </span>
      </div>
    </div>
  );
};

export default AttendanceCard;
