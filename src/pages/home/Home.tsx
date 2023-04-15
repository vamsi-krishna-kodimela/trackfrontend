import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="section"></div>
      <div className="form">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
