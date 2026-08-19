import "../css/common.css";

const LoadingSpinner = ({ label = "Loading..." }) => {
  return (
    <div className="spinner-wrap">
      <div className="spinner" />
      <p>{label}</p>
    </div>
  );
};

export default LoadingSpinner;
