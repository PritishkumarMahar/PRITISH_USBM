// import React from "react";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <h2>Welcome to your Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
