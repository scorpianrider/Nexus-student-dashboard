import { FiVolume2 } from "react-icons/fi";
import "../css/announcements.css";

const AnnouncementCard = ({ announcement }) => {
  const date = new Date(announcement.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="card announcement-card">
      <div className="announcement-icon">
        <FiVolume2 />
      </div>
      <div className="announcement-content">
        <div className="announcement-top">
          <h4>{announcement.title}</h4>
          <span className="announcement-date">{date}</span>
        </div>
        <p>{announcement.description}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
