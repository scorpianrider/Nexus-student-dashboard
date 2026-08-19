import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiCheckSquare,
  FiAward,
  FiClipboard,
  FiFileText,
  FiClock,
} from "react-icons/fi";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  getDashboardSummary,
  getAttendance,
  getAssignments,
  getAnnouncements,
  getTimetable,
  getResults,
} from "../services/api";
import "../css/dashboard.css";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Dashboard = ({ student }) => {
  const [summary, setSummary] = useState(null);
  const [attendanceOverview, setAttendanceOverview] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [todaySchedule, setTodaySchedule] = useState([]);
  const [recentResults, setRecentResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const todayName = days[new Date().getDay()];

  useEffect(() => {
    let mounted = true;
    Promise.all([
      getDashboardSummary(student.id),
      getAttendance(student.id),
      getAssignments(student.id),
      getAnnouncements(),
      getTimetable(student.id),
      getResults(student.id),
    ]).then(([summaryRes, attendanceRes, assignmentsRes, announcementsRes, timetableRes, resultsRes]) => {
      if (!mounted) return;
      setSummary(summaryRes);
      setAttendanceOverview(attendanceRes.overview);
      setAssignments(assignmentsRes.filter((a) => a.status === "Pending").slice(0, 4));
      setAnnouncements(announcementsRes.slice(0, 3));
      setTodaySchedule(timetableRes[todayName] || []);
      setRecentResults(resultsRes.subjects.slice(0, 4));
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [student.id, todayName]);

  if (loading || !summary) return <LoadingSpinner label="Loading your dashboard..." />;

  return (
    <div>
      <div className="page-header">
        <h1>Welcome back, {student.name.split(" ")[0]} 👋</h1>
        <p>Here's what's happening with your academics today.</p>
      </div>

      <div className="grid-cards">
        <DashboardCard icon={<FiCheckSquare />} label="Attendance" value={summary.attendance} suffix="%" tone="primary" />
        <DashboardCard icon={<FiAward />} label="CGPA" value={summary.cgpa} tone="success" />
        <DashboardCard icon={<FiClipboard />} label="Pending Assignments" value={summary.pendingAssignments} tone="warning" />
        <DashboardCard icon={<FiFileText />} label="Upcoming Exams" value={summary.upcomingExams} tone="danger" />
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-column">
          <div className="card chart-card">
            <div className="list-card-header">
              <h3 className="section-title" style={{ marginBottom: 0 }}>Attendance Progress</h3>
              <Link to="/attendance">View details</Link>
            </div>
            <Chart data={attendanceOverview} />
          </div>

          <div className="card list-card">
            <div className="list-card-header">
              <h3 className="section-title" style={{ marginBottom: 0 }}>Recent Results</h3>
              <Link to="/results">View all</Link>
            </div>
            <div className="mini-list">
              {recentResults.map((r) => (
                <div className="mini-list-item" key={r.subject}>
                  <div>
                    <div className="mini-list-title">{r.subject}</div>
                    <div className="mini-list-sub">Total: {r.total} / 100</div>
                  </div>
                  <span className="badge badge-success">{r.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard-column">
          <div className="card list-card">
            <div className="list-card-header">
              <h3 className="section-title" style={{ marginBottom: 0 }}>Today's Timetable</h3>
              <Link to="/timetable">Full week</Link>
            </div>
            {todaySchedule.length === 0 ? (
              <div className="empty-state">
                <FiClock />
                <p>No classes scheduled today.</p>
              </div>
            ) : (
              <div>
                {todaySchedule.map((s, idx) => (
                  <div className="today-timetable-item" key={idx}>
                    <span className="today-timetable-time">{s.time}</span>
                    <div>
                      <div className="mini-list-title">{s.subject}</div>
                      <div className="mini-list-sub">{s.room}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card list-card">
            <div className="list-card-header">
              <h3 className="section-title" style={{ marginBottom: 0 }}>Recent Announcements</h3>
              <Link to="/announcements">View all</Link>
            </div>
            <div className="mini-list">
              {announcements.map((a) => (
                <div className="mini-list-item" key={a.id}>
                  <div>
                    <div className="mini-list-title">{a.title}</div>
                    <div className="mini-list-sub">
                      {new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card list-card">
            <div className="list-card-header">
              <h3 className="section-title" style={{ marginBottom: 0 }}>Pending Assignments</h3>
              <Link to="/assignments">View all</Link>
            </div>
            <div className="mini-list">
              {assignments.map((a) => (
                <div className="mini-list-item" key={a.id}>
                  <div>
                    <div className="mini-list-title">{a.title}</div>
                    <div className="mini-list-sub">{a.subject}</div>
                  </div>
                  <span className="badge badge-warning">Pending</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
