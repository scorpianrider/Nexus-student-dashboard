import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getNotifications } from "../services/api";
import "../css/notifications.css";

const Notifications = ({ student }) => {
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotifications(student.id).then(setNotifications);
  }, [student.id]);

  if (!notifications) return <LoadingSpinner label="Loading notifications..." />;

  return (
    <div>
      <div className="page-header">
        <h1>Notifications</h1>
        <p>Stay up to date with assignments, attendance and exams.</p>
      </div>

      <div className="notifications-list">
        {notifications.map((n) => (
          <NotificationCard key={n.id} notification={n} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
