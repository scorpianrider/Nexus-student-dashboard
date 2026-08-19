import { FiClipboard, FiCheckSquare, FiFileText, FiVolume2 } from "react-icons/fi";
import "../css/notifications.css";

const iconMap = {
  assignment: <FiClipboard />,
  attendance: <FiCheckSquare />,
  exam: <FiFileText />,
  announcement: <FiVolume2 />,
};

const NotificationCard = ({ notification }) => {
  return (
    <div className={`card notification-row ${!notification.read ? "unread" : ""}`}>
      <div className={`notification-icon notification-icon-${notification.type}`}>
        {iconMap[notification.type] || <FiFileText />}
      </div>
      <div className="notification-body">
        <p>{notification.message}</p>
        <span>{notification.time}</span>
      </div>
      {!notification.read && <span className="notification-dot" />}
    </div>
  );
};

export default NotificationCard;
