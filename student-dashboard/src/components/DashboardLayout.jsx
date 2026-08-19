import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/common.css";

const DashboardLayout = ({ student, unreadCount, onLogout, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <Navbar
          student={student}
          unreadCount={unreadCount}
          onMenuClick={() => setSidebarOpen(true)}
          onLogout={onLogout}
        />
        <div className="page-content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
