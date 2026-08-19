import "../css/results.css";

const gradeTone = (grade) => {
  if (grade.startsWith("A")) return "success";
  if (grade.startsWith("B")) return "warning";
  return "danger";
};

const MarksTable = ({ subjects }) => {
  return (
    <div className="card marks-table-wrap">
      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Internal</th>
            <th>External</th>
            <th>Total</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((row) => (
            <tr key={row.subject}>
              <td className="marks-subject">{row.subject}</td>
              <td>{row.internal}</td>
              <td>{row.external}</td>
              <td className="marks-total">{row.total}</td>
              <td>
                <span className={`badge badge-${gradeTone(row.grade)}`}>{row.grade}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksTable;
