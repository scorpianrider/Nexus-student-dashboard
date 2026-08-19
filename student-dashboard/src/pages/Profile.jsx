import { useState } from "react";
import StudentCard from "../components/StudentCard";
import Modal from "../components/Modal";
import "../css/profile.css";

const Profile = ({ student }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h1>Student Profile</h1>
        <p>Your personal and academic information.</p>
      </div>

      <StudentCard student={student} onEdit={() => setShowEditModal(true)} />

      {showEditModal && (
        <Modal
          title="Edit Profile"
          onClose={() => setShowEditModal(false)}
          actions={
            <button className="btn btn-primary" onClick={() => setShowEditModal(false)}>
              Got it
            </button>
          }
        >
          <p>
            Profile editing isn't wired up in this preview — it's UI only for
            now. In the full version, this would let you update your contact
            details and address.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Profile;
