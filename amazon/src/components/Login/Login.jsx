import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);// loading state
  const [error, setError] = useState("");        // backend error

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password
      });

      alert(response.data); // "Login successful"
      navigate("/");        // Redirect to homepage

    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data); // show backend error
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <img
        className="login-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/250px-Amazon_2024.svg.png"
        alt="Amazon Logo"
      />

      <div className="login-box">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">Sign in or create account</h2>

          {error && <p className="error-message">{error}</p>}

          <label className="login-label">Email</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@gmail.com"
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Continue"}
          </button>

          <p className="login-info">
            By continuing, you agree to Amazon's{" "}
            <span>Conditions of Use</span>  <br />and <span>Privacy Notice</span>.
          </p>

          <hr className="line"/>

          <p className="create">
            New to Amazon?{" "}
            <span
              style={{ color: "#0066c0", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Create account
            </span>
          </p>
        </form>
      </div>

      <footer className="login-footer">
        <hr />
        <ul className="footer-links">
          <li>Conditions of Use</li>
          <li>Privacy Notice</li>
          <li>Help</li>
        </ul>

        <p className="footer-copy">
          &copy; 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
};

export default Login;
