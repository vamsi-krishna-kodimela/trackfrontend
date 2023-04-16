import React, { useEffect, useState } from "react";
import ConstString from "../../../config/cont-strings";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/auth.slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state: any) => {
    const userdata = state.auth.user;
    return userdata;
  });

  const signin = () => {
    authService.login({ email, password }).then((res: any) => {
      const data = res.data;
      dispatch(login(data));
      if (data.type === "Delivery Agent") {
        navigate("/dashboard/agent");
      } else {
        navigate("/dashboard/customer");
      }
    });
  };
  setTimeout(() => {
    if (user) {
      if (user.type === "Delivery Agent") {
        navigate("/dashboard/agent");
      } else {
        navigate("/dashboard/customer");
      }
    }
  }, 500);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1 light bg-primary"
          onClick={signin}
        >
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
