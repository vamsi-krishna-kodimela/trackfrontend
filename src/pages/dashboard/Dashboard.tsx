import React from "react";
import { Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import ShipmentListing from "./components/shipmentlisting/ShipmentListing";

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
              <ShipmentListing />
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
