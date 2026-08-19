import { useEffect, useState } from "react";
import { FiInbox } from "react-icons/fi";
import AssignmentCard from "../components/AssignmentCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getAssignments } from "../services/api";
import "../css/assignments.css";

const filters = ["All", "Pending", "Submitted"];

const Assignments = ({ student }) => {
  const [assignments, setAssignments] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getAssignments(student.id).then(setAssignments);
  }, [student.id]);

  if (!assignments) return <LoadingSpinner label="Loading assignments..." />;

  const filtered =
    filter === "All" ? assignments : assignments.filter((a) => a.status === filter);

  return (
    <div>
      <div className="page-header">
        <h1>Assignments</h1>
        <p>Track and manage your subject assignments.</p>
      </div>

      <div className="assignments-filter-bar">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card empty-state">
          <FiInbox />
          <p>No {filter.toLowerCase()} assignments.</p>
        </div>
      ) : (
        <div className="assignments-grid">
          {filtered.map((a) => (
            <AssignmentCard key={a.id} assignment={a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Assignments;
