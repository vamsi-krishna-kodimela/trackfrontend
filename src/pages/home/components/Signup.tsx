import React, { useState } from "react";
import ConstString from "../../../config/cont-strings";
import { Link } from "react-router-dom";
import IAddress from "../../../interfaces/address.interface";
import authService from "../../../services/auth.service";

const SignUp = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    type: "",
  });

  const [address, setAddress] = useState<IAddress>({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handleUserChange = (key: string, value: string) => {
    const data: any = { ...user };
    data[key] = value;
    setuser(data);
  };

  const handleAddressChange = (key: string, value: string) => {
    const data: any = { ...address };
    data[key] = value;
    setAddress(data);
  };

  const registerUser = () => {
    const payload = { ...user, address: { ...address } };
    authService
      .register(payload)
      .then((data) => {})
      .catch((err) => {});
  };
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
          value={user.name}
          onChange={(e) => handleUserChange("name", e.target.value)}
        />
        <input
          type="email"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Email"
          value={user.email}
          onChange={(e) => handleUserChange("email", e.target.value)}
        />
        <input
          type="tel"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Mobile Number"
          value={user.mobile}
          onChange={(e) => handleUserChange("mobile", e.target.value)}
        />
        <input
          type="password"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Password"
          value={user.password}
          onChange={(e) => handleUserChange("password", e.target.value)}
        />
        <select
          name="type"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          onChange={(e) => handleUserChange("type", e.target.value)}
          value={user.type}
        >
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
          value={address.address}
          onChange={(e) => handleAddressChange("address", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Ciy"
          value={address.city}
          onChange={(e) => handleAddressChange("city", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="State"
          value={address.state}
          onChange={(e) => handleAddressChange("state", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Country"
          value={address.country}
          onChange={(e) => handleAddressChange("country", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Pincode"
          value={address.pincode}
          onChange={(e) => handleAddressChange("pincode", e.target.value)}
        />

        <button
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1 light bg-primary"
          onClick={registerUser}
        >
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
