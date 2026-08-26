import "./spinner.css";

export default function Spinner({ message = "Server wacht gerade auf..." }) {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <p className="loader-message">{message}</p>
        <small className="loader-hint">
          Dies kann bis zu 60 Sekunden dauern.
        </small>
        <div className="spinner"></div>
      </div>
    </div>
  );
}