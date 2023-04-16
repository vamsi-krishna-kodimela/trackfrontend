import React from "react";
import "./Home.css";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state: any) => state.auth.user);
  // const generateRoute = () => {
  //   if (user.type === "Delivery Agent") {
  //     return "/dashboard/agent";
  //   }
  //   return "/dashboard/customer";
  // };
  return (
    <>
      {user && <Navigate to="/dashboard" />}

      <div className="home">
        <div className="section"></div>
        <div className="form">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
