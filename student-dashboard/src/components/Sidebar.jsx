import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiUser,
  FiBarChart2,
  FiCheckSquare,
  FiClipboard,
  FiCalendar,
  FiBell,
  FiVolume2,
  FiX,
} from "react-icons/fi";
import "../css/navbar.css";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: <FiGrid /> },
  { to: "/profile", label: "Profile", icon: <FiUser /> },
  { to: "/results", label: "Academic Results", icon: <FiBarChart2 /> },
  { to: "/attendance", label: "Attendance", icon: <FiCheckSquare /> },
  { to: "/assignments", label: "Assignments", icon: <FiClipboard /> },
  { to: "/timetable", label: "Timetable", icon: <FiCalendar /> },
  { to: "/announcements", label: "Announcements", icon: <FiVolume2 /> },
  { to: "/notifications", label: "Notifications", icon: <FiBell /> },
];

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="sidebar-logo">N</div>
          <div>
            <h2>Nexus Portal</h2>
            <span>Student Dashboard</span>
          </div>
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
            <FiX />
          </button>
        </div>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
            >
              <span className="sidebar-icon">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer-note">
          <p>Nexus College of Engineering</p>
          <span>Student Information System</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
