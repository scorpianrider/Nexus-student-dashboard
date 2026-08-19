import "../css/dashboard.css";

const DashboardCard = ({ icon, label, value, suffix, tone = "primary" }) => {
  return (
    <div className="card stat-card">
      <div className={`stat-icon stat-icon-${tone}`}>{icon}</div>
      <div className="stat-info">
        <span className="stat-label">{label}</span>
        <h3 className="stat-value">
          {value}
          {suffix && <span className="stat-suffix">{suffix}</span>}
        </h3>
      </div>
    </div>
  );
};

export default DashboardCard;
