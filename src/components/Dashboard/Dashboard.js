import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Bayer Health</h2>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="#">Health Metrics</Link></li>
          <li><Link to="#">Messages</Link></li>
          <li><Link to="#">Logout</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h1>Welcome, Ganesh!</h1>

        {/* Health Metrics Section */}
        <section className="metrics">
          <h2>Health Metrics</h2>
          <div className="metrics-container">
            <div className="heart-rate">
              <p>Heart Rate</p>
              <div className="gauge">
                <span>82.83 bpm</span>
              </div>
            </div>
            <div className="metric-card">
              <p>Body Temperature</p>
              <h3>33.90 °C</h3>
            </div>
            <div className="metric-card">
              <p>Blood Glucose</p>
              <h3>114.77 mg/dL</h3>
            </div>
          </div>
        </section>

        {/* Health Tip Section */}
        <section className="health-tip">
          <h2>Health Tip of the Day</h2>
          <p>Stay hydrated! Aim to drink at least 8 glasses of water per day.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
