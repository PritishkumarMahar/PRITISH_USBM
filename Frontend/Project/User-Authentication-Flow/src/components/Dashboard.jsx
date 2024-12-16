// import React from "react";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <p>This is a protected route.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
