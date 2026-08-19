import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Attendance from "./pages/Attendance";
import Results from "./pages/Results";
import Assignments from "./pages/Assignments";
import Timetable from "./pages/Timetable";
import Announcements from "./pages/Announcements";
import Notifications from "./pages/Notifications";
import DashboardLayout from "./components/DashboardLayout";
import LoadingSpinner from "./components/LoadingSpinner";
import { getNotifications } from "./services/api";

function App() {
  const [student, setStudent] = useState(undefined); // undefined = still checking
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("student");
    setStudent(stored ? JSON.parse(stored) : null);
  }, []);

  useEffect(() => {
    if (student) {
      getNotifications(student.id).then((list) =>
        setUnreadCount(list.filter((n) => !n.read).length)
      );
    }
  }, [student]);

  if (student === undefined) return <LoadingSpinner label="Starting up..." />;

  const withLayout = (PageComponent) => (
    <DashboardLayout student={student} unreadCount={unreadCount} onLogout={() => setStudent(null)}>
      <PageComponent student={student} />
    </DashboardLayout>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            student ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLogin={(studentData) => setStudent(studentData)} />
            )
          }
        />

        {student ? (
          <>
            <Route path="/dashboard" element={withLayout(Dashboard)} />
            <Route path="/profile" element={withLayout(Profile)} />
            <Route path="/attendance" element={withLayout(Attendance)} />
            <Route path="/results" element={withLayout(Results)} />
            <Route path="/assignments" element={withLayout(Assignments)} />
            <Route path="/timetable" element={withLayout(Timetable)} />
            <Route path="/announcements" element={withLayout(Announcements)} />
            <Route path="/notifications" element={withLayout(Notifications)} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
