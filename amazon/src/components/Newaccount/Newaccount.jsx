import "./Newaccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Newaccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState("");        // Error message from backend

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send registration data to backend
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      alert(response.data); // Backend success message
      navigate("/login");   // Redirect to login page

    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data); // Show backend error
      } else {
        setError("Registration failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newaccount-container">
      <div className="newaccount-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/250px-Amazon_2024.svg.png"
          alt="Amazon Logo"
        />
      </div>

      <div className="newaccount-form">
        <form onSubmit={handleSubmit}>
          <h2>Create account</h2>

          {error && <p className="error-message">{error}</p>}

          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="First and last name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@gmail.com"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="At least 6 characters"
          />

          <label>Re-enter password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm password"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Create your Amazon account"}
          </button>

          <p>
            Already have an account?{" "}
            <span
              style={{ color: "#0066c0", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Newaccount;
