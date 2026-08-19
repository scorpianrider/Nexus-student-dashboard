import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHash, FiLock, FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import { login } from "../services/api";
import Modal from "../components/Modal";
import "../css/login.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!rollNumber.trim() || !password.trim()) {
      setError("Please enter both roll number and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await login(rollNumber.trim(), password);
      if (res.success) {
        localStorage.setItem("student", JSON.stringify(res.student));
        onLogin(res.student);
        navigate("/dashboard");
      } else {
        setError(res.message || "Invalid roll number or password.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-shell">
        <aside className="login-aside">
          <div className="login-aside-brand">
            <div className="login-aside-logo">N</div>
            <span>Nexus Portal</span>
          </div>

          <div className="login-aside-headline">
            <h1>Everything about your semester, in one place.</h1>
            <p>
              Track attendance, results, assignments and announcements from a
              single, clean dashboard built for students.
            </p>
          </div>

          <div className="login-aside-foot">
            Nexus College of Engineering &middot; Student Information System
          </div>
        </aside>

        <div className="login-form-side">
          <h2>Welcome back</h2>
          <p>Sign in with your roll number to access your dashboard.</p>

          {error && (
            <div className="login-error">
              <FiAlertCircle style={{ marginRight: 6, verticalAlign: "middle" }} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="login-field">
              <label htmlFor="rollNumber">Roll Number</label>
              <div className="login-input-wrap">
                <FiHash />
                <input
                  id="rollNumber"
                  type="text"
                  placeholder="e.g. 21CS045"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <div className="login-input-wrap">
                <FiLock />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="login-row">
              <button
                type="button"
                className="login-forgot"
                onClick={() => setShowForgot(true)}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn btn-primary login-submit" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          {/* <p className="login-hint">Demo credentials: 21CS045 / password123</p> */}
        </div>
      </div>

      {showForgot && (
        <Modal title="Forgot Password" onClose={() => setShowForgot(false)}>
          <p>
            Password reset isn't available in this preview. In the live portal,
            you'd receive a reset link at your registered email address.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Login;
