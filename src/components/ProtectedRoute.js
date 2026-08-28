// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f8fb",
        flexDirection: "column",
        gap: "1rem"
      }}>
        <div style={{
          width: "40px",
          height: "40px",
          border: "4px solid #e0e0e0",
          borderTop: "4px solid #5865F2",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite"
        }} />
        <style>{"@keyframes spin { to { transform: rotate(360deg); } }"}</style>
        <p style={{ color: "#666", fontSize: "0.9rem" }}>Loading...</p>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;