import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f5f8fb", padding: "1rem" }}>
      <div style={{ background: "#fff", borderRadius: "8px", padding: "2rem", width: "100%", maxWidth: "400px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Forgot Password</h2>
        <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          Enter your email and we'll send you a reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: 600, fontSize: "0.9rem" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            required
            style={{ display: "block", width: "100%", padding: "0.5rem", margin: "0.4rem 0 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "0.9rem" }}
          />
          {message && <p style={{ color: "green", fontSize: "0.85rem", marginBottom: "0.8rem" }}>{message}</p>}
          {error && <p style={{ color: "red", fontSize: "0.85rem", marginBottom: "0.8rem" }}>{error}</p>}
          <button type="submit" style={{ width: "100%", padding: "0.6rem", background: "#5865F2", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: 600 }}>
            Send Reset Email
          </button>
        </form>
        <p style={{ marginTop: "1rem", fontSize: "0.85rem", textAlign: "center" }}>
          <Link to="/login" style={{ color: "#5865F2" }}>Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
