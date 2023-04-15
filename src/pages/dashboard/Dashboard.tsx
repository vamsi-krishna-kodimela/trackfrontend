import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="conent-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
