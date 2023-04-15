import React from "react";
import ConstString from "../../../config/cont-strings";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="secondary mb-3">{ConstString.APP_NAME}</h1>
      <h2 className="secondary ">Sign in to {ConstString.APP_NAME}.</h2>
      <p className="secondary f-2">
        Welcome! Please Sign in to access your account.
      </p>
      <div className="login-form w-2">
        <input
          type="email"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Email"
        />
        <input
          type="password"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Password"
        />
        <button className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1 light bg-primary">
          Sign In
        </button>
        <Link to="/register">
          <button className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1 light bg-primary outline border-primary">
            Register
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
