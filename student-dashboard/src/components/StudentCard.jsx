import { FiEdit2 } from "react-icons/fi";
import "../css/profile.css";

const StudentCard = ({ student, onEdit }) => {
  return (
    <div className="card profile-card">
      <div className="profile-photo-wrap">
        <div className="profile-photo">{student.name.charAt(0)}</div>
      </div>
      <h2 className="profile-name">{student.name}</h2>
      <p className="profile-roll">{student.rollNumber}</p>
      <span className="badge badge-info">{student.department}</span>

      <div className="profile-details">
        <div className="profile-detail-row">
          <span>Year</span>
          <strong>{student.year}</strong>
        </div>
        <div className="profile-detail-row">
          <span>Semester</span>
          <strong>{student.semester}</strong>
        </div>
        <div className="profile-detail-row">
          <span>Email</span>
          <strong>{student.email}</strong>
        </div>
        <div className="profile-detail-row">
          <span>Phone</span>
          <strong>{student.phone}</strong>
        </div>
        <div className="profile-detail-row">
          <span>Blood Group</span>
          <strong>{student.bloodGroup}</strong>
        </div>
        <div className="profile-detail-row">
          <span>Address</span>
          <strong>{student.address}</strong>
        </div>
      </div>

      <button className="btn btn-outline profile-edit-btn" onClick={onEdit}>
        <FiEdit2 /> Edit Profile
      </button>
    </div>
  );
};

export default StudentCard;
