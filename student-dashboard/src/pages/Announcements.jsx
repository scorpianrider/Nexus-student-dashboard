import { useEffect, useState } from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getAnnouncements } from "../services/api";
import "../css/announcements.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState(null);

  useEffect(() => {
    getAnnouncements().then(setAnnouncements);
  }, []);

  if (!announcements) return <LoadingSpinner label="Loading announcements..." />;

  return (
    <div>
      <div className="page-header">
        <h1>Announcements</h1>
        <p>Latest updates from the college administration.</p>
      </div>

      <div className="announcements-list">
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} announcement={a} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
