import { useEffect, useState } from "react";
import MarksTable from "../components/MarksTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { getResults } from "../services/api";
import "../css/results.css";

const Results = ({ student }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getResults(student.id).then(setData);
  }, [student.id]);

  if (!data) return <LoadingSpinner label="Loading results..." />;

  return (
    <div>
      <div className="page-header">
        <h1>Academic Results</h1>
        <p>Semester-wise marks and grade summary.</p>
      </div>

      <div className="results-summary">
        <div className="card results-summary-card">
          <span>Semester GPA</span>
          <h2>{data.semesterGpa}</h2>
        </div>
        <div className="card results-summary-card">
          <span>Overall CGPA</span>
          <h2>{data.overallCgpa}</h2>
        </div>
      </div>

      <MarksTable subjects={data.subjects} />
    </div>
  );
};

export default Results;
