import React from "react";
import { Link } from "react-router-dom";
import ConstString from "../../../../config/cont-strings";
import "./CreateShipment.css";
import { FiX } from "react-icons/fi";
import Colors from "../../../../config/colors";

const CreateShipment = () => {
  return (
    <div className="create-form">
      <div className="cancel-btn">
        <FiX color={Colors.secondary} />
      </div>

      <h2 className="secondary ">Book a Shipment</h2>
      <p className="secondary f-2">
        We will pick from you and delivery it anywhere in India
      </p>
      <div className="w-4">
        <input
          type="number"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Package Weght in KG"
          min="0"
        />
        <h3>Pickup Details</h3>
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
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
        <h4>Pickup Address</h4>
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
        <h3>Delivery Details</h3>
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
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
        <h4>Delivery Address</h4>
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
          Book Shipment
        </button>
      </div>
    </div>
  );
};

export default CreateShipment;
