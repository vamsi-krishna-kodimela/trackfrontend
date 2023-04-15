import React from "react";
import ConstString from "../../../config/cont-strings";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h1 className="secondary mb-3">{ConstString.APP_NAME}</h1>
      <h2 className="secondary ">Sign up to {ConstString.APP_NAME}.</h2>
      <p className="secondary f-2">
        Welcome! Please Sign up to book your shipment.
      </p>
      <div className="login-form w-2">
        <input
          type="text"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Name"
        />
        <input
          type="email"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Email"
        />
        <input
          type="tel"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Mobile Number"
        />
        <input
          type="password"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Password"
        />
        <select name="type" className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1">
          <option value="" disabled selected>
            Select User Type
          </option>
          <option value="Customer">Customer</option>
          <option value="Delivery Agent">Delivery Agent</option>
        </select>
        <h3>Address</h3>
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Address Line"
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Ciy"
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="State"
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Country"
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Pincode"
        />

        <button className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1 light bg-primary">
          Register
        </button>
        <Link to="/">
          <button className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1 light bg-primary outline border-primary">
            Sign In
          </button>
        </Link>
      </div>
    </>
  );
};

export default SignUp;
