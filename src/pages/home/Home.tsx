import React from "react";
import "./Home.css";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state: any) => {
    console.log(state);

    return state.auth.user;
  });
  const generateRoute = () => {
    if (user.type === "Delivery Agent") {
      return "/dashboard/agent";
    }
    return "/dashboard/customer";
  };
  return (
    <>
      {user && <Navigate to={generateRoute()} />}

      <div className="home">
        <div className="section">{user?.type}</div>
        <div className="form">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
