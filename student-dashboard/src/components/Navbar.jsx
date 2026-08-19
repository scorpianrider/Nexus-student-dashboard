import { useNavigate } from "react-router-dom";
import { FiMenu, FiBell, FiLogOut } from "react-icons/fi";
import "../css/navbar.css";

const Navbar = ({ student, unreadCount = 0, onMenuClick, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("student");
    onLogout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="navbar-menu-btn" onClick={onMenuClick} aria-label="Open menu">
          <FiMenu />
        </button>
        <div className="navbar-student-info">
          <h3>{student?.name || "Student"}</h3>
          <span>
            {student?.department} &middot; {student?.semester}
          </span>
        </div>
      </div>

      <div className="navbar-right">
        <button
          className="navbar-icon-btn"
          onClick={() => navigate("/notifications")}
          aria-label="Notifications"
        >
          <FiBell />
          {unreadCount > 0 && <span className="navbar-badge">{unreadCount}</span>}
        </button>

        <button
          className="navbar-profile-btn"
          onClick={() => navigate("/profile")}
          aria-label="Profile"
        >
          <div className="navbar-avatar">
            {student?.name ? student.name.charAt(0) : "S"}
          </div>
        </button>

        <button className="navbar-icon-btn navbar-logout" onClick={handleLogout} aria-label="Log out">
          <FiLogOut />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
