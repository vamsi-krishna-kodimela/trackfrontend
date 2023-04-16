import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./Dashboard.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state: any) => state.auth?.user);
  return (
    <>
      {user ? (
        <div className="dashboard">
          <Header />
          <div className="content">
            <Sidebar />
            <div className="conent-wrapper">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Dashboard;
