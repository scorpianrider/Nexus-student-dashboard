import { FiCalendar, FiCheckCircle, FiClock } from "react-icons/fi";
import "../css/assignments.css";

const AssignmentCard = ({ assignment }) => {
  const isSubmitted = assignment.status === "Submitted";
  const dueDate = new Date(assignment.dueDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="card assignment-card">
      <div className="assignment-card-top">
        <span className="badge badge-info">{assignment.subject}</span>
        <span className={`badge ${isSubmitted ? "badge-success" : "badge-warning"}`}>
          {isSubmitted ? <FiCheckCircle /> : <FiClock />}
          {assignment.status}
        </span>
      </div>
      <h4 className="assignment-title">{assignment.title}</h4>
      <div className="assignment-due">
        <FiCalendar />
        <span>Due {dueDate}</span>
      </div>
    </div>
  );
};

export default AssignmentCard;
